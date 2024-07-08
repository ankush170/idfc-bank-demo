'use client'

import { useState } from 'react'
import Link from 'next/link'
import RoboIcon from '@/components/RoboIcon'
import Header2 from '@/components/Header2'

export default function FinancialPriority() {
  const [selectedPriority, setSelectedPriority] = useState('')

  const priorities = [
    'Grow my money as much as possible',
    'I want to grow my money safely',
    'Protect my savings'
  ]

  return (
    <div className='min-h-screen flex flex-col'>
      <Header2 />
      <div className="p-4">
      <RoboIcon message="Please answer the following question so I can understand your priorities…" />
      <h1 className="text-3xl font-bold mb-4 mt-10 justify-between">What is your biggest financial priority right now?</h1>
      <div className='flex flex-col mt-12'>
      {priorities.map((priority, index) => (
        <button
          key={index}
          className={`w-full p-4 mb-2 rounded ${selectedPriority === priority ? 'bg-[#EF5350] text-white' : 'bg-white border'}`}
          onClick={() => setSelectedPriority(priority)}
        >
          {priority}
        </button>
      ))}
      </div>
      
      <div className="flex justify-between mt-7 mb-2">
        <Link href="/risk-profile" className="bg-gray-300 text-black px-4 py-2 rounded">Back</Link>
        <Link href="/investment-recommendation" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continue</Link>
      </div>
    </div>
    </div>
  )
}