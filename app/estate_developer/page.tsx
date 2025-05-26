"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import d1 from "@/public/images/client (1).png";
import d2 from "@/public/images/client (2).png";
import d3 from "@/public/images/client (3).png";
import d4 from "@/public/images/client (4).png";
import d5 from "@/public/images/client (5).png";
import d6 from "@/public/images/client (6).png";
import d7 from "@/public/images/client (7).png";
import d8 from "@/public/images/client (8).png";
import d9 from "@/public/images/client (9).png";
// import d10 from "@/public/images/client (10).png";
import img from "@/public/images/bgimage1.png";
import img1 from "@/public/images/7578550-uhd_3840_2160_30fps 1.png";
import img2 from "@/public/images/download (1).webp";
import img3 from "@/public/images/developerbgimg.png";
import img4 from "@/public/images/OIP (1).jpg";
import img5 from "@/public/images/today8.jpg";
import img6 from "@/public/images/R.jpg";

const companyData = [
  {
    id: 1,
    name: 'ANP Corp',
    slug: 'anp-corp',
    logo: d1,
    logo1: img1,
  },
  {
    id: 2,
    name: 'majestique-developer',
    slug: 'majestique-developer',
    logo: d2,
    logo1: img2,
  },
  {
    id: 3,
    name: 'krunal-group',
    slug: 'krunal-group',
    logo: d3,
    logo1: img3, // Added default background
  },
  // Sample data for demonstrating the grid
  {
    id: 4,
    name: 'kasturi',
    slug: 'kasturi',
    logo: d4,
    logo1: img4, // Added default background
  },
  {
    id: 5,
    name: 'Solitaire',
    slug: 'Solitaire',
    logo: d5,
    logo1: img5, // Added default background
  },
  {
    id: 6,
    name: 'skyi-developers',
    slug: 'skyi-developers',
    logo: d6,
    logo1: img6, // Added default background
  },
 
];

const Developer = () => {
  // const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);
    const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/video4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-black opacity-50"></div>
</div>

        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <p className=" uppercase  tracking-wider  mb-4"
             
                      style={{ fontSize:'18px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
            
            >DEVELOPERS</p>
            
             <h2 className=" mb-6 font-[400] text-[56px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
              style={{ fontSize:'56px', fontFamily: 'Ivy Mode', letterSpacing: '1px' }}   >
              Partner with <br/> PropertyDrone Realty
            </h2>
            
           <p className=" tracking-wider  mb-4"
             
                      style={{ fontSize:'20px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
            
            >At PropertyDrone Realty, we collaborate with top developers to bring exclusive projects to serious buyers. We ensure the best properties get the visibility they deserve.
            </p>
          </div>
        </div>
      </section>  

      {/* Developers Count Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl max-w-6xl mx-auto px-4  md:text-5xl font-serif leading-tight mb-6">
          {companyData.length} developers
        </h2>
        
        {/* Partners Grid Section */}
        <div className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Our Trusted Partners</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {companyData.map((company, index) => (
            <motion.div
  key={company.slug}
  custom={index}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={cardVariants}
>
  <Link href={`/estate_developer/${company.slug}`} className="block">
    <div
      className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer h-64"
      onMouseEnter={() => setHoveredLogo(company.id)}
      onMouseLeave={() => setHoveredLogo(null)}
    >
      {/* Logo (Default View) */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 ${
          hoveredLogo === company.id ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src={company.logo}
          alt={company.name}
          width={150}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Hover State: Full Background with Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          hoveredLogo === company.id ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative w-full h-full">
          {/* Background Image */}
          <Image
            src={company.logo1}
            alt={`${company.name} Properties`}
            fill
            className="object-cover z-0"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          {/* View Details Button */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex justify-center">
            <div className="flex items-center py-2 px-6 bg-white/50 border border-white/50 backdrop-blur-[28px] rounded-lg transition-all hover:bg-[#172747] hover:backdrop-blur-[8px] hover:border-white hover:text-white text-[#172747]">
              <span className="mr-2 font-medium">View Details</span>
              <ArrowRight size={20} className="text-inherit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
</motion.div>

          ))}
        </div>
        
      </div>
    </div>
      </div>
    </>
  );
};

export default Developer;