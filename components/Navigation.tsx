export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">ING</span>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">ING</p>
              <p className="text-xs text-slate-600 font-medium">France</p>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            <a href="#about" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">
              À propos
            </a>
            <a href="#services" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#sustainability" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">
              Durabilité
            </a>
            <a href="#contact" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="/login" 
              className="text-slate-700 px-4 py-2 font-medium hover:text-orange-600 transition-colors text-sm border border-slate-300 rounded-lg hover:border-orange-600"
            >
              Connexion
            </a>
            <a href="#contact" className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors text-sm shadow-md hover:shadow-lg">
              Nous contacter
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="h-0.5 w-full bg-foreground"></span>
              <span className="h-0.5 w-full bg-foreground"></span>
              <span className="h-0.5 w-full bg-foreground"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}
