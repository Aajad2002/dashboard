import React, { useState } from 'react';
import { BsBell, BsChevronDown, BsList } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1a1f2d] text-white py-4 px-8">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-12">
          <h1 className="text-2xl font-bold tracking-wider">
            <span className="text-[#00ffcc]">H</span>OURS
          </h1>
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-[#00ffcc] font-medium">Dashboard</a>
            <a href="#" className="text-gray-400 hover:text-white">Projects</a>
            <a href="#" className="text-gray-400 hover:text-white">Team</a>
            <a href="#" className="text-gray-400 hover:text-white">Clients</a>
            <a href="#" className="text-gray-400 hover:text-white">Time</a>
            <a href="#" className="text-gray-400 hover:text-white">Reports</a>
          </nav>
        </div>

        {/* Icons and Profile */}
        <div className="hidden md:flex items-center space-x-8">
          <BsBell className="text-xl text-gray-400 cursor-pointer hover:text-white" />
          <div className="flex items-center space-x-3 cursor-pointer group">
            <img
              src="https://up.yimg.com/ib/th?id=OIP.0l7k5zqRUVQ5Yq9eTpW2LgHaLJ&pid=Api&rs=1&c=1&qlt=95&w=80&h=120"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-400 group-hover:text-white">Mario</span>
            <BsChevronDown className="text-gray-400 group-hover:text-white" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <BsList
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 py-4 px-6 bg-[#1a1f2d] border-t border-gray-700">
          <a href="#" className="text-[#00ffcc] font-medium">Dashboard</a>
          <a href="#" className="text-gray-400 hover:text-white">Projects</a>
          <a href="#" className="text-gray-400 hover:text-white">Team</a>
          <a href="#" className="text-gray-400 hover:text-white">Clients</a>
          <a href="#" className="text-gray-400 hover:text-white">Time</a>
          <a href="#" className="text-gray-400 hover:text-white">Reports</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
