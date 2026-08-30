# LeadPlus — marketing site

## What this repo is

This repo is the **public marketing site for LeadPlus**, targeted at SAP system
integrators.

It is **NOT the product prototype**. The prototype lives in a separate repo.

## Guardrails

**Never add product features, auth, or app routing here.** No login, no signup,
no dashboards, no account state, no API clients, no router. This is a static
marketing site. If a task seems to require any of those, stop and ask — it
probably belongs in the product repo.

**Always use the tokens in `src/design/tokens.css`.** Never hardcode a colour or
a font anywhere else. The tokens are exposed to Tailwind, so use the token-backed
utilities (`text-ink`, `bg-band`, `border-border`, `text-confirmed`,
`text-inferred`, `text-unknown`, `max-w-content`) or `var(--token)` directly. If
a design needs a value the tokens don't cover, add it to `tokens.css` first.

**No fabricated statistics, testimonials, or customer logos anywhere on the
site.** Do not invent numbers, percentages, ROI figures, quotes, company names,
headshots, or logo walls — not even as placeholder or lorem-ipsum content. If a
section calls for proof, either leave it empty with a clear `TODO` marker or ask
for real, sourced material.

## Layout

```
src/design/tokens.css   shared design tokens (colour, type, layout)
src/variants/           one file per landing page variant (VariantA … VariantE)
src/App.jsx             variant switcher (top-right dropdown)
src/index.css           Tailwind entry + base element styles
```

## Adding a variant

1. Create `src/variants/VariantX.jsx` exporting a default component.
2. Import it in `src/App.jsx` and set it as `Component` on its registry entry.

## Stack

Vite + React + Tailwind CSS v4. Tailwind is configured through the
`@tailwindcss/vite` plugin — there is no `tailwind.config.js`; theme values live
in the `@theme` block in `src/design/tokens.css`.
