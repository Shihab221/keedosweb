"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { topProductsData } from '@/constant';
const page = () => {
    const params = useParams();
    const  id  = params?.id;
    const productId = Array.isArray(id) ? id[0] : id;
    if (!productId || isNaN(parseInt(productId, 10))) {
      return <p>Invalid product ID</p>;
    }
    const product = topProductsData.find((item)=> item.id === parseInt(productId,10));
   
  return (
    <div className='px-10 sm:px-20 min-h-screen'>
      <div className='text-neutral-900'>
        <p>{product.title}</p>
      </div>
    </div>
  )
}

export default page
