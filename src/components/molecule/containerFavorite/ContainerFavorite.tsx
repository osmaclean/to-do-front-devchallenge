'use client'
import CardFavorite from '@/components/atom/cardFavorite/CardFavorite'
import React, { useEffect } from 'react'
import getAllTasks from '@/api/getAllTasks.service'
import removeTasks from '@/api/removeTasks.service'

export interface Task {
  id: string
  title: string
  message: string
  favorite?: boolean
  onRemoveTask: (taskId: string) => void
}

interface ContainerFavoriteProps {
  setFavoriteTasks: React.Dispatch<React.SetStateAction<Task[]>>
  favoriteTasks: Task[]
}

const ContainerFavorite: React.FC<ContainerFavoriteProps> = ({
  setFavoriteTasks,
  favoriteTasks,
}) => {
  const fetchFavoriteTasks = async () => {
    try {
      const { favoriteTasks } = await getAllTasks()
      setFavoriteTasks(favoriteTasks)
    } catch (error) {
      console.error(`Error getting favorite tasks: ${error}`)
      throw error
    }
  }

  const handleRemoveTask = async (taskId: string) => {
    try {
      await removeTasks(taskId)
      fetchFavoriteTasks()
    } catch (error) {
      console.error(`Error removing task: ${error}`)
    }
  }

  useEffect(() => {
    fetchFavoriteTasks()
  }, [])

  return (
    <section className="my-11 flex w-full flex-col items-center justify-center gap-2">
      <h6 className="w-[90%] text-left text-xs font-normal text-grey-5XX sm-1:w-[92%] sm-2:w-[94%] md-0:w-[96%] md-1:w-[97%]">
        Favoritas
      </h6>
      <div className="flex w-full flex-col items-center justify-center gap-8 sm-0:flex-row sm-0:flex-wrap sm-0:justify-start">
        {favoriteTasks.map((task) => (
          <CardFavorite
            key={task.id}
            title={task.title}
            message={task.message}
            favorite={task.favorite ?? false}
            taskId={task.id}
            onRemoveTask={() => handleRemoveTask(task.id)}
            setFavoriteTasks={setFavoriteTasks}
          />
        ))}
      </div>
    </section>
  )
}

export default ContainerFavorite
