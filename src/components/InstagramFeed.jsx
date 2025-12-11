import { useEffect } from 'react'
import { SOCIAL_LINKS, COLORS } from '../constants'

const INSTAGRAM_POST_URLS = ['https://www.instagram.com/p/DOd8m7GDEm-/']

const INSTAGRAM_SCRIPT_ID = 'instagram-embed-script'

export default function InstagramFeed() {
  useEffect(() => {
    const renderEmbeds = () => {
      window.instgrm?.Embeds?.process()
    }

    if (window.instgrm?.Embeds) {
      renderEmbeds()
      return
    }

    if (document.getElementById(INSTAGRAM_SCRIPT_ID)) {
      renderEmbeds()
      return
    }

    const script = document.createElement('script')
    script.id = INSTAGRAM_SCRIPT_ID
    script.async = true
    script.defer = true
    script.src = 'https://www.instagram.com/embed.js'
    script.onload = renderEmbeds
    document.body.appendChild(script)
  }, [])

  return (
    <div className="neon-panel p-4 lg:p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={COLORS.primary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
              cx="18"
              cy="6"
              r="1.5"
              fill={COLORS.primary}
              stroke="none"
            />
          </svg>
          <span className="text-neon font-display text-xl lg:text-2xl tracking-wider uppercase">
            Latest Posts
          </span>
        </div>
        <a
          href={SOCIAL_LINKS.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon/70 text-sm tracking-wider hover:text-neon transition-colors"
        >
          @f3rg13.uk
        </a>
      </div>

      <div className="flex justify-center items-start">
        {INSTAGRAM_POST_URLS.map((postUrl) => (
          <div key={postUrl} className="w-full max-w-[500px]">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={postUrl}
              data-instgrm-version="14"
              data-instgrm-captioned
              style={{
                width: '100%',
                maxWidth: '540px',
                margin: '0 auto',
              }}
            />
          </div>
        ))}
      </div>

      <a
        href={SOCIAL_LINKS.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full py-3 text-center bg-neon text-ink font-display text-sm tracking-wider uppercase rounded-lg transition-all hover:bg-neon-bright hover:scale-[1.01]"
      >
        Follow on Instagram
      </a>
    </div>
  )
}
