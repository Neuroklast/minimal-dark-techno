export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <div>© 2024 NEUROKLAST. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#imprint" className="hover:text-accent transition-colors">Imprint</a>
            <a href="#privacy" className="hover:text-accent transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
