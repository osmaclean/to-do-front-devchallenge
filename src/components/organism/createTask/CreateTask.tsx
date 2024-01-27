import Image from 'next/image'
import React from 'react'

const CreateTask = () => {
  return (
    <section className="border-grey-1XX shadow-createTask mt-6 flex w-[85%] flex-col items-center justify-center rounded-3xl border bg-white pb-[.875rem]">
      <div className=" flex w-[90%] items-center justify-between rounded-3xl">
        <input
          type="text"
          placeholder="Título"
          className="w-[80%] rounded-3xl py-[.875rem] text-sm font-semibold outline-none placeholder:text-sm placeholder:font-bold placeholder:text-black"
        />
        <Image
          width={16}
          height={16}
          src="/starGrey.png"
          alt="Favorite Button"
          aria-label="Favorite Button"
          className="h-[1.188rem] w-[1.188rem] cursor-pointer"
        />
      </div>
      <div className="bg-grey-1XX h-[.08rem] w-full"></div>
      <textarea
        className="text-grey-4XX placeholder:text-grey-4XX mt-3 w-[90%] resize-none text-[.813rem] outline-none placeholder:text-[.813rem] placeholder:font-normal"
        placeholder="Criar nota..."
        cols={3}
        rows={3}
      />
    </section>
  )
}

export default CreateTask
