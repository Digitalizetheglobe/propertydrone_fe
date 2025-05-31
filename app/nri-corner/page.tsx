"use client";
import Image from 'next/image';
import heroBackground from '../../public/images/bgimage2.png';
import Link from 'next/link';
import { useState } from 'react';
import service6 from "@/public/images/service6.png";

export default function BlogHeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

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

  const offerings = [
    {
      icon: "🏢",
      title: "Exclusive Property Listings",
      description: "Gain access to a handpicked selection of premium properties across India. Whether you're looking for residential, commercial, or investment-grade real estate, our listings are tailored specifically for Non-Resident Indians (NRIs), ensuring you find the perfect property that matches your goals and preferences."
    },
    {
      icon: "📝",
      title: "Power of Attorney (POA) Assistance",
      description: "Navigating legal processes from abroad can be challenging. We provide end-to-end support in drafting, notarizing, and registering a Power of Attorney (POA) so you can authorize a trusted person in India to complete transactions on your behalf—legally and smoothly."
    },
    {
      icon: "⏰",
      title: "24/7 Availability",
      description: "Time zones shouldn't be a barrier. Our dedicated NRI service team is available 24/7 to accommodate your schedule and answer any queries you may have, ensuring a seamless communication experience no matter where you are."
    },
    {
      icon: "💸",
      title: "Easy Loan Assistance",
      description: "Our financial consultants help you connect with trusted Indian banks and financial institutions that offer NRI home loans. We guide you through documentation, eligibility criteria, and approval processes—making financing easy and stress-free."
    },
    {
      icon: "🖥️",
      title: "Virtual Property Tours",
      description: "Can't visit in person? No problem. Experience real-time video walkthroughs and 360-degree virtual tours of shortlisted properties from the comfort of your home. We bring the property experience to your screen so you can make confident decisions remotely."
    },
    {
      icon: "👥",
      title: "Dedicated NRI Support Team",
      description: "From property search to paperwork, our NRI support team is with you every step of the way. With in-depth knowledge of NRI-specific concerns, taxation, legalities, and investment trends, we ensure a customized and informed experience."
    }
  ];

  return (
    <> 
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
            <p className="text-sm uppercase font-medium tracking-wider text-gray-300 mb-4">
              NRI Corner 
            </p>
            
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Why Invest in India 
            </h1>
            
            <p className="text-gray-200 mb-8 max-w-xl mx-auto">
              India is set to remain as one of the world's fastest growing economies. There's never been a better time to invest in real estate in India. Let us help you throughout the pre-and-post purchase processes.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-3xl">💼</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                What We Offer
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {offering.icon}
                    </span>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {offering.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {offering.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-400/10 to-blue-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-8 translate-y-8"></div>

                {/* Border Gradient on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                <div className="absolute inset-[1px] bg-white rounded-2xl -z-10"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/luxe-properties">
              <button className="bg-[#172747] rounded-[4px] text-white hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] px-6 py-3 flex items-center justify-center gap-2 transition-colors">
                Explore Properties
                {/* <FiArrowRight size={18} /> */}
              </button>
              </Link>
              <Link href="/contact-us-propertydrone-realty">
              <button className="border border-gray-300 bg-white text-gray-800 px-6 py-3 hover:bg-gray-50 transition-colors">
                Book Consultation
              </button>
              </Link>
             
            </div>
          </div>
        </div>

        {/* CSS Animation Keyframes */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
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
    </>
  );
}