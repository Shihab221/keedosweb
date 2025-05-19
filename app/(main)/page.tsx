import Categories from '@/components/categories'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React from 'react'
import heroImage from "../../public/images/KeedosHero.jpg"
import PopularToys from '@/components/popularToys'
import PlayRoom from '@/components/playRoom'
import Footer from '@/components/footer'
import TopDeals from '@/components/topDeals'
import Head from 'next/head'
import BestSelling from '@/components/bestSelling'
import TopRated from '@/components/topRated'
const page = () => {
  return (
    
    <div className='bg-white '>
      <Head>
          <title>My Awesome Site</title>
          <meta name="description" content="This is my custom website" />

    </Head>
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
      <TopDeals />
      <div className='flex sm:flex-row flex-col px-10 sm:px-20 justify-between gap-4'>
        <div className=' w-full '>
          <BestSelling />
        </div>
        <div className='w-full '>
          <TopRated />
        </div>
      </div>
      
    </div>
  )
}

export default page
