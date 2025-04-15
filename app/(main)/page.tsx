import Categories from '@/components/categories'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React from 'react'
import heroImage from "../../public/images/KeedosHero.jpg"
import PopularToys from '@/components/popularToys'
import PlayRoom from '@/components/playRoom'
import Footer from '@/components/footer'
const page = () => {
  return (
    <div className='bg-white '>
      <Image
      src={heroImage}
      alt='hero_image'
      width={100}
      height={100}
      className='object-contain w-full'
      unoptimized
      />
      <Categories />
      <PopularToys />
      <PlayRoom />
      <Footer />
    </div>
  )
}

export default page
