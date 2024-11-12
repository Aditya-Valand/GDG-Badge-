import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo1.png'; // Adjust the path according to your project structure

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#ffd427] font-sans text-black py-4 border-b-[3px] border-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="DevFest Logo" className="h-[50px] sm:h-[60px] w-[136px]" />
        </div>

        <div className="hidden sm:flex space-x-6">
          <a href="#" className="text-black hover:text-[#6e6a6a] transition my-2 duration-300 text-xl font-semibold">
            Home
          </a>
          <a href="#" className="text-black hover:text-[#6e6a6a] transition my-2 -mx-4 duration-300 text-xl font-semibold">
            Badge
          </a>
        </div>

        <button
          className="sm:hidden p-2 rounded-md hover:bg-[#f3c800] focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-[#ffd427] border-t-[3px] border-black py-4">
          <div className="container mx-auto flex flex-col space-y-4">
            <a href="#" className="text-black hover:text-[#6e6a6a] transition duration-300 text-xl font-semibold">
              Home
            </a>
            <a href="#" className="text-black hover:text-[#6e6a6a] transition duration-300 text-xl font-semibold">
              Badge
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;