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
  const [sectionActive, setSectionActive] = useState(null);

  const toggleSection = (section) => {
    setSectionActive((prev) => (prev === section ? null : section));
  };

  return (
    <div className='bg-radial-custom min-h-screen'>
        <Navbar onIconClick={toggleSection} sectionActive={sectionActive} />
      <div className='flex'>

      <AnimatePresence>
          {sectionActive === 'profil' && <MyProfil />}
      </AnimatePresence>

      <AnimatePresence>
          {sectionActive === 'search' && <Search />}
      </AnimatePresence>

      <AnimatePresence>
          {sectionActive === 'setting' && <Setting />}
      </AnimatePresence>
      <AnimatePresence>
          {sectionActive === 'liste' && <ListeMessage />}
      </AnimatePresence>        
        <Chat/>
        <Profil/>
      </div>
    </div>
  )
}