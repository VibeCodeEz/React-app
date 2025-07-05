import { motion } from 'framer-motion'

interface SkeletonProps {
  width?: string
  height?: string
  className?: string
}

const Skeleton = ({ width = '100%', height = '1rem', className = '' }: SkeletonProps) => {
  return (
    <motion.div
      className={`skeleton ${className}`}
      style={{ width, height }}
      animate={{
        backgroundColor: ['#f1f5f9', '#e2e8f0', '#f1f5f9']
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      {/* Header skeleton */}
      <div className="skeleton-header">
        <Skeleton width="200px" height="2rem" />
        <Skeleton width="300px" height="1rem" />
      </div>

      {/* Content skeleton */}
      <div className="skeleton-content">
        <div className="skeleton-row">
          <Skeleton width="60%" height="1.5rem" />
          <Skeleton width="40%" height="1rem" />
        </div>
        <div className="skeleton-row">
          <Skeleton width="100%" height="1rem" />
          <Skeleton width="80%" height="1rem" />
          <Skeleton width="90%" height="1rem" />
        </div>
        <div className="skeleton-row">
          <Skeleton width="70%" height="1rem" />
          <Skeleton width="50%" height="1rem" />
        </div>
      </div>

      {/* Cards skeleton */}
      <div className="skeleton-cards">
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton-card">
            <Skeleton width="100%" height="150px" />
            <div className="skeleton-card-content">
              <Skeleton width="80%" height="1.5rem" />
              <Skeleton width="100%" height="1rem" />
              <Skeleton width="60%" height="1rem" />
              <div className="skeleton-tags">
                <Skeleton width="60px" height="1.5rem" />
                <Skeleton width="80px" height="1.5rem" />
                <Skeleton width="70px" height="1.5rem" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkeletonLoader 