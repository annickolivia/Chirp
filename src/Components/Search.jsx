import React from 'react'
import { HiSearch  } from "react-icons/hi";
import { motion } from 'framer-motion';

export default function Search() {
  return (
    <motion.div 
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    className='absolute w-xl pl-30 text-black py-5 '>
      <div className='flex space-x-3'>
           <label className="relative block ">
             <span className="absolute inset-y-0 left-0 flex items-center text-gray-400 pl-2">
               <HiSearch size={'20px'}/>
             </span>
             <input className="w-100 text-black placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#7E1037] focus:ring-[#7E1037] focus:ring-1 sm:text-sm" placeholder="Rechercher..." type="text" name="search"/>
           </label>
       </div> 
    </motion.div>
  )
}
