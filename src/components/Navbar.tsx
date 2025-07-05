import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import ThemePicker from './ThemePicker'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="navbar">
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
          <ThemeToggle />
        </div>

        <div className="nav-actions">
          <ThemePicker />
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