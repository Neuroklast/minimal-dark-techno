export default function ReleasesSection() {
  const releases = [
    {
      title: '{{RELEASE_1_TITLE}}',
      year: '{{RELEASE_1_YEAR}}',
      type: '{{RELEASE_1_TYPE}}',
      tracks: '{{RELEASE_1_TRACKS}}',
      coverArt: '{{RELEASE_1_COVER}}',
      streamUrl: '{{RELEASE_1_STREAM_URL}}'
    },
    {
      title: '{{RELEASE_2_TITLE}}',
      year: '{{RELEASE_2_YEAR}}',
      type: '{{RELEASE_2_TYPE}}',
      tracks: '{{RELEASE_2_TRACKS}}',
      coverArt: '{{RELEASE_2_COVER}}',
      streamUrl: '{{RELEASE_2_STREAM_URL}}'
    },
    {
      title: '{{RELEASE_3_TITLE}}',
      year: '{{RELEASE_3_YEAR}}',
      type: '{{RELEASE_3_TYPE}}',
      tracks: '{{RELEASE_3_TRACKS}}',
      coverArt: '{{RELEASE_3_COVER}}',
      streamUrl: '{{RELEASE_3_STREAM_URL}}'
    },
    {
      title: '{{RELEASE_4_TITLE}}',
      year: '{{RELEASE_4_YEAR}}',
      type: '{{RELEASE_4_TYPE}}',
      tracks: '{{RELEASE_4_TRACKS}}',
      coverArt: '{{RELEASE_4_COVER}}',
      streamUrl: '{{RELEASE_4_STREAM_URL}}'
    }
  ]

  return (
    <section id="releases" className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold font-mono text-foreground tracking-tight">
          {'>'} AUDIO_ARCHIVES
        </h2>
        <div className="font-mono text-xs text-accent border border-accent px-3 py-1">
          [{releases.length}_RELEASES]
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {releases.map((release, index) => (
          <div 
            key={index}
            className="signal-static-card relative bg-card border border-border group hover:border-accent transition-all duration-300"
          >
            <div className="signal-static-card-noise"></div>
            <div className="signal-static-card-corner signal-static-card-corner-tl"></div>
            <div className="signal-static-card-corner signal-static-card-corner-tr"></div>
            <div className="signal-static-card-corner signal-static-card-corner-bl"></div>
            <div className="signal-static-card-corner signal-static-card-corner-br"></div>

            <div className="relative z-10 p-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 h-32 bg-muted border border-border relative overflow-hidden">
                  <div className="signal-static-scanlines"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-mono font-bold text-muted-foreground mb-1">
                        [♪]
                      </div>
                      <div className="font-mono text-xs text-muted-foreground">
                        {release.coverArt}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-mono font-bold text-foreground tracking-tight">
                        {release.title}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {release.year}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="text-accent border border-accent px-2 py-0.5">
                        {release.type}
                      </span>
                      <span className="text-muted-foreground">
                        {release.tracks} TRACKS
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={release.streamUrl}
                      className="signal-static-nav-link inline-flex items-center gap-2 font-mono text-sm px-4 py-2 border border-border bg-background hover:bg-accent hover:text-background hover:border-accent transition-all duration-300"
                    >
                      <span className="text-accent group-hover:text-background">▶</span>
                      {'>'} STREAM
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="signal-static-card-glitch"></div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block signal-static-transmission-box">
          <div className="font-mono text-sm text-muted-foreground">
            {'>'} COMPLETE DISCOGRAPHY AVAILABLE ON MAJOR PLATFORMS
          </div>
        </div>
      </div>
    </section>
  )
}
