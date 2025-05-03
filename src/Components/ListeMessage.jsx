import React from 'react'
import emie from '../assets/emie.jpg'
import me from '../assets/me.jpg'
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';

export default function ListeMessage() {
  return (
    <motion.div 
     initial={{ x: '-100%', opacity: 0 }}
     animate={{ x: 0, opacity: 1 }}
     exit={{ x: '-100%', opacity: 0 }}
     transition={{ duration: 0.5, ease: 'easeInOut' }}
     className='py-5 w-xl pl-20 absolute'>
        <div>
            <div className='flex space-x-5 w-full cursor-pointer hover:bg-gray-100  bg-[#E0BFCC] p-5 '>
                <div >
                    <Avatar alt="Remy Sharp" src={emie} sx={{ width: 56, height: 56 }} />
                </div>
                <div className='text-black'>
                    <p className='font-bold'>Emie</p>
                    <p>Message</p>
                </div>
                </div>
            <div className='bg-gray-300 h-px'></div>
        </div>
        <div>
            <div className='flex space-x-5 w-full cursor-pointer hover:bg-gray-100  p-5'>
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
            <div className='flex space-x-5 w-full cursor-pointer hover:bg-gray-100  p-5'>
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
            <div className='flex space-x-5 w-full cursor-pointer hover:bg-gray-100  p-5'>
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
        
    </motion.div>
    
  
  )
}
