import React from 'react'
import ProductCard from './productCard'
import { topProductsData } from '@/constant'
import Link from 'next/link'

const TopDeals = () => {
  return (
    <div className='px-10 sm:px-20 py-10 text-neutral-900'>
      <h2 className='text-2xl font-bold mb-6'>Top deals just for you today</h2>
      <div className='flex flex-col sm:flex-row flex-wrap items-center justify-between  gap-4'>
        {topProductsData.map((item,index)=>(
          <Link href={`productDetails/${item.id}`} key={index}>
            <ProductCard 
            key={index}
            {...item}
            />
          </Link>
        ))}

      </div>
    </div>
  )
}

export default TopDeals
