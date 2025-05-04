'use client'
import Image from 'next/image'
import React from 'react'
import profile from "../../../public/images/profile.jpg"
import { FaAddressBook, FaAddressCard, FaEdit, FaMap, FaStar } from 'react-icons/fa'
import { FaMapLocation, FaPerson, FaPersonFalling } from 'react-icons/fa6'
import { useState } from 'react'
const page = () => {
  const[activeTab,setActiveTab]=useState('profile');
  return (
    <div className='flex flex-col sm:flex-row gap-2 px-10 sm:px-20 py-10 text-neutral-900'>
      {/* left side user personal data */}
      <div className='flex flex-col w-full items-center sm:items-start sm:w-1/3'>
            <Image 
                src={profile}
                alt='user_image'
                width={250}
                height={250}
                className='  '
            />
            <div className='flex flex-col mt-6'>
                <p className='text-neutral-900 font-semibold text-xl'>Shihab Ahemed</p>
                <p className='text-sky-500 text-sm'>Platinum Customer</p>
                <div className='flex flex-row gap-2 items-center'>
                  <FaMapLocation size={16} />
                  <p>Jhenaidah , Bangladesh</p>
                </div>
                
                <p className='text-neutral-600 text-sm mt-6 '>Total Orders:<br/>
                <span className='text-xl font-semibold flex flex-row'>328
                    <span className='flex flex-row items-center px-2'>
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} size={18} className='text-sky-500'/>
                        ))}
                    </span>
                </span>
                
                </p>
                <p className='text-neutral-600 text-sm mt-4'>Total Spent:<br/>
                <span className='text-xl font-semibold'>$ 12,000</span>
                </p>
            </div>
           
      </div>

      {/* right side user statistics */}
      <div className='flex flex-col w-full '>
      <div className="flex space-x-4 mb-4 bg-sky-100  text-neutral-800 w-full">
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex flex-row gap-2 items-center ${activeTab === 'profile' ? 'text-sky-500 border-b border-sky-500' : 'text-neutral-800'}  px-2 py-2 cursor-pointer`}
        >
          <FaAddressCard size={20}/>
          Profile setup
        </button>
        <button
          onClick={() => setActiveTab('address')}
          className={`flex flex-row gap-2 items-center ${activeTab === 'address' ? 'text-sky-500 border-b border-sky-500' : 'text-neutral-800'}  px-2 py-2 cursor-pointer `}
        >
          <FaMap size={20}/>
          Address Profile
        </button>
      </div>
        
        
        {/* profile setup */}
        {activeTab === 'profile' && (
          <div className='flex flex-col gap-2 items-start'>
          <p className='font-semibold'>Shihab Ahmed</p>
          <p>E-mail: ashihab205@gmail.com</p>
          <p>Contact: +8801770716570</p>
          <p>Date of birth: 22nd November, 2003</p>
          <p> Password: *******</p>
          <button className='flex flex-row gap-2 cursor-pointer px-2 py-1 border border-sky-500 text-sky-500 bg-sky-100'>
            <FaEdit size={20}/>
            Edit
          </button>
        </div>
        )}
        

        {/* address profile */}
        {activeTab === 'address' && (
          <div className='flex flex-col gap-2 items-start'>
           <p>DEFAULT SHIPPING ADDRESS</p>
           <p className='font-semibold'>Shihab Ahemed</p>
           <p>House no - 0-687</p>
           <p>Jhenaidah, Bangladesh</p>
           <p>(+880)1770716570</p>
           <button className='flex flex-row gap-2 cursor-pointer px-2 py-1 border border-sky-500 text-sky-500 bg-sky-100'>
            <FaEdit size={20}/>
            Edit
          </button>
        </div>
      )}
      </div>
    </div>
  )
}

export default page
