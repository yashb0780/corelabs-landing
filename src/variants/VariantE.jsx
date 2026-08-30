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
 * Variant E — "The pressure map".
 *
 * No customer names, logos, testimonials, quotes or statistics. Section 04
 * describes the coverage gap without naming any vendor internal segment.
 */

export default function VariantE() {
  return (
    <div className="font-sans text-ink">
      <Hero />
      <ForcingFunctions />
      <WhyThisChanges />
      <WhereWeLook />
      <CoverageGap />
      <ThreeStates index="05" band />
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
      <HeroHeading className="max-w-[16ch]">
        Nobody replaces an ERP because it is old.
      </HeroHeading>
      <HeroSubhead>
        They replace it because a deadline, an auditor, a tariff, or a board
        made it unavoidable. We track the forcing function, not just the install
        base.
      </HeroSubhead>
      <HeroActions primary={{ href: '#pressures', label: 'See the pressures' }} />
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 01 — five forcing functions                                                */
/* -------------------------------------------------------------------------- */

const PRESSURES = [
  {
    label: 'Maintenance',
    title: 'Vendor support end dates',
    description:
      'A published end date turns a preference into a budget line.',
  },
  {
    label: 'Compliance',
    title: 'Mandates on a fixed clock',
    description:
      'Sector mandates, defense supply chain requirements, and audit findings force system change on a fixed clock.',
  },
  {
    label: 'Ownership',
    title: 'Events that reset the roadmap',
    description:
      'Sponsor-backed companies in the back half of a hold period, carve-outs standing up systems from scratch, and post-acquisition consolidation. Ownership events are public and they reset the roadmap.',
  },
  {
    label: 'Trade',
    title: 'Tariff exposure and reshoring',
    description:
      'Commitments that change where production happens and what the systems have to support.',
  },
  {
    label: 'Growth',
    title: 'Capacity the system outgrew',
    description:
      'New plants, new lines, and new geographies that outgrow what the current system was configured for.',
  },
]

function ForcingFunctions() {
  return (
    <Section id="pressures" className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="01" label="Five forcing functions" as="h2" />

      <div className="mt-12">
        {PRESSURES.map((p, i) => (
          <div
            key={p.label}
            className={`grid grid-cols-1 gap-x-10 gap-y-3 py-8 lg:grid-cols-[200px_1fr] ${
              i > 0 ? 'border-t border-border' : ''
            }`}
          >
            <div className="font-mono text-[13px] tracking-wider text-unknown uppercase lg:pt-1">
              {p.label}
            </div>
            <div>
              <h3 className="text-[18px] leading-[1.35] font-semibold tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="mt-2 max-w-[70ch] text-[14px] leading-[1.6] text-ink/70">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 02 — why this changes the conversation                                     */
/* -------------------------------------------------------------------------- */

function WhyThisChanges() {
  return (
    <Section className="pt-[120px] pb-[120px]">
      <SectionMarker
        index="02"
        label="Why this changes the conversation"
        as="h2"
      />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <p className="max-w-[52ch] text-[16px] leading-[1.6] text-ink/70">
          An account that fits your profile is a candidate. An account that fits
          and has a forcing function is a deal with a date on it. The first list
          is large and mostly static. The second is smaller, changes every
          quarter, and tells you who to call this month rather than who to add
          to a nurture sequence.
        </p>

        <div className="flex flex-col gap-4">
          <div className="border border-border px-6 py-5">
            <div className="text-[16px] leading-[1.5] text-ink/60">
              Fits your ICP
            </div>
          </div>
          <div className="border border-border bg-band px-6 py-5">
            <div className="text-[16px] leading-[1.5] font-semibold tracking-[-0.01em]">
              Fits your ICP and has a reason to act in the next four quarters
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 03 — where we look                                                         */
/* -------------------------------------------------------------------------- */

const LOOKUPS = [
  {
    label: 'SEC filings',
    description:
      'Disclosed system constraints, modernization programs, and capital commitments.',
  },
  {
    label: 'Ownership records',
    description:
      'Sponsor activity, hold periods, carve-outs, and acquisitions that reset a roadmap.',
  },
  {
    label: 'Regulatory registers',
    description:
      'Sector mandates and audit findings that put a date on a system change.',
  },
  {
    label: 'Hiring patterns',
    description:
      'Role sequence, seniority, and the version and module names inside requirements.',
  },
]

function WhereWeLook() {
  return (
    <Section className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="03" label="Where we look" as="h2" />

      <div className="mt-12">
        {LOOKUPS.map((l, i) => (
          <div
            key={l.label}
            className={`grid grid-cols-1 gap-x-10 gap-y-2 py-6 lg:grid-cols-[240px_1fr] ${
              i > 0 ? 'border-t border-border' : ''
            }`}
          >
            <div className="font-mono text-[13px] tracking-wider text-unknown uppercase">
              {l.label}
            </div>
            <p className="text-[16px] leading-[1.6]">{l.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 04 — the coverage gap                                                      */
/* -------------------------------------------------------------------------- */

function CoverageGap() {
  return (
    <section className="px-6 pt-[120px] pb-[120px]">
      <div className="mx-auto w-full max-w-content">
        <SectionMarker index="04" label="The coverage gap" centered as="h2" />
      </div>
      <div className="mx-auto mt-5 w-full max-w-[600px] text-center">
        <p className="text-[16px] leading-[1.6] text-ink/70">
          Below a certain size, the vendor does not assign a direct account team.
          Nobody is already working the account, there is no incumbent
          relationship to displace, and no partner has been handed the
          introduction. That is where the coverage gap is widest across the US
          mid-market, and it is where a signal layer is worth the most.
        </p>
      </div>
    </section>
  )
}
