import React from 'react'
import { HiLockClosed } from "react-icons/hi";
import { RiHistoryFill } from "react-icons/ri";
import { BiBlock } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function Setting() {
  return (
    <motion.div 
     initial={{ x: '-100%', opacity: 0 }}
     animate={{ x: 0, opacity: 1 }}
     exit={{ x: '-100%', opacity: 0 }}
     transition={{ duration: 0.5, ease: 'easeInOut' }}
     className='absolute w-xl pl-20 text-black py-5'>
        <div className='flex items-center space-x-5 w-full p-5 cursor-pointer hover:bg-gray-100'>
            <div className='text-black' >
                <HiLockClosed size={'30px'}/>
            </div>
            <div className='text-black font-semibold'>
                <p>Changer le mot de passe</p>
            </div>
            </div>
        <div className='bg-gray-300 h-px'></div>
        <div className='flex items-center space-x-5 w-full  p-5 cursor-pointer hover:bg-gray-100'>
            <div className='text-black' >
                <RiHistoryFill size={'28px'}/>
            </div>
            <div className='text-black font-semibold'>
                <p>Historique</p>
            </div>
            </div>
        <div className='bg-gray-300 h-px'></div>
        <div className='flex items-center space-x-5 w-full  p-5 cursor-pointer hover:bg-gray-100 '>
            <div className='text-black' >
                <BiBlock size={'30px'}/>
            </div>
            <div className='text-black font-semibold'>
                <p>Débloquer</p>
            </div>
            </div>
        <div className='bg-gray-300 h-px'></div>
        <div className='flex items-center space-x-5 w-full  p-5 cursor-pointer hover:bg-gray-100'>
            <div className='text-black' >
                <IoLogOut size={'30px'}/>
            </div>
            <div className='text-black font-semibold'>
                <p>Déconnexion</p>
            </div>
            </div>
        <div className='bg-gray-300 h-px'></div>
       
    </motion.div>
  )
}
