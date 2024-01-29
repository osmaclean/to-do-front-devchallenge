'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import NavColor from '../navColor/NavColor'
import editFavorite from '@/api/editFavorite.service'
import updateTasks from '@/api/updateTasks.service'
import getAllTasks from '@/api/getAllTasks.service'

interface CardFavoriteProps {
  title: string
  message: string
  favorite?: boolean
  taskId: string
  onRemoveTask: (taskId: string) => void
  setFavoriteTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const CardFavorite: React.FC<CardFavoriteProps> = ({
  title,
  message,
  favorite = false,
  taskId,
  onRemoveTask,
  setFavoriteTasks,
}) => {
  const [isNavColorVisible, setIsNavColorVisible] = useState<boolean>(false)
  const [selectedBorderColor, setSelectedBorderColor] =
    useState<string>('border-grey-1XX')
  const [selectedBgColor, setSelectedBgColor] = useState<string>('bg-white')
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editedTitle, setEditedTitle] = useState<string>(title)
  const [editedMessage, setEditedMessage] = useState<string>(message)

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

  const fetchFavoriteTasks = async () => {
    try {
      const { favoriteTasks } = await getAllTasks()
      setFavoriteTasks(favoriteTasks)
    } catch (error) {
      console.error(`Error getting favorite tasks: ${error}`)
      throw error
    }
  }

  const handleEditClick = () => {
    setIsEditing(!isEditing)
  }

  const handleSaveClick = async () => {
    try {
      await updateTasks(taskId, {
        title: editedTitle,
        message: editedMessage,
        favorite,
      })
      fetchFavoriteTasks()

      // Finalizar o modo de edição
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating tasks:', error)
    }
    setIsEditing(false)
  }

  const styleFirstContainer = `sm-0:w-[24rem] relative flex h-[27rem] w-full flex-col items-center justify-start rounded-3xl border ${selectedBorderColor} ${selectedBgColor} pb-[.875rem] shadow-createTask`
  const styleDivisor = `h-[.08rem] w-full ${selectedBgColor === 'bg-white' ? 'bg-grey-1XX' : 'bg-white'}`

  return (
    <div className={styleFirstContainer}>
      <div className="flex w-[90%] items-center justify-between rounded-3xl">
        <h1 className="py-[.875rem] text-sm font-semibold">
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            editedTitle
          )}
        </h1>
        <Image
          width={16}
          height={16}
          onClick={() => {
            editFavorite(taskId)
            location.reload()
          }}
          src={favorite ? '/starYellow.png' : '/starGrey.png'}
          alt="Favorite Button"
          aria-label="Favorite Button"
          className="h-[1.188rem] w-[1.188rem] cursor-pointer duration-300 hover:scale-110"
        />
      </div>
      <div className={styleDivisor}></div>
      <span className=" mt-3 w-[90%] text-[.813rem] text-grey-4XX">
        {isEditing ? (
          <textarea
            value={editedMessage}
            onChange={(e) => setEditedMessage(e.target.value)}
            cols={3}
            rows={3}
          />
        ) : (
          editedMessage
        )}
      </span>
      <div className="absolute bottom-3 flex w-[90%] items-center justify-between ">
        <div className="flex items-center justify-center gap-3">
          <div
            onClick={isEditing ? handleSaveClick : handleEditClick}
            className="cursor-pointer rounded-2xl p-2 duration-300 hover:bg-orange-1XX"
          >
            <Image
              src="/pencil.png"
              alt="Edit Button"
              aria-label="Edit Button"
              width={24}
              height={24}
              className="h-[1.125rem] w-[1.125rem] cursor-pointer"
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
              className="h-[1.125rem] w-[1.125rem] cursor-pointer"
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
            className="h-[1.125rem] w-[1.125rem] cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default CardFavorite
