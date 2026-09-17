# LeadPlus copy map v2 (messaging-v2)

New copy for every section, matched to the slots in `docs/copy-audit.md`.
Layouts, components, themes, and tokens do not change. Only text changes.
This version replaces v1 entirely.

How to read this:
- **Keep** means the current text stays exactly as it is.
- Everything else is new text, verbatim.
- Row and card counts match the current layout, except one flagged
  addition (A-4 gains a fifth row using the same row component).

Where the deck lands:
- Title slide headline: every hero headline
- Observe, Interpret, Prioritize, Activate: shared section 01 (all variants)
- Learning loop: shared section 01 footnote
- Problem slide and "What we read": A-3 The gap
- Rep card (Score, Why now, Who, Angle): A-4, B-5, D-4
- Four pillars: D-5
- Learn one vertical, repeat across many: A-6

Apply order: Shared sections, then A, B, C, D. One step at a time,
reviewed at localhost, committed after each.

---

## Shared sections (all variants)

### S1. How it works (component: IcpSection)

- Eyebrow: "How it works" (renders as "01 / How it works")
- Headline: "What happens before your rep sees anything."
- Body: "We start from your own website to learn which SAP work you lead with, which industries and modules you name, and which projects you put front and centre. Then we watch every account that matches, read the signals against what a real SAP project looks like, and hand the list back in order with the reasoning attached."
- Step cards (tag / title / line):
  1. "Step 01 / Observe" / "We watch every account" / "Hiring, news, leadership moves, tech stack, and partner activity. Always on, collected without anyone asking."
  2. "Step 02 / Interpret" / "We work out what it adds up to" / "Signals are compared to what a real SAP project looks like, not to a generic pattern."
  3. "Step 03 / Prioritize" / "The list comes back in order" / "Ranked by fit, timing, and strength of evidence, with the reasoning attached."
  4. "Step 04 / Activate" / "Your rep gets what they need" / "The buying group, the angle, and an audience ready to run. We run and track the first campaigns with you."
- Footnote: "Every result makes it sharper. Which accounts convert, which emails get replies, and which signals hold up all feed back into the score."

### S2. Confidence

- Eyebrow: Keep ("{NN} / Confidence")
- Headline: "Verified by SAP evidence, not plain filters."
- State cards: "Confirmed ECC", "Confirmed S/4HANA", "Unknown"
- Body: "Finding no evidence that a company runs S/4HANA is not proof that it still runs ECC. It usually means no data. Every state is checked against SAP evidence, and accounts we cannot confirm stay labelled unknown rather than padding the list."

### S3. CTA

- Headline: "Tell us what your SAP practice does best. We will show you who matches."
- Email placeholder and label: Keep ("Work email")
- Button: Keep ("Request access")
- Small print: "Early access. We set up your profile with you."

---

## Variant A: The gap

### A-1. Hero

- Headline: "Revenue platform, purpose built for SAP partners."
- Subhead: "Generic lead gen tools see your market as an industry code and a headcount. LeadPlus reads SAP-specific evidence to show which accounts match your practice, and when a transformation is taking shape."
- Primary button: Keep ("See how it works")
- Secondary link: Keep text ("How we source signals"). **Fix the target:** point it at the 02 The gap section instead of Confidence.
- Signal feed header: Keep ("Signal feed")
- Feed rows (source / fragment / age):
  - "JOB POSTING" / "Senior ABAP role, S/4HANA conversion" / "2d"
  - "LINKEDIN" / "New ERP Director, previously at a consultancy" / "6d"
  - "10-K" / "Systems investment named in filing" / "11d"
  - "JOB POSTING" / "SAP architect role, clean core wording" / "18d"
  - "PRESS RELEASE" / "New integration partner announced" / "24d"
  - "JOB POSTING" / "RISE and BTP roles opened" / "31d"

### A-2. How it works

Shared (S1).

### A-3. The gap

- Eyebrow: Keep ("02 / The gap")
- Left column heading: "What generic lead gen reads"
  - "SAP ECC installed"
  - "Company size"
  - "Industry"
  - "A generic migration email"
  - "Results stored, never learned from"
- Right column heading: "What LeadPlus reads"
  - "S/4HANA and RISE hiring"
  - "ERP leadership changes, and who the new people are"
  - "SAP architecture roles"
  - "Clean core and data signals"
  - "SI activity on the account"
- Coverage panel header: Keep ("Where the signal comes from")
- Coverage rows (label / description / cadence):
  - "Public filings" / "10-K and 10-Q language on system constraints, systems programs, and capital allocation." / "Quarterly"
  - "SAP hiring" / "S/4HANA, RISE, and architecture roles, with the release and module names inside the requirements." / "Weekly"
  - "Leadership moves" / "New CIOs, ERP directors, and program leads, and the migrations they ran before." / "Weekly"
  - "Partner activity" / "SI announcements, case studies, and speaking slots tied to the account." / "Continuous"
  - "Geography and capability" / "Where the account operates, matched against where your practice can deliver." / "Continuous"

### A-4. What the rep gets

- Eyebrow: "03 / What the rep gets"
- Headline: "Everything a rep needs to make the call"
- Account card: Keep title and details ("Midwest industrial manufacturer", "$180M revenue", "900 employees", "Ohio"). Footer: "SCORE 92"
- Resolution rows (label / pill / value / explanation):
  - "Why now" / "Confirmed" / "Three migration signals in 45 days" / "An S/4HANA conversion role, a new ERP director, and a systems line in the latest filing, read together rather than one at a time."
  - "Who" / "Confirmed" / "CIO, VP Apps, ERP Director" / "The buying group, including who arrived recently and what they did before."
  - "Stack" / "Confirmed" / "ECC 6.0, on premise" / "Read from the release and module names inside open SAP roles, not from a stale technographic tag."
  - "Phase" / "Inferred" / "Design, pre-RFP" / "Evaluation, design, partner selection, or already in flight. Read from role seniority, hiring sequence, and the language in the requirements."
  - **NEW ROW (flagged)** "Angle" / "Inferred" / "Migration readiness and integration modernization" / "The opening that fits both what the evidence shows and what your practice does best."
- Caption: "Illustrative account. Every field in the product carries a source and a date."

### A-5. Confidence

Shared (S2). Eyebrow 04.

### A-6. Scope

- Eyebrow: Keep ("05 / Scope")
- Headline: "Learn one vertical. Repeat across many."
- Body: "We start with SAP services: migration, clean core, RISE, and integration. The same method of learning a vertical deeply carries to the next, with IT services and cybersecurity where we are headed."

### A-7. CTA

Shared (S3).

---

## Variant B: Deal shape

### B-1. Hero

- Headline (two lines): "Revenue platform," / "purpose built for SAP partners."
- Subhead: "A brownfield conversion, a greenfield rebuild, a single site rollout, and a clean core extension want four different benches. We read the shape from SAP evidence before anyone has written a brief."
- Primary button: Keep ("See how we classify")

### B-2. How it works

Shared (S1).

### B-3. Four shapes

- Eyebrow: Keep ("02 / Four shapes")
- Practice panel: Keep header ("Your practice")
  - Keep ("Industry": "Logistics and distribution")
  - "Module focus": "EWM, TM"
  - Keep ("Project type": "Single site rollout")
- Match rows: Keep all three
- Caption: Keep
- Shape cards:
  - **"Brownfield conversion"**
    - "ECC is converted to S/4HANA in place, with its history and custom code carried forward."
    - Signals we read: "Conversion wording in SAP role requirements"; "Existing module names retained"; "Long-tenure ABAP development staff"
    - Keep ("For your bid: Custom code remediation is the scope driver.")
  - **"Greenfield rebuild"**
    - "S/4HANA is stood up fresh and the business moves onto redesigned processes."
    - Signals we read: "Process redesign language"; "ERP leadership hired from outside"; "Parallel environment roles"
    - Keep ("For your bid: Process design capacity matters more than remediation.")
  - **"Single site rollout"**
    - Keep definition, signals, and bid line
  - **"Extension without migration"**
    - "The ECC core stays where it is while integration, data, and surrounding systems are modernized around it."
    - Signals we read: "Integration and BTP roles"; "Clean core and data platform language"; "No conversion wording anywhere"
    - Keep ("For your bid: The core is not in play. Bid the edges.")

### B-4. Phase

- Eyebrow, timeline stages, group labels: Keep
- Body: "A transformation has a shape and a phase. The earlier the phase, the more the shape has to be read rather than looked up. We read it from hiring sequence, leadership moves, and partner activity either way."

### B-5. What the rep gets

- Eyebrow: "04 / What the rep gets"
- Cards:
  - **"Why now"**: "Shape and phase show whether an account is forming a decision, read from hiring sequence, leadership moves, and partner activity rather than a single signal."
  - **"Who"**: "A conversion needs remediation depth. A rebuild needs process design. You see who arrived on their side and what they have done before, so you staff the right bench."
  - **"The angle"**: "The same install base supports very different proposals. Shape sets the angle, and the range, long before anyone asks you for a number."

### B-6. Confidence

Shared (S2). Eyebrow 05.

### B-7. CTA

Shared (S3).

---

## Variant C: Direction

### C-1. Hero

- Headline: "Revenue platform, purpose built for SAP partners."
- Subhead: "SAP customers on the same release are moving in different directions: converting to S/4HANA, replatforming, or staying on ECC and extending. We read which, from public evidence, without taking a side."
- Primary button: Keep ("See how we read direction")

### C-2. How it works

Shared (S1).

### C-3. Reading direction

- Eyebrow: Keep
- Timeline markers (label / source tag):
  - "First SAP contractor role posted" / "JOB POSTING"
  - "ERP director hired from a consultancy" / "LINKEDIN"
  - "Clean core and integration roles appear" / "JOB POSTING"
  - Keep ("Systems investment language enters the filing" / "10-K")
  - "SI activity on the account" / "PRESS RELEASE"
  - Keep ("Direction stated outright" / "PUBLIC")
- Region label: Keep ("where LeadPlus operates")
- Caption: "Illustrative sequence. The same signals appear whether a company is converting, replatforming, or staying and extending. What changes is what they say."
- Direction lanes:
  - Start card: Keep ("Starting point") / "ECC today"
  - "Converting to S/4HANA": "Conversion wording in roles"; "S/4HANA and RISE hiring"
  - Keep ("Replatforming": "A different platform named in roles"; "Parallel environment hiring")
  - "Staying and extending": "Integration and BTP roles"; "Support contract renewed"
- Caption: Keep ("We report the direction. Which of these is your opportunity depends on what you do.")

### C-4. What the signals say

- Eyebrow: Keep
- Signal rows (signal / source / direction):
  - "Conversion wording in SAP role requirements" / "JOB POSTING" / "CONVERT TO S/4HANA"
  - Keep ("A different platform named in requirements" / "JOB POSTING" / "REPLATFORM")
  - "Integration and BTP roles, no conversion wording" / "JOB POSTING" / "STAY AND EXTEND"
  - Keep ("Support and enhancement contract renewed" / "PRESS RELEASE" / "STAY AND EXTEND")
  - Keep ("Systems investment language enters the filing" / "10-K" / "NOT STATED")
  - "ERP director hired from a consultancy" / "LINKEDIN" / "NOT STATED"
- Caption: "Illustrative signals. No single signal makes a decision. We report the direction the evidence supports, including when it supports none."

### C-5. Always on

- Eyebrow: "04 / Always on"
- Body: "Generic tools make you re-run a search and diff the results yourself. We watch every account that matches your practice, all the time: SAP hiring, leadership moves, filings, and partner activity. When something changes, you hear about it with the source, the date, the people involved, and what it does or does not say about direction."
- Alerts header: Keep ("Alerts")
- Alert rows:
  - Keep ("Midwest industrial manufacturer" / "Integration roles opened, no conversion wording" / "2d")
  - "Southeast food processor" / "S/4HANA and RISE roles posted" / "9d"
  - "Regional building products group" / "New ERP director, ran a conversion before" / "16d"
- Caption: Keep

### C-6. Confidence

Shared (S2). Eyebrow 05.

### C-7. CTA

Shared (S3).

---

## Variant D: Context

### D-1. Hero

- Headline: "Revenue platform, purpose built for SAP partners."
- Subhead: "A maintenance date, an audit, an ownership change, or a new plant puts an SAP system in play. We read that context alongside the install base, so your rep knows why now, who, and the angle."
- Primary button: Keep ("See the context")

### D-2. How it works

Shared (S1).

### D-3. Five kinds of context

- Eyebrow: Keep
- Rows (label / title / description):
  - "Maintenance" / "SAP support timelines" / "ECC mainstream maintenance ends in 2027. A published date moves a system from a preference into a budget line."
  - Keep Compliance row
  - Keep Ownership row
  - Keep Trade row
  - Keep Growth row
- Evidence card: Keep header ("Account" / "Regional building products manufacturer") and column headers
  - "Support timeline confirmed" / "Running ECC 6.0, mainstream maintenance ends 2027" / "JOB POSTING" / "2026-03-11"
  - Keep the other three rows
- Caption: Keep

### D-4. Why this changes the conversation

- Eyebrow: Keep
- Body: "An account that fits your profile is a candidate. An account that fits and whose system is visibly in play is a conversation you can actually open. For those accounts, your rep gets why now, the buying group, and the angle, with an audience ready to run. We run and track the first campaigns with you."
- Comparison boxes:
  - "Fits your profile"
  - "Fits your profile, with why now, who, and the angle"

### D-5. Four pillars

- Eyebrow: "04 / Four pillars, built for SAP"
- Rows (label / description):
  - "Curated vertical database" / "We know how each SAP version, support model, and migration type gets described."
  - "Signal interpretation" / "No single signal makes a decision. We read the stack, the deployment model, and the macro pressure as one picture."
  - "Stakeholder intelligence" / "A new hire from a consultancy with migration history is a decision forming. We see who arrived and what they have done before."
  - "Learning loop" / "Which accounts convert, which emails get replies, and which signals hold up. It all feeds back into the score."

### D-6. The coverage gap

- Eyebrow: Keep
- Body: "Below a certain size, SAP does not assign a direct account team. No partner has been handed the introduction and no relationship is already in place. That is where the coverage gap is widest across the US mid-market, and where reading the public evidence is worth the most."

### D-7. Confidence

Shared (S2). Eyebrow 06.

### D-8. CTA

Shared (S3).
