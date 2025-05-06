import React from 'react'
import me from '../assets/me.jpg'
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import ChangeProfil from './ChangeProfil';
import ModalProfil from './ModalProfil';



export default function MyProfil() {

  return (

    <motion.div 
      className=' p-20 pl-40 absolute h-screen flex flex-col items-center  space-y-5 '
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
        {/* profil */}
        <div>
            <Avatar alt="Remy Sharp" src={me} sx={{ width: 150, height: 150 }} />
        </div>
        {/* nom */}
       <div>
        <h1 className='font-bold text-3xl text-black'>Me</h1>
       </div>
        <div className='flex space-x-5'>
        <button onClick={()=>document.getElementById('my_modal_2').showModal()} className='w-40 py-3 bg-[#7E1037] hover:bg-[#B03E67] hover:-translate-y-1 transform transition duration-300 text-white rounded-lg cursor-pointer'>Modifier le Profil</button>
          <ModalProfil/>
          {/* <ChangeProfil/> */}
          <button onClick={()=>document.getElementById('my_modal_3').showModal()} className='w-40 py-3 bg-[#7E1037] hover:bg-[#B03E67] hover:-translate-y-1 transform transition duration-300 text-white rounded-lg cursor-pointer'>Modifier les infos</button>
           <Modal/>
        </div>
    </motion.div>
  )
}
