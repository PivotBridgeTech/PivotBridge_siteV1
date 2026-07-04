import secrets
import time
from collections import defaultdict

from fastapi import (
    BackgroundTasks, Depends, FastAPI, Header, HTTPException, Query, Request,
)
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from . import models
from .config import settings
from .database import Base, engine, get_db
from .email_utils import notify_new_lead
from .schemas import LeadCreate, LeadOut

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Pivot Bridge API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.origins_list,
    allow_methods=["*"],
    allow_headers=["*"],
)

# The key shipped in .env.example. If it's still in use, the leads endpoint
# stays closed — otherwise anyone who read the repo could download your leads.
DEFAULT_ADMIN_KEY = "change-me-to-a-long-random-string"

# Naive in-memory rate limit: 5 submissions per IP per hour.
# Enough to deter drive-by spam on a small site; swap for Redis if you scale.
# NOTE: behind a reverse proxy, run uvicorn with --proxy-headers (see README)
# or every visitor shares the proxy's IP and one bucket.
_hits: dict[str, list[float]] = defaultdict(list)
RATE_LIMIT = 5
RATE_WINDOW = 3600
_SWEEP_EVERY = 1000
_calls = 0


def _rate_limited(ip: str) -> bool:
    global _calls
    now = time.time()
    _calls += 1
    if _calls % _SWEEP_EVERY == 0:
        # Drop IPs whose window fully expired so the dict can't grow forever.
        stale = [k for k, v in _hits.items() if not v or now - v[-1] >= RATE_WINDOW]
        for k in stale:
            del _hits[k]
    _hits[ip] = [t for t in _hits[ip] if now - t < RATE_WINDOW]
    if len(_hits[ip]) >= RATE_LIMIT:
        return True
    _hits[ip].append(now)
    return False


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.post("/api/contact", status_code=201)
def create_lead(
    lead: LeadCreate,
    request: Request,
    background: BackgroundTasks,
    db: Session = Depends(get_db),
):
    # Honeypot filled -> almost certainly a bot. Pretend success, store nothing.
    if lead.website.strip():
        return {"ok": True}

    ip = request.client.host if request.client else "unknown"
    if _rate_limited(ip):
        raise HTTPException(status_code=429, detail="Too many submissions. Try again later.")

    row = models.Lead(
        name=lead.name.strip(),
        email=lead.email.strip().lower(),
        company=lead.company.strip(),
        project_type=lead.project_type.strip(),
        message=lead.message.strip(),
    )
    db.add(row)
    db.commit()

    background.add_task(
        notify_new_lead, row.name, row.email, row.company, row.project_type, row.message
    )
    return {"ok": True}


@app.get("/api/leads", response_model=list[LeadOut])
def list_leads(
    db: Session = Depends(get_db),
    x_api_key: str = Header(default=""),
    limit: int = Query(default=100, ge=1, le=500),
    offset: int = Query(default=0, ge=0),
):
    if settings.admin_api_key == DEFAULT_ADMIN_KEY:
        raise HTTPException(
            status_code=503,
            detail="ADMIN_API_KEY is still the default. Set a real key in backend/.env.",
        )
    if not secrets.compare_digest(x_api_key, settings.admin_api_key):
        raise HTTPException(status_code=401, detail="Invalid API key")
    return (
        db.query(models.Lead)
        .order_by(models.Lead.created_at.desc())
        .offset(offset)
        .limit(limit)
        .all()
    )
