import React from 'react';
import logo from '../assets/logo1.png'; // Adjust the path according to your project structure

function Navbar() {
  return (
    <nav className="bg-[#ffd427] font-sans text-black py-4 border-b-[3px] border-black">
      <div className="container mx-auto flex justify-between items-center border-spacing-x-14">
        
        <div className="flex items-center">
          <img src={logo} alt="DevFest Logo" className="h-[50px] w-[136px]" /> {/* Adjust height/width as needed */}
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className=" text-black hover:text-[#6e6a6a] transition my-2  duration-300 text-xl font-semibold">Home</a>
          <a href="#" className="text-black hover:text-[#6e6a6a] transition my-2 -mx-4 duration-300 text-xl font-semibold">Badge</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
