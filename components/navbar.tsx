import Image from 'next/image'
import React from 'react'
import logo from "../public/images/logo2.png"

const navbarData = [
    {title:"", url:"" }
]
const Navbar = () => {
  return (
    <div className='w-full'>
      {/* search bar */}
      <div>
        <Image 
        src={logo}
        alt='logo'
        width={100}
        height={100}
        className=''
        />

        <input></input>
        <button className='bg-violet-200 text-neutral-900'>Sign In</button>
      </div>
        {/* navbar */}
      <div>
        
      </div>

    </div>
  )
}

export default Navbar
