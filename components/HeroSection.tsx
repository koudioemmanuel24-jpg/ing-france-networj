'use client'

export function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              Banque Commerciale de Référence
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 text-balance">
              ING France accompagne depuis 1982 les plus grands acteurs économiques français dans leurs projets internationaux et leur développement durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 text-center"
              >
                Découvrir nos solutions
              </a>
              <a
                href="/login"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Connexion sécurisée
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/500/400"
              alt="Professionnels avec téléphone"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-700">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
            <p className="text-slate-400 text-sm">Collaborateurs</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">250</div>
            <p className="text-slate-400 text-sm">Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">40+</div>
            <p className="text-slate-400 text-sm">Pays desservis</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">42 ans</div>
            <p className="text-slate-400 text-sm">D&apos;expertise</p>
          </div>
        </div>
      </div>
    </section>
  )
}
