"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { topProductsData } from '@/constant';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Button from '@/components/button';
const colorsData = [
  "bg-gradient-to-r from-yellow-400 to-orange-700",
  "bg-gradient-to-r from-orange-500 to-red-500",
  "bg-gradient-to-r from-blue-500 to-purple-500",
  "bg-gradient-to-r from-purple-500 to-pink-500",
  "bg-gradient-to-r from-green-500 to-teal-500",
  "bg-gradient-to-r from-teal-500 to-green-500",
  "bg-gradient-to-r from-red-500 to-pink-500",
  "bg-gradient-to-r from-pink-500 to-red-500",
]
const page = () => {
    const params = useParams();
    const  id  = params?.id;
    const productId = Array.isArray(id) ? id[0] : id;
    if (!productId || isNaN(parseInt(productId, 10))) {
      return <p>Invalid product ID</p>;
    }
    const product = topProductsData.find((item)=> item.id === parseInt(productId,10));
   if(!product) {
    return <p>Product not found</p>;
   }
  return (
    <div className='px-10 py-10 sm:px-20 min-h-screen'>
      <div className='flex flex-col sm:flex-row gap-10'>
        <div className=''>
          <Image
          src={product.image}
          alt='product_image'
          width={200}
          height={200}
          className='w-[500px] h-[500px] object-contain'
          unoptimized
          />
        </div>
        
        <div className='text-neutral-900 flex flex-col gap-4'>
          <h2 className='font-semibold text-2xl'>{product.title}</h2>
          <div className='flex flex-row gap-4 items-center text-xl'>
            <p className='font-semibold'>${product.price}</p>
            {product.originalPrice && (
            <p className='text-neutral-500 line-through text-sm'>${product.originalPrice}</p>
            )}
          </div>
          <div className={`${product.discountBadgeColor} px-4 py-2 flex w-fit text-white`}>
            <p>{product.discount}</p>
          </div>

          <div className='flex flex-row items-center'>
            Rating: {" "}
            {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={14} className='text-yellow-500'/>
              ))}
               
          </div>
          <p className=''>Total reviews: {product.reviews}+</p>
            
          {/* select colors */}
          <div className='flex flex-row gap-4 items-center'>
            <h4 className='font-semibold'>Select Colors:</h4>
              {colorsData.map((color, index) => (
                <div  key={index}>
                  <div className={`w-12 h-12 ${color} rounded-full border-2 border-white cursor-pointer`} onClick={() => alert(`Selected color: ${color}`)}></div>        
                </div>
              ))}
          </div>

          <Button 
          text='Add to Cart'
          />
          <p className='text-sm text-neutral-800 text-justify'>
          {product.description}
        </p>
        </div>
        
      </div>
    </div>
  )
}

export default page
