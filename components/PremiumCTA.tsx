'use client'

import { useState } from 'react'

export function PremiumCTA() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message) return

    setIsSubmitting(true)
    setTimeout(() => {
      setSubmitStatus('success')
      setEmail('')
      setMessage('')
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 800)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-xl text-slate-600">
            Nos experts sont à votre écoute pour discuter de vos besoins spécifiques
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg flex items-start gap-4">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-semibold text-green-900">Message reçu!</h3>
              <p className="text-green-800 text-sm mt-1">Merci de votre intérêt. Nos équipes vous recontacteront rapidement.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Société *</label>
              <input
                type="text"
                placeholder="Nom de votre entreprise"
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">E-mail professionnel *</label>
              <input
                type="email"
                placeholder="vous@entreprise.fr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Secteur d'activité *</label>
            <select
              required
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Sélectionner un secteur</option>
              <option value="real-estate">Immobilier</option>
              <option value="energy">Énergie</option>
              <option value="finance">Finance</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="industry">Industrie</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Votre message *</label>
            <textarea
              placeholder="Décrivez vos besoins ou questions..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="privacy" required className="w-4 h-4 rounded border-slate-300" />
            <label htmlFor="privacy" className="text-sm text-slate-600">
              J&apos;accepte la politique de confidentialité et traitement de mes données
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 disabled:bg-slate-400 transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                Envoi en cours...
              </>
            ) : (
              <>
                Envoyer ma demande
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>

          <p className="text-xs text-slate-600 text-center">
            Vous pouvez également nous appeler directement: <span className="font-semibold">+33 1 57 22 60 60</span>
          </p>
        </form>
      </div>
    </section>
  )
}
