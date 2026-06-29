'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [step, setStep] = useState<'login' | '2fa' | 'success'>('login')
  const [credentials, setCredentials] = useState({ access: '', password: '' })
  const [twoFaCode, setTwoFaCode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const correctAccess = '68933211374'
  const correctPassword = '180045784'
  const correct2FACode = '1800'

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    setTimeout(() => {
      if (credentials.access === correctAccess && credentials.password === correctPassword) {
        setStep('2fa')
        setIsLoading(false)
      } else {
        setError('Identifiants incorrects. Veuillez réessayer.')
        setIsLoading(false)
      }
    }, 500)
  }

  const handle2FASubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    setTimeout(() => {
      if (twoFaCode === correct2FACode) {
        localStorage.removeItem('account_balance')
        localStorage.removeItem('transactions_history')
        setStep('success')
        setIsLoading(false)
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)
      } else {
        setError('Code de vérification incorrect.')
        setIsLoading(false)
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-8 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">ING</div>
            <p className="text-slate-300 text-sm">Wholesale Banking</p>
          </div>

          <div className="p-8">
            {step === 'login' && (
              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Connexion</h2>
                  <p className="text-slate-600 text-sm">Accédez à votre compte professionnel</p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Numéro d&apos;accès
                  </label>
                  <input
                    type="text"
                    placeholder="68933211374"
                    value={credentials.access}
                    onChange={(e) => setCredentials({ ...credentials, access: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-slate-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-slate-50"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-400 text-white font-semibold py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Vérification...
                    </>
                  ) : (
                    'Se connecter'
                  )}
                </button>

                <div className="text-center pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    Besoin d&apos;aide?{' '}
                    <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                      Contactez le support
                    </a>
                  </p>
                </div>
              </form>
            )}

            {step === '2fa' && (
              <form onSubmit={handle2FASubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Vérification en deux étapes</h2>
                  <p className="text-slate-600 text-sm">Entrez le code de vérification à 4 chiffres</p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Code de vérification
                  </label>
                  <input
                    type="text"
                    placeholder="0000"
                    maxLength={4}
                    value={twoFaCode}
                    onChange={(e) => setTwoFaCode(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-4 py-3 text-center text-2xl tracking-widest border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-slate-50 font-mono"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-400 text-white font-semibold py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Vérification...
                    </>
                  ) : (
                    'Vérifier'
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStep('login')
                    setTwoFaCode('')
                    setError('')
                  }}
                  className="w-full text-orange-500 hover:text-orange-600 font-medium py-2"
                >
                  Retour à la connexion
                </button>
              </form>
            )}

            {step === 'success' && (
              <div className="text-center space-y-6 py-8">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Bienvenue!</h2>
                  <p className="text-slate-600">Connexion réussie. Redirection en cours...</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-slate-50 px-8 py-4 border-t border-slate-200 text-center">
            <Link href="/" className="text-sm text-slate-600 hover:text-orange-500 font-medium">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-slate-400 text-xs space-y-1">
          <p>🔒 Connexion sécurisée avec chiffrement SSL</p>
          <p>Veuillez ne jamais partager vos identifiants</p>
        </div>
      </div>
    </div>
  )
}