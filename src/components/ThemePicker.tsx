import { useEffect, useState } from 'react'

const themes = [
  {
    name: 'Light',
    key: 'light',
    colors: {
      '--primary-color': '#6366f1',
      '--primary-dark': '#4f46e5',
      '--secondary-color': '#f8fafc',
      '--background': '#ffffff',
      '--text-primary': '#1e293b',
      '--text-secondary': '#64748b',
      '--text-light': '#94a3b8',
      '--border-color': '#e2e8f0',
    }
  },
  {
    name: 'Dark',
    key: 'dark',
    colors: {
      '--primary-color': '#6366f1',
      '--primary-dark': '#312e81',
      '--secondary-color': '#1e293b',
      '--background': '#0f172a',
      '--text-primary': '#f1f5f9',
      '--text-secondary': '#cbd5e1',
      '--text-light': '#64748b',
      '--border-color': '#334155',
    }
  },
  {
    name: 'Emerald',
    key: 'emerald',
    colors: {
      '--primary-color': '#10b981',
      '--primary-dark': '#047857',
      '--secondary-color': '#d1fae5',
      '--background': '#ecfdf5',
      '--text-primary': '#065f46',
      '--text-secondary': '#047857',
      '--text-light': '#6ee7b7',
      '--border-color': '#a7f3d0',
    }
  },
  {
    name: 'Rose',
    key: 'rose',
    colors: {
      '--primary-color': '#f43f5e',
      '--primary-dark': '#be123c',
      '--secondary-color': '#ffe4e6',
      '--background': '#fff1f2',
      '--text-primary': '#881337',
      '--text-secondary': '#be123c',
      '--text-light': '#fda4af',
      '--border-color': '#fecdd3',
    }
  },
  {
    name: 'Sky',
    key: 'sky',
    colors: {
      '--primary-color': '#0ea5e9',
      '--primary-dark': '#0369a1',
      '--secondary-color': '#e0f2fe',
      '--background': '#f0f9ff',
      '--text-primary': '#0c4a6e',
      '--text-secondary': '#0369a1',
      '--text-light': '#7dd3fc',
      '--border-color': '#bae6fd',
    }
  }
]

function applyTheme(themeKey: string) {
  const theme = themes.find(t => t.key === themeKey) || themes[0]
  Object.entries(theme.colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
  })
}

const ThemePicker = () => {
  const [selected, setSelected] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    applyTheme(selected)
    localStorage.setItem('theme', selected)
  }, [selected])

  return (
    <div className="theme-picker" role="radiogroup" aria-label="Theme picker">
      {themes.map(theme => (
        <button
          key={theme.key}
          className={`theme-swatch${selected === theme.key ? ' selected' : ''}`}
          aria-checked={selected === theme.key}
          aria-label={theme.name}
          tabIndex={0}
          role="radio"
          style={{ background: theme.colors['--primary-color'] }}
          onClick={() => setSelected(theme.key)}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') setSelected(theme.key)
          }}
        >
          {selected === theme.key && (
            <span className="theme-check" aria-hidden="true">✔</span>
          )}
          <span className="theme-tooltip">{theme.name}</span>
        </button>
      ))}
    </div>
  )
}

export default ThemePicker 