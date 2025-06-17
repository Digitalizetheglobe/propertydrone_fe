import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
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
        <div className="bg-[#172747] text-white rounded-[4px] shadow-xl overflow-hidden">
          <div className="container mx-auto px-8 py-12">
            {/* Footer Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {/* Logo and Contact Info */}
              <div className="space-y-6 ">
               <Link href="/">
                 <div className="mb-4">
                  <Image
                    src={logo}
                    alt="Property Drone Logo"
                    className="w-72 h-auto"
                  />
                </div>

               </Link>
                <div className="space-y-5 text-white" style={{ color: '#FFFFFF99' }}>
  {/* Phone */}
  <a href="tel:+919561477575" className="flex  hover:underline">
    <div className="flex justify-start items-start w-10">
      <Image 
        src={mob}
        alt="Phone icon"
        className="h-5 w-5"
      />
    </div>
    <span
      className=" text-base leading-none"
      style={{ fontFamily: 'Lato', letterSpacing: '0.5px' }}
    >
     +91 9561477575 
    </span>
  </a>
  <a href="tel:+919730156575" className="flex  hover:underline">
    <div className="flex justify-start items-start w-10">
      <Image 
        src={mob}
        alt="Phone icon"
        className="h-5 w-5"
      />
    </div>
    <span
      className=" text-base leading-none"
      style={{ fontFamily: 'Lato', letterSpacing: '0.5px' }}
    >
    +91 9730156575
    </span>
  </a>
  <a href="mailto:info@propertydronealty.com" className="flex hover:underline">
    <div className="flex justify-start items-start w-10">
      <Image 
        src={mail}
        alt="Phone icon"
        className="h-5 w-5"
      />
    </div>
    <span
      className=" text-base leading-none"
      style={{ fontFamily: 'Lato', letterSpacing: '0.5px' }}
    >
     info@propertydronrealty.com
    </span>
  </a>

 

  {/* Location */}
  <a
    href="https://www.google.com/maps?q=9th+Floor,+Shivam+Regency,+Baner+Shivayog,+Baner,+Pune,+Maharashtra+411045"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start hover:underline"
  >
    <div className="flex justify-start items-start w-10">
      <Image 
        src={loc}
        alt="Location icon"
        className="h-5 w-5"
      />
    </div>
    <span
      className=" text-base leading-relaxed"
      style={{ fontFamily: 'Lato', letterSpacing: '0.5px' }}
    >
      9th Floor, Shivom Regency,<br />
      Baner, Pune,<br />
      Maharashtra, 411045
    </span>
  </a>
</div>

              </div>

              {/* Quick Links */}
                <div className="mt-2 md:ml-20">
                <h3 className="text-sm font-semibold mb-6 text-white tracking-wide">Quick Links</h3>
                <ul className="space-y-3 text-sm" style={{ fontFamily: 'Lato', letterSpacing: '0.5px', color: '#FFFFFF99' }}>
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/about-us-real-estate-agency" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/our-services-real-estate-services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/nri-corner" className="hover:text-white transition-colors">NRI Corner</Link></li>
                  <li><Link href="/estate_developer" className="hover:text-white transition-colors">Developers</Link></li>
                  <li><Link href="/our-properties-in-pune" className="hover:text-white transition-colors">Properties</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/career" className="hover:text-white transition-colors">Career</Link></li>
                  <li><Link href="/contact-us-propertydrone-realty" className="hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
                </div>

              {/* Properties by locality - First Column */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold mb-6 text-white tracking-wide" style={{ fontFamily: 'Lato', letterSpacing: '0.5px' }}>Properties by locality</h3>
                <ul className="space-y-3 text-sm" style={{ fontFamily: 'Lato', letterSpacing: '0.5px', color: '#FFFFFF99' }}>
                  {/* <li><Link  href={`/properties?location=`} className="hover:text-white transition-colors">Top Projects in Ulhasnagar</Link></li> */}
                  <li><Link href="/our-properties-in-pune?location=baner" className="hover:text-white transition-colors">Top Projects in Baner</Link></li>
                  <li><Link  href="/our-properties-in-pune?location=Hinjewadi" className="hover:text-white transition-colors">Top Projects in Hinjewadi</Link></li>
                  <li><Link  href={`/our-properties-in-pune?location= Wakad`} className="hover:text-white transition-colors">Top Projects in Wakad</Link></li>
                  <li><Link  href={`/our-properties-in-pune?location=Ravet`} className="hover:text-white transition-colors">Top Projects in Ravet</Link></li>
                </ul>
              </div>

              {/* Properties by developer - Second Column */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold mb-6 text-white tracking-wide" style={{ fontFamily: 'Lato', letterSpacing: '0.5px' }}>Properties by developer</h3>
                <ul className="space-y-3 text-sm" style={{ fontFamily: 'Lato', letterSpacing: '0.5px', color: '#FFFFFF99' }}>
                  <li><Link href="/estate_developer/anp-corp" className="hover:text-white transition-colors">Top Projects by ANP Corp</Link></li>
                  <li><Link href="/estate_developer/majestique-developer" className="hover:text-white transition-colors">Top Projects by Majestique Developer</Link></li>
                  <li><Link href="/estate_developer/krunal-group" className="hover:text-white transition-colors">Top Projects by Krunal Group</Link></li>
                  <li><Link href="/estate_developer/kasturi" className="hover:text-white transition-colors">Top Projects by Kasturi</Link></li>
                  <li><Link href="/estate_developer/skyi-developers" className="hover:text-white transition-colors">Top Projects by Skyi Developers</Link></li>
                  <li><Link href="/estate_developer/solitaire" className="hover:text-white transition-colors">Top Projects by Solitaire</Link></li>
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
                href="/contact-us-propertydrone-realty" 
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
              href="https://www.linkedin.com/company/propertydronerealty/" 
              className="text-white hover:text-gray-300 transition-colors bg-[#172747] p-3 rounded-full hover:bg-[#1e335b] "
            >
              <FaLinkedin size={18} />
            </Link>
            <Link 
              href="https://x.com/propertydronerealty" 
              className="text-white hover:text-gray-300 transition-colors bg-[#172747] p-3 rounded-full hover:bg-[#1e335b] "
            >
              <BsTwitterX size={18} />
            </Link>
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
              {/* <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Usage</Link> */}
              <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Mainfooter;