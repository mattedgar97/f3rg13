// Add your video URL here (can be a local file in /public or external URL)
const VIDEO_URL = '/assets/trimmed_fergie.mov' // Update this path

export default function HeroPanel() {
  return (
    <section className="w-full px-4 lg:px-8">
      <div className="neon-panel screen-scanlines aspect-video lg:aspect-[16/9] w-full max-w-site mx-auto relative overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* Optional dark overlay to improve visibility */}
        <div className="absolute inset-0 bg-ink/30" />

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
