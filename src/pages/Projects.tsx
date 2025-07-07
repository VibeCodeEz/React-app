import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter } from 'lucide-react'
import Card3D from '../components/Card3D'
import LazyImage from '../components/LazyImage'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'MovieFlix',
      description: t('projects.movieflixDesc'),
      image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'MovieFlix - Movie search application',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'OMDB API', 'Vite', 'Netlify'],
      github: 'https://github.com/VibeCodeEz/second-react-app-movieflix',
      live: 'https://ez-movieflix.netlify.app/',
      featured: true
    },
    {
      id: 2,
      title: 'The Wicked Daze Clothing',
      description: 'A modern, responsive e-commerce website built for "The Wicked Daze Clothing" brand using React, TypeScript, and Vite. Features include responsive design, dark/light theme toggle, interactive product gallery, shopping cart system, size guide integration, and smooth navigation with auto-hiding navbar.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'The Wicked Daze Clothing - E-commerce Website',
      category: 'frontend',
      technologies: ['React 19', 'TypeScript', 'Vite', 'CSS3', 'E-commerce', 'Responsive Design'],
      github: 'https://github.com/VibeCodeEz/SHOP-WICKED',
      live: 'https://shop-thewickeddazeclothing.netlify.app/',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Web App',
      description: t('projects.weatherDesc'),
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop&crop=center',
      imageAlt: 'Weather Web App - Real-time weather information',
      category: 'frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API'],
      github: 'https://github.com/VibeCodeEz/weather-app',
      live: 'https://weatherwebsitemorabe.netlify.app/',
      featured: true
    },
    {
      id: 4,
      title: 'Scientific Calculator',
      description: t('projects.calcDesc'),
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center',
      imageAlt: 'Scientific Calculator - Advanced calculation tool',
      category: 'frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/VibeCodeEz/calculator',
      live: 'https://calculatormorabe.netlify.app/',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: t('projects.portfolioDesc'),
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center',
      imageAlt: 'Portfolio Website - Personal portfolio showcase',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Vite'],
      github: 'https://github.com/VibeCodeEz/Port-folio',
      live: 'https://morabeportfolio.netlify.app/',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', label: t('projects.all') },
    { id: 'frontend', label: t('projects.frontend') },
    { id: 'fullstack', label: t('projects.fullstack') }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="projects-header"
      >
        <h1>{t('projects.title')}</h1>
        <p>{t('projects.subtitle')}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="filter-section"
      >
        <div className="filter-container">
          <Filter size={20} />
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <Card3D intensity={15} className="project-card-3d">
              <div className={`project-card ${project.featured ? 'featured' : ''}`}>
                <div className="project-image">
                  <LazyImage
                    src={project.image}
                    alt={project.imageAlt}
                    className="project-lazy-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    srcSet={`${project.image} 400w, ${project.image.replace('w=400', 'w=800')} 800w, ${project.image.replace('w=400', 'w=1200')} 1200w`}
                  />
                  {project.featured && <span className="featured-badge">{t('projects.featured')}</span>}
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={20} />
                      {t('projects.code')}
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={20} />
                      {t('projects.liveDemo')}
                    </a>
                  </div>
                </div>
              </div>
            </Card3D>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="no-projects"
        >
          <p>{t('projects.noProjects')}</p>
        </motion.div>
      )}
    </div>
  )
}

export default Projects 