'use client'
import CardFavorite from '@/components/atom/cardFavorite/CardFavorite'
import React, { useEffect, useState } from 'react'
import getAllTasks from '@/api/getAllTasks.service'
import removeTasks from '@/api/removeTasks.service'

interface Task {
  id: string
  title: string
  message: string
  favorite?: boolean
  onRemoveTask: (taskId: string) => void
}

const ContainerFavorite = () => {
  const [favoriteTasksState, setFavoriteTasksState] = useState<Task[]>([])

  const fetchFavoriteTasks = async () => {
    try {
      const { favoriteTasks } = await getAllTasks()
      setFavoriteTasksState(favoriteTasks)
      console.log('update: ', favoriteTasks)
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
      <h6 className="md-1:w-[97%] md-0:w-[96%] sm-2:w-[94%] sm-1:w-[92%] w-[90%] text-left text-xs font-normal text-grey-5XX">
        Favoritas
      </h6>
      <div className="sm-0:flex-wrap sm-0:flex-row sm-0:justify-start flex w-full flex-col items-center justify-center gap-8">
        {favoriteTasksState.map((task) => (
          <CardFavorite
            key={task.id}
            title={task.title}
            message={task.message}
            favorite={task.favorite ?? false}
            taskId={task.id}
            onRemoveTask={() => handleRemoveTask(task.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default ContainerFavorite
