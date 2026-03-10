"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { User } from 'lucide-react';
import logo from "@/app/images/PropertyDrone-Logo.png";

const MainHeader: React.FC = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [menuAnimationState, setMenuAnimationState] = useState('closed');
    const menuRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownButtonRef = useRef<HTMLButtonElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [user, setUser] = useState<any>(null);

    // New states for dual header logic
    const [scrolled, setScrolled] = useState(false);
    const [canShowSecondHeader, setCanShowSecondHeader] = useState(false);

    // Check auth state on mount and route change
    useEffect(() => {
        const checkAuth = () => {
            const storedUser = localStorage.getItem('webuser');
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (e) {
                    console.error("Error parsing user data", e);
                    setUser(null);
                }
            } else {
                setUser(null);
            }
        };
        checkAuth();

        // Close all dropdowns on route change
        setIsDropdownOpen(false);
        setIsPropertiesDropdownOpen(false);
        setIsServicesDropdownOpen(false);
        setIsProfileDropdownOpen(false);
        setIsMenuOpen(false);
    }, [pathname]);

    // Handle screen resize, mobile check, scroll, and timer
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        // Scroll listener for switching headers
        const handleScroll = () => {
            // "first video section" typically implies the hero area. 
            // We use 700px as a threshold for when the first section is "over".
            setScrolled(window.scrollY > 700);
        };
        window.addEventListener('scroll', handleScroll);

        // Timer for the second header availability
        const timer = setTimeout(() => {
            setCanShowSecondHeader(true);
        }, 3000);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    // Handle dropdown click outside to close
    useEffect(() => {
        if (!isDropdownOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.dropdown-container')) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isDropdownOpen]);

    // Mobile menu animation logic
    useEffect(() => {
        if (isMenuOpen) {
            setMenuAnimationState('opening');
            setTimeout(() => setMenuAnimationState('open'), 10);
        } else if (menuAnimationState === 'open' || menuAnimationState === 'opening') {
            setMenuAnimationState('closing');
            setTimeout(() => setMenuAnimationState('closed'), 300);
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const mainNavItems = [
        // { name: 'Home', href: '/' },
        { name: 'About', href: '/about-us-real-estate-agency' },
        { name: 'Services', href: '/our-services-real-estate-services' },
        { name: 'NRI Corner', href: '/nri-corner' },
        { name: 'Properties', href: '/luxe-properties' },
        { name: 'Plots', href: '/plots' },
    ];

    const moreDropdownItems = [
        { name: 'Developers', href: '/estate_developer' },
        { name: 'Blog', href: '/blog' },
        { name: 'News & Articles', href: '/news' },
        { name: 'Real Estate Basic', href: '/real_estate_basic' },
        { name: 'Career', href: '/career' }
    ];

    const handleLogout = () => {
        localStorage.removeItem('webuser');
        setUser(null);
        window.location.href = '/';
    };

    const renderServicesDropdown = () => (
        <div className="absolute top-full left-0 w-[600px] bg-white rounded-xl shadow-xl overflow-hidden z-50 animate-fadeIn border border-gray-100 mt-2 flex">
            {/* Left Column: Services */}
            <div className="w-1/2 p-2 relative">
                <div className="text-gray-400 text-[10px] font-bold px-4 py-2 uppercase tracking-wider">Services</div>
                <Link href="/our-services-real-estate-services#residential-consulting" className="block px-4 py-2 text-sm text-[#172747] hover:bg-gray-50 rounded-lg font-medium" onClick={() => setIsServicesDropdownOpen(false)}>Residential Property Consulting</Link>
                <Link href="/our-services-real-estate-services#commercial-consulting" className="block px-4 py-2 text-sm text-[#172747] hover:bg-gray-50 rounded-lg font-medium" onClick={() => setIsServicesDropdownOpen(false)}>Commercial Property Consulting</Link>
                <Link href="/our-services-real-estate-services#sales-marketing" className="block px-4 py-2 text-sm text-[#172747] hover:bg-gray-50 rounded-lg font-medium" onClick={() => setIsServicesDropdownOpen(false)}>Real Estate Sales and Marketing</Link>
                <Link href="/our-services-real-estate-services#projects-contract" className="block px-4 py-2 text-sm text-[#172747] hover:bg-gray-50 rounded-lg font-medium" onClick={() => setIsServicesDropdownOpen(false)}>Projects Under Contract</Link>
                <Link href="/our-services-real-estate-services#projects-mandate" className="block px-4 py-2 text-sm text-[#172747] hover:bg-gray-50 rounded-lg font-medium" onClick={() => setIsServicesDropdownOpen(false)}>Projects on Mandate</Link>
                <Link href="/our-services-real-estate-services#property-management" className="block px-4 py-2 text-sm text-[#172747] hover:bg-gray-50 rounded-lg font-medium" onClick={() => setIsServicesDropdownOpen(false)}>Property Management</Link>
                {/* Vertical Divider Line */}
                <div className="absolute top-2 bottom-2 right-0 w-[1px] bg-gray-100"></div>
            </div>

            {/* Right Column: Tools */}
            <div className="w-1/2 p-2 bg-gray-50/50">
                <div className="text-gray-400 text-[10px] font-bold px-4 py-2 uppercase tracking-wider">Tools</div>
                <div className="space-y-1">
                    <Link href="/emi-calculator" className="block px-4 py-2 text-sm text-[#172747] hover:bg-white hover:shadow-sm transition-all rounded-lg font-medium" onClick={() => setIsServicesDropdownOpen(false)}>EMI Calculator</Link>
                    <Link href="/roi-calculator" className="block px-4 py-2 text-sm text-[#172747] hover:bg-white hover:shadow-sm transition-all rounded-lg font-medium" onClick={() => setIsServicesDropdownOpen(false)}>ROI Calculator</Link>
                    <Link href="/lrd-calculator" className="block px-4 py-2 text-sm text-[#172747] hover:bg-white hover:shadow-sm transition-all rounded-lg font-medium" onClick={() => setIsServicesDropdownOpen(false)}>LRD Calculator</Link>
                    <Link href="/irr-calculator" className="block px-4 py-2 text-sm text-[#172747] hover:bg-white hover:shadow-sm transition-all rounded-lg font-medium" onClick={() => setIsServicesDropdownOpen(false)}>IRR Calculator</Link>
                </div>
            </div>
        </div>
    );

    const renderProfileDropdown = () => (
        <div className="absolute top-full right-0 w-[220px] bg-white rounded-xl shadow-xl overflow-hidden z-50 animate-fadeIn border border-gray-100 mt-2 p-2">
            <Link href="/profile" className="block px-4 py-2 text-sm text-[#172747] hover:bg-gray-50 rounded-lg font-medium" onClick={() => setIsProfileDropdownOpen(false)}>My Profile</Link>
            <Link href="/saved-properties" className="block px-4 py-2 text-sm text-[#172747] hover:bg-gray-50 rounded-lg font-medium" onClick={() => setIsProfileDropdownOpen(false)}>Saved Properties</Link>
            <Link href="/compareproperties" className="block px-4 py-2 text-sm text-[#172747] hover:bg-gray-50 rounded-lg font-medium" onClick={() => setIsProfileDropdownOpen(false)}>Compare Properties</Link>
            <div className="h-[1px] bg-gray-100 my-1"></div>
            <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg font-medium">Logout</button>
        </div>
    );

    // Helper to render the Mega Menu content (used in both headers)
    const renderMegaMenu = () => (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1000px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 animate-fadeIn cursor-default border border-gray-100 flex mt-[2px]">
            {/* Invisible bridge */}
            <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>

            {/* Left Sidebar - Visual Calls to Action */}
            <div className="w-[30%] flex flex-col border-r border-gray-100">
                {/* Premium Block */}
                <Link href="/luxe-properties" className="flex-1 bg-[#172747] p-8 group/luxe flex flex-col justify-center relative overflow-hidden text-decoration-none" onClick={() => setIsPropertiesDropdownOpen(false)}>
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/luxe:opacity-20 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Luxe Property</h3>
                    <p className="text-blue-100 text-sm relative z-10 opacity-90">Explore our most exclusive premium listings.</p>
                    <div className="mt-4 flex items-center text-white font-medium text-sm group-hover/luxe:underline">
                        View Collection <span className="ml-2">→</span>
                    </div>
                </Link>

                {/* All Properties Block */}
                <Link href="/our-properties-in-pune" className="flex-1 bg-gray-50 p-8 group/all flex flex-col justify-center relative overflow-hidden hover:bg-gray-100 transition-colors text-decoration-none" onClick={() => setIsPropertiesDropdownOpen(false)}>
                    <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover/all:opacity-10 transition-opacity text-[#172747]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#172747] mb-2 relative z-10">All Property</h3>
                    <p className="text-gray-600 text-sm relative z-10">Browse our complete inventory of listings.</p>
                    <div className="mt-4 flex items-center text-[#172747] font-medium text-sm group-hover/all:underline">
                        Start Search <span className="ml-2">→</span>
                    </div>
                </Link>
            </div>

            {/* Right Content - Categorized Lists */}
            <div className="w-[70%] p-8 bg-white">
                <div className="grid grid-cols-3 gap-8">
                    {/* Column 1: Property Type */}
                    <div className="space-y-6">
                        <h3 className="text-gray-900 font-bold text-lg border-b border-gray-100 pb-2">Property Type</h3>
                        <div className="space-y-3">
                            <Link href="/our-properties-in-pune" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>Residential</Link>
                            <Link href="/commercial-properties" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>Commercial Properties</Link>
                            <Link href="/plots" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>Plots</Link>
                        </div>
                    </div>

                    {/* Column 2: Top Locations */}
                    <div className="space-y-6">
                        <h3 className="text-gray-900 font-bold text-lg border-b border-gray-100 pb-2">Top Locations</h3>
                        <div className="space-y-3">
                            <Link href="/our-properties-in-pune?location=Hinjewadi" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>Hinjewadi</Link>
                            <Link href="/our-properties-in-pune?location=Bandra West" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>Bandra West</Link>
                            <Link href="/our-properties-in-pune?location=Baner" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>Baner</Link>
                            <Link href="/our-properties-in-pune?location=Balewadi" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>Balewadi</Link>
                            <Link href="/our-properties-in-pune?location=Ravet" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>Ravet</Link>
                        </div>
                    </div>

                    {/* Column 3: BHK */}
                    <div className="space-y-6">
                        <h3 className="text-gray-900 font-bold text-lg border-b border-gray-100 pb-2">Search by BHK</h3>
                        <div className="space-y-3">
                            <Link href="/our-properties-in-pune?topology=1" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>1 RK / Studio</Link>
                            <Link href="/our-properties-in-pune?topology=1" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>1 BHK Flats</Link>
                            <Link href="/our-properties-in-pune?topology=2" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>2 BHK Flats</Link>
                            <Link href="/our-properties-in-pune?topology=3" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>3 BHK Flats</Link>
                            <Link href="/our-properties-in-pune?topology=4" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>4+ BHK Flats</Link>
                            <Link href="/our-properties-in-pune?category=Offices" className="block text-gray-600 hover:text-[#172747] hover:font-semibold transition-colors" onClick={() => setIsPropertiesDropdownOpen(false)}>Commercial Office</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Render the Mobile Menu (Shared)
    const renderMobileMenu = (customTop = "70px") => (
        <div
            className={`lg:hidden fixed left-0 right-0 bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-[999]`}
            style={{
                top: customTop,
                maxHeight: (menuAnimationState === 'open' || menuAnimationState === 'opening') ? '80vh' : '0',
                opacity: (menuAnimationState === 'open' || menuAnimationState === 'opening') ? 1 : 0
            }}
        >
            <div className="flex flex-col p-4 space-y-2">
                {[...mainNavItems, ...moreDropdownItems].map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="px-4 py-3 text-[#172747] hover:bg-gray-100 rounded-lg font-medium border-b border-gray-100 last:border-0"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
                    {user ? (
                        <Link href="/profile" className="px-4 py-2 text-center text-white font-bold bg-[#172747] rounded-lg">Profile</Link>
                    ) : (
                        <Link href="/signin" className="px-4 py-2 text-center text-[#172747] font-bold bg-gray-100 rounded-lg">Log In</Link>
                    )}
                    <Link href="/contact-us-propertydrone-realty" className="px-4 py-2 text-center text-white font-bold bg-[#172747] rounded-lg">Contact Us</Link>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* FIRST HEADER: Visible on First Section (Top) */}
            {!scrolled && (
                <header className="fixed top-0 left-0 right-0 w-full z-[1000] transition-colors duration-300">
                    <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-4">
                        <nav className="flex items-center justify-between">
                            {/* Logo with White Box */}
                            <div className="flex-shrink-0 cursor-pointer bg-white px-4 py-2 rounded-xl shadow-sm">
                                <Link href="/">
                                    <Image src={logo} alt="PropertyDrone Logo" width={isMobile ? 120 : 160} height={isMobile ? 40 : 50} className="object-contain" />
                                </Link>
                            </div>

                            {/* Nav Pills */}
                            <div className="hidden lg:flex items-start gap-2 relative">
                                {mainNavItems.map((item) => {
                                    if (item.name === 'Properties') {
                                        return (
                                            <div key={item.name} className="relative group static"
                                                onMouseEnter={() => setIsPropertiesDropdownOpen(true)}
                                                onMouseLeave={() => setIsPropertiesDropdownOpen(false)}
                                            >
                                                <Link href={item.href}>
                                                    <div className={`px-6 py-2 font-medium text-sm transition-all cursor-pointer border-b-0
                                                    ${isPropertiesDropdownOpen || pathname === item.href
                                                            ? 'bg-white text-[#172747] rounded-t-2xl rounded-b-none shadow-sm relative z-[60]'
                                                            : 'rounded-full bg-white/70 hover:bg-white backdrop-blur-md text-[#172747]'
                                                        }`}>
                                                        {item.name}
                                                    </div>
                                                </Link>
                                                {isPropertiesDropdownOpen && renderMegaMenu()}
                                            </div>
                                        );
                                    } else if (item.name === 'Services') {
                                        return (
                                            <div key={item.name} className="relative dropdown-container"
                                                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                                                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                                            >
                                                <Link href={item.href}>
                                                    <div className={`px-6 py-2 font-medium text-sm transition-all cursor-pointer border-b-0
                                                    ${isServicesDropdownOpen || pathname === item.href
                                                            ? 'bg-white text-[#172747] rounded-t-2xl rounded-b-none shadow-sm relative z-[60]'
                                                            : 'rounded-full bg-white/70 hover:bg-white backdrop-blur-md text-[#172747]'
                                                        }`}>
                                                        {item.name}
                                                    </div>
                                                </Link>
                                                {isServicesDropdownOpen && renderServicesDropdown()}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <Link key={item.name} href={item.href}>
                                                <div className={`px-6 py-2 rounded-full font-medium text-sm transition-all cursor-pointer
                                                ${pathname === item.href
                                                        ? 'bg-white text-[#172747] shadow-sm font-bold'
                                                        : 'bg-white/70 hover:bg-white backdrop-blur-md text-[#172747]'
                                                    }`}>
                                                    {item.name}
                                                </div>
                                            </Link>
                                        );
                                    }
                                })}

                                {/* More Dropdown */}
                                <div className="relative dropdown-container" ref={dropdownRef}
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className={`flex items-center gap-2 px-6 py-2 font-medium text-sm transition-all cursor-pointer outline-none
                                            ${isDropdownOpen
                                                ? 'bg-white text-[#172747] rounded-t-2xl rounded-b-none'
                                                : 'bg-white/70 text-[#172747] rounded-full hover:bg-white backdrop-blur-md'
                                            }`}
                                    >
                                        <span className="font-bold">☰</span> More
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute top-full right-0 bg-white rounded-b-2xl rounded-tl-2xl shadow-xl flex items-center py-4 px-6 gap-0 min-w-[500px] z-50 animate-fadeIn mt-[2px]">
                                            <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                                            {moreDropdownItems.map((item, index) => (
                                                <React.Fragment key={item.name}>
                                                    <Link href={item.href} className="text-[#172747] font-bold text-sm hover:text-blue-600 px-4 whitespace-nowrap" onClick={() => setIsDropdownOpen(false)}>
                                                        {item.name}
                                                    </Link>
                                                    {index < moreDropdownItems.length - 1 && <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="hidden lg:flex items-center gap-4">
                                {user ? (
                                    <div className="relative dropdown-container"
                                        onMouseEnter={() => setIsProfileDropdownOpen(true)}
                                        onMouseLeave={() => setIsProfileDropdownOpen(false)}
                                    >
                                        <div className="flex items-center gap-2 bg-white text-[#172747] px-6 py-2 rounded-xl shadow-sm font-bold hover:bg-gray-100 transition-all text-sm cursor-pointer">
                                            <User className="w-4 h-4" /> <span>Profile</span>
                                        </div>
                                        {isProfileDropdownOpen && renderProfileDropdown()}
                                    </div>
                                ) : (
                                    <Link href="/signin" className="bg-white text-black px-6 py-2 rounded-xl shadow-sm font-bold hover:bg-gray-100 transition-all text-sm">Log In</Link>
                                )}
                                <Link href="/contact-us-propertydrone-realty" className="bg-white text-black px-6 py-2 rounded-xl shadow-sm font-bold hover:bg-gray-100 transition-all text-sm">Contact Us</Link>
                            </div>

                            {/* Mobile Hamburger */}
                            <div className="lg:hidden">
                                <button className="p-2 text-white bg-white/20 rounded-md backdrop-blur-md" onClick={toggleMenu} aria-label="Toggle menu">
                                    <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                                        <span className={`block w-5 h-0.5 bg-white transform transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                        <span className={`block w-5 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                        <span className={`block w-5 h-0.5 bg-white transform transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                    </div>
                                </button>
                            </div>
                        </nav>
                    </div >
                    {renderMobileMenu()}
                </header >
            )}

            {/* SECOND HEADER: Visible after scrolling & 3 seconds (Solid Background) */}
            {
                scrolled && canShowSecondHeader && (
                    <header className="fixed top-0 left-0 right-0 w-full z-[1000] bg-white shadow-md transition-all duration-300">
                        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-4">
                            <nav className="flex items-center justify-between">
                                {/* Logo (No Box) */}
                                <div className="flex-shrink-0 cursor-pointer">
                                    <Link href="/">
                                        <Image src={logo} alt="PropertyDrone Logo" width={isMobile ? 120 : 160} height={isMobile ? 40 : 50} className="object-contain" />
                                    </Link>
                                </div>

                                {/* Nav Items (Clean Style) */}
                                <div className="hidden lg:flex items-start gap-2 relative">
                                    {mainNavItems.map((item) => {
                                        if (item.name === 'Properties') {
                                            return (
                                                <div key={item.name} className="relative group static"
                                                    onMouseEnter={() => setIsPropertiesDropdownOpen(true)}
                                                    onMouseLeave={() => setIsPropertiesDropdownOpen(false)}
                                                >
                                                    <Link href={item.href}>
                                                        <div className={`px-6 py-2 font-medium text-sm transition-all cursor-pointer border-b-0
                                                        ${isPropertiesDropdownOpen || pathname === item.href
                                                                ? 'bg-gray-100 text-[#172747] rounded-top-md'
                                                                : 'text-[#172747] hover:bg-gray-100 rounded-full'
                                                            }`}>
                                                            {item.name}
                                                        </div>
                                                    </Link>
                                                    {isPropertiesDropdownOpen && renderMegaMenu()}
                                                </div>
                                            );
                                        } else if (item.name === 'Services') {
                                            return (
                                                <div key={item.name} className="relative dropdown-container"
                                                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                                                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                                                >
                                                    <Link href={item.href}>
                                                        <div className={`px-6 py-2 font-medium text-sm transition-all cursor-pointer border-b-0
                                                        ${isServicesDropdownOpen || pathname === item.href
                                                                ? 'bg-gray-100 text-[#172747] rounded-top-md'
                                                                : 'text-[#172747] hover:bg-gray-100 rounded-full'
                                                            }`}>
                                                            {item.name}
                                                        </div>
                                                    </Link>
                                                    {isServicesDropdownOpen && renderServicesDropdown()}
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <Link key={item.name} href={item.href}>
                                                    <div className={`px-6 py-2 rounded-full font-medium text-sm transition-all cursor-pointer
                                                    ${pathname === item.href
                                                            ? 'bg-gray-100 text-[#172747] font-bold'
                                                            : 'text-[#172747] hover:bg-gray-100'
                                                        }`}>
                                                        {item.name}
                                                    </div>
                                                </Link>
                                            );
                                        }
                                    })}

                                    {/* More Dropdown (Clean Style) */}
                                    <div className="relative dropdown-container" ref={dropdownRef}
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        <button
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className={`flex items-center gap-2 px-6 py-2 font-medium text-sm transition-all cursor-pointer outline-none
                                            ${isDropdownOpen
                                                    ? 'bg-gray-100 text-[#172747] rounded-top-md'
                                                    : 'text-[#172747] hover:bg-gray-100 rounded-full'
                                                }`}
                                        >
                                            <span className="font-bold">☰</span> More
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="absolute top-full right-0 bg-white rounded-b-2xl rounded-tl-2xl shadow-xl flex items-center py-4 px-6 gap-0 min-w-[500px] z-50 animate-fadeIn border border-gray-100 mt-[2px]">
                                                <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                                                {moreDropdownItems.map((item, index) => (
                                                    <React.Fragment key={item.name}>
                                                        <Link href={item.href} className="text-[#172747] font-bold text-sm hover:text-blue-600 px-4 whitespace-nowrap" onClick={() => setIsDropdownOpen(false)}>
                                                            {item.name}
                                                        </Link>
                                                        {index < moreDropdownItems.length - 1 && <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="hidden lg:flex items-center gap-4">
                                    {user ? (
                                        <div className="relative dropdown-container"
                                            onMouseEnter={() => setIsProfileDropdownOpen(true)}
                                            onMouseLeave={() => setIsProfileDropdownOpen(false)}
                                        >
                                            <div className="flex items-center gap-2 bg-gray-100 text-[#172747] px-6 py-2 rounded-xl shadow-sm font-bold hover:bg-gray-200 transition-all text-sm cursor-pointer">
                                                <User className="w-4 h-4" /> <span>Profile</span>
                                            </div>
                                            {isProfileDropdownOpen && renderProfileDropdown()}
                                        </div>
                                    ) : (
                                        <Link href="/signin" className="bg-[#172747] text-white px-6 py-2 rounded-xl shadow-sm font-bold hover:bg-[#1f3764] transition-all text-sm">Log In</Link>
                                    )}
                                    <Link href="/contact-us-propertydrone-realty" className="bg-[#172747] text-white px-6 py-2 rounded-xl shadow-sm font-bold hover:bg-[#1f3764] transition-all text-sm">Contact Us</Link>
                                </div>

                                {/* Mobile Hamburger (Dark for light bg) */}
                                <div className="lg:hidden">
                                    <button className="p-2 text-[#172747] bg-gray-100 rounded-md" onClick={toggleMenu} aria-label="Toggle menu">
                                        <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                                            <span className={`block w-5 h-0.5 bg-[#172747] transform transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                            <span className={`block w-5 h-0.5 bg-[#172747] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                            <span className={`block w-5 h-0.5 bg-[#172747] transform transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                        </div>
                                    </button>
                                </div>
                            </nav>
                        </div >
                        {renderMobileMenu()}
                    </header >
                )
            }

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out forwards;
                }
            `}</style>
        </>
    );
};

export default MainHeader;