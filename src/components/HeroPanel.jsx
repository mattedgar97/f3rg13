import { useState, useRef, useEffect } from 'react'
import { useAudio } from '../hooks/useAudio'

// Add your video URL here (can be a local file in /public or external URL)
const VIDEO_URL = '/assets/trimmed_fergie.mov' // Update this path

export default function HeroPanel() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)
  const { setVideoElement, getAudioContext } = useAudio()

  useEffect(() => {
    if (videoRef.current) {
      setVideoElement(videoRef.current)
    }
  }, [setVideoElement])

  const toggleMute = () => {
    if (videoRef.current) {
      const willUnmute = videoRef.current.muted
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)

      // Resume AudioContext on user interaction (required by browser autoplay policy)
      if (willUnmute && getAudioContext) {
        getAudioContext()
      }

      // Ensure video is playing when unmuting
      if (willUnmute && videoRef.current.paused) {
        videoRef.current.play().catch((err) => {
          console.error('Error playing video:', err)
        })
      }
    }
  }

  return (
    <section className="w-full px-4 lg:px-8">
      <div className="neon-panel screen-scanlines aspect-video lg:aspect-[16/9] w-full max-w-site mx-auto relative overflow-hidden">
        {/* Video background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onClick={toggleMute}
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          style={{
            zIndex: 0,
            objectPosition: 'center center',
          }}
        >
          <source src={VIDEO_URL} type="video/quicktime" />
          <source src={VIDEO_URL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mute/Unmute indicator */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-10 bg-ink/80 border-2 border-neon text-neon px-4 py-2 font-display text-sm uppercase tracking-wider hover:bg-neon hover:text-ink transition-all duration-200 cursor-pointer"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              MUTED
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
              UNMUTED
            </span>
          )}
        </button>

        {/* Optional dark overlay to improve visibility */}
        <div
          className="absolute inset-0 bg-ink/30 pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* Grain overlay for the panel */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply"
          style={{
            zIndex: 2,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </section>
  )
}
