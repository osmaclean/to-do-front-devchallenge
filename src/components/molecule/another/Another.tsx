'use client'
import CardAnother from '@/components/atom/cardAnother/CardAnother'
import React, { useEffect, useState } from 'react'
import getAllTasks from '@/api/getAllTasks.service'

interface Task {
  id: string
  title: string
  message: string
  favorite?: boolean
}

const Another = () => {
  const [nonFavoriteTasksState, setNonFavoriteTasksState] = useState<Task[]>([])

  useEffect(() => {
    const fetchNonFavoriteTasks = async () => {
      try {
        const { nonFavoriteTasks } = await getAllTasks()
        setNonFavoriteTasksState(nonFavoriteTasks)
      } catch (error) {
        console.error(`Erro ao obter tarefas não favoritas: ${error}`)
        throw error
      }
    }
    fetchNonFavoriteTasks()
  }, [])

  return (
    <section className="my-12 flex w-full flex-col items-center justify-center gap-2">
      <h6 className="md-1:w-[97%] md-0:w-[96%] sm-2:w-[94%] sm-1:w-[92%] w-[90%] text-left text-xs font-normal text-grey-5XX">
        Outras
      </h6>
      <div className="sm-0:flex-wrap sm-0:flex-row sm-0:justify-start flex w-full flex-col items-center justify-center gap-8">
        {nonFavoriteTasksState.map((task) => (
          <CardAnother
            key={task.id}
            title={task.title}
            message={task.message}
            favorite={task.favorite ?? false}
          />
        ))}
      </div>
    </section>
  )
}

export default Another
