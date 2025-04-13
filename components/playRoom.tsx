import React from 'react'
import Button from './button'
import Image from 'next/image'
import toysIcon from "../public/images/playingRoomIcon.png"
const PlayRoom = () => {
  return (
    <div
    style={{
        backgroundImage: `url('/images/playingRoom.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '75vh', // Full viewport height
        width: '100%', // Full width
    }}
    className='py-10 px-10'
    >
      <div className='px-20 bg-white flex flex-col w-full sm:w-1/2 h-full   items-start justify-center text-neutral-900'>
        <h2 className='text-4xl font-bold mb-4 mt-10'>The Play Room <br/>Needs an Overhual!</h2>
        <p className='text-justify text-neutral-700 text-lg'>Toys are scattered haphazardly, shelves are overflowing, and the overall atmosphere lacks the creativity and functionality that a playroom should provide.</p>
        <div className='flex flex-row my-5 items-center w-full justify-between'>
            <Button 
            text = "Shop Now"
            />
            <Image
            src={toysIcon}
            alt='icon_image'
            width={100}
            height={100}
            className='object-contain w-84 transform scale-x-[-1]'
            unoptimized
            
            />
        </div>
      </div>
    </div>
  )
}

export default PlayRoom
