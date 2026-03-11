import { ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-card border border-border p-6 hover:border-accent transition-all ${className}`}>
      {children}
    </div>
  )
}
