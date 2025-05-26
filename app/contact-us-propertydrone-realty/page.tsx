"use client"
import Image from 'next/image';
import Link from 'next/link';
import bg1 from "@/public/images/contact.png";
import logo from "@/app/images/PropertyDrone-Logo.png";  // Adjust the path to your logo file
import { useState } from 'react';
import { motion } from "framer-motion";
import main33 from "@/public/images/Frame 145.png";
import { ChevronDown, ChevronUp } from 'lucide-react';
export default function ContactUs() {
  const faqData = [
  {
    id: 1,
    question: 'Are all listings verified on PropertyDrone Realty?',
    answer: 'Yes, every listing goes through a strict verification process to ensure accuracy, legality, and transparency.'
  },
  {
    id: 2,
    question: 'Do I have to pay any brokerage fees?',
    answer: 'Our fee structure depends on the type of service you choose. We offer transparent pricing with no hidden costs.'
  },
  {
    id: 3,
    question: 'Can I schedule a site visit through the website?',
    answer: 'Yes, you can easily schedule site visits directly through our website by selecting your preferred date and time.'
  },
  {
    id: 4,
    question: 'How are drone views helpful in property buying?',
    answer: 'Drone views provide a comprehensive perspective of the property and its surroundings, helping you understand the location, neighborhood, and accessibility better.'
  },
  {
    id: 5,
    question: 'What types of properties does Property Drone Realty specialize in?',
    answer: 'Property Drone Realty deals in residential apartments, villas, bungalows, and a wide variety of commercial spaces like offices and shops in Pune and surrounding areas.'
  },
 
];
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
      const response = await fetch("https://api.propertydronerealty.com/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.phone || formData.mobile,
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <main className="relative">
      {/* Hero Section with Form */}
      <div className="relative h-[500px] bg-gray-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={bg1}
            alt="Luxury Property" 
            layout="fill" 
            objectFit="cover" 
            priority
          />
          
          {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
        </div>
      
        {/* Main Content with Contact Form Overlay */}
       
      </div>
      <section className="flex flex-col md:flex-row justify-center items-center h-auto md:h-80 p-4 md:p-6 bg-white">
      {/* Left Form Section */}
       <motion.div
    initial={{ opacity: 0, y: 100 }} // From bottom
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="w-full max-w-md bg-[#172747] text-white p-6 md:p-12 rounded-lg shadow-lg md:-mt-[300px]"
    style={{ zIndex: 99 }}
  >
        <h1
          style={{
        fontFamily: "Ivy Mode",
        fontWeight: 100,
        lineHeight: '150%',
        letterSpacing: '0'
          }}
          className="mb-4 text-white text-[32px] md:text-[42px] sm:text-[56px]"
        >Let's Connect!</h1>
        <p className="text-gray-300 text-[16px] md:text-[18px] sm:text-[28px] my-4 md:mb-0 leading-tight md:leading-none"
          style={{ fontWeight: '300', fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '120%' }}>
          Whether you have questions, need expert guidance, or
          want to schedule a visit - we're just a message away.
        </p>

        {/* Success and error messages */}
        {success && <p className="text-green-400 mb-4 text-center">Message sent successfully!</p>}
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-6 hover:bg-indigo-50" >
        <p className="text-white text-[18px] md:mb-0 leading-none font-lato">Full Name</p>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-400 py-2 font-lato focus:outline-none focus:border-white"
        />
          </div>

          <div className="mb-6 hover:bg-indigo-50">
        <label htmlFor="email" className="block text-sm font-lato mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-white"
        />
          </div>

          <div className="mb-6">
        <label htmlFor="phone" className="block font-lato text-sm mb-1">Phone No</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-white"
        />
          </div>

          <div className="mb-8 hover:bg-indigo-50">
        <label htmlFor="message" className="block font-lato text-sm mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full bg-transparent font-lato border-b border-gray-400 py-2 focus:outline-none focus:border-white resize-none"
        />
          </div>

          <button
        type="submit"
        className="bg-white text-[#172747] px-4 py-2 rounded font-lato hover:bg-gray-100 transition"
          >
        Send a Message
          </button>
        </form>
      </motion.div>
      
      {/* Right Info Section */}
      <motion.div
    initial={{ opacity: 0, x: 100 }} // From right
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    viewport={{ once: true }}
    className="w-full max-w-lg mt-8 md:mt-0 md:ml-8"
  >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email info */}
          <div className="bg-gray-100 p-4 md:p-6 rounded font-lato flex items-start">
            <div className="mr-3 md:mr-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-base md:text-lg">Write to Us</h3>
              <p className="text-gray-600 text-sm md:text-base">contact@buildinfinity.in</p>
            </div>
          </div>
          
          {/* Phone info */}
          <div className="bg-gray-100 p-4 md:p-6 rounded font-lato flex items-start">
            <div className="mr-3 md:mr-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-base md:text-lg">Phones</h3>
              <p className="text-gray-600 text-sm md:text-base">+91 91456 88167 /</p>
              <p className="text-gray-600 text-sm md:text-base">+91 91456 88167</p>
            </div>
          </div>
          
          {/* Address info - full width */}
          <div className="bg-gray-100 p-4 md:p-6 rounded font-lato flex items-start md:col-span-2">
            <div className="mr-3 md:mr-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-base md:text-lg">Head office</h3>
              <p className="text-gray-600 text-sm md:text-base">Office No. 501, Marvel Edge, Viman Nagar, Pune, Maharashtra</p>
              <p className="text-gray-600 text-sm md:text-base">411014</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
     

    {/* <section className="bg-gray-100 py-20 mt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-sm font-medium text-gray-500 mb-4">GET IN TOUCH</h3>
        
        <h2 className="text-4xl font-light text-gray-800 leading-tight mb-1">
          Chat with us on WhatsApp
        </h2>
        <h2 className="text-4xl font-light text-gray-800 leading-tight">
          or request a callback.
        </h2>
      </div>
    </section> */}
    
       <section className="bg-gray-100 py-8 md:py-16">
           <div className="container mx-auto px-4 md:px-6 max-w-6xl">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
               {/* Left Column - Heading */}
               <div>
               <p
                 className="uppercase text-[16px] md:text-[18px] text-[#172747] leading-[100%] tracking-normal mb-2"
                 style={{ fontFamily: 'Lato' }}
               >FAQ</p>
                  <h2  style={{
                       fontFamily: "'Ivy Mode'",
                       fontWeight: 300,
                       lineHeight: '140%',
                       letterSpacing: '0'
                     }}
                     className="text-[#172747] mb-0 sm:mb-6 text-[28px] md:text-[32px] sm:text-[50px]"
                   >Have questions? <br/> We've got answers.</h2>
               </div>
               
               {/* Right Column - Accordion */}
            <div className="space-y-3 py-4">
       {faqData.map((faq, index) => {
         const isOpen = openIndex === index;
     
         return (
           <div
             key={faq.id}
             className={`rounded-[4px]  transition-all duration-300 ${
               isOpen ? 'bg-white shadow-md' : 'bg-[#F1EEFF] shadow-sm'
             }`}
           >
             <button
               onClick={() => toggleAccordion(index)}
               className="w-full flex justify-between items-center px-6 py-5 text-left text-[#1C1C1C]  focus:outline-none"
             >
               <span className="sm:text-[16px]" 
                style={{ fontFamily: 'Lato', letterSpacing: '1px' }}>
                 {faq.question}
               </span>
               <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                 {isOpen ? (
                   <ChevronUp size={20} className="text-[#6B6B6B]" />
                 ) : (
                   <ChevronDown size={20} className="text-[#6B6B6B]" />
                 )}
               </span>
             </button>
     
             {isOpen && (
               <div className=" px-6 py-4 text-[#4B4B4B] text-sm sm:text-[15px] bg-white border-t border-[#E0E0E0]   "
                           style={{ fontFamily: 'Lato', letterSpacing: '1px' , lineHeight: '150%'}}>
                 {faq.answer}
               </div>
             )}
           </div>
         );
       })}
     </div>
     
     
             </div>
           </div>
         </section>
         <section className="relative w-full py-8 md:py-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src= {main33}
          alt="Background" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      <div className="relative z-10 container mx-auto max-w-4xl px-4">
        {/* Quote section */}
        <div className="text-center mb-8 md:mb-12">
          <h2  
          style={{
            fontFamily: "'Ivy Mode'",
            fontWeight: 300,
            lineHeight: '140%',
            letterSpacing: '1px'
          }}
          className="text-[#172747] mb-6 text-[32px] md:text-[46px]"
        >
            "Let the experts help you<br />
            make the right investment"
          </h2>
          
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl text-[#172747]"  style={{
            letterSpacing: '1px'
          }} >Nikhil Mawale</h2>
            <h2 className="text-xl md:text-2xl text-[#172747] font-bold mb-6"  style={{
            letterSpacing: '1px'
          }} >Founder</h2>
          </div>
        </div>
        
        {/* Form section */}
        <div className="bg-white rounded-md shadow-sm p-4 md:p-6 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-3 md:px-4 py-2 md:py-3 border-b border-gray-300 focus:border-gray-800 outline-none text-sm md:text-base"
                required
              />
            </div>
            <div className="w-full md:flex-1">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-3 md:px-4 py-2 md:py-3 border-b border-gray-300 focus:border-gray-800 outline-none text-sm md:text-base"
                required
              />
            </div>
            <Link href="/contact-us-propertydrone-realty">
            <button
              type="submit"
              className="w-full md:w-auto bg-[#172747] hover:bg-white hover:border hover:border-[#172747] hover:text-[#172747] px-4 md:px-6 py-2 md:py-3 bg-navy-800 text-white text-sm md:text-base font-medium rounded flex items-center justify-center"
            >
              Get a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
    </main>
  );
}