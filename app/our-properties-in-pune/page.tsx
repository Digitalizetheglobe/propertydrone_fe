"use client";

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import bg from '@/public/images/7578550-uhd_3840_2160_30fps 1.png';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface ImageItem {
  path: string;
  filename: string;
  originalName: string;
}

interface Property {
  id: number;
  propertyName: string;
  location: string;
  city: string;
  tentativeBudget: number;
  badge: string;
  secondaryBadge: string;
  possession: string;
  topology: number;
  baths: number;
  carpetArea: number;
  image: any;
  featured: boolean;
  multipleImages?: ImageItem[];
  createdAt: string;
  propertyType: string;
}

export default function LuxeProperties() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LuxePropertiesContent />
    </Suspense>
  );
}

function LuxePropertiesContent() {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get('location');
  const lastWord = locationParam ? locationParam.trim().split(' ').pop() : null;

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLocation, setActiveLocation] = useState('all');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [availableLocations, setAvailableLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeImageIndexes, setActiveImageIndexes] = useState<Record<number, number>>({});
  const [activeTab, setActiveTab] = useState('all');

  // API base URL - ideally from environment variables
  const baseUrl = "https://api.propertydronerealty.com";

  const propertyCategories = [
    { id: 'all', name: 'All', icon: '/icons/home.svg' },
    { id: 'apartments', name: 'Apartments', icon: '/icons/apartment.svg' },
    { id: 'condos', name: 'Condos', icon: '/icons/condo.svg' },
    { id: 'duplexes', name: 'Duplexes', icon: '/icons/duplex.svg' },
    { id: 'houses', name: 'Houses', icon: '/icons/house.svg' },
    { id: 'industrial', name: 'Industrial', icon: '/icons/industrial.svg' },
    { id: 'land', name: 'Land', icon: '/icons/land.svg' },
    { id: 'offices', name: 'Offices', icon: '/icons/office.svg' },
    { id: 'plotting', name: 'Plotting', icon: '/icons/plotting.svg' },
    { id: 'retail', name: 'Retail', icon: '/icons/retail.svg' },
  ];
  
  const propertyTypes = [
    'Sales',
    'Lease',
    'Rent'
  ];

  // Function to get the image source from multipleImages or fallback
  const getImageSource = (property: Property, index: number = 0) => {
    if (property.multipleImages && property.multipleImages.length > 0) {
      // If there are valid images in multipleImages array
      if (property.multipleImages[index]?.path) {
        // Ensure the path is properly prefixed with baseUrl if it doesn't already include it
        const path = property.multipleImages[index].path;
        return path.startsWith('http') ? path : `${baseUrl}${path}`;
      }
    }
    
    // Fallback to single image or default bg
    // Also ensure the single image is properly prefixed
    if (typeof property.image === 'string') {
      return property.image.startsWith('http') ? property.image : `${baseUrl}${property.image}`;
    }
    
    // Final fallback to default background
    return bg;
  };

  // Image navigation functions with improved safety checks
  const nextImage = (propertyId: number, imagesLength: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (imagesLength <= 1) return; // Don't process if there's only one image
    
    setActiveImageIndexes(prev => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) + 1) % imagesLength
    }));
  };

  const prevImage = (propertyId: number, imagesLength: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (imagesLength <= 1) return; // Don't process if there's only one image
    
    setActiveImageIndexes(prev => ({
      ...prev,
      [propertyId]: (prev[propertyId] || 0) === 0 ? imagesLength - 1 : (prev[propertyId] || 0) - 1
    }));
  };

  // Function to safely check if property has multiple images
  const hasMultipleImages = (property: Property) => {
    return property.multipleImages && Array.isArray(property.multipleImages) && property.multipleImages.length > 1;
  };

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/properties`);
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        
        // Map API data to our expected format and ensure all required fields have values
        const formattedProperties = data.map((property: any) => {
          console.log('Mapping property:', property.id, 'propertyType:', property.propertyType);
          return {
            id: property.id || Math.random(),
            propertyName: property.propertyName || 'Unnamed Property',
            location: property.location || 'Unknown Location',
            city: property.city || 'Unknown City',
            tentativeBudget: property.tentativeBudget || 'N/A',
            badge: property.badge || 'N/A',
            secondaryBadge: property.secondaryBadge || 'N/A',
            possession: property.possession || 'No possession available',
            topology: property.topology || 0,
            baths: property.baths || 0,
            carpetArea: property.carpetArea || 0,
            image: property.image || bg,
            featured: Boolean(property.featured),
            multipleImages: property.multipleImages || [],
            createdAt: property.createdAt || new Date().toISOString(),
            propertyType: property.propertyType || '', // Ensure propertyType is mapped
          };
        });
        
        // Extract unique locations from properties
        const locations = [...new Set(formattedProperties.map((p: Property) => p.location))];
        setAvailableLocations(locations as string[]);
        
        // Sort properties to show latest first
        const sortedProperties = formattedProperties.sort((a: { createdAt: string }, b: { createdAt: string }) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        
        console.log('Formatted properties:', sortedProperties.map((p: Property) => ({ id: p.id, propertyType: p.propertyType })));
        setProperties(sortedProperties);
        setError(null);
      } catch (err) {
        setError('Failed to fetch properties. Please try again later.');
        console.error('Error fetching properties:', err);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [baseUrl]);

  // Initialize active image indexes in useEffect
  useEffect(() => {
    if (properties.length > 0) {
      const initialActiveIndexes: Record<number, number> = {};
      properties.forEach((property: Property) => {
        initialActiveIndexes[property.id] = 0; // Set initial active image to 0 for each property
      });
      setActiveImageIndexes(initialActiveIndexes);
    }
  }, [properties]);

  const resetFilters = () => {
    setActiveCategory('all');
    setActiveLocation('all');
    setFeaturedOnly(false);
  };

const getBudgetValue = (budget: any) => {
  if (typeof budget === 'number') return budget;
  if (typeof budget === 'string') {
    // Extract digits from string, e.g. "₹ 90 Lacs" => 9000000
    const match = budget.replace(/,/g, '').match(/(\d+(\.\d+)?)/);
    if (match) {
      let value = parseFloat(match[1]);
      // Check for "Lac" or "Cr" in the string and convert accordingly
      if (/lac/i.test(budget)) value *= 100000;
      if (/cr/i.test(budget)) value *= 10000000;
      return value;
    }
  }
  return NaN;
};

const filteredProperties = properties.filter(property => {
  console.log('Filtering property:', {
    id: property.id,
    propertyType: property.propertyType,
    activeTab,
    isLuxury: ['luxury', 'lux', 'luxary', 'Luxury'].includes((property.propertyType || '').trim())
  });

  // Featured filter
  if (featuredOnly && !property.featured) return false;

  // Category filter (robust budget extraction)
  const budget = getBudgetValue(property.tentativeBudget);
  // Location filter from query param
  if (lastWord && property.location.toLowerCase() !== lastWord.toLowerCase()) return false;

  // UI location filter
  if (activeLocation !== 'all' && property.location !== activeLocation) return false;

  return true;
});
// Removed duplicate declaration of filteredProperties
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const badgeVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 500
      }
    }
  };

  const heartVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      transition: {
        repeat: 1,
        repeatType: "reverse",
        duration: 0.3
      }
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Section title */}
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
      
      {/* Filter controls */}
            <div className="container mx-auto px-4 pt-4 pb-8">
      <div className='flex flex-col lg:flex-row'>

          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <div className="bg-white shadow-md rounded-[4px] p-4 lg:p-6 sticky top-6 overflow-auto border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <div className="flex bg-blue-50 p-2 border border-bg-gradient-to-br from-amber-100 to-blue-60 rounded-full w-full justify-center">
                  <button
                    className={`px-6 lg:px-12 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                      activeTab === 'all'
                        ? 'bg-white text-[#172747] shadow-sm'
                        : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab('all')}
                  >
                    All
                  </button>
                  <Link href={"/luxe-properties"} >
                    <button
                      className={`px-6 lg:px-12 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-all duration-200 cursor-pointer ${
                        activeTab === 'luxe'
                          ? 'bg-white border border-bg-gradient-to-br from-amber-100 to-blue-60 text-[#172747] shadow-sm'
                          : 'text-gray-500 '
                      }`}
                      onClick={() => setActiveTab('luxe')}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5.45 5.31L17.82 22 12 18.56 6.18 22l1.27-7.42L2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      Luxe
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold cursor-pointer text-[#172747]">Filters</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetFilters}
                  className="text-[#172747]text-sm font-medium hover:underline"
                >
                  Clear All
                </motion.button>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search properties"
                  className="w-full border border-gray-300 rounded-[4px] py-3 px-4 pl-12 focus:ring-2 focus:ring-[#172747] focus:border-transparent transition-all duration-200"
                />
                <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800">Featured Property</h3>
                  <motion.label 
                    className="relative inline-flex items-center cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    <input 
                      type="checkbox" 
                      checked={featuredOnly}
                      onChange={() => setFeaturedOnly(!featuredOnly)}
                      className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#172747] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#172747]"></div>
                  </motion.label>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-[#172747] uppercase text-xs tracking-wider mb-4">Location</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                    whileTap={{ scale: 0.98 }}
                    className={`py-2.5 px-4 text-center border ${activeLocation === 'all' ? 'border-[#172747] bg-blue-50 text-[#172747]' : 'border-gray-200 text-gray-700'} rounded-[4px] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#172747] focus:border-[#172747] transition-all duration-200`}
                    onClick={() => setActiveLocation('all')}
                  >
                    All Locations
                  </motion.button>
                  
                  {availableLocations.map((location, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                      whileTap={{ scale: 0.98 }}
                      className={`py-2.5 px-4 text-center border ${activeLocation === location ? 'border-[#172747] bg-blue-50 text-[#172747]' : 'border-gray-200 text-[#172747]'} rounded-[4px] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#172747] focus:border-[#172747] transition-all duration-200`}
                      onClick={() => setActiveLocation(location)}
                    >
                      {location}
                    </motion.button>
                  ))}
                </div>
              </div>
              

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
               className="bg-[#172747] cursor-pointer rounded-[4px] text-white hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] px-6 py-3 flex items-center justify-center gap-2 transition-colors "
                onClick={resetFilters}
              >
                Reset Search
              </motion.button>
            </div>
          </div>

      
              <div className="w-full lg:w-3/4 lg:pl-6 py-6">
              <div className="flex flex-col sm:flex-row pb-4 gap-4">

</div>
                  {(activeCategory !== 'all' || activeLocation !== 'all' || featuredOnly) && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-blue-50 p-3 rounded-[4px] mb-6 flex flex-wrap items-center gap-2"
                        >
                          <span className="text-sm font-medium text-[#172747] mr-2">Active Filters:</span>
                          
                          {activeCategory !== 'all' && (
                            <span className="bg-blue-100 text-[#172747] px-3 py-1 rounded-full text-xs font-medium flex items-center">
                              Category: {activeCategory}
                              <button 
                                onClick={() => setActiveCategory('all')}
                                className="ml-2 cursor-pointer text-[#172747] hover:text-blue-700"
                              >
                                ×
                              </button>
                            </span>
                          )}
                          
                          {activeLocation !== 'all' && (
                            <span className="bg-blue-100 text-[#172747] px-3 py-1 rounded-full text-xs font-medium flex items-center">
                              Location: {activeLocation}
                              <button 
                                onClick={() => setActiveLocation('all')}
                                className="ml-2 cursor-pointer text-[#172747] hover:text-blue-700"
                              >
                                ×
                              </button>
                            </span>
                          )}
                          
                          {featuredOnly && (
                            <span className="bg-blue-100 text-[#172747] px-3 py-1 rounded-full text-xs font-medium flex items-center">
                              Featured Only
                              <button 
                                onClick={() => setFeaturedOnly(false)}
                                className="ml-2  cursor-pointer text-[#172747] hover:text-blue-700"
                              >
                                ×
                              </button>
                            </span>
                          )}
                          
                          <button 
                            onClick={resetFilters}
                            className="ml-auto text-sm text-[#172747] hover:underline"
                          >
                            Clear All
                          </button>
                        </motion.div>
                      )}
                    
                      {loading ? (
                        <div className="flex justify-center items-center h-64">
                          <motion.div 
                            animate={{ 
                              rotate: 360,
                              transition: { 
                                duration: 1, 
                                repeat: Infinity, 
                                ease: "linear" 
                              } 
                            }}
                            className="rounded-full h-12 w-12 border-t-4 border-b-4 border-[#172747]"
                          ></motion.div>
                        </div>
                      ) : error ? (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 text-red-600 p-5 rounded-[4px] border border-red-100 shadow-sm"
                        >
                          {error}
                        </motion.div>
                      ) : (
                  <motion.div 
                    className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {filteredProperties.length > 0 ? (
                      filteredProperties.map((property) => (
                        <motion.div 
                          key={property.id} 
                          variants={cardVariants}
                          whileHover="hover"
                          onHoverStart={() => setHoveredCard(property.id)}
                          onHoverEnd={() => setHoveredCard(null)}
                          className="bg-white rounded-[4px] overflow-hidden shadow-md border border-gray-100 transform transition-all duration-300"
                        >
                          <div className="relative overflow-hidden">
                            <motion.div 
                              variants={imageVariants}
                              className="h-56 bg-gray-200 relative"
                            >
                              {/* Image with proper URL handling */}
                              <Image 
                                src={getImageSource(property, activeImageIndexes[property.id] || 0)}
                                alt={property.propertyName}
                                fill
                                className="object-cover"
                                priority={hoveredCard === property.id}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                onError={(e) => {
                                  // Fallback to default image if loading fails
                                  const target = e.target as HTMLImageElement;
                                  target.src = '/images/property-placeholder.jpg'; // Make sure to have this fallback image
                                }}
                              />
                              
                              {/* Only show navigation arrows if property has multiple images */}
                              {hasMultipleImages(property) && (
                                <>
                                  {/* Left arrow for previous image */}
                                  <button 
                                    onClick={(e) => prevImage(property.id, property.multipleImages?.length || 0, e)}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-1 rounded-full  bg-opacity-70 hover:bg-opacity-100 transition-all"
                                  >
                                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                                  </button>
                                  
                                  {/* Right arrow for next image */}
                                  <button 
                                    onClick={(e) => nextImage(property.id, property.multipleImages?.length || 0, e)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-1 rounded-full bg-opacity-70 hover:bg-opacity-100 transition-all"
                                  >
                                    <ChevronRight className="h-6 w-6 text-gray-700" />
                                  </button>
                                  
                                  {/* Image counter indicator */}
                                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs font-medium">
                                    {(activeImageIndexes[property.id] || 0) + 1}/{property.multipleImages?.length || 0}
                                  </div>
                                  
                                  {/* Image dots indicator */}
                                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                                    {property.multipleImages?.map((_, i) => (
                                      <button 
                                        key={i}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setActiveImageIndexes(prev => ({
                                            ...prev,
                                            [property.id]: i
                                          }));
                                        }}
                                        className={`h-2 w-2 rounded-full ${i === (activeImageIndexes[property.id] || 0) ? 'bg-white' : 'bg-white/50'} transition-all`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                              
                              {/* Semi-transparent gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                            </motion.div>
                            
                            {/* <div className="absolute top-4 left-4 flex space-x-2">
                              <motion.span 
                                variants={badgeVariants}
                                initial="initial"
                                animate="animate"
                                className="px-3 py-1 bg-white text-xs font-medium rounded-full shadow-sm text-[#172747]"
                              >
                                {property.badge}
                              </motion.span>
                              <motion.span 
                                variants={badgeVariants}
                                initial="initial"
                                animate="animate"
                                className="px-3 py-1 bg-[#172747] text-xs font-medium rounded-full shadow-sm text-white"
                              >
                                {property.secondaryBadge}
                              </motion.span>
                            </div> */}
                            
                            {/* Property location on image */}
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white">
                              <div className="flex items-center text-xs text-gray-100 mt-1">
                                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {property.location}, {property.city}
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-4 lg:p-5">
                            <h3 className="text-lg lg:text-xl mb-2 font-bold leading-tight">
                              {property.propertyName}
                            </h3>
                            
                            <div className=" sm:flex-row justify-between text-sm mb-5 gap-2">
                              <div className="flex mb-2 items-center bg-gray-50 px-3 py-1.5 rounded-[4px]">
                                <svg className="h-4 w-4 mr-1 text-[#172747]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                {String(property.topology).split("").map((item: string, index: number) => (
                                  <span key={index} className="text-gray-700 block"  style={{ fontSize: '14px', fontFamily: 'Lato', letterSpacing: '0.5px' }}>
                                    {item.trim()}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-[4px]">
                                <svg className="h-4 w-4 mr-1 text-[#172747]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                </svg>
                              <span
                                className="text-gray-700"
                                style={{ fontSize: '14px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
                              >
                                {(() => {
                                  const words = String(property.carpetArea).split(' ');
                                  return words.length > 5
                                    ? words.slice(0, 5).join(' ') + '...'
                                    : words.join(' ');
                                })()}
                              </span>
                              </div>
                            </div>
                            
                            <motion.div 
                              initial={{ scale: 0.95, opacity: 0 }}
                              animate={{ 
                                scale: hoveredCard === property.id ? 1.05 : 1, 
                                opacity: 1 
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              className="flex flex-col sm:flex-row justify-between items-center gap-3"
                            >
                              {property.tentativeBudget && !isNaN(Number(property.tentativeBudget)) && Number(property.tentativeBudget) !== 0 && (
                                <div className="font-bold text-lg lg:text-xl text-[#172747]">
                                  ₹ {Number(property.tentativeBudget).toLocaleString('en-IN')}
                                </div>
                              )}
                              
                              <Link href={`/our-properties-in-pune/${property.id}`} passHref className="w-full sm:w-auto">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="w-full bg-[#172747] hover:bg-white hover:border hover:border-[#172747] hover:text-[#172747] text-white text-sm font-medium px-4 py-2 rounded-[4px] shadow-sm transition-all duration-200"
                                >
                                  View Details
                                </motion.button>
                              </Link>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <p className="text-gray-600 mb-4">No properties match your current filters.</p>
                        <button 
                          onClick={resetFilters}
                          className="inline-flex items-center px-4 py-2 bg-[#172747] text-white rounded-[4px] hover:bg-[#0e1a34] transition-colors"
                        >
                          Reset Filters
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
                </div>
      </div>
      </div>
      
      {/* Footer */}
    </div>
    
  );
}