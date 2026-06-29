'use client'

import { useState } from 'react'

export function ContactSection() {
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
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }, 800)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nous Contacter
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez comment ING France peut vous aider à réaliser vos ambitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Siège Social */}
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Siège Social</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              104 rue de Richelieu<br />
              75002 Paris<br />
              France
            </p>
          </div>

          {/* Téléphone */}
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Service Client</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <div className="font-medium text-primary">+33 1 57 22 60 60</div>
              <div className="mt-2">De 9h à 18h<br />Lundi au vendredi</div>
            </p>
          </div>

          {/* Email */}
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Email</h3>
            <a href="mailto:contact@ing-france.com" className="text-muted-foreground text-sm">
              contact@ing-france.com
            </a>
            <button className="mt-4 text-primary font-medium hover:underline">
              Nous écrire →
            </button>
          </div>
        </div>

        {/* CTA Section with Form */}
        <div className="mt-12 bg-primary/5 rounded-xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Demander une consultation
          </h3>

          {submitStatus === 'success' && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Merci! Nous vous contacterons très bientôt.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <textarea
              placeholder="Votre message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Envoi en cours...
                </>
              ) : (
                'Envoyer mon message'
              )}
            </button>
          </form>

          <p className="text-muted-foreground text-sm text-center mt-4">
            Nos experts sont disponibles pour discuter de vos besoins spécifiques et vous proposer des solutions adaptées.
          </p>
        </div>
      </div>
    </section>
  )
}
