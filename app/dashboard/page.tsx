'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { CreditCard, Send, History, Settings, Home, LogOut, Eye, EyeOff, TrendingUp } from 'lucide-react'
import { VisaCard } from '@/components/VisaCard'
import { TransactionHistory } from '@/components/TransactionHistory'
import { PortfolioGraphics } from '@/components/PortfolioGraphics'
import { AIAssistant } from '@/components/AIAssistant'
import dynamic from 'next/dynamic'

const TransferForm = dynamic(
  () => import('@/components/TransferForm').then(m => ({ default: m.TransferForm })),
  { ssr: false }
)

type Section = 'overview' | 'cards' | 'transfers' | 'transactions' | 'portfolio' | 'settings'

const defaultTransactions = [
  {
    id: 'TRX001',
    type: 'transfer' as const,
    description: 'Virement TechStart Inc',
    amount: 3500,
    date: '2026-06-26T00:00:00.000Z',
    status: 'success' as const,
    recipient: 'TechStart Inc',
    recipientIBAN: 'FR14 2004 1010 0505 1001 3045',
  },
  {
    id: 'TRX002',
    type: 'transfer' as const,
    description: 'Virement Global Finance',
    amount: 1500,
    date: '2026-06-23T00:00:00.000Z',
    status: 'success' as const,
    recipient: 'Global Finance',
    recipientIBAN: 'FR76 1547 6001 0006 4594 7671',
  },
  {
    id: 'TRX003',
    type: 'payment' as const,
    description: 'Paiement facture Orange',
    amount: 89.50,
    date: '2026-06-20T00:00:00.000Z',
    status: 'success' as const,
  },
  {
    id: 'TRX004',
    type: 'transfer' as const,
    description: 'Virement Acme Corp',
    amount: 5000,
    date: '2026-06-13T00:00:00.000Z',
    status: 'success' as const,
    recipient: 'Acme Corporation',
    recipientIBAN: 'FR89 3704 0044 0532 0130 00',
  },
  {
    id: 'TRX005',
    type: 'payment' as const,
    description: 'Paiement facture EDF',
    amount: 150,
    date: '2026-06-08T00:00:00.000Z',
    status: 'success' as const,
  },
]

export default function DashboardPage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<Section>('overview')
  const [currentBalance, setCurrentBalance] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('account_balance')
      return saved ? parseFloat(saved) : 100000
    }
    return 100000
  })
  const [transactions, setTransactions] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('transactions_history')
      return saved ? JSON.parse(saved) : defaultTransactions
    }
    return defaultTransactions
  })
  const [newTransfer, setNewTransfer] = useState(null)
  const [showBalance, setShowBalance] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = () => {
    setIsLoading(true)
    setTimeout(() => { router.push('/') }, 500)
  }

  const handleTransferSuccess = (transfer: any) => {
    setCurrentBalance(prev => {
      const newBalance = prev - transfer.amount
      localStorage.setItem('account_balance', newBalance.toString())
      return newBalance
    })
    setNewTransfer(transfer)
    setTransactions((prev: any) => {
      const updated = [transfer, ...prev]
      localStorage.setItem('transactions_history', JSON.stringify(updated))
      return updated
    })
    setTimeout(() => setNewTransfer(null), 4000)
  }

  const menuItems = [
    { id: 'overview', label: 'Aperçu', icon: Home },
    { id: 'cards', label: 'Cartes', icon: CreditCard },
    { id: 'transfers', label: 'Virements', icon: Send },
    { id: 'transactions', label: 'Historique', icon: History },
    { id: 'portfolio', label: 'Investissements', icon: TrendingUp },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ING</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">ING</p>
                <p className="text-xs text-slate-600">Wholesale Banking</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">Anna Dominique</p>
                <p className="text-xs text-slate-600">Compte actif</p>
              </div>
              <button onClick={handleLogout} disabled={isLoading}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-400 text-white rounded-lg font-medium transition-colors flex items-center gap-2 text-sm">
                <LogOut className="w-4 h-4" />
                {isLoading ? 'Déconnexion...' : 'Déconnexion'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-24">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                return (
                  <button key={item.id} onClick={() => setActiveSection(item.id as Section)}
                    className={`w-full flex items-center gap-3 px-4 py-3 font-medium transition-colors border-l-4 ${
                      isActive ? 'bg-orange-50 text-orange-600 border-orange-600' : 'text-slate-700 border-transparent hover:bg-slate-50'
                    }`}>
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </aside>

          <div className="lg:col-span-3">
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl shadow-lg p-8 text-white">
                  <p className="text-orange-100 text-sm font-medium mb-2">Solde total</p>
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold">{showBalance ? `${currentBalance.toFixed(2)}€` : '****€'}</h2>
                    <button onClick={() => setShowBalance(!showBalance)} className="p-2 hover:bg-orange-500/30 rounded-lg transition-colors">
                      {showBalance ? <Eye className="w-6 h-6" /> : <EyeOff className="w-6 h-6" />}
                    </button>
                  </div>
                  <p className="text-orange-100 text-sm mt-4">ING • Compte Professionnel</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <p className="text-slate-600 text-sm font-medium mb-2">Titulaire</p>
                    <p className="text-xl font-bold text-slate-900">Anna Dominique</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <p className="text-slate-600 text-sm font-medium mb-2">Numéro d&apos;accès</p>
                    <p className="text-xl font-bold font-mono text-slate-900">68933211374</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <p className="text-slate-600 text-sm font-medium mb-2">Statut</p>
                    <p className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Actif ✓</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Dernières transactions</h3>
                  <div className="space-y-3">
                    {transactions.slice(0, 3).map((t: any) => (
                      <div key={t.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900">{t.description}</p>
                          {t.recipient && <p className="text-xs text-slate-500 font-semibold">{t.recipient}</p>}
                          {t.recipientIBAN && <p className="text-xs text-slate-400 font-mono">{t.recipientIBAN}</p>}
                          <p className="text-xs text-slate-400">{t.date.split('T')[0]}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${t.type === 'transfer' ? 'text-red-600' : 'text-green-600'}`}>
                            {t.type === 'transfer' ? '-' : '+'}{t.amount.toFixed(2)}€
                          </p>
                          <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-medium">Confirmé</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'cards' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Mes cartes</h2>
                  <p className="text-slate-600 mb-8">Cliquez sur la carte pour afficher le CVV</p>
                </div>
                <VisaCard cardNumber="4532123456789012" holderName="ANNA DOMINIQUE" expiryDate="12/26" cvv="456" />
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">Paramètres de la carte</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-slate-900 font-medium">Activer paiements sans contact</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-slate-900 font-medium">Activer paiements en ligne</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-slate-900 font-medium">Activer retraits aux distributeurs</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'transfers' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Effectuer un virement</h2>
                  <p className="text-slate-600 mb-6">Solde disponible: <span className="font-semibold text-orange-600">{currentBalance.toFixed(2)}€</span></p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                  <TransferForm currentBalance={currentBalance} onTransferSuccess={handleTransferSuccess} />
                </div>
              </div>
            )}

            {activeSection === 'transactions' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Historique des transactions</h2>
                  <p className="text-slate-600">Consultez l&apos;ensemble de vos transactions</p>
                </div>
                <TransactionHistory transactions={transactions} newTransfer={newTransfer} />
              </div>
            )}

            {activeSection === 'portfolio' && <PortfolioGraphics />}

            {activeSection === 'settings' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Paramètres du compte</h2>
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Sécurité</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="text-slate-900 font-medium">Authentification à deux facteurs</span>
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Activé</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="text-slate-900 font-medium">Limite de virement quotidienne</span>
                      <span className="text-slate-900 font-bold">50 000€</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-slate-900 font-medium">Notifications par email</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-slate-900 font-medium">Notifications SMS</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-slate-900 font-medium">Alertes de transactions</span>
                    </label>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Informations du compte</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="text-slate-600">Type de compte</span>
                      <span className="text-slate-900 font-semibold">Professionnel Premium</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="text-slate-600">Devise</span>
                      <span className="text-slate-900 font-semibold">EUR (€)</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="text-slate-600">Date d&apos;ouverture</span>
                      <span className="text-slate-900 font-semibold">01/01/2024</span>
                    </div>
                  </div>
                </div>
                <button onClick={handleLogout} disabled={isLoading}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-slate-400 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <LogOut className="w-4 h-4" />
                  {isLoading ? 'Déconnexion en cours...' : 'Déconnexion sécurisée'}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <AIAssistant />
    </div>
  )
}