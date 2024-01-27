import Another from '@/components/molecule/another/Another'
import ContainerFavorite from '@/components/molecule/containerFavorite/ContainerFavorite'
import React from 'react'

const MainSection = () => {
  return (
    <main className="w-[85%]">
      <ContainerFavorite />
      <Another />
    </main>
  )
}

export default MainSection
