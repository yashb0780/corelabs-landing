import { Fragment } from 'react'
import {
  Caption,
  Cta,
  HeroActions,
  HeroHeading,
  HeroSubhead,
  IcpSection,
  Section,
  SectionHeading,
  SectionMarker,
  ThreeStates,
} from './_shared.jsx'

/**
 * Variant A — "The absence".
 *
 * Dark-first. Near-black ground, elevated surfaces, very low contrast borders
 * and a single indigo accent used only for state and the primary action.
 *
 * Everything here is on-token: colour comes from text-ink / bg-band /
 * border-border / text-confirmed / text-inferred / text-unknown, type from
 * font-sans and font-mono. No hardcoded colours or font stacks. See CLAUDE.md.
 *
 * No customer names, logos, testimonials or statistics appear on this page.
 * The account in the resolution diagram is illustrative and labelled as such;
 * the hero signal feed is illustrative in the same way.
 *
 * Vertical rhythm: every section carries pt-[120px]. A section also carries
 * pb-[120px] when the next one has a different background, so the 120px gap
 * survives across a band edge instead of doubling.
 */

/* Linear: dark-first. Light mode is a clean inversion on a #FAFAFA ground,
   not a different design. The indigo accent is the only colour in either mode
   that is not text, surface or signal. */
export const theme = {
  defaultMode: 'dark',
  dark: {
    '--bg': '#08090A',
    '--band': '#0D0E10',
    '--surface': '#141516',
    '--ink': '#E8E8E8',
    '--unknown': '#8A8F98',
    '--border': 'rgba(255, 255, 255, 0.08)',
    '--accent': '#5E6AD2',
    '--on-accent': '#FFFFFF',
    '--confirmed': '#4CB782',
    '--inferred': '#F2994A',
    '--cta-bg': '#101113',
    '--cta-fg': '#E8E8E8',
    '--radius': '6px',
    '--elevation': 'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
    '--display-tracking': '-0.03em',
  },
  light: {
    '--bg': '#FAFAFA',
    '--band': '#F1F1F2',
    '--surface': '#FFFFFF',
    '--ink': '#08090A',
    '--unknown': '#6B7080',
    '--border': 'rgba(0, 0, 0, 0.09)',
    '--accent': '#5E6AD2',
    '--on-accent': '#FFFFFF',
    '--confirmed': '#0F7B4F',
    '--inferred': '#B45309',
    '--cta-bg': '#08090A',
    '--cta-fg': '#E8E8E8',
    '--radius': '6px',
    '--elevation': 'inset 0 1px 0 rgba(255, 255, 255, 0.7)',
    '--display-tracking': '-0.03em',
  },
}

/* Gap between resolution rows. Kept in JS because the connector spine has to
   bridge it to stay continuous between rows. */
const ROW_GAP = 24

export default function VariantA() {
  return (
    <div className="font-sans text-ink">
      <Hero />
      <IcpSection />
      <Comparison />
      <Resolution />
      <ThreeStates index="04" />
      <StartingWithSap />
      <Cta />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

/* Illustrative signal fragments, in the same spirit as the account block in
   section 3: no company is named and nothing here is presented as a statistic. */
const SIGNALS = [
  { source: 'JOB POSTING', fragment: 'Senior ABAP role, S/4HANA conversion', age: '2d' },
  { source: 'LINKEDIN', fragment: 'New ERP Director, previously at a consultancy', age: '6d' },
  { source: '10-K', fragment: 'Systems investment named in filing', age: '11d' },
  { source: 'JOB POSTING', fragment: 'SAP architect role, clean core wording', age: '18d' },
  { source: 'PRESS RELEASE', fragment: 'New integration partner announced', age: '24d' },
  { source: 'JOB POSTING', fragment: 'RISE and BTP roles opened', age: '31d' },
]

function Hero() {
  return (
    <Section className="pt-[120px] pb-[120px]">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-x-16">
        <div>
          <HeroHeading className="max-w-[16ch]">
            Revenue platform, purpose built for SAP partners.
          </HeroHeading>
          <HeroSubhead>
            Generic lead gen tools see your market as an industry code and a
            headcount. LeadPlus reads SAP-specific evidence to show which
            accounts match your practice, and when a transformation is taking
            shape.
          </HeroSubhead>
          <HeroActions
            primary={{ href: '#how-we-learn', label: 'See how it works' }}
            secondary={{ href: '#the-gap', label: 'How we source signals' }}
          />
        </div>

        <SignalFeed />
      </div>
    </Section>
  )
}

/* Static log, not a dashboard: no animation, no chrome, one grid so the source
   and age columns align down the whole panel. */
function SignalFeed() {
  return (
    <div className="overflow-hidden rounded-theme border border-border bg-surface shadow-[var(--elevation)]">
      <div className="border-b border-border px-4 py-3 font-mono text-[13px] tracking-wider text-unknown uppercase">
        Signal feed
      </div>

      <div className="grid grid-cols-[max-content_1fr_max-content] leading-[1.5]">
        {SIGNALS.map((s, i) => {
          const sep = i > 0 ? 'border-t border-border' : ''
          return (
            <Fragment key={`${s.source}-${s.age}`}>
              <div className={`${sep} py-3 pr-3 pl-4 font-mono text-[13px] text-ink/60`}>
                {s.source}
              </div>
              <div className={`${sep} py-3 pr-3 text-[14px] leading-[1.5]`}>
                {s.fragment}
              </div>
              <div
                className={`${sep} py-3 pr-4 text-right font-mono text-[12px] text-unknown`}
              >
                {s.age}
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section 2 — comparison table                                               */
/* -------------------------------------------------------------------------- */

const GENERIC = [
  'SAP ECC installed',
  'Company size',
  'Industry',
  'A generic migration email',
  'Results stored, never learned from',
]

const NEEDED = [
  'S/4HANA and RISE hiring',
  'ERP leadership changes, and who the new people are',
  'SAP architecture roles',
  'Clean core and data signals',
  'SI activity on the account',
]

function Comparison() {
  return (
    <Section id="the-gap" className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="02" label="The gap" />

      {/* Subgrid keeps the two columns row-aligned on desktop while leaving each
          column a single container, so the mobile stack reads as two lists
          rather than interleaved cells. */}
      <div className="mt-12 grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-y-0 lg:[grid-template-rows:repeat(6,auto)]">
        {/* Left: plain, no box. */}
        <div className="lg:row-span-6 lg:grid lg:grid-rows-subgrid">
          <h2 className="pr-8 pt-5 pb-5 font-heading text-[20px] leading-[1.3] font-semibold tracking-[-0.01em] text-ink/60">
            What generic lead gen reads
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
        <div className="rounded-theme border border-border bg-surface shadow-[var(--elevation)] lg:row-span-6 lg:grid lg:grid-rows-subgrid">
          <h2 className="px-6 pt-5 pb-5 font-heading text-[20px] leading-[1.3] font-semibold tracking-[-0.01em]">
            What LeadPlus reads
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

      <SourceCoverage />
    </Section>
  )
}

const COVERAGE = [
  {
    label: 'Public filings',
    description:
      '10-K and 10-Q language on system constraints, systems programs, and capital allocation.',
    cadence: 'Quarterly',
  },
  {
    label: 'SAP hiring',
    description:
      'S/4HANA, RISE, and architecture roles, with the release and module names inside the requirements.',
    cadence: 'Weekly',
  },
  {
    label: 'Leadership moves',
    description:
      'New CIOs, ERP directors, and program leads, and the migrations they ran before.',
    cadence: 'Weekly',
  },
  {
    label: 'Partner activity',
    description:
      'SI announcements, case studies, and speaking slots tied to the account.',
    cadence: 'Continuous',
  },
  {
    label: 'Geography and capability',
    description:
      'Where the account operates, matched against where your practice can deliver.',
    cadence: 'Continuous',
  },
]

/* One grid so the label and cadence columns align down the whole panel. */
function SourceCoverage() {
  return (
    <div className="mt-12 overflow-hidden rounded-theme border border-border bg-surface shadow-[var(--elevation)]">
      <div className="border-b border-border px-5 py-3 font-mono text-[13px] tracking-wider text-unknown uppercase">
        Where the signal comes from
      </div>
      <div className="grid grid-cols-1 leading-[1.5] sm:grid-cols-[max-content_1fr_max-content]">
        {COVERAGE.map((c, i) => {
          /* Stacked below sm, the three cells of a row are one visual group, so
             only the first carries the separator. From sm up they are a real
             grid row and all three need it to draw one continuous hairline. */
          const first = i > 0 ? 'border-t border-border' : ''
          const rest = i > 0 ? 'border-border sm:border-t' : ''
          return (
            <Fragment key={c.label}>
              <div
                className={`${first} px-5 pt-4 font-mono text-[13px] tracking-wider uppercase sm:w-[200px] sm:py-4 sm:pr-4`}
              >
                {c.label}
              </div>
              <div className={`${rest} px-5 pt-2 text-[14px] sm:px-0 sm:py-4 sm:pr-4`}>
                {c.description}
              </div>
              <div
                className={`${rest} px-5 pt-1 pb-4 font-mono text-[12px] text-unknown sm:py-4 sm:pl-0 sm:text-right`}
              >
                {c.cadence}
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section 3 — resolution diagram                                             */
/* -------------------------------------------------------------------------- */

const RESOLUTIONS = [
  {
    label: 'Why now',
    value: 'Three migration signals in 45 days',
    explanation:
      'An S/4HANA conversion role, a new ERP director, and a systems line in the latest filing, read together rather than one at a time.',
    confidence: 'confirmed',
  },
  {
    label: 'Who',
    value: 'CIO, VP Apps, ERP Director',
    explanation:
      'The buying group, including who arrived recently and what they did before.',
    confidence: 'confirmed',
  },
  {
    label: 'Stack',
    value: 'ECC 6.0, on premise',
    explanation:
      'Read from the release and module names inside open SAP roles, not from a stale technographic tag.',
    confidence: 'confirmed',
  },
  {
    label: 'Phase',
    value: 'Design, pre-RFP',
    explanation:
      'Evaluation, design, partner selection, or already in flight. Read from role seniority, hiring sequence, and the language in the requirements.',
    confidence: 'inferred',
  },
  {
    label: 'Angle',
    value: 'Migration readiness and integration modernization',
    explanation:
      'The opening that fits both what the evidence shows and what your practice does best.',
    confidence: 'inferred',
  },
]

function Resolution() {
  return (
    <Section id="how-it-works" className="pt-[120px]">
      <SectionMarker index="03" label="What the rep gets" />
      <div className="mt-5">
        <SectionHeading>Everything a rep needs to make the call</SectionHeading>
      </div>

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

      <Caption>
        Illustrative account. Every field in the product carries a source and a
        date.
      </Caption>
    </Section>
  )
}

function AccountBlock() {
  return (
    <div className="rounded-theme border border-border bg-surface p-6 shadow-[var(--elevation)]">
      <h3 className="font-heading text-[20px] leading-[1.3] font-semibold tracking-[-0.01em]">
        Midwest industrial manufacturer
      </h3>
      <dl className="mt-4 space-y-1.5 font-mono text-[13px] text-ink/60">
        <div>$180M revenue</div>
        <div>900 employees</div>
        <div>Ohio</div>
      </dl>
      <div className="mt-6 border-t border-border pt-4 text-right font-mono text-[13px] text-ink/60">
        SCORE 92
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
      <div className="flex-1 rounded-theme border border-border bg-surface p-5 shadow-[var(--elevation)]">
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
/* Section 5 — starting with SAP                                              */
/* -------------------------------------------------------------------------- */

function StartingWithSap() {
  return (
    <section className="bg-band px-6 py-[120px]">
      <div className="mx-auto w-full max-w-content">
        <SectionMarker index="05" label="Scope" centered />
      </div>
      <div className="mx-auto mt-5 w-full max-w-[500px] text-center">
        <h2 className="font-heading text-[32px] leading-[1.2] font-semibold tracking-display">
          Learn one vertical. Repeat across many.
        </h2>
        <p className="mt-6 text-[16px] leading-[1.6] text-ink/70">
          We start with SAP services: migration, clean core, RISE, and
          integration. The same method of learning a vertical deeply carries to
          the next, with IT services and cybersecurity where we are headed.
        </p>
      </div>
    </section>
  )
}
