import SearchHeader from '@/components/molecule/searchHeader/SearchHeader'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className="w-full">
        <nav className="sm-1:relative sm-1:justify-start sm-1:gap-8 flex h-14 w-full items-center justify-between bg-white px-6 py-4 shadow-header">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo Icon"
              aria-label="Logo Icon"
              width={24}
              height={24}
            />
            <h2 className="text-xs font-normal">CoreNotes</h2>
          </div>
          <SearchHeader />
          <Image
            className="sm-1:absolute sm-1:right-8 h-[.875rem] w-[.875rem]"
            alt="Cross"
            aria-label="Cross"
            src="/x.png"
            width={24}
            height={24}
          />
        </nav>
      </header>
    </>
  )
}

export default Header
