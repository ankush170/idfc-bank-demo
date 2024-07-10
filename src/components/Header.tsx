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
    </header>
  )
}