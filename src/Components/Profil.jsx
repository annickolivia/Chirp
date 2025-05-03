import React from 'react'
import Avatar from '@mui/material/Avatar';
import emie from '../assets/emie.jpg'
import { HiChat , HiOutlineDotsHorizontal, HiVideoCamera, HiPhone , HiMinusCircle    } from "react-icons/hi";
import { IoWarning } from "react-icons/io5";

export default function Profil() {
  return (
    <div className='absolute right-0 flex flex-col items-center px-30 py-30 space-y-5'>
        {/* profil */}
        <div>
            <Avatar alt="Remy Sharp" src={emie} sx={{ width: 150, height: 150 }} />
        </div>
        {/* nom */}
       <div>
        <h1 className='font-bold text-3xl text-black'>Emie</h1>
       </div>

       {/* 4 icons */}
       <div className='flex space-x-5 '>
            <div className='flex flex-col items-center space-y-2'>
                <div className='p-3 bg-[#7E1037] hover:bg-[#B03E67] text-white rounded-4xl'><HiPhone  size={'35px'}/></div>
                <p>Appel</p>
            </div>
            <div  className='flex flex-col items-center space-y-2'>
                <div className='p-3 bg-[#7E1037] hover:bg-[#B03E67] text-white rounded-4xl'><HiChat  size={'35px'}/></div>
                <p>Message</p>
            </div>
            <div  className='flex flex-col items-center space-y-2'>
                <div className='p-3 bg-[#7E1037] hover:bg-[#B03E67] text-white rounded-4xl'><HiVideoCamera  size={'35px'}/></div>
                <p>Vidéo</p>
            </div>
            <div  className='flex flex-col items-center space-y-2'>
               <div className="dropdown dropdown-top p-3 bg-[#7E1037] hover:bg-[#B03E67] rounded-4xl cursor-pointer">
                  <HiOutlineDotsHorizontal className='text-white' size={'35px'} tabIndex={0} role="button" ></HiOutlineDotsHorizontal>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 mb-2 shadow-sm">
                    <li><a><HiMinusCircle  size={'25px'} />Bloquer</a></li>
                    <li><a><IoWarning size={'25px'}/>Signaler</a></li>
                  </ul>
                </div>
                <p>Plus</p>
            </div>
            
       </div>

    </div>
  )
}
