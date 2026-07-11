# Contact form → Netlify Forms (drop backend)

## Context

The site currently ships a FastAPI + SQLite backend whose only real job is
capturing contact-form leads (plus an optional AI chat widget). Before
launch, the site owner wants: (1) an email sent to a designated address for
every contact-form submission, and (2) leads stored somewhere they can
review later to follow up on.

Decision: host on Netlify and use **Netlify Forms** for both. This
eliminates the need to operate any backend server for the contact form.
The AI chat widget is being dropped (not wanted going forward), which
removes the only other reason the backend existed — so the whole
`backend/` directory is deleted and the site becomes fully static.

## Goals

- Contact form submissions are captured by Netlify (visible/searchable/
  exportable in the site's Forms dashboard) — this is the "leads" store.
- Netlify sends an email notification to a site-owner-configured address
  for every new submission.
- No server to deploy, patch, or pay for.
- Existing spam protection (honeypot) is preserved via Netlify's native
  mechanism instead of custom backend logic.

## Non-goals

- No database, no custom admin API, no AI chat widget.
- No Google Sheets mirroring (Netlify's dashboard was confirmed sufficient).
- No change to visual design, copy, or any other page/feature.

## Design

### Why a hidden static form is required

Netlify's form-detection bot parses the static HTML produced by `npm run
build` at deploy time, looking for `<form data-netlify="true">`. It does
not execute JavaScript, so a form that only exists inside the React tree
(rendered client-side into `#root`) is invisible to it. The standard,
documented workaround: ship a plain-HTML twin of the form — same `name`
and field `name` attributes — anywhere in the static HTML (here,
`frontend/index.html`, hidden from view). The real, interactive form stays
the React component; its submit handler POSTs to `/` with the same field
names so Netlify correlates the submission with the form definition it
found at build time.

### Changes

**`frontend/index.html`**
- Add a hidden form: `<form name="contact" data-netlify="true"
  netlify-honeypot="bot-field" hidden>` containing one input per field
  used by `ContactForm.jsx` (`name`, `email`, `company`, `project_type`,
  `message`) plus a `bot-field` honeypot input, matching Netlify's
  documented pattern for JS-rendered forms.

**`frontend/src/components/ContactForm.jsx`**
- Replace the JSON `fetch` to `${API}/api/contact` with a `fetch` POST to
  `/` using `Content-Type: application/x-www-form-urlencoded`, with the
  body built via `URLSearchParams` containing `form-name=contact` plus all
  form fields.
- Rename the existing honeypot field from `website` to `bot-field` (or
  keep the field name in sync with whatever the hidden form declares) so
  Netlify's spam filtering engages.
- Remove the `API`/`VITE_API_URL` constant and the 429-specific error
  branch (Netlify does its own spam/rate handling; if Netlify returns a
  non-2xx we fall into the existing generic error branch).
- Keep the existing idle/sending/sent status states and inline validation
  as-is — only the transport changes.

**Removed**
- `backend/` (entire directory: FastAPI app, SQLite models, SMTP utils,
  chat router, rate limiter, requirements.txt, `.env`/`.env.example`).
- `frontend/src/components/ChatWidget.jsx`, plus its import and `<ChatWidget
  />` usage in `frontend/src/App.jsx`.
- `frontend/.env.example` and the `VITE_API_URL` env var (no longer
  referenced anywhere).

**`README.md`**
- Rewritten to describe: static React app, `npm run build` → deploy
  `frontend/dist/` to Netlify, SPA redirect rule (existing note about
  react-router needing an SPA fallback stays relevant), and the one manual
  post-deploy step: Netlify site dashboard → Forms → Notifications → add
  an email notification pointed at the desired address.

### Data flow

1. Visitor fills the visible React form and submits.
2. Browser POSTs URL-encoded fields (incl. `form-name=contact`) to `/`.
3. Netlify's edge intercepts the POST (matched against the form
   definition captured at build time), stores the submission, and — if a
   human filled the honeypot field — silently discards it as spam.
4. Netlify fires the configured email notification.
5. Submission appears in the site's Forms dashboard (searchable, CSV
   export).
6. `ContactForm.jsx` reads the HTTP response status to drive its existing
   idle/sending/sent/error UI — unchanged from today's behavior.

### Error handling

- Network failure → existing generic "Couldn't reach the server" message.
- Non-2xx response → existing generic error branch (the current 429-
  specific branch is removed since Netlify doesn't return that code for
  its own throttling in the same way the old backend did).
- No failure mode can lose a submission silently the way a mail-server
  outage could before — Netlify's capture and its notification are
  decoupled internally, and captured submissions remain visible in the
  dashboard even if the notification email fails to send.

### Testing / verification

Netlify's form-detection bot only evaluates **deployed** builds (production
or deploy-preview) — it is not exercised by `npm run dev` or a local `vite
preview`, since there is no Netlify edge in front of either. Verification
therefore requires an actual deploy (or a deploy preview from a PR):
submit the live form once and confirm the submission appears in the Forms
dashboard and the notification email arrives. This will be called out
explicitly as a manual, post-deploy step rather than claimed as covered by
local testing.

## Open items for the owner (manual, non-code steps)

1. After first deploy, set the notification email address in Netlify:
   Site settings → Forms → Notifications → "Email notification."
2. Confirm the Netlify plan's free-tier submission cap (100/month) is
   enough for expected launch volume; upgrade if not.
