import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import bg2 from "@/public/images/7578550-uhd_3840_2160_30fps 1.png"; // Adjust the path as necessary
import logo from "@/public/images/PropertyDrone-Logo-e1687615846810 2.png"; // Adjust the path as necessary
import mob from "@/public/images/Icon.png"; // Phone icon
import loc from "@/public/images/marker-pin-01.png"; // Location icon
import mail from "@/public/images/mail-02.png"; // Mail icon

const Mainfooter = () => {
  return (
    <footer className="w-full relative">
      {/* Background Video - Full Width */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Main Footer Container */}
      <div className="relative max-w-6xl mx-auto py-16">
        {/* Main Footer Content with Dark Blue Background */}
        <div className="bg-[#172747] text-white rounded-lg shadow-xl overflow-hidden">
          <div className="container mx-auto px-8 py-12">
            {/* Footer Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Logo and Contact Info */}
              <div className="space-y-6">
                <div className="mb-4">
                  <Image
                    src={logo}
                    alt="Property Drone Logo"
                    className="w-72 h-auto"
                  />
                </div>

                <div className="space-y-5" style={{ color: '#FFFFFF99' }}>
                  <div className="flex items-center">
                    <div className="flex justify-center items-center w-10">
                      <Image 
                        src={mob}
                        alt="Phone icon"
                        className="h-5 w-5"
                      />
                    </div>
                    <span
                      className="ml-2 text-base font-normal leading-none"
                      style={{ fontFamily: 'Lato', letterSpacing: '0.5px' }}
                    >
                      +91 9730145675
                    </span>
                  </div>

                  <div className="flex items-center">
                    <div className="flex justify-center items-center w-10">
                      <Image 
                        src={mail}
                        alt="Mail icon"
                        className="h-5 w-5"
                      />
                    </div>
                    <span
                      className="ml-2 text-base font-normal leading-none"
                      style={{ fontFamily: 'Lato', letterSpacing: '0.5px' }}
                    >
                      info@propertydronealty.com
                    </span>
                  </div>

                  <div className="flex items-start">
                    <div className="flex justify-center w-10 mt-1">
                      <Image 
                        src={loc}
                        alt="Location icon"
                        className="h-5 w-5"
                      />
                    </div>
                    <span
                      className="ml-2 text-base font-normal leading-relaxed"
                      style={{ fontFamily: 'Lato', letterSpacing: '0.5px' }}
                    >
                      9th Floor, Shivam Regency,<br />
                      Baner Shivayog, Baner, Pune,<br />
                      Maharashtra 411045
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold mb-6 text-white tracking-wide">Quick Links</h3>
                <ul className="space-y-3 text-sm" style={{ fontFamily: 'Lato', letterSpacing: '0.5px', color: '#FFFFFF99' }}>
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/developers" className="hover:text-white transition-colors">Developers</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                  <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              {/* Properties by locality - First Column */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold mb-6 text-white tracking-wide" style={{ fontFamily: 'Lato', letterSpacing: '0.5px' }}>Properties by locality</h3>
                <ul className="space-y-3 text-sm" style={{ fontFamily: 'Lato', letterSpacing: '0.5px', color: '#FFFFFF99' }}>
                  <li><Link href="/properties/ulhasnagar" className="hover:text-white transition-colors">Top Projects in Ulhasnagar</Link></li>
                  <li><Link href="/properties/baner" className="hover:text-white transition-colors">Top Projects in Baner</Link></li>
                  <li><Link href="/properties/hinjewadi" className="hover:text-white transition-colors">Top Projects in Hinjewadi</Link></li>
                  <li><Link href="/properties/vishwa" className="hover:text-white transition-colors">Top Projects in Vishwa</Link></li>
                  <li><Link href="/properties/moshi" className="hover:text-white transition-colors">Top Projects in Moshi</Link></li>
                </ul>
              </div>

              {/* Properties by developer - Second Column */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold mb-6 text-white tracking-wide" style={{ fontFamily: 'Lato', letterSpacing: '0.5px' }}>Properties by developer</h3>
                <ul className="space-y-3 text-sm" style={{ fontFamily: 'Lato', letterSpacing: '0.5px', color: '#FFFFFF99' }}>
                  <li><Link href="/properties/amp-corp" className="hover:text-white transition-colors">Top Projects by AMP Corp</Link></li>
                  <li><Link href="/properties/majestic-dev" className="hover:text-white transition-colors">Top Projects by Majestic Dev</Link></li>
                  <li><Link href="/properties/korat-group" className="hover:text-white transition-colors">Top Projects by Korat Group</Link></li>
                  <li><Link href="/properties/katalur" className="hover:text-white transition-colors">Top Projects by Katalur</Link></li>
                  <li><Link href="/properties/skyi-developers" className="hover:text-white transition-colors">Top Projects by Skyi Developers</Link></li>
                  <li><Link href="/properties/solitaire" className="hover:text-white transition-colors">Top Projects by Solitaire</Link></li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px my-10 bg-gray-400 opacity-50"></div>

            {/* Call to Action */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-4">
              <div 
                style={{
                  fontFamily: "'Ivy Mode'",
                  fontWeight: 300,
                  fontSize: '36px',
                  lineHeight: '140%',
                  letterSpacing: '1px'
                }}
                className="text-white text-center md:text-left"
              >
                Your questions are always welcome
              </div>
              <Link 
                href="/contactus" 
                className="bg-white text-[#172747] hover:bg-transparent hover:text-white border border-transparent hover:border-white px-8 py-3 rounded flex items-center transition-all duration-300 font-medium"
              >
                Enquire Now <span className="ml-3">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Positioned outside the main container */}
        <div className="py-8 flex justify-center items-center">
          <div className="flex space-x-8">
            <Link 
              href="https://www.facebook.com/propertydrone.exp247" 
              className="text-white hover:text-gray-300 transition-colors bg-[#172747] p-3 rounded-full hover:bg-[#1e335b] "
            >
              <FaFacebookF size={18} />
            </Link>
            <Link 
              href="https://www.youtube.com/@PropertyDrone" 
              className="text-white hover:text-gray-300 transition-colors bg-[#172747] p-3 rounded-full hover:bg-[#1e335b] "
            >
              <FaYoutube size={18} />
            </Link>
            <Link 
              href="https://www.instagram.com/accounts/login/?next=%2Fpropertydrone_realty%2F&source=omni_redirect" 
              className="text-white hover:text-gray-300 transition-colors bg-[#172747] p-3 rounded-full hover:bg-[#1e335b] "
            >
              <FaInstagram size={18} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pb-6 border-t border-white border-opacity-20">
         <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-base font-medium leading-none tracking-normal text-white mt-8 gap-4 font-lato">
            <div className="text-center md:text-left">
              © 2025 Property Drone Realty. All Rights Reserved. Developed & Designed by Digitalize The Globe.
            </div>
            <div className="flex space-x-8">
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Usage</Link>
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Mainfooter;