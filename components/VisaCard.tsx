'use client'

import { useState } from 'react'

interface VisaCardProps {
  cardNumber: string
  holderName: string
  expiryDate: string
  cvv: string
}

export function VisaCard({ cardNumber, holderName, expiryDate, cvv }: VisaCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Format card number with spaces
  const formattedCardNumber = cardNumber.replace(/(\d{4})/g, '$1 ').trim()

  return (
    <div className="w-full max-w-md mx-auto h-64 cursor-pointer perspective" onClick={() => setIsFlipped(!isFlipped)}>
      <div
        className="relative w-full h-full transition-transform duration-500 transform-gpu"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Card Front */}
        <div
          className="absolute w-full h-full rounded-2xl p-6 shadow-2xl"
          style={{
            backgroundImage: 'linear-gradient(135deg, #ff6400 0%, #ff8c00 100%)',
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="flex flex-col justify-between h-full">
            {/* Top section */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/70 text-xs font-medium">ING</p>
              </div>
              <div className="text-white">
                <p className="text-2xl font-bold">VISA</p>
              </div>
            </div>

            {/* Middle - Chip and Card Number */}
            <div className="space-y-6">
              {/* EMV Chip */}
              <div className="w-16 h-12 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1 p-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-yellow-600 rounded-sm"></div>
                  ))}
                </div>
              </div>

              {/* Card Number */}
              <div>
                <p className="text-white/60 text-xs mb-2 font-medium">CARD NUMBER</p>
                <p className="text-white text-2xl font-mono tracking-widest">{formattedCardNumber}</p>
              </div>
            </div>

            {/* Bottom section */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-white/60 text-xs mb-1 font-medium">CARDHOLDER</p>
                <p className="text-white font-semibold uppercase">{holderName}</p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-xs mb-1 font-medium">VALID THRU</p>
                <p className="text-white font-mono text-lg">{expiryDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Back */}
        <div
          className="absolute w-full h-full rounded-2xl p-6 shadow-2xl"
          style={{
            backgroundImage: 'linear-gradient(135deg, #ff6400 0%, #ff8c00 100%)',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="flex flex-col justify-between h-full">
            {/* Magnetic Stripe */}
            <div className="w-full h-12 bg-gray-900 rounded"></div>

            {/* CVV Section */}
            <div className="flex flex-col items-end space-y-3">
              <div className="w-full bg-white/20 h-8 rounded flex items-center justify-end pr-4">
                <p className="text-white/60 text-xs font-mono">{cvv}</p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-xs mb-1">CVV</p>
                <p className="text-white/40 text-xs max-w-xs">For additional security, do not share this code</p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-white/60 text-xs">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
