import React, { useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import Chat from '../Components/Chat.jsx'
import ListeMessage from '../Components/ListeMessage.jsx'
import Profil from '../Components/Profil';
import MyProfil from '../Components/MyProfil.jsx';
import Search from '../Components/Search.jsx'
import Setting from '../Components/Setting.jsx';
import { AnimatePresence } from 'framer-motion';

export default function Accueil() {
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleProfil = () => {
    setIsProfilOpen(!isProfilOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen); 
  }

  return (
    <div className='bg-radial-custom min-h-screen'>
        <Navbar fonctionMyprofil={toggleProfil} fonctionSearch={toggleSearch} />
      <div className='flex'>
      <AnimatePresence>
        {isProfilOpen && <MyProfil/>}
      </AnimatePresence>
        {isSearchOpen && <Search/>}
        <Chat/>
        <Profil/>
      </div>
    </div>
  )
}
