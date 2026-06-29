export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold">ING</span>
              </div>
              <div>
                <p className="font-bold text-white">ING</p>
                <p className="text-xs text-slate-400">France</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Leader du wholesale banking en France depuis 1982. Accompagnant les plus grands acteurs économiques dans leurs projets internationaux.
            </p>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-semibold text-white mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#sustainability" className="text-slate-400 hover:text-white transition-colors">Durabilité</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/login" className="text-slate-400 hover:text-primary transition-colors font-medium">Connexion</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Financement Immobilier</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Finance Durable</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Gestion de Trésorerie</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Prêts et Acquisitions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Nous contacter</h4>
            <div className="space-y-3 text-sm">
              <p className="text-slate-400">
                <span className="font-medium text-white">Adresse:</span><br/>
                104 rue de Richelieu<br/>
                75002 Paris
              </p>
              <p className="text-slate-400">
                <span className="font-medium text-white">Téléphone:</span><br/>
                <a href="tel:+33157226060" className="hover:text-orange-400 transition-colors">+33 1 57 22 60 60</a>
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Conditions d&apos;utilisation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Gestion des cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2026 ING France. Tous droits réservés.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.836.856 4.958 4.958 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.249-.129.597-.129.946v5.446h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.608 2.921-1.608 2.135 0 3.734 1.39 3.734 4.38v5.614zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.768-1.703 1.96-1.703 1.189 0 1.914.752 1.939 1.703 0 .946-.75 1.704-1.984 1.704zm1.586 11.019H3.74V9.684h3.183v10.768zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
