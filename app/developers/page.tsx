"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import img from "@/public/images/7578550-uhd_3840_2160_30fps 1.png";
import img1 from "@/public/images/7578550-uhd_3840_2160_30fps 1.png";

const companyData = [
  {
    id: 1,
    name: 'ANP Corp',
    slug: 'anp-corp',
    logo: d1,
    logo1: img,
  },
  {
    id: 2,
    name: 'Majestique Landmark',
    slug: 'majestique-landmark',
    logo: d2,
    logo1: img1,
  },
  {
    id: 3,
    name: 'Company 3',
    slug: 'company-3',
    logo: d3,
    logo1: img, // Added default background
  },
  // Sample data for demonstrating the grid
  {
    id: 4,
    name: 'Company 4',
    slug: 'company-4',
    logo: d4,
    logo1: img, // Added default background
  },
  {
    id: 5,
    name: 'Company 5',
    slug: 'company-5',
    logo: d5,
    logo1: img, // Added default background
  },
  {
    id: 6,
    name: 'Company 6',
    slug: 'company-6',
    logo: d6,
    logo1: img, // Added default background
  },
  {
    id: 7,
    name: 'Company 7',
    slug: 'company-7',
    logo: d7,
    logo1: img, // Added default background
  },
  {
    id: 8,
    name: 'Company 8',
    slug: 'company-8',
    logo: d8,
    logo1: img, // Added default background
  },
  {
    id: 9,
    name: 'Company 9',
    slug: 'company-9',
    logo: d9,
    logo1: img, // Added default background
  },
  
];

const Developer = () => {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image 
            src={img}
            alt="Luxury Property" 
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <p className="text-sm uppercase font-medium tracking-wider text-gray-300 mb-4">DEVELOPER</p>
            
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Partner with PropertyDrone Realty
            </h1>
            
            <p className="text-gray-200 mb-8 max-w-xl mx-auto">
              At PropertyDrone Realty, we collaborate with top developers to bring exclusive projects to serious buyers. We ensure the best properties get the visibility they deserve.
            </p>
          </div>
        </div>
      </section>  

      {/* Developers Count Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
          {companyData.length} developers
        </h2>
        
        {/* Partners Grid Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Our Trusted Partners</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {companyData.map((company) => (
                <Link href={`/developer/${company.id}`} key={company.id}>
                  <div
                    className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer h-64"
                    onMouseEnter={() => setHoveredLogo(company.id)}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    {/* Default state - Logo only */}
                    <div className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 ${hoveredLogo === company.id ? 'opacity-0' : 'opacity-100'}`}>
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={150}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Hover state - Full image with button overlay */}
                    <div 
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        hoveredLogo === company.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {/* Full background image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={company.logo1}
                          alt={`${company.name} Properties`}
                          fill
                          style={{ objectFit: "cover" }}
                          className="z-0"
                        />
                        
                        {/* Button positioned at the bottom of the image */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex justify-center">
                            <div className="flex items-center py-2 px-6 bg-white/50 border border-white/50 backdrop-blur-[28px] rounded-lg transition-all hover:bg-[#172747] hover:backdrop-blur-[8px] hover:border-white hover:text-white text-[#172747] z-50">
                                <span className="mr-2 font-medium">View Details</span>
                                <ArrowRight size={20} className="text-inherit" />
                            </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developer;