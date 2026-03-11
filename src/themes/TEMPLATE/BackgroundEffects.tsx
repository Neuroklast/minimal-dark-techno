export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
    </div>
  )
}
