"use client";

import { ArrowRight } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import heroBackground from '@/public/images/7578550-uhd_3840_2160_30fps 1.png'; // Replace with the correct path to your image
import { FiArrowRight } from 'react-icons/fi'; // Corrected import from 'react-icons/fi'
import nikhil from '@/public/images/nikhilabout.png';
import ayush from '@/public/images/Ayushabout.png';
import emp from '@/public/images/Ayushabout.png';
import emp2 from '@/public/images/nikhilabout.png';
import emp3 from '@/public/images/Ayushabout.png';
import award1 from '@/public/images/award.png';
import award2 from '@/public/images/award2.png';
import award3 from '@/public/images/award1.png';
import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import type { StaticImageData } from 'next/image';

interface ImageType {
  id: number;
  src: string | StaticImageData;
  alt: string;
  size: 'large' | 'small';
}

const images: ImageType[] = [
  { id: 1, src:emp, alt: 'Image 1', size: 'large' },
  { id: 2, src:emp, alt: 'Image 2', size: 'small' },
  { id: 3, src: emp, alt: 'Image 3', size: 'large' },
  { id: 4, src: emp, alt: 'Image 4', size: 'small' },
  { id: 5, src: emp, alt: 'Image 5', size: 'large' },
  { id: 6, src: emp, alt: 'Image 4', size: 'small' },
];

export default function WhoWeAre() {

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
    <source src="/video2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-black opacity-10"></div>
</div>

        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <p className="text-sm uppercase font-medium tracking-wider text-gray-300 mb-4">OUR SERVICES</p>
            
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Making Your Property Journey<br />
              Smarter, Simpler, and Faster
            </h1>
            
            <p className="text-gray-200 mb-8 max-w-xl mx-auto">
              At PropertyDrone Realty, we offer more than listings—we offer complete solutions.
              From stunning drone views to personalized consultations, we're here to make your 
              real estate experience effortless and rewarding.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors">
                Explore Properties
                <FiArrowRight size={18} />
              </button>
              <button className="border border-gray-300 bg-white text-gray-800 px-6 py-3 hover:bg-gray-50 transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif mb-2">Who We Are</h1>
        <p className="text-gray-700 mb-8 max-w-3xl">
          PropertyOnline Realty is a trusted real estate agency offering expert services in both
          residential and commercial properties. Whether you're looking for villas, apartments,
          flats, bungalows, shop spaces, or office setups – we've got it covered.
        </p>
        
        {/* Enquiry Button */}
        <div className="flex justify-end mb-8">
          <button className="bg-[#172747] text-white hover:text-[#172747] hover:bg-white hover:border hover:border-[#172747] px-4 py-2 transition">
            Make an enquiry
          </button>
        </div>
        
        {/* Three Column Features */}
        <div className="flex flex-col md:flex-row justify-between gap-6  pt-8">
          {/* Our Strength */}
          <div className="w-full md:w-1/3 p-4  ">
            <div className="flex justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-900">
                  <path d="M6 20v-4m0-6V6m6 14v-8m0-2V6m6 14v-4m0-6V6M4 12h16" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-serif mb-3">Our Strength</h2>
            <p className="text-sm text-gray-700">
              Our team of experienced real estate advisors and consultants is our biggest asset. They bring in-depth market knowledge and a professional approach to help clients with buying, selling, investing, or leasing – making your journey seamless and well-informed.
            </p>
          </div>
          
          {/* Our Vision */}
          <div className="w-full md:w-1/3 p-4 border-x border-[#172747]">
            <div className="flex justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-900">
                  <path d="M12 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  <path d="M21 12c0 5-9 9-9 9s-9-4-9-9a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-serif mb-3">Our Vision</h2>
            <p className="text-sm text-gray-700">
              We aim to be a leading real estate consultancy renowned for our integrity, expertise, and client-first approach. Our goal is to transform the industry with innovative, tailored solutions that help people make confident real estate decisions.
            </p>
          </div>
          
          {/* Our Mission */}
          <div className="w-full md:w-1/3 p-4 ">
            <div className="flex justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-900">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-serif mb-3">Our Mission</h2>
            <p className="text-sm text-gray-700">
              We provide personalized, end-to-end real estate services that exceed client expectations. By combining market insight with technology, we deliver results and build lasting relationships.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="w-full bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-serif mb-2">Our Team</h2>
              <p className="text-gray-700 text-sm max-w-lg">
                Meet the minds shaping the future of real estate through innovation and dedication.
                Our firm's finest experts, deeply committed to client success, deliver tailored, effective
                investment property solutions.
              </p>
            </div>
            <button className="bg-[#172747] text-white hover:text-[#172747] hover:bg-white hover:border hover:border-[#172747] text-sm px-4 py-2 mt-4 md:mt-0">
              View Open Roles
            </button>
          </div>

          {/* Team Members Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* First Row */}
            <div className="flex flex-col md:flex-row">
              {/* Team Member 1 Image */}
              <div className="w-full">
                <Image
                  src={nikhil}
                  alt="Founder" 
                  className="w-full h-[600px] object-cover object-center"
                />
              </div>
            </div>
            
            {/* Quote 1 */}
            <div className="bg-white p-6 flex flex-col justify-center h-[600px] broder border-[#172747]">
              <div className="text-2xl text-gray-300 font-serif">"</div>
              <p className="text-gray-800 text-[32px] font-light leading-[140%] tracking-normal font-['Ivy Mode'] mb-4">
                At PropertyOnline Realty, we're not just listing properties—we're elevating how people experience real estate.
              </p>
              <div>
                <p className="font-medium text-sm">Nikhil Manocha</p>
                <p className="text-gray-600 text-xs">— Founder and CEO</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="bg-white p-6 flex flex-col justify-center h-[600px] width-[600px] broder-2 border-[#172747]">
              <div className="text-2xl text-gray-300 font-serif">"</div>
              <p className="text-gray-800 text-[32px] font-light leading-[140%] tracking-normal font-['Ivy Mode'] mb-4">
                We're building more than a platform—we're creating a trusted space where investors, sellers, and developers connect with confidence and clarity.
              </p>
              <div>
                <p className="font-medium text-sm">Ayush Thakur</p>
                <p className="text-gray-600 text-xs">— Co-Founder</p>
              </div>
            </div>

            {/* Team Member 2 Image */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full">
                <Image
                  src={ayush}
                  alt="Co-Founder" 
                  className="w-full h-[600px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
   
      {/* Other Team Members Section */}
      <div className="w-full bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-2xl font-serif text-center mb-8">Other Team Members</h2>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member Card 1 */}
            <div className="bg-white">
              <div className="h-48 overflow-hidden">
                <Image 
                  src={emp} 
                  alt="Team Member" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-sm">Name</p>
                <p className="text-gray-600 text-xs">—Designation</p>
              </div>
            </div>
            
            {/* Team Member Card 2 */}
            <div className="bg-white">
              <div className="h-48 overflow-hidden">
                <Image
                  src={emp2} 
                  alt="Team Member" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-sm">Name</p>
                <p className="text-gray-600 text-xs">—Designation</p>
              </div>
            </div>
            
            {/* Team Member Card 3 */}
            <div className="bg-white">
              <div className="h-48 overflow-hidden">
                <Image
                  src={emp3} 
                  alt="Team Member" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-sm">Name</p>
                <p className="text-gray-600 text-xs">—Designation</p>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
            {/* Main Slider */}
            <div className="flex items-center justify-center gap-4 overflow-hidden relative">
              {visibleImages.map((image, index) => (
                <div 
                  key={`${image.id}-${index}`}
                  className={`relative cursor-pointer transition-all duration-300 flex-shrink-0 bg-gray-200
                    ${image.size === 'large' ? 'w-64 h-48' : 'w-20 h-20'}`}
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
              <ChevronRight size={20} />
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
      </div>
    </div>
  );
}