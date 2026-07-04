import time
from collections import defaultdict


class RateLimiter:
    """Naive in-memory per-IP rate limiter. Enough to deter drive-by abuse
    on a small site; swap for Redis if you ever run multiple processes.
    NOTE: behind a reverse proxy, run uvicorn with --proxy-headers (see README)
    or every visitor shares the proxy's IP and one bucket."""

    def __init__(self, limit: int, window: int, sweep_every: int = 1000):
        self.limit = limit
        self.window = window
        self._hits: dict[str, list[float]] = defaultdict(list)
        self._sweep_every = sweep_every
        self._calls = 0

    def hit(self, ip: str) -> bool:
        """Record a hit. Returns True if the IP is over the limit."""
        now = time.time()
        self._calls += 1
        if self._calls % self._sweep_every == 0:
            # Drop IPs whose window fully expired so the dict can't grow forever.
            stale = [k for k, v in self._hits.items() if not v or now - v[-1] >= self.window]
            for k in stale:
                del self._hits[k]
        self._hits[ip] = [t for t in self._hits[ip] if now - t < self.window]
        if len(self._hits[ip]) >= self.limit:
            return True
        self._hits[ip].append(now)
        return False
