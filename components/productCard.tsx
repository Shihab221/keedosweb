import Image from 'next/image'
import React from 'react'
import {  FaStar } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'

const ProductCard = ({title, price, rating, reviews, badge, badgeColor, image, discount, originalPrice}) => {
  return (
    <div className='flex flex-col items-start rounded-lg text-neutral-900 '>
      
       <div className='flex flex-row justify-between items-center w-full bg-neutral-100 px-2 py-3'>
            <p className ={`text-xs rounded-xs px-2 text-white ${badgeColor}`} >
            {badge}
            </p>
            <AiOutlineHeart size={16} className='mx-2'/>
       </div>
      <Image 
        src={image}
        alt='product_image'
        width={100}
        height={100}
        className='object-contain w-[300px] h-[280px] p-4 bg-neutral-100'
      />
        <p className='font-semibold mt-2'>{title}</p>
        <div className='flex flex-row items-center'>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={14} className='text-yellow-500'/>
        ))}
            <p className='text-xs px-1'>({reviews})</p>
        </div>
        <p className='font-bold text-start text-lg mt-2'>${price}</p>
      
    </div>
  )
}

export default ProductCard
