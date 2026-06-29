'use client'

export function SustainabilityPremium() {
  return (
    <section id="sustainability" className="py-20 md:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Finance durable et transition verte
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              En tant que banque, nous avons une responsabilité majeure dans la transition vers une économie durable. ING France s'engage activement pour soutenir ses clients dans cette transformation critique.
            </p>

            <div className="space-y-6 pt-6">
              <div className="border-l-2 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Neutralité carbone 2050</h3>
                <p className="text-slate-300 text-sm">
                  Réorientation des investissements vers la zéro net emission d'ici 2050
                </p>
              </div>
              <div className="border-l-2 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Fin du charbon 2025</h3>
                <p className="text-slate-300 text-sm">
                  Réduction du financement des centrales thermiques à zéro d'ici 2025
                </p>
              </div>
              <div className="border-l-2 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Énergies renouvelables 7,5Md€</h3>
                <p className="text-slate-300 text-sm">
                  Tripler le financement des énergies renouvelables d'ici 2025
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=500&fit=crop"
              alt="Sustainability and green energy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Commitment cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10 hover:border-orange-500/30 transition-colors">
            <div className="text-4xl font-bold text-orange-400 mb-3">0</div>
            <h3 className="text-lg font-semibold mb-2">Nouveaux gisements pétroliers</h3>
            <p className="text-slate-300 text-sm">
              Arrêt complet du financement des nouveaux projets pétro-gaziers
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10 hover:border-orange-500/30 transition-colors">
            <div className="text-4xl font-bold text-orange-400 mb-3">2040</div>
            <h3 className="text-lg font-semibold mb-2">Zéro pétrole & gaz amont</h3>
            <p className="text-slate-300 text-sm">
              Réduction progressive jusqu'à l'arrêt complet des financements amont
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10 hover:border-orange-500/30 transition-colors">
            <div className="text-4xl font-bold text-orange-400 mb-3">65%</div>
            <h3 className="text-lg font-semibold mb-2">Projets internationaux</h3>
            <p className="text-slate-300 text-sm">
              Majorité de nos financements durables avec dimension internationale
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
