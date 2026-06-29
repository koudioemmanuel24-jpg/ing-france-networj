export function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Nos Engagements en Matière de Finance Durable
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            En tant que banque, nous avons un rôle et une responsabilité spécifiques à jouer dans la transition vers une économie et une société plus durable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Key initiatives */}
          <div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Approche Terra</h3>
                  <p className="text-muted-foreground">Approche fondée sur la science visant la neutralité carbone dans les projets financés d&apos;ici 2050</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Réduction du Charbon</h3>
                  <p className="text-muted-foreground">Réduction du financement des centrales électriques au charbon à près de zéro d&apos;ici 2025</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Énergies Renouvelables</h3>
                  <p className="text-muted-foreground">Objectif de tripler le financement des énergies renouvelables à 7,5 milliards d&apos;euros par an d&apos;ici 2025</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Zéro Pétrole & Gaz</h3>
                  <p className="text-muted-foreground">Fin du financement des nouveaux gisements de pétrole et gaz d&apos;ici 2040</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-8 text-white">
              <div className="text-4xl font-bold mb-2">65%</div>
              <p className="text-white/90">Des projets financés en 2023 étaient internationaux</p>
            </div>
            <div className="bg-secondary rounded-xl p-8 border border-border">
              <div className="text-foreground font-semibold mb-2">Expertise Sectorielle</div>
              <p className="text-muted-foreground text-sm">Énergies, transports, santé, finances et bien d&apos;autres secteurs</p>
            </div>
            <div className="bg-secondary rounded-xl p-8 border border-border">
              <div className="text-foreground font-semibold mb-2">Accord de Paris</div>
              <p className="text-muted-foreground text-sm">Tous nos financements sont alignés avec les objectifs climatiques globaux</p>
            </div>
          </div>
        </div>

        {/* Sustainability Loan mention */}
        <div className="bg-secondary rounded-xl p-8 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-3">Première en France</h3>
          <p className="text-muted-foreground">
            ING France a été la première banque en France à mettre en place un Sustainability-Improvement Loan avec EDF. Nous continuons à développer des solutions de financement innovantes indexées sur les performances en matière de développement durable.
          </p>
        </div>
      </div>
    </section>
  )
}
