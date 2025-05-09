"use client"
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import developerimg from '../../../public/images/developerbgimg.png'
import Image from 'next/image';

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
      <div className="mb-6 relative">
        <Image 
          src={developerimg}
          alt="Majestique The Ornate - Aerial View" 
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>

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
  );
}