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
    <h2 className="max-w-3xl text-[32px] leading-[1.2] font-semibold tracking-[-0.02em]">
      {children}
    </h2>
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
/* CTA — identical across every variant.                                      */
/* -------------------------------------------------------------------------- */

export function Cta() {
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

/* -------------------------------------------------------------------------- */
/* Hero — same type ramp and spacing as Variant A.                            */
/* -------------------------------------------------------------------------- */

export function HeroHeading({ className = '', children }) {
  return (
    <h1
      className={`text-[40px] leading-[1.05] font-semibold tracking-[-0.02em] sm:text-[56px] lg:text-[64px] ${className}`}
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
        className="rounded-md bg-ink px-5 py-3 text-[15px] font-medium text-bg transition-opacity hover:opacity-90"
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
