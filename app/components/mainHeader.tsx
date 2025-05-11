"use client"; // Add this directive at the top

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/app/images/PropertyDrone-Logo.png";  // Adjust the path to your logo file

const MainHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle screen resize and detect mobile view
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkIfMobile();
        
        // Add event listener
        window.addEventListener('resize', checkIfMobile);
        
        // Clean up
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (!isMenuOpen) return;
        
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
                setIsMenuOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 w-full backdrop-blur-[28px]"
            style={{ zIndex: 1000 }}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between py-3 sm:py-4 z-50 bg-opacity-140">
                    {/* Logo container - made smaller on mobile */}
                    <div className="flex items-center space-x-2 sm:space-x-8 px-2 sm:px-4 py-2 sm:py-4 bg-[#FFFFFF80] backdrop-blur-[28px] bg-opacity-40 rounded-[4px]">
                        <Link href="/">
                            <Image 
                                src={logo} 
                                alt="Logo" 
                                width={isMobile ? 120 : 200} 
                                height={isMobile ? 60 : 100} 
                                className="max-h-12 sm:max-h-none" 
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-6 px-6">
                            <a href="/" className="text-black hover:text-[#172747] hover:underline hover:underline-[#172747]">
                                Home
                            </a>
                            <a href="aboutus" className="text-black hover:text-[#172747] hover:underline hover:underline-[#172747]">
                                About
                            </a>
                            <a href="properties" className="text-black hover:text-[#172747] hover:underline hover:underline-[#172747]">
                                Properties
                            </a>
                            <a href="developers" className="text-black hover:text-[#172747] hover:underline hover:underline-[#172747]">
                                Developer
                            </a>
                            <a href="services" className="text-black hover:text-[#172747] hover:underline hover:underline-[#172747]">
                                Services
                            </a>
                            <a href="blog" className="text-black hover:text-[#172747] hover:underline hover:underline-[#172747]">
                                Blog
                            </a>
                            <a href="career" className="text-black hover:text-[#172747] hover:underline hover:underline-[#172747]">
                                Career
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        {/* Hamburger menu for mobile */}
                        <button
                            className="md:hidden hamburger-button p-1 bg-[#FFFFFF80] border border-[#FFFFFF80] backdrop-blur-[18px] rounded-md"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-[#172747]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        {/* Contact button - smaller on mobile */}
                        <Link href="/contactus">
                            <button className="px-3 py-2 sm:px-4 sm:py-5 bg-[#172747] backdrop-blur-[8px] z-50 text-white hover:text-[#172747] rounded-[4px] hover:bg-[#FFFFFF80] text-sm sm:text-base">
                                CONTACT US
                            </button>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Navigation Menu - Slide out */}
                {isMenuOpen && (
                    <div className="md:hidden mobile-menu fixed top-[60px] left-0 right-0 bg-white shadow-lg animate-slideDown">
                        <div className="flex flex-col bg-[#FFFFFF] bg-opacity-95 backdrop-blur-[28px]">
                            <a href="/" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200">
                                Home
                            </a>
                            <a href="aboutus" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200">
                                About
                            </a>
                            <a href="properties" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200">
                                Properties
                            </a>
                            <a href="developers" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200">
                                Developer
                            </a>
                            <a href="services" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200">
                                Services
                            </a>
                            <a href="blog" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200">
                                Blog
                            </a>
                            <a href="career" className="text-[#172747] hover:bg-[#17274710] px-4 py-3">
                                Career
                            </a>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Add custom animation for mobile menu */}
            <style jsx global>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-slideDown {
                    animation: slideDown 0.2s ease-out forwards;
                }
            `}</style>
        </header>
    );
};

export default MainHeader;