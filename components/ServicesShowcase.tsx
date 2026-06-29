'use client'

export function ServicesShowcase() {
  const services = [
    {
      icon: '💳',
      title: 'Financement Immobilier',
      description: 'Solutions complètes pour vos projets immobiliers, leasing et financement structuré',
      features: ['LBO immobilier', 'Financement de projets', 'Sale-leaseback']
    },
    {
      icon: '💰',
      title: 'Gestion de Trésorerie',
      description: 'Optimisation de votre trésorerie et financement du besoin en fonds de roulement',
      features: ['Crédits de trésorerie', 'Garanties bancaires', 'Financement du BFR']
    },
    {
      icon: '🌍',
      title: 'Financement International',
      description: 'Accès aux marchés de capitaux et financement syndiqué mondial',
      features: ['Financement syndiqué', 'Marchés de capitaux', 'Garanties internationales']
    },
    {
      icon: '🛡️',
      title: 'Gestion des Risques',
      description: 'Couverture complète de vos risques de marché et d\'entreprise',
      features: ['Dérivés de taux', 'Gestion du change', 'Options commodités']
    },
    {
      icon: '🌱',
      title: 'Finance Durable',
      description: 'Financement innovant aligné avec vos objectifs environnementaux et sociaux',
      features: ['Prêts durables', 'Financements verts', 'Transition énergétique']
    },
    {
      icon: '📈',
      title: 'Fusions & Acquisitions',
      description: 'Financement structuré pour vos opérations de croissance externe',
      features: ['Prêts d\'acquisition', 'Financement LBO', 'Prêts bridge']
    }
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Notre gamme de services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Une offre complète et intégrée pour accompagner votre développement en France et à l'international
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-orange-200 group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
