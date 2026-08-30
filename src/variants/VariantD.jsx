import { Fragment } from 'react'
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
 * Variant D — "The clock".
 *
 * No customer names, logos, testimonials, quotes or statistics about
 * customers. The tracked-account alerts use descriptors, never names, and are
 * captioned as illustrative. The lead-time ranges in section 02 are
 * directional and carry the disclaimer the section calls for.
 */

export default function VariantD() {
  return (
    <div className="font-sans text-ink">
      <Hero />
      <TheWindow />
      <WhatFiresFirst />
      <TrackedAccounts />
      <ThreeStates index="04" band />
      <Cta />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <Section className="pt-[120px]">
      <HeroHeading className="max-w-[18ch]">
        If you are reading the RFP, you are already the backup vendor.
      </HeroHeading>
      <HeroSubhead>
        By the time a request for proposal is public, the requirements have been
        shaped by someone else. We surface ERP programs while they are still
        internal conversations.
      </HeroSubhead>
      <HeroActions primary={{ href: '#window', label: 'See the timeline' }} />
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 01 — the window                                                            */
/* -------------------------------------------------------------------------- */

/* x is a percentage along the axis. The last marker is the RFP, and the band
   shading runs from the left edge to exactly that point, so the shading
   boundary and the marker are the same line. Positions are inset from the
   container edges so a label centred on the first or last marker still fits. */
const RFP_X = 77

const WINDOW_MARKERS = [
  { x: 12, label: 'First contractor role posted', source: 'JOB POSTING' },
  {
    x: 25,
    label: 'Enterprise architect hired with migration background',
    source: 'LINKEDIN',
  },
  { x: 38, label: 'Planning tooling appears in the stack', source: 'JOB POSTING' },
  { x: 51, label: 'Modernization language enters the annual filing', source: '10-K' },
  { x: 64, label: 'Program manager role opens', source: 'JOB POSTING' },
  { x: RFP_X, label: 'RFP issued', source: 'PUBLIC' },
]

function TheWindow() {
  return (
    <Section id="window" className="pt-[120px] pb-[120px]">
      <SectionMarker index="01" label="The window" as="h2" />

      {/* Horizontal schematic, lg and up. */}
      <div className="relative mt-16 hidden lg:block">
        {/* Shading spans the strip and the region-label row beneath it, so the
            label sits inside the region it names. */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 bg-band"
          style={{ width: `${RFP_X}%` }}
        />

        <div className="relative h-[300px]">
          <div aria-hidden className="absolute top-1/2 right-0 left-0 h-px bg-border" />

          {WINDOW_MARKERS.map((m, i) => {
            const above = i % 2 === 0
            return (
              <Fragment key={m.label}>
                <div
                  aria-hidden
                  className="absolute top-1/2 h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-ink"
                  style={{ left: `${m.x}%` }}
                />
                {/* Labels alternate above and below. Same-side neighbours are
                    26% apart, which is wider than the label, so they cannot
                    collide. The source tag always sits nearest the axis. */}
                <div
                  className={`absolute w-[240px] -translate-x-1/2 text-center ${
                    above ? 'bottom-[calc(50%+18px)]' : 'top-[calc(50%+18px)]'
                  }`}
                  style={{ left: `${m.x}%` }}
                >
                  {above ? (
                    <>
                      <div className="text-[14px] leading-[1.5]">{m.label}</div>
                      <div className="mt-1.5 font-mono text-[13px] text-unknown">
                        {m.source}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="font-mono text-[13px] text-unknown">
                        {m.source}
                      </div>
                      <div className="mt-1.5 text-[14px] leading-[1.5]">
                        {m.label}
                      </div>
                    </>
                  )}
                </div>
              </Fragment>
            )
          })}
        </div>

        <div className="relative flex">
          <div
            className="py-4 font-mono text-[13px] tracking-wider uppercase"
            style={{ width: `${RFP_X}%` }}
          >
            where LeadPlus operates
          </div>
          <div className="flex-1 py-4 pl-4 font-mono text-[13px] tracking-wider text-unknown uppercase">
            where everyone else operates
          </div>
        </div>
      </div>

      {/* Stacked below lg: the same sequence, turned vertical. */}
      <div className="mt-12 lg:hidden">
        <WindowGroup
          markers={WINDOW_MARKERS.slice(0, -1)}
          label="where LeadPlus operates"
          band
        />
        <WindowGroup
          markers={WINDOW_MARKERS.slice(-1)}
          label="where everyone else operates"
          muted
        />
      </div>
    </Section>
  )
}

function WindowGroup({ markers, label, band = false, muted = false }) {
  return (
    <div
      className={`border border-border p-5 ${band ? 'bg-band' : ''} ${
        band ? 'border-b-0' : ''
      }`}
    >
      <div
        className={`font-mono text-[13px] tracking-wider uppercase ${
          muted ? 'text-unknown' : ''
        }`}
      >
        {label}
      </div>
      <ul className="mt-5">
        {markers.map((m, i) => (
          <li key={m.label} className="flex gap-4">
            <div aria-hidden className="relative flex w-[11px] shrink-0 justify-center">
              {/* The axis joins nodes, so a lone node gets no segment at all
                  and the last node's segment stops at its centre. */}
              {markers.length > 1 ? (
                <div
                  className={`absolute w-px bg-border ${
                    i === markers.length - 1 ? 'top-0 h-[10px]' : 'inset-y-0'
                  }`}
                />
              ) : null}
              <div className="relative mt-[5px] h-[11px] w-[11px] rounded-[4px] bg-ink" />
            </div>
            <div className="pb-5">
              <div className="text-[14px] leading-[1.5]">{m.label}</div>
              <div className="mt-1 font-mono text-[13px] text-unknown">
                {m.source}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* 02 — what fires first                                                      */
/* -------------------------------------------------------------------------- */

const FIRES = [
  { signal: 'First contractor role posted', source: 'JOB POSTING', lead: '14–20 months' },
  { signal: 'Enterprise architect hired', source: 'LINKEDIN', lead: '12–18 months' },
  { signal: 'Planning tooling appears in the stack', source: 'JOB POSTING', lead: '10–16 months' },
  { signal: 'Modernization language enters the filing', source: '10-K', lead: '8–14 months' },
  { signal: 'Program manager role opens', source: 'JOB POSTING', lead: '5–9 months' },
  { signal: 'Partner shortlist begins to form', source: 'PRESS RELEASE', lead: '2–4 months' },
]

function WhatFiresFirst() {
  return (
    <Section className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="02" label="What fires first" as="h2" />

      <div className="mt-12 border border-border bg-bg">
        {FIRES.map((f, i) => (
          <div
            key={f.signal}
            className={`grid grid-cols-1 gap-x-6 gap-y-2 px-6 py-5 sm:grid-cols-[1fr_max-content_max-content] sm:items-baseline ${
              i > 0 ? 'border-t border-border' : ''
            }`}
          >
            <div className="text-[16px] leading-[1.5]">{f.signal}</div>
            <div className="font-mono text-[13px] text-unknown sm:text-center">
              {f.source}
            </div>
            <div className="font-mono text-[13px] sm:text-right">{f.lead}</div>
          </div>
        ))}
      </div>

      <Caption>
        Lead times vary by program size and industry. These are directional, not
        guaranteed.
      </Caption>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 03 — tracked accounts                                                      */
/* -------------------------------------------------------------------------- */

const ALERTS = [
  {
    account: 'Midwest industrial manufacturer',
    signal: 'Program manager role opened',
    age: '2d',
  },
  {
    account: 'Southeast food processor',
    signal: 'Modernization language added to filing',
    age: '9d',
  },
  {
    account: 'Regional building products group',
    signal: 'New enterprise architect hired',
    age: '16d',
  },
]

function TrackedAccounts() {
  return (
    <Section className="pt-[120px] pb-[120px]">
      <SectionMarker index="03" label="Tracked accounts" as="h2" />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <p className="max-w-[52ch] text-[16px] leading-[1.6] text-ink/70">
          Most tools make you re-run a search and diff the results yourself.
          Give us the accounts you already care about and we watch them
          continuously. When a role opens, a filing changes, or a leader moves,
          you hear about it in context, with the source and the date attached,
          instead of finding out a quarter later.
        </p>

        <div className="border border-border bg-bg">
          <div className="border-b border-border px-4 py-3 font-mono text-[13px] tracking-wider text-unknown uppercase">
            Alerts
          </div>
          {ALERTS.map((a, i) => (
            <div
              key={a.account}
              className={`flex items-start justify-between gap-4 px-4 py-4 ${
                i > 0 ? 'border-t border-border' : ''
              }`}
            >
              <div>
                <div className="text-[16px] leading-[1.4] font-semibold tracking-[-0.01em]">
                  {a.account}
                </div>
                <div className="mt-1 text-[14px] leading-[1.5] text-ink/70">
                  {a.signal}
                </div>
              </div>
              <div className="shrink-0 font-mono text-[12px] text-unknown">
                {a.age}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Caption>
        Illustrative alerts. No account is named, and in the product every row
        links to its source and the date it was filed.
      </Caption>
    </Section>
  )
}
