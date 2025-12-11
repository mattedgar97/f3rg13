export default function GlyphRow() {
  const glyphs = [
    // Concentric rings
    <svg key="rings" viewBox="0 0 40 40" className="w-full h-full">
      <circle
        cx="20"
        cy="20"
        r="16"
        stroke="#C7D900"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="20"
        cy="20"
        r="11"
        stroke="#C7D900"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="20"
        cy="20"
        r="6"
        stroke="#C7D900"
        strokeWidth="2"
        fill="none"
      />
    </svg>,

    // Wavy lines
    <svg key="waves" viewBox="0 0 40 40" className="w-full h-full">
      <path
        d="M5 15 Q12 10, 20 15 T35 15"
        stroke="#C7D900"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M5 20 Q12 15, 20 20 T35 20"
        stroke="#C7D900"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M5 25 Q12 20, 20 25 T35 25"
        stroke="#C7D900"
        strokeWidth="2"
        fill="none"
      />
    </svg>,

    // Oval/ellipse rings
    <svg key="ovals" viewBox="0 0 40 40" className="w-full h-full">
      <ellipse
        cx="20"
        cy="20"
        rx="16"
        ry="10"
        stroke="#C7D900"
        strokeWidth="2"
        fill="none"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="10"
        ry="6"
        stroke="#C7D900"
        strokeWidth="2"
        fill="none"
      />
    </svg>,

    // Scale/meter bars
    <svg key="scale" viewBox="0 0 40 40" className="w-full h-full">
      <rect x="6" y="28" width="4" height="8" fill="#C7D900" opacity="0.5" />
      <rect x="12" y="24" width="4" height="12" fill="#C7D900" opacity="0.6" />
      <rect x="18" y="18" width="4" height="18" fill="#C7D900" opacity="0.7" />
      <rect x="24" y="14" width="4" height="22" fill="#C7D900" opacity="0.85" />
      <rect x="30" y="8" width="4" height="28" fill="#C7D900" />
    </svg>,
  ]

  return (
    <div className="w-full px-4 lg:px-8 mt-4">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-4 gap-3 lg:gap-4">
          {glyphs.map((glyph, i) => (
            <div
              key={i}
              className="glyph-hover aspect-square bg-screen border-2 border-ink rounded-panel-sm lg:rounded-panel p-3 lg:p-4 flex items-center justify-center"
            >
              {glyph}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
