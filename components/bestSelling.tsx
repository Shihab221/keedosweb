import React from 'react'
import { ProductsData } from '@/constant'
import HorizontalCard from './horizontalCard'
const BestSelling = () => {
  return (
    <div className='px-10 sm:px-20 py-10 my-10'>
      <h4 className='text-2xl text-neutral-900 font-semibold pb-4'>Best Selling</h4>
      <div className='
      flex flex-col sm:flex-row gap-4 items-center justify-between flex-wrap'>
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

export default BestSelling
