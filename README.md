# Pivot Bridge Technology — site

React (Vite + Tailwind + react-router) static site. The contact form is
handled entirely by Netlify Forms — no backend, no database.

## Project layout

```
pivot-bridge/
├── netlify.toml              # build/publish settings + SPA redirect
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
