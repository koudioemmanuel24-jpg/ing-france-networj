'use client'

import { useState, useEffect } from 'react'
import { AlertCircle, CheckCircle2, Send, Trash2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

emailjs.init('mPWq7DDtjifPVjxFl')

interface TransferFormProps {
  currentBalance: number
  onTransferSuccess: (transfer: any) => void
}

interface Transfer {
  id: string
  recipient: string
  recipientEmail: string
  recipientIBAN: string
  amount: number
  description: string
  date: string
}

export function TransferForm({ currentBalance, onTransferSuccess }: TransferFormProps) {
  const [step, setStep] = useState<'form' | 'confirm' | 'success'>('form')
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    recipientIBAN: '',
    amount: '',
    description: '',
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [history, setHistory] = useState<Transfer[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('transfer_history')
    if (saved) {
      setHistory(JSON.parse(saved))
    }
  }, [])

  const saveToHistory = (transfer: Transfer) => {
    const updated = [transfer, ...history].slice(0, 20)
    setHistory(updated)
    localStorage.setItem('transfer_history', JSON.stringify(updated))
  }

  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem('transfer_history')
  }

  const suggestedRecipients = [
    { name: 'Acme Corp', email: 'contact@acmecorp.fr', iban: 'FR89 3704 0044 0532 0130 00' },
    { name: 'TechStart Inc', email: 'finance@techstart.fr', iban: 'FR14 2004 1010 0505 1001 3045' },
    { name: 'Global Finance', email: 'account@globalfinance.fr', iban: 'FR76 1547 6001 0006 4594 7671' },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSelectRecipient = (recipient: typeof suggestedRecipients[0]) => {
    setFormData(prev => ({
      ...prev,
      recipientName: recipient.name,
      recipientEmail: recipient.email,
      recipientIBAN: recipient.iban,
    }))
  }

  const handleSelectFromHistory = (t: Transfer) => {
    setFormData(prev => ({
      ...prev,
      recipientName: t.recipient,
      recipientEmail: t.recipientEmail,
      recipientIBAN: t.recipientIBAN,
    }))
  }

  const validateForm = () => {
    if (!formData.recipientName.trim()) { setError('Veuillez entrer le nom du destinataire'); return false }
    if (!formData.recipientEmail.includes('@')) { setError('Email invalide'); return false }
    if (!formData.recipientIBAN.trim()) { setError('IBAN requis'); return false }
    if (!formData.amount || parseFloat(formData.amount) <= 0) { setError('Montant invalide'); return false }
    if (parseFloat(formData.amount) > currentBalance) { setError('Solde insuffisant'); return false }
    if (!formData.description.trim()) { setError('Description requise'); return false }
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) setStep('confirm')
  }

  const sendConfirmationEmail = async (transfer: Transfer) => {
    try {
      await emailjs.send('service_mcjr2tb', 'template_x3f8kpl', {
        to_email: formData.recipientEmail,
        to_name: formData.recipientName,
        name: 'ING Banque',
        sender_name: 'Anna Dominique',
        sender_account: 'FR89 3704 0044 0532 0130 00',
        amount: formData.amount,
        reference: formData.description,
        transaction_date: new Date().toLocaleString('fr-FR'),
      })
      console.log('Email envoyé!')
    } catch (err) {
      console.error('Erreur email:', err)
    }
  }

  const handleConfirm = async () => {
    setIsSubmitting(true)
    const transfer: Transfer = {
      id: `VIR${Date.now()}`,
      recipient: formData.recipientName,
      recipientEmail: formData.recipientEmail,
      recipientIBAN: formData.recipientIBAN,
      amount: parseFloat(formData.amount),
      description: formData.description,
      date: new Date().toLocaleString('fr-FR'),
    }

    await sendConfirmationEmail(transfer)
    saveToHistory(transfer)
    onTransferSuccess({ ...transfer, type: 'transfer', status: 'success' })

    setTimeout(() => {
      setIsSubmitting(false)
      setStep('success')
      setTimeout(() => {
        setStep('form')
        setFormData({ recipientName: '', recipientEmail: '', recipientIBAN: '', amount: '', description: '' })
      }, 3000)
    }, 1000)
  }

  if (step === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Virement confirmé!</h3>
        <p className="text-slate-600 mb-4">{formData.amount}€ transférés à {formData.recipientName}</p>
        <p className="text-sm text-slate-500">Confirmation envoyée à {formData.recipientEmail}</p>
        <p className="text-xs text-slate-400 mt-4">Retour au formulaire dans quelques secondes...</p>
      </div>
    )
  }

  if (step === 'confirm') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Confirmer le virement</h3>
        <div className="bg-slate-50 rounded-lg p-6 space-y-4">
          {[
            ['Destinataire', formData.recipientName],
            ['Email', formData.recipientEmail],
            ['IBAN', formData.recipientIBAN],
            ['Description', formData.description],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between items-center py-3 border-b border-slate-200">
              <span className="text-slate-600">{label}</span>
              <span className="font-semibold text-slate-900 text-sm">{value}</span>
            </div>
          ))}
          <div className="flex justify-between items-center py-3 border-b border-slate-200">
            <span className="text-slate-600">Montant</span>
            <span className="text-2xl font-bold text-orange-600">{parseFloat(formData.amount).toFixed(2)}€</span>
          </div>
          <div className="flex justify-between items-center py-3 bg-orange-50 px-4 rounded-lg">
            <span className="text-slate-600">Nouveau solde</span>
            <span className="text-2xl font-bold text-orange-600">{(currentBalance - parseFloat(formData.amount)).toFixed(2)}€</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setStep('form')} className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 transition-colors">
            Annuler
          </button>
          <button onClick={handleConfirm} disabled={isSubmitting} className="flex-1 px-6 py-3 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
            {isSubmitting ? <><div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>Traitement...</> : <><Send className="w-5 h-5" />Confirmer</>}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {history.length > 0 && (
        <div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm font-medium text-slate-900">Historique des virements</p>
            <button onClick={clearHistory} className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1">
              <Trash2 className="w-3 h-3" /> Effacer
            </button>
          </div>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {history.map((t) => (
              <button key={t.id} type="button" onClick={() => handleSelectFromHistory(t)}
                className="w-full p-3 border border-slate-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors text-left">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-900 text-sm">{t.recipient}</span>
                  <span className="text-orange-600 font-bold text-sm">{t.amount.toFixed(2)}€</span>
                </div>
                <p className="text-xs text-slate-500 font-mono">{t.recipientIBAN}</p>
                <p className="text-xs text-slate-400">{t.date}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div>
          <p className="text-sm font-medium text-slate-900 mb-3">Destinataires fréquents</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {suggestedRecipients.map((r) => (
              <button key={r.name} type="button" onClick={() => handleSelectRecipient(r)}
                className="p-3 border border-slate-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors text-left">
                <p className="font-semibold text-slate-900 text-sm">{r.name}</p>
                <p className="text-xs text-slate-500">{r.email}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: 'Nom du destinataire *', name: 'recipientName', type: 'text', placeholder: 'Ex: Entreprise ABC' },
            { label: 'Email du destinataire *', name: 'recipientEmail', type: 'email', placeholder: 'contact@entreprise.fr' },
            { label: 'IBAN du destinataire *', name: 'recipientIBAN', type: 'text', placeholder: 'FR89 3704 0044 0532 0130 00' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-slate-900 mb-2">{field.label}</label>
              <input type={field.type} name={field.name} value={(formData as any)[field.name]} onChange={handleInputChange} placeholder={field.placeholder}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">Montant (€) *</label>
            <div className="relative">
              <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} placeholder="0.00" step="0.01" min="0"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">€</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Solde: <span className="font-semibold text-slate-900">{currentBalance.toFixed(2)}€</span></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">Description *</label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Ex: Paiement facture..." rows={3}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent resize-none" />
          </div>
        </div>

        <button type="submit" className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
          <Send className="w-5 h-5" />
          Continuer vers confirmation
        </button>
      </form>
    </div>
  )
}