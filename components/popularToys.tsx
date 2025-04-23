import React from 'react'
import { ProductsData } from '@/constant'
import ProductCard from './productCard'
import Button from './button'
import Link from 'next/link'

const PopularToys = () => {
  const popularProducts = ProductsData.filter((item)=> item.category === 'popular')
  return (
    <div className='px-10 sm:px-20 py-10 my-10'>
      <div className='mb-4 flex flex-col sm:flex-row justify-between items-center text-neutral-900'>
        <h2 className='text-2xl font-bold mb-4 '>Most Popular Toys</h2>
        <Button 
        text="Explore more"
        />
      </div>
      <div className='flex flex-col sm:flex-row  items-center justify-between flex-wrap'>
        {popularProducts.map((item) => (
            <Link href={`/productDetails/${item.id}`} key={item.id}>
            <ProductCard 
            key={item.id}
            {...item}
            // title={item.title}
            // price={item.price}
            // rating={item.rating}
            // reviews={item.reviews}
            // badge={item.badge}
            // badgeColor={item.badgeColor}
            // image={item.image}
            />
            </Link>
        ))}
      </div>
    </div>
  )
}

export default PopularToys
