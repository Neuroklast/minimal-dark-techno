export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">NEUROKLAST</h1>
        <div className="w-48 h-1 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-accent animate-[loading_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  )
}
