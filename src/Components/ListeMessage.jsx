import React from 'react'
import me from '../assets/me.jpg'
import Avatar from '@mui/material/Avatar';

export default function ListeMessage() {
  return (
    <div className='py-5'>
        <div>
            <div className='flex space-x-5 w-100 bg-[#E0BFCC] p-5 '>
                <div >
                    <Avatar alt="Remy Sharp" src={me} sx={{ width: 56, height: 56 }} />
                </div>
                <div className='text-black'>
                    <p className='font-bold'>Emie</p>
                    <p>Message</p>
                </div>
                </div>
            <div className='bg-gray-300 h-px'></div>
        </div>
        <div>
            <div className='flex space-x-5 w-64  p-5'>
                <div >
                    <Avatar alt="Remy Sharp" src={me} sx={{ width: 56, height: 56 }} />
                </div>
                <div className='text-black'>
                    <p className='font-bold'>Emie</p>
                    <p>Message</p>
                </div>
                </div>
            <div className='bg-gray-300 h-px'></div>
        </div>
        <div>
            <div className='flex space-x-5 w-64  p-5'>
                <div >
                    <Avatar alt="Remy Sharp" src={me} sx={{ width: 56, height: 56 }} />
                </div>
                <div className='text-black'>
                    <p className='font-bold'>Emie</p>
                    <p>Message</p>
                </div>
                </div>
            <div className='bg-gray-300 h-px'></div>
        </div>
         <div>
            <div className='flex space-x-5 w-64  p-5'>
                <div >
                    <Avatar alt="Remy Sharp" src={me} sx={{ width: 56, height: 56 }} />
                </div>
                <div className='text-black'>
                    <p className='font-bold'>Emie</p>
                    <p>Message</p>
                </div>
                </div>
            <div className='bg-gray-300 h-px'></div>
        </div>
        
    </div>
    
  
  )
}
