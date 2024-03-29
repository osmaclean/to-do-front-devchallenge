'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import NavColor from '../navColor/NavColor'
import editFavorite from '@/api/editFavorite.service'

interface CardAnother {
  title: string
  message: string
  favorite?: boolean
  taskId: string
  onRemoveTask: (taskId: string) => void
}

const CardAnother: React.FC<CardAnother> = ({
  title,
  message,
  favorite = false,
  taskId,
  onRemoveTask,
}) => {
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

  const handleRemoveClick = async () => {
    try {
      onRemoveTask(taskId)
    } catch (error) {
      console.error('Error removing tasks:', error)
    }
  }

  const styleFirstContainer = `sm-0:w-[24rem] relative flex h-[27rem] w-full flex-col items-center justify-start rounded-3xl border ${selectedBorderColor} ${selectedBgColor} pb-[.875rem] shadow-createTask`
  const styleDivisor = `h-[.08rem] w-full ${selectedBgColor === 'bg-white' ? 'bg-grey-1XX' : 'bg-white'}`

  return (
    <div className={styleFirstContainer}>
      <div className="flex w-[90%] items-center justify-between rounded-3xl">
        <h1 className="py-[.875rem] text-sm font-semibold">{title}</h1>
        <Image
          width={16}
          height={16}
          onClick={() => {
            editFavorite(taskId)
            location.reload()
          }}
          src={!favorite ? '/starGrey.png' : '/starYellow.png'}
          alt="Favorite Button"
          aria-label="Favorite Button"
          className="h-[1.188rem] w-[1.188rem] cursor-pointer duration-300 hover:scale-110"
        />
      </div>
      <div className={styleDivisor}></div>
      <span className=" mt-3 w-[90%] text-[.813rem] text-grey-4XX">
        {message}
      </span>
      <div className="absolute bottom-3 flex w-[90%] items-center justify-between ">
        <div className="flex items-center justify-center">
          <div className="cursor-pointer rounded-2xl p-2 duration-300 hover:bg-orange-1XX">
            <Image
              src="/pencil.png"
              alt="Edit Button"
              aria-label="Edit Button"
              width={24}
              height={24}
              className="h-[1.125rem] w-[1.125rem]"
            />
          </div>
          <div
            onClick={handleColorClick}
            className="relative cursor-pointer rounded-2xl p-2 duration-300 hover:bg-orange-1XX"
          >
            <Image
              src="/bucket.png"
              alt="Color Button"
              aria-label="Color Button"
              width={24}
              height={24}
              className="h-[1.125rem] w-[1.125rem]"
            />
            {isNavColorVisible && (
              <NavColor onColorChange={handleColorChange} />
            )}
          </div>
        </div>
        <div
          onClick={handleRemoveClick}
          className="cursor-pointer rounded-2xl p-2 duration-300 hover:bg-orange-1XX"
        >
          <Image
            src="/x.png"
            alt="Remove Button"
            aria-label="Remove Button"
            width={24}
            height={24}
            className="h-[1.125rem] w-[1.125rem]"
          />
        </div>
      </div>
    </div>
  )
}

export default CardAnother
