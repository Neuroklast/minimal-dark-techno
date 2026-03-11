import Card from './Card'

export default function BiographySection() {
  return (
    <section id="bio" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-primary mb-8">Biography</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <p className="text-foreground leading-relaxed">
            Your band biography goes here. Replace this with your story, influences, and journey.
          </p>
        </Card>
        <div className="bg-muted aspect-square flex items-center justify-center">
          <span className="text-muted-foreground">Band Photo</span>
        </div>
      </div>
    </section>
  )
}
