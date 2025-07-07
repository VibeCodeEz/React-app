import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import ThemePicker from './ThemePicker'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(window.scrollY)
  const location = useLocation()

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className={`navbar${hidden ? ' navbar--hidden' : ''}`}>
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <span className="logo-text">EZM</span>
        </a>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {/* Mobile: show theme/lang controls inside menu */}
          <div className="nav-actions nav-actions-mobile">
            <div className="nav-theme-controls">
              <ThemeToggle />
              <ThemePicker />
            </div>
            <select
              aria-label="Select language"
              onChange={e => i18n.changeLanguage(e.target.value)}
              value={i18n.language}
              className="lang-switcher"
            >
              <option value="en">EN</option>
              <option value="fil">FIL</option>
            </select>
          </div>
        </div>
        {/* Desktop: show theme/lang controls outside menu */}
        <div className="nav-actions nav-actions-desktop">
          <div className="nav-theme-controls">
            <ThemeToggle />
            <ThemePicker />
          </div>
          <select
            aria-label="Select language"
            onChange={e => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            className="lang-switcher"
          >
            <option value="en">EN</option>
            <option value="fil">FIL</option>
          </select>
        </div>
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar 