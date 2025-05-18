"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image';
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
    className='flex flex-col items-start rounded-lg text-neutral-900 '
    initial={{opacity:0 , y:50}}
    whileInView={{opacity:1 , y:0}}
    transition={{duration:0.3}}
    viewport={{once:true}}
    >
      <div className='flex flex-row justify-between items-center w-full bg-neutral-100 px-2 '>
        <Image 
            src={image}
            alt='product_image'
            width={100}
            height={100}
            className='object-contain w-[300px] h-[280px] p-4 bg-neutral-100'
        />
      </div>
    </motion.div>
  )
}

export default HorizontalCard
