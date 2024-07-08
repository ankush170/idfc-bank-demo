"use client"

import { useState } from 'react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-[#EF5350] text-white p-4 flex items-center">
      <Bars3Icon className="h-6 w-6 mr-4" />
      {isSearchOpen ? (
        <div className="flex-1 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-white text-black px-2 py-1 rounded-l"
          />
          <button 
            className="bg-white text-black px-2 py-1 rounded-r"
            onClick={() => setIsSearchOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-lg font-semibold flex-1 text-center">Hi Raj!</h1>
          <MagnifyingGlassIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsSearchOpen(true)}
          />
        </>
      )}
    </header>
  )
}