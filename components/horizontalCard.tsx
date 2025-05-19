"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
export interface ProductCardProps {
  id:number,
  title: string;
  price: number;
  rating: number;
  reviews: string;
  image: string;
  discount?: string;
  originalPrice?: number;
  
}
const HorizontalCard = ({title,price,reviews, image, discount}:ProductCardProps) => {
  return (
    <motion.div 
    className='flex flex-wrap text-neutral-900 w-[325px] '
    initial={{opacity:0 , y:50}}
    whileInView={{opacity:1 , y:0}}
    transition={{duration:0.3}}
    viewport={{once:true}}
    >
      <div className='flex flex-row items-center w-full bg-neutral-100 px-2 text-neutral-900 w-sm'>
        <Image 
            src={image}
            alt='product_image'
            width={100}
            height={100}
            className='object-contain w-24 h-24 p-4 bg-neutral-100'
        />
        <div className='flex flex-col gap-2'>
          <p>{title}</p>
          <div className='flex flex-row items-center'>
          {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} className='text-sky-500'/>
                  ))}
          <p className='text-xs px-1'>({reviews})</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default HorizontalCard
