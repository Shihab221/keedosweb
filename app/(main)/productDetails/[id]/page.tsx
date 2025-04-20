"use client"
import React from 'react'
import { useParams } from 'next/navigation'
const page = () => {
    const params = useParams();
    
  return (
    <div className='px-10 sm:px-20 min-h-screen'>
      <div className='text-neutral-900'>
        <p></p>
      </div>
    </div>
  )
}

export default page
