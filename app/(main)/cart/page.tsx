import { ProductsData } from '@/constant'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const  cartProducts = ProductsData.filter((item)=> item.category === 'top')
  return (
    <div className='px-10 sm:px-20 py-10 text-neutral-900 w-full flex flex-col sm:flex-row'>
      <div className='flex flex-col items-center gap-4 w-1/2'>
        {cartProducts.map((item,index)=>(
            <div className='flex flex-row gap-4 items-center justify-between w-full' key={index}>
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
            </div>
        ))}
      </div>
      <div>
        <h4>Checkout</h4>
      </div>
    </div>
  )
}

export default page
