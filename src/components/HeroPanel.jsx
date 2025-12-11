export default function HeroPanel() {
  return (
    <section className="w-full px-4 lg:px-8">
      <div className="neon-panel screen-scanlines aspect-video lg:aspect-[16/9] w-full max-w-site mx-auto p-4 lg:p-8 relative overflow-hidden">
        {/* Planet/Globe SVG artwork */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full max-w-[90%] max-h-[90%]"
            style={{ shapeRendering: 'crispEdges' }}
          >
            {/* Concentric circles - globe effect */}
            <g stroke="#C7D900" strokeWidth="2" fill="none">
              <circle cx="200" cy="150" r="100" opacity="0.9" />
              <circle cx="200" cy="150" r="85" opacity="0.7" />
              <circle cx="200" cy="150" r="70" opacity="0.5" />
              <circle cx="200" cy="150" r="55" opacity="0.4" />
              <circle cx="200" cy="150" r="40" opacity="0.3" />
              <circle cx="200" cy="150" r="25" opacity="0.2" />
            </g>

            {/* Horizontal latitude lines */}
            <g stroke="#C7D900" strokeWidth="1" fill="none" opacity="0.6">
              <ellipse cx="200" cy="120" rx="95" ry="20" />
              <ellipse cx="200" cy="150" rx="100" ry="8" />
              <ellipse cx="200" cy="180" rx="95" ry="20" />
            </g>

            {/* Diagonal band crossing the globe */}
            <line
              x1="80"
              y1="250"
              x2="320"
              y2="50"
              stroke="#C7D900"
              strokeWidth="3"
              strokeDasharray="8 4"
              opacity="0.8"
            />

            {/* Halftone dots pattern */}
            <g fill="#C7D900" opacity="0.4">
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={140 + (i % 4) * 40}
                  cy={100 + Math.floor(i / 4) * 50}
                  r={3 - (i % 3)}
                />
              ))}
            </g>

            {/* Corner accent marks */}
            <g stroke="#C7D900" strokeWidth="2">
              <path d="M30 30 L50 30 M30 30 L30 50" opacity="0.6" />
              <path d="M370 30 L350 30 M370 30 L370 50" opacity="0.6" />
              <path d="M30 270 L50 270 M30 270 L30 250" opacity="0.6" />
              <path d="M370 270 L350 270 M370 270 L370 250" opacity="0.6" />
            </g>
          </svg>
        </div>

        {/* Grain overlay for the panel */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </section>
  )
}
