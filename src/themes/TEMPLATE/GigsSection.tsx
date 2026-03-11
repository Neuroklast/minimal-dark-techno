import Card from './Card'

export default function GigsSection() {
  const mockGigs = [
    { date: '{{GIG_DATE}}', venue: '{{GIG_VENUE}}', city: '{{GIG_CITY}}' },
    { date: '{{GIG_DATE}}', venue: '{{GIG_VENUE}}', city: '{{GIG_CITY}}' },
    { date: '{{GIG_DATE}}', venue: '{{GIG_VENUE}}', city: '{{GIG_CITY}}' },
  ]

  return (
    <section id="gigs" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-primary mb-8">Upcoming Gigs</h2>
      <div className="space-y-4">
        {mockGigs.map((gig, i) => (
          <Card key={i}>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-accent font-bold">{gig.date}</div>
                <div className="text-foreground">{gig.venue}</div>
                <div className="text-muted-foreground">{gig.city}</div>
              </div>
              <button className="bg-accent text-accent-foreground px-6 py-2 hover:opacity-80 transition-opacity">
                Tickets
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
