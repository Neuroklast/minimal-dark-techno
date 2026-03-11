import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ThemeModalWrapperProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export default function ThemeModalWrapper({ isOpen, onClose, title, children }: ThemeModalWrapperProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50"
            onClick={onClose}
          >
            <div className="signal-static-scanlines"></div>
            <div className="signal-static-noise"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
          >
            <div className="signal-static-card relative max-w-2xl w-full bg-card border border-accent pointer-events-auto max-h-[90vh] overflow-auto">
              <div className="signal-static-card-noise"></div>
              <div className="signal-static-card-corner signal-static-card-corner-tl"></div>
              <div className="signal-static-card-corner signal-static-card-corner-tr"></div>
              <div className="signal-static-card-corner signal-static-card-corner-bl"></div>
              <div className="signal-static-card-corner signal-static-card-corner-br"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div>
                    <h2 className="text-2xl font-mono font-bold text-foreground tracking-tight">
                      {'>'} {title}
                    </h2>
                    <div className="font-mono text-xs text-accent mt-1">
                      [TRANSMISSION_ACTIVE]
                    </div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="signal-static-nav-link w-10 h-10 flex items-center justify-center border border-border bg-background hover:bg-accent hover:text-background hover:border-accent transition-all duration-300"
                  >
                    <span className="text-lg font-mono">×</span>
                  </button>
                </div>

                <div className="p-6">
                  {children}
                </div>

                <div className="p-4 border-t border-border bg-muted/30">
                  <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                    <div>
                      <span className="text-accent signal-static-signal-indicator">◉</span> MODAL_ACTIVE
                    </div>
                    <div className="signal-static-timestamp">
                      {new Date().toISOString().slice(11, 19)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="signal-static-card-glitch"></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
