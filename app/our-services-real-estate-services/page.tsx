"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
import AOS from 'aos'; // Importing AOS library
import 'aos/dist/aos.css';

import propertydetails1 from "@/public/images/bgimage1.png"; // Adjust the path as necessary
import service from "@/public/images/service.png"; 
import service1 from "@/public/images/buliding.png";
import service2 from "@/public/images/service2.png"; 
import service3 from "@/public/images/service3.png"; 
import service4 from "@/public/images/service4.png"; 
import service5 from "@/public/images/service5.png"; 
import service6 from "@/public/images/service6.png"; 

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
      disable: 'mobile' // Disable animations on mobile devices to prevent overflow issues
    });
    
    // Force recalculation after animation completes to remove any leftover effects
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1100);
    
    return () => clearTimeout(timer);
  }, []);
  
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.propertydronerealty.com/contacts", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'We will contact you soon!' });
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        setSubmitStatus({ success: false, message: 'Something went wrong. Please try again.' });
      }
    } catch {
      setSubmitStatus({ success: false, message: 'Failed to submit. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image 
            src={propertydetails1}
            alt="Luxury Property" 
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-3xl mx-auto text-[#172747]">
            <p className=" uppercase  tracking-wider  mb-4"
             
                      style={{ fontSize:'18px', fontFamily: 'Lato', letterSpacing: '0.5px' }}>OUR SERVICES</p>
            <h2
              className="text-[#172747] mb-6 font-[400] text-[56px] leading-[140%] tracking-[1px] font-[Ivy Mode] 
                max-sm:text-[42px]"
              style={{ fontSize: '56px', fontFamily: 'Ivy Mode', letterSpacing: '1px' }}
            >
              Making Your Property Journey<br />
              Smarter, Simpler, and Faster
            </h2>
 <p className=" tracking-wider text-[#172747]  mb-4"
             
                      style={{ fontSize:'20px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
            
            > At PropertyDrone Realty, we offer more than listings—we offer complete solutions.
              From stunning drone views to personalized consultations, we&apos;re here to make your 
              real estate experience effortless and rewarding.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#172747] rounded-[4px] text-white hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] px-6 py-3 flex items-center justify-center gap-2 transition-colors">
                Explore Properties
                {/* <FiArrowRight size={18} /> */}
              </button>
              <button className="border border-gray-300 bg-white text-gray-800 px-6 py-3 hover:bg-gray-50 transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content wrapper with overflow control */}
      <div className="overflow-hidden w-full">
        {/* Residential Property Section */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="py-8 relative flex flex-col md:flex-row items-center justify-center mobile-adjusted" data-aos="fade-right">
              <div className="w-[550px] h-[430px] relative z-0 mobile-img-box">
                <Image
                  src={service}
                  alt="Residential property"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="md:-ml-20 z-10 bg-[#172747] text-white p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box">
                <h2 className="text-3xl md:text-4xl" 
                    style={{
                      fontFamily: "'Ivy Mode'",
                      fontWeight: 200,
                      fontSize: '38px',
                      lineHeight: '140%',
                      letterSpacing: '1px'
                    }}>
                  Residential Property Consulting
                </h2>
                <p className="text-base font-normal leading-none"
                  style={{ fontFamily: 'Lato', letterSpacing: '0.5px', color: '#FFFFFF99', lineHeight: '150%' }}>
                  We know the difficulties of selling a home, because that is what our job is. To increase visibility and spark interest in our customers' properties, we provide a variety of sales and marketing services through traditional as well as digital marketing channels. Our team of marketing specialists design customized marketing strategies and provide skilled negotiating services so that we can help you receive the highest potential price for your homes.
    </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Property Section */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="py-8 relative flex flex-col md:flex-row items-center justify-center mobile-column-reverse" data-aos="fade-left">
              <div className="md:-mr-20 z-10 bg-[#EEF1F5] text-[#172747] p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box-2">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                   Commercial Property Consulting
                </h2>
                <p className="text-base font-normal leading-none"
                  style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '150%', color: '#2a4073' }}>
                 Our consulting services for commercial real estate are specifically designed to satisfy the demands of companies based in Pune. We collaborate closely with company owners to ascertain their demands in order to locate locations that can satisfy their needs. Our team of professionals supports organizations with site selection, lease negotiations, property management, and asset disposition to find the perfect space for companies to conduct their operations.
    </p> 
              </div>
              <div className="w-[550px] h-[430px] relative z-0 mobile-img-box-2">
                <Image
                  src={service3}
                  alt="Commercial property"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Residential Property Section */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="py-8 relative flex flex-col md:flex-row items-center justify-center mobile-adjusted" data-aos="fade-right">
              <div className="w-[550px] h-[430px] relative z-0 mobile-img-box">
                <Image
                  src={service2}
                  alt="Residential property"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="md:-ml-20 z-10 bg-[#172747] text-white p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box">
                <h2 className="text-3xl md:text-4xl" 
                    style={{
                      fontFamily: "'Ivy Mode'",
                      fontWeight: 200,
                      fontSize: '38px',
                      lineHeight: '140%',
                      letterSpacing: '1px'
                    }}>
                  Real Estate Sales and Marketing
                </h2>
                <p className="text-base font-normal leading-none"
                  style={{ fontFamily: 'Lato', letterSpacing: '0.5px', color: '#FFFFFF99', lineHeight: '150%' }}>
                  We know the difficulties of selling a home, because that is what our job is. To increase visibility and spark interest in our customers' properties, we provide a variety of sales and marketing services through traditional as well as digital marketing channels. Our team of marketing specialists design customized marketing strategies and provide skilled negotiating services so that we can help you receive the highest potential price for your homes.
    </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Property Section */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="py-8 relative flex flex-col md:flex-row items-center justify-center mobile-column-reverse" data-aos="fade-left">
              <div className="md:-mr-20 z-10 bg-[#EEF1F5] text-[#172747] p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box-2">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                    Projects Under Contract
                </h2>
                <p className="text-base font-normal leading-none"
                  style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '150%', color: '#2a4073' }}>
                  With the projects we take under contract we provide thorough and clear project management services to our clients. It includes feasibility studies, site analyses, design and planning, construction management, and post-construction services. We help you manage your project from beginning to end, ensuring that it is completed as it was planned and within your budget.
    </p>
              </div>
              <div className="w-[550px] h-[430px] relative z-0 mobile-img-box-2">
                <Image
                  src={service3}
                  alt="Commercial property"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Residential Property Section */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="py-8 relative flex flex-col md:flex-row items-center justify-center mobile-adjusted" data-aos="fade-right">
              <div className="w-[550px] h-[430px] relative z-0 mobile-img-box">
                <Image
                  src={service4}
                  alt="Residential property"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="md:-ml-20 z-10 bg-[#172747] text-white p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box">
                <h2 className="text-3xl md:text-4xl" 
                    style={{
                      fontFamily: "'Ivy Mode'",
                      fontWeight: 200,
                      fontSize: '38px',
                      lineHeight: '140%',
                      letterSpacing: '1px'
                    }}>
                  Projects on Mandate
                </h2>
                <p className="text-base font-normal leading-none"
                  style={{ fontFamily: 'Lato', letterSpacing: '0.5px', color: '#FFFFFF99', lineHeight: '150%' }}>
                 Even when we take on projects on mandate, we leave no stone unturned to provide our client with best services. Like projects under contract, it also includes feasibility studies for projects, site analyses, design and planning, construction management, and post-construction services. Our team of experts can supervise your project, assuring it is concluded to the highest standards, on schedule, and within the allocated budget.
        </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Property Section */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="py-8 relative flex flex-col md:flex-row items-center justify-center mobile-column-reverse" data-aos="fade-left">
              <div className="md:-mr-20 z-10 bg-[#EEF1F5] text-[#172747] p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box-2">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                   Property Management
                </h2>
                <p className="text-base font-normal leading-none"
                  style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '150%', color: '#2a4073' }}>
               Being a real estate company, we very well know how time consuming and stress-intensive real estate management can be. For this exact reason, we provide full property management as one of our services. It consists of tenant vetting and placement, rent collecting, maintenance and repair, and financial reporting. Your rental revenue is increased while your properties are maintained in excellent shape.
                </p>
              </div>
              <div className="w-[550px] h-[430px] relative z-0 mobile-img-box-2">
                <Image
                  src={service5}
                  alt="Commercial property"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="py-8 relative flex flex-col md:flex-row items-center justify-center mobile-adjusted" data-aos="fade-right">
              <div className="w-[550px] h-[430px] relative z-0 mobile-img-box">
                <Image
                  src={service6}
                  alt="Residential property"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="md:-ml-20 z-10 bg-[#172747] text-white p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box">
                <h2 className="text-3xl md:text-4xl" 
                    style={{
                      fontFamily: "'Ivy Mode'",
                      fontWeight: 200,
                      fontSize: '38px',
                      lineHeight: '140%',
                      letterSpacing: '1px'
                    }}>
                  Projects on Mandate
                </h2>
                <p className="text-base font-normal leading-none"
                  style={{ fontFamily: 'Lato', letterSpacing: '0.5px', color: '#FFFFFF99', lineHeight: '150%' }}>
                 Even when we take on projects on mandate, we leave no stone unturned to provide our client with best services. Like projects under contract, it also includes feasibility studies for projects, site analyses, design and planning, construction management, and post-construction services. Our team of experts can supervise your project, assuring it is concluded to the highest standards, on schedule, and within the allocated budget.
        </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Property Section */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="py-8 relative flex flex-col md:flex-row items-center justify-center mobile-column-reverse" data-aos="fade-left">
              <div className="md:-mr-20 z-10 bg-[#EEF1F5] text-[#172747] p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box-2">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                   Property Management
                </h2>
                <p className="text-base font-normal leading-none"
                  style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '150%', color: '#2a4073' }}>
               Being a real estate company, we very well know how time consuming and stress-intensive real estate management can be. For this exact reason, we provide full property management as one of our services. It consists of tenant vetting and placement, rent collecting, maintenance and repair, and financial reporting. Your rental revenue is increased while your properties are maintained in excellent shape.
                </p>
              </div>
              <div className="w-[550px] h-[430px] relative z-0 mobile-img-box-2">
                <Image
                  src={service6}
                  alt="Commercial property"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

      



        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 overflow-hidden">
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto">
              <div className="w-full md:w-1/2 h-[550px] md:h-auto">
                <div className="relative w-full h-full">
                  <Image 
                    src={service6} 
                    alt="Customer support representative" 
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
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
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded transition duration-200"
                    >
                      {isSubmitting ? 'Submitting...' : 'Send Message'}
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
      </div>
    </div>
  );
}