'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import NavColor from '../navColor/NavColor'

interface CardFavoriteProps {}

const CardFavorite: React.FC<CardFavoriteProps> = () => {
  const [isNavColorVisible, setIsNavColorVisible] = useState<boolean>(false)
  const [selectedBorderColor, setSelectedBorderColor] =
    useState<string>('border-grey-1XX')
  const [selectedBgColor, setSelectedBgColor] = useState<string>('bg-white')

  const handleColorClick = () => {
    setIsNavColorVisible(!isNavColorVisible)
  }

  const handleColorChange = (borderColor: string, bgColor: string) => {
    setSelectedBorderColor(borderColor)
    setSelectedBgColor(bgColor)
  }

  const styleFirstContainer = `sm-0:w-[24rem] relative flex h-[27rem] w-full flex-col items-center justify-start rounded-3xl border ${selectedBorderColor} ${selectedBgColor} pb-[.875rem] shadow-createTask`
  const styleDivisor = `h-[.08rem] w-full ${selectedBgColor === 'bg-white' ? 'bg-grey-1XX' : 'bg-white'}`

  return (
    <div className={styleFirstContainer}>
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
      <div className={styleDivisor}></div>
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
          <div className="hover:bg-orange-1XX relative cursor-pointer rounded-2xl p-2 duration-300">
            <Image
              src="/bucket.png"
              alt="Color Button"
              aria-label="Color Button"
              onClick={handleColorClick}
              width={24}
              height={24}
              className="h-[1.125rem] w-[1.125rem] cursor-pointer"
            />
            {isNavColorVisible && (
              <NavColor onColorChange={handleColorChange} />
            )}
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
