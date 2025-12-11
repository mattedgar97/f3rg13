import { useContext } from 'react'
import { AudioContext } from '../contexts/AudioContextValue'

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider')
  }
  return context
}
