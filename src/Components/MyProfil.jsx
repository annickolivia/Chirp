import React from 'react'
import me from '../assets/me.jpg'
import Avatar from '@mui/material/Avatar';

export default function MyProfil() {
  return (
    <div className='ml-30 absolute h-screen flex flex-col items-center p-10 py-30 space-y-5 bg-red-500'>
        {/* profil */}
        <div>
            <Avatar alt="Remy Sharp" src={me} sx={{ width: 150, height: 150 }} />
        </div>
        {/* nom */}
       <div>
        <h1 className='font-bold text-3xl text-black'>Me</h1>
       </div>
        <div className='flex space-x-5'>
          <button className='w-40 py-3 bg-[#7E1037] hover:bg-[#B03E67] hover:-translate-y-1 transform transition duration-300 text-white rounded-lg cursor-pointer'>Modifier le profil</button>
          <button className='w-40 bg-[#7E1037] hover:bg-[#B03E67] hover:-translate-y-1 transform transition duration-300 text-white rounded-lg cursor-pointer'>Modifier les infos</button>
        </div>
    </div>
  )
}
