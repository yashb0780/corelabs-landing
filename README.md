# leadplus-landing

Public marketing site for **LeadPlus**, aimed at SAP system integrators.

This is not the product prototype — that lives in a separate repo. See
[CLAUDE.md](CLAUDE.md) for the guardrails that apply to this codebase.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).

| Command           | What it does                       |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server               |
| `npm run build`   | Production build into `dist/`      |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | Run oxlint                         |

## Project structure

```
index.html
src/
  main.jsx              React entry
  index.css             Tailwind entry + base element styles
  App.jsx               variant switcher (top-right dropdown, A–E)
  design/
    tokens.css          design tokens — the single source of truth
  variants/
    VariantA.jsx        landing page variant A (currently a placeholder)
```

## Design tokens

All colour, type and layout values live in `src/design/tokens.css`. Nothing else
in the repo should hardcode a colour or a font.

| Token             | Value     | Use                                |
| ----------------- | --------- | ---------------------------------- |
| `--ink`           | `#1A1A1A` | Body text and headings             |
| `--bg`            | `#FFFFFF` | Page background                    |
| `--band`          | `#FAFAFA` | Alternating section bands          |
| `--border`        | `#E8E8E8` | Hairlines, card and input borders  |
| `--confirmed`     | `#0F7B4F` | Confirmed data point               |
| `--inferred`      | `#B45309` | Inferred data point                |
| `--unknown`       | `#8A8A8A` | Unknown data point, muted labels   |
| `--content-max`   | `1140px`  | Max content column width           |
| `--font-display`  | Inter Tight | Site typeface (Google Fonts)     |

They are also wired into Tailwind's theme, so the matching utilities work
directly: `text-ink`, `bg-band`, `border-border`, `text-confirmed`,
`text-inferred`, `text-unknown`, `max-w-content`, `font-sans`.

## Variants

The site is being explored as five landing page variants, A through E. Pick one
from the dropdown in the top-right corner. Only Variant A exists so far; B–E
show a "not built yet" screen until their files are added.

To add one: create `src/variants/VariantX.jsx` with a default export, then point
its entry in the `VARIANTS` registry in `src/App.jsx` at the component.
