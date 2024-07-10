"use client"

import { useState } from 'react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import SearchInput from './SearchInput'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { Button, IconButton } from '@material-tailwind/react'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="p-4 flex space-between items-center">
      <IconButton variant='text' className='rounded-full'>
        <Bars3Icon className="h-6 w-6 text-primary" />
      </IconButton>

      <SearchInput />
      
      <IconButton variant='text' className='rounded-full'>
        <TfiHeadphoneAlt className='text-primary' />
      </IconButton>

      <IconButton variant='text' className='rounded-full'>
        <XMarkIcon className='text-primary h-4 w-4' />
      </IconButton>
      {/* {isSearchOpen ? (
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
      )} */}
    </header>
  )
}