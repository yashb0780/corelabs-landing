import { Fragment } from 'react'
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
 * Variant C — "Direction". Design language: Stripe.
 *
 * Structured and precise: gridded layouts, blue-grey bands, one confident
 * accent, thin borders. One gradient, in the hero only.
 *
 * Vendor neutral throughout: migrating in place, replatforming, and staying
 * and extending are reported as directions, never ranked. No customer names,
 * logos, testimonials or statistics. The tracked-account alerts use
 * descriptors, never names, and are captioned as illustrative.
 */

/* Stripe: white ground with blue-grey bands in light, a deep navy ground in
   dark — not a blue-black inversion of the light palette but its own set. The
   single permitted gradient lives on --hero-gradient and is used once. */
export const theme = {
  defaultMode: 'light',
  light: {
    '--bg': '#FFFFFF',
    '--band': '#F6F9FC',
    '--surface': '#FFFFFF',
    '--ink': '#0A2540',
    '--unknown': '#697386',
    '--border': '#E3E8EE',
    '--accent': '#635BFF',
    '--on-accent': '#FFFFFF',
    '--confirmed': '#067647',
    '--inferred': '#B54708',
    '--cta-bg': '#0A2540',
    '--cta-fg': '#FFFFFF',
    '--radius': '8px',
    '--elevation': '0 1px 2px rgba(10, 37, 64, 0.07)',
    '--display-tracking': '-0.025em',
    '--hero-gradient':
      'linear-gradient(180deg, rgba(99, 91, 255, 0.07) 0%, rgba(99, 91, 255, 0) 70%)',
  },
  dark: {
    '--bg': '#0A1628',
    '--band': '#0E1D33',
    '--surface': '#10223C',
    '--ink': '#E6EDF7',
    '--unknown': '#8FA0B8',
    '--border': '#1E3355',
    '--accent': '#8B85FF',
    '--on-accent': '#0A1628',
    '--confirmed': '#3DD68C',
    '--inferred': '#F0A43A',
    '--cta-bg': '#060F1D',
    '--cta-fg': '#E6EDF7',
    '--radius': '8px',
    '--elevation': '0 1px 2px rgba(0, 0, 0, 0.45)',
    '--display-tracking': '-0.025em',
    '--hero-gradient':
      'linear-gradient(180deg, rgba(139, 133, 255, 0.13) 0%, rgba(139, 133, 255, 0) 70%)',
  },
}

export default function VariantC() {
  return (
    <div className="font-sans text-ink">
      <Hero />
      <IcpSection band />
      <TheWindow />
      <WhatFiresFirst />
      <TrackedAccounts />
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
    <Section className="bg-[image:var(--hero-gradient)] pt-[120px]">
      <HeroHeading className="max-w-[18ch]">
        Revenue platform, purpose built for SAP partners.
      </HeroHeading>
      <HeroSubhead>
        SAP customers on the same release are moving in different directions:
        converting to S/4HANA, replatforming, or staying on ECC and extending.
        We read which, from public evidence, without taking a side.
      </HeroSubhead>
      <HeroActions
        primary={{ href: '#window', label: 'See how we read direction' }}
      />
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* 01 — the window                                                            */
/* -------------------------------------------------------------------------- */

/* x is a percentage along the axis. The band shading runs from the left edge
   to the point where a company states its direction outright, so the shading
   boundary and that marker are the same line. Positions are inset from the
   container edges so a label centred on the first or last marker still fits. */
const STATED_X = 77

const WINDOW_MARKERS = [
  { x: 12, label: 'First contractor role posted', source: 'JOB POSTING' },
  { x: 25, label: 'Enterprise architect hired', source: 'LINKEDIN' },
  { x: 38, label: 'Integration tooling appears in the stack', source: 'JOB POSTING' },
  { x: 51, label: 'Systems investment language enters the filing', source: '10-K' },
  { x: 64, label: 'Program lead role opens', source: 'JOB POSTING' },
  { x: STATED_X, label: 'Direction stated outright', source: 'PUBLIC' },
]

function TheWindow() {
  return (
    <Section id="window" className="pt-[120px] pb-[120px]">
      <SectionMarker index="02" label="Reading direction" as="h2" />

      {/* Horizontal schematic, lg and up. */}
      <div className="relative mt-16 hidden lg:block">
        {/* Shading spans the strip and the region-label row beneath it, so the
            label sits inside the region it names. */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 bg-band"
          style={{ width: `${STATED_X}%` }}
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
            style={{ width: `${STATED_X}%` }}
          >
            where LeadPlus operates
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
        <WindowGroup markers={WINDOW_MARKERS.slice(-1)} />
      </div>

      <Caption>
        Illustrative sequence. The same signals appear whether a company is
        modernizing in place, replatforming, or staying and extending. What
        changes is what they say.
      </Caption>

      <DirectionLanes />
    </Section>
  )
}

/* Row gap for the direction lanes. In JS because the spine bridges it. */
const LANE_GAP = 16

/* Three lanes, presented with identical weight. None is the preferred outcome;
   which one is an opportunity depends on what the reader's practice does. */
const LANES = [
  {
    name: 'Modernizing in place',
    signals: ['Conversion wording in roles', 'Existing module names retained'],
  },
  {
    name: 'Replatforming',
    signals: ['A different platform named in roles', 'Parallel environment hiring'],
  },
  {
    name: 'Staying and extending',
    signals: ['Integration and reporting roles', 'Support contract renewed'],
  },
]

function DirectionLanes() {
  return (
    <>
      <div className="mt-16 grid grid-cols-1 gap-y-8 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-x-10 lg:gap-y-0">
        <div className="relative">
          <div className="rounded-theme border border-border bg-surface p-6 shadow-[var(--elevation)]">
            <div className="font-mono text-[13px] tracking-wider text-unknown uppercase">
              Starting point
            </div>
            <div className="mt-3 text-[20px] leading-[1.3] font-semibold tracking-[-0.01em]">
              Same system today
            </div>
          </div>
          {/* Trunk: starting node into the spine, across the grid gap. */}
          <div
            aria-hidden
            className="absolute top-1/2 left-full hidden h-px w-10 bg-border lg:block"
          />
        </div>

        <div>
          {LANES.map((lane, i) => (
            <Lane
              key={lane.name}
              {...lane}
              position={
                i === 0 ? 'first' : i === LANES.length - 1 ? 'last' : 'middle'
              }
            />
          ))}
        </div>
      </div>

      <Caption>
        We report the direction. Which of these is your opportunity depends on
        what you do.
      </Caption>
    </>
  )
}

function Lane({ name, signals, position }) {
  const spine =
    position === 'first'
      ? { top: '50%', bottom: -LANE_GAP }
      : position === 'last'
        ? { top: 0, height: '50%' }
        : { top: 0, bottom: -LANE_GAP }

  return (
    <div
      className="flex items-stretch"
      style={{ marginBottom: position === 'last' ? 0 : LANE_GAP }}
    >
      <div aria-hidden className="relative hidden w-12 shrink-0 lg:block">
        <div className="absolute left-0 w-px bg-border" style={spine} />
        <div className="absolute top-1/2 right-0 left-0 h-px bg-border" />
      </div>

      <div className="flex-1 rounded-theme border border-border bg-surface px-5 py-4 shadow-[var(--elevation)]">
        <div className="text-[16px] leading-[1.4] font-semibold tracking-[-0.01em]">
          {name}
        </div>
        <ul className="mt-2 space-y-1">
          {signals.map((sig) => (
            <li key={sig} className="font-mono text-[12px] text-unknown">
              {sig}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function WindowGroup({ markers, label, band = false }) {
  return (
    <div
      className={`border border-border p-5 first:rounded-t-theme last:rounded-b-theme ${
        band ? 'border-b-0 bg-band' : 'bg-surface'
      }`}
    >
      {label ? (
        <div className="font-mono text-[13px] tracking-wider uppercase">
          {label}
        </div>
      ) : null}
      <ul className={label ? 'mt-5' : ''}>
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

/* Each signal maps to the direction the evidence supports. "Not stated" is a
   real answer and appears as often as the others. No direction is ranked. */
const FIRES = [
  {
    signal: 'Conversion wording in role requirements',
    source: 'JOB POSTING',
    direction: 'MODERNIZE IN PLACE',
  },
  {
    signal: 'A different platform named in requirements',
    source: 'JOB POSTING',
    direction: 'REPLATFORM',
  },
  {
    signal: 'Integration and reporting roles, no conversion wording',
    source: 'JOB POSTING',
    direction: 'STAY AND EXTEND',
  },
  {
    signal: 'Support and enhancement contract renewed',
    source: 'PRESS RELEASE',
    direction: 'STAY AND EXTEND',
  },
  {
    signal: 'Systems investment language enters the filing',
    source: '10-K',
    direction: 'NOT STATED',
  },
  {
    signal: 'Enterprise architect hired',
    source: 'LINKEDIN',
    direction: 'NOT STATED',
  },
]

function WhatFiresFirst() {
  return (
    <Section className="bg-band pt-[120px] pb-[120px]">
      <SectionMarker index="03" label="What the signals say" as="h2" />

      <div className="mt-12 overflow-hidden rounded-theme border border-border bg-surface shadow-[var(--elevation)]">
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
            <div className="font-mono text-[13px] text-accent sm:text-right">
              {f.direction}
            </div>
          </div>
        ))}
      </div>

      <Caption>
        Illustrative signals. We report the direction the evidence supports,
        including when it supports none.
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
    signal: 'Integration roles opened, no conversion wording',
    age: '2d',
  },
  {
    account: 'Southeast food processor',
    signal: 'Systems language added to filing',
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
      <SectionMarker index="04" label="Tracked accounts" as="h2" />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <p className="max-w-[52ch] text-[16px] leading-[1.6] text-ink/70">
          Most tools make you re-run a search and diff the results yourself.
          Give us the accounts that match your practice and we watch them
          continuously. When a role opens, a filing changes, or a leader moves,
          you hear about it in context, with the source and the date attached,
          and with what it does or does not say about direction.
        </p>

        <div className="overflow-hidden rounded-theme border border-border bg-surface shadow-[var(--elevation)]">
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
