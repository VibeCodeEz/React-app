import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  structuredData?: object
}

const SEO = ({
  title = 'Emanuel Zack Morabe - Computer Engineering Student & Web Developer',
  description = 'Computer Engineering student at EARIST, Manila specializing in web development. Creating beautiful, functional web applications with modern technologies.',
  keywords = 'web developer, computer engineering, react, typescript, javascript, html5, css3, portfolio',
  image = '/og-image.jpg',
  url = 'https://morabeportfolio.netlify.app',
  type = 'website',
  author = 'Emanuel Zack Morabe',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData
}: SEOProps) => {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Emanuel Zack Morabe',
    jobTitle: 'Computer Engineering Student & Web Developer',
    description: description,
    url: url,
    sameAs: [
      'https://github.com/VibeCodeEz',
      'https://www.linkedin.com/in/morabe-emanuelzack-53a324264/',
      'https://www.facebook.com/manzack023',
      'https://x.com/EZMB023'
    ],
    knowsAbout: [
      'Web Development',
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'TypeScript',
      'Python',
      'C++',
      'Computer Systems Servicing'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'EARIST, Manila'
    },
    email: 'emanuelzack.morabe@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manila',
      addressCountry: 'PH'
    }
  }

  const finalStructuredData = structuredData || defaultStructuredData

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Emanuel Zack Morabe Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@EZMB023" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  )
}

export default SEO 