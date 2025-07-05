import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Zap } from 'lucide-react'
import ProgressBar from '../components/ProgressBar'
import Card3D from '../components/Card3D'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  const skills = [
    { name: 'HTML5', icon: <Code size={24} />, level: 90 },
    { name: 'CSS3', icon: <Code size={24} />, level: 85 },
    { name: 'JavaScript', icon: <Code size={24} />, level: 80 },
    { name: 'Python', icon: <Database size={24} />, level: 75 },
    { name: 'C++', icon: <Smartphone size={24} />, level: 70 },
    { name: 'React (Learning)', icon: <Zap size={24} />, level: 30 },
    { name: 'System Maintenance', icon: <Zap size={24} />, level: 85 }
  ]

  const experiences = [
    {
      year: '2025 - Present',
      title: t('about.exp1Title'),
      company: t('about.exp1Company'),
      description: t('about.exp1Desc')
    },
    {
      year: '2023  - 2025',
      title: t('about.exp2Title'),
      company: t('about.exp2Company'),
      description: t('about.exp2Desc')
    },
    {
      year: '2025',
      title: t('about.exp3Title'),
      company: t('about.exp3Company'),
      description: t('about.exp3Desc')
    }
  ]

  return (
    <div className="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="about-header"
      >
        <h1>{t('about.title')}</h1>
        <p>{t('about.subtitle')}</p>
      </motion.div>

      <div className="about-content">
        <Card3D intensity={10}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-text"
          >
            <h2>{t('about.whoIAm')}</h2>
            <p>{t('about.intro1')}</p>
            <p>{t('about.intro2')}</p>
            <p>{t('about.intro3')}</p>
          </motion.div>
        </Card3D>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="about-stats"
        >
          <div className="stat">
            <h3>2026</h3>
            <p>{t('about.expectedGrad')}</p>
          </div>
          <div className="stat">
            <h3>NCII</h3>
            <p>{t('about.certification')}</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>{t('about.projectsCompleted')}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="skills-section"
      >
        <h2>{t('about.skillsTitle')}</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="skill-card"
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <ProgressBar 
                value={skill.level} 
                max={100} 
                label={skill.name}
                color={skill.name.includes('React') ? '#61dafb' : '#6366f1'}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="experience-section"
      >
        <h2>{t('about.expTitle')}</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-year">{exp.year}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default About 