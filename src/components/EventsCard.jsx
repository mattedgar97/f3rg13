import { EVENT_INFO } from '../constants'

export default function EventsCard() {
  return (
    <div className="neon-panel p-6 lg:p-8 flex flex-col items-center justify-center gap-4">
      {/* Date capsule */}
      <div className="bg-neon text-ink px-6 py-3 rounded-full">
        <span className="font-display text-2xl lg:text-3xl tracking-wide">
          {EVENT_INFO.date}
        </span>
      </div>

      {/* Time */}
      <div className="text-neon font-display text-xl lg:text-2xl tracking-wider">
        {EVENT_INFO.time}
      </div>

      {/* Venue info */}
      <div className="flex items-center gap-3 text-neon">
        <span className="font-display text-3xl lg:text-4xl">
          {EVENT_INFO.venue}
        </span>
        <span className="text-lg opacity-60">/</span>
        <span className="font-body text-lg tracking-widest">
          {EVENT_INFO.city}
        </span>
      </div>

      {/* Decorative glyphs */}
      <div className="flex items-center gap-4 mt-2">
        <svg width="12" height="12" viewBox="0 0 12 12">
          <circle
            cx="6"
            cy="6"
            r="5"
            stroke="#C7D900"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <svg width="12" height="12" viewBox="0 0 12 12">
          <circle
            cx="6"
            cy="6"
            r="5"
            stroke="#C7D900"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <svg width="12" height="12" viewBox="0 0 12 12">
          <circle
            cx="6"
            cy="6"
            r="5"
            stroke="#C7D900"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  )
}
