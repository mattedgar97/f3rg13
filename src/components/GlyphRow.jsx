import { useEffect, useRef } from 'react'
import { useAudio } from '../hooks/useAudio'

export default function GlyphRow() {
  const socialButtons = [
    {
      name: 'INSTAGRAM',
      url: 'https://www.instagram.com/f3rg13.uk/',
      size: 'text-5xl lg:text-7xl',
    },
    {
      name: 'SOUNDCLOUD',
      url: 'https://soundcloud.com/elizaferguson',
      size: 'text-5xl lg:text-7xl',
    },
    {
      name: 'EMAIL',
      url: 'mailto:eliza.f3rg13@gmail.com',
      size: 'text-5xl lg:text-7xl',
    },
  ]

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

        ctx.strokeStyle = '#C7D900'
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

          // Extensive rainbow neon colors - each bar gets its own unique color
          const rainbowColors = [
            ['#FF0080', '#FF00FF'], // Hot pink to magenta
            ['#FF0040', '#FF0099'], // Deep pink
            ['#9D00FF', '#C77DFF'], // Purple to lavender
            ['#7209B7', '#B088F9'], // Deep purple to light purple
            ['#560BAD', '#9D4EDD'], // Indigo to violet
            ['#3F37C9', '#6C63FF'], // Royal blue
            ['#4361EE', '#4CC9F0'], // Blue to cyan
            ['#4895EF', '#72EFDD'], // Sky blue to turquoise
            ['#00F5FF', '#00FFFF'], // Cyan
            ['#06FFA5', '#5FFBF1'], // Aqua to mint
            ['#00FF88', '#7FFFD4'], // Green cyan
            ['#39FF14', '#ADFF2F'], // Neon green to yellow-green
            ['#CCFF00', '#F0FF00'], // Chartreuse to neon yellow
            ['#FFEA00', '#FFD000'], // Yellow
            ['#FFD60A', '#FFC300'], // Gold
            ['#FFC100', '#FF9500'], // Amber to orange
            ['#FF9E00', '#FF6D00'], // Orange
            ['#FF6B00', '#FF3D00'], // Deep orange to red-orange
            ['#FF4500', '#FF0040'], // Orange-red to hot red
            ['#FF006E', '#FF1744'], // Neon red to crimson
          ]

          for (let i = 0; i < bufferLength; i++) {
            const barHeight = (dataArray[i] / 255) * canvas.height

            // Each bar gets a unique color from the array
            const colorIndex = i % rainbowColors.length
            const colors = rainbowColors[colorIndex]

            // Rainbow gradient from dark at bottom to bright at top
            const gradient = ctx.createLinearGradient(
              0,
              canvas.height - barHeight,
              0,
              canvas.height
            )
            gradient.addColorStop(0, colors[0])
            gradient.addColorStop(1, colors[1])

            ctx.fillStyle = gradient
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
    <div className="w-full px-4 lg:px-8 mt-6 lg:mt-8">
      <div className="max-w-site mx-auto">
        {/* Two column layout: 50% social links / 50% visualizer on desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-stretch">
          {/* Left Column: Social Link Buttons */}
          <div className="w-full lg:w-1/2 space-y-3 lg:space-y-4">
            {socialButtons.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target={social.name !== 'EMAIL' ? '_blank' : undefined}
                rel={
                  social.name !== 'EMAIL' ? 'noopener noreferrer' : undefined
                }
                className="block"
              >
                <h2
                  className={`${social.size} font-display font-black uppercase text-ink hover:underline transition-all duration-200 tracking-wide`}
                  style={{
                    lineHeight: '0.95',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {social.name}
                </h2>
              </a>
            ))}
          </div>

          {/* Right Column: Audio Visualizer */}
          <div className="w-full lg:w-1/2 flex min-h-[300px] lg:min-h-0">
            <div
              ref={containerRef}
              className="relative w-full bg-screen border-2 border-ink rounded-panel overflow-hidden flex-1"
            >
              <canvas ref={canvasRef} className="w-full h-full block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
