import Button from '@/components/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='bg-neutral-100 w-full sm:w-1/3 flex flex-col gap-2 p-10 my-20'>
        <h4 className='font-semibold text-2xl text-neutral-900'>SignUp</h4>
        <label className='text-sm text-neutral-900'>Full Name</label>
        <input type="text" placeholder='Enter your fullname' className='border border-gray-300  px-4 py-2 w-full  text-neutral-900 focus:outline-none focus:ring-2 focus:ring-violet-500 '/>
        <label className='text-sm text-neutral-900'>E-mail</label>
        <input type="text" placeholder='Enter your email' className='border border-gray-300  px-4 py-2 w-full  text-neutral-900 focus:outline-none focus:ring-2 focus:ring-violet-500 '/>
        <label className='text-sm text-neutral-900'>Mobile</label>
        <input type="text" placeholder='Enter your mobile number' className='border border-gray-300  px-4 py-2 w-full  text-neutral-900 focus:outline-none focus:ring-2 focus:ring-violet-500 '/>
        <label className='text-sm text-neutral-900'>Password</label>
        <input type="password" placeholder='Enter your Password' className='border border-gray-300 px-4 py-2 w-full text-neutral-900 focus:outline-none focus:ring-2 focus:ring-violet-500'/>
        <label className='text-sm text-neutral-900'>Confirm Password</label>
        <input type="password" placeholder='Confirm your Password' className='border border-gray-300 px-4 py-2 w-full text-neutral-900 focus:outline-none focus:ring-2 focus:ring-violet-500'/>
        <label className='text-sm text-neutral-900'>Gender</label>
        <select className='border border-gray-300 px-4 py-2 w-full text-neutral-900 focus:outline-none focus:ring-2 focus:ring-violet-500'>
          <option value="male">Male</option>  
          <option value="female">Female</option>
          <option value="fuck">Other (Fvck you LGTV)</option>    
        </select>

        <div className='flex flex-row gap-2 justify-between items-center pt-2'>
          <div>
            {/* <p className='text-sm text-neutral-900 '>Forgot Password?</p> */}
            <p className='text-sm text-neutral-500'>Already have an account? </p>
          </div>
            <Link href="/userLogin" className='text-blue-500 underline items-end'><button className='border px-2 py-1 border-blue-400 text-blue-400 bg-blue-50 cursor-pointer'>SignIn</button></Link>
        </div>
        
      </div>
    </div>
  )
}

export default page
