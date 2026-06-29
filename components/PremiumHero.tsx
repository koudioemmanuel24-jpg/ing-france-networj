'use client'

export function PremiumHero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 to-slate-100 py-32 md:py-48 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-orange-100/50 rounded-full text-sm font-medium text-orange-900">
              Leader du Wholesale Banking en France
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-tight">
              Votre partenaire financier de référence
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Depuis 1982, ING France accompagne les plus grands acteurs économiques dans leurs projets internationaux et leur transformation durable. 250 clients de premier plan nous font confiance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                Découvrir nos solutions
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                Accès sécurisé
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div>
                <div className="text-3xl font-bold text-orange-600">200+</div>
                <p className="text-sm text-slate-600 mt-1">Collaborateurs experts</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">250</div>
                <p className="text-sm text-slate-600 mt-1">Clients premium</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">40+</div>
                <p className="text-sm text-slate-600 mt-1">Pays desservis</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600/placeholder.svg?height=500&width=600h=500/placeholder.svg?height=500&width=600fit=crop"
                alt="Team ING France"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-4 bg-white rounded-xl p-6 shadow-2xl max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-slate-900">Plateforme certifiée ISO 27001</span>
              </div>
              <p className="text-sm text-slate-600">
                Sécurité et confidentialité de vos données garanties par nos standards internationaux les plus stricts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
