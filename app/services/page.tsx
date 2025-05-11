"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
import AOS from 'aos'; // Importing AOS library
import 'aos/dist/aos.css';

import propertydetails1 from "@/public/images/bgimage1.png"; // Adjust the path as necessary
// import propertydetails from "@/public/images/bgimage1.png"; // Adjust the path as necessary
import service from "@/public/images/service.png"; // Adjust the path as necessary
import service1 from "@/public/images/buliding.png";
import service2 from "@/public/images/service2.png"; // Adjust the path as necessary
import service3 from "@/public/images/service3.png"; // Adjust the path as necessary
import service4 from "@/public/images/service4.png"; // Adjust the path as necessary
import service5 from "@/public/images/service5.png"; // Adjust the path as necessary
import service6 from "@/public/images/service6.png"; // Adjust the path as necessary
// import service7 from "@/public/images/service.png"; // Adjust the path as necessary
export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
      const response = await fetch("http://localhost:5000/contacts", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'We will contact you soon!' });
        setFormData({ name: '', phone: '' });
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
    <>
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
          {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-3xl mx-auto text-[#172747]">
            <p className="text-sm uppercase font-medium tracking-wider text-[#172747] mb-4">OUR SERVICES</p>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Making Your Property Journey<br />
              Smarter, Simpler, and Faster
            </h1>
            <p className="text-[#172747] mb-8 max-w-xl mx-auto">
              At PropertyDrone Realty, we offer more than listings—we offer complete solutions.
              From stunning drone views to personalized consultations, we&apos;re here to make your 
              real estate experience effortless and rewarding.
            </p>
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
      <section className="py-8 bg-white">
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
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

      {/* Commercial Property Section */}
      <section className="py-8 bg-white">
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className=" py-8 relative flex flex-col md:flex-row items-center justify-center mobile-column-reverse" data-aos="fade-left">
  <div className="md:-mr-20 z-10 bg-[#2a4073] text-white p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box-2">
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
  <div className="w-[550px] h-[430px] relative z-0 mobile-img-box-2">
    <Image
      src={service1}
      alt="Commercial property"
      fill
      style={{ objectFit: "cover" }}
    />
  </div>
</div>
</div>
      </section>

      {/* Residential Property Section */}
<section className="py-8 bg-white">
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="relative flex flex-col md:flex-row items-center justify-center mobile-stack-normal" data-aos="fade-right">
  <div className="w-[550px] h-[430px] relative z-0 mobile-img-box-3">
    <Image
      src={service2}
      alt="Residential property"
      fill
      style={{ objectFit: "cover" }}
    />
  </div>
  <div className="md:-ml-20 z-10 bg-[#172747] text-white p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box-3">
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


      {/* Commercial Property Section */}
      <section className="py-8 bg-white">
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="relative flex flex-col md:flex-row items-center justify-center mobile-stack-reverse" data-aos="fade-left">
  <div className="md:-mr-20 z-10 bg-[#2a4073] text-white p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box">
    <h2 className="text-3xl md:text-4xl font-serif mb-6">
      Commercial Property Solutions
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
  <div className="w-[550px] h-[430px] relative z-0 mobile-img-box">
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

    <section className="py-8 justify-center bg-white">
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
    <div
      className="relative flex flex-col md:flex-row items-center justify-center mobile-stack-normal"
      data-aos="fade-right"
    >
      <div className="w-[550px] h-[430px] relative z-0 mobile-img-box">
        <Image
          src={service4}
          alt="Residential property"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="md:-ml-20 z-10 bg-[#172747] text-white p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box">
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


      {/* Commercial Property Section */}
     <section className="py-8 bg-white">
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
    <div
      className="relative flex flex-col md:flex-row items-center justify-center mobile-stack-reverse"
      data-aos="fade-left"
    >
      <div className="md:-mr-20 z-10 bg-[#2a4073] text-white p-6 md:w-[500px] w-[600px] h-[350px] shadow-lg mobile-text-box">
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
      <div className="w-[550px] h-[430px] relative z-0 mobile-img-box">
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


      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto">
            <div className="w-[605px] h-[550px]">
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
    </>
  );
}
