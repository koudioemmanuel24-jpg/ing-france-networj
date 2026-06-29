'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, MessageCircle } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const AI_RESPONSES: { [key: string]: string } = {
  'bonjour': 'Bonjour! Je suis votre assistant IA ING. Je suis ici pour vous aider avec vos opérations bancaires, vous fournir des conseils financiers, ou répondre à vos questions. Comment puis-je vous aider?',
  'virement': 'Pour effectuer un virement, allez dans la section "Virements". Vous devrez fournir: le nom du destinataire, son IBAN, le montant, et un motif. Les virements sont généralement traités dans les 24 heures.',
  'solde': 'Votre solde disponible actuel est de 95,000€. Vous pouvez consulter votre solde détaillé dans la section "Aperçu".',
  'historique': 'Vous pouvez consulter l\'historique complet de vos transactions dans la section "Historique". Vous pouvez les filtrer par type (virements, paiements, etc.) ou statut.',
  'carte': 'Vous avez une carte Visa valide jusqu\'en décembre 2026. Vous pouvez gérer les paramètres de votre carte dans la section "Cartes" (paiements sans contact, paiements en ligne, etc.).',
  'securite': 'Votre compte est protégé par une authentification à deux facteurs. Votre limite de virement quotidienne est de 50,000€.',
  'investissement': 'Je vois que vous avez un portefeuille d\'investissement diversifié. Voulez-vous connaître les détails de votre portefeuille ou cherchez-vous des conseils de placement?',
  'aide': 'Je peux vous aider avec: virements, historique de transactions, informations sur votre carte, sécurité du compte, portefeuille d\'investissement, et bien d\'autres services. Que puis-je faire pour vous?',
  'default': 'C\'est une bonne question! Je vois que vous demandez des informations financières. Veuillez consulter la section appropriée de votre dashboard ou contactez notre service client pour plus de détails spécifiques.'
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Bonjour Anna! 👋 Je suis votre assistant IA ING. Comment puis-je vous aider aujourd\'hui?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const lowerInput = input.toLowerCase()
      let response = AI_RESPONSES['default']

      for (const [key, value] of Object.entries(AI_RESPONSES)) {
        if (lowerInput.includes(key)) {
          response = value
          break
        }
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 800)
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110 z-40 border-4 border-white"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-slate-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Assistant ING</h3>
              <p className="text-xs text-orange-100">En ligne et prêt à vous aider</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-orange-500/30 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-xl ${
                    msg.type === 'user'
                      ? 'bg-orange-600 text-white rounded-br-none'
                      : 'bg-slate-200 text-slate-900 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {msg.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-200 text-slate-900 px-4 py-2 rounded-xl rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-slate-900 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-900 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-slate-900 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez une question..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-300 text-white rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
