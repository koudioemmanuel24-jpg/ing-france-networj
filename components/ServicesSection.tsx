'use client'

export function ServicesSection() {
  const services = [
    {
      icon: '💰',
      title: 'Financement Immobilier',
      description: 'Solutions complètes de financement pour les projets immobiliers et le leasing'
    },
    {
      icon: '📊',
      title: 'Gestion de Trésorerie',
      description: 'Solutions de gestion optimale de votre trésorerie et besoins en fonds de roulement'
    },
    {
      icon: '🌍',
      title: 'Financement International',
      description: 'Accès aux marchés de capitaux et financement syndiqué à l\'international'
    },
    {
      icon: '🛡️',
      title: 'Gestion des Risques',
      description: 'Couverture complète des risques de taux, change, matières premières et actions'
    },
    {
      icon: '🌱',
      title: 'Finance Durable',
      description: 'Produits innovants alignés avec les objectifs environnementaux et sociaux'
    },
    {
      icon: '📈',
      title: 'Prêts et Acquisitions',
      description: 'Financements structurés pour acquisitions et développement d\'activités'
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une gamme complète de solutions bancaires conçues pour accompagner votre croissance en France et à l&apos;international
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary cursor-pointer transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Répartition des services par secteur</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service Distribution Chart */}
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <h4 className="font-semibold text-foreground mb-6">Portefeuille par secteur</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Immobilier</span>
                    <span className="text-sm font-semibold text-primary">32%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Trésorerie</span>
                    <span className="text-sm font-semibold text-primary">25%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">International</span>
                    <span className="text-sm font-semibold text-primary">20%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Durable</span>
                    <span className="text-sm font-semibold text-primary">15%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Autres</span>
                    <span className="text-sm font-semibold text-primary">8%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{ width: '8%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Chart */}
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <h4 className="font-semibold text-foreground mb-6">Croissance annuelle</h4>
              <div className="space-y-4">
                {[
                  { year: '2020', growth: 12, value: '€5.2B' },
                  { year: '2021', growth: 18, value: '€6.1B' },
                  { year: '2022', growth: 22, value: '€7.4B' },
                  { year: '2023', growth: 25, value: '€9.2B' },
                  { year: '2024', growth: 28, value: '€11.8B' }
                ].map((item) => (
                  <div key={item.year}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{item.year}</span>
                      <span className="text-sm font-semibold text-primary">{item.value}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-primary to-orange-400 h-3 rounded-full transition-all duration-500 hover:shadow-lg"
                        style={{ width: `${item.growth}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
