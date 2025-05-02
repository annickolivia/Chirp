import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Chat from '../Components/Chat.jsx'
import ListeMessage from '../Components/ListeMessage.jsx'
import Profil from '../Components/Profil';
import MyProfil from '../Components/MyProfil.jsx';
import Search from '../Components/Search.jsx'
import Setting from '../Components/Setting.jsx';

export default function Accueil() {
  return (
    // <div className='bg-radial-custom min-h-screen flex space-x-5'>
    //   <Navbar/>
    //   <div className='space-x-5 ml-25'>
    //     <Chat/>
    //   </div>
    // </div>
    <div className='bg-radial-custom min-h-screen'>
        <Navbar/>
      <div className='flex'>
        <MyProfil/>
        <Chat/>
        <Profil/>
      </div>
    </div>
  )
}
