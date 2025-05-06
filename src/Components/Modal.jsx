import React from 'react'
import { FaMapMarkerAlt, FaPen, FaPhoneAlt   } from "react-icons/fa";

export default function Modal() {
  return (
    <div>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                
                {/* formulaire des infos */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="mx-auto max-w-2xl">
                      <div className="text-center">
                        <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                          Modifier les infos
                        </h2>
                      </div>
                      <div className="mt-5 p-4 relative z-10 bg-white border border-gray-200 rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
                        <form>
                          <div className="mb-4 sm:mb-8">
                            <label for="hs-feedback-post-comment-name-1" className="flex items-center gap-x-1 block mb-2 text-sm font-medium dark:text-white">
                                <FaMapMarkerAlt size={'15px'}/>
                                Ajouter une ville
                            </label>
                            <input type="text" id="hs-feedback-post-comment-name-1" className="py-2.5  sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-[#B03E67] focus:outline-none focus:border-[#7E1037] focus:ring-[#7E1037] focus:ring-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Votre ville"/>
                          </div>

                          <div className="mb-4 sm:mb-8">
                            <label for="hs-feedback-post-comment-email-1" className="flex items-center gap-x-1 block mb-2 text-sm font-medium dark:text-white">
                                <FaMapMarkerAlt size={'15px'}/>
                                Ajouter un Pays
                            </label>
                            <input type="text" id="hs-feedback-post-comment-email-1" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-[#B03E67] focus:outline-none focus:border-[#7E1037] focus:ring-[#7E1037] focus:ring-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Votre pays"/>
                          </div>

                          <div className="mb-4 sm:mb-8">
                            <label for="hs-feedback-post-comment-email-1" className="flex items-center gap-x-1 block mb-2 text-sm font-medium dark:text-white">
                                <FaPhoneAlt  size={'15px'}/>
                                Tel
                            </label>
                            <input type="text" id="hs-feedback-post-comment-email-1" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-[#B03E67] focus:outline-none focus:border-[#7E1037] focus:ring-[#7E1037] focus:ring-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Votre numéro"/>
                          </div>

                          <div>
                            <label for="hs-feedback-post-comment-textarea-1" className="flex items-center gap-x-1 block mb-2 text-sm font-medium dark:text-white">
                                <FaPen size={'15px'}/>
                                Bio
                            </label>
                            <div className="mt-1">
                              <textarea id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows="3" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-[#7E1037] focus:outline-none focus:border-[#7E1037] focus:ring-[#7E1037] focus:ring-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Votre Bio"></textarea>
                            </div>
                          </div>

                          <div className="mt-6 grid">
                            <button type="submit" className="w-full py-3 bg-[#7E1037] hover:bg-[#B03E67] hover:-translate-y-1 transform transition duration-300 text-white rounded-lg cursor-pointer">Enregistrer</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
              </div>
            </dialog>
    </div>
  )
}
