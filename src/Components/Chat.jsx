import React from 'react'
import { IoMdSearch, IoIosSend } from "react-icons/io";
import { HiOutlineDotsHorizontal, HiPhotograph, HiLink , HiPhone, HiVideoCamera, HiMicrophone  } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";
import Response from './Response';
import Mymessage from './mymessqge';

export default function Chat() {
  return (
    <div className='w-full flex justify-center'>
      <div className='h-screen bg-white flex flex-col justify-between space-y-4 pt-8 w-[40vw] '>
        <div className='px-8 space-y-5'>
             {/* Rechercher la conversation */}
             <div className='flex space-x-3'>
                 <label className="relative block w-full">
                   <span className="absolute inset-y-0 left-0 flex items-center text-gray-400 pl-2">
                     <IoMdSearch size={'20px'}/>
                   </span>
                   <input className=" text-black placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#7E1037] focus:ring-[#7E1037] focus:ring-1 sm:text-sm" placeholder="Rechercher la conversation..." type="text" name="search"/>
                 </label>
                 <div className="dropdown dropdown-right bg-[#FFF7FA] hover:bg-gray-100 cursor-pointer rounded-sm ">
                      <HiOutlineDotsHorizontal className='text-[#7E1037]' size={'40px'} tabIndex={0} role="button" ></HiOutlineDotsHorizontal>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 ml-2 p-2 shadow-sm ">
                        <li className='flex'> 
                          <a><HiPhotograph size={'25px'}/>Images</a>
                        </li>
                        <li><a><HiLink size={'25px'}/>Liens</a></li>
                        <li><a><HiPhone size={'25px'}/>Appel</a></li>
                        <li><a><HiVideoCamera size={'25px'}/>Vidéo</a></li>
                      </ul>
                    </div>
                 </div>

             {/* affichage de message */}
             <div className='flex-1 overflow-y-auto p-4 space-y-2 '>
                <Mymessage message={'Bonjour'}/>
                <Response reponse={'Bonjour toi'}/>
             </div>
              
        </div>
       
        
        {/* ecrire un message */}
        <div className='flex  items-center gap-x-2 p-2'>
            <div className="dropdown dropdown-top dropdown-start p-3 bg-[#FFF7FA] hover:bg-gray-100 rounded-lg cursor-pointer">
              <AiOutlineLink className='text-[#7E1037]' size={'25px'} tabIndex={0} role="button" ></AiOutlineLink>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 mb-2 p-2 shadow-sm">
                <li><a><HiPhotograph size={'25px'}/>Envoyer une photo</a></li>
                <li><a><HiLink size={'25px'}/>Envoyer un lien</a></li>
                <li><a><HiMicrophone  size={'25px'}/>Envoyer un vocal</a></li>
              </ul>
            </div>

            <textarea
              className="text-black w-full p-3 rounded-lg border border-gray-300 focus:outline-none ffocus:outline-none focus:border-[#7E1037] focus:ring-[#7E1037] focus:ring-1  resize-none bg-gray-100"
              rows="1"
              placeholder="Message..."
            ></textarea>
            <div className=' p-3 bg-[#FFF7FA] hover:bg-gray-100 rounded-lg text-[#7E1037] cursor-pointer '>
                <IoIosSend size={'25px'}/>
            </div>
        </div>  
      </div>
  </div>
  )
}
