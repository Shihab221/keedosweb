"use client"
import { useState } from 'react'
import { ProductsData } from '@/constant'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const [quantity, setQuantity] = useState(1)
  const  cartProducts = ProductsData.filter((item)=> item.category === 'top')
  return (
    <div className='px-10 sm:px-20 py-10 text-neutral-900 w-full flex flex-col sm:flex-row justify-between'>
      
      {/* cart items */}
      <div className='flex flex-col items-center gap-4 w-2/3'>
        {cartProducts.map((item,index)=>(
            <div className='flex flex-row gap-4 items-center justify-between w-full bg-neutral-100 px-5' key={index}>
                <Image
                src={item.image}
                alt='product_image'
                width={100}
                height={100}
                className='w-[100px] h-[100px] object-contain'
                />
                <div>
                    <p>{item.title}</p>
                </div>

                {/* quantity */}
                <div className='flex flex-row gap-2 items-center'>
                  <button className='bg-red-500 text-white px-2 py-1' onClick={()=> setQuantity(quantity-1)}>-</button>
                  <p className='text-lg'>{quantity}</p>
                  <button className='bg-teal-500 text-white px-2 py-1' onClick={()=> setQuantity(quantity+1)}>+</button>
                </div>

               
                <p className=' text-start  '>${item.price}</p>
                <p className='font-semibold'>{quantity*item.price}</p>

            </div>
        ))}
      </div>
      
      {/* checkout */}
      <div className='bg-neutral-100 w-1/3 mx-10 px-5 py-2 flex flex-col '>
        <h4 className='text-end text-lg font-semibold border-b border-neutral-400 pb-2'>Checkout</h4>
        <div className='flex flex-row justify-between items-center border-b border-neutral-400  py-4'>
          <p className='text-md'>Subtotal:</p>
          <p className=''>${cartProducts.reduce((acc, item) => acc + (item.price * quantity), 0)}</p>
        </div>
        <div className='py-4 flex flex-col justify-between  border-b border-neutral-400'>
          <h4 className='text-start'>Shipping:</h4>
          <div className='flex flex-col items-end'>
            <p>delivery in 3-5 days</p>
            <p className='text-sm text-neutral-400'>Free shipping on orders over $50</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
