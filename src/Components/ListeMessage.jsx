import React from 'react'
import emie from '../assets/emie.jpg'
import me from '../assets/me.jpg'
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';
import OnListeMessage from './OnListeMessage';

export default function ListeMessage() {
  return (
    <motion.div 
     initial={{ x: '-100%', opacity: 0 }}
     animate={{ x: 0, opacity: 1 }}
     exit={{ x: '-100%', opacity: 0 }}
     transition={{ duration: 0.5, ease: 'easeInOut' }}
     className='py-5 w-xl pl-20 absolute'>
        <OnListeMessage nom={'Emie'} image={emie} message={'Bonjour'}/>
        <OnListeMessage nom={'Moi'} image={me} message={'Bonjour toi'}/>        
    </motion.div>
    
  
  )
}
