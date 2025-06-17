"use client"
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import developerimg from '../../../public/images/developerbgimg.png'
import Image from 'next/image';
import bgimage1 from '../../../public/images/bgimage2.png'
import { motion } from "framer-motion";
import image from '../../../public/images/medium.webp'
import Link from 'next/link';
export default function PropertyDeveloperShowcase() {
  // Sample data for the property
  const propertyData = {
    name: "MAJESTIQUE THE ORNATE",
    location: "At Pancard Club Road, Baner.",
    apartmentTypes: [
      { type: "3 BHK", area: "1141 Sq Ft" },
      { type: "3 BHK", area: "1260 Sq Ft" },
      { type: "4 BHK", area: "1682 Sq Ft" }
    ],
    description: "MAJESTIQUE THE ORNATE in Baner, Pune by Majestique Landmarks is a residential project. The project offers Apartments with perfect combination of contemporary architecture and features to provide comfortable living. The Apartment is of 3BHK and 4BHK. The project is spread over a total area of 2.5 acres of land. MajestiqueBaner has a total of 4 towers. The construction is of 310 flats. And it has 5 Flats per floor."
  };

  // Sample data for developers - you can add more as needed
  const developers = [
    "ANP Corp",
    "Majestique Developers",
    "Kunal Group",
    "Kasturi",
    "Skyi Developers",
    "Solitaire",
    "Marvel Realtors",
    "Kolte Patil",
    "Pride Group",
    "Rohan Builders"
  ];

  return (
    <>
     <section className="relative min-h-screen">
  <div className="absolute inset-0 z-0">
    <Image
      src={bgimage1}
      alt="Luxury Property"
      fill
      style={{ objectFit: "cover" }}
      priority
    />
    <div className="absolute inset-0 bg-black opacity-40"></div>
  </div>

  <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-6 bg-gradient-to-br text-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
      
      {/* Left: Text */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p
          className="uppercase text-[16px] sm:text-[18px] text-white pt-10 leading-[100%] tracking-normal mb-2"
          style={{ fontFamily: 'Lato' }}
        >
          Developer Details
        </p>
        <h2
          style={{
            fontFamily: "'Ivy Mode'",
            fontWeight: 300,
            lineHeight: '140%',
            letterSpacing: '0'
          }}
          className="text-white mb-0 text-[32px] sm:text-[50px]"
        >
          Kasturi Housing
        </h2>
        <p
          className="text-gray-300 max-w-3xl text-base leading-none mb-4"
          style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '1.5' }}
        >
          With Kasturi, you get a home that is a pure work of art, fuelled by passion, driven by vision.
          A passion to relentlessly better the best. A responsibility to go the extra mile. To give more than we commit.
        </p>
      
        <p
          className="text-gray-300 max-w-3xl text-base leading-none mb-4"
          style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '1.5' }}
        >
          At Kasturi, every home is a labour of love, a pursuit of perfection, a space meticulously curated with handpicked elements to offer an unparalleled living experience — in a word, a masterpiece.
        </p>
        <p
          className="text-gray-300 max-w-3xl text-base leading-none mb-4"
          style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '1.5' }}
        >
          Over the past 25 years, Kasturi has carefully curated its brand identity and philosophy around offering unique and groundbreaking real estate experiences. With over 4000 homes delivered across Pune, Kasturi is a market leader in quality and pricing across all micro markets developed in.
        </p>
       
       

        <div className="flex flex-col sm:flex-row mt-6 gap-4">
          <Link href="/contact-us-propertydrone-realty">
            <button className="border border-white rounded-[4px] bg-white text-[#172747] hover:bg-[#172747] px-6 py-3 hover:text-white transition-colors">
              Book Consultation
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={image}
          alt="Kasturi Housing"
          className="rounded-2xl shadow-lg"
          width={300}
          height={350}
          priority
        />
         <p
          className="text-gray-200 max-w-3xl text-base leading-none mt-4"
          style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '1.5' }}
        >
          <strong>Address:</strong> 9th Floor, Shivom Regency Baner showroom, Baner, Pune, Maharashtra 411045<br />
          <strong>Email:</strong> info@propertydronerealty.com<br />
          <strong>Mobile:</strong> +91 9175992110<br />
          <strong>Phone:</strong> +91 9175992110<br />
          <strong>Location:</strong> Maharashtra, India – Pune City
        </p>
      </motion.div>
    </div>
  </div>
</section>

    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Property Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h1 className="text-3xl md:text-4xl text-indigo-950 font-serif tracking-wide">
          {propertyData.name}
        </h1>
        <button className="bg-indigo-950 text-white px-4 py-2 mt-2 md:mt-0 flex items-center rounded">
          Properties By Developer <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
      <p className="text-gray-700 mb-6">{propertyData.location}</p>

      {/* Property Image */}
      {/* <div className="mb-6 relative">
        <Image 
          src={developerimg}
          alt="Majestique The Ornate - Aerial View" 
          className="w-full h-auto rounded-md shadow-md"
        />
      </div> */}

      {/* Apartment Types */}
      <div className="flex flex-wrap mb-6 gap-8">
        {propertyData.apartmentTypes.map((apt, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-indigo-950">{apt.type}</h2>
            <p className="text-gray-600">{apt.area}</p>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="mb-10">
        <p className="text-gray-700 leading-relaxed">
          {propertyData.description}
        </p>
      </div>

      {/* Developers Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Top Developers</h2>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <ul className="space-y-4">
            {developers.map((developer, index) => (
              <li key={index} className="text-gray-800 font-medium">{developer}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}