import React from 'react'
import Avatar from '@mui/material/Avatar';

function OnListeMessage({image, nom, message}) {
  return (
    <div>
        <div className='flex space-x-5 w-full cursor-pointer hover:bg-gray-100  bg-[#E0BFCC] p-5 '>
            <div >
                <Avatar alt="Remy Sharp" src={image} sx={{ width: 56, height: 56 }} />
            </div>
            <div className='text-black'>
                <p className='font-bold'>{nom}</p>
                <p>{message}</p>
            </div>
            </div>
        <div className='bg-gray-300 h-px'></div>
    </div>
  )
}

export default OnListeMessage
