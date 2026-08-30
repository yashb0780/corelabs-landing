import {
  Cta,
  HeroActions,
  HeroHeading,
  HeroSubhead,
  Section,
  SectionMarker,
  ThreeStates,
} from './_shared.jsx'

/**
 * Variant C — "The deal shape".
 *
 * No customer names, logos, testimonials, quotes or statistics.
 */

export default function VariantC() {
  return (
    <div className="font-sans text-ink">
      <Hero />
      <FourShapes />
      <Phase />
      <WhyScope />
      <ThreeStates index="04" />
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
        <span className="block">Knowing they run legacy ERP is not a lead.</span>
        <span className="block">Knowing it is a brownfield conversion is.</span>
      </HeroHeading>
      <HeroSubhead>
        Conversion, greenfield rebuild, single site rollout, or modernization
        without migration. Four different proposals, four different price
        points, four different partners. We classify which one it is before an
        RFP exists.
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
    title: 'Modernization without migration',
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

function FourShapes() {
  return (
    <Section id="shapes" className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="01" label="Four shapes" as="h2" />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {SHAPES.map((s) => (
          <div
            key={s.title}
            className="flex flex-col border border-border bg-bg p-8"
          >
            <h3 className="text-[20px] leading-[1.3] font-semibold tracking-[-0.01em]">
              {s.title}
            </h3>
            <p className="mt-3 text-[16px] leading-[1.6]">{s.definition}</p>

            <div className="mt-6 font-mono text-[13px] tracking-wider text-unknown uppercase">
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
        ))}
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 02 — phase                                                                 */
/* -------------------------------------------------------------------------- */

/* `found` marks the three phases we reach; the last two are where everyone
   else arrives. Node fill and label colour both follow from it. */
const PHASES = [
  { name: 'Evaluation', found: true },
  { name: 'Design', found: true },
  { name: 'Partner selection', found: true },
  { name: 'RFP issued', found: false },
  { name: 'In flight', found: false },
]

const FOUND_COUNT = PHASES.filter((p) => p.found).length

function Phase() {
  return (
    <Section className="pt-[120px] pb-[120px]">
      <SectionMarker index="02" label="Phase" as="h2" />

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
                  p.found ? 'border-ink bg-ink' : 'border-border bg-bg'
                }`}
              />
              <div
                className={`mt-5 text-center text-[16px] leading-[1.4] ${
                  p.found ? '' : 'text-unknown'
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
            style={{ gridColumn: `span ${FOUND_COUNT}` }}
          >
            where we find them
          </div>
          <div
            className="border-t border-border pt-3 text-center font-mono text-[13px] tracking-wider text-unknown uppercase"
            style={{ gridColumn: `span ${PHASES.length - FOUND_COUNT}` }}
          >
            where everyone else finds them
          </div>
        </div>
      </div>

      {/* Stacked below lg: the same axis, turned vertical. */}
      <div className="mt-12 lg:hidden">
        <PhaseGroup
          phases={PHASES.filter((p) => p.found)}
          label="where we find them"
        />
        <PhaseGroup
          phases={PHASES.filter((p) => !p.found)}
          label="where everyone else finds them"
          muted
        />
      </div>

      <p className="mt-10 max-w-[62ch] text-[16px] leading-[1.6] text-ink/70">
        By the time an RFP is public, the shortlist usually already exists.
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
    body: 'A single site rollout onto a template that already exists is not your deal. Knowing the shape early means you decline it in a minute, instead of losing two weeks to a qualification call that was never going to convert.',
  },
  {
    title: 'Who you put on the proposal',
    body: 'A conversion needs remediation depth. A rebuild needs process design. Naming the wrong lead in the first conversation is hard to walk back, and the shape tells you which bench to staff before you write anything.',
  },
  {
    title: 'What the number looks like',
    body: 'The same install base supports proposals at very different price points. Pricing a rebuild like a conversion either loses the work or wins it at a margin you cannot deliver against. Shape sets the range.',
  },
]

function WhyScope() {
  return (
    <Section className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="03" label="Why scope decides everything" as="h2" />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {SCOPE_REASONS.map((r) => (
          <div key={r.title} className="border-t border-border pt-6">
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
