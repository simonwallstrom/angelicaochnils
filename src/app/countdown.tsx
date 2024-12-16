'use client'

import { useState, useEffect, useCallback } from 'react'

const useCountdown = (targetDate: Date) => {
  const calculateTimeLeft = useCallback((date: Date) => {
    const now = new Date()
    const difference = date.getTime() - now.getTime()

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }, [])

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate)) // Initialize with calculated time left

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }

  // Start the timer immediately
  startTimer()

  return timeLeft
}

export function CountDown() {
  const weddingDate = new Date('2025-07-15T00:00:00')
  const timeLeft = useCountdown(weddingDate)

  // Check if the component is mounted to avoid hydration issues
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <div className="grid w-full grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-4">
        <div className="text-center">
          {isMounted ? (
            <div className="font-serif text-5xl md:text-7xl">{timeLeft.days}</div>
          ) : (
            <div className="font-serif text-5xl opacity-0 md:text-7xl">&nbsp;</div>
          )}
          <div className="mt-1 text-sm tracking-widest uppercase sm:text-base">Dagar</div>
        </div>
        <div className="text-center">
          {isMounted ? (
            <div className="font-serif text-5xl md:text-7xl">{timeLeft.hours}</div>
          ) : (
            <div className="font-serif text-5xl opacity-0 md:text-7xl">&nbsp;</div>
          )}
          <div className="mt-1 text-sm tracking-widest uppercase sm:text-base">Timmar</div>
        </div>
        <div className="text-center">
          {isMounted ? (
            <div className="font-serif text-5xl md:text-7xl">{timeLeft.minutes}</div>
          ) : (
            <div className="font-serif text-5xl opacity-0 md:text-7xl">&nbsp;</div>
          )}
          <div className="mt-1 text-sm tracking-widest uppercase sm:text-base">Minuter</div>
        </div>
        <div className="text-center">
          {isMounted ? (
            <div className="font-serif text-5xl md:text-7xl">{timeLeft.seconds}</div>
          ) : (
            <div className="font-serif text-5xl opacity-0 md:text-7xl">&nbsp;</div>
          )}
          <div className="mt-1 text-sm tracking-widest uppercase sm:text-base">Sekunder</div>
        </div>
      </div>
    </>
  )
}
