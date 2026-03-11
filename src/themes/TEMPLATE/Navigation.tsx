export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">NEUROKLAST</div>
        <div className="flex gap-6">
          <a href="#bio" className="text-foreground hover:text-accent transition-colors">Bio</a>
          <a href="#releases" className="text-foreground hover:text-accent transition-colors">Releases</a>
          <a href="#gigs" className="text-foreground hover:text-accent transition-colors">Gigs</a>
          <a href="#social" className="text-foreground hover:text-accent transition-colors">Social</a>
        </div>
      </div>
    </nav>
  )
}
