import React from 'react'

export default function IconProfil({nom, icon }) {
  return (
    <div className='flex flex-col items-center space-y-2 cursor-pointer'>
        <div className='p-3 bg-[#7E1037] hover:bg-[#B03E67] text-white rounded-4xl'>{icon}</div>
        <p>{nom}</p>
    </div>
  )
}
