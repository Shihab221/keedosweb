import React from 'react'

const Button = ({text,}) => {
  return (
    <div>
        <button className='px-8 py-4 rounded-full border-2 border-blue-300 font-semibold text-xl text-neutral-900 flex hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
            {text}
        </button>
    </div>
  )
}

export default Button
