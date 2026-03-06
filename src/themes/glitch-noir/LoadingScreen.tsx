import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [messages, setMessages] = useState<string[]>([])

  const bootSequence = [
    'INITIALIZING SYSTEM...',
    'LOADING NEURAL MATRIX...',
    'SCANNING FREQUENCIES...',
    'ESTABLISHING CONNECTION...',
    'SIGNAL ACQUIRED',
    'WELCOME TO NEUROKLAST'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessages((prev) => {
        const nextIndex = prev.length
        if (nextIndex < bootSequence.length) {
          return [...prev, bootSequence[nextIndex]]
        }
        clearInterval(messageInterval)
        return prev
      })
    }, 600)

    return () => clearInterval(messageInterval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="glitch-noir-scanline-overlay" />
      <div className="glitch-noir-grain" />

      <div className="relative z-10 w-full max-w-2xl px-8">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-mono font-bold text-foreground mb-4 glitch-noir-flicker"
          >
            NK://BOOT
          </motion.div>
          <div className="h-px w-32 mx-auto bg-accent" />
        </div>

        <div className="space-y-2 mb-8 h-40 overflow-hidden">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground font-mono text-sm"
            >
              {'>'} {msg}
            </motion.div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-muted-foreground font-mono text-xs">
            <span>LOADING</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 bg-border overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-accent relative"
            >
              <div className="absolute right-0 top-0 w-1 h-full bg-foreground glitch-noir-flicker" />
            </motion.div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2 font-mono text-accent">
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>█</motion.span>
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}>█</motion.span>
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}>█</motion.span>
        </div>
      </div>
    </motion.div>
  )
}
