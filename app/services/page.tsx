"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";

// Import images
// Update the paths as needed for your app directory structure
import n1 from '../../public/images/n1.png';
import heroBackground from '../../public/images/7578550-uhd_3840_2160_30fps 1.png';
import residentialImage from '../../public/images/residentialproperty.png';
import commercialImage from '../../public/images/commercialproperty-1024x769.png';

export default function Home() {
  // Contact form state management
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  // Form handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));
  };

  interface FormData {
    name: string;
    phone: string;
  }

  interface SubmitStatus {
    success: boolean;
    message: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response: Response = await fetch("http://localhost:5000/contacts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus({ success: true, message: 'We will contact you soon!' });
        setFormData({ name: '', phone: '' });
      } else {
        setSubmitStatus({ success: false, message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Failed to submit. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>

      {/* Hero Section with Background */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
                      <Image 
            src={heroBackground}
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
            <p className="text-sm uppercase font-medium tracking-wider text-gray-300 mb-4">OUR SERVICES</p>
            
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Making Your Property Journey<br />
              Smarter, Simpler, and Faster
            </h1>
            
            <p className="text-gray-200 mb-8 max-w-xl mx-auto">
              At PropertyDrone Realty, we offer more than listings—we offer complete solutions.
              From stunning drone views to personalized consultations, we're here to make your 
              real estate experience effortless and rewarding.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors">
                Explore Properties
                <ArrowRight size={18} />
              </button>
              <button className="border border-gray-300 bg-white text-gray-800 px-6 py-3 hover:bg-gray-50 transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Property Section */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
    <div className="flex flex-col md:flex-row w-full shadow-xl">
      {/* Image container */}
      <div className="w-full md:w-3/5 h-64 md:h-auto relative">
        <Image
          src={residentialImage || heroBackground} // Fallback to hero if residential image not available
          alt="Residential property" 
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </div>
      
      {/* Text container */}
      <div className="w-full md:w-2/5 bg-[#172747] text-white p-8 flex flex-col justify-center md:min-h-full">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          Residential Property Consulting
        </h2>
        <p className="text-base">
          We recognize how difficult it can be to discover the ideal home. Because of 
          this, our team of experts is committed to offering knowledgeable suggestions 
          and direction on purchasing, renting, and investing in residential properties 
          available in Pune. We offer complete end-to-end services to ensure that our 
          customers discover their ideal home that fits their needs and budget, including 
          property assessments, inspections, market analysis, and negotiating help.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Commercial Property Section (Optional) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col-reverse md:flex-row w-full shadow-xl">
            {/* Text container */}
            <div className="w-full md:w-2/5 bg-[#2a4073] text-white p-8 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Commercial Property Solutions
              </h2>
              <p className="text-base">
                Finding the right commercial space is critical for business success. Our commercial 
                property experts provide tailored guidance for office spaces, retail locations, 
                warehouses, and investment properties. We analyze market trends, location advantages, 
                and growth potential to ensure your business investment meets both current needs and 
                future expansion goals.
              </p>
            </div>
            
            {/* Image container */}
            <div className="w-full md:w-3/5 h-64 md:h-auto">
              <div className="relative w-full h-full">
                <Image
                  src={commercialImage || heroBackground} // Fallback to hero if commercial image not available
                  alt="Commercial property" 
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto">
            {/* Image Section */}
            <div className="w-[605px] h-[550px]">
  <div className="relative w-full h-full">
    <Image 
      src={n1} 
      alt="Customer support representative" 
      fill
      style={{ objectFit: "cover" }}
      priority
    />
  </div>
</div>

            
            {/* Form Section */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full">
                <h2 className="text-3xl font-light text-center mb-6">Want to know more details?</h2>
                <p className="text-center text-gray-600 mb-8">Feel free to contact with us</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded transition duration-200"
                  >
                    {isSubmitting ? 'Submitting...' : 'Order a Call back'}
                  </button>
                  
                  {submitStatus && (
                    <div className={`mt-4 text-center ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </>
  );
}