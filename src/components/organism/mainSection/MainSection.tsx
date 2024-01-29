'use client'
import Another from '@/components/molecule/another/Another'
import ContainerFavorite, {
  Task,
} from '@/components/molecule/containerFavorite/ContainerFavorite'
import React, { useState } from 'react'

const MainSection = () => {
  const [favoriteTasks, setFavoriteTasks] = useState<Task[]>([])
  const [nonFavoriteTasks, setNonFavoriteTasks] = useState<Task[]>([])

  return (
    <main className="w-[85%]">
      <ContainerFavorite
        setFavoriteTasks={setFavoriteTasks}
        favoriteTasks={favoriteTasks}
      />
      <Another
        nonFavoriteTasks={nonFavoriteTasks}
        setNonFavoriteTasks={setNonFavoriteTasks}
      />
    </main>
  )
}

export default MainSection
