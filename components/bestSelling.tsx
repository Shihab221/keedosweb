import React from 'react'
import { ProductsData } from '@/constant'
import HorizontalCard from './horizontalCard'
const BestSelling = () => {
  return (
    <div>
      <h4>Best Selling</h4>
      <div>
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
