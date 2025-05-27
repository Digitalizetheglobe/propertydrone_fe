import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";

interface RealEstateBasic {
  id: number;
  title: string;
  description: string;
  keywords: string;
  images: string[];
  createdAt: string;
}

async function getRealEstateBasics() {
  const res = await fetch(`https://api.propertydronerealty.com/real-estate`, {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch real estate basics');
  return res.json();
}

export default async function RealEstateBasicsPage() {
  const realEstateBasics: RealEstateBasic[] = await getRealEstateBasics();

  return (
   <>
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
                
                         style={{ fontSize:'18px', fontFamily: 'Lato', letterSpacing: '0.5px' }}>OUR PROPERTIES</p>
               
               <h2
           style={{
           fontFamily: "Ivy Mode",
           fontWeight: 100,
           lineHeight: '150%',
           letterSpacing: '0'
           }}
           className="mb-4 text-white text-[42px] sm:text-[56px]"
         > Explore Verified Properties Across Prime Locations
               </h2>
               
                <p className=" tracking-wider text-gray-300 mb-4"
                
                         style={{ fontSize:'20px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
               
               > Browse a curated selection of residential and commercial spaces with detailed insights, drone views, and zero-brokerage listings—making your search smarter and faster.
               </p>
               
               {/* CTA Buttons */}
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button className="bg-[#172747] text-white hover:text-[#172747] hover:bg-white hover:border hover:border-[#172747] px-6 py-3 flex items-center justify-center gap-2 transition-colors">
                   Explore Properties
                   <ArrowRight size={18} />
                 </button>
                 <button className="border border-white bg-white text-[#172747] px-6 py-3 hover:bg-[#172747] hover:text-white transition-colors">
                   Book Consultation
                 </button>
               </div>
             </div>
           </div>
         </section>
   <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Real Estate Basics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {realEstateBasics.map((basic) => (
          <Link href={`/real/${basic.id}`} key={basic.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {basic.images && basic.images[0] && (
                <div className="relative h-48 w-full">
                  <Image
                    src={basic.images[0]}
                    alt={basic.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{basic.title}</h2>
                <p className="text-gray-600 mb-2 line-clamp-2">{basic.description}</p>
                <div className="flex flex-wrap gap-2">
                  {basic.keywords.split(',').map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                    >
                      {keyword.trim()}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(basic.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
} 