import { Fragment } from 'react'

/**
 * Primitives shared by variants B–E.
 *
 * VariantA.jsx deliberately keeps its own local copies of these: it is the
 * structural reference and is not to be modified. Everything here mirrors it
 * exactly so the four newer variants stay on the same grid, rhythm and rules.
 *
 * On-token only: colour via text-ink / bg-band / border-border /
 * text-confirmed / text-inferred / text-unknown, type via font-sans /
 * font-mono. No hardcoded colours or font stacks. See CLAUDE.md.
 *
 * Vertical rhythm: every section carries pt-[120px]. A section also carries
 * pb-[120px] when the next one has a different background, so the 120px gap
 * survives across a band edge instead of doubling.
 */

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-16 px-6 ${className}`}>
      <div className="mx-auto w-full max-w-content">{children}</div>
    </section>
  )
}

/* A 1px full-width rule plus a mono eyebrow. Opens every numbered section.
   `as` is "h2" where the eyebrow is the section's only title, so the document
   outline still has a heading; it stays a <p> where a real h2 follows. */
export function SectionMarker({ index, label, centered = false, as: As = 'p' }) {
  return (
    <>
      <div aria-hidden className="h-px w-full bg-border" />
      <As
        className={`mt-5 font-mono text-[13px] font-normal tracking-wider text-unknown uppercase ${
          centered ? 'text-center' : ''
        }`}
      >
        {index} / {label}
      </As>
    </>
  )
}

export function SectionHeading({ children }) {
  return (
    <h2 className="max-w-3xl font-heading text-[32px] leading-[1.2] font-semibold tracking-display">
      {children}
    </h2>
  )
}

/* -------------------------------------------------------------------------- */
/* How we learn your ICP — section 01 of every variant, same content, each      */
/* variant's own theme.                                                        */
/* -------------------------------------------------------------------------- */

const ICP_STEPS = [
  {
    label: 'Domain',
    title: 'You give us a domain',
    line: 'Nothing else. No questionnaire, no setup call before you see anything.',
  },
  {
    label: 'Read',
    title: 'We read your site',
    line: 'Services, industries, platforms, case studies, and the language you use to describe your own work.',
  },
  {
    label: 'Profile',
    title: 'You correct the profile',
    line: 'We show you what we inferred as an editable draft, not a locked setting.',
  },
  {
    label: 'Refine',
    title: 'It sharpens as you use it',
    line: 'Accounts you keep and accounts you reject both feed back into how the next list is built.',
  },
]

export function IcpSection({ band = false }) {
  return (
    <Section
      id="how-we-learn"
      className={`pt-[120px] pb-[120px] ${band ? 'bg-band' : ''}`}
    >
      <SectionMarker index="01" label="How we learn your ICP" />
      <div className="mt-5">
        <SectionHeading>
          The list gets better the longer you use it.
        </SectionHeading>
      </div>

      <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.6] text-ink/70">
        We start from your own website. We read what you build, which industries
        you name, which modules and platforms you talk about, and which projects
        you put front and centre, then we turn that into a first profile you can
        edit. From there we work with you directly, and every account you keep or
        discard sharpens what comes next.
      </p>

      {/* Four-step flow. Horizontal from lg up; below that the same sequence
          runs vertically, and the connectors rotate with it. */}
      <div className="mt-16 flex flex-col lg:flex-row lg:items-stretch">
        {ICP_STEPS.map((step, i) => (
          <Fragment key={step.label}>
            <div className="flex flex-1 flex-col rounded-theme border border-border bg-surface p-5 shadow-[var(--elevation)]">
              <div className="flex items-baseline gap-2 font-mono text-[13px] tracking-wider uppercase">
                <span className="text-unknown">Step 0{i + 1}</span>
                <span className="text-unknown/50">/</span>
                <span>{step.label}</span>
              </div>
              <h3 className="mt-3 text-[17px] leading-[1.35] font-semibold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink/70">
                {step.line}
              </p>
            </div>
            {i < ICP_STEPS.length - 1 ? <FlowConnector /> : null}
          </Fragment>
        ))}
      </div>

      <p className="mt-8 text-[14px] leading-[1.6] text-unknown">
        We work alongside you on this, particularly early on. The profile is a
        starting point, not an answer.
      </p>
    </Section>
  )
}

/* A 1px line ending in a chevron terminator, built from borders so it stays on
   the same hairline language as every other rule on the page. */
function FlowConnector() {
  return (
    <div
      aria-hidden
      className="flex shrink-0 items-center justify-center py-4 lg:w-10 lg:py-0"
    >
      {/* Vertical, below lg */}
      <div className="flex flex-col items-center lg:hidden">
        <div className="h-7 w-px bg-border" />
        <div className="-mt-[4px] h-[6px] w-[6px] rotate-[135deg] border-t border-r border-border" />
      </div>
      {/* Horizontal, lg and up */}
      <div className="hidden w-full items-center lg:flex">
        <div className="h-px flex-1 bg-border" />
        <div className="-ml-[4px] h-[6px] w-[6px] rotate-45 border-t border-r border-border" />
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Three states — reused verbatim from Variant A as every variant's           */
/* second-to-last section. Only the eyebrow number and the section background */
/* vary between variants.                                                     */
/* -------------------------------------------------------------------------- */

const STATES = [
  { label: 'Confirmed legacy', className: 'text-confirmed' },
  { label: 'Confirmed modern', className: 'text-confirmed' },
  { label: 'Unknown', className: 'text-unknown' },
]

export function ThreeStates({ index, band = false }) {
  return (
    <Section
      id="three-states"
      className={`pt-[120px] pb-[120px] ${band ? 'bg-band' : ''}`}
    >
      <SectionMarker index={index} label="Confidence" />
      <div className="mt-5">
        <SectionHeading>Three states, never two.</SectionHeading>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {STATES.map((s) => (
          <div
            key={s.label}
            className="rounded-theme border border-border bg-surface px-6 py-8 shadow-[var(--elevation)]"
          >
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
/* CTA — identical across every variant.                                      */
/* -------------------------------------------------------------------------- */

export function Cta() {
  return (
    <section className="bg-[var(--cta-bg)] px-6 py-[120px] text-[var(--cta-fg)]">
      <div className="mx-auto w-full max-w-content">
        <h2 className="max-w-[20ch] font-heading text-[32px] leading-[1.2] font-semibold tracking-display">
          Tell us what you are best at. We will show you who matches.
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
            className="flex-1 rounded-theme border border-[var(--cta-fg)]/25 bg-transparent px-4 py-3 text-[15px] text-[var(--cta-fg)] placeholder:text-[var(--cta-fg)]/40 focus:border-[var(--cta-fg)]/60 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-theme bg-[var(--cta-fg)] px-5 py-3 text-[15px] font-medium text-[var(--cta-bg)] transition-opacity hover:opacity-90"
          >
            Request access
          </button>
        </form>

        <p className="mt-4 text-[14px] leading-[1.6] text-[var(--cta-fg)]/60">
          Early access, limited slots.
        </p>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Hero — same type ramp and spacing as Variant A.                            */
/* -------------------------------------------------------------------------- */

export function HeroHeading({ className = '', children }) {
  return (
    <h1
      className={`font-heading text-[40px] leading-[1.05] font-semibold tracking-display sm:text-[56px] lg:text-[64px] ${className}`}
    >
      {children}
    </h1>
  )
}

export function HeroSubhead({ children }) {
  return (
    <p className="mt-6 max-w-[480px] text-[16px] leading-[1.6] text-ink/70">
      {children}
    </p>
  )
}

export function HeroActions({ primary, secondary }) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
      <a
        href={primary.href}
        className="rounded-theme bg-accent px-5 py-3 text-[15px] font-medium text-on-accent shadow-[var(--elevation)] transition-opacity hover:opacity-90"
      >
        {primary.label}
      </a>
      {secondary ? (
        <a
          href={secondary.href}
          className="border-b border-border pb-0.5 text-[15px] text-ink/70 transition-colors hover:border-ink hover:text-ink"
        >
          {secondary.label}
        </a>
      ) : null}
    </div>
  )
}

/* Caption used wherever an illustrative element appears. */
export function Caption({ children }) {
  return <p className="mt-8 text-[14px] leading-[1.6] text-unknown">{children}</p>
}
