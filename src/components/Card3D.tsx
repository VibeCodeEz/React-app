import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

interface Card3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

const Card3D = ({ children, className = '', intensity = 20 }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity])

  const springConfig = { damping: 20, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseXFromCenter = e.clientX - centerX
    const mouseYFromCenter = e.clientY - centerY
    
    mouseX.set(mouseXFromCenter / (rect.width / 2))
    mouseY.set(mouseYFromCenter / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`card-3d ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d'
        }}
        className="card-3d-content"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Card3D 