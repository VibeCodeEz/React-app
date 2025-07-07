import { useEffect } from 'react'

interface PerformanceProps {
  enableServiceWorker?: boolean
  enablePreload?: boolean
  enablePrefetch?: boolean
}

const Performance = ({
  enableServiceWorker = true,
  enablePreload = true,
  enablePrefetch = true
}: PerformanceProps) => {
  useEffect(() => {
    // Register service worker for caching
    if (enableServiceWorker && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    }

    // Preload critical resources
    if (enablePreload) {
      const preloadLinks = [
        { href: '/logo.jpg', as: 'image', type: 'image/jpeg' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', as: 'style' }
      ]

      preloadLinks.forEach(({ href, as, type }) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = href
        link.as = as as 'image' | 'style' | 'script' | 'font'
        if (type) link.type = type
        document.head.appendChild(link)
      })
    }

    // Prefetch non-critical resources
    if (enablePrefetch) {
      const prefetchLinks = [
        '/about',
        '/projects',
        '/contact'
      ]

      prefetchLinks.forEach((href) => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = href
        document.head.appendChild(link)
      })
    }

    // Set up performance monitoring
    if ('performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as PerformanceEventTiming
            console.log('FID:', firstInputEntry.processingStart - entry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            const layoutShiftEntry = entry as unknown as { value: number }
            console.log('CLS:', layoutShiftEntry.value)
          }
        }
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    }

    // Set up resource hints for better performance
    const resourceHints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://github.com' },
      { rel: 'dns-prefetch', href: 'https://www.linkedin.com' },
      { rel: 'dns-prefetch', href: 'https://www.facebook.com' },
      { rel: 'dns-prefetch', href: 'https://x.com' }
    ]

    resourceHints.forEach(({ rel, href }) => {
      const link = document.createElement('link')
      link.rel = rel
      link.href = href
      document.head.appendChild(link)
    })

    // Cleanup function
    return () => {
      // Clean up any performance monitoring if needed
    }
  }, [enableServiceWorker, enablePreload, enablePrefetch])

  return null
}

export default Performance 