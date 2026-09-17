# LeadPlus copy audit

Read-only snapshot of every piece of user-facing copy on the marketing site,
taken from branch `messaging-v2` at commit `ee63ba1`.

Sources: `src/App.jsx`, `src/variants/_shared.jsx`, `src/variants/VariantA.jsx`,
`src/variants/VariantB.jsx`, `src/variants/VariantC.jsx`,
`src/variants/VariantD.jsx`.

## How to read this

- Text is quoted as it appears in the source. JSX line wraps collapse to single
  spaces in the browser, so multi-line strings are joined here.
- Mono eyebrows, labels and tags are styled with CSS `uppercase`. They are
  quoted as written in code, so "How we learn your ICP" is shown on the page as
  "HOW WE LEARN YOUR ICP".
- Section eyebrows render as `{index} / {label}`, e.g. `01 / How we learn your ICP`.
- **Origin** means where the copy lives:
  - **Unique**: written in that variant's own file.
  - **Shared**: a whole section imported from `_shared.jsx`, identical text in
    every variant (only the eyebrow number or background can change).
  - Unique heroes still use the shared `HeroHeading` / `HeroSubhead` /
    `HeroActions` layout primitives, but all their text is unique.
- **Nav and footer:** no variant has a nav bar or a footer. The only persistent
  chrome is the variant switcher from `src/App.jsx`, listed once below.
- Copy only in code comments, `aria-hidden` decoration, or theme objects is not
  included.

---

## 1. CLAUDE.md (verbatim)

~~~~markdown
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
~~~~

---

## 2. Copy by variant

### Page chrome (all variants): variant switcher

**Origin:** `src/App.jsx` (`TopBar`), fixed top-right on every variant. Not a
nav bar.

- Label: "Variant"
- Dropdown options: "Variant A", "Variant B", "Variant C", "Variant D"
- Mode toggle button: "Dark" / "Light" (shows the current mode)

### Shared sections (full text, referenced from every variant below)

#### S1. How we learn your ICP (`IcpSection`)

**Origin:** Shared (`_shared.jsx`). Always eyebrow 01.

- Eyebrow: "01 / How we learn your ICP"
- Headline: "The list gets better the longer you use it."
- Body: "We start from your own website. We read what you build, which industries you name, which modules and platforms you talk about, and which projects you put front and centre, then we turn that into a first profile you can edit. From there we work with you directly, and every account you keep or discard sharpens what comes next."
- Four step cards (tag, title, line):
  1. "Step 01 / Domain": "You give us a domain": "Nothing else. No questionnaire, no setup call before you see anything."
  2. "Step 02 / Read": "We read your site": "Services, industries, platforms, case studies, and the language you use to describe your own work."
  3. "Step 03 / Profile": "You correct the profile": "We show you what we inferred as an editable draft, not a locked setting."
  4. "Step 04 / Refine": "It sharpens as you use it": "Accounts you keep and accounts you reject both feed back into how the next list is built."
- Footnote: "We work alongside you on this, particularly early on. The profile is a starting point, not an answer."

#### S2. Confidence (`ThreeStates`)

**Origin:** Shared (`_shared.jsx`). Eyebrow number is passed in by each variant.

- Eyebrow: "{NN} / Confidence"
- Headline: "Three states, never two."
- State cards: "Confirmed legacy", "Confirmed modern", "Unknown"
- Body: "The absence of evidence that a company has modernized is not proof that they have not. It usually means no data. We label those accounts unknown rather than counting them to make a list look bigger."

#### S3. CTA (`Cta`)

**Origin:** Shared (`_shared.jsx`). No eyebrow.

- Headline: "Tell us what you are best at. We will show you who matches."
- Email field placeholder: "Work email" (also its screen-reader label: "Work email")
- Button: "Request access"
- Small print: "Early access, limited slots."

---

### Variant A: "The absence"

Page order: Hero → 01 How we learn your ICP → 02 The gap → 03 What we resolve →
04 Confidence → 05 Scope → CTA

#### A-1. Hero

**Origin:** Unique

- Headline: "Nobody built a lead gen tool for firms like yours."
- Subhead: "ERP service firms run narrow practices. Specific industries, specific modules, specific kinds of project, and a bench that is genuinely good at some of it and not the rest. Every tool built for you knows your market as an industry code and a headcount."
- Primary button: "See how it works" (→ `#how-it-works`)
- Secondary link: "How we source signals" (→ `#three-states`)
- Signal feed panel, header: "Signal feed"
- Feed rows (source / fragment / age):
  - "JOB POSTING" / "Senior ABAP role, S/4HANA conversion" / "2d"
  - "10-K" / "Systems investment named in filing" / "6d"
  - "LINKEDIN" / "New VP of Enterprise Applications" / "11d"
  - "PRESS RELEASE" / "Second manufacturing site announced" / "18d"
  - "JOB POSTING" / "Integration roles, no conversion wording" / "24d"
  - "SEC FILING" / "New production site disclosed" / "31d"

#### A-2. How we learn your ICP

**Origin:** Shared: see S1. Eyebrow "01". No band background.

#### A-3. The gap (comparison)

**Origin:** Unique

- Eyebrow: "02 / The gap"
- Left column heading: "What generic lead gen gives you"
  - "Industry code"
  - "Employee count"
  - "Revenue band"
  - "A technographic tag that says the ERP vendor name and nothing more"
  - "Intent keywords scraped from a publisher network"
- Right column heading: "What a specialist practice needs"
  - "The specific version and release they are running, with a dated source"
  - "Whether it is a conversion, a rebuild, or a single site rollout"
  - "Whether they are in evaluation, design, or have already chosen"
  - "Which way they are heading, and whether the evidence says so at all"
  - "Who inside the account is doing the work"
- Coverage panel header: "Where the signal comes from"
- Coverage rows (label / description / cadence):
  - "Public filings" / "10-K and 10-Q language on system constraints, systems programs, and capital allocation." / "Quarterly"
  - "Engineering roles" / "Version numbers, module names, and contractor scope inside job requirements." / "Weekly"
  - "Leadership moves" / "New CIOs, enterprise architects, and program leads, and what they did before." / "Weekly"
  - "Partner announcements" / "Press releases, case studies, and speaking slots." / "Continuous"
  - "Ownership events" / "Sponsor changes, acquisitions, and carve-outs that reset the systems roadmap." / "Continuous"

#### A-4. What we resolve (how it works)

**Origin:** Unique

- Eyebrow: "03 / What we resolve"
- Headline: "Four things we resolve about an account"
- Account card:
  - Title: "Midwest industrial manufacturer"
  - Details: "$180M revenue", "900 employees", "Ohio"
  - Footer: "PRACTICE FIT 92"
- Resolution rows (label / confidence pill / value / explanation):
  - "Stack" / "Confirmed" / "ECC 6.0, on premise" / "Read from the version and module names inside their open engineering roles, not from a stale technographic tag."
  - "Project type" / "Inferred" / "Brownfield conversion" / "Conversion, greenfield rebuild, single site rollout, or extension without migration. Four different pieces of work, and only some of them are yours."
  - "Phase" / "Inferred" / "Design, pre-RFP" / "Evaluation, design, partner selection, or already in flight. Read from role seniority, hiring sequence, and the language in the requirements."
  - "Context" / "Confirmed" / "Vendor support date approaching" / "Maintenance dates, compliance mandates, ownership changes, and trade exposure. Why the system is in play, reported without a view on which direction it should go."
- Caption: "Illustrative account. Every field in the product carries a source and a date."

#### A-5. Confidence

**Origin:** Shared: see S2. Eyebrow "04". No band background.

#### A-6. Scope (Starting with SAP)

**Origin:** Unique

- Eyebrow: "05 / Scope"
- Headline: "Starting with SAP"
- Body: "The signal layer is vendor agnostic. We are starting where the mid-market install base is largest and the coverage gap is widest, and expanding across the ERP landscape from there."

#### A-7. CTA

**Origin:** Shared: see S3.

---

### Variant B: "The deal shape"

Page order: Hero → 01 How we learn your ICP → 02 Four shapes → 03 Phase →
04 Why scope decides everything → 05 Confidence → CTA

#### B-1. Hero

**Origin:** Unique

- Headline (two lines): "Not every ERP project" / "is your project."
- Subhead: "Scope decides whether a deal is yours. Conversion, greenfield rebuild, single site rollout, and extension without migration are four different pieces of work, wanting four different benches. We classify the shape before anyone has written a brief."
- Primary button: "See how we classify" (→ `#shapes`)
- No secondary link.

#### B-2. How we learn your ICP

**Origin:** Shared: see S1. Eyebrow "01". No band background.

#### B-3. Four shapes

**Origin:** Unique

- Eyebrow (acts as the section heading): "02 / Four shapes"
- Practice panel header: "Your practice"
  - "Industry": "Logistics and distribution"
  - "Module focus": "WM, EWM, TM"
  - "Project type": "Single site rollout"
- Match rows (account / shape / match tag):
  - "Regional freight and warehousing group" / "Single site rollout" / "Strong"
  - "Midwest food distributor" / "Brownfield conversion" / "Partial"
  - "National parcel carrier" / "Greenfield rebuild" / "Weak"
- Caption: "Illustrative. The profile on the left is what we build from your site and refine with you."
- Shape cards. Each has a title, a definition, the label "Signals we read", three signals, and a line prefixed "For your bid: ".
  - **"Brownfield conversion"**
    - "The existing system is converted in place, with its history and its customizations carried forward."
    - Signals we read: "Conversion wording in role requirements"; "Existing module names retained"; "Long-tenure internal development staff"
    - "For your bid: Custom code remediation is the scope driver."
  - **"Greenfield rebuild"**
    - "A new system is stood up alongside the old one and the business is moved onto it."
    - Signals we read: "Process redesign language"; "Senior leadership hired from outside"; "Parallel environment roles"
    - "For your bid: Process design capacity matters more than remediation."
  - **"Single site rollout"**
    - "One plant or region moves onto a template that already exists elsewhere in the group."
    - Signals we read: "Roles scoped to one location"; "Template and rollout wording"; "Regional program leads"
    - "For your bid: Speed and template fit decide the shortlist."
  - **"Extension without migration"**
    - "The core stays where it is while integration, reporting, and surrounding systems are replaced."
    - Signals we read: "Integration and data platform roles"; "Reporting replacement language"; "No conversion wording anywhere"
    - "For your bid: The core is not in play. Bid the edges."

#### B-4. Phase

**Origin:** Unique

- Eyebrow (acts as the section heading): "03 / Phase"
- Timeline stages: "Evaluation", "Design", "Partner selection", "Brief circulated", "In flight"
- Group labels: "shape read from signals" (first three stages), "shape stated outright" (last two)
- Body: "The earlier the stage, the more the shape has to be read rather than looked up. We classify it either way."

#### B-5. Why scope decides everything

**Origin:** Unique

- Eyebrow (acts as the section heading): "04 / Why scope decides everything"
- Cards:
  - **"Whether you bid at all"**: "A single site rollout onto a template that already exists is a different practice than a conversion. Knowing the shape means you spend your qualification time on the accounts that match the bench you actually have."
  - **"Who you put on the proposal"**: "A conversion needs remediation depth. A rebuild needs process design. Naming the wrong lead in the first conversation is hard to walk back, and the shape tells you which bench to staff before you write anything."
  - **"What the number looks like"**: "The same install base supports proposals at very different price points. A rebuild and a conversion are not the same number, and shape sets the range long before anyone asks you for one."

#### B-6. Confidence

**Origin:** Shared: see S2. Eyebrow "05". No band background.

#### B-7. CTA

**Origin:** Shared: see S3.

---

### Variant C: "Direction"

Page order: Hero → 01 How we learn your ICP → 02 Reading direction →
03 What the signals say → 04 Tracked accounts → 05 Confidence → CTA

#### C-1. Hero

**Origin:** Unique

- Headline: "Direction, not just install base."
- Subhead: "Companies running the same system are moving in different directions. Some are modernizing in place, some are replatforming, some are staying where they are and extending. We read which, from public evidence, without taking a side."
- Primary button: "See how we read direction" (→ `#window`)
- No secondary link.

#### C-2. How we learn your ICP

**Origin:** Shared: see S1. Eyebrow "01". Band background.

#### C-3. Reading direction (the window)

**Origin:** Unique

- Eyebrow (acts as the section heading): "02 / Reading direction"
- Timeline markers (label / source tag):
  - "First contractor role posted" / "JOB POSTING"
  - "Enterprise architect hired" / "LINKEDIN"
  - "Integration tooling appears in the stack" / "JOB POSTING"
  - "Systems investment language enters the filing" / "10-K"
  - "Program lead role opens" / "JOB POSTING"
  - "Direction stated outright" / "PUBLIC"
- Region label (spans the first five markers): "where LeadPlus operates"
- Caption: "Illustrative sequence. The same signals appear whether a company is modernizing in place, replatforming, or staying and extending. What changes is what they say."
- Direction lanes diagram:
  - Start card: "Starting point" / "Same system today"
  - "Modernizing in place": "Conversion wording in roles"; "Existing module names retained"
  - "Replatforming": "A different platform named in roles"; "Parallel environment hiring"
  - "Staying and extending": "Integration and reporting roles"; "Support contract renewed"
- Caption: "We report the direction. Which of these is your opportunity depends on what you do."

#### C-4. What the signals say

**Origin:** Unique

- Eyebrow (acts as the section heading): "03 / What the signals say"
- Signal table rows (signal / source / direction):
  - "Conversion wording in role requirements" / "JOB POSTING" / "MODERNIZE IN PLACE"
  - "A different platform named in requirements" / "JOB POSTING" / "REPLATFORM"
  - "Integration and reporting roles, no conversion wording" / "JOB POSTING" / "STAY AND EXTEND"
  - "Support and enhancement contract renewed" / "PRESS RELEASE" / "STAY AND EXTEND"
  - "Systems investment language enters the filing" / "10-K" / "NOT STATED"
  - "Enterprise architect hired" / "LINKEDIN" / "NOT STATED"
- Caption: "Illustrative signals. We report the direction the evidence supports, including when it supports none."

#### C-5. Tracked accounts

**Origin:** Unique

- Eyebrow (acts as the section heading): "04 / Tracked accounts"
- Body: "Most tools make you re-run a search and diff the results yourself. Give us the accounts that match your practice and we watch them continuously. When a role opens, a filing changes, or a leader moves, you hear about it in context, with the source and the date attached, and with what it does or does not say about direction."
- Alerts panel header: "Alerts"
- Alert rows (account / signal / age):
  - "Midwest industrial manufacturer" / "Integration roles opened, no conversion wording" / "2d"
  - "Southeast food processor" / "Systems language added to filing" / "9d"
  - "Regional building products group" / "New enterprise architect hired" / "16d"
- Caption: "Illustrative alerts. No account is named, and in the product every row links to its source and the date it was filed."

#### C-6. Confidence

**Origin:** Shared: see S2. Eyebrow "05". Band background.

#### C-7. CTA

**Origin:** Shared: see S3.

---

### Variant D: "The pressure map"

Page order: Hero → 01 How we learn your ICP → 02 Five kinds of context →
03 Why this changes the conversation → 04 Where we look → 05 The coverage gap →
06 Confidence → CTA

#### D-1. Hero

**Origin:** Unique

- Headline: "Nobody changes an ERP because it is old."
- Subhead: "A support date, an audit, an ownership change, or a new plant is what puts a system in play. We track that context alongside the install base, so you can tell which accounts match the work your practice does."
- Primary button: "See the context" (→ `#pressures`)
- No secondary link.

#### D-2. How we learn your ICP

**Origin:** Shared: see S1. Eyebrow "01". No band background.

#### D-3. Five kinds of context

**Origin:** Unique

- Eyebrow (acts as the section heading): "02 / Five kinds of context"
- Rows (label / title / description):
  - "Maintenance" / "Vendor support end dates" / "A published end date moves a system from a preference into a budget line."
  - "Compliance" / "Mandates on a fixed clock" / "Sector mandates, defense supply chain requirements, and audit findings that put a system change on a fixed clock."
  - "Ownership" / "Events that reset the roadmap" / "Sponsor-backed companies in the back half of a hold period, carve-outs standing up systems from scratch, and post-acquisition consolidation. Ownership events are public and they reset the roadmap."
  - "Trade" / "Tariff exposure and reshoring" / "Commitments that change where production happens and what the systems have to support."
  - "Growth" / "Capacity the system outgrew" / "New plants, new lines, and new geographies that outgrow what the current system was configured for."
- Evidence card:
  - Header: "Account" / "Regional building products manufacturer"
  - Column headers (wide screens only): "Signal", "What it says", "Source", "Date"
  - Rows:
    - "Support date published" / "Core platform maintenance ends inside the planning horizon" / "VENDOR NOTICE" / "2026-03-11"
    - "Audit finding disclosed" / "Control weakness tied to manual reconciliation" / "10-K" / "2026-05-02"
    - "Ownership change" / "Majority stake acquired by a financial sponsor" / "PRESS RELEASE" / "2026-06-18"
    - "New plant announced" / "Second production site planned in the same region" / "PRESS RELEASE" / "2026-07-24"
- Caption: "Illustrative account. Every row in the product links to a dated public source."

#### D-4. Why this changes the conversation

**Origin:** Unique

- Eyebrow (acts as the section heading): "03 / Why this changes the conversation"
- Body: "An account that fits your profile is a candidate. An account that fits and whose system is visibly in play is a conversation you can actually open. The first list is large and mostly static. The second is smaller, moves as the evidence moves, and tells you what the first call is about."
- Comparison boxes:
  - "Fits your profile"
  - "Fits your profile, and you know why the system is in play"

#### D-5. Where we look

**Origin:** Unique

- Eyebrow (acts as the section heading): "04 / Where we look"
- Rows (label / description):
  - "SEC filings" / "Disclosed system constraints, systems programs, and capital commitments."
  - "Ownership records" / "Sponsor activity, hold periods, carve-outs, and acquisitions that reset a roadmap."
  - "Regulatory registers" / "Sector mandates and audit findings that put a date on a system change."
  - "Hiring patterns" / "Role sequence, seniority, and the version and module names inside requirements."

#### D-6. The coverage gap

**Origin:** Unique

- Eyebrow (acts as the section heading, centred): "05 / The coverage gap"
- Body: "Below a certain size, the vendor does not assign a direct account team. No partner has been handed the introduction and no relationship is already in place. That is where the coverage gap is widest across the US mid-market, and where reading the public evidence is worth the most."

#### D-7. Confidence

**Origin:** Shared: see S2. Eyebrow "06". Band background.

#### D-8. CTA

**Origin:** Shared: see S3.

---

## 3. Summary: shared vs unique sections

| Position | Section | Origin | A | B | C | D |
|---|---|---|---|---|---|---|
| Chrome | Variant switcher | Shared (`App.jsx`) | ✓ | ✓ | ✓ | ✓ |
| Nav / footer | None | n/a | none | none | none | none |
| Hero | Hero | **Unique** copy on shared layout primitives | "Nobody built a lead gen tool for firms like yours." | "Not every ERP project is your project." | "Direction, not just install base." | "Nobody changes an ERP because it is old." |
| 01 | How we learn your ICP | Shared | ✓ | ✓ | ✓ | ✓ |
| 02 | Variant core section | Unique | The gap | Four shapes | Reading direction | Five kinds of context |
| 03 | Variant section | Unique | What we resolve | Phase | What the signals say | Why this changes the conversation |
| 04 | Variant section | Unique unless marked *(shared)* | Confidence *(shared)* | Why scope decides everything | Tracked accounts | Where we look |
| 05 | Variant section | Unique unless marked *(shared)* | Scope: Starting with SAP | Confidence *(shared)* | Confidence *(shared)* | The coverage gap |
| 06 | Variant section | Shared where present | — | — | — | Confidence *(shared)* |
| Last | CTA | Shared | ✓ | ✓ | ✓ | ✓ |

**Every variant shares:** the variant switcher, 01 How we learn your ICP,
Confidence ("Three states, never two.") as the section just before the CTA,
and the CTA.

**Every variant has unique copy for:** the hero and every section between 01
and Confidence (A: 3 sections, B: 3, C: 3, D: 4).

**Confidence position:** A 04, B 05, C 05, D 06. Variant A is the only one
with a unique section (05 Scope) after Confidence.
