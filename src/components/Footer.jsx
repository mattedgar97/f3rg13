import { SITE_CONFIG } from '../constants'

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 mt-12">
      <div className="max-w-site mx-auto flex flex-col items-center gap-4">
        {/* Decorative glyph row */}
        <div className="flex items-center gap-2">
          {[...Array(7)].map((_, i) => (
            <svg
              key={i}
              width="6"
              height="6"
              viewBox="0 0 6 6"
              className="text-ink opacity-60"
            >
              <circle
                cx="3"
                cy="3"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-ink text-xs tracking-widest uppercase font-body">
          {SITE_CONFIG.copyright} — {SITE_CONFIG.tagline}
        </p>

        {/* Bottom glyphs */}
        <div className="flex items-center gap-2">
          {[...Array(7)].map((_, i) => (
            <svg
              key={i}
              width="6"
              height="6"
              viewBox="0 0 6 6"
              className="text-ink opacity-60"
            >
              <circle
                cx="3"
                cy="3"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          ))}
        </div>
      </div>
    </footer>
  )
}
