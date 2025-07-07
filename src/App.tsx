import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import SocialShare from './components/SocialShare'
import AnimatedBackground from './components/AnimatedBackground'
import PageTransition from './components/PageTransition'
import SEO from './components/SEO'
import Performance from './components/Performance'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <SEO />
          <Performance />
          <AnimatedBackground />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </main>
          <ScrollToTop />
          <SocialShare />
          <Chatbot />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
