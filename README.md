# Pivot Bridge Technology — full-stack site

React (Vite + Tailwind + react-router) frontend, FastAPI + SQLite backend.
The backend does exactly one job: capture leads from the contact form,
with spam protection, optional email notification, and a key-protected
endpoint to read your leads.

## Project layout

```
pivot-bridge/
├── backend/
│   ├── app/
│   │   ├── main.py          # API: /api/contact, /api/leads, /api/health
│   │   ├── models.py        # Lead table
│   │   ├── schemas.py       # request/response validation (incl. honeypot)
│   │   ├── database.py      # SQLAlchemy setup (SQLite by default)
│   │   ├── email_utils.py   # optional SMTP notification on new leads
│   │   └── config.py        # env-driven settings
│   ├── requirements.txt
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── pages/           # Home, ServicesIndex, Service, Industries,
    │   │                    # Work, About, Insights, Contact
    │   ├── components/      # Nav, Footer, ContactForm, FitFinder, Shared
    │   ├── data/content.jsx # ALL site copy lives here — edit this file
    │   └── index.css        # design tokens + custom classes
    ├── package.json
    └── .env.example
```

## Run locally

Backend (terminal 1):
```bash
cd backend
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env        # edit values (at minimum ADMIN_API_KEY)
uvicorn app.main:app --reload --port 8000
```

Frontend (terminal 2):
```bash
cd frontend
npm install
cp .env.example .env        # VITE_API_URL=http://localhost:8000
npm run dev                 # opens on http://localhost:5173
```

## Reading your leads

Leads are stored in `backend/leads.db` regardless of email settings.
Fetch them any time (paginated; defaults to the newest 100):
```bash
curl -H "X-API-Key: YOUR_ADMIN_API_KEY" "http://localhost:8000/api/leads?limit=100&offset=0"
```
The endpoint refuses to serve (503) while ADMIN_API_KEY is still the
example default — set a real key first.

Note: if you created a `leads.db` before the email field was added,
delete it (dev) or run
`ALTER TABLE leads ADD COLUMN email VARCHAR(320) DEFAULT '';` (prod).

## Email notifications (optional)

Fill SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASSWORD / NOTIFY_EMAIL in
backend/.env. Gmail: use an App Password, host smtp.gmail.com, port 587.
Mail failures never lose leads — they're already in the database.

## AI chat assistant (optional)

Set ANTHROPIC_API_KEY in backend/.env to enable the floating chat widget.
It answers visitor questions grounded in the site's services/process/FAQ
content (system prompt lives in backend/app/chat.py — keep it in sync with
frontend/src/data/content.jsx) and steers visitors to the contact form.
The key never reaches the browser; the frontend talks only to /api/chat.
Rate limited to 30 messages per IP per hour. Leave the key blank to
disable — the widget shows a friendly fallback pointing at the form.
Model is set in backend/app/chat.py (claude-opus-4-8; switch to
claude-haiku-4-5 there if you want cheaper, faster replies).

## Spam protection (built in)

- Honeypot field: hidden input bots fill and humans never see; those
  submissions return fake success and store nothing.
- Rate limit: 5 submissions per IP per hour (in-memory; swap for Redis
  if you ever run multiple server processes).

## Deploying

Frontend: `npm run build` produces `frontend/dist/` — static files for
Netlify, Vercel, Cloudflare Pages, or any web server. Set VITE_API_URL
to your backend's public URL at build time. Note: react-router needs an
SPA fallback (all routes -> index.html); every static host has a
one-line setting for this.

Backend: any Python host (Render, Railway, Fly.io, a VPS).
Production command:
`uvicorn app.main:app --host 0.0.0.0 --port 8000 --proxy-headers --forwarded-allow-ips='*'`.
The `--proxy-headers` flags matter: hosts like Render/Railway/Fly put a
reverse proxy in front of your app, and without them every visitor
appears to come from the proxy's IP — which makes the whole internet
share one rate-limit bucket (5 submissions/hour total).
Set ALLOWED_ORIGINS to your frontend's domain, e.g.
`ALLOWED_ORIGINS=https://pivotbridge.tech`. For real traffic, set
DATABASE_URL to a managed Postgres and add `psycopg2-binary` to
requirements — no code changes needed.

## Before launch checklist

1. Replace placeholder contact info in `frontend/src/data/content.jsx`
   (CONTACT object) — the 555 number is intentionally fake.
2. Set a real ADMIN_API_KEY (long random string) in backend/.env.
3. Replace the placeholder Head of Engineering (Maya) in the
   TEAM_STATEMENTS array in `frontend/src/data/content.jsx` with the
   real person.
4. Verify the three case studies describe your actual work accurately.
5. Review the three Insights articles (POSTS in
   `frontend/src/data/content.jsx`) — they're written in the company
   voice; adjust any claims that don't match how you actually deliver.
