import { useEffect, useMemo, useState } from 'react'
import VariantA, { theme as themeA } from './variants/VariantA.jsx'
import VariantB, { theme as themeB } from './variants/VariantB.jsx'
import VariantC, { theme as themeC } from './variants/VariantC.jsx'
import VariantD, { theme as themeD } from './variants/VariantD.jsx'

/**
 * Variant registry. Each variant ships its own theme: a light and a dark
 * palette, plus type, radius and border treatment. Add a variant by dropping a
 * file in src/variants/ that default-exports the component and named-exports
 * `theme`, then adding it here.
 *
 * Dropdown labels do not match file names. Order and labels are set here:
 * "Variant A" is VariantB.jsx, "Variant B" is VariantC.jsx, "Variant C" is
 * VariantA.jsx, and "Variant D" is VariantD.jsx. The first entry is the
 * default.
 */
const VARIANTS = [
  { id: 'A', label: 'Variant A', Component: VariantB, theme: themeB },
  { id: 'B', label: 'Variant B', Component: VariantC, theme: themeC },
  { id: 'C', label: 'Variant C', Component: VariantA, theme: themeA },
  { id: 'D', label: 'Variant D', Component: VariantD, theme: themeD },
]

export default function App() {
  const [active, setActive] = useState('A')
  /* Mode lives in React state only — deliberately not persisted. Each variant
     opens in whichever mode its design language is actually designed for. */
  const [mode, setMode] = useState(() => VARIANTS[0].theme.defaultMode ?? 'light')

  const variant = VARIANTS.find((v) => v.id === active) ?? VARIANTS[0]
  const Variant = variant.Component
  const vars = useMemo(() => variant.theme[mode], [variant, mode])

  /* Applied to the document element rather than a wrapper so that html and
     body pick up the ground colour too, and overscroll does not flash white. */
  useEffect(() => {
    const root = document.documentElement
    for (const [key, value] of Object.entries(vars)) {
      root.style.setProperty(key, value)
    }
    return () => {
      for (const key of Object.keys(vars)) root.style.removeProperty(key)
    }
  }, [vars])

  function selectVariant(id) {
    setActive(id)
    const next = VARIANTS.find((v) => v.id === id)
    if (next?.theme.defaultMode) setMode(next.theme.defaultMode)
  }

  return (
    <div className="min-h-screen bg-bg font-sans text-ink">
      <TopBar
        variant={variant}
        onSelectVariant={selectVariant}
        mode={mode}
        onToggleMode={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))}
      />
      <Variant />
    </div>
  )
}

function TopBar({ variant, onSelectVariant, mode, onToggleMode }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <label className="flex items-center gap-2 rounded-theme border border-border bg-surface px-3 py-2 shadow-[var(--elevation)]">
        <span className="hidden font-mono text-[12px] tracking-wider text-unknown uppercase sm:inline">
          Variant
        </span>
        <select
          value={variant.id}
          onChange={(e) => onSelectVariant(e.target.value)}
          className="cursor-pointer bg-surface text-[14px] font-medium text-ink focus:outline-none"
        >
          {VARIANTS.map((v) => (
            <option key={v.id} value={v.id}>
              {v.label}
            </option>
          ))}
        </select>
      </label>

      <button
        type="button"
        onClick={onToggleMode}
        aria-pressed={mode === 'dark'}
        className="cursor-pointer rounded-theme border border-border bg-surface px-3 py-2 font-mono text-[12px] tracking-wider text-ink uppercase shadow-[var(--elevation)] transition-colors hover:border-accent"
      >
        {mode === 'dark' ? 'Dark' : 'Light'}
      </button>
    </div>
  )
}
