'use client'

import { useRouter } from 'next/navigation'
import RoboIcon from '@/components/RoboIcon'

export default function ConsentPage() {
  const router = useRouter()

  const handleNoClick = () => {
    router.back()
  }

  const handleYesClick = () => {
    router.push('/fetch-holdings')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <RoboIcon message="Help me consolidate your investments" />
        <p className="mt-4 mb-6 text-center">
          Before you invest more, would you like me to bring in your externally held assets so I can better understand the whole picture?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleNoClick}
            className="bg-gray-300 text-black px-6 py-2 rounded"
          >
            No
          </button>
          <button
            onClick={handleYesClick}
            className="bg-[#EF5350] text-white px-6 py-2 rounded"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}