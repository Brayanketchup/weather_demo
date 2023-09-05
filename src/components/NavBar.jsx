import React from 'react';
import NavLogo from './NavLogo';


const NavBar = ({currentLocationWheather}) => {

  return (

    <div className=' flex flex-row justify-between w-full p-5'>
      <NavLogo />
      <div onClick={currentLocationWheather} className="flex flex-row items-center bg-purple-600 p-2 rounded-full text-white hover:bg-purple-400 transition-colors">
        <img className=' h-5 m-2' src="src/assets/icons-location.png" alt="clog" />
        <h1 className="pl-1 hidden md:flex">Current Location</h1>
      </div>
    </div>
  )
}

export default NavBar