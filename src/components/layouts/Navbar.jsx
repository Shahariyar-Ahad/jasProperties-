"use client"
import React from 'react';
import Navlink from './buttons/Navlink';
import Image from 'next/image';

const Navbar = () => { 

  const nav = (
    <>
      <li className="relative group">
        <Navlink href={"/"} className="hover:text-orange-500 font-semibold transition-all duration-300 px-2 py-1">
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </Navlink>
      </li>

      <li className="dropdown dropdown-hover group">
        <div tabIndex={0} role="button" className="group-hover:text-orange-500 flex items-center gap-1 transition-all duration-300 font-semibold px-2 py-1 relative">
          <Navlink href={"/projects"}>Our Services</Navlink>
          <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </div>
        
        <ul className="dropdown-content menu bg-[#16191E]/95 backdrop-blur-2xl rounded-2xl z-[1] w-64 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 mt-4 animate-in fade-in slide-in-from-top-2">
          <li className="mb-1">
            <Navlink href={"/projects/completed"} className="hover:bg-orange-600/10 hover:text-orange-500 py-3 rounded-xl transition-all flex items-center gap-3">
              <span className="text-lg">🏢</span> Real-estate Projects
            </Navlink>
          </li>
          <li className="mb-1">
            <Navlink href={"/projects/interior"} className="hover:bg-orange-600/10 hover:text-orange-500 py-3 rounded-xl transition-all flex items-center gap-3">
              <span className="text-lg">🎨</span> Interior Design
            </Navlink>
          </li>
          <li>
            <Navlink href={"/projects/fabrication"} className="hover:bg-orange-600/10 hover:text-orange-500 py-3 rounded-xl transition-all flex items-center gap-3">
              <span className="text-lg">🏗️</span> Aluminum & Steel
            </Navlink>
          </li>
        </ul>
      </li>

      <li className="relative group">
        <Navlink href={"/about"} className="hover:text-orange-500 font-semibold transition-all duration-300 px-2 py-1">
          About Us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </Navlink>
      </li>

      <li className="relative group">
        <Navlink href={"/contact"} className="hover:text-orange-500 font-semibold transition-all duration-300 px-2 py-1">
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </Navlink>
      </li>
    </>
  );

  return (
   <div className="navbar sticky top-0 z-[100] bg-[#1A1D23]/90 backdrop-blur-md border-b border-white/5 px-4 md:px-10 h-24 transition-all rounded-4xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-[#0F1115] rounded-2xl z-[1] mt-3 w-64 p-4 shadow-2xl border border-white/10 text-white">
            {nav}
          </ul>
        </div>
        
       <div className="relative w-56 h-20 cursor-pointer hover:opacity-80 transition-opacity rounded-4xl">
  <Image
    src="/assets/jas.png"
    alt="JAS Properties Logo"
    fill
    className="object-contain"
    priority
  />
</div>
      </div>

      <div className="navbar-center hidden lg:flex text-slate-200">
        <ul className="menu menu-horizontal px-1 gap-8">
          {nav}
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="tel:01601230769"
          className="relative inline-flex items-center gap-2 px-7 py-3 font-bold text-white bg-[#C05621] rounded-full hover:bg-[#A04611] hover:scale-105 shadow-[0_10px_20px_rgba(192,86,33,0.2)] transition-all duration-300 active:scale-95 overflow-hidden"
        >
          <span className="flex items-center gap-2">
            <span className="animate-pulse">📞</span> Call Now
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;