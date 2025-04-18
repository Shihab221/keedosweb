"use client"
import Image from 'next/image'
import React from 'react'
import {  FaStar } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import {motion} from 'framer-motion'
export interface ProductCardProps {
  id:number,
  title: string;
  price: number;
  rating: number;
  reviews: string;
  badge?: string;
  badgeColor?: string;
  discountBadgeColor?: string;
  image: string;
  discount?: string;
  originalPrice?: number;
}

const ProductCard = ({title, price, rating, reviews, badge, badgeColor, discountBadgeColor, image, discount, originalPrice}: ProductCardProps) => {
  return (
    <motion.div 
    className='flex flex-col items-start rounded-lg text-neutral-900 '
    initial={{opacity:0 , y:50}}
    whileInView={{opacity:1 , y:0}}
    transition={{duration:0.3}}
    viewport={{once:true}}
    >
      
       <div className='flex flex-row justify-between items-center w-full bg-neutral-100 px-2 py-3'>
            
            <div className='flex flex-row gap-2'>
              {discount && <p className={`text-xs rounded-xs px-2 py-1 text-white ${discountBadgeColor}`}>
                {discount}
              </p>}
              {badge && <p className ={`text-xs rounded-xs px-2 py-1 text-white ${badgeColor}`} >
              {badge}
              </p>}
            </div>
            <AiOutlineHeart size={18} className='mx-2 cursor-pointer' onClick={()=>(
              alert('Added to favourites')
            )}/>
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
        
        <div className='flex flex-row items-center gap-4 mt-2'>
          <p className='font-bold text-start text-lg '>${price}</p>
          {originalPrice && <p className='text-sm text-neutral-400 text-'>{originalPrice}</p>}
        </div>
        
      
    </motion.div>
  )
}

export default ProductCard
