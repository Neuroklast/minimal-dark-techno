import { useState, useEffect } from 'react'
import { glitchNoirTheme } from '@/themes/glitch-noir'

const { Hero, Navigation, Card, BackgroundEffects, SectionDivider, LoadingScreen } = glitchNoirTheme.slots

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      
      <Navigation />

      <main className="relative z-10">
        <Hero />

        <SectionDivider />

        <section id="releases" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold font-mono text-foreground mb-12 tracking-tight">
            {'>'} RELEASES
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-mono font-bold text-foreground">NEURAL_DECAY</h3>
                  <span className="text-sm font-mono text-muted-foreground">2024</span>
                </div>
                <p className="text-muted-foreground font-mono text-sm">
                  EP exploring the boundaries between human consciousness and machine intelligence.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs font-mono text-accent">TECHNO</span>
                  <span className="text-xs font-mono text-muted-foreground">•</span>
                  <span className="text-xs font-mono text-accent">INDUSTRIAL</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-mono font-bold text-foreground">VOID_SEQUENCE</h3>
                  <span className="text-sm font-mono text-muted-foreground">2023</span>
                </div>
                <p className="text-muted-foreground font-mono text-sm">
                  Dark ambient textures meet driving rhythms in this experimental release.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs font-mono text-accent">AMBIENT</span>
                  <span className="text-xs font-mono text-muted-foreground">•</span>
                  <span className="text-xs font-mono text-accent">EXPERIMENTAL</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-mono font-bold text-foreground">SIGNAL_LOST</h3>
                  <span className="text-sm font-mono text-muted-foreground">2023</span>
                </div>
                <p className="text-muted-foreground font-mono text-sm">
                  Minimal techno constructions built from fragmented transmissions.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs font-mono text-accent">MINIMAL</span>
                  <span className="text-xs font-mono text-muted-foreground">•</span>
                  <span className="text-xs font-mono text-accent">TECHNO</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-mono font-bold text-foreground">SYSTEM_FAILURE</h3>
                  <span className="text-sm font-mono text-muted-foreground">2022</span>
                </div>
                <p className="text-muted-foreground font-mono text-sm">
                  Debut album documenting the collapse of digital infrastructure.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs font-mono text-accent">TECHNO</span>
                  <span className="text-xs font-mono text-muted-foreground">•</span>
                  <span className="text-xs font-mono text-accent">NOISE</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <SectionDivider />

        <section id="events" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold font-mono text-foreground mb-12 tracking-tight">
            {'>'} EVENTS
          </h2>
          <div className="space-y-4">
            <Card>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-mono font-bold text-foreground mb-2">
                    BERGHAIN • BERLIN
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Live A/V performance with visual artist GLITCH_COLLECTIVE
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-accent font-mono text-sm">2024.03.15</div>
                  <div className="text-muted-foreground font-mono text-xs">23:00 CET</div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-mono font-bold text-foreground mb-2">
                    TRESOR • BERLIN
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Album release show for NEURAL_DECAY
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-accent font-mono text-sm">2024.02.28</div>
                  <div className="text-muted-foreground font-mono text-xs">22:00 CET</div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-mono font-bold text-foreground mb-2">
                    DE SCHOOL • AMSTERDAM
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Special all-night set exploring deep techno territories
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-muted-foreground font-mono text-sm line-through">2024.01.20</div>
                  <div className="text-muted-foreground font-mono text-xs">[COMPLETED]</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <SectionDivider />

        <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold font-mono text-foreground mb-12 tracking-tight">
            {'>'} TRANSMISSION
          </h2>
          <Card>
            <div className="space-y-6">
              <p className="text-muted-foreground font-mono text-sm">
                For bookings, collaborations, or other inquiries, transmit your message through the following channels:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-accent font-mono text-sm">EMAIL</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-foreground font-mono text-sm">contact@neuroklast.net</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent font-mono text-sm">LABEL</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-foreground font-mono text-sm">dark_matter_recordings</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent font-mono text-sm">MGMT</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-foreground font-mono text-sm">void_agency_berlin</span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <footer className="border-t border-border py-12 mt-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-muted-foreground font-mono text-xs">
              © 2024 NEUROKLAST • ALL RIGHTS RESERVED • [SYSTEM_STATUS: ONLINE]
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App