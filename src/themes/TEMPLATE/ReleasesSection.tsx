import Card from './Card'

export default function ReleasesSection() {
  const mockReleases = [
    { title: '{{ALBUM_TITLE}}', year: '{{RELEASE_YEAR}}' },
    { title: '{{ALBUM_TITLE}}', year: '{{RELEASE_YEAR}}' },
    { title: '{{ALBUM_TITLE}}', year: '{{RELEASE_YEAR}}' },
  ]

  return (
    <section id="releases" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-primary mb-8">Releases</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {mockReleases.map((release, i) => (
          <Card key={i}>
            <div className="aspect-square bg-muted mb-4 flex items-center justify-center">
              <span className="text-muted-foreground">{{ALBUM_COVER}}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">{release.title}</h3>
            <p className="text-muted-foreground">{release.year}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
