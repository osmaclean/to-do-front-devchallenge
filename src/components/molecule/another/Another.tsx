import CardAnother from '@/components/atom/cardAnother/CardAnother'
import React from 'react'

const Another = () => {
  return (
    <section className="my-12 flex w-full flex-col items-center justify-center gap-2">
      <h6 className="md-1:w-[97%] md-0:w-[96%] sm-2:w-[94%] sm-1:w-[92%] w-[90%] text-left text-xs font-normal text-grey-5XX">
        Outras
      </h6>
      <div className="sm-0:flex-wrap sm-0:flex-row sm-0:justify-start flex w-full flex-col items-center justify-center gap-8">
        <CardAnother />
        <CardAnother />
      </div>
    </section>
  )
}

export default Another
