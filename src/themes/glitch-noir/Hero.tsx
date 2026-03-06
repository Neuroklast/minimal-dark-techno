import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 100)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="glitch-noir-scanline-overlay" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center px-6"
      >
        <div className={`relative ${glitchActive ? 'glitch-noir-glitch-text' : ''}`}>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 text-foreground font-mono">
            NEUROKLAST
          </h1>
          <div className="h-px w-32 mx-auto bg-accent mb-6" />
          <p className="text-xl md:text-2xl text-muted-foreground font-mono tracking-wide">
            {'[SIGNAL_DETECTED]'}
          </p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 h-px w-64 mx-auto bg-border origin-left"
        />

        <div className="mt-8 flex gap-4 justify-center font-mono text-sm text-muted-foreground">
          <span className="glitch-noir-flicker">█</span>
          <span className="glitch-noir-flicker" style={{ animationDelay: '0.3s' }}>█</span>
          <span className="glitch-noir-flicker" style={{ animationDelay: '0.6s' }}>█</span>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground font-mono text-xs">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ▼
        </motion.div>
      </div>
    </section>
  )
}
