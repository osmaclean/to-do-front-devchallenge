import Image from 'next/image'
import React from 'react'

const CardFavorite = () => {
  return (
    <div className="sm-0:w-[24rem] relative flex h-[27rem] w-full flex-col items-center justify-start rounded-3xl border border-grey-1XX bg-white pb-[.875rem] shadow-createTask">
      <div className="flex w-[90%] items-center justify-between rounded-3xl">
        <h1 className="py-[.875rem] text-sm font-semibold">Teste</h1>
        <Image
          width={16}
          height={16}
          src="/starYellow.png"
          alt="Favorite Button"
          aria-label="Favorite Button"
          className="h-[1.188rem] w-[1.188rem] cursor-pointer duration-300 hover:scale-110"
        />
      </div>
      <div className="h-[.08rem] w-full bg-grey-1XX"></div>
      <span className=" mt-3 w-[90%] text-[.813rem] text-grey-4XX">
        Teste de descrição longa Teste de descrição longa Teste de descrição
        longa Teste de descrição longa Teste de descrição longa Teste de
        descrição longa Teste de descrição longa
      </span>
      <div className="absolute bottom-3 flex w-[90%] items-center justify-between ">
        <div className="flex items-center justify-center gap-3">
          <div className="hover:bg-orange-1XX cursor-pointer rounded-2xl p-2 duration-300">
            <Image
              src="/pencil.png"
              alt="Edit Button"
              aria-label="Edit Button"
              width={24}
              height={24}
              className="h-[1.125rem] w-[1.125rem] cursor-pointer"
            />
          </div>
          <div className="hover:bg-orange-1XX cursor-pointer rounded-2xl p-2 duration-300">
            <Image
              src="/bucket.png"
              alt="Color Button"
              aria-label="Color Button"
              width={24}
              height={24}
              className="h-[1.125rem] w-[1.125rem] cursor-pointer"
            />
          </div>
        </div>
        <div className="hover:bg-orange-1XX cursor-pointer rounded-2xl p-2 duration-300">
          <Image
            src="/x.png"
            alt="Remove Button"
            aria-label="Remove Button"
            width={24}
            height={24}
            className="h-[1.125rem] w-[1.125rem] cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default CardFavorite
