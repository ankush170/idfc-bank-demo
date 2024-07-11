'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import RoboIcon from './RoboIcon'

const FetchHoldings = () => {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [mfStatus, setMfStatus] = useState('pending')
  const [stocksStatus, setStocksStatus] = useState('pending')
  const [bondsStatus, setBondsStatus] = useState('pending')
  const [showContinue, setShowContinue] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          clearInterval(timer)
          return 100
        }
        return Math.min(oldProgress + 1, 100)
      })
    }, 50)

    setTimeout(() => setMfStatus('fetching'), 1000)
    setTimeout(() => setMfStatus('fetched'), 2000)
    setTimeout(() => setStocksStatus('fetching'), 2500)
    setTimeout(() => setStocksStatus('fetched'), 3500)
    setTimeout(() => setBondsStatus('fetching'), 4000)
    setTimeout(() => {
      setBondsStatus('fetched')
      setShowContinue(true)
      setTimeout(() => {
        router.push('/heldaway-portfolio')
      }, 2000)
    }, 5000)

    return () => clearInterval(timer)
  }, [router])

  const getStatusIcon = (status: string) => {
    if (status === 'pending') return '🕒'
    if (status === 'fetching') return '⏳'
    if (status === 'fetched') return '✅'
  }

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <RoboIcon message="Hold on! Let me fetch your holdings..." />
      
      {!showContinue && (
        <div className="mt-8 mb-4">
          <div className="w-16 h-16 border-4 border-gray-200 border-dashed rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
        </div>
      )}
      
      <h2 className="text-xl font-bold mb-4">Fetching your heldaways</h2>
      
      <div className=''>
      <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mb-4">
        <div className="bg-[#EF5350] h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="w-full max-w-md">
        {['MF Holdings', 'stocks held', 'Bonds and other savings'].map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="mr-2">
              {getStatusIcon([mfStatus, stocksStatus, bondsStatus][index])}
            </span>
            <span>
              {[mfStatus, stocksStatus, bondsStatus][index] === 'fetched' ? 'Fetched' : 'Fetching'} {item}
            </span>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default FetchHoldings
