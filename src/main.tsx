import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n.ts'

// Theme initialization
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  const root = document.documentElement
  
  // Apply the saved theme
  if (savedTheme.includes('dark')) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  
  root.setAttribute('data-theme', savedTheme)
}

// Initialize theme before rendering
initializeTheme()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
