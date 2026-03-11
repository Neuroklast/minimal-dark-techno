import Card from './Card'

export default function SocialSection() {
  const socialLinks = [
    { platform: 'Spotify', url: '{{SPOTIFY_URL}}' },
    { platform: 'Instagram', url: '{{INSTAGRAM_URL}}' },
    { platform: 'YouTube', url: '{{YOUTUBE_URL}}' },
    { platform: 'Bandcamp', url: '{{BANDCAMP_URL}}' },
  ]

  return (
    <section id="social" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-primary mb-8">Connect</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="space-y-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="block text-foreground hover:text-accent transition-colors py-2 border-b border-border"
              >
                {link.platform} →
              </a>
            ))}
          </div>
        </Card>
        <Card>
          <div className="aspect-video bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">{{VIDEO_EMBED}}</span>
          </div>
        </Card>
      </div>
    </section>
  )
}
