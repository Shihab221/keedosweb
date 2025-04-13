import Image from 'next/image'
import React from 'react'
import logo from "../public/images/logo2.png"
import { FaSearch } from "react-icons/fa"
import { FaCartArrowDown } from 'react-icons/fa'
import { BiArrowFromTop } from 'react-icons/bi'

const navbarData = [
    {title:"Home", url:"#" },
    {title:"Best Sellers", url:"#" },
    {title:"New Arrival", url:"#" },
    {title:"Big sale", url:"#" },
    {title:"Clearance Sale", url:"#" },
    {title:"Discover", url:"#" },
    {title:"About Keedos", url:"#" },
]
const Navbar = () => {
  return (
    <div className='w-full px-10'>
      {/* search bar */}
      <div className='flex flex-row items-center justify-between py-4'>
        <Image 
        src={logo}
        alt='logo'
        width={100}
        height={100}
        className=''
        />
        <div className="relative w-2xl">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-6 py-2 w-full pl-10 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-violet-500 " size={20} />
        </div>
        <FaCartArrowDown size={30} className='text-purple-300 '/>
        <button className='bg-gradient-to-r from-violet-300 to-blue-300 text-white px-6 py-2 rounded-full cursor-pointer'>Sign In</button>
      </div>

      {/* navbar */}
      <div className='flex flex-row justify-between'>
        <div className='bg-neutral-900 flex flex-row justify-between items-center w-72'>
          <p className='text-center px-4 py-2'>Browse Categories</p>
          <BiArrowFromTop size={16} className='text-white mx-4'/>
        </div>

        <div className='flex flex-row justify-between w-full sm:pl-20'>
          {navbarData.map((item, index) => (
            <div key={index} className='flex flex-row items-center justify-between py-2'>
                <p className='text-neutral-900 font-semibold text-md'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Navbar
