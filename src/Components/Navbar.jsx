import React from 'react'
import { HiMenuAlt2 , HiUser, HiChat , HiSearch    } from "react-icons/hi";
import { IoSettingsSharp, IoLogOut     } from "react-icons/io5";


export default function Navbar({ onIconClick, sectionActive }) {

  return (
    <div className='absolute z-5 h-screen'>
    <div className=' h-screen bg-[#7E1037]  w-20 py-5 items-center flex flex-col justify-between shadow-sm shadow-black rounded-r-xl'>
        <div className='flex flex-col space-y-10 '>
          <div className='p-2 hover:border hover:border-white rounded-sm '>
            <HiMenuAlt2 size={'30px'} className='text-[#C14E77]'/>
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
    </div>
  )
}