import Image from 'next/image'
import React from 'react'

const SearchHeader = () => {
  return (
    <div className="md-0.1:w-[33rem] w-[45%]">
      <label
        htmlFor="search"
        className="relative flex items-center justify-center"
      >
        <input
          type="text"
          id="search"
          className="sm-1:h-7 w-full rounded border border-grey-1XX p-1 text-[.563rem] shadow-createTask outline-none placeholder:text-[.563rem] placeholder:font-normal placeholder:text-grey-2XX"
          autoComplete="off"
          placeholder="Pesquisar notas"
        />
        <Image
          src="/search.png"
          alt="Search Button"
          aria-label="Search Button"
          width={24}
          className="absolute right-2 h-[.875rem] w-[.875rem] cursor-pointer duration-300 hover:scale-110"
          height={24}
        />
      </label>
    </div>
  )
}

export default SearchHeader
