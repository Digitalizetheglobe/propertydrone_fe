"use client"; // Add this directive at the top

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/app/images/PropertyDrone-Logo.png";  // Adjust the path to your logo file

const MainHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [menuAnimationState, setMenuAnimationState] = useState('closed');
    const menuRef = useRef<HTMLDivElement>(null);

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

    // Handle menu open/close animations
    useEffect(() => {
        if (isMenuOpen) {
            setMenuAnimationState('opening');
            const timer = setTimeout(() => {
                setMenuAnimationState('open');
            }, 10); // Small delay to trigger the CSS transition
            return () => clearTimeout(timer);
        } else {
            if (menuAnimationState === 'open' || menuAnimationState === 'opening') {
                setMenuAnimationState('closing');
                const timer = setTimeout(() => {
                    setMenuAnimationState('closed');
                }, 300); // Match this with the CSS transition duration
                return () => clearTimeout(timer);
            }
        }
    }, [isMenuOpen]);

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

    // Toggle menu with animation
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                        {/* Contact button - smaller on mobile */}
                        <Link href="/contactus">
                            <button className="px-3 py-2 sm:px-4 sm:py-5 bg-[#172747] backdrop-blur-[8px] z-50 text-white hover:text-[#172747] rounded-[4px] hover:bg-[#FFFFFF80] text-sm sm:text-base transition-all duration-300">
                                CONTACT US
                            </button>
                        </Link>
                        <button
                            className="md:hidden hamburger-button p-1 bg-[#FFFFFF80] border backdrop-blur-[18px] rounded-[4px] transition-all duration-300"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <div className="hamburger-icon w-6 h-6 relative flex justify-center items-center">
                                <span className={`hamburger-line absolute w-5 h-0.5 bg-[#172747] transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                                <span className={`hamburger-line absolute w-5 h-0.5 bg-[#172747] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`hamburger-line absolute w-5 h-0.5 bg-[#172747] transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                            </div>
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation Menu with improved animations */}
                <div 
                    ref={menuRef}
                    className={`md:hidden mobile-menu fixed top-[60px] left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out overflow-hidden ${
                        menuAnimationState === 'closed' ? 'max-h-0 opacity-0 pointer-events-none' : 
                        menuAnimationState === 'closing' ? 'max-h-[400px] opacity-0 pointer-events-none' : 
                        menuAnimationState === 'opening' ? 'max-h-[400px] opacity-0' : 'max-h-[400px] opacity-100'
                    }`}
                >
                    <div className="flex flex-col bg-[#FFFFFF] bg-opacity-95 backdrop-blur-[28px]">
                        <a href="/" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200 transform transition-all duration-300 hover:translate-x-2">
                            Home
                        </a>
                        <a href="aboutus" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200 transform transition-all duration-300 hover:translate-x-2">
                            About
                        </a>
                        <a href="properties" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200 transform transition-all duration-300 hover:translate-x-2">
                            Properties
                        </a>
                        <a href="developers" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200 transform transition-all duration-300 hover:translate-x-2">
                            Developer
                        </a>
                        <a href="services" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200 transform transition-all duration-300 hover:translate-x-2">
                            Services
                        </a>
                        <a href="blog" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200 transform transition-all duration-300 hover:translate-x-2">
                            Blog
                        </a>
                        <a href="career" className="text-[#172747] hover:bg-[#17274710] px-4 py-3 transform transition-all duration-300 hover:translate-x-2">
                            Career
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Add custom animations for hover effects and transitions */}
            <style jsx global>{`
                /* Menu link hover animation */
                .mobile-menu a {
                    position: relative;
                    overflow: hidden;
                }
                
                .mobile-menu a::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #172747;
                    transition: width 0.3s ease;
                }
                
                .mobile-menu a:hover::after {
                    width: 100%;
                }
                
                /* Hamburger button animation */
                .hamburger-button:hover {
                    background-color: rgba(255, 255, 255, 0.9);
                    transform: scale(1.05);
                }
                
                /* Mobile menu transition */
                .mobile-menu {
                    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
                }
                
                /* Menu items staggered animation */
                .mobile-menu a {
                    transition: transform 0.3s ease, background-color 0.2s ease;
                }
            `}</style>
        </header>
    );
};

export default MainHeader;