/**
 * Variant A — "The absence".
 *
 * Everything here is on-token: colour comes from text-ink / bg-band /
 * border-border / text-confirmed / text-inferred / text-unknown, type from
 * font-sans and font-mono. No hardcoded colours or font stacks. See CLAUDE.md.
 *
 * No customer names, logos, testimonials or statistics appear on this page.
 * The account in the resolution diagram is illustrative and labelled as such.
 */

/* Gap between resolution rows. Kept in JS because the connector spine has to
   bridge it to stay continuous between rows. */
const ROW_GAP = 24

export default function VariantA() {
  return (
    <div className="font-sans text-ink">
      <Hero />
      <Comparison />
      <Resolution />
      <ThreeStates />
      <StartingWithSap />
      <Cta />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Layout primitives                                                          */
/* -------------------------------------------------------------------------- */

function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-16 px-6 ${className}`}>
      <div className="mx-auto w-full max-w-content">{children}</div>
    </section>
  )
}

function SectionHeading({ children }) {
  return (
    <h2 className="max-w-3xl text-[32px] leading-[1.2] font-semibold tracking-[-0.02em]">
      {children}
    </h2>
  )
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <Section className="pt-[120px] pb-[120px]">
      <h1 className="max-w-[16ch] text-[40px] leading-[1.05] font-semibold tracking-[-0.02em] sm:text-[56px] lg:text-[64px]">
        Every lead gen tool was built for someone else.
      </h1>

      <p className="mt-8 max-w-[62ch] text-[16px] leading-[1.6] text-ink/70">
        LeadPlus is built for system integrators in the ERP space. Not
        firmographics. Not generic intent keywords. What a company is actually
        running, what kind of project it is, and how far along they already are.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href="#how-it-works"
          className="rounded-md bg-ink px-5 py-3 text-[15px] font-medium text-bg transition-opacity hover:opacity-90"
        >
          See how it works
        </a>
        <a
          href="#three-states"
          className="border-b border-border pb-0.5 text-[15px] text-ink/70 transition-colors hover:border-ink hover:text-ink"
        >
          How we source signals
        </a>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* Section 2 — comparison table                                               */
/* -------------------------------------------------------------------------- */

const GENERIC = [
  'Industry code',
  'Employee count',
  'Revenue band',
  'A technographic tag that says the ERP vendor name and nothing more',
  'Intent keywords scraped from a publisher network',
]

const NEEDED = [
  'The specific version and release they are running, with a dated source',
  'Whether it is a conversion, a rebuild, or a single site rollout',
  'Whether they are in evaluation, design, or have already chosen',
  'Which regulatory or market pressure is forcing the timeline',
  'Who inside the account is doing the work',
]

function Comparison() {
  return (
    <Section className="pb-[120px]">
      {/* Subgrid keeps the two columns row-aligned on desktop while leaving each
          column a single container, so the mobile stack reads as two lists
          rather than interleaved cells. */}
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-y-0 lg:[grid-template-rows:repeat(6,auto)]">
        {/* Left: plain, no box. */}
        <div className="lg:row-span-6 lg:grid lg:grid-rows-subgrid">
          <h2 className="pr-8 pt-5 pb-5 text-[20px] leading-[1.3] font-semibold tracking-[-0.01em] text-ink/60">
            What generic lead gen gives you
          </h2>
          {GENERIC.map((t) => (
            <div
              key={t}
              className="border-t border-border py-5 pr-8 text-[16px] leading-[1.6] text-ink/60"
            >
              {t}
            </div>
          ))}
        </div>

        {/* Right: bordered and filled so it reads as the answer. */}
        <div className="border border-border bg-band lg:row-span-6 lg:grid lg:grid-rows-subgrid">
          <h2 className="px-6 pt-5 pb-5 text-[20px] leading-[1.3] font-semibold tracking-[-0.01em]">
            What an SI actually needs to bid
          </h2>
          {NEEDED.map((t) => (
            <div
              key={t}
              className="border-t border-border px-6 py-5 text-[16px] leading-[1.6]"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* Section 3 — resolution diagram                                             */
/* -------------------------------------------------------------------------- */

const RESOLUTIONS = [
  {
    label: 'Stack',
    value: 'ECC 6.0, on premise',
    explanation:
      'Read from the version and module names inside their open engineering roles, not from a stale technographic tag.',
    confidence: 'confirmed',
  },
  {
    label: 'Project type',
    value: 'Brownfield conversion',
    explanation:
      'Conversion, greenfield rebuild, single site rollout, or modernization without migration. Four different proposals, four different price points.',
    confidence: 'inferred',
  },
  {
    label: 'Phase',
    value: 'Design, pre-RFP',
    explanation:
      'Evaluation, design, partner selection, or already in flight. Read from role seniority, hiring sequence, and the language in the requirements.',
    confidence: 'inferred',
  },
  {
    label: 'Pressure',
    value: 'Compliance deadline, defense supply chain',
    explanation:
      'Maintenance end dates, compliance mandates, tariff exposure, and reshoring commitments. The macro reason the timeline is not optional.',
    confidence: 'confirmed',
  },
]

function Resolution() {
  return (
    <Section id="how-it-works" className="pb-[120px]">
      <SectionHeading>Four things we resolve before an RFP exists</SectionHeading>

      <div className="mt-16 grid grid-cols-1 gap-y-10 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-x-10 lg:gap-y-0">
        {/* Left: what everyone else can see. Deliberately sparse. */}
        <div className="relative">
          <AccountBlock />
          {/* Trunk: account block into the spine, across the grid gap. */}
          <div
            aria-hidden
            className="absolute top-1/2 left-full hidden h-px w-10 bg-border lg:block"
          />
        </div>

        {/* Right: what we resolve. */}
        <div>
          {RESOLUTIONS.map((r, i) => (
            <ResolutionRow
              key={r.label}
              {...r}
              position={
                i === 0 ? 'first' : i === RESOLUTIONS.length - 1 ? 'last' : 'middle'
              }
            />
          ))}
        </div>
      </div>

      <p className="mt-8 text-[14px] leading-[1.6] text-unknown">
        Illustrative account. Every field in the product carries a source and a
        date.
      </p>
    </Section>
  )
}

function AccountBlock() {
  return (
    <div className="border border-border bg-bg p-6">
      <h3 className="text-[20px] leading-[1.3] font-semibold tracking-[-0.01em]">
        Midwest industrial manufacturer
      </h3>
      <dl className="mt-4 space-y-1.5 font-mono text-[13px] text-ink/60">
        <div>$180M revenue</div>
        <div>900 employees</div>
        <div>Ohio</div>
      </dl>
      <div className="mt-6 border-t border-border pt-4 text-right font-mono text-[13px] text-ink/60">
        ICP FIT 92
      </div>
    </div>
  )
}

function ResolutionRow({ label, value, explanation, confidence, position }) {
  /* The spine is drawn per row so that it runs from the first row's centre to
     the last row's centre and no further — each row contributes its own
     segment plus the gap below it. */
  const spine =
    position === 'first'
      ? { top: '50%', bottom: -ROW_GAP }
      : position === 'last'
        ? { top: 0, height: '50%' }
        : { top: 0, bottom: -ROW_GAP }

  return (
    <div
      className="flex items-stretch"
      style={{ marginBottom: position === 'last' ? 0 : ROW_GAP }}
    >
      {/* Connector column */}
      <div aria-hidden className="relative hidden w-12 shrink-0 lg:block">
        <div className="absolute left-0 w-px bg-border" style={spine} />
        <div className="absolute top-1/2 right-0 left-0 h-px bg-border" />
      </div>

      {/* Panel */}
      <div className="flex-1 border border-border bg-bg p-5">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[13px] tracking-wider text-unknown uppercase">
            {label}
          </span>
          <ConfidencePill confidence={confidence} />
        </div>
        <div className="mt-3 text-[18px] leading-[1.35] font-semibold tracking-[-0.01em]">
          {value}
        </div>
        <p className="mt-2 text-[14px] leading-[1.6] text-ink/70">{explanation}</p>
      </div>
    </div>
  )
}

function ConfidencePill({ confidence }) {
  const isConfirmed = confidence === 'confirmed'
  return (
    <span
      className={`shrink-0 rounded-[4px] border px-2 py-0.5 font-mono text-[13px] tracking-wider uppercase ${
        isConfirmed
          ? 'border-confirmed/30 text-confirmed'
          : 'border-inferred/30 text-inferred'
      }`}
    >
      {isConfirmed ? 'Confirmed' : 'Inferred'}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/* Section 4 — three states                                                   */
/* -------------------------------------------------------------------------- */

const STATES = [
  { label: 'Confirmed legacy', className: 'text-confirmed' },
  { label: 'Confirmed modern', className: 'text-confirmed' },
  { label: 'Unknown', className: 'text-unknown' },
]

function ThreeStates() {
  return (
    <Section id="three-states" className="pb-[120px]">
      <SectionHeading>Three states, never two.</SectionHeading>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {STATES.map((s) => (
          <div key={s.label} className="border border-border px-6 py-8">
            <div
              className={`text-[18px] leading-[1.35] font-semibold tracking-[-0.01em] ${s.className}`}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-[62ch] text-[16px] leading-[1.6] text-ink/70">
        The absence of evidence that a company has modernized is not proof that
        they have not. It usually means no data. We label those accounts unknown
        rather than counting them to make a list look bigger.
      </p>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* Section 5 — starting with SAP                                              */
/* -------------------------------------------------------------------------- */

function StartingWithSap() {
  return (
    <section className="bg-band px-6 py-24">
      <div className="mx-auto w-full max-w-[500px] text-center">
        <h2 className="text-[32px] leading-[1.2] font-semibold tracking-[-0.02em]">
          Starting with SAP
        </h2>
        <p className="mt-6 text-[16px] leading-[1.6] text-ink/70">
          The signal layer is vendor agnostic. We are starting where the
          mid-market install base is largest and the coverage gap is widest, and
          expanding across the ERP landscape from there.
        </p>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Section 6 — CTA                                                            */
/* -------------------------------------------------------------------------- */

function Cta() {
  return (
    <section className="bg-ink px-6 py-[120px] text-bg">
      <div className="mx-auto w-full max-w-content">
        <h2 className="max-w-[20ch] text-[32px] leading-[1.2] font-semibold tracking-[-0.02em]">
          Tell us your ICP. We will show you what we find.
        </h2>

        {/* NOTE: not wired to a backend yet — there is no submit handler and no
            endpoint. Hook this up before the site goes live. */}
        <form
          className="mt-10 flex max-w-[520px] flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="cta-email" className="sr-only">
            Work email
          </label>
          <input
            id="cta-email"
            type="email"
            name="email"
            required
            placeholder="Work email"
            className="flex-1 rounded-md border border-bg/25 bg-transparent px-4 py-3 text-[15px] text-bg placeholder:text-bg/40 focus:border-bg/60 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-bg px-5 py-3 text-[15px] font-medium text-ink transition-opacity hover:opacity-90"
          >
            Request access
          </button>
        </form>

        <p className="mt-4 text-[14px] leading-[1.6] text-bg/50">
          Early access, limited slots.
        </p>
      </div>
    </section>
  )
}
