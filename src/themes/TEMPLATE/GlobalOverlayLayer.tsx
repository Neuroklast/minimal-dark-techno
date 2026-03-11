interface GlobalOverlayLayerProps {
  noiseIntensity?: number
  scanlineIntensity?: number
  flickerIntensity?: number
}

export default function GlobalOverlayLayer({
  noiseIntensity = 0.3,
  scanlineIntensity = 0.5,
  flickerIntensity = 0.05
}: GlobalOverlayLayerProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div
        className="absolute inset-0 template-noise"
        style={{ opacity: noiseIntensity }}
      />
      <div
        className="absolute inset-0 template-scanlines"
        style={{ opacity: scanlineIntensity }}
      />
      <div
        className="absolute inset-0 template-flicker"
        style={{ opacity: flickerIntensity }}
      />
    </div>
  )
}
