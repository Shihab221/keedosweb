'use client'

import React, { useRef } from 'react'
import { categoriesData } from "../constant"
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const Categories = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className='px-5 sm:px-10 flex flex-col items-center my-10 w-full'>
      <div className='rounded-xl shadow-none sm:shadow-md px-0 sm:px-4 py-4 w-full sm:w-2/3'>
        <div className='flex flex-row items-center mb-4 justify-between'>
          <h2 className='text-neutral-900 font-bold text-2xl'>Top Categories</h2>
          <div className='flex flex-row justify-between gap-4'>
            <FaArrowLeft 
              className='text-neutral-900 text-2xl cursor-pointer' 
              onClick={() => scroll('left')} 
            />
            <FaArrowRight 
              className='text-neutral-900 text-2xl cursor-pointer' 
              onClick={() => scroll('right')} 
            />
          </div>
        </div>

        <div 
          ref={scrollRef}
          className='flex flex-row gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2'
        >
          {categoriesData.map((item, index) => (
            <Link href="#" key={index}>
              <div className='bg-neutral-100 rounded-xl p-4 shadow-md min-w-[160px]'>
                <Image 
                  src={item.image}
                  alt='categories_images'
                  width={100}
                  height={100}
                  className='w-[140px] h-[140px] object-contain'
                />
                <p className='text-neutral-900 text-center font-semibold '>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories




// import React from 'react'
// import {categoriesData} from "../constant"
// import Link from 'next/link'
// import Image from 'next/image'
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
// const Categories = () => {
//   return (
//     <div className='px-10 flex flex-col items-center my-10 w-full'>
//       <div className='rounded-xl shadow-xl  px-4 py-6 '>
      
//       <div className='flex flex-row items-center mb-4 justify-between'>
//       <h2 className='text-neutral-900 font-bold text-2xl '>Top Categories</h2>
//         <div className='flex flex-row justify-between gap-4'>
//         <FaArrowLeft className='text-neutral-900 text-2xl  right-10 top-10 cursor-pointer' size={20} />
//         <FaArrowRight className='text-neutral-900 text-2xl  right-10 top-10 cursor-pointer' size={20} />
//         </div>
//       </div>

//       <div className='flex flex-row w-full justify-center items-center gap-4'>
//         {categoriesData.map((item,index)=>(
//             <Link href="#" key={index}>
//                 <div className='bg-neutral-100 rounded-xl p-4 shadow-md' >
//                     <Image 
//                     src={item.image}
//                     alt='categories_images'
//                     width={100}
//                     height={100}
//                     className='w-[140px] h-[140px] object-contain '
//                     />
//                 <p className='text-neutral-900 text-center font-semibold '>{item.title}</p>
//                 </div>
//             </Link>
//         ))}
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Categories
