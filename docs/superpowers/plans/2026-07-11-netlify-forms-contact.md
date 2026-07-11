# Netlify Forms Contact Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the FastAPI/SQLite backend's contact-form capture with Netlify Forms, and remove the backend entirely (including the AI chat widget, which is being dropped).

**Architecture:** The site becomes a pure static React (Vite) app. A hidden, plain-HTML form in `index.html` lets Netlify's build-time bot detect the form; the real React form POSTs URL-encoded data to `/` at submit time, which Netlify's edge intercepts, stores in the site's Forms dashboard, and forwards to a notification email (configured in the Netlify UI post-deploy, not in code).

**Tech Stack:** React 18, Vite 8, react-router-dom 6. No backend, no database, no test runner (this repo has none — verification is via `npm run build`, `grep`, and manual browser checks, called out explicitly per step).

## Global Constraints

- No backend, no database, no third-party API calls for contact-form handling — Netlify Forms only.
- Preserve existing `ContactForm.jsx` UI/UX exactly (idle/sending/sent states, inline validation, error copy) — only the submission transport changes.
- The honeypot field name must match exactly between the hidden static form (`index.html`) and the live React form's POST body — Netlify correlates them by form `name` and field `name`, not by position.
- Do not touch design, copy, or any page/component unrelated to contact-form submission or backend removal.
- This repo has no automated test suite — do not invent one. Verification steps are build/grep/manual-check based.

---

### Task 1: Remove the AI chat widget

**Files:**
- Modify: `frontend/src/App.jsx`
- Delete: `frontend/src/components/ChatWidget.jsx`

**Interfaces:**
- Consumes: none
- Produces: `App.jsx` no longer imports or renders `ChatWidget`

- [ ] **Step 1: Remove the `ChatWidget` import and usage from `App.jsx`**

In `frontend/src/App.jsx`, remove this line:

```jsx
import ChatWidget from "./components/ChatWidget.jsx";
```

and remove this line from the JSX (currently the last child before `</div>` closes the root, right after `<Footer />`):

```jsx
      <ChatWidget />
```

The file should end with:

```jsx
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Delete the ChatWidget component file**

Delete `frontend/src/components/ChatWidget.jsx`.

- [ ] **Step 3: Verify no remaining references**

Run:
```bash
grep -r "ChatWidget" frontend/src
```
Expected: no output (no matches).

- [ ] **Step 4: Verify the app still builds**

Run:
```bash
cd frontend && npm run build
```
Expected: build completes with no errors.

- [ ] **Step 5: Commit**

```bash
git add frontend/src/App.jsx
git rm frontend/src/components/ChatWidget.jsx
git commit -m "Remove AI chat widget"
```

---

### Task 2: Add the hidden static form Netlify needs for detection

**Files:**
- Modify: `frontend/index.html`

**Interfaces:**
- Consumes: none
- Produces: a static `<form name="contact">` with field names (`name`, `email`, `company`, `project_type`, `message`, `bot-field`) that Task 3's live form submission must match exactly.

- [ ] **Step 1: Add the hidden form to `index.html`**

In `frontend/index.html`, add the following markup as the first child of `<body>`, before `<div id="root">`:

```html
    <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="company" />
      <input type="text" name="project_type" />
      <textarea name="message"></textarea>
      <input type="text" name="bot-field" />
    </form>
```

The full `<body>` should now read:

```html
  <body>
    <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="company" />
      <input type="text" name="project_type" />
      <textarea name="message"></textarea>
      <input type="text" name="bot-field" />
    </form>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
```

- [ ] **Step 2: Verify the form survives the production build**

Run:
```bash
cd frontend && npm run build && grep -o 'data-netlify="true"' dist/index.html
```
Expected: `data-netlify="true"` (Vite copies `index.html` through without stripping unknown attributes).

- [ ] **Step 3: Commit**

```bash
git add frontend/index.html
git commit -m "Add hidden static form for Netlify form detection"
```

---

### Task 3: Rewire ContactForm.jsx to submit to Netlify

**Files:**
- Modify: `frontend/src/components/ContactForm.jsx`

**Interfaces:**
- Consumes: the field names produced by Task 2 (`name`, `email`, `company`, `project_type`, `message`, `bot-field`, and form `name="contact"`)
- Produces: no other file depends on this component's internals beyond the existing `<ContactForm />` import in `frontend/src/pages/Contact.jsx` (unchanged).

- [ ] **Step 1: Remove the `API` constant**

In `frontend/src/components/ContactForm.jsx`, delete this line:

```jsx
const API = import.meta.env.VITE_API_URL || "http://localhost:8000";
```

- [ ] **Step 2: Add a URL-encoding helper above the component**

Add this function right after the `EMAIL_RE` constant:

```jsx
function encodeForm(data) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");
}
```

- [ ] **Step 3: Replace the fetch call in `submit`**

Replace the existing request block:

```jsx
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email.trim(),
          company: form.company,
          project_type: form.type,
          message: form.message,
          website: form.website, // honeypot — stays empty for humans
        }),
      });
      if (res.status === 429) {
        setError("Too many submissions from this connection. Try again in a bit.");
        setStatus("idle");
        return;
      }
      if (res.status === 422) {
        setError("That email address doesn't look right — double-check it and try again.");
        setInvalid({ email: true });
        setStatus("idle");
        return;
      }
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
```

with:

```jsx
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({
          "form-name": "contact",
          name: form.name,
          email: form.email.trim(),
          company: form.company,
          project_type: form.type,
          message: form.message,
          "bot-field": form.website, // honeypot — stays empty for humans
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
```

- [ ] **Step 4: Rename the honeypot input's `name` attribute**

Find the hidden honeypot input (it currently reads `name="website"`):

```jsx
      <input
        type="text" value={form.website} onChange={update("website")}
        style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }}
        tabIndex={-1} autoComplete="off" aria-hidden="true" name="website"
      />
```

Change only the `name` attribute (keep the JS state key `website` as-is, since it's threaded through `update("website")` and the `encodeForm` call already maps it to `"bot-field"` in the request body):

```jsx
      <input
        type="text" value={form.website} onChange={update("website")}
        style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }}
        tabIndex={-1} autoComplete="off" aria-hidden="true" name="bot-field"
      />
```

- [ ] **Step 5: Verify the app builds**

Run:
```bash
cd frontend && npm run build
```
Expected: build completes with no errors.

- [ ] **Step 6: Manual verification via dev server**

Run:
```bash
cd frontend && npm run dev
```
Open `http://localhost:5173/contact` in a browser, open devtools → Network tab, fill in the form (name, valid email, message) and submit. Confirm:
- A request to `/` fires with method `POST` and header `Content-Type: application/x-www-form-urlencoded`.
- Its request body contains `form-name=contact&name=...&email=...&bot-field=` (URL-encoded).
- The UI transitions to the "Message sent" success state (the local dev server has no Netlify edge, so nothing is actually captured yet — this step only confirms the request is shaped correctly and the UI still behaves. Real capture is verified after deploy, in Task 6).

- [ ] **Step 7: Commit**

```bash
git add frontend/src/components/ContactForm.jsx
git commit -m "Submit contact form to Netlify Forms instead of the API backend"
```

---

### Task 4: Delete the backend and add Netlify deploy config

**Files:**
- Delete: `backend/` (entire directory)
- Delete: `frontend/.env.example`
- Create: `netlify.toml`

**Interfaces:**
- Consumes: none
- Produces: `netlify.toml` build/publish settings and SPA redirect rule that Task 5's README references.

- [ ] **Step 1: Delete the backend directory**

```bash
git rm -r backend
```

- [ ] **Step 2: Delete the now-unused frontend env example**

```bash
git rm frontend/.env.example
```

(`VITE_API_URL` is no longer referenced anywhere after Task 3.)

- [ ] **Step 3: Create `netlify.toml` at the repo root**

```toml
[build]
  base = "frontend"
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

- [ ] **Step 4: Verify no dangling references remain**

Run:
```bash
grep -rl "VITE_API_URL\|backend" --include="*.jsx" --include="*.js" --include="*.json" frontend/src frontend/*.json frontend/*.js 2>/dev/null
```
Expected: no output.

- [ ] **Step 5: Commit**

```bash
git add netlify.toml
git commit -m "Remove backend; add Netlify build/redirect config"
```

---

### Task 5: Update README for the fully static setup

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: `netlify.toml` from Task 4 (referenced in the deploy instructions)
- Produces: none (documentation only)

- [ ] **Step 1: Replace the full README content**

Replace the entire contents of `README.md` with:

```markdown
# Pivot Bridge Technology — site

React (Vite + Tailwind + react-router) static site. The contact form is
handled entirely by Netlify Forms — no backend, no database.

## Project layout

```
pivot-bridge/
└── frontend/
    ├── src/
    │   ├── pages/           # Home, ServicesIndex, Service, Industries,
    │   │                    # Work, About, Insights, Contact
    │   ├── components/      # Nav, Footer, ContactForm, FitFinder, Shared
    │   ├── data/content.jsx # ALL site copy lives here — edit this file
    │   └── index.css        # design tokens + custom classes
    ├── index.html            # includes the hidden static form Netlify
    │                          # needs to detect the contact form at build time
    └── package.json
```

## Run locally

```bash
cd frontend
npm install
npm run dev                 # opens on http://localhost:5173
```

Note: Netlify Forms only works on a real Netlify deploy (production or
deploy-preview) — the local dev server has no Netlify edge in front of it,
so submitting the form locally will not actually capture a lead. Use a
deploy preview to test end-to-end.

## Deploying (Netlify)

`netlify.toml` at the repo root configures the build (`frontend` as base,
`npm run build`, publish `frontend/dist`) and the SPA redirect
react-router needs (`/*` → `/index.html`).

After the first deploy:
1. Go to your Netlify site dashboard → **Forms** → **Notifications** →
   add an **Email notification**, pointed at whatever address should
   receive new leads.
2. New submissions appear under the site's **Forms** tab — searchable,
   exportable as CSV. That list is your leads record; no other storage
   is needed.
3. Check the plan's submission cap (100/month on Netlify's free tier) is
   enough for expected volume; upgrade if not.

## Spam protection (built in)

Netlify Forms uses the hidden `bot-field` honeypot input declared in
`index.html` and mirrored in `ContactForm.jsx`'s submission payload — bots
that fill it are silently filtered. Netlify also applies its own
spam-filtering on top.

## Before launch checklist

1. Replace placeholder contact info in `frontend/src/data/content.jsx`
   (CONTACT object) — the 555 number is intentionally fake.
2. Verify the case studies (CASES in `frontend/src/data/content.jsx`)
   describe your actual work accurately.
3. Review the three Insights articles (POSTS in
   `frontend/src/data/content.jsx`) — they're written in the company
   voice; adjust any claims that don't match how you actually deliver.
4. After first deploy, set the Netlify Forms email notification address
   (see Deploying, above) and submit a real test lead to confirm it
   arrives.
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "Rewrite README for fully static Netlify Forms setup"
```

---

### Task 6: End-to-end verification

**Files:** none (verification only)

**Interfaces:**
- Consumes: everything from Tasks 1–5
- Produces: confirmation the migration works before declaring the work done

- [ ] **Step 1: Confirm a clean production build**

```bash
cd frontend && npm run build
```
Expected: build succeeds with no errors or warnings about missing modules.

- [ ] **Step 2: Confirm the hidden form and honeypot field are in the built output**

```bash
grep -o 'name="contact"' frontend/dist/index.html
grep -o 'name="bot-field"' frontend/dist/index.html
```
Expected: both patterns found.

- [ ] **Step 3: Confirm no backend artifacts remain in the repo**

```bash
git status
ls backend 2>/dev/null && echo "backend still present!" || echo "backend removed"
```
Expected: `backend removed`, and `git status` shows a clean tree (all prior task commits already made).

- [ ] **Step 4: Manual post-deploy check (requires an actual Netlify deploy or deploy preview)**

Deploy the site (or open a PR to get a Netlify deploy preview), then:
1. Set the Forms email notification address in the Netlify dashboard (Deploying section of the README).
2. Visit the live `/contact` page, fill in the form with real-looking test data, and submit.
3. Confirm the submission appears under the site's **Forms** tab within a minute.
4. Confirm the notification email arrives at the configured address.

This step cannot be completed from local dev alone — call it out explicitly as the remaining manual step rather than claiming the feature is verified end-to-end without it.
