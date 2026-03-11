import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ThemeModalWrapperProps {
  isOpen: boolean
  onClose: () => void
  title: string
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
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-card border border-border max-w-2xl w-full p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-primary">{title}</h2>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  ✕
                </button>
              </div>
              <div>{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
