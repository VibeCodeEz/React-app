import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/yourFormId' // <-- Replace with your Formspree endpoint

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
        setName('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} aria-label="Newsletter signup form">
      <h3 className="newsletter-title">Subscribe for Updates</h3>
      <p className="newsletter-desc">Get notified about new projects, blog posts, and more!</p>
      <div className="newsletter-fields">
        <input
          type="text"
          name="name"
          placeholder="Your Name (optional)"
          value={name}
          onChange={e => setName(e.target.value)}
          aria-label="Your name (optional)"
          className="newsletter-input"
          autoComplete="name"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          aria-label="Your email address"
          className="newsletter-input"
          required
          autoComplete="email"
        />
        <button
          type="submit"
          className="btn btn-primary newsletter-btn"
          disabled={status === 'submitting'}
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting...' : 'Subscribe'}
        </button>
      </div>
      {status === 'success' && (
        <div className="newsletter-success" role="status">
          <span role="img" aria-label="Success">🎉</span> Thank you for subscribing!
        </div>
      )}
      {status === 'error' && (
        <div className="newsletter-error" role="alert">
          <span role="img" aria-label="Error">❌</span> Something went wrong. Please try again.
        </div>
      )}
    </form>
  )
}

export default NewsletterSignup 