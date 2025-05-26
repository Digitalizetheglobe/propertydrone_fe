"use client"; // Add this directive at the top

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/app/images/PropertyDrone-Logo.png";  // Adjust the path to your logo file

const MainHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
    const [menuAnimationState, setMenuAnimationState] = useState('closed');
    const menuRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownButtonRef = useRef<HTMLButtonElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                setIsFullMenuOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Handle dropdown click outside to close
    useEffect(() => {
        if (!isDropdownOpen) return;
        
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.dropdown-menu') && !target.closest('.dropdown-button')) {
                setIsDropdownOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    // Toggle menu with animation
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Toggle full menu
    const toggleFullMenu = () => {
        setIsFullMenuOpen(!isFullMenuOpen);
    };

    // Toggle dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Main navigation items with their display logic
    const navigationItems = [
        { name: 'Home', href: '/', alwaysShow: true },
        { name: 'About', href: '/about-us-real-estate-agency', alwaysShow: true },
        { name: 'Services', href: '/our-services-real-estate-services', alwaysShow: true },
        { name: 'Properties', href: '/our-properties-in-pune', alwaysShow: true },
        { name: 'Developers', href: '/estate_developer', alwaysShow: true },
        { name: 'Blog', href: 'blog', alwaysShow: false },
        { name: 'Career', href: 'career', alwaysShow: false }
    ];

    // Dropdown menu items (items that are not always shown)
    const dropdownItems = navigationItems.filter(item => !item.alwaysShow);

    return (
        <header className="fixed top-0 left-0  right-0 w-full bg-[#FFFFFF33] backdrop-blur-[28px] "
            style={{ zIndex: 1000 }}>
            <div className="max-w-6xl mx-auto lg:px-16">
               <nav className="flex items-center justify-between px-4 sm:px-0 py-3 sm:py-4 z-50 bg-opacity-140">

                    {/* Logo container - made smaller on mobile */}
                    <div className="flex items-center space-x-2 sm:space-x-8 px-2 sm:px-4 py-2 cursor-pointer sm:py-4 bg-[#FFFFFF80] backdrop-blur-[28px] bg-opacity-40 rounded-[4px]">
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
                        <div className="hidden cursor-pointer md:flex space-x-6 px-6">
                            {navigationItems
                                .filter(item => item.alwaysShow)
                                .map((item) => (
                                    <a 
                                        key={item.name} 
                                        href={item.href} 
                                        className="text-black hover:text-[#172747] hover:underline hover:underline-[#172747]"
                                    >
                                        {item.name}
                                    </a>    
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex items-center cursor-pointer space-x-3">
                        {/* More Button with Dropdown */}
                        <div className="relative">
                            <button
                                ref={dropdownButtonRef}
                                className=" hidden sm:flex dropdown-button pl-[16px] pr-[16px] py-5 bg-[#FFFFFF80] backdrop-blur-[18px] z-50 hover:bg-[#172747] hover:backdrop-blur-[8px] hover:text-white text-black rounded-[4px]"
                                onClick={toggleDropdown}
                                onMouseEnter={() => setIsDropdownOpen(true)}
                            >
                                {isDropdownOpen ? 'More ' : 'More '} <span className="ml-2">  ≡</span>
                            </button>

                            {/* Dropdown Menu */}
                            <div 
                                ref={dropdownRef}
                                className={`dropdown-menu absolute right-0 mt-1 w-48 ${isDropdownOpen ? 'block' : 'hidden'} bg-[#FFFFFF80] backdrop-blur-[28px] bg-opacity-40 rounded-[4px] shadow-lg z-50`}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                {dropdownItems.map((item) => (
                                    <a 
                                        key={item.name} 
                                        href={item.href} 
                                        className="block px-4 py-3 text-black hover:bg-[#17274710] hover:text-[#172747] transition-all duration-300"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                                <Link href={`/#filter-section`}>
                       <button className="hidden  cursor-pointer sm:flex p-3 sm:px-6 sm:py-5 bg-[#FFFFFF80] hover:bg-[#172747] hover:backdrop-blur-[8px] hover:text-white backdrop-blur-[18px] z-50 text-black rounded-[4px]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 sm:h-6 sm:w-6"
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

                        </Link>
                        <Link href="/contact-us-propertydrone-realty">
                            <button className="px-3 cursor-pointer py-2 sm:px-4 sm:py-5 bg-[#172747] backdrop-blur-[8px] z-50 text-white hover:text-black rounded-[4px] hover:bg-[#FFFFFF80] text-sm sm:text-base transition-all duration-300">
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
                    className={`md:hidden cursor-pointer mobile-menu fixed top-[60px] left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out overflow-hidden ${
                        menuAnimationState === 'closed' ? 'max-h-0 opacity-0 pointer-events-none' : 
                        menuAnimationState === 'closing' ? 'max-h-[400px] opacity-0 pointer-events-none' : 
                        menuAnimationState === 'opening' ? 'max-h-[400px] opacity-0' : 'max-h-[400px] opacity-100'
                    }`}
                >
                    <div className="flex flex-col cursor-pointer bg-[#FFFFFF] bg-opacity-95 backdrop-blur-[28px]">
                        {navigationItems.map((item) => (
                            <a 
                                key={item.name} 
                                href={item.href} 
                                className="text-[#172747] hover:bg-[#17274710] px-4 py-3 border-b border-gray-200 transform transition-all duration-300 hover:translate-x-2"
                            >
                                {item.name}
                            </a>
                        ))}
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
                
                /* Dropdown menu animations */
                .dropdown-menu {
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .dropdown-menu a {
                    position: relative;
                    overflow: hidden;
                }
                
                .dropdown-menu a::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #172747;
                    transition: width 0.3s ease;
                }
                
                .dropdown-menu a:hover::after {
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