import Button from '@/components/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='bg-neutral-100 w-full sm:w-1/3 flex flex-col gap-6 p-10 my-20'>
        <h4 className='font-semibold text-2xl text-neutral-900'>SignIn.</h4>
        <input type="text" placeholder='Enter your email' className='border border-gray-300  px-4 py-2 w-full  text-neutral-900 focus:outline-none focus:ring-2 focus:ring-violet-500 '/>
        <input type="password" placeholder='Enter your Password' className='border border-gray-300 px-4 py-2 w-full text-neutral-900 focus:outline-none focus:ring-2 focus:ring-violet-500'/>
        <div className='flex flex-row gap-2 justify-between items-center'>
          <div>
            <p className='text-sm text-neutral-900 '>Forgot Password?</p>
            <p className='text-sm text-neutral-500'>New to keedos? </p>
          </div>
            <Link href="/userSignup" className='text-blue-500 underline items-end'><button className='border px-2 py-1 border-blue-400 text-blue-400 bg-blue-50 cursor-pointer'>SignUp</button></Link>
        </div>
        
      </div>
    </div>
  )
}

export default page
