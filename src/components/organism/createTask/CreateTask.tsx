'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const CreateTask = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const favoriteHandler = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <section className="md-0:w-[33rem] sm-1:w-[50%] mt-6 flex w-[85%] flex-col items-center justify-center rounded-3xl border border-grey-1XX bg-white pb-[.875rem] shadow-createTask">
      <div className=" flex w-[90%] items-center justify-between rounded-3xl">
        <input
          type="text"
          placeholder="Título"
          className="w-[80%] rounded-3xl py-[.875rem] text-sm font-semibold outline-none placeholder:text-sm placeholder:font-bold placeholder:text-black"
        />
        <Image
          width={16}
          height={16}
          src={isFavorite ? '/starYellow.png' : '/starGrey.png'}
          alt="Favorite Button"
          aria-label="Favorite Button"
          className="h-[1.188rem] w-[1.188rem] cursor-pointer duration-300 hover:scale-110"
          onClick={favoriteHandler}
        />
      </div>
      <div className="h-[.08rem] w-full bg-grey-1XX"></div>
      <textarea
        className="mt-3 w-[90%] resize-none text-[.813rem] text-grey-4XX outline-none placeholder:text-[.813rem] placeholder:font-normal placeholder:text-grey-4XX"
        placeholder="Criar nota..."
        cols={3}
        rows={3}
      />
    </section>
  )
}

export default CreateTask
