import React from 'react'
import { ProductsData } from '@/constant'
import HorizontalCard from './horizontalCard'

const TopRated = () => {
  return (
    <div className='py-10 my-10'>
      <h4 className='text-2xl text-neutral-900 font-semibold pb-4'>Top Rated</h4>
      <div className='
      flex flex-col sm:flex-row gap-2 items-center flex-wrap'>
        {ProductsData.map((item)=>(
            <HorizontalCard 
            {...item}
            key={item.id}
            />
        ))}
      </div>
    </div>
  )
}

export default TopRated
