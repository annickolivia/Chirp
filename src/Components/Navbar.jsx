import React from 'react'
import { HiMenuAlt2 , HiUser, HiChat , HiSearch    } from "react-icons/hi";
import { IoSettingsSharp, IoLogOut     } from "react-icons/io5";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Navbar({ onIconClick, sectionActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const Open = () => {
    setIsOpen(!isOpen);
  }

  return (
  
  <div 
  className='absolute z-5 h-screen'>
    <AnimatePresence>
    { isOpen ? (
    <div className=' h-screen bg-[#7E1037]  w-20 py-5 items-center flex flex-col justify-between shadow-sm shadow-black rounded-r-xl'>
        <div className='flex flex-col space-y-10 '>
          <div className='p-2 hover:border hover:border-white rounded-sm '>
            <HiMenuAlt2 onClick={Open} size={'30px'} className='text-[#C14E77]'/>
          </div>
          <div className='p-2  hover:border hover:border-white rounded-sm '>
            <HiUser onClick={() => onIconClick('profil')}  size={'30px'}  className={sectionActive === 'profil' ? 'text-white' : 'text-[#C14E77]'}/>
          </div>
          <div className='p-2  hover:border hover:border-white rounded-sm '>
            <HiChat onClick={() => onIconClick('liste')}  size={'30px'} className={sectionActive === 'liste' ? 'text-white' : 'text-[#C14E77]'}/>
          </div>
          <div className='p-2  hover:border hover:border-white rounded-sm '>
            <HiSearch onClick={() => onIconClick('search')}  size={'30px'} className={sectionActive === 'search' ? 'text-white' : 'text-[#C14E77]'}/>
          </div>
          <div className='p-2  hover:border hover:border-white rounded-sm '>
            <IoSettingsSharp  onClick={() => onIconClick('setting')} size={'30px'}  className={sectionActive === 'setting' ? 'text-white' : 'text-[#C14E77]'}/>
          </div>
           
        </div>
        <div className='p-2  hover:border hover:border-white rounded-sm '>
            <IoLogOut size={'30px'} className='text-[#C14E77]' />
        </div>
    </div>  
    ) : (
      <motion.div 
        initial={{ x: '-10%', opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 1}}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
       className=' h-screen bg-[#7E1037] w-64 py-5 px-5 flex flex-col justify-between shadow-sm shadow-black rounded-r-xl'>
        <div className='flex flex-col space-y-10 '>
          <div className='p-2 rounded-sm '>
            <HiMenuAlt2 onClick={Open} size={'30px'} className='text-white cursor-pointer '/>
          </div>
          <div onClick={() => onIconClick('profil')} className='p-2 cursor-pointer  flex items-center text-xl space-x-4  hover:border hover:border-white rounded-sm '>
            <HiUser size={'30px'}  className={sectionActive === 'profil' ? 'text-white' : 'text-[#C14E77]'}/>
            <p className={sectionActive === 'profil' ? 'text-white' : 'text-[#C14E77]'}>Profil</p>
          </div>
          <div  onClick={() => onIconClick('liste')} className='p-2 cursor-pointer  flex items-center text-xl space-x-4  hover:border hover:border-white rounded-sm '>
            <HiChat onClick={() => onIconClick('liste')}  size={'30px'} className={sectionActive === 'liste' ? 'text-white' : 'text-[#C14E77]'}/>
            <p className={sectionActive === 'liste' ? 'text-white' : 'text-[#C14E77]'}>Message</p>
          </div>
          <div onClick={() => onIconClick('search')} className='p-2 cursor-pointer  flex items-center text-xl space-x-4 hover:border hover:border-white rounded-sm '>
            <HiSearch   size={'30px'} className={sectionActive === 'search' ? 'text-white' : 'text-[#C14E77]'}/>
            <p className={sectionActive === 'search' ? 'text-white' : 'text-[#C14E77]'}>Recherche</p>
          </div>
          <div onClick={() => onIconClick('setting')} className='p-2  cursor-pointer  flex items-center text-xl space-x-4 hover:border hover:border-white rounded-sm '>
            <IoSettingsSharp   size={'30px'}  className={sectionActive === 'setting' ? 'text-white' : 'text-[#C14E77]'}/>
            <p className={sectionActive === 'setting' ? 'text-white' : 'text-[#C14E77]'}>Paramètre</p>
          </div>
           
        </div>
        <div className='p-2 cursor-pointer  flex items-center text-xl space-x-4  hover:border hover:border-white rounded-sm '>
            <IoLogOut size={'30px'} className='text-[#C14E77]' />
            <p className='text-[#C14E77]'>Déconnexion</p>
        </div>
        </motion.div>
      )}  
      </AnimatePresence>
  </div>
  )
}