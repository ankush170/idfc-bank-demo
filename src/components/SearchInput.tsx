'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

const SearchInput: React.FC = () => {
    return (
        <div className="border-b border-primary flex items-center p-1 flex-1">
            <MagnifyingGlassIcon className="text-primary" width="12" height="12" />
            <input className="focus:border-none focus:outline-none text-xs pl-2 flex-1" placeholder="Search for recent transactions" />
        </div>
    )
}

export default SearchInput