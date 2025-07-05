import { Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

const SocialShare = () => {
  const currentUrl = window.location.href
  const title = "Emanuel Zack Morabe - Portfolio"
  const description = "Computer Engineering Student & Web Developer"

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\nCheck out my portfolio: ${currentUrl}`)}`
  }

  const handleShare = (platform: string) => {
    const url = shareLinks[platform as keyof typeof shareLinks]
    if (url) {
      window.open(url, '_blank', 'width=600,height=400')
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: currentUrl
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    }
  }

  return (
    <div className="social-share">
      <h3>Share My Portfolio</h3>
      <div className="share-buttons">
        <button
          onClick={() => handleShare('facebook')}
          className="share-btn facebook"
          aria-label="Share on Facebook"
        >
          <Facebook size={20} />
        </button>
        <button
          onClick={() => handleShare('twitter')}
          className="share-btn twitter"
          aria-label="Share on Twitter"
        >
          <Twitter size={20} />
        </button>
        <button
          onClick={() => handleShare('linkedin')}
          className="share-btn linkedin"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={20} />
        </button>
        <button
          onClick={() => handleShare('email')}
          className="share-btn email"
          aria-label="Share via Email"
        >
          <Mail size={20} />
        </button>
        {typeof navigator.share !== 'undefined' && (
          <button
            onClick={handleNativeShare}
            className="share-btn native"
            aria-label="Share"
          >
            <Share2 size={20} />
          </button>
        )}
      </div>
    </div>
  )
}

export default SocialShare 