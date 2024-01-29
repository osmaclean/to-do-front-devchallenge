'use client'
import CardAnother from '@/components/atom/cardAnother/CardAnother'
import React, { useEffect, useState } from 'react'
import getAllTasks from '@/api/getAllTasks.service'
import removeTasks from '@/api/removeTasks.service'
import { Task } from '../containerFavorite/ContainerFavorite'

interface AnotherProps {
  setNonFavoriteTasks: (tasks: Task[]) => void
  nonFavoriteTasks: Task[]
}

const Another: React.FC<AnotherProps> = ({
  setNonFavoriteTasks,
  nonFavoriteTasks,
}) => {
  const fetchNonFavoriteTasks = async () => {
    try {
      const { nonFavoriteTasks } = await getAllTasks()
      setNonFavoriteTasks(nonFavoriteTasks)
    } catch (error) {
      console.error(`Erro ao obter tarefas não favoritas: ${error}`)
      throw error
    }
  }

  const handleRemoveTask = async (taskId: string) => {
    try {
      await removeTasks(taskId)
      fetchNonFavoriteTasks()
    } catch (error) {
      console.error(`Error removing task: ${error}`)
    }
  }

  useEffect(() => {
    fetchNonFavoriteTasks()
  }, [])

  return (
    <section className="my-12 flex w-full flex-col items-center justify-center gap-2">
      <h6 className="w-[90%] text-left text-xs font-normal text-grey-5XX sm-1:w-[92%] sm-2:w-[94%] md-0:w-[96%] md-1:w-[97%]">
        Outras
      </h6>
      <div className="flex w-full flex-col items-center justify-center gap-8 sm-0:flex-row sm-0:flex-wrap sm-0:justify-start">
        {nonFavoriteTasks.map((task) => (
          <CardAnother
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

export default Another
