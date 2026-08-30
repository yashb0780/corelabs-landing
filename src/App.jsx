import { useState } from 'react'
import VariantA from './variants/VariantA.jsx'

/**
 * Variant registry. Add a variant by dropping a file in src/variants/ and
 * pointing its entry at the component. Entries with `Component: null` show the
 * "not built yet" state, so the switcher always lists A through E.
 */
const VARIANTS = [
  { id: 'A', label: 'Variant A', Component: VariantA },
  { id: 'B', label: 'Variant B', Component: null },
  { id: 'C', label: 'Variant C', Component: null },
  { id: 'D', label: 'Variant D', Component: null },
  { id: 'E', label: 'Variant E', Component: null },
]

export default function App() {
  const [active, setActive] = useState('A')
  const variant = VARIANTS.find((v) => v.id === active) ?? VARIANTS[0]
  const Variant = variant.Component

  return (
    <>
      <VariantSwitcher value={active} onChange={setActive} />
      {Variant ? <Variant /> : <NotBuiltYet label={variant.label} />}
    </>
  )
}

function VariantSwitcher({ value, onChange }) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <label className="flex items-center gap-2 rounded-md border border-border bg-bg px-3 py-2 shadow-sm">
        <span className="text-xs tracking-widest text-unknown uppercase">Variant</span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="cursor-pointer bg-bg text-sm font-medium text-ink focus:outline-none"
        >
          {VARIANTS.map((v) => (
            <option key={v.id} value={v.id}>
              {v.label}
              {v.Component ? '' : ' — not built'}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

function NotBuiltYet({ label }) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-content items-center px-6">
      <div>
        <p className="text-sm tracking-widest text-unknown uppercase">{label}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
          Not built yet
        </h1>
        <p className="mt-3 text-ink/60">
          Add <code className="px-1">src/variants/Variant{label.at(-1)}.jsx</code>{' '}
          and register it in <code className="px-1">src/App.jsx</code>.
        </p>
      </div>
    </main>
  )
}
