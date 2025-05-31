// components/PropertyDetail.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Phone, Mail,  Home, Bath, Bed, Square, Calendar, MapPin, Video, ChevronUp, ChevronDown, Lock  } from 'lucide-react';
import defaultImg from '@/public/images/7578550-uhd_3840_2160_30fps 1.png';
import image from '@/public/images/bgimage2.png';
import propertydetails from '@/public/images/bgimage1.png';
import { ArrowRight } from 'lucide-react';
import demoimage from '@/public/images/7578550-uhd_3840_2160_30fps 1.png';

interface PropertyImage {
  path: string;
  filename: string;
  originalName: string;
}

interface Property {
  id: number;
  propertyName: string;
  topology: string;
  carpetArea: string;
  city: string;
  location: string;
  tentativeBudget: string;
  possession: string;
  multipleImages: PropertyImage[];
  slug: string;
  seoDescription: string;
  seoTitle: string;
  seoKeywords: string;
  createdAt: string;
  updatedAt: string;
  propertyType?: string;
  beds?: string | number;
  baths?: string | number;
  googleMapUrl?: string;
  youtubeUrl?: string;
  youtubeTitle?: string;
}

interface PropertyDetailProps {
  property: Property;
}

export default function LuxePropertyDetail({ property }: PropertyDetailProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [activeTab, setActiveTab] = useState('Overview');
  const [mainImage, setMainImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const [isBlurred, setIsBlurred] = useState(false);

  const handleDropdownClick = () => {
    setIsBlurred(true);
  };

  const handleUnlock = () => {
    setIsBlurred(false);
  };

  // Add styles for hiding scrollbar
  const scrollbarHideStyles = {
    scrollbarWidth: 'none',  /* Firefox */
    msOverflowStyle: 'none',  /* IE and Edge */
    '&::-webkit-scrollbar': {  /* Chrome, Safari and Opera */
      display: 'none'
    }
  };

  // Auto slide functionality
  useEffect(() => {
    if (property.multipleImages?.length > 1) {
      const interval = setInterval(() => {
        setMainImage((prev) => (prev + 1) % property.multipleImages.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [property.multipleImages]);

  const handlePrevImage = () => {
    setMainImage((prev) => (prev - 1 + property.multipleImages.length) % property.multipleImages.length);
  };

  const handleNextImage = () => {
    setMainImage((prev) => (prev + 1) % property.multipleImages.length);
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Map property details for display
  const propertyDetails = {
    beds: property.topology?.includes('BHK') ? property.topology.charAt(0) : '4',
    baths: property.topology?.includes('BHK') ? Math.max(1, parseInt(property.topology.charAt(0)) - 1) : '3',
    area: property.carpetArea || '2500 sq ft',
    year: property.createdAt ? new Date(property.createdAt).getFullYear().toString() : '2022',
    heating: 'Central',
    cooling: 'Central AC',
    parking: '2 Garage',
    basement: 'Finished',
  };

  interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleInputChange = (e: InputChangeEvent): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Implementation for form submission would go here
  };

  // Set up the base URL for images
  const baseUrl = "https://api.propertydronerealty.com"; // For dev — ideally from env

  // Process the image paths
  const propertyImages = property?.multipleImages?.map(img => `${baseUrl}${img.path}`) || [];
  const getYouTubeVideoId = (url: string | undefined) => {
    if (!url) return 'DrIKLgR6STs'; // Default ID

    const urlObj = new URL(url);
    if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
      const videoId = urlObj.searchParams.get('v');
      return videoId || 'DrIKLgR6STs';
    } else if (urlObj.hostname === 'youtu.be') {
      const videoId = urlObj.pathname.split('/').pop();
      return videoId || 'DrIKLgR6STs';
    }
    return 'DrIKLgR6STs'; // Default ID for unrecognized formats
  };

  const youtubeVideoId = getYouTubeVideoId(property?.youtubeUrl);

  return (
    <>
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
      <div className="min-h-screen bg-amber-50 " >
    
        <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Background Image - Using standard img tag for external URLs */}
          <div className="absolute inset-0 h-full w-full">
            <Image
              src={image}
              alt={property.propertyName}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative flex flex-col max-w-6xl justify-center h-full ml-10 text-white px-4">
               <h1
        style={{
        fontFamily: "Ivy Mode",
        fontWeight: 100,
        lineHeight: '150%',
        letterSpacing: '0'
        }}
        className="mb-4 text-white text-[42px] sm:text-[56px]"
      
            >
              {property.propertyName}
            </h1>

             <p className="text-white text-[18px] sm:text-[28px] my-4 md:mb-0 leading-none"
          style={{ fontWeight:'300',fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '100%' }}>
              <Link href="/">
                <button className="bg-transparent text-white hover:text-red-700 rounded">
                  Home
                </button>
              </Link> / <Link href="/properties">
                <button className="bg-transparent text-white hover:text-red-700 rounded">
                  Properties
                </button>
              </Link> / <Link href={`/properties/${property.id}`}>
                <button className='text-[#FEEB8F]'>{property.propertyName}</button>
              </Link>
            </p>
          </div>
        </section>
        <main className="max-w-6xl mx-auto px-4 py-8">
        <div
  className="py-6 bg-amber-50"
 
>
            <Head>
              <title>{property.seoTitle || `${property.propertyName} - ${property.city}`}</title>
              <meta name="description" content={property.seoDescription || `Luxury property listing for ${property.propertyName}`} />
              <meta name="keywords" content={property.seoKeywords} />
            </Head>
            
           
          </div>

          <div className="max-w-6xl pb-6 mx-auto flex flex-col md:flex-row gap-6">
              {/* Left side */}
              <div className="md:w-1/2 self-start bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative">
                  {/* Luxe badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className=" rounded-full  flex items-center">
                      <AnimatedStarButton />
                     
                    </div>
                  </div>

                  {/* Main property image */}
                  <div className="relative h-64 md:h-96 bg-gray-200">
                    {property.multipleImages?.length > 0 ? (
                      <img
                        src={`${baseUrl}${property.multipleImages[mainImage].path}`}
                        alt={property.propertyName}
                        className="object-cover w-full h-full cursor-pointer"
                        onClick={() => openModal(mainImage)}
                      />
                    ) : (
                                        <Image
                                          src={demoimage}
                                          alt={property.propertyName}
                                          className="object-cover w-full h-full cursor-pointer"
                                          onClick={() => openModal(mainImage)}
                                        />
                                      )}
                    
                    {/* Navigation arrows */}
                    {property.multipleImages?.length > 1 && (
                      <>
                        <button 
                          onClick={handlePrevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>

                        <button 
                          onClick={handleNextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Thumbnail gallery */}
                  <div className="flex space-x-2 overflow-x-auto py-2 px-2 scrollbar-hide">
                    {property.multipleImages?.map((img, index) => (
                      <div
                        key={index}
                        className={`relative h-20 w-32 flex-shrink-0 cursor-pointer rounded-md overflow-hidden
                          ${mainImage === index ? 'ring-4 ring-[#172747]' : 'opacity-80'}`}
                        onClick={() => {
                          setMainImage(index);
                          openModal(index);
                        }}
                      >
                        <img   
                          src={`${baseUrl}${img.path}`}
                          alt={`Thumbnail ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Watermark overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <div className="text-4xl font-bold text-gray-700">{property.propertyName}</div>
                  </div>
                </div>
              </div>

              {/* Right side - Property details */}
              <div className="md:w-1/2 bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-start">
                  <h1 className="text-2xl font-bold text-gray-900">{property.propertyName}</h1>
                 <div className="flex items-center text-sm text-orange-500 mb-6">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {property.location}, {property.city}
                </div>
                </div>
                
                <h2 className="text-xl font-bold mb-4">{property.topology || 'LUXURY RESIDENCE'}</h2>
                
                {/* Location */}
                
                
                {/* Verified dealer */}
                {/* <div className="flex items-center bg-gray-100 text-gray-800 p-3 rounded-md mb-6">
                  <svg className="w-5 h-5 mr-2 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>Verified Property Listing</span>
                  <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div> */}
                
                {/* Property details */}
                <div className="border border-gray-200 rounded-lg mb-6 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Bedrooms</div>
                      <div className="text-lg font-bold">{property.beds || '-'}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Bathrooms</div>
                      <div className="text-lg font-bold">{property.baths || '-'}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Carpet Area</div>
                      <div className="text-lg font-bold">{property.carpetArea ? `${property.carpetArea} sq.ft` : '-'}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Possession</div>
                      <div className="text-lg font-bold">{property.possession || 'Contact for details'}</div>
                    </div>
                  </div>
                </div>
                
                {/* Price */}
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <div className="text-xl font-bold">{property.tentativeBudget || 'Price on request'}</div>
                </div>
                
                {/* Contact section */}
                {/* <div className="bg-blue-50 p-4 rounded-lg mb-6 text-center text-blue-600">
                  Interested in this property? Contact us for more details
                </div> */}
                
                {/* Call to action button */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Now
                </button>
              </div>
            </div>
          <div className="max-w-6xl mx-auto py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-6">
        {/* Location Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center" >
              <MapPin className="mr-2 text-gray-600" size={20} />
              Location
            </h2>
            <button className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-green-700 transition-colors">
              <a href={property?.googleMapUrl ? property.googleMapUrl : "https://www.google.com/maps?q=9th+Floor,+Shivam+Regency,+Baner+Shivayog,+Baner,+Pune,+Maharashtra+411045"} target="_blank" rel="noopener noreferrer">
                📍 View on Map
              </a>
            </button>
          </div>
          
          <div className="space-y-2 text-gray-700">
            <div className="flex items-start">
              <MapPin className="mr-2 mt-1 text-gray-400" size={16} />
              {property.location && property.city ? `${property.location}, ${property.city}` : property.location ? property.location : property.city ? property.city : 'Location details not available'}
            </div>
           
          </div>
        </div>

        {/* Pros & Cons Section */}
         <div className="relative bg-white rounded-lg shadow-sm border p-4">
      {/* Main Content */}
      <div className={`transition-all duration-300 ${isBlurred ? 'blur-sm pointer-events-none' : ''}`}>
        <h2 className="text-[#172747] mb-4 font-[300] text-[32px] leading-[140%] tracking-[1px] font-[Ivy Mode]">Pros & Cons</h2>
        
        <div className="space-y-3">
          {/* Pros */}
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-green-600 font-medium">👍 Pros</span>
              </div>
              <button 
                onClick={handleDropdownClick}
                className="text-green-600 hover:text-green-700 transition-colors cursor-pointer"
              >
                <ChevronUp size={20} />
              </button>
            </div>
          </div>

          {/* Cons */}
          <div className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-red-600 font-medium">👎 Cons</span>
              </div>
              <button 
                onClick={handleDropdownClick}
                className="text-red-600 hover:text-red-700 transition-colors cursor-pointer"
              >
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lock Overlay */}
      {isBlurred && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-lg">
          <div className="text-center">
          
              {/* <button 
                onClick={handleUnlock}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
              >
                Unlock Content
              </button> */}
              {/* </Link> */}
                
            <button className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
             <Link href="/contact-us-propertydrone-realty">
              <Lock className="text-gray-600 cursor-pointer " size={24} />
            </Link>
               </button>

            {/* <p className="text-gray-600 mb-4 font-medium">Content is locked</p> */}
            
          </div>
        </div>
      )}
    </div>
      </div>

      {/* Right Column - Video Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg flex items-center text-[#172747] mb-6 font-[300] text-[32px] leading-[140%] tracking-[1px] font-[Ivy Mode]">
          <Video className="mr-2 text-gray-600" size={20} />
          Video
        </h2>
        
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700">Walkthrough{property.youtubeTitle && `: ${property.youtubeTitle}`}</h3>
          
          {/* Video Thumbnail */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden">
            <a href={property?.youtubeUrl ? property.youtubeUrl : "https://youtu.be/DrIKLgR6STs"} target="_blank" rel="noopener noreferrer">
              <img 
                src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                alt="Property walkthrough video thumbnail"
                className="w-full h-auto"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all cursor-pointer">
                  <div className="w-0 h-0 border-l-[20px] border-l-gray-800 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Information */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-[#172747] mb-6 font-[300] text-[32px] leading-[140%] tracking-[1px] font-[Ivy Mode]">About This Property</h2>
                <p className="text-gray-700 max-w-3xl ml-2 leading-none"
              style={{ fontFamily: 'Lato', letterSpacing: '0.5px',lineHeight: '1.6' }}>
                  {property.seoDescription || `Immaculate luxurious ${property.city} apartment. Fresh color palette, space that could be for
                  work, entertaining, or simply to showcase a growing art collection. Elegant features such
                  as plush comfortable, unique trim, tall ceilings throughout the light-drenched rooms that will
                  make you feel instantly at home. Concrete floors, clean white paint finish throughout, a
                  miniature chef-style open-loft multipurpose connection, effortless doors with highest end
                  materials, fully natural.`}
                </p>
                   <p className="text-gray-700 max-w-3xl ml-2 leading-none"
              style={{ fontFamily: 'Lato', letterSpacing: '0.5px',lineHeight: '1.6' }}>
                  All units are flexible whether with original layout or a blank canvas, which are easily
                  converted to optimum needs. This opportunity to express and work development did not include
                  the commercial or residential complications of bigger cities within smaller areas, huge lots
                  and big ideas set apart from city liabilities.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-[#172747] mb-6 font-[300] text-[32px] leading-[140%] tracking-[1px] font-[Ivy Mode]">Property Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(propertyDetails).map(([key, value]) => (
                    <div key={key} className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-md">
                       <div className=" text-gray-700 "
              style={{ fontFamily: 'Lato', letterSpacing: '0.5px',lineHeight: '1.6' }}>
                  
                        {key === 'beds' && <Bed className="w-6 h-6 text-gray-600" />}
                        {key === 'baths' && <Bath className="w-6 h-6 text-gray-600" />}
                        {key === 'area' && <Square className="w-6 h-6 text-gray-600" />}
                        {key === 'year' && <Calendar className="w-6 h-6 text-gray-600" />}
                        {key === 'heating' && <Home className="w-6 h-6 text-gray-600" />}
                        {key === 'cooling' && <Home className="w-6 h-6 text-gray-600" />}
                        {key === 'parking' && <Home className="w-6 h-6 text-gray-600" />}
                        {key === 'basement' && <Home className="w-6 h-6 text-gray-600" />}
                      </div>
                      <p className="font-medium text-gray-800"     style={{ fontFamily: 'Lato', letterSpacing: '0.5px',lineHeight: '1.6' }}>{value}</p>
                      <p className="text-xs text-gray-500 capitalize"     style={{ fontFamily: 'Lato', letterSpacing: '0.5px',lineHeight: '1.6' }}>{key}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
               <h2  className="text-[#172747] mb-6 font-[300] text-[32px] leading-[140%] tracking-[1px] font-[Ivy Mode]">Property Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col text-gray-700 max-w-3xl ml-2 leading-none"
              style={{ fontFamily: 'Lato', letterSpacing: '0.5px',lineHeight: '1.6' }}>
                    <p className="text-gray-600"><span >Property Name:</span> {property.propertyName}</p>
                    <p className="text-gray-600"><span >Topology:</span> {property.topology}</p>
                    <p className="text-gray-600"><span >Carpet Area:</span> {property.carpetArea}</p>
                    <p className="text-gray-600"><span>City:</span> {property.city}</p>
                  </div>
                 <div className="flex flex-col text-gray-700 max-w-3xl ml-2 leading-none"
              style={{ fontFamily: 'Lato', letterSpacing: '0.5px',lineHeight: '1.6' }}>
                     <p className="text-gray-600"><span >Location:</span> {property.location}</p>
                    <p className="text-gray-600"><span >Budget:</span> {property.tentativeBudget || 'Contact for details'}</p>
                    <p className="text-gray-600"><span >Possession:</span> {property.possession || 'Contact for details'}</p>
                    <p className="text-gray-600"><span >Listed:</span> {new Date(property.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-[#172747] rounded-lg shadow-md p-6 mb-8 text-white">
                <h2 className="text-white mb-6 font-[300] text-[32px] leading-[140%] tracking-[1px] font-[Ivy Mode] mb-4">Contact the listing owner</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 ">
                    
                    <label htmlFor="name" className="block text-sm mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded bg-gray-700 text-white"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded bg-gray-700 text-white"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded bg-gray-700 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-2 rounded bg-gray-700 text-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#172747] hover:bg-white hover:text-[#172747] border border-white text-white font-medium py-2 px-4 rounded"
                  >
                    Send
                  </button>
                </form>
              </div>

              {/* Agent Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Realtor Info</h2>
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={defaultImg}
                      alt="Realtor"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Rachel</p>
                    <p className="text-sm text-gray-600">Licensed Real Estate Agent</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-5 h-5 mr-2" />
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-5 h-5 mr-2" />
                    <p>rachel@realestate.com</p>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-2" />
                    <p>{property.location} Real Estate Group</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a href="#" className="bg-gray-200 p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-200 p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-200 p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-200 p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Image Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {property.multipleImages?.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 text-white hover:text-gray-300"
                  >
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 text-white hover:text-gray-300"
                  >
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              <img
                src={`${baseUrl}${property.multipleImages[currentImageIndex].path}`}
                alt={property.propertyName}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const AnimatedStarButton = () => {
  return (
    <div className="relative">
      <style jsx>{`
        @keyframes border-glow-translate {
          0% {
            transform: translateX(-50%) scaleX(1);
          }
          100% {
            transform: translateX(200%) scaleX(0.8);
          }
        }

        @keyframes border-glow-scale {
          0% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(1.2);
          }
        }

        @keyframes star-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes star-shine {
          0% {
            opacity: 0;
            transform: scale(1);
          }
          100% {
            opacity: 0.3;
            transform: scale(1.5);
          }
        }
      `}</style>

      <button className="group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px overflow-hidden">
        <span className="absolute inset-0 rounded-full overflow-hidden">
          <span className="inset-0 absolute pointer-events-none select-none">
            <span
              className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
              style={{
                background:
                  'linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))',
              }}
            ></span>
          </span>
        </span>

        <span
          className="inset-0 absolute pointer-events-none select-none"
          style={{ animation: 'border-glow-translate 10s ease-in-out infinite alternate' }}
        >
          <span
            className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
            style={{
              animation: 'border-glow-scale 10s ease-in-out infinite alternate',
              background:
                'linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))',
            }}
          ></span>
        </span>

        <span className="flex items-center justify-center gap-1 relative z-[1] dark:bg-neutral-950/90 bg-neutral-50/90 rounded-full py-2 px-4 pl-2 w-full">
          <span className="relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-80 dark:opacity-100"
              style={{
                animation:
                  'star-rotate 14s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate',
              }}
            >
              <path
                d="M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z"
                fill="url(#paint0_linear)"
                stroke="url(#paint1_linear)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="paint0_linear" x1="-0.5" y1="9" x2="15.5" y2="-1.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7A69F9" />
                  <stop offset="0.575" stopColor="#F26378" />
                  <stop offset="1" stopColor="#F5833F" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="-0.5" y1="9" x2="15.5" y2="-1.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7A69F9" />
                  <stop offset="0.575" stopColor="#F26378" />
                  <stop offset="1" stopColor="#F5833F" />
                </linearGradient>
              </defs>
            </svg>

            <span
              className="rounded-full size-11 absolute opacity-0 dark:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg"
              style={{
                animation: 'star-shine 14s ease-in-out infinite alternate',
                background:
                  'linear-gradient(135deg, rgb(59, 196, 242), rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))',
              }}
            ></span>
          </span>

          <span className=" tracking-[2px] bg-gradient-to-b ml-1.5 dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-xs text-transparent group-hover:scale-105 transition transform-gpu font-bold">
            LUXE
          </span>
        </span>
      </button>
    </div>
  );
};

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  
  try {
    const res = await fetch(`https://api.propertydronerealty.com/properties/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch property');
    }
    const property = await res.json();
    
    return {
      props: {
        property,
      },
    };
  } catch (error) {
    console.error('Error fetching property:', error);
    return {
      props: {
        property: null,
      },
    };
  }
}