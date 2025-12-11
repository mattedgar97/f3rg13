export default function Gallery() {
  const slots = Array.from({ length: 6 }, (_, i) => i + 1)

  return (
    <section className="w-full px-4 lg:px-8">
      <div className="max-w-site mx-auto">
        <h3 className="font-display text-ink text-2xl lg:text-3xl uppercase tracking-wider mb-6">
          Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {slots.map((slot) => (
            <figure
              key={slot}
              className="gallery-slot"
              data-placeholder={`gallery-${slot}`}
            >
              <img
                src="/assets/placeholder.png"
                alt={`Gallery placeholder ${slot}`}
                loading="lazy"
                className="hidden"
              />
              {/* Plus glyph placeholder */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <line x1="24" y1="12" x2="24" y2="36" />
                <line x1="12" y1="24" x2="36" y2="24" />
              </svg>
              <figcaption className="sr-only">
                Gallery image placeholder {slot}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
