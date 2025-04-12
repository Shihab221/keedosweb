import Categories from '@/components/categories'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React from 'react'
import heroImage from "../../public/images/KeedosHero.jpg"
const page = () => {
  return (
    <div className='bg-white'>
      <Image
      src={heroImage}
      alt='hero_image'
      width={100}
      height={100}
      className='object-contain w-full'
      unoptimized
      />
      <Categories />
    </div>
  )
}

export default page
