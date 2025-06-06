"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { ProductsData } from '@/constant';
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
const page = ({}) => {
    const params = useParams();
    const  id  = params?.id;
    const productId = Array.isArray(id) ? id[0] : id;
    if (!productId || isNaN(parseInt(productId, 10))) {
      return <p>Invalid product ID</p>;
    }
    const product = ProductsData.find((item)=> item.id === parseInt(productId,10));
   if(!product) {
    return <p>Product not found</p>;
   }
  return (
    <div className='px-10 py-10 sm:px-20 min-h-screen flex-col'>
      <div className='flex flex-col sm:flex-row gap-10 justify-evenly'>
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
        
        {/* Details section */}
        <div className='text-neutral-900 flex flex-col gap-4'>
          <h2 className='font-semibold text-2xl'>{product.title}</h2>
          <div className='flex flex-row gap-2 items-center text-xl border-b border-neutral-400 pb-4'>
            <p className='font-semibold'>${product.price}</p>
            {product.originalPrice && (
            <p className='text-neutral-500 line-through text-sm'>${product.originalPrice}</p>
            )}
          </div>

          {/* rating section */}
          <div className='pb-4 border-b border-neutral-400 flex flex-col gap-2'>
            {product.discount && (
              <div className={`${product.discountBadgeColor} px-4 py-2 flex w-fit text-white`}>
              <p>{product.discount}</p>
            </div>
            )}
            {product.badge && (
              <div className={`${product.badgeColor} px-4 py-2 flex w-fit text-white`}>{product.badge}</div>
            )}

            <div className='flex flex-row items-center'>
              Rating: {" "}
              {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={14} className='text-sky-500'/>
                ))}
                
            </div>
            <p className=''>Total reviews: {product.reviews}+</p>
          </div>
            
          {/* select colors and sizes*/}
          <div className='flex flex-col gap-4 items-start pb-4 border-b border-neutral-400'>
            <div className='flex flex-row items-center w-full gap-4 flex-wrap'>
            <h4 className=''>Select Colors:</h4>
              {colorsData.map((color, index) => (
                <div  key={index} className=''>
                  <div className={`w-12 h-12 ${color} rounded-full border-2 border-white cursor-pointer`} onClick={() => alert(`Selected color: ${color}`)}></div>        
                </div>
              ))}
            </div>
            <div className='flex flex-row items-center gap-4'>
            <h4>Select Size:</h4>
              {product.sizes && (product.sizes.map((size,index)=>(
                <div key={index} className='border-2 cursor-pointer'>
                    <p className='px-2 py-1'>{size}</p>
                </div>
              )))}
            </div>
          </div>

          <p className='text-sm text-neutral-800 text-justify'>
          {product.description}
        </p>
        </div>
        
      </div>

      <div className='flex flex-col gap-4'>
        <h4 className='font-semibold text-xl text-neutral-900'>Details:</h4>
        <p className='text-neutral-800 text-justify'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br/><br/>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </div>
  )
}

export default page
