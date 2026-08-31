import {
  Caption,
  Cta,
  HeroActions,
  HeroHeading,
  HeroSubhead,
  IcpSection,
  Section,
  SectionMarker,
  ThreeStates,
} from './_shared.jsx'

/**
 * Variant B — "The deal shape". Design language: Figma.
 *
 * Bright and friendly. The four accents are functional, not decorative: each
 * of the four project shapes owns one, and the same colour identifies it
 * wherever it appears.
 *
 * No customer names, logos, testimonials, quotes or statistics.
 */

/* Figma: pure white ground, four functional accents, soft visible borders,
   real elevation, rounded corners, normal tracking. */
export const theme = {
  defaultMode: 'light',
  light: {
    '--bg': '#FFFFFF',
    '--band': '#F5F7FA',
    '--surface': '#FFFFFF',
    '--ink': '#1E1E1E',
    '--unknown': '#757575',
    '--border': '#E1E4E8',
    '--accent': '#0D99FF',
    '--on-accent': '#FFFFFF',
    '--accent-2': '#0FA958',
    '--accent-3': '#9747FF',
    '--accent-4': '#E07C00',
    '--confirmed': '#0FA958',
    '--inferred': '#B45309',
    '--cta-bg': '#1E1E1E',
    '--cta-fg': '#FFFFFF',
    '--radius': '10px',
    '--elevation': '0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.06)',
    '--display-tracking': '0em',
  },
  dark: {
    '--bg': '#1E1E1E',
    '--band': '#262626',
    '--surface': '#2C2C2C',
    '--ink': '#FFFFFF',
    '--unknown': '#B3B3B3',
    '--border': '#444444',
    '--accent': '#4DAFFF',
    '--on-accent': '#0F1113',
    '--accent-2': '#3ECF8E',
    '--accent-3': '#B47FFF',
    '--accent-4': '#FFB84D',
    '--confirmed': '#3ECF8E',
    '--inferred': '#E0A458',
    '--cta-bg': '#141414',
    '--cta-fg': '#FFFFFF',
    '--radius': '10px',
    '--elevation': '0 1px 2px rgba(0, 0, 0, 0.45), 0 4px 14px rgba(0, 0, 0, 0.35)',
    '--display-tracking': '0em',
  },
}

export default function VariantB() {
  return (
    <div className="font-sans text-ink">
      <Hero />
      <IcpSection />
      <FourShapes />
      <Phase />
      <WhyScope />
      <ThreeStates index="05" />
      <Cta />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <Section className="pt-[120px] pb-[120px]">
      {/* Two statements, same size, each its own line block. */}
      <HeroHeading className="max-w-[22ch]">
        <span className="block">Not every ERP project</span>
        <span className="block">is your project.</span>
      </HeroHeading>
      <HeroSubhead>
        Scope decides whether a deal is yours. Conversion, greenfield rebuild,
        single site rollout, and extension without migration are four different
        pieces of work, wanting four different benches. We classify the shape
        before anyone has written a brief.
      </HeroSubhead>
      <HeroActions primary={{ href: '#shapes', label: 'See how we classify' }} />
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 01 — four shapes                                                           */
/* -------------------------------------------------------------------------- */

const SHAPES = [
  {
    accent: 'var(--accent)',
    title: 'Brownfield conversion',
    definition:
      'The existing system is converted in place, with its history and its customizations carried forward.',
    signals: [
      'Conversion wording in role requirements',
      'Existing module names retained',
      'Long-tenure internal development staff',
    ],
    bid: 'Custom code remediation is the scope driver.',
  },
  {
    accent: 'var(--accent-2)',
    title: 'Greenfield rebuild',
    definition:
      'A new system is stood up alongside the old one and the business is moved onto it.',
    signals: [
      'Process redesign language',
      'Senior leadership hired from outside',
      'Parallel environment roles',
    ],
    bid: 'Process design capacity matters more than remediation.',
  },
  {
    accent: 'var(--accent-3)',
    title: 'Single site rollout',
    definition:
      'One plant or region moves onto a template that already exists elsewhere in the group.',
    signals: [
      'Roles scoped to one location',
      'Template and rollout wording',
      'Regional program leads',
    ],
    bid: 'Speed and template fit decide the shortlist.',
  },
  {
    accent: 'var(--accent-4)',
    title: 'Extension without migration',
    definition:
      'The core stays where it is while integration, reporting, and surrounding systems are replaced.',
    signals: [
      'Integration and data platform roles',
      'Reporting replacement language',
      'No conversion wording anywhere',
    ],
    bid: 'The core is not in play. Bid the edges.',
  },
]

/* Row gap for the match diagram. In JS because the connector spine bridges it. */
const MATCH_GAP = 16

const PRACTICE = [
  { label: 'Industry', value: 'Logistics and distribution' },
  { label: 'Module focus', value: 'WM, EWM, TM' },
  { label: 'Project type', value: 'Single site rollout' },
]

const MATCHES = [
  {
    account: 'Regional freight and warehousing group',
    shape: 'Single site rollout',
    match: 'Strong',
    tone: 'text-confirmed border-confirmed/30',
  },
  {
    account: 'Midwest food distributor',
    shape: 'Brownfield conversion',
    match: 'Partial',
    tone: 'text-inferred border-inferred/30',
  },
  {
    account: 'National parcel carrier',
    shape: 'Greenfield rebuild',
    match: 'Weak',
    tone: 'text-unknown border-unknown/30',
  },
]

function PracticeMatch() {
  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-y-8 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-x-10 lg:gap-y-0">
        <div className="relative">
          <div className="rounded-theme border border-border bg-surface shadow-[var(--elevation)]">
            <div className="border-b border-border px-5 py-3 font-mono text-[13px] tracking-wider text-unknown uppercase">
              Your practice
            </div>
            {PRACTICE.map((row, i) => (
              <div
                key={row.label}
                className={`px-5 py-4 ${i > 0 ? 'border-t border-border' : ''}`}
              >
                <div className="font-mono text-[12px] tracking-wider text-unknown uppercase">
                  {row.label}
                </div>
                <div className="mt-1 font-mono text-[13px]">{row.value}</div>
              </div>
            ))}
          </div>
          {/* Trunk: practice panel into the spine, across the grid gap. */}
          <div
            aria-hidden
            className="absolute top-1/2 left-full hidden h-px w-10 bg-border lg:block"
          />
        </div>

        <div>
          {MATCHES.map((m, i) => (
            <MatchRow
              key={m.account}
              {...m}
              position={
                i === 0 ? 'first' : i === MATCHES.length - 1 ? 'last' : 'middle'
              }
            />
          ))}
        </div>
      </div>

      <Caption>
        Illustrative. The profile on the left is what we build from your site and
        refine with you.
      </Caption>
    </>
  )
}

function MatchRow({ account, shape, match, tone, position }) {
  /* Spine drawn per row so it runs from the first row's centre to the last
     row's centre and no further. */
  const spine =
    position === 'first'
      ? { top: '50%', bottom: -MATCH_GAP }
      : position === 'last'
        ? { top: 0, height: '50%' }
        : { top: 0, bottom: -MATCH_GAP }

  return (
    <div
      className="flex items-stretch"
      style={{ marginBottom: position === 'last' ? 0 : MATCH_GAP }}
    >
      <div aria-hidden className="relative hidden w-12 shrink-0 lg:block">
        <div className="absolute left-0 w-px bg-border" style={spine} />
        <div className="absolute top-1/2 right-0 left-0 h-px bg-border" />
      </div>

      <div className="flex flex-1 flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-theme border border-border bg-surface px-5 py-4 shadow-[var(--elevation)]">
        <div className="min-w-0">
          <div className="text-[16px] leading-[1.4] font-semibold tracking-[-0.01em]">
            {account}
          </div>
          <div className="mt-1 font-mono text-[12px] tracking-wider text-unknown uppercase">
            {shape}
          </div>
        </div>
        <span
          className={`shrink-0 rounded-[4px] border px-2 py-0.5 font-mono text-[12px] tracking-wider uppercase ${tone}`}
        >
          {match}
        </span>
      </div>
    </div>
  )
}

function FourShapes() {
  return (
    <Section id="shapes" className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="02" label="Four shapes" as="h2" />

      <PracticeMatch />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {SHAPES.map((s) => (
          <div
            key={s.title}
            className="flex flex-col overflow-hidden rounded-theme border border-border bg-surface shadow-[var(--elevation)]"
          >
            {/* The shape's accent, as a rule across the top of its panel. */}
            <div
              aria-hidden
              className="h-1 w-full"
              style={{ backgroundColor: s.accent }}
            />
            <div className="flex flex-1 flex-col p-8">
            <h3 className="text-[20px] leading-[1.3] font-semibold tracking-[-0.01em]">
              {s.title}
            </h3>
            <p className="mt-3 text-[16px] leading-[1.6]">{s.definition}</p>

            <div
              className="mt-6 font-mono text-[13px] tracking-wider uppercase"
              style={{ color: s.accent }}
            >
              Signals we read
            </div>
            <ul className="mt-3 space-y-1.5">
              {s.signals.map((sig) => (
                <li key={sig} className="text-[14px] leading-[1.6]">
                  {sig}
                </li>
              ))}
            </ul>

            {/* mt-auto keeps the bid line on the baseline across uneven panels. */}
            <p className="mt-auto pt-6 text-[14px] leading-[1.6] text-unknown italic">
              For your bid: {s.bid}
            </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 02 — phase                                                                 */
/* -------------------------------------------------------------------------- */

/* `read` marks the stages where the shape has to be inferred from signals;
   in the last two it is stated outright. Node fill and label colour follow. */
const PHASES = [
  { name: 'Evaluation', read: true },
  { name: 'Design', read: true },
  { name: 'Partner selection', read: true },
  { name: 'Brief circulated', read: false },
  { name: 'In flight', read: false },
]

const READ_COUNT = PHASES.filter((p) => p.read).length

function Phase() {
  return (
    <Section className="pt-[120px] pb-[120px]">
      <SectionMarker index="03" label="Phase" as="h2" />

      {/* Horizontal strip, lg and up. */}
      <div className="relative mt-16 hidden lg:block">
        {/* Axis terminates on the first and last node rather than running to
            the container edge. Nodes sit at the centre of each of five columns,
            so the first is at 10% and the last at 90%. */}
        <div
          aria-hidden
          className="absolute top-[5px] right-[10%] left-[10%] h-px bg-border"
        />
        <div className="grid grid-cols-5">
          {PHASES.map((p) => (
            <div key={p.name} className="flex flex-col items-center px-3">
              <div
                aria-hidden
                className={`h-[11px] w-[11px] rounded-[4px] border ${
                  p.read ? 'border-ink bg-ink' : 'border-border bg-bg'
                }`}
              />
              <div
                className={`mt-5 text-center text-[16px] leading-[1.4] ${
                  p.read ? '' : 'text-unknown'
                }`}
              >
                {p.name}
              </div>
            </div>
          ))}
        </div>

        {/* Group labels, one per region, rather than repeating under each node. */}
        <div className="mt-6 grid grid-cols-5">
          <div
            className="border-t border-border pt-3 text-center font-mono text-[13px] tracking-wider uppercase"
            style={{ gridColumn: `span ${READ_COUNT}` }}
          >
            shape read from signals
          </div>
          <div
            className="border-t border-border pt-3 text-center font-mono text-[13px] tracking-wider text-unknown uppercase"
            style={{ gridColumn: `span ${PHASES.length - READ_COUNT}` }}
          >
            shape stated outright
          </div>
        </div>
      </div>

      {/* Stacked below lg: the same axis, turned vertical. */}
      <div className="mt-12 lg:hidden">
        <PhaseGroup
          phases={PHASES.filter((p) => p.read)}
          label="shape read from signals"
        />
        <PhaseGroup
          phases={PHASES.filter((p) => !p.read)}
          label="shape stated outright"
          muted
        />
      </div>

      <p className="mt-10 max-w-[62ch] text-[16px] leading-[1.6] text-ink/70">
        The earlier the stage, the more the shape has to be read rather than
        looked up. We classify it either way.
      </p>
    </Section>
  )
}

function PhaseGroup({ phases, label, muted = false }) {
  return (
    <div className="border-t border-border pt-5 pb-8 last:pb-0">
      <div
        className={`font-mono text-[13px] tracking-wider uppercase ${
          muted ? 'text-unknown' : ''
        }`}
      >
        {label}
      </div>
      <ul className="mt-4">
        {phases.map((p, i) => (
          <li key={p.name} className="flex gap-4">
            {/* Node column: 1px axis runs the full height, so consecutive rows
                join into one continuous line. */}
            <div aria-hidden className="relative flex w-[11px] shrink-0 justify-center">
              {/* The axis joins nodes, so a lone node gets no segment at all
                  and the last node's segment stops at its centre. */}
              {phases.length > 1 ? (
                <div
                  className={`absolute w-px bg-border ${
                    i === phases.length - 1 ? 'top-0 h-[10px]' : 'inset-y-0'
                  }`}
                />
              ) : null}
              <div
                className={`relative mt-[5px] h-[11px] w-[11px] rounded-[4px] border ${
                  muted ? 'border-border bg-bg' : 'border-ink bg-ink'
                }`}
              />
            </div>
            <div
              className={`pb-4 text-[16px] leading-[1.4] ${muted ? 'text-unknown' : ''}`}
            >
              {p.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* 03 — why scope decides everything                                          */
/* -------------------------------------------------------------------------- */

const SCOPE_REASONS = [
  {
    title: 'Whether you bid at all',
    body: 'A single site rollout onto a template that already exists is a different practice than a conversion. Knowing the shape means you spend your qualification time on the accounts that match the bench you actually have.',
  },
  {
    title: 'Who you put on the proposal',
    body: 'A conversion needs remediation depth. A rebuild needs process design. Naming the wrong lead in the first conversation is hard to walk back, and the shape tells you which bench to staff before you write anything.',
  },
  {
    title: 'What the number looks like',
    body: 'The same install base supports proposals at very different price points. A rebuild and a conversion are not the same number, and shape sets the range long before anyone asks you for one.',
  },
]

function WhyScope() {
  return (
    <Section className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="04" label="Why scope decides everything" as="h2" />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {SCOPE_REASONS.map((r) => (
          <div key={r.title} className="rounded-theme border border-border bg-surface p-6 shadow-[var(--elevation)]">
            <h3 className="text-[18px] leading-[1.35] font-semibold tracking-[-0.01em]">
              {r.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-ink/70">{r.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
