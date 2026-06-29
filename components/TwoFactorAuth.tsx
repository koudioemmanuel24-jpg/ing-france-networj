'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface TwoFactorAuthProps {
  onSuccess: () => void
}

export default function TwoFactorAuth({ onSuccess }: TwoFactorAuthProps) {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // 2FA code validation
  const VALID_CODE = '1800'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (code === VALID_CODE) {
        onSuccess()
      } else {
        setError('Code d&apos;authentification incorrect')
      }
      setIsLoading(false)
    }, 500)
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4)
    setCode(value)
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
            <svg
              className="h-8 w-8 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Authentification 2FA</h1>
          <p className="mt-2 text-gray-600">Entrez le code de vérification</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700">
              Code à 4 chiffres
            </label>
            <input
              id="code"
              type="text"
              value={code}
              onChange={handleCodeChange}
              placeholder="0000"
              maxLength={4}
              className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-4 text-center text-2xl font-bold tracking-widest text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none"
              required
            />
          </div>

          {error && <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">{error}</div>}

          <Button
            type="submit"
            disabled={isLoading || code.length !== 4}
            className="w-full bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {isLoading ? 'Vérification en cours...' : 'Vérifier'}
          </Button>
        </form>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-500">Code de démonstration: 1800</p>
        </div>
      </div>
    </div>
  )
}
