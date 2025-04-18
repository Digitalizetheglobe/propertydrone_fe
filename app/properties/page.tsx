// app/properties/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import bg from '@/public/images/7578550-uhd_3840_2160_30fps 1.png';
import { motion } from 'framer-motion';

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
}

export default function Properties() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
  

  const locations = [
    'Baner',
    'Wakad',
    'Bavdhan',
    'Hinjawadi',
    'Balewadi',
    'Urse',
    'Hadapsar',
    'Kiwale',
    'Ravet',
    'Tathawade',
    'Punawale',
    'Somatane'
  ];
  
  const propertyTypes = [
    'Sales',
    'Lease',
    'Rent'
  ];

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/properties');
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        
        // Map API data to our expected format and ensure all required fields have values
        const formattedProperties = data.map((property: any) => ({
          id: property.id || Math.random(), // Fallback to random id if not provided
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
          featured: Boolean(property.featured)
        }));
        
        setProperties(formattedProperties);
        setError(null);
      } catch (err) {
        setError('Failed to fetch properties. Please try again later.');
        console.error('Error fetching properties:', err);
        // Set empty array to avoid undefined errors
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const resetFilters = () => {
    setActiveCategory('all');
    setFeaturedOnly(false);
  };

  const filteredProperties = properties.filter(property => {
    if (featuredOnly && !property.featured) return false;
    if (activeCategory !== 'all' && property.secondaryBadge.toLowerCase() !== activeCategory) return false;
    return true;
  });

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
        repeatType: "reverse", // Corrected to match allowed literal types
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex">
          {/* Sidebar Filters - Fixed Position */}
          <div className="w-1/4">
            <div className="bg-white shadow-md rounded-xl p-6 sticky top-6 max-h-screen overflow-auto border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetFilters}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Clear All
                </motion.button>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search properties"
                  className="w-full border border-gray-300 rounded-xl py-3 px-4 pl-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </motion.label>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 uppercase text-xs tracking-wider mb-4">Property Category</h3>
                <div className="grid grid-cols-3 gap-3">
                  {propertyCategories.map((category) => (
                    <motion.div 
                      key={category.id}
                      whileHover={{ scale: 1.05, backgroundColor: activeCategory === category.id ? "#dbeafe" : "#f9fafb" }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-colors duration-200 ${activeCategory === category.id ? 'bg-blue-100 text-blue-700 font-medium shadow-sm' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <div className="h-10 w-10 mb-2 rounded-full flex items-center justify-center bg-white shadow-sm">
                        {/* Placeholder for icon */}
                        <span className="text-sm font-medium">{category.name[0]}</span>
                      </div>
                      <span className="text-xs">{category.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 uppercase text-xs tracking-wider mb-4">Location</h3>
                <div className="grid grid-cols-2 gap-3">
                  {locations.map((location, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                      whileTap={{ scale: 0.98 }}
                      className="py-2.5 px-4 text-center border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    >
                      {location}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 uppercase text-xs tracking-wider mb-4">Property Type</h3>
                <div className="grid grid-cols-3 gap-3">
                  {propertyTypes.map((type, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                      whileTap={{ scale: 0.98 }}
                      className="py-2.5 px-4 text-center border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-medium"
                onClick={resetFilters}
              >
                Reset Search
              </motion.button>
            </div>
          </div>

          {/* Property Listings - Scrollable Content */}
          <div className="w-3/4 pl-6">
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
                  className="rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"
                ></motion.div>
              </div>
            ) : error ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 text-red-600 p-5 rounded-xl border border-red-100 shadow-sm"
              >
                {error}
              </motion.div>
            ) : (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((property) => (
                    <motion.div 
                      key={property.id} 
                      variants={cardVariants}
                      whileHover="hover"
                      onHoverStart={() => setHoveredCard(property.id)}
                      onHoverEnd={() => setHoveredCard(null)}
                      className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transform transition-all duration-300"
                    >
                      <div className="relative overflow-hidden">
                        <motion.div 
                          variants={imageVariants}
                          className="h-56 bg-gray-200 relative"
                        >
                          {/* Handle image object or string properly */}
                          <Image 
                            src={typeof property.image === 'object' ? property.image : bg} 
                            alt={property.propertyName}
                            fill
                            className="object-cover"
                          />
                          
                          {/* Semi-transparent gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                        </motion.div>
                        
                        <div className="absolute top-4 left-4 flex space-x-2">
                          <motion.span 
                            variants={badgeVariants}
                            initial="initial"
                            animate="animate"
                            className="px-3 py-1 bg-white text-xs font-medium rounded-full shadow-sm text-blue-700"
                          >
                            {property.badge}
                          </motion.span>
                          <motion.span 
                            variants={badgeVariants}
                            initial="initial"
                            animate="animate"
                            className="px-3 py-1 bg-blue-500 text-xs font-medium rounded-full shadow-sm text-white"
                          >
                            {property.secondaryBadge}
                          </motion.span>
                        </div>
                        
                        <motion.button
  variants={heartVariants}
  initial="rest"
  whileHover="hover"
  animate="rest"
  className="absolute bottom-4 right-4 bg-white p-2.5 rounded-full shadow-md transform transition-transform duration-300"
>

                          <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </motion.button>
                        
                        {/* Property name on image */}
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white">
                         
                          <div className="flex items-center text-xs text-gray-100 mt-1">
                            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {property.location} , {property.city}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5">
                      <h3 className="text-xl font-bold leading-tight">
                            {property.propertyName}
                          </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          <span className="font-semibold text-gray-800">Possession:</span> {property.possession}
                        </p>
                        
                        <div className="flex justify-between text-sm mb-5">
                          <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-lg">
                            <svg className="h-4 w-4 mr-1 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="font-medium text-gray-700">{property.topology} </span>
                          </div>
                          
                          <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-lg">
                            <svg className="h-4 w-4 mr-1 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                            </svg>
                            <span className="font-medium text-gray-700">{property.carpetArea} </span>
                          </div>
                        </div>
                        
                        <motion.div 
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ 
                            scale: hoveredCard === property.id ? 1.05 : 1, 
                            opacity: 1 
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="flex justify-between items-center"
                        >
                          <div className="font-bold text-xl text-blue-700">
                            ₹ {(property.tentativeBudget || 0).toLocaleString('en-IN')}
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
                          >
                            View Details
                          </motion.button>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="col-span-3 text-center py-12 text-gray-500"
                  >
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                      <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-700 mb-2">No properties match your current filters</h3>
                      <p className="text-gray-500">Try adjusting your search criteria or resetting filters.</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}