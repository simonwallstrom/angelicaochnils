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

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [calculateTimeLeft, targetDate]) // Ensure cleanup on unmount and when dependencies change

  return timeLeft
}

export function CountDown() {
  const weddingDate = new Date('2025-07-15T00:00:00')
  const timeLeft = useCountdown(weddingDate)

  return (
    <div className="grid w-full grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-4">
      {['Dagar', 'Timmar', 'Minuter', 'Sekunder'].map((label, index) => {
        const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
        return (
          <div className="text-center" key={label}>
            <div className="font-serif text-5xl md:text-6xl">{values[index]}</div>
            <div className="mt-1 text-sm tracking-widest uppercase">{label}</div>
          </div>
        )
      })}
    </div>
  )
}
