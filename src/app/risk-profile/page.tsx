import Image from 'next/image'
import Link from 'next/link'
import RoboIcon from '@/components/RoboIcon'
import RiskProfileDetails from '@/components/RiskProfileDetails'
import Header2 from '@/components/Header2'

export default function RiskProfile() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header2 />
      <div className="p-4">
      <RoboIcon message="Based on my understanding…" />
      <h1 className="text-2xl font-bold mb-4">Raj, you are an <span className="text-[#EF5350]">Explorer!</span></h1>
      <Image src="/knight_icon.png" width={100} height={100} alt="Knight Icon" className="mx-auto mb-4" />
      <RiskProfileDetails />
      <div className="flex justify-between mt-4">
        <Link href="/risk-assessment" className="bg-gray-300 text-black px-4 py-2 rounded">Back</Link>
        <Link href="/financial-priority" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continue</Link>
      </div>
    </div>
    </div>
  )
}