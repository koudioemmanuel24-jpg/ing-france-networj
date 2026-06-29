export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Qui sommes-nous ?
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Présente en France depuis 1982, ING France est une banque étrangère de référence sur le marché français, centrée autour des activités de banque commerciale Wholesale Banking.
            </p>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Basées à Paris, nos équipes de 200 collaborateurs accompagnent 250 clients de premier plan : grandes entreprises représentant 75 % des sociétés du CAC 40 et du SBF 120, institutions financières, et grands fonds d&apos;investissement internationaux.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Notre approche sectorielle nous permet de proposer une gamme complète de solutions et de services en France et à l&apos;international.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-secondary rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Collaborateurs</div>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">250</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">40+</div>
                <div className="text-sm text-muted-foreground">Pays</div>
              </div>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-slate-600 font-semibold">Présence Internationale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
