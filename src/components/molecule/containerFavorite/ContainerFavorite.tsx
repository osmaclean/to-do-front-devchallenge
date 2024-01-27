import CardFavorite from '@/components/atom/cardFavorite/CardFavorite'
import React from 'react'

const ContainerFavorite = () => {
  return (
    <section className="my-11 flex w-full flex-col items-center justify-center gap-2">
      <h6 className="text-grey-5XX w-[90%] text-left text-xs font-normal">
        Favoritas
      </h6>
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <CardFavorite />
        <CardFavorite />
      </div>
    </section>
  )
}

export default ContainerFavorite
