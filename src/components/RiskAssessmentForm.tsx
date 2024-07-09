'use client'

import { useState } from 'react'
import Link from 'next/link'

const RiskAssessmentForm = () => {
  const [risk, setRisk] = useState(50)
  const [gain, setGain] = useState(140)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setRisk(value)
    setGain(value * 2.8) // Adjust this multiplier as needed
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <span>I am willing to risk a loss of:</span>
        <span className="text-[#EF5350] font-bold">₹ {risk * 1000}</span>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <span>To potentially gain:</span>
        <span className="text-green-500 font-bold">₹ {Math.round(gain * 1000)}</span>
      </div>
      
      <div className="mb-4">
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500" 
            style={{width: `${(gain/280) * 100}%`}}
          ></div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#EF5350]" 
            style={{width: `${risk}%`}}
          ></div>
        </div>
      </div>

      <div className="mb-4 text-center text-sm text-gray-600">
        Both outcomes are equally likely
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={risk}
        onChange={handleSliderChange}
        className="w-full"
      />

      <div className="mt-8 flex justify-between">
        <Link href="/" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
          Back
        </Link>
        <Link href="/risk-profile" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Continue
        </Link>
      </div>
    </div>
  )
}

export default RiskAssessmentForm