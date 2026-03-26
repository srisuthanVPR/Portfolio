import { useEffect, useState } from 'react'

const TypingEffect = ({ words = [], speed = 90, pause = 1400 }) => {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    if (!words.length) return

    const current = words[index]
    let timeout

    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed)
      } else {
        timeout = setTimeout(() => setTyping(false), pause)
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), speed / 2)
      } else {
        setTyping(true)
        setIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [display, typing, index, words, speed, pause])

  return (
    <span className="text-brand-400">{display}<span className="animate-pulseSoft">|</span></span>
  )
}

export default TypingEffect
