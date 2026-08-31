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

**Always use the tokens in `src/design/tokens.css`.** Never hardcode a colour, a
font, or a radius anywhere else. `tokens.css` is the fallback layer: it declares
every slot and gives each a neutral default. Use the token-backed utilities
(`text-ink`, `bg-band`, `bg-surface`, `border-border`, `text-accent`,
`text-confirmed`, `text-inferred`, `text-unknown`, `rounded-theme`,
`tracking-display`, `font-heading`, `max-w-content`) or `var(--token)` directly.
If a design needs a value the tokens don't cover, add the slot to `tokens.css`
first.

**Each variant owns its palette.** Every `src/variants/Variant*.jsx` named-exports
a `theme` with a `light` and a `dark` map of token overrides, plus an optional
`defaultMode`. `src/App.jsx` applies the active one to `:root`. Hex values belong
in those theme objects and nowhere else. Dark mode is designed per variant, not
derived by inverting the light palette.

**Messaging is fit, not urgency.** Never imply one ERP direction is better than
another: migrating, replatforming, and staying and extending are all legitimate,
and we surface them without editorialising. Never frame the reader as at risk of
losing a deal. The same language has to serve firms that implement and migrate,
firms that support and extend, and firms selling an alternative platform,
without naming which is which.

**No fabricated statistics, testimonials, or customer logos anywhere on the
site.** Do not invent numbers, percentages, ROI figures, quotes, company names,
headshots, or logo walls — not even as placeholder or lorem-ipsum content. If a
section calls for proof, either leave it empty with a clear `TODO` marker or ask
for real, sourced material.

## Layout

```
src/design/tokens.css   shared design tokens (colour, type, layout)
src/variants/           one file per landing page variant (VariantA … VariantD)
src/variants/_shared.jsx  primitives and whole sections shared by every variant
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
