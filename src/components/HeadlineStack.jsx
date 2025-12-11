import { DJ_LINEUP } from '../constants'

export default function HeadlineStack() {
  return (
    <div className="flex flex-col gap-1 lg:gap-2">
      {DJ_LINEUP.map((dj, i) => (
        <div key={i} className="overflow-hidden">
          <h2
            className="headline-stack text-ink"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            }}
          >
            {dj.name}
            {dj.subtitle && (
              <span className="text-[0.5em] tracking-normal ml-2 opacity-80">
                {dj.subtitle}
              </span>
            )}
          </h2>
        </div>
      ))}
    </div>
  )
}
