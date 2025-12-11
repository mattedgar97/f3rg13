import { SITE_CONFIG } from '../constants'

export default function Header() {
  return (
    <header className="w-full py-3 px-4 flex items-center justify-center gap-4 text-[10px] tracking-[0.3em] uppercase font-body">
      {/* Left glyphs */}
      <div className="flex items-center gap-2">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          className="text-ink"
        >
          <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          className="text-ink"
        >
          <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Center text */}
      <span className="text-ink font-medium">
        + {SITE_CONFIG.tagline} X {SITE_CONFIG.taglineRight}
      </span>

      {/* Right glyphs */}
      <div className="flex items-center gap-2">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          className="text-ink"
        >
          <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          className="text-ink"
        >
          <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </header>
  )
}
