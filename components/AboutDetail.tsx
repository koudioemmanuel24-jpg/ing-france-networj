'use client'

export function AboutDetail() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500/placeholder.svg?height=500&width=400h=400/placeholder.svg?height=500&width=400fit=crop"
              alt="ING France headquarters"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Filiale du groupe ING, leader bancaire international, ING France opère depuis 1982 comme banque étrangère de référence sur le marché français. Basée au cœur de Paris avec 200 collaborateurs, nous accompagnons 250 clients de premier plan.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nos clients représentent 75% des sociétés du CAC 40 et du SBF 120, ainsi que les plus grands fonds d'investissement internationaux. Notre approche sectorielle et notre réseau de 40+ pays nous permettent d'offrir une expertise incomparable.
            </p>
            
            <div className="space-y-4 pt-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Expertise sectorielle</h3>
                  <p className="text-slate-600 text-sm">Approche ciblée par secteur d'activité pour comprendre vos enjeux</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Relations durables</h3>
                  <p className="text-slate-600 text-sm">Partenariats fondés sur la création de valeur mutuelle</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Couverture mondiale</h3>
                  <p className="text-slate-600 text-sm">Accès à un réseau de 40+ pays pour vos ambitions internationales</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Quote */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 border border-slate-200">
          <div className="flex items-start space-x-4">
            <svg className="w-8 h-8 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 21c3-1 7-4 7-8s-1-5-2-7c5 3 9 3 9-4 0 0-4 1-6-1s-5.216-4.513-7-5c-1 2-1 4-1 6 0 1 0 2 1 4s1 4 3 7z" />
            </svg>
            <div>
              <p className="text-lg md:text-xl font-serif italic text-slate-900 mb-4">
                Chez ING France, notre raison d'être est de soutenir les volontés d'agir pour un monde plus responsable. Nous accompagnons nos clients dans leur transformation vers des modèles d'entreprise plus durables, en tirant parti de notre expertise pointue et de notre réseau international.
              </p>
              <div>
                <p className="font-semibold text-slate-900">Thomas Labergère</p>
                <p className="text-sm text-slate-600">Président Directeur Général - ING France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
