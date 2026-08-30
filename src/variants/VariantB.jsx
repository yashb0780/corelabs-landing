import {
  Caption,
  Cta,
  HeroActions,
  HeroHeading,
  HeroSubhead,
  Section,
  SectionMarker,
  ThreeStates,
} from './_shared.jsx'

/**
 * Variant B — "The paper trail".
 *
 * No customer names, logos, testimonials, quotes or statistics. The filing
 * excerpt is invented generic prose, attributed to nobody, and captioned as
 * illustrative.
 */

export default function VariantB() {
  return (
    <div className="font-sans text-ink">
      <Hero />
      <Sources />
      <FilingExcerpt />
      <CrossReference />
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
      <HeroHeading className="max-w-[16ch]">
        They already told you. It was buried in a 10-K.
      </HeroHeading>
      <HeroSubhead>
        Companies disclose their modernization plans, their system constraints,
        and their capital commitments in public filings. Almost nobody reads
        them at scale. We do, and we cross-reference them against hiring,
        leadership changes, and partner announcements.
      </HeroSubhead>
      <HeroActions
        primary={{ href: '#sources', label: 'See the sources' }}
        secondary={{ href: '#three-states', label: 'How we handle uncertainty' }}
      />
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 01 — the sources                                                           */
/* -------------------------------------------------------------------------- */

const SOURCES = [
  {
    label: 'SEC filings',
    description:
      '10-K and 10-Q language on system constraints, modernization programs, and capital allocation.',
    coverage: 'Full text, quarterly',
  },
  {
    label: 'Engineering roles',
    description:
      'Version numbers, module names, and contractor scope inside job requirements.',
    coverage: 'Refreshed weekly',
  },
  {
    label: 'Leadership moves',
    description:
      'New CIOs, enterprise architects, and program leads, and what they did before.',
    coverage: 'Refreshed weekly',
  },
  {
    label: 'Partner announcements',
    description: 'SI press releases, case studies, and speaking slots.',
    coverage: 'Continuous',
  },
  {
    label: 'Ownership events',
    description:
      'Sponsor changes, acquisitions, and carve-outs that reset the systems roadmap.',
    coverage: 'Continuous',
  },
]

function Sources() {
  return (
    <Section id="sources" className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="01" label="The sources" as="h2" />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {SOURCES.map((s) => (
          <div
            key={s.label}
            className="flex flex-col border border-border bg-bg p-5"
          >
            <div className="font-mono text-[13px] tracking-wider text-unknown uppercase">
              {s.label}
            </div>
            <p className="mt-3 text-[14px] leading-[1.6]">{s.description}</p>
            {/* mt-auto pins the coverage note to the bottom so the notes line
                up across cards of uneven description length. */}
            <div className="mt-auto pt-6 font-mono text-[12px] text-unknown">
              {s.coverage}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 02 — what a filing actually says                                           */
/* -------------------------------------------------------------------------- */

/* Invented generic filing prose. Attributed to nobody, captioned below. */
const EXCERPT_LINES = [
  'Our enterprise resource planning environment includes legacy components that constrain reporting timeliness and limit integration with newer production systems.',
  'The board has approved capital for a multi-year enterprise systems investment intended to consolidate these environments.',
  'We expect the program to begin in the next fiscal year and to continue across several reporting periods.',
]

const EXTRACTIONS = [
  'Legacy constraint acknowledged',
  'Capital allocated',
  'Timeline stated',
]

function FilingExcerpt() {
  return (
    <Section className="pt-[120px] pb-[120px]">
      <SectionMarker index="02" label="What a filing actually says" as="h2" />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
        <div className="border border-border bg-band p-8 sm:p-10">
          <div className="font-mono text-[13px] tracking-wider text-unknown uppercase">
            10-K excerpt / illustrative
          </div>
          <div className="mt-6 space-y-4">
            {EXCERPT_LINES.map((line) => (
              <p key={line} className="text-[18px] leading-[1.5] italic">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {EXTRACTIONS.map((e) => (
            <div key={e} className="border border-border p-4">
              <div className="font-mono text-[12px] tracking-wider text-unknown uppercase">
                Extracted
              </div>
              <div className="mt-2 text-[16px] leading-[1.4] font-semibold tracking-[-0.01em]">
                {e}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Caption>
        Illustrative language. In the product, every extraction links back to
        the filing and the date it was filed.
      </Caption>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 03 — cross-reference                                                       */
/* -------------------------------------------------------------------------- */

const CROSS_REFERENCE = [
  'A filing says they are planning',
  'Hiring says they have started',
  'An announcement says they have chosen',
]

function CrossReference() {
  return (
    <Section className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="03" label="Cross-reference" as="h2" />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {CROSS_REFERENCE.map((c) => (
          <div key={c} className="border border-border bg-bg px-6 py-8">
            <div className="text-[18px] leading-[1.35] font-semibold tracking-[-0.01em]">
              {c}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-[62ch] text-[16px] leading-[1.6] text-ink/70">
        Any single signal is noise. The sequence is the story.
      </p>
    </Section>
  )
}
