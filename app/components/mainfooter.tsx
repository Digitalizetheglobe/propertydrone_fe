import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import bg2 from "@/public/images/7578550-uhd_3840_2160_30fps 1.png"; // Adjust the path as necessary
import logo from "@/public/images/PropertyDrone-Logo-e1687615846810 2.png"; // Adjust the path as necessary

const Mainfooter = () => {
  return (
    <footer className="w-full relative">
      {/* Background Image - Full Width */}
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
      <div className="relative max-w-screen-xl mx-auto py-20">
        {/* Main Footer Content with Dark Blue Background */}
        <div className="bg-[#172747] text-white" style={{ height: '517px',  maxWidth: '100%' }}>
          <div className="container mx-auto px-12 pt-8 pb-12">
            <div className="grid grid-cols-4 gap-8">
              {/* Logo and Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center mb-6">
                  <Image src={logo} alt="Property Drone Logo" />
                  {/* <span className="ml-2 text-base font-semibold tracking-wide">PROPERTY DRONE</span> */}
                </div>
                <div className="flex items-center text-sm mb-2">
                  <span className="mr-2">📱</span>
                  <span>+91 9730145675</span>
                </div>
                <div className="flex items-center text-sm mb-2">
                  <span className="mr-2">✉️</span>
                  <span>info@propertydronealty.com</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-start">
                    <span className="mr-2">📍</span>
                    <span>9th Floor, shivam regency,<br />
                      Baner Shivayog, Baner, Pune,<br />
                      Maharashtra 411045</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold mb-6">Quick links</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/developers">Developers</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>
              </div>

              {/* Properties by locality - First Column */}
              <div>
                <h3 className="text-sm font-semibold mb-6">Properties by locality</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/properties/ulhasnagar">Top Projects in Ulhasnagar</Link></li>
                  <li><Link href="/properties/baner">Top Projects in Baner</Link></li>
                  <li><Link href="/properties/hinjewadi">Top Projects in Hinjewadi</Link></li>
                  <li><Link href="/properties/vishwa">Top Projects in Vishwa</Link></li>
                  <li><Link href="/properties/moshi">Top Projects in Moshi</Link></li>
                </ul>
              </div>

              {/* Properties by locality - Second Column */}
              <div>
                <h3 className="text-sm font-semibold mb-6">Properties by locality</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/properties/amp-corp">Top Projects by AMP Corp</Link></li>
                  <li><Link href="/properties/majestic-dev">Top Projects by Majestic Dev</Link></li>
                  <li><Link href="/properties/korat-group">Top Projects by Korat Group</Link></li>
                  <li><Link href="/properties/katalur">Top Projects by Katalur</Link></li>
                  <li><Link href="/properties/skyi-developers">Top Projects by Skyi Developers</Link></li>
                  <li><Link href="/properties/solitaire">Top Projects by Solitaire</Link></li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 flex justify-between items-center py-4">
              <div className="text-2xl font-light">Your questions are always welcome</div>
              <Link href="/contactus" className="bg-white text-[#172747] hover:bg-[#172747] hover:text-white hover:border hover:border-white px-6 py-2 rounded flex items-center">
                Enquire Now <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Social Icons */}
         

          {/* Copyright */}
         
        </div>
         <div className="py-4 justify-center items-center">
            <div className="container mx-auto px-12 flex justify-center items-center pt-8">
              <div className="flex space-x-6">
                <Link href="#" className="text-white hover:text-gray-300">
                  <FaFacebookF size={18} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <FaYoutube size={18} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <FaInstagram size={18} />
                </Link>
              </div>
            </div>
          </div>
         <div className=" pb-2 border-t border-white">
            <div className="container mx-auto px-12 flex justify-between items-center text-xs text-white mt-10">
              <div>© 2025 Property Drone Realty. All Rights Reserved. Developed & Designed by Digitalies The Globe.</div>
              <div className="flex space-x-8">
                <Link href="/terms">Terms of Usage</Link>
                <Link href="/privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Mainfooter;