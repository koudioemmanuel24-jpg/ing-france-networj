'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface LoginFormProps {
  onSuccess: (access: string) => void
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [access, setAccess] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Credentials validation
  const VALID_ACCESS = '68933211374'
  const VALID_PASSWORD = '180045784'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (access === VALID_ACCESS && password === VALID_PASSWORD) {
        onSuccess(access)
      } else {
        setError('Accès ou mot de passe incorrect')
      }
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Connexion ING</h1>
          <p className="mt-2 text-gray-600">Accédez à votre compte bancaire</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="access" className="block text-sm font-medium text-gray-700">
              Numéro d&apos;accès
            </label>
            <input
              id="access"
              type="text"
              value={access}
              onChange={(e) => setAccess(e.target.value)}
              placeholder="68933211374"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {error && <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">{error}</div>}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {isLoading ? 'Connexion en cours...' : 'Se connecter'}
          </Button>
        </form>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-500">
            Identifiants de démonstration fournis
          </p>
        </div>
      </div>
    </div>
  )
}
