import Button from '@/components/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      Welcome to login page
      <Link href="/userSignup" className='text-blue-500 underline'><Button text='SignUp'/></Link>
      
    </div>
  )
}

export default page
