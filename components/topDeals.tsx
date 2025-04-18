import React from 'react'
import ProductCard from './productCard'
import { topProductsData } from '@/constant'

const TopDeals = () => {
  return (
    <div className='px-10 py-10 text-neutral-900'>
      <h2 className='text-2xl font-bold mb-6'>Top deals just for you today</h2>
      <div className='flex flex-col sm:flex-row flex-wrap items-center justify-between  gap-4'>
        {topProductsData.map((item,index)=>(
            <ProductCard 
            key={index}
            {...item}
            />
        ))}

      </div>
    </div>
  )
}

export default TopDeals
