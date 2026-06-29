'use client'

import { Button } from '@/components/ui/button'

interface DashboardProps {
  accountInfo: {
    access: string
    name: string
    bank: string
    balance: string
  }
  onLogout: () => void
}

export default function Dashboard({ accountInfo, onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between rounded-xl bg-white p-6 shadow-lg">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Bienvenue</h1>
            <p className="mt-1 text-gray-600">{accountInfo.name}</p>
          </div>
          <Button
            onClick={onLogout}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Déconnexion
          </Button>
        </div>

        {/* Account Info Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Balance Card */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="ml-4 text-lg font-semibold text-gray-900">Solde</h2>
            </div>
            <p className="text-4xl font-bold text-green-600">{accountInfo.balance}</p>
            <p className="mt-2 text-sm text-gray-600">Solde disponible</p>
          </div>

          {/* Access Info Card */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H5a2 2 0 00-2 2v10a2 2 0 002 2h5m0 0h5a2 2 0 002-2V8a2 2 0 00-2-2h-5m0 0V5a2 2 0 012-2h1a2 2 0 012 2v1m0 0h3a2 2 0 012 2v10a2 2 0 01-2 2h-3m-6 0a2 2 0 002 2h2a2 2 0 002-2m-6-4V9m6 4v4m0 0H9m3 0h3"
                  />
                </svg>
              </div>
              <h2 className="ml-4 text-lg font-semibold text-gray-900">Numéro d&apos;accès</h2>
            </div>
            <p className="font-mono text-2xl font-bold text-blue-600">{accountInfo.access}</p>
            <p className="mt-2 text-sm text-gray-600">Identifiant de compte</p>
          </div>

          {/* Bank Card */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h4m4 0h4M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="ml-4 text-lg font-semibold text-gray-900">Banque</h2>
            </div>
            <p className="text-2xl font-bold text-purple-600">{accountInfo.bank}</p>
            <p className="mt-2 text-sm text-gray-600">Institution financière</p>
          </div>

          {/* Name Card */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <svg
                  className="h-6 w-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="ml-4 text-lg font-semibold text-gray-900">Titulaire</h2>
            </div>
            <p className="text-2xl font-bold text-orange-600">{accountInfo.name}</p>
            <p className="mt-2 text-sm text-gray-600">Nom du titulaire du compte</p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 rounded-xl bg-yellow-50 p-6 shadow-lg">
          <div className="flex items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
              <svg
                className="h-6 w-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-yellow-900">Informations de sécurité</h3>
              <p className="mt-2 text-sm text-yellow-800">
                Vous êtes actuellement connecté avec authentification 2FA activée. Votre compte
                est sécurisé. Ne partagez jamais vos identifiants avec d&apos;autres personnes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
