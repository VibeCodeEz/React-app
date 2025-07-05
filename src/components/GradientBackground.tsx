import { motion } from 'framer-motion'

const GradientBackground = () => {
  return (
    <div className="gradient-background">
      <motion.div
        className="gradient-orb orb-1"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="gradient-orb orb-2"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="gradient-orb orb-3"
        animate={{
          x: [0, 60, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default GradientBackground 