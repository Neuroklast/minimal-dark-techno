export default function BiographySection() {
  return (
    <section id="biography" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold font-mono text-foreground mb-12 tracking-tight">
        {'>'} ORIGIN_PROTOCOL
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="signal-static-transmission-box">
            <div className="font-mono text-sm text-muted-foreground mb-4">
              <span className="text-accent">[CLASSIFICATION]</span> LEVEL_3 • AUTHORIZED
            </div>
            
            <div className="space-y-4 text-foreground font-mono text-sm leading-relaxed">
              <p>
                {'>'} {{BAND_BIO_PARAGRAPH_1}}
              </p>
              <p>
                {'>'} {{BAND_BIO_PARAGRAPH_2}}
              </p>
              <p>
                {'>'} {{BAND_BIO_PARAGRAPH_3}}
              </p>
            </div>
          </div>

          <div className="border border-border bg-card p-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <div className="text-muted-foreground">ESTABLISHED</div>
              <div className="text-accent">{{BAND_FOUNDED_YEAR}}</div>
            </div>
            <div className="border-t border-border my-2"></div>
            <div className="flex items-center justify-between font-mono text-xs">
              <div className="text-muted-foreground">LOCATION</div>
              <div className="text-accent">{{BAND_LOCATION}}</div>
            </div>
            <div className="border-t border-border my-2"></div>
            <div className="flex items-center justify-between font-mono text-xs">
              <div className="text-muted-foreground">GENRE</div>
              <div className="text-accent">{{BAND_GENRE}}</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="signal-static-card aspect-square bg-card border border-border overflow-hidden group">
            <div className="signal-static-card-noise"></div>
            <div className="signal-static-card-corner signal-static-card-corner-tl"></div>
            <div className="signal-static-card-corner signal-static-card-corner-tr"></div>
            <div className="signal-static-card-corner signal-static-card-corner-bl"></div>
            <div className="signal-static-card-corner signal-static-card-corner-br"></div>
            
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="signal-static-scanlines"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl font-mono font-bold text-muted-foreground mb-4">
                  [IMG]
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  {{BAND_IMAGE}}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-accent text-background font-mono text-xs px-4 py-2 signal-static-signal-indicator">
            VERIFIED_ENTITY
          </div>
        </div>
      </div>
    </section>
  )
}
