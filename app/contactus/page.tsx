"use client"
import Image from 'next/image';
import Link from 'next/link';
import bg1 from "@/public/images/7578550-uhd_3840_2160_30fps 1.png";
import logo from "@/app/images/PropertyDrone-Logo.png";  // Adjust the path to your logo file
import { useState } from 'react';

export default function ContactUs() {
  
  // State for menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '', // Added phone property
    mobile: '' // Added mobile property for API consistency
  });

  // Added states for form submission feedback
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  interface ChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  
  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    phone: string;
    mobile: string;
  }
  
  interface FormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      // Use the same API endpoint as in your example
      const response = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.phone || formData.mobile, // Use phone as mobile if available
          email: formData.email,
          message: formData.message
        }),
      });

      if (!response.ok) throw new Error("Failed to submit contact form");

      console.log('Form submitted successfully');
      setSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        mobile: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="relative">
      {/* Hero Section with Form */}
      <div className="relative min-h-screen bg-gray-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={bg1}
            alt="Luxury Property" 
            layout="fill" 
            objectFit="cover" 
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      
        {/* Main Content with Contact Form Overlay */}
       
      </div>
      <section className="flex flex-col md:flex-row justify-center items-center h-80 p-6 bg-white">
      {/* Left Form Section */}
      <div
        className="w-full max-w-md bg-[#172747] text-white p-12 rounded-lg shadow-lg "
        style={{ marginTop: "-160px",zIndex: 99 }}
      >

        <h2 className="text-2xl font-light mb-2">Let's Connect!</h2>
        <p className="text-sm text-gray-300 mb-8">
          Whether you have questions, need expert guidance, or
          want to schedule a visit - we're just a message away.
        </p>
        
        {/* Success and error messages */}
        {success && <p className="text-green-400 mb-4 text-center">Message sent successfully!</p>}
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-white"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-white"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm mb-1">Phone No</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-white"
              required
            />
          </div>
          
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-white resize-none"
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-white text-[#172747] px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Send a Message
          </button>
        </form>
      </div>
      
      {/* Right Info Section */}
      <div className="w-full max-w-lg mt-8 md:mt-0 md:ml-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email info */}
          <div className="bg-gray-100 p-6 rounded flex items-start">
            <div className="mr-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-lg">Write to Us</h3>
              <p className="text-gray-600">contact@buildinfinity.in</p>
            </div>
          </div>
          
          {/* Phone info */}
          <div className="bg-gray-100 p-6 rounded flex items-start">
            <div className="mr-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-lg">Phones</h3>
              <p className="text-gray-600">+91 91456 88167 /</p>
              <p className="text-gray-600">+91 91456 88167</p>
            </div>
          </div>
          
          {/* Address info - full width */}
          <div className="bg-gray-100 p-6 rounded flex items-start md:col-span-2">
            <div className="mr-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-lg">Head office</h3>
              <p className="text-gray-600">Office No. 501, Marvel Edge, Viman Nagar, Pune, Maharashtra</p>
              <p className="text-gray-600">411014</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-20 mt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-sm font-medium text-gray-500 mb-4">GET IN TOUCH</h3>
        
        <h2 className="text-4xl font-light text-gray-800 leading-tight mb-1">
          Chat with us on WhatsApp
        </h2>
        <h2 className="text-4xl font-light text-gray-800 leading-tight">
          or request a callback.
        </h2>
      </div>
    </section>
      
    </main>
  );
}