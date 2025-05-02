import React from 'react'
import { HiMenuAlt2 , HiUser, HiChat , HiSearch    } from "react-icons/hi";
import { IoSettingsSharp, IoLogOut     } from "react-icons/io5";


export default function Navbar({ fonctionMyprofil, fonctionSearch }) {

  return (
    <div className='absolute z-5 h-screen'>
    <div className=' h-[95vh] bg-[#7E1037] m-5 w-20 py-5 items-center flex flex-col justify-between rounded-lg'>
        <div className='flex flex-col space-y-10 '>
          <div className='p-2 hover:border hover:border-white rounded-sm '>
            <HiMenuAlt2 size={'30px'} className='text-[#C14E77]'/>
          </div>
          <div className='p-2  hover:border hover:border-white rounded-sm '>
            <HiUser onClick={fonctionMyprofil} size={'30px'} className='text-[#C14E77]'/>
          </div>
          <div className='p-2  hover:border hover:border-white rounded-sm '>
            <HiChat  size={'30px'} className='text-[#C14E77]'/>
          </div>
          <div className='p-2  hover:border hover:border-white rounded-sm '>
            <HiSearch onClick={fonctionSearch} size={'30px'} className='text-[#C14E77]'/>
          </div>
          <div className='p-2  hover:border hover:border-white rounded-sm '>
            <IoSettingsSharp size={'30px'} className='text-[#C14E77]'/>
          </div>
           
        </div>
        <div className='p-2  hover:border hover:border-white rounded-sm '>
            <IoLogOut size={'30px'} className='text-[#C14E77]' />
        </div>
    </div>    
    </div>
  )
}
