'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import RoboIcon from './RoboIcon'

const FixPortfolio = () => {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [adjustStatus, setAdjustStatus] = useState('pending')
  const [diversifyStatus, setDiversifyStatus] = useState('pending')
  const [exitStatus, setExitStatus] = useState('pending')
  const [reinvestStatus, setReinvestStatus] = useState('pending')
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

    setTimeout(() => setAdjustStatus('fetching'), 1000)
    setTimeout(() => setAdjustStatus('fetched'), 2000)
    setTimeout(() => setDiversifyStatus('fetching'), 2500)
    setTimeout(() => setDiversifyStatus('fetched'), 3500)
    setTimeout(() => setExitStatus('fetching'), 4000)
    setTimeout(() => setExitStatus('fetched'), 4500)
    setTimeout(() => setReinvestStatus('fetching'), 5000)
    setTimeout(() => {
      setReinvestStatus('fetched')
      setShowContinue(true)
    }, 5500)

    return () => clearInterval(timer)
  }, [])

  const getStatusIcon = (status: string) => {
    if (status === 'pending') return '🕒'
    if (status === 'fetching') return '⏳'
    if (status === 'fetched') return '✅'
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <RoboIcon message="Hold on! let me fix your portfolio..." />
      {!showContinue && (
        <div className="mt-8 mb-4">
          <div className="w-16 h-16 border-4 border-gray-200 border-dashed rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
        </div>
      )}
      <h2 className="text-xl font-bold mb-4">Fixing your Portfolio</h2>

      <div className=''>
      <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
      </div>

        <div className="w-full max-w-md">
          {[
            'Adjusting your allocation',
            'Diversifying portfolio',
            'Exiting 1 fund',
            'Reinvesting Resources'
          ].map((item, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="mr-2">
                {getStatusIcon([adjustStatus, diversifyStatus, exitStatus, reinvestStatus][index])}
              </span>
              <span>
                {[adjustStatus, diversifyStatus, exitStatus, reinvestStatus][index] === 'fetched'
                  ? item.replace(/ing/, 'ed').replace('Exiting', 'Exited')
                  : item}
              </span>
            </div>
          ))}
        </div>
      </div>
      
        {showContinue && (
          <button
            onClick={() => router.push('/fixed-portfolio')}
            className="mt-8 bg-red-500 text-white px-6 py-2 rounded"
          >
            Continue
          </button>
        )}
    </div>
  )
}

export default FixPortfolio