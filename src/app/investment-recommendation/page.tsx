'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import RoboIcon from '@/components/RoboIcon'
import RecommendationDetails from '@/components/RecommendationDetails'
import AssetAllocation from '@/components/AssetAllocation'
import Header2 from '@/components/Header2'

export default function InvestmentRecommendation() {
  const router = useRouter()

  const handleInvestNowClick = () => {
    router.push('/consent')
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header2 />
      <div className="p-4">
        <RoboIcon message="Thank you for answering my questions! Now I have a much better understanding of your needs." />
        <h1 className="text-2xl font-bold mb-4">Here's your investment recommendation, Raj</h1>
        <RecommendationDetails />
        <AssetAllocation />
        <div className="flex justify-between mt-4">
          <Link href="/financial-priority" className="bg-gray-300 text-black px-4 py-2 rounded">Back</Link>
          <button 
            onClick={handleInvestNowClick} 
            className="bg-[#EF5350] text-white px-4 py-2 rounded"
          >
            Invest Now
          </button>
        </div>
      </div>
    </div>
  )
}