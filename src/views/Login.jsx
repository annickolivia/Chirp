import React, { useState } from 'react';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import fond from '../assets/fond.png';


function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div  style={{ backgroundImage: `url(${fond})` }} className="w-full bg-cover h-[100vh] bg-cover bg-center flex flex-col  items-center justify-center mx-auto gap-y-20  ">
      <h2 className="text-[#7E1037] font-bold text-center text-5xl ">Connexion</h2>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-5 justify-center items-center' >

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-[#7E1037]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-sm  mt-2 border-2 border-[#7E1037] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre email"
              />
            </div>

        <div className='flex space-x-10'>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-[#7E1037]">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
               className="w-sm  mt-2 border-2 border-[#7E1037] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre mot de passe"
            />
          </div>

        </div>

        <button
          type="submit"
          className="cursor-pointer w-1/3 py-3 text-white font-semibold rounded-4xl h-14 bg-gradient-to-r from-[#7E1037] to-[#E41D64] hover:bg-gradient-to-l"
        >
          Se connecter
        </button>
        <div className='flex space-x-2 text-[#7E1037]'>
            <p className=''>Vous n'avez pas de compte? </p>
            <a href='' className='font-bold hover:text-[#E41D64]'>S'inscrire</a> 
        </div>
        <div className='flex items-center space-x-5'>
            <div class="w-56 h-px bg-gray-400"></div>
              <p className='font-bold text-[#7E1037]'>Ou</p>
            <div class="w-56 h-px bg-gray-400"></div>
        </div>
        <div className='flex space-x-10'>
            <div className='rounded-4xl border-[#7E1037] text-[#7E1037] border-2 px-14 py-3 cursor-pointer '>
              <FaFacebookF size={"30px"}/>
            </div>
            <div className='rounded-4xl border-[#7E1037] text-[#7E1037] border-2 px-15 py-3 cursor-pointer'>
              <FaGoogle size={"30px"}/>
            </div>
        </div>
        
      </form>
    </div>
  );
}

export default Login;
