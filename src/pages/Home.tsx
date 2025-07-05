import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Facebook, Twitter, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ParallaxSection from '../components/ParallaxSection'

const Home = () => {
  const { t } = useTranslation()
  return (
    <div className="home">
      <div className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            {t('home.title')}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            {t('home.subtitle')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-description"
          >
            {t('home.description')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-buttons"
          >
            <Link to="/projects" className="btn btn-primary">
              {t('home.viewWork')}
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              {t('home.getInTouch')}
            </Link>
            <a 
              href="/Mr.Morabe CV.pdf" 
              download="Emanuel_Zack_Morabe_CV.pdf"
              className="btn btn-secondary"
            >
              <Download size={20} />
              {t('home.downloadCV')}
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="social-links"
          >
            <a href="https://github.com/VibeCodeEz" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/morabe-emanuelzack-53a324264/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="https://www.facebook.com/manzack023" target="_blank" rel="noopener noreferrer" className="social-link">
              <Facebook size={24} />
            </a>
            <a href="https://x.com/EZMB023" target="_blank" rel="noopener noreferrer" className="social-link">
              <Twitter size={24} />
            </a>
            <a href="mailto:emanuelzack.morabe@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <ParallaxSection speed={0.3}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-image"
          >
            <div className="profile-placeholder">
              <div className="profile-circle">
                <span>👨‍💻</span>
              </div>
            </div>
          </motion.div>
        </ParallaxSection>
      </div>
    </div>
  )
}

export default Home 