import { useEffect, useRef } from 'react'
import { useAudio } from '../hooks/useAudio'

export default function AudioVisualizer() {
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
      analyserNode.smoothingTimeConstant = 0.8
      analyserRef.current = analyserNode

      // Connect to audio source
      try {
        source = audioCtx.createMediaElementSource(videoElement)
        source.connect(analyserNode)
        analyserNode.connect(audioCtx.destination)
        sourceRef.current = source
      } catch {
        // MediaElementSource can only be created once per element
        console.warn('MediaElementSource already exists')
        return
      }

      // Start visualization
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const bufferLength = analyserNode.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)

      const draw = () => {
        animationRef.current = requestAnimationFrame(draw)

        analyserNode.getByteFrequencyData(dataArray)

        // Clear canvas with transparency
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Check if video is muted or audio is very low
        const isMuted = videoElement.muted
        const avgVolume =
          dataArray.reduce((a, b) => a + b, 0) / dataArray.length

        const bottomY = canvas.height

        if (!isMuted && avgVolume >= 5) {
          // Vertical bars growing upward from bottom when audio is playing
          const numBars = 50
          const barWidth = (canvas.width / numBars) * 0.6
          const barSpacing = canvas.width / numBars

          for (let i = 0; i < numBars; i++) {
            const dataIndex = Math.floor((i / numBars) * bufferLength)
            const amplitude = dataArray[dataIndex] / 255.0
            const barHeight = Math.max(amplitude * canvas.height * 0.8, 4)

            const x = i * barSpacing + (barSpacing - barWidth) / 2
            const y = bottomY - barHeight

            ctx.fillStyle = '#6b0428'
            ctx.fillRect(x, y, barWidth, barHeight)
          }
        } else {
          // Horizontal line when muted or no audio
          ctx.strokeStyle = '#6b0428'
          ctx.lineWidth = 4
          ctx.beginPath()
          ctx.moveTo(0, bottomY)
          ctx.lineTo(canvas.width, bottomY)
          ctx.stroke()
        }
      }

      draw()

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
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
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 right-0 pointer-events-none"
      style={{
        height: '200px',
        zIndex: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.6 }}
      />
    </div>
  )
}
