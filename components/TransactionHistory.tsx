'use client'

import { useState, useMemo } from 'react'
import { Send, Download, Filter } from 'lucide-react'

interface Transaction {
  id: string
  type: 'transfer' | 'deposit' | 'withdrawal' | 'payment'
  description: string
  amount: number
  date: string
  status: 'success' | 'pending' | 'failed'
  recipient?: string
  recipientIBAN?: string
}

interface TransactionHistoryProps {
  transactions: Transaction[]
  newTransfer?: Transaction | null
}

export function TransactionHistory({ transactions: initialTransactions, newTransfer }: TransactionHistoryProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterType, setFilterType] = useState<'all' | 'transfer' | 'deposit' | 'withdrawal' | 'payment'>('all')
  const [filterStatus, setFilterStatus] = useState<'all' | 'success' | 'pending' | 'failed'>('all')

  const transactions = useMemo(() => {
    const allTransactions = newTransfer ? [newTransfer, ...initialTransactions] : initialTransactions
    return allTransactions.filter(t => {
      const typeMatch = filterType === 'all' || t.type === filterType
      const statusMatch = filterStatus === 'all' || t.status === filterStatus
      return typeMatch && statusMatch
    })
  }, [initialTransactions, newTransfer, filterType, filterStatus])

  const itemsPerPage = 10
  const totalPages = Math.ceil(transactions.length / itemsPerPage)
  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'transfer': return <Send className="w-4 h-4" />
      case 'deposit': return <Download className="w-4 h-4 rotate-180" />
      case 'withdrawal': return <Download className="w-4 h-4" />
      case 'payment': return <Send className="w-4 h-4" />
      default: return null
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'transfer': return 'Virement'
      case 'deposit': return 'Dépôt'
      case 'withdrawal': return 'Retrait'
      case 'payment': return 'Paiement'
      default: return 'Transaction'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'failed': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'success': return 'Confirmé'
      case 'pending': return 'En attente'
      case 'failed': return 'Échoué'
      default: return 'Inconnu'
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-white border border-slate-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4 text-slate-600" />
          <h3 className="font-semibold text-slate-900">Filtrer</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-2">Type</label>
            <select value={filterType} onChange={(e) => { setFilterType(e.target.value as any); setCurrentPage(1) }}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-600">
              <option value="all">Tous les types</option>
              <option value="transfer">Virements</option>
              <option value="deposit">Dépôts</option>
              <option value="withdrawal">Retraits</option>
              <option value="payment">Paiements</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-2">Statut</label>
            <select value={filterStatus} onChange={(e) => { setFilterStatus(e.target.value as any); setCurrentPage(1) }}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-600">
              <option value="all">Tous les statuts</option>
              <option value="success">Confirmés</option>
              <option value="pending">En attente</option>
              <option value="failed">Échoués</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Date</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-slate-900">Montant</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {paginatedTransactions.length > 0 ? (
                paginatedTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="text-orange-600">{getTypeIcon(transaction.type)}</div>
                        <span className="text-sm font-medium text-slate-900">{getTypeLabel(transaction.type)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <p>{transaction.description}</p>
                      {transaction.recipient && (
                        <p className="text-xs text-slate-500 mt-1 font-semibold">{transaction.recipient}</p>
                      )}
                      {transaction.recipientIBAN && (
                        <p className="text-xs text-slate-400 font-mono">{transaction.recipientIBAN}</p>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {transaction.date.split('T')[0]}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm font-semibold text-slate-900">
                        {transaction.type === 'transfer' || transaction.type === 'withdrawal' ? '-' : '+'}{transaction.amount.toFixed(2)}€
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                        {getStatusLabel(transaction.status)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    Aucune transaction trouvée
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
            <p className="text-sm text-slate-600">Page {currentPage} sur {totalPages} • {transactions.length} transactions</p>
            <div className="flex gap-2">
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                Précédent
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button key={i + 1} onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === i + 1 ? 'bg-orange-600 text-white' : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}>
                  {i + 1}
                </button>
              ))}
              <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                Suivant
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}