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
      '--shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
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
      '--shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
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
      '--shadow': '0 4px 6px -1px rgba(16, 185, 129, 0.1)',
      '--shadow-lg': '0 10px 15px -3px rgba(16, 185, 129, 0.1)',
    }
  },
  {
    name: 'Emerald Dark',
    key: 'emerald-dark',
    colors: {
      '--primary-color': '#10b981',
      '--primary-dark': '#047857',
      '--secondary-color': '#064e3b',
      '--background': '#022c22',
      '--text-primary': '#d1fae5',
      '--text-secondary': '#6ee7b7',
      '--text-light': '#34d399',
      '--border-color': '#065f46',
      '--shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
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
      '--shadow': '0 4px 6px -1px rgba(244, 63, 94, 0.1)',
      '--shadow-lg': '0 10px 15px -3px rgba(244, 63, 94, 0.1)',
    }
  },
  {
    name: 'Rose Dark',
    key: 'rose-dark',
    colors: {
      '--primary-color': '#f43f5e',
      '--primary-dark': '#be123c',
      '--secondary-color': '#4c0519',
      '--background': '#1f0f1f',
      '--text-primary': '#fce7f3',
      '--text-secondary': '#fda4af',
      '--text-light': '#fb7185',
      '--border-color': '#881337',
      '--shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
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
      '--shadow': '0 4px 6px -1px rgba(14, 165, 233, 0.1)',
      '--shadow-lg': '0 10px 15px -3px rgba(14, 165, 233, 0.1)',
    }
  },
  {
    name: 'Sky Dark',
    key: 'sky-dark',
    colors: {
      '--primary-color': '#0ea5e9',
      '--primary-dark': '#0369a1',
      '--secondary-color': '#0c4a6e',
      '--background': '#082f49',
      '--text-primary': '#e0f2fe',
      '--text-secondary': '#7dd3fc',
      '--text-light': '#38bdf8',
      '--border-color': '#0e7490',
      '--shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
    }
  },
  {
    name: 'Purple',
    key: 'purple',
    colors: {
      '--primary-color': '#8b5cf6',
      '--primary-dark': '#7c3aed',
      '--secondary-color': '#f3e8ff',
      '--background': '#faf5ff',
      '--text-primary': '#581c87',
      '--text-secondary': '#7c3aed',
      '--text-light': '#c4b5fd',
      '--border-color': '#ddd6fe',
      '--shadow': '0 4px 6px -1px rgba(139, 92, 246, 0.1)',
      '--shadow-lg': '0 10px 15px -3px rgba(139, 92, 246, 0.1)',
    }
  },
  {
    name: 'Purple Dark',
    key: 'purple-dark',
    colors: {
      '--primary-color': '#8b5cf6',
      '--primary-dark': '#7c3aed',
      '--secondary-color': '#2e1065',
      '--background': '#1e1b4b',
      '--text-primary': '#f3e8ff',
      '--text-secondary': '#c4b5fd',
      '--text-light': '#a78bfa',
      '--border-color': '#5b21b6',
      '--shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
    }
  }
]

function applyTheme(themeKey: string) {
  const theme = themes.find(t => t.key === themeKey) || themes[0]
  const root = document.documentElement
  
  // Apply color variables
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
  
  // Set theme attribute for CSS targeting
  root.setAttribute('data-theme', themeKey)
  
  // Handle dark mode class for backward compatibility
  if (themeKey.includes('dark')) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  
  localStorage.setItem('theme', themeKey)
}

const ThemePicker = () => {
  const [selected, setSelected] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    applyTheme(selected)
  }, [selected])

  const handleThemeChange = (themeKey: string) => {
    setSelected(themeKey)
    applyTheme(themeKey)
  }

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
          style={{ 
            background: theme.colors['--primary-color'],
            border: `2px solid ${theme.colors['--border-color']}`
          }}
          onClick={() => handleThemeChange(theme.key)}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') handleThemeChange(theme.key)
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