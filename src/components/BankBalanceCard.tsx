"use client"

import { useState } from 'react'
import { EyeSlashIcon, CreditCardIcon, EyeIcon } from '@heroicons/react/24/outline'

export default function BankBalanceCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`w-1/2 h-56 bg-[#EF9A9A] shadow-md rounded-lg p-4 cursor-pointer relative ${
        isFlipped ? 'transform bg-white rotate-y-180' : ''
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {isFlipped ? (
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-3">Bank</h2>
          <div className="w-18 h-18 flex items-center justify-center">
            <CreditCardIcon className="h-16 w-16 text-blue-500" />
          </div>
          <p className="text-xl font-bold">₹3,25,240</p>
          <p className="text-sm">Available Balance</p>
          <p className="text-sm mt-2">Interest Earned</p>
          <p className="text-lg font-semibold">₹50,000</p>
          <div
            className="eye-icon absolute top-2 right-2"
            onClick={(e) => {
              e.stopPropagation()
              setIsFlipped(false)
            }}
          >
            <EyeSlashIcon className="h-6 w-6" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div
            className="eye-icon absolute top-2 right-2"
            onClick={(e) => {
              e.stopPropagation()
              setIsFlipped(true)
            }}
          >
            <EyeIcon className="h-6 w-6" />
          </div>
          <p className="text-lg font-semibold">Your Bank Balance</p>
        </div>
      )}
    </div>
  )
}