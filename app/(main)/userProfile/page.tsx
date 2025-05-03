import Image from 'next/image'
import React from 'react'
import profile from "../../../public/images/profile.jpg"
import { FaStar } from 'react-icons/fa'
const page = () => {
  return (
    <div className='flex flex-col sm:flex-row  items-center gap-2 px-20 py-10 text-neutral-900'>
      {/* left side user personal data */}
      <div className='w-full sm:w-1/3'>
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
      <div>
        stat
      </div>
    </div>
  )
}

export default page
