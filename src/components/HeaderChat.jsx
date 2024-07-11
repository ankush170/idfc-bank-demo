"use client"

import { ChevronLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-white rounded-xl flex items-center justify-between p-4">
      <div className="flex items-center">
        <ChevronLeftIcon className="h-6 w-6 mr-2 text-[#9B1E26]" />
        <p className="text-sm text-[#222222]">Personal AI Assistant</p>
      </div>
      <MagnifyingGlassIcon className="h-6 w-6 text-[#9B1E26]" />
    </header>
  )
}