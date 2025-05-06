import React from 'react'
import { FaCamera } from "react-icons/fa";
import Button from './Button';

function ModalProfil() {
  return (
    <dialog id="my_modal_2" className="modal">
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl space-y-10">
          <div className="text-center">
            <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
              Modifier le profil
            </h2>
          </div>
          <div className='flex flex-col items-center gap-y-5'>
                <FaCamera size={'100px'} className='text-gray-200'/>
                <Button name={'Modifier'}/>
          </div>
        </div>
      </div>

    </div>
    </dialog>
  )
}

export default ModalProfil
