import { useEffect, useRef } from 'react'
import { SITE_CONFIG } from '../constants'
import { useAudio } from '../hooks/useAudio'

export default function Title() {
  const { videoElement, getAudioContext } = useAudio()
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const analyserRef = useRef(null)
  const sourceRef = useRef(null)
  const containerRef = useRef(null)

  // Update canvas size to match container
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const updateCanvasSize = () => {
      const canvas = canvasRef.current
      const container = containerRef.current
      if (canvas && container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
    }
  }, [])

  useEffect(() => {
    if (!videoElement || !canvasRef.current) return

    let audioCtx
    let analyserNode
    let source

    try {
      // Use shared AudioContext
      audioCtx = getAudioContext()
      analyserNode = audioCtx.createAnalyser()
      analyserNode.fftSize = 256

      // Try to create media source - this can only be done once per element
      try {
        source = audioCtx.createMediaElementSource(videoElement)
        source.connect(analyserNode)
        analyserNode.connect(audioCtx.destination)
        sourceRef.current = source
      } catch (error) {
        // If source already exists, we can't create another one
        // This means audio is already connected elsewhere
        console.warn('MediaElementSource already exists:', error)
        return
      }

      analyserRef.current = analyserNode

      // Start visualization
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const bufferLength = analyserNode.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)

      const draw = () => {
        animationRef.current = requestAnimationFrame(draw)

        analyserNode.getByteFrequencyData(dataArray)

        // Clear canvas
        ctx.fillStyle = '#151515'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Always draw concentric circles in background
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        // Use only height for radius to maintain circle proportions
        const maxRadius = canvas.height * 0.35

        ctx.strokeStyle = '#00FFFF'
        ctx.lineWidth = 3
        ctx.globalAlpha = 0.2

        // Draw three concentric circles
        ctx.beginPath()
        ctx.arc(centerX, centerY, maxRadius, 0, Math.PI * 2)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(centerX, centerY, maxRadius * 0.65, 0, Math.PI * 2)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(centerX, centerY, maxRadius * 0.35, 0, Math.PI * 2)
        ctx.stroke()

        ctx.globalAlpha = 1

        // Check if video is muted or audio is very low
        const isMuted = videoElement.muted
        const avgVolume =
          dataArray.reduce((a, b) => a + b, 0) / dataArray.length

        // Draw frequency bars on top if there's audio
        if (!isMuted && avgVolume >= 5) {
          const barWidth = (canvas.width / bufferLength) * 2.5
          let x = 0

          for (let i = 0; i < bufferLength; i++) {
            const barHeight = (dataArray[i] / 255) * canvas.height

            // White bars
            ctx.fillStyle = '#FFFFFF'
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

            x += barWidth + 1
          }
        }
      }

      draw()

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
        // Don't close the shared AudioContext - it's managed by the provider
        // Just disconnect the source if it exists
        if (sourceRef.current) {
          try {
            sourceRef.current.disconnect()
          } catch {
            // Already disconnected
          }
        }
      }
    } catch (error) {
      console.error('Audio visualizer error:', error)
    }
  }, [videoElement, getAudioContext])

  return (
    <section className="w-full px-4 lg:px-8 mb-8 lg:mb-12">
      <div className="max-w-site mx-auto">
        <div
          ref={containerRef}
          className="neon-panel p-8 lg:p-12 text-center relative overflow-hidden"
        >
          {/* Audio visualizer canvas - behind the text */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full block"
            style={{ zIndex: 0 }}
          />

          {/* Content - in front of visualizer */}
          <div className="relative z-10">
            {/* Main title */}
            <h1
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-neon uppercase"
              style={{
                WebkitTextStroke: '2px #0A0A0A',
                paintOrder: 'stroke fill',
              }}
            >
              {SITE_CONFIG.djName}
            </h1>

            {/* Decorative line */}
            <div className="mt-6 mb-6 flex items-center justify-center gap-4">
              <div className="h-px bg-neon/30 flex-1 max-w-[120px]"></div>
              <div className="w-2 h-2 bg-neon rounded-full"></div>
              <div className="h-px bg-neon/30 flex-1 max-w-[120px]"></div>
            </div>

            {/* Tagline */}
            <p
              className="font-display text-lg sm:text-xl md:text-2xl tracking-wider text-neon/80 uppercase"
              style={{
                WebkitTextStroke: '1px #0A0A0A',
                paintOrder: 'stroke fill',
              }}
            >
              {SITE_CONFIG.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
