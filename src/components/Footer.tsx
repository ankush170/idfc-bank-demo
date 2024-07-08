"use client"

import { HomeIcon, WalletIcon, ArrowsRightLeftIcon, BriefcaseIcon, QrCodeIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-[#EF5350] text-white p-4">
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <WalletIcon className="h-6 w-6" />
          <span className="text-xs">Accounts</span>
        </div>
        <div className="flex flex-col items-center">
          <ArrowsRightLeftIcon className="h-6 w-6" />
          <span className="text-xs">Pay</span>
        </div>
        <div className="flex flex-col items-center">
          <BriefcaseIcon className="h-6 w-6" />
          <span className="text-xs">Loan</span>
        </div>
        <div className="flex flex-col items-center">
          <QrCodeIcon className="h-6 w-6" />
          <span className="text-xs">Scan QR</span>
        </div>
      </div>
    </footer>
  )
}