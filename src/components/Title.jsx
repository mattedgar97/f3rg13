import { SITE_CONFIG } from '../constants'

export default function Title() {
  return (
    <div className="w-full">
      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="p-8 lg:p-12 text-center relative">
          {/* Main title - Large black F3RGIE logo overlaid on video */}
          <h1
            className="font-hero text-[12rem] sm:text-[14rem] md:text-[18rem] lg:text-[24rem] tracking-tight leading-none text-black/90 uppercase pointer-events-none select-none"
            style={{
              WebkitTextStroke: '2px rgba(200, 200, 200, 0.5)',
              paintOrder: 'stroke fill',
            }}
          >
            {SITE_CONFIG.djName}
          </h1>
        </div>
      </div>
    </div>
  )
}
