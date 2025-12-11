import { SITE_CONFIG } from '../constants'

export default function Title() {
  return (
    <section className="w-full px-4 lg:px-8 mb-8 lg:mb-12">
      <div className="max-w-site mx-auto">
        <div className="neon-panel p-8 lg:p-12 text-center">
          {/* Main title */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-none text-neon uppercase">
            {SITE_CONFIG.djName}
          </h1>

          {/* Decorative line */}
          <div className="mt-6 mb-6 flex items-center justify-center gap-4">
            <div className="h-px bg-neon/30 flex-1 max-w-[120px]"></div>
            <div className="w-2 h-2 bg-neon rounded-full"></div>
            <div className="h-px bg-neon/30 flex-1 max-w-[120px]"></div>
          </div>

          {/* Tagline */}
          <p className="font-display text-lg sm:text-xl md:text-2xl tracking-wider text-neon/80 uppercase">
            {SITE_CONFIG.tagline}
          </p>
        </div>
      </div>
    </section>
  )
}
