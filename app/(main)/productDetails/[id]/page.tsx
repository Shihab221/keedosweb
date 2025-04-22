"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { topProductsData } from '@/constant';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
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
            <p className='text-neutral-500 line-through text-md'>${product.originalPrice}</p>
            )}
          </div>
          <div className={`${product.discountBadgeColor} px-4 py-2 flex w-fit text-white`}>
            <p>{product.discount}</p>
          </div>

          <div className='flex flex-row items-center'>
            {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={14} className='text-yellow-500'/>
              ))}
               <p className='text-xs px-1'>({product.reviews})</p>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default page
