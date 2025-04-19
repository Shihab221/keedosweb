import React from 'react'
import { footerLinksData } from '@/constant'
import Image from 'next/image'
import logo from '../public/images/logo2.png'
import footerimage from "../public/images/photo-trendy-baby-toys-playtime-accessories_933496-27548-removebg-preview.png"
const Footer = () => {
  return (
    <div className='flex flex-col px-20 pt-10 my-10'>

      <div className='flex flex-col sm:flex-row items-center'>
        <div className='mx-10 w-sm flex flex-col items-center sm:items-start mb-4'>
          <Image 
            src={logo}
            alt='logo'
            width={100}
            height={100}
            className='object-contain mb-4'
          />
          <p className='text-neutral-700'>Keedos Store 2/A, RA 7300 building,<br/>Jhenaidah - 7300, Khulna, Bangladesh. <br/>Must be 18 years to purchase online.</p>
        </div>

        <div className='text-neutral-900 flex flex-col md:flex-row items-center sm:items-start justify-between w-full gap-4'>
            {Object.entries(footerLinksData).map(([section,links],index)=>(
            <div key={index} className='flex flex-col gap-2'>
            <h3 className='font-bold mb-4'>{section}</h3>
              {links.map((item,subindex)=>(
            <p key={subindex}>{item}</p>
          ))}
          </div>
        ))}
      </div>
      </div>

    <div className='flex flex-row'>
      <Image 
          src={footerimage}
          alt='footerimage'
          width={300}
          height={300}
          className='object-contain '
        />
    </div>
    </div>
  )
}

export default Footer
