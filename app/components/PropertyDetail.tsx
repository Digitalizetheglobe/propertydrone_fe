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
             <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full">
  {/* Call Now Button */}
  <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
    Call Now
  </button>

  {/* WhatsApp Button */}
 <a
  href={`https://wa.me/919561477575?text=${encodeURIComponent(
    `Check out this property: ${property.propertyName} in ${property.city} - https://propertydronerealty.com/properties/${property.id}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center"
  title="Chat on WhatsApp"
>
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.44l-.37-.22-3.69.97.99-3.59-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/>
  </svg>
  WhatsApp
</a>

  {/* Share Button */}
  <button
    type="button"
    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center"
    onClick={() => {
      if (navigator.share) {
        navigator.share({
          title: property.propertyName,
          text: `Check out this property: ${property.propertyName} in ${property.city}`,
          url: `https://propertydronerealty.com/properties/${property.id}`,
        });
      } else {
        alert('Share not supported on this browser.');
      }
    }}
    title="Share"
  >
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
    Share
  </button>
</div>
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
                <Link href="/contact-us-propertydrone-realty">
            <button className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
             
              <Lock className="text-gray-600 mb-4 cursor-pointer " size={24} />
              
            
               </button>
                <p className="text-gray-600  font-medium">Click to unlocked</p>
            
</Link>
           
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