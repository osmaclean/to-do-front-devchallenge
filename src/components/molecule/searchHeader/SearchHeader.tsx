import Image from 'next/image'
import React from 'react'

const SearchHeader = () => {
  return (
    <div className="w-[45%]">
      <label
        htmlFor="search"
        className="relative flex items-center justify-center"
      >
        <input
          type="text"
          id="search"
          className="border-grey-1XX placeholder:text-grey-2XX w-full rounded border p-1 text-[.563rem] outline-none placeholder:text-[.563rem] placeholder:font-normal"
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
  )
}

export default SearchHeader
