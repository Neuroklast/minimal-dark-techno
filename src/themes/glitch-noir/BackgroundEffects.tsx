import { useEffect, useRef } from 'react'

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = []
    
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5
      })
    }

    let animationId: number
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
        ctx.fillRect(p.x, p.y, p.size, p.size)
      })

      if (Math.random() > 0.97) {
        const y = Math.random() * canvas.height
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.fillRect(0, y, canvas.width, 1)
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-30"
      />
      
      <div className="glitch-noir-scanlines" />
      
      <div className="glitch-noir-vignette" />
      
      <div className="absolute inset-0 glitch-noir-grain" />
    </div>
  )
}
