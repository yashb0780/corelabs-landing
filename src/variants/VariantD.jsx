import { Fragment } from 'react'
import {
  Caption,
  Cta,
  HeroActions,
  HeroHeading,
  HeroSubhead,
  IcpSection,
  Scope,
  Section,
  SectionMarker,
  ThreeStates,
} from './_shared.jsx'

/**
 * Variant D — "The pressure map". Design language: Notion.
 *
 * Warm and documentary: off-white ground, warm greys, brown-black text, serif
 * headings, minimal colour. It should read like an internal document.
 *
 * No customer names, logos, testimonials, quotes or statistics. Section 04
 * describes the coverage gap without naming any vendor internal segment.
 */

/* Notion: warm throughout. Dark mode goes warm charcoal rather than blue-black,
   and colour stays minimal — the accent is the ink itself. */
export const theme = {
  defaultMode: 'light',
  light: {
    '--bg': '#FBFBFA',
    '--band': '#F4F3F0',
    '--surface': '#FFFFFF',
    '--ink': '#37352F',
    '--unknown': '#6F6C65',
    '--border': '#E4E2DD',
    '--accent': '#37352F',
    '--on-accent': '#FBFBFA',
    '--confirmed': '#448361',
    '--inferred': '#9F6B53',
    '--cta-bg': '#2F2D28',
    '--cta-fg': '#F4F3F0',
    '--radius': '3px',
    '--elevation': 'none',
    '--display-tracking': '-0.01em',
    '--font-heading-stack': "'Lora', Georgia, 'Times New Roman', serif",
  },
  dark: {
    '--bg': '#191918',
    '--band': '#211F1D',
    '--surface': '#252320',
    '--ink': '#E9E6E1',
    '--unknown': '#918D86',
    '--border': '#35322D',
    '--accent': '#E9E6E1',
    '--on-accent': '#191918',
    '--confirmed': '#7FB093',
    '--inferred': '#C79075',
    '--cta-bg': '#100F0E',
    '--cta-fg': '#E9E6E1',
    '--radius': '3px',
    '--elevation': 'none',
    '--display-tracking': '-0.01em',
    '--font-heading-stack': "'Lora', Georgia, 'Times New Roman', serif",
  },
}

export default function VariantD() {
  return (
    <div className="font-sans text-ink">
      <Hero />
      <IcpSection />
      <ForcingFunctions />
      <WhyThisChanges />
      <WhereWeLook />
      <CoverageGap />
      <ThreeStates index="06" band />
      <Scope index="07" band={false} />
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
        Revenue platform, purpose built for SAP partners.
      </HeroHeading>
      <HeroSubhead>
        A maintenance date, an audit, an ownership change, or a new plant puts
        an SAP system in play. We read that context alongside the install base,
        so your rep knows why now, who, and the angle.
      </HeroSubhead>
      <HeroActions primary={{ href: '#pressures', label: 'See the context' }} />
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 01 — five kinds of context                                                */
/* -------------------------------------------------------------------------- */

const PRESSURES = [
  {
    label: 'Maintenance',
    title: 'SAP support timelines',
    description:
      'ECC mainstream maintenance ends in 2027. A published date moves a system from a preference into a budget line.',
  },
  {
    label: 'Compliance',
    title: 'Mandates on a fixed clock',
    description:
      'Sector mandates, defense supply chain requirements, and audit findings that put a system change on a fixed clock.',
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
      <SectionMarker index="02" label="Five kinds of context" as="h2" />

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
              <h3 className="font-heading text-[19px] leading-[1.35] font-semibold tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="mt-2 max-w-[70ch] text-[14px] leading-[1.6] text-ink/70">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <EvidenceCard />
    </Section>
  )
}

/* Generic, plausible evidence. No company is named and nothing is stated as a
   statistic; each row is the kind of dated public record the product cites. */
const EVIDENCE = [
  {
    signal: 'ECC 6.0 confirmed in hiring',
    says: 'Running ECC 6.0, mainstream maintenance ends 2027',
    source: 'JOB POSTING',
    date: '2026-03-11',
  },
  {
    signal: 'Audit finding disclosed',
    says: 'Control weakness tied to manual reconciliation',
    source: '10-K',
    date: '2026-05-02',
  },
  {
    signal: 'Ownership change',
    says: 'Majority stake acquired by a financial sponsor',
    source: 'PRESS RELEASE',
    date: '2026-06-18',
  },
  {
    signal: 'New plant announced',
    says: 'Second production site planned in the same region',
    source: 'PRESS RELEASE',
    date: '2026-07-24',
  },
]

function EvidenceCard() {
  return (
    <>
      <div className="mt-14 overflow-hidden rounded-theme border border-border bg-surface shadow-[var(--elevation)]">
        <div className="border-b border-border px-5 py-4">
          <div className="font-mono text-[12px] tracking-wider text-unknown uppercase">
            Account
          </div>
          <div className="mt-1 font-heading text-[19px] leading-[1.35] font-semibold tracking-[-0.01em]">
            Regional building products manufacturer
          </div>
        </div>

        <div className="grid grid-cols-1 leading-[1.5] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_max-content_max-content]">
          {/* Column headers, lg and up only: below that each row reads as a
              labelled block instead of a table. */}
          {['Signal', 'What it says', 'Source', 'Date'].map((h) => (
            <div
              key={h}
              className={`hidden border-b border-border px-5 py-3 font-mono text-[12px] tracking-wider text-unknown uppercase lg:block ${
                h === 'Date' ? 'text-right' : ''
              }`}
            >
              {h}
            </div>
          ))}

          {EVIDENCE.map((e, i) => {
            const first = i > 0 ? 'border-t border-border' : ''
            const rest = i > 0 ? 'border-border lg:border-t' : ''
            return (
              <Fragment key={e.signal}>
                <div
                  className={`${first} px-5 pt-4 text-[15px] font-semibold tracking-[-0.01em] lg:py-4 lg:pr-4 lg:font-normal`}
                >
                  {e.signal}
                </div>
                <div className={`${rest} px-5 pt-1 text-[14px] lg:px-0 lg:py-4 lg:pr-4`}>
                  {e.says}
                </div>
                <div
                  className={`${rest} px-5 pt-2 font-mono text-[13px] text-unknown lg:py-4 lg:pr-6 lg:text-ink`}
                >
                  {e.source}
                </div>
                <div
                  className={`${rest} px-5 pt-1 pb-4 font-mono text-[13px] text-unknown lg:py-4 lg:text-right`}
                >
                  {e.date}
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>

      <Caption>
        Illustrative account. Every row in the product links to a dated public
        source.
      </Caption>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/* 02 — why this changes the conversation                                     */
/* -------------------------------------------------------------------------- */

function WhyThisChanges() {
  return (
    <Section className="pt-[120px] pb-[120px]">
      <SectionMarker
        index="03"
        label="Why this changes the conversation"
        as="h2"
      />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <p className="max-w-[52ch] text-[16px] leading-[1.6] text-ink/70">
          An account that fits your profile is a candidate. An account that
          fits and whose system is visibly in play is a conversation you can
          actually open. For those accounts, your rep gets why now, the buying
          group, and the angle, with an audience ready to run. We run and track
          the first campaigns with you.
        </p>

        <div className="flex flex-col gap-4">
          <div className="rounded-theme border border-border px-6 py-5">
            <div className="text-[16px] leading-[1.5] text-ink/60">
              Fits your profile
            </div>
          </div>
          <div className="rounded-theme border border-border bg-band px-6 py-5">
            <div className="text-[16px] leading-[1.5] font-semibold tracking-[-0.01em]">
              Fits your profile, with why now, who, and the angle
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
    label: 'Curated vertical database',
    description:
      'We know how each SAP version, support model, and migration type gets described.',
  },
  {
    label: 'Signal interpretation',
    description:
      'No single signal makes a decision. We read the stack, the deployment model, and the macro pressure as one picture.',
  },
  {
    label: 'Stakeholder intelligence',
    description:
      'A new hire from a consultancy with migration history is a decision forming. We see who arrived and what they have done before.',
  },
  {
    label: 'Learning loop',
    description:
      'Which accounts convert, which emails get replies, and which signals hold up. It all feeds back into the score.',
  },
]

function WhereWeLook() {
  return (
    <Section className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="04" label="Four pillars, built for SAP" as="h2" />

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
        <SectionMarker index="05" label="The coverage gap" centered as="h2" />
      </div>
      <div className="mx-auto mt-5 w-full max-w-[600px] text-center">
        <p className="text-[16px] leading-[1.6] text-ink/70">
          Below a certain size, SAP does not assign a direct account team. No
          partner has been handed the introduction and no relationship is
          already in place. That is where the coverage gap is widest across the
          US mid-market, and where reading the public evidence is worth the
          most.
        </p>
      </div>
    </section>
  )
}
