import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Button } from '@/components/ui/button'

  
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [audioName, setAudioName] = useState<string>('')
  
      if (animationRef.current) {
      }
        audioContextRef.current.close()
    }

    const file = e.target.files?.[0]

      setIsPlaying(
      if (audioEle
      if (animationRef.current) {
      
      }
    }
        audioContextRef.current.close()
    if 
    }
      co

      const audio = new Audio()
    const file = e.target.files?.[0]
      const source = audioContext.createMediaElem
      
      analyser.connect(audioC
      audio.addEventListe
      
  }
  const togglePlayPause = () => {

      i
      
      if (isPlaying) {
        if (animationRef.current) {
       
    }
   


    const canvas = canvasRef.current
    


    const bufferLength = analyser.frequencyBinCount

      animationRef.current = request

      const audio = new Audio()

      let barHeight

        barHeight = (dataArray[i] / 255) * canvas.height * 0.8
        const gradient = ctx.cre
      

        ctx.fillRect(x, canvas.height - barHeigh

      audio.addEventListener('ended', () => {
        setIsPlaying(false)
      })
    }
  }

  const togglePlayPause = () => {
    if (!audioFile) return

    if (!audioContextRef.current) {
      initAudioContext()
    }

    if (audioElementRef.current) {
      if (isPlaying) {
        audioElementRef.current.pause()
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      } else {
        audioElementRef.current.play()
        visualize()
       
      setIsPlaying(!isPlaying)
    }
  }

  const visualize = () => {
    const canvas = canvasRef.current
    const analyser = analyserRef.current
    
    if (!canvas || !analyser) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw)
      
      analyser.getByteFrequencyData(dataArray)

      ctx.fillStyle = 'rgba(20, 20, 20, 0.3)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const barWidth = (canvas.width / bufferLength) * 2.5
      let barHeight
      let x = 0

      for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i] / 255) * canvas.height * 0.8

        const gradient = ctx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height)
        gradient.addColorStop(0, 'rgba(242, 242, 242, 0.9)')
        gradient.addColorStop(0.5, 'rgba(179, 179, 179, 0.7)')
        gradient.addColorStop(1, 'rgba(102, 102, 102, 0.4)')

        ctx.fillStyle = gradient
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

        if (Math.random() > 0.95) {
          ctx.fillStyle = 'rgba(242, 242, 242, 0.3)'
          ctx.fillRect(x, canvas.height - barHeight - 10, barWidth, 5)
        }

        x += barWidth + 1
      }

      ctx.strokeStyle = 'rgba(242, 242, 242, 0.1)'
      ctx.lineWidth = 1
      for (let i = 0; i < canvas.height; i += 20) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)

      }


    draw()
  }

  return (
    <div className="space-y-6">
      <div className="relative w-full h-64 bg-card border border-border overflow-hidden">
        <canvas
          ref={canvasRef}
          width={800}
          height={256}
          className="w-full h-full"
        />

        {!audioFile && (
          <div className="absolute inset-0 flex items-center justify-center bg-card/90">
            <label className="cursor-pointer flex flex-col items-center gap-4 p-8 border border-dashed border-border hover:border-accent transition-colors">
              <Upload size={48} className="text-muted-foreground" />
              <span className="font-mono text-sm text-muted-foreground text-center">

                <span className="text-xs">[WAV • MP3 • OGG]</span>
              </span>
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
                id="audio-upload"
              />
            </label>
          </div>

      </div>

      <div className="flex items-center justify-between gap-4 p-4 bg-card border border-border">
        <div className="flex-1 min-w-0">
          {audioFile ? (
            <div className="space-y-1">
              <div className="font-mono text-sm text-foreground truncate">
                {'>'} {audioName}

              <div className="font-mono text-xs text-muted-foreground">
                {isPlaying ? '[ANALYZING...]' : '[READY]'}
              </div>
            </div>
          ) : (
            <div className="font-mono text-sm text-muted-foreground">

            </div>
          )}
        </div>

        <div className="flex items-center gap-2">

            onClick={togglePlayPause}
            disabled={!audioFile}
            variant="default"

            className="font-mono"

            {isPlaying ? <Pause size={20} weight="fill" /> : <Play size={20} weight="fill" />}
          </Button>

          <label htmlFor="audio-upload">
            <Button

              variant="outline"
              size="icon"
              className="font-mono"

              <div>
                <Upload size={20} />
              </div>

          </label>

      </div>

      <div className="grid grid-cols-3 gap-4 font-mono text-xs">

          <div className="text-muted-foreground mb-1">FFT SIZE</div>
          <div className="text-foreground">512</div>
        </div>
        <div className="p-3 bg-card border border-border">
          <div className="text-muted-foreground mb-1">SAMPLE RATE</div>
          <div className="text-foreground">
            {audioContextRef.current ? `${audioContextRef.current.sampleRate}Hz` : 'N/A'}

        </div>

          <div className="text-muted-foreground mb-1">STATUS</div>
          <div className="text-accent">
            {isPlaying ? 'ACTIVE' : 'STANDBY'}

        </div>

    </div>

}
