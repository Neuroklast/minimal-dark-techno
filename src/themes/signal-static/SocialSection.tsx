export default function SocialSection() {
  const socialLinks = [
    {
      platform: 'SPOTIFY',
      handle: '{{SPOTIFY_HANDLE}}',
      url: '{{SPOTIFY_URL}}',
      followers: '{{SPOTIFY_FOLLOWERS}}'
    },
    {
      platform: 'SOUNDCLOUD',
      handle: '{{SOUNDCLOUD_HANDLE}}',
      url: '{{SOUNDCLOUD_URL}}',
      followers: '{{SOUNDCLOUD_FOLLOWERS}}'
    },
    {
      platform: 'INSTAGRAM',
      handle: '{{INSTAGRAM_HANDLE}}',
      url: '{{INSTAGRAM_URL}}',
      followers: '{{INSTAGRAM_FOLLOWERS}}'
    },
    {
      platform: 'BANDCAMP',
      handle: '{{BANDCAMP_HANDLE}}',
      url: '{{BANDCAMP_URL}}',
      followers: '{{BANDCAMP_FOLLOWERS}}'
    }
  ]

  return (
    <section id="social" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold font-mono text-foreground mb-12 tracking-tight">
        {'>'} EXTERNAL_LINKS
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="signal-static-transmission-box">
            <div className="font-mono text-sm text-accent mb-4">
              [SOCIAL_PROTOCOLS]
            </div>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="signal-static-card relative block bg-muted border border-border p-4 group hover:border-accent transition-all duration-300"
                >
                  <div className="signal-static-card-noise"></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-mono text-sm text-foreground font-bold mb-1">
                        {'>'} {link.platform}
                      </div>
                      <div className="font-mono text-xs text-muted-foreground">
                        {link.handle}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-mono text-xs text-accent">
                        {link.followers}
                      </div>
                      <div className="font-mono text-xs text-muted-foreground">
                        FOLLOWERS
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="border border-border bg-card p-4">
            <div className="font-mono text-xs text-muted-foreground text-center">
              <span className="text-accent signal-static-signal-indicator">◉</span> ALL PLATFORMS SYNCHRONIZED
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="signal-static-transmission-box">
            <div className="font-mono text-sm text-accent mb-4">
              [VIDEO_FEED]
            </div>
            
            <div className="aspect-video bg-muted border border-border relative overflow-hidden">
              <div className="signal-static-scanlines"></div>
              <div className="signal-static-noise"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-mono font-bold text-muted-foreground mb-4">
                    [▶]
                  </div>
                  <div className="font-mono text-sm text-muted-foreground">
                    {{VIDEO_EMBED_URL}}
                  </div>
                  <div className="font-mono text-xs text-accent mt-2">
                    LATEST_TRANSMISSION
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="aspect-square bg-muted border border-border relative overflow-hidden group hover:border-accent transition-all cursor-pointer"
              >
                <div className="signal-static-scanlines"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-mono text-xs text-muted-foreground">
                    [VID_{item}]
                  </div>
                </div>
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="{{YOUTUBE_CHANNEL_URL}}"
              className="signal-static-nav-link inline-flex items-center gap-2 font-mono text-sm px-6 py-3 border border-border bg-background hover:bg-accent hover:text-background hover:border-accent transition-all duration-300"
            >
              {'>'} VIEW_ALL_CONTENT
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
