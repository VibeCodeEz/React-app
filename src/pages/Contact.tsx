import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Twitter, Download, FileText } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

const EMAILJS_SERVICE_ID = 'service_r8dtcuy'
const EMAILJS_TEMPLATE_ID = 'template_fcy3fwh'
const EMAILJS_PUBLIC_KEY = 'wPYloQaakZU1ImSMY'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Prepare template params for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert(t('contact.success'))
    } catch {
      setIsSubmitting(false)
      alert(t('contact.error'))
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: t('contact.email'),
      value: 'morabeemanuel030@gmail.com',
      link: 'mailto:morabeemanuel030@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: t('contact.location'),
      value: 'Manila, Philippines',
      link: '#'
    },
    {
      icon: <Phone size={24} />,
      title: t('contact.education'),
      value: 'EARIST, Manila (2026)',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/VibeCodeEz',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/morabe-emanuelzack-53a324264/',
      color: '#0077b5'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={24} />,
      url: 'https://www.facebook.com/manzack023',
      color: '#1877f2'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: 'https://x.com/EZMB023',
      color: '#1da1f2'
    }
  ]

  return (
    <div className="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.subtitle')}</p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-info"
        >
          <h2>{t('contact.connect')}</h2>
          <p>{t('contact.connectDesc')}</p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="contact-item"
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-text">
                  <h3>{info.title}</h3>
                  <p>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="cv-download-section"
          >
            <h3>{t('contact.downloadCVTitle')}</h3>
            <p>{t('contact.downloadCVDesc')}</p>
            <a 
              href="/Mr.Morabe CV.pdf" 
              download="Emanuel_Zack_Morabe_CV.pdf"
              className="cv-download-btn"
            >
              <Download size={20} />
              <FileText size={20} />
              {t('contact.downloadCVBtn')}
            </a>
          </motion.div>

          <div className="social-section">
            <h3>{t('contact.followMe')}</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="social-link"
                  style={{ '--social-color': social.color } as React.CSSProperties}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="contact-form"
        >
          <h2>{t('contact.sendMessage')}</h2>
          <form onSubmit={handleSubmit} aria-label={t('contact.formAriaLabel')}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.namePlaceholder')}
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.emailPlaceholder')}
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t('contact.subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder={t('contact.subjectPlaceholder')}
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t('contact.messagePlaceholder')}
                aria-required="true"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              <Send size={20} /> {isSubmitting ? t('contact.sending') : t('contact.send')}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 