"use client"
import React,{useState} from 'react'


const navbarData = [
    {title:"Home", url:"#" },
    {title:"Best Sellers", url:"#" },
    {title:"New Arrival", url:"#" },
    {title:"Big sale", url:"#" },
    {title:"Clearance Sale", url:"#" },
    {title:"Discover", url:"#" },
    {title:"About Keedos", url:"#" },
]
const Sidebar = () => {
const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
        
        {isOpen && (
          <div className='flex flex-col justify-between w-full '>
          {navbarData.map((item, index) => (
            <div key={index} className='flex flex-row items-center justify-between py-2 hover:font-semibold cursor-pointer'>
                <p className='text-neutral-900 text-md'>{item.title}</p>
            </div>
          ))}
        </div>
        )}
      
    </div>
  )
}

export default Sidebar
