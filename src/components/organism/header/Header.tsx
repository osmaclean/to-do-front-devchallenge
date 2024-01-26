import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className="w-full">
        <nav className="shadow-header flex h-10 w-full items-center justify-between bg-white px-6 py-4">
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
          <div>
            <label
              htmlFor="search"
              className="relative flex items-center justify-center"
            >
              <input
                type="text"
                id="search"
                className="border-grey-1XX placeholder:text-grey-2XX w-16 rounded border p-1 text-[.563rem] outline-none placeholder:text-[.563rem] placeholder:font-normal"
                autoComplete="off"
                placeholder="Pesquisar notas"
              />
              <Image
                src="/search.png"
                alt="Search Button"
                aria-label="Search Button"
                width={24}
                className="absolute right-2 h-[.875rem] w-[.875rem]"
                height={24}
              />
            </label>
          </div>
          <Image
            className="h-[.875rem] w-[.875rem]"
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
