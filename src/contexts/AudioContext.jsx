import { useState, useRef } from 'react'
import { AudioContext } from './AudioContextValue'

export function AudioProvider({ children }) {
  const [videoElement, setVideoElement] = useState(null)
  const audioContextRef = useRef(null)

  const getAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (
        window.AudioContext || window.webkitAudioContext
      )()
    }
    // Resume if suspended (browser autoplay policy)
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume()
    }
    return audioContextRef.current
  }

  return (
    <AudioContext.Provider
      value={{ videoElement, setVideoElement, getAudioContext }}
    >
      {children}
    </AudioContext.Provider>
  )
}
