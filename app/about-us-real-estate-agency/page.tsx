"use client";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import React from 'react';

import Image from 'next/image';
// import heroBackground from '@/public/images/7578550-uhd_3840_2160_30fps 1.png'; // Replace with the correct path to your image
import { FiArrowRight } from 'react-icons/fi'; // Corrected import from 'react-icons/fi'
import nikhil from '@/public/images/nikhilabout.png';
import ayush from '@/public/images/Ayushabout.png';
import emp from '@/public/images/pic (37).jpeg';
import emp2 from '@/public/images/nikhilabout.png';
import emp3 from '@/public/images/Ayushabout.png';
import award1 from '@/public/images/pic (2).jpeg';
import award2 from '@/public/images/award2.png';
import award3 from '@/public/images/award1.png';
import quote from '@/public/images/right-quote 1.png';
import e from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/WhatsApp Image 2025-04-16 at 12.12.38 PM.jpeg';
import e1 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/WhatsApp Image 2025-04-16 at 12.12.36 PM (1).jpeg';
import e2 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/WhatsApp Image 2025-04-13 at 8.31.37 PM (2).jpeg';
// import e3 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/award.png';
import e4 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/IMG_3247.jpg';
import e5 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/IMG_3251.jpg';
import e6 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/IMG_3739.jpg';
import e7 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/IMG_8119.jpg';
import e8 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (10).jpeg';
import e9 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (1).jpeg';
import e10 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (12).jpeg';
import e11 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (3).jpeg';
import e12 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (14).jpeg';
import e13 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (25).jpeg';
import e14 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (26).jpeg';
import e15 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (17).jpeg';
import e16 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (8).jpeg';
import e17 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (9).jpeg';
import e18 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (27).jpeg';
import e19 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (28).jpeg';
import e20 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (29).jpeg';
import e21 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (30).jpeg';
import e22 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (31).jpeg';
import e23 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (32).jpeg';
import e24 from '@/public/images/PDR All Images-20250508T072635Z-001/PDR All Images/pic (33).jpeg';
import main3 from '@/public/images/Frame 145.png';
import ico1 from '@/public/images/ico1.png';
import ico2 from '@/public/images/ico2.png';
import ico3 from '@/public/images/ico3.png';  
import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Globe, Book, Wallet, Zap  } from 'lucide-react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import type { StaticImageData } from 'next/image';

interface ImageType {
  id: number;
  src: string | StaticImageData;
  alt: string;
  size: 'large' | 'small';
}


const images: ImageType[] = [
  { id: 1, src:e, alt: 'Image 1', size: 'large' },
  { id: 2, src:e1, alt: 'Image 2', size: 'small' },
  { id: 3, src: e2, alt: 'Image 3', size: 'large' },
  { id: 4, src: e5, alt: 'Image 4', size: 'small' },
  { id: 5, src: e4, alt: 'Image 5', size: 'large' },
  { id: 6, src: e1, alt: 'Image 4', size: 'small' },
  { id: 7, src:e6, alt: 'Image 1', size: 'large' },
  { id: 8, src:e7, alt: 'Image 2', size: 'small' },
  { id: 9, src: e8, alt: 'Image 3', size: 'large' },
  { id: 10, src: e9, alt: 'Image 4', size: 'small' },
  { id: 11, src: e10, alt: 'Image 5', size: 'large' },
  { id: 12, src: e11, alt: 'Image 4', size: 'small' },
  { id: 13, src: e12, alt: 'Image 5', size: 'large' },
  { id: 14, src: e13, alt: 'Image 4', size: 'small' },
  { id: 15, src: e14, alt: 'Image 5', size: 'large' },
  { id: 16, src: e15, alt: 'Image 4', size: 'small' },
  { id: 17, src: e16, alt: 'Image 5', size: 'large' },
  { id: 18, src: e17, alt: 'Image 4', size: 'small' },
  { id: 19, src: e18, alt: 'Image 5', size: 'large' },
  { id: 20, src: e19, alt: 'Image 4', size: 'small' },
  { id: 21, src: e20, alt: 'Image 5', size: 'large' },
  { id: 22, src: e21, alt: 'Image 4', size: 'small' },
  { id: 23, src: e22, alt: 'Image 5', size: 'large' },
  { id: 24, src: e23, alt: 'Image 4', size: 'small' },
  { id: 25, src: e24, alt: 'Image 5', size: 'large' },


];

// Add useCounter hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isVisible]);

  return { count, ref };
};

export default function WhoWeAre() {
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  const awards = [
    {
      id: 1,
      src: award1,
      alt: 'Award ceremony with two men in suits',
    },
    {
      id: 2,
      src: award2,
      alt: 'Celebration award ceremony with four people',
    },
    {
      id: 3,
      src: award3,
      alt: 'Award presentation with two men',
    },
  ];
  const emps = [
    {
      id: 1,
      src: emp,
      image: emp,
      name: 'Mr. Vishal Pandey',
      dec: 'Senior Manager'
    }
    // {
    //   id: 2,
    //   src: award2,
    //   alt: 'Celebration award ceremony with four people',
    // },
    // {
    //   id: 3,
    //   src: award3,
    //   alt: 'Award presentation with two men',
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<ImageType | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, []);

  const openModal = (image: ImageType): void => {
    setModalImage(image);
    setIsModalOpen(true);
    resetTimeout(); // Pause auto-slide when viewing an image
  };

  const closeModal = () => {
    setIsModalOpen(false);
    startAutoSlide(); // Resume auto-slide after closing modal
  };

  const startAutoSlide = useCallback(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
  }, [nextSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => resetTimeout();
  }, [currentIndex, startAutoSlide]);

  // Calculate which images to show
  const startIndex = currentIndex;
  const visibleImages = [];
  
  for (let i = 0; i < 5; i++) {
    const index = (startIndex + i) % images.length;
    visibleImages.push(images[index]);
  }

  return (
    <div className="w-full bg-white">
      {/* Who We Are Section */}
      <section className="relative min-h-screen">
         <div className="absolute inset-0 z-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/video3.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-black opacity-50"></div>
</div>

        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <p className=" uppercase  tracking-wider text-gray-300 mb-4  text-[16px] sm:text-[18px]"
             
                      style={{  fontFamily: 'Lato', letterSpacing: '0.5px' }}
            
            >About</p>
            
             
      <h2
        style={{
        fontFamily: "Ivy Mode",
        fontWeight: 100,
        lineHeight: '150%',
        letterSpacing: '0'
        }}
        className="mb-4 text-white text-[42px] sm:text-[56px]"
      >
   Propertydrone Realty
</h2>
            
             <p className=" tracking-wider text-gray-300 mb-4"
             
                      style={{ fontSize:'20px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
            
            >
              PropertyDrone Realty is a young and dynamic real estate agency based in Pune, India. Since its establishment in 2020, the business has rapidly built a reputation as one of the top-tier channel partners in Pune by providing a wide array of real estate services to satisfy the needs of its customers. </p>
            
            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/properties">
              <button className="bg-[#172747] rounded-[4px] text-white hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] px-6 py-3 flex items-center justify-center gap-2 transition-colors">
                Explore Properties
                <FiArrowRight size={18} />
              </button>
              </Link>
              <Link href="/contactus">
              <button className="border border-white rounded-[4px] bg-white text-[#172747] hover:bg-[#172747]  px-6 py-3 hover:text-white transition-colors">
                Book Consultation
              </button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
       <div className="w-full  py-16 px-4 md:px-8 bg-[#172747] ">
      <div className="max-w-6xl mx-auto gap-4 flex-col md:flex-row flex md:flex">
        {/* Heading and CTA Section */}
        <div className="flex items-center justify-center bg-gray-50 shadow-lg ">
          <div className=" p-10">
        <h2
          className="text-3xl md:text-4xl rounded-[4px] text-[#172747] mb-6 font-[200] leading-[140%] tracking-[1px]"
          style={{ fontSize: '44px', fontFamily: 'Ivy Mode', letterSpacing: '1px' }}
        >
          We mean it <br></br>when we <br className="hidden sm:block" />
          say <span className="text-indigo-500">the best</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center ">
          <Link href="/careers">
            <button className="bg-[#172747] rounded-[4px] text-white hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] px-6 py-3 flex items-center justify-center gap-2 transition-colors">
          Career
          <FiArrowRight size={18} />
            </button>
          </Link>
          <Link href="/contact-us-propertydrone-realty">
            <button className="bg-[#172747] rounded-[4px] text-white hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] px-6 py-3 flex items-center justify-center gap-2 transition-colors">
          Connect
          <FiArrowRight size={18} />
            </button>
          </Link>
        </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-2 w-full">
          {/* Years in Market */}
          <div className="bg-gray-50 shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105">
            <div className="absolute right-6 top-6 bg-indigo-100 p-3 rounded-full transition-transform duration-300 group-hover:animate-bounce">
              <Zap className="w-6 h-6 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-300" />
            </div>
            {(() => {
              const { count, ref } = useCounter(5);
              return (
                <div className="mt-8" ref={ref}>
                  <h3 className="text-indigo-500 font-[200] tracking-[1px]" style={{ fontSize: '48px', fontFamily: 'Ivy Mode', letterSpacing: '1px' }}>
                    {count} <span>Years</span>
                  </h3>
                  <p className="text-gray-700 mt-2" style={{ fontSize: '20px', fontFamily: 'Ivy Mode', letterSpacing: '1px' }}>
                    In the market
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Properties Sold */}
          <div className="bg-gray-50 shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105">
            <div className="absolute right-6 top-6 bg-indigo-100 p-3 rounded-full">
              <div className="w-6 h-6 flex items-center justify-center text-indigo-500 transition-transform duration-300 group-hover:animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
            {(() => {
              const { count, ref } = useCounter(500);
              return (
                <div className="mt-8" ref={ref}>
                  <h3 className="text-indigo-500 font-[200] tracking-[1px]" style={{ fontSize: '48px', fontFamily: 'Ivy Mode', letterSpacing: '1px' }}>
                    {count} <span>+</span>
                  </h3>
                  <p className="text-gray-700 mt-2" style={{ fontSize: '20px', fontFamily: 'Ivy Mode', letterSpacing: '1px' }}>
                    Properties Sold
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Industry Awards */}
          <div className="bg-gray-50 shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105">
            <div className="absolute right-6 top-6 bg-indigo-100 p-3 rounded-full">
              <Book className="w-6 h-6 text-indigo-500 transition-colors duration-300 group-hover:text-indigo-600" />
            </div>
            {(() => {
              const { count, ref } = useCounter(25);
              return (
                <div className="mt-8" ref={ref}>
                  <h3 className="text-indigo-500 font-[200]" style={{ fontSize: '48px', fontFamily: 'Ivy Mode' }}>
                    {count} <span>+</span>
                  </h3>
                  <p className="text-gray-700 mt-2" style={{ fontSize: '20px', fontFamily: 'Ivy Mode' }}>
                    Industry awards
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Support */}
          <div className="bg-gray-50 shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105">
            <div className="absolute right-6 top-6 bg-indigo-100 p-3 rounded-full">
              <Globe className="w-6 h-6 text-indigo-500 transition-colors duration-300 group-hover:text-indigo-600" />
            </div>
            {(() => {
              const { count, ref } = useCounter(24);
              return (
                <div className="mt-8" ref={ref}>
                  <h3 className="text-indigo-500 font-[200]" style={{ fontSize: '48px', fontFamily: 'Ivy Mode' }}>
                    {count} / 7
                  </h3>
                  <p className="text-gray-700 mt-2" style={{ fontSize: '20px', fontFamily: 'Ivy Mode' }}>
                    Support
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Cities */}
          <div className="md:col-span-2 lg:col-span-1 bg-gray-50 shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105">
            <div className="absolute right-6 top-6 bg-indigo-100 p-3 rounded-full">
              <Wallet className="w-6 h-6 text-indigo-500 transition-colors duration-300 group-hover:text-indigo-600" />
            </div>
            {(() => {
              const { count, ref } = useCounter(9);
              return (
                <div className="mt-8" ref={ref}>
                  <h3 className="text-indigo-500 font-[200]" style={{ fontSize: '48px', fontFamily: 'Ivy Mode' }}>
                    {count}
                  </h3>
                  <p className="text-gray-700 mt-2" style={{ fontSize: '20px', fontFamily: 'Ivy Mode' }}>
                    Cities
                  </p>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>

      <div className="container max-w-6xl mx-auto px-4 py-6">
        <h2  className="text-[#172747] mb-6 font-[300] text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]">Who We Are</h2>
      <div className="flex justify-between items-center mb-8  md:flex">
        <p className="text-gray-700 max-w-3xl ml-2 leading-none"
              style={{ fontFamily: 'Lato', letterSpacing: '0.5px' , lineHeight: '1.5' }}
        >
          Property Drone Realty is a trusted real estate agency offering expert services in both
          residential and commercial properties. Whether you're looking for villas, apartments,
          flats, bungalows, shop spaces, or office setups – we've got it covered.
        </p>
        
        {/* Enquiry Button */}
        
      </div>
        
        {/* Three Column Features */}
         {/* <div className="flex-grow h-px bg-[#172747] "></div> */}
        <div className="flex flex-col md:flex-row justify-between pt-8 gap-4">
          {/* Our Strength */}
         
             <div className="relative max-w-[320px] max-h-[340px] bg-gradient-to-b from-[#EEF1F5] to-[#e9ecf0] rounded-[10px] p-8 pb-6 m-3 text-black font-sans overflow-hidden group transition-all duration-500 ease-out">
      {/* Circle effect on hover */}
      <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#172747] to-[#384c6c] scale-100 origin-center transition-transform duration-300 ease-out group-hover:scale-[28] z-0"></div>
  <div className="w-12 h-12 ">
              <Image 
                src={ico1}
                alt="Decorative quote"
                className="h-10 w-12 inline-block"  
              />
              </div>
            <div className="flex justify-between items-center md:justify-start">
              <h2 className="relative z-10 text-[#172747] text-xl font-[Ivy Mode] mb-2 group-hover:text-white transition-colors duration-500">
              Our Strength
              </h2>
             
            </div>
             
            <p className="relative z-10 text-[#172747]  group-hover:text-white/80 transition-colors duration-500" style={{ fontFamily: 'Lato', letterSpacing: '0.5px' , lineHeight: '1.5' }}>
         Our team of experienced real estate advisors and consultants is our biggest asset. They bring in-depth market knowledge and a professional approach to help clients with buying, selling, investing, or leasing – making your journey seamless and well-informed.
            </p>
          </div>
          
          
          {/* Our Vision */}
          
           <div className="relative max-w-[320px] max-h-[340px] bg-gradient-to-b from-[#EEF1F5] to-[#e9ecf0] rounded-[10px] p-8 pb-6 m-3 text-black font-sans overflow-hidden group transition-all duration-500 ease-out">
      {/* Circle effect on hover */}
      <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#172747] to-[#384c6c] scale-100 origin-center transition-transform duration-300 ease-out group-hover:scale-[28] z-0"></div>
  <div className="w-12 h-12 ">
              <Image 
                src={ico2}
                alt="Decorative quote"
                className="h-10 w-12 inline-block"  
              />
              </div>
            <div className="flex justify-between items-center md:justify-start">
               <h2 className="relative z-10 text-[#172747] text-xl font-[Ivy Mode] mb-2 group-hover:text-white transition-colors duration-500">
               Our Vision
              </h2>
             
            </div>
             
         <p className="relative z-10 text-[#172747]  group-hover:text-white/80 transition-colors duration-500" style={{ fontFamily: 'Lato', letterSpacing: '0.5px' , lineHeight: '1.5' }}>
        We aim to be a leading real estate consultancy renowned for our integrity, expertise, and client-first approach. Our goal is to transform the industry with innovative, tailored solutions that help people make confident real estate decisions.
            </p>
          </div>
           <div className="relative max-w-[320px] max-h-[340px] bg-gradient-to-b from-[#EEF1F5] to-[#e9ecf0] rounded-[10px] p-8 pb-6 m-3 text-black font-sans overflow-hidden group transition-all duration-500 ease-out">
      {/* Circle effect on hover */}
      <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#172747] to-[#384c6c] scale-100 origin-center transition-transform duration-300 ease-out group-hover:scale-[28] z-0"></div>
  <div className="w-12 h-12 ">
              <Image 
                src={ico3}
                alt="Decorative quote"
                className="h-10 w-12 inline-block"  
              />
              </div>
            <div className="flex justify-between items-center md:justify-start">
               <h2 className="relative z-10 text-[#172747] text-xl font-[Ivy Mode] mb-2 group-hover:text-white transition-colors duration-500">
              Our Mission
              </h2>
             
            </div>
             
           <p className="relative z-10 text-[#172747]  group-hover:text-white/80 transition-colors duration-500" style={{ fontFamily: 'Lato', letterSpacing: '0.5px' , lineHeight: '1.5' }}>
        We provide personalized, end-to-end real estate services that exceed client expectations. By combining market insight with technology, we deliver results and build lasting relationships.
            </p>
          </div>
          {/* Our Mission */}
          
        </div>
        {/* <div className="flex-grow h-px bg-[#172747] "></div> */}
      </div>

      {/* Our Team Section */}
      <div className="w-full bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* First Row - Nikhil Image (from left) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[4px] h-[520px] overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-500 ease-in-out"
          >
            <Image
              src={nikhil}
              alt="Nikhil Manocha - Founder and CEO"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Quote 1 (from right) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
             className="rounded-[4px] bg-[#EEF1F5] p-8 flex flex-col justify-center h-full lg:h-[520px] border border-[#172747] hover:scale-105 hover:shadow-xl transition-transform duration-500 ease-in-out"
            >
            <Image
              src={quote}
              alt="Decorative quote"
              className="h-10 w-10 inline-block ml-2 md:ml-10"
            />
            <p className="text-[#172747] text-[32px] leading-[140%] tracking-normal font-['Ivy Mode'] mb-4 mx-2 md:mx-10" style={{ letterSpacing: '0.5px' }}>
              At Property Drone Realty, we're not just listing properties—we're elevating how people experience real estate.
            </p>
            <div className="mx-2 md:mx-10">
              <p className="text-[#00000099]" style={{ fontSize: '18px', fontFamily: 'Lato', letterSpacing: '0.5px' }}>Nikhil Mawale</p>
              <p className="text-[#00000099]" style={{ fontSize: '18px', fontFamily: 'Lato', letterSpacing: '0.5px' }}>— Founder and CEO</p>
            </div>
          </motion.div>

          {/* Second Row - Quote 2 (from left) */}
            <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[4px] bg-[#EEF1F5] p-8 flex flex-col justify-center h-full lg:h-[520px] border border-[#172747] hover:scale-105 hover:shadow-xl transition-transform duration-500 ease-in-out"
            >
            <Image
              src={quote}
              alt="Decorative quote"
              className="h-10 w-10 inline-block ml-2 md:ml-10"
            />
            <p className="text-[#172747] text-[32px] leading-[140%] tracking-normal font-['Ivy Mode'] mb-4 mx-2 md:mx-10"  style={{ letterSpacing: '0.5px' }}>
              We're building more than a platform—we're creating a trusted space where property seekers and developers connect with confidence and clarity.
            </p>
            <div className="mx-2 md:mx-10">
              <p className="text-gray-700 text-lg font-medium">Ayush Thakur</p>
              <p className="text-gray-600 text-lg">— Co-Founder</p>
            </div>
            </motion.div>

          {/* Ayush Image (from right) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative border border-[#172747] rounded-[4px] h-[520px] overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-500 ease-in-out"
          >
            <Image
              src={ayush}
              alt="Ayush Thakur - Co-Founder"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

        </div>
        </div>
      </div>
   
      {/* Other Team Members Section */}
      <div className="w-full bg-gray-100 py-4">
      <div className="container mx-auto px-4 max-w-6xl py-6">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {emps.map((image, index) => (
    <div
      key={index}
      className="bg-white rounded-[4px] shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      <div className=" overflow-hidden"> {/* Increased height */}
        <Image
          src= {image.src}
          alt={`Team Member ${index + 1}`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <p className="font-medium text-base">{image.name}</p>
        <p className="text-gray-600 text-sm">{image.dec}</p>
      </div>
    </div>
  ))}
</div>
      <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
            {/* Main Slider */}
            <div className="flex items-center justify-center gap-4 overflow-hidden relative">
              {visibleImages.map((image, index) => (
                <div 
                  key={`${image.id}-${index}`}
                 className={`relative cursor-pointer transition-all duration-300 flex-shrink-0 bg-gray-200
  ${image.size === 'large' ? 'w-64 h-48' : 'w-[160px] h-48'}`}

                  onClick={() => openModal(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                  />
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight size={30} />
            </button>

            {/* Modal for enlarged view */}
            {isModalOpen && modalImage && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className="relative w-full max-w-4xl h-3/4">
                  <Image
                    src={modalImage.src}
                    alt={modalImage.alt}
                    fill
                    className="object-contain"
                  />
                  <button 
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white"
                    onClick={closeModal}
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
            )}
          </div>
      </div>

        <section className="bg-[#0F1E3D] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-light text-center mb-12 tracking-wider">
          Awards & Achievements
        </h2>
        
        {/* Awards Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div 
              key={award.id} 
              className="relative aspect-[4/3] border-2 border-white/20 p-1"
            >
              <div className="relative w-full h-full">
                <Image
                  src={award.src}
                  alt={award.alt}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        <section className="relative w-full py-16 md:py-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src= {main3}
          alt="Background" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      <div className="relative z-10 container mx-auto max-w-4xl px-4">
        {/* Quote section */}
        <div className="text-center mb-12">
          <h2  
          style={{
            fontFamily: "'Ivy Mode'",
            fontWeight: 300,
            fontSize: '46px',
            lineHeight: '140%',
            letterSpacing: '1px'
          }}
          className="text-[#172747] mb-6 "
        >
            "Let the experts help you<br />
            make the right investment"
          </h2>
          
          <div className="mt-4">
            <h2 className="text-2xl text-[#172747]  "  style={{
            letterSpacing: '1px'
          }} >Nikhil Mawale</h2>
            <h2 className="text-2xl text-[#172747] font-bold mb-6 "  style={{
            letterSpacing: '1px'
          }} >Founder</h2>
          </div>
        </div>
        
        {/* Form section */}
        <div className="bg-white rounded-md shadow-sm p-6 max-w-3xl mx-auto">
          <form  className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:flex-1">
              <input
                type="text"
                name="name"
               
                placeholder="Name"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-800 outline-none"
                required
              />
            </div>
            <div className="w-full md:flex-1">
              <input
                type="tel"
                name="phone"
              
                placeholder="Phone"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-800 outline-none"
                required
              />
            </div>
            <Link href="/contact-us-propertydrone-realty">
            <button
              type="submit"
              className="w-full md:w-auto bg-[#172747] hover:bg-white hover:border hover:border-[#172747] hover:text-[#172747] px-6 py-3 bg-navy-800 text-white font-medium rounded flex items-center justify-center"
            >
              Get a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
}