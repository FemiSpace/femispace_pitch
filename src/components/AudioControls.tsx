'use client'

import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'

interface AudioControlsProps {
  audioFile?: string;
  onComplete?: () => void;
}

export default function AudioControls({ audioFile, onComplete }: AudioControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const soundRef = useRef<Howl | null>(null)
  const requestRef = useRef<number>()

  useEffect(() => {
    if (audioFile) {
      soundRef.current = new Howl({
        src: [audioFile],
        html5: true,
        onend: () => {
          setIsPlaying(false)
          setProgress(0)
          if (onComplete) onComplete()
        },
      })
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.unload()
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [audioFile, onComplete])

  const animate = () => {
    if (soundRef.current && isPlaying) {
      const seek = soundRef.current.seek() || 0
      const duration = soundRef.current.duration() || 1
      setProgress((seek / duration) * 100)
      requestRef.current = requestAnimationFrame(animate)
    }
  }

  const togglePlay = () => {
    if (!soundRef.current) return

    if (isPlaying) {
      soundRef.current.pause()
    } else {
      soundRef.current.play()
      requestRef.current = requestAnimationFrame(animate)
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!soundRef.current) return

    soundRef.current.mute(!isMuted)
    setIsMuted(!isMuted)
  }

  if (!audioFile) return null

  return (
    <div className="audio-controls">
      <button
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-light transition-colors"
      >
        {isPlaying ? (
          <PauseIcon className="w-5 h-5" />
        ) : (
          <PlayIcon className="w-5 h-5" />
        )}
      </button>

      <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        onClick={toggleMute}
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
      >
        {isMuted ? (
          <SpeakerXMarkIcon className="w-5 h-5 text-gray-500" />
        ) : (
          <SpeakerWaveIcon className="w-5 h-5 text-gray-500" />
        )}
      </button>
    </div>
  )
}
