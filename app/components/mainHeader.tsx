"use client"; // Add this directive at the top

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/app/images/PropertyDrone-Logo.png";  // Adjust the path to your logo file

const MainHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full backdrop-blur-[28px]"
      style={{ zIndex: 1000 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between px-6 py-4 z-50 bg-opacity-140">
                    <div className="flex items-center space-x-8 px-4 py-4 border border-[#FFFFFF80] bg-[#FFFFFF80] backdrop-blur-[18px] bg-opacity-40 rounded-lg">
                        <Link href="/">
                            <Image src={logo} alt="Logo" width={200} height={100} />
                        </Link>

                        <div className="hidden md:flex space-x-6 px-6">
                            <a href="/" className="text-gray-700 hover:text-[#172747]">
                                Home
                            </a>
                            <a href="about" className="text-gray-700 hover:text-[#172747]">
                                About
                            </a>
                            <a href="services" className="text-gray-700 hover:text-[#172747]">
                                Services
                            </a>
                            <a href="properties" className="text-gray-700 hover:text-[#172747]">
                                Properties
                            </a>
                            {/* <a href="developer" className="text-gray-700 hover:text-[#172747]">
                                Developer
                            </a> */}
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button
                            className="px-5 py-5 bg-[#FFFFFF80] border border-[#FFFFFF80] backdrop-blur-[18px] z-50 hover:bg-[#172747] hover:backdrop-blur-[8px] hover:border hover:border-[#FFFFFF80] hover:text-white text-[#172747] rounded-lg"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            More <span className="ml-1">≡</span>
                        </button>

                        <button className="px-6 py-5 bg-[#FFFFFF80] border border-[#FFFFFF80] hover:bg-[#172747] hover:backdrop-blur-[8px] hover:border hover:border-[#FFFFFF80] hover:text-white backdrop-blur-[18px] z-50 text-[#172747] rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                        <Link href="/contactus">
                        <button className="px-4 py-5 bg-[#172747] backdrop-blur-[8px] border border-[#FFFFFF80]  z-50 text-white hover:text-[#172747] rounded-lg hover:bg-[#FFFFFF80]">
                            CONTACT US
                        </button>
                       </Link>
                    </div>
                </nav>
      </div>
    </header>
  );
};

export default MainHeader; 
