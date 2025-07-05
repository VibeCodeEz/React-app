import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ProgressBarProps {
  value: number
  max: number
  label: string
  color?: string
  showPercentage?: boolean
}

const ProgressBar = ({ 
  value, 
  max, 
  label, 
  color = '#6366f1',
  showPercentage = true 
}: ProgressBarProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const percentage = (value / max) * 100

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-header">
        <span className="progress-label">{label}</span>
        {showPercentage && (
          <span className="progress-percentage">{percentage}%</span>
        )}
      </div>
      <div className="progress-bar-track">
        <motion.div
          className="progress-bar-fill"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.2
          }}
        />
        <motion.div
          className="progress-bar-glow"
          style={{ backgroundColor: color }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isVisible ? 0.3 : 0,
            scale: isVisible ? 1 : 0
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.5
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar 