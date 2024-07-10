"use client"

import { useState } from 'react'
import { Bars3Icon, ChevronLeftIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import SearchInput from './SearchInput'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { Button, IconButton } from '@material-tailwind/react'
import { useRouter } from 'next/navigation'

interface HeaderProps{
  title?: string
}

export default function Header({title}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="px-4 py-2 flex space-between items-center justify-between rounded-bl-header rounded-br-header shadow">
      <div className='flex items-center'>
        <IconButton variant='text' className='rounded-full' onClick={router.back}>
          <ChevronLeftIcon className="h-6 w-6 text-primary" />
        </IconButton>
        <div className='text-black'>{title}</div>
      </div>


      <IconButton variant='text' className='rounded-full'>
        <MagnifyingGlassIcon className='text-primary h-4 w-4' />
      </IconButton>
    </header>
  )
}