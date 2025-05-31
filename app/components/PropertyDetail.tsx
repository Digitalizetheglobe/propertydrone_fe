// components/PropertyDetail.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Home, Bath, Bed, Square, Calendar, Video, ChevronUp, ChevronDown, Lock  } from 'lucide-react';
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
  beds?: string | number;
  baths?: string | number;
  googleMapUrl?: string;
  youtubeUrl?: string;
  youtubeTitle?: string;
}

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  // State declarations
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isBlurred, setIsBlurred] = useState(false);
  const [mainImage, setMainImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Event handlers
  const handleDropdownClick = () => {
    setIsBlurred(true);
  };

  const handleUnlock = () => {
    setIsBlurred(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Implementation for form submission would go here
  };

  // Image handling
  const baseUrl = "https://api.propertydronerealty.com"; // For dev — ideally from env
  const propertyImages = property?.multipleImages?.map(img => `${baseUrl}${img.path}`) || [];

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
    area: property.carpetArea || '',
    year: property.createdAt ? new Date(property.createdAt).getFullYear().toString() : '2022',
    heating: 'Central',
    cooling: 'Central AC',
    parking: '2 Garage',
    basement: 'Finished',
  };

  // Helper function to extract YouTube video ID
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
      <div className="min-h-screen bg-[#F1EEFF]">
        <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Background Image */}
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
      
            > {property.propertyName}
            </h1>

            <p className="text-white text-[18px] sm:text-[28px] my-4 md:mb-0 leading-none">
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

        <main className="max-w-6xl mx-auto px-4 py-8 ">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
            {/* Left side - Image Gallery */}
            <div className="md:w-1/2 self-start bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
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
              </div>
            </div>

            {/* Right side - Property details */}
            <div className="md:w-1/2 bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold text-gray-900">{property.propertyName}</h1>
                <div className="flex items-center text-sm text-orange-500 mb-6">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}, {property.city}
                </div>
              </div>
              
              <h2 className="text-xl font-bold mb-4">{property.topology || 'RESIDENCE'}</h2>
              
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
              
              {/* Call to action button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now 
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
          {/* Property Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                 <h2 className="text-[#172747] mb-6 font-[300] text-[32px] leading-[140%] tracking-[1px] font-[Ivy Mode]">About This Property</h2>
                <p className="text-gray-700 max-w-3xl ml-2 leading-none"
              style={{ fontFamily: 'Lato', letterSpacing: '0.5px',lineHeight: '1.6' }}>
                  {property.seoDescription || `Immaculate ${property.city} apartment. Fresh color palette, space that could be for
                  work, entertaining, or simply to showcase a growing art collection. Elegant features such
                  as plush comfortable, unique trim, tall ceilings throughout the light-drenched rooms that will
                  make you feel instantly at home.`}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Property Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col" style={{ fontFamily: 'Lato', letterSpacing: '0.5px',lineHeight: '1.6' }}>
                    <p className="text-gray-600"><span className="font-medium">Property Name:</span> {property.propertyName}</p>
                    <p className="text-gray-600"><span className="font-medium">Topology:</span> {property.topology}</p>
                    <p className="text-gray-600"><span className="font-medium">Carpet Area:</span> {property.carpetArea}</p>
                    <p className="text-gray-600"><span className="font-medium">City:</span> {property.city}</p>
                  </div>
                  <div className="flex flex-col"  style={{ fontFamily: 'Lato', letterSpacing: '0.5px',lineHeight: '1.6' }}>
                    <p className="text-gray-600"><span className="font-medium">Location:</span> {property.location}</p>
                    <p className="text-gray-600"><span className="font-medium">Budget:</span> {property.tentativeBudget || 'Contact for details'}</p>
                    <p className="text-gray-600"><span className="font-medium">Possession:</span> {property.possession || 'Contact for details'}</p>
                    <p className="text-gray-600"><span className="font-medium">Listed:</span> {new Date(property.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-[#172747] rounded-lg shadow-md p-6 mb-8 text-white">
                 <h2 className="text-white mb-6 font-[300] text-[32px] leading-[140%] tracking-[1px] font-[Ivy Mode] mb-4">Contact the listing owner</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
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