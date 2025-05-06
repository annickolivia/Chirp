import React from 'react'

export default function Button({name}) {
  return (
    <div>
      <button className='w-40 py-3 bg-[#7E1037] hover:bg-[#B03E67] hover:-translate-y-1 transform transition duration-300 text-white rounded-lg cursor-pointer'>{name}</button>
    </div>
  )
}
