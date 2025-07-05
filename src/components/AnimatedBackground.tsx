import ParticleBackground from './ParticleBackground'
import GradientBackground from './GradientBackground'
import MouseTrail from './MouseTrail'

const AnimatedBackground = () => {

  return (
    <div className="animated-background">
      <ParticleBackground />
      <GradientBackground />
      <MouseTrail />
    </div>
  )
}

export default AnimatedBackground 