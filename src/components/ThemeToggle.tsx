import { useState, useEffect } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Get saved theme preference
    const savedTheme = localStorage.getItem('theme-preference') as 'light' | 'dark' | 'system' || 'system'
    setTheme(savedTheme)
    
    // Apply theme based on preference
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (themePreference: 'light' | 'dark' | 'system') => {
    const root = document.documentElement
    let shouldBeDark = false

    if (themePreference === 'system') {
      shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    } else {
      shouldBeDark = themePreference === 'dark'
    }

    setIsDark(shouldBeDark)
    
    if (shouldBeDark) {
      root.classList.add('dark')
      root.setAttribute('data-theme', 'dark')
    } else {
      root.classList.remove('dark')
      root.setAttribute('data-theme', 'light')
    }

    localStorage.setItem('theme-preference', themePreference)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor size={20} />
    }
    return isDark ? <Sun size={20} /> : <Moon size={20} />
  }

  const getAriaLabel = () => {
    if (theme === 'system') {
      return `System theme (${isDark ? 'dark' : 'light'} mode)`
    }
    return `Switch to ${isDark ? 'light' : 'dark'} mode`
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={getAriaLabel()}
      title={getAriaLabel()}
    >
      {getIcon()}
    </button>
  )
}

export default ThemeToggle 