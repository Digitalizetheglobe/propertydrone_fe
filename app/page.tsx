"use client"
import Link from "next/link";
import Image from "next/image";
import AnimatedLetters from '@/app/components/AnimatedLetters';
// import logo from "@/app/images/PropertyDrone-Logo.png"; 
import luxeImage from "@/public/images/luxe1.png";
import luxeImage1 from "@/public/images/luxe2.png";
import luxeImage2 from "@/public/images/bgimage1.png";
import d1 from "@/public/images/Frame 104.png";
import d2 from "@/public/images/Frame 105.png";
import d3 from "@/public/images/Frame 106.png";
import d4 from "@/public/images/Frame 107.png";
import d5 from "@/public/images/Frame 109.png";
import d6 from "@/public/images/Frame 110.png";
import d7 from "@/public/images/Frame 111.png";
import d8 from "@/public/images/Frame 112.png";
import d9 from "@/public/images/Frame 113.png";
import d10 from "@/public/images/Frame 114.png";
import d11 from "@/public/images/Frame 115.png";
import d12 from "@/public/images/Frame 116.png";
import d13 from "@/public/images/Frame 117.png";
import d14 from "@/public/images/Frame 104.png";
import b1 from "@/public/images/service.png";
import b2 from "@/public/images/buliding.png";
import b3 from "@/public/images/service2.png";
// import d10 from "@/public/images/Frame 113.png";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Star, ChevronDown, ChevronUp, Building2 , Globe, Book, Wallet, Zap, Home as HomeIcon, ClipboardList,Clock,Banknote,Eye,
  Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import bg1 from '@/public/images/7578550-uhd_3840_2160_30fps 1.png'; // Adjust the path as necessary
// import main2 from '../public/images/mainvideo.mp4';
import main2 from '../public/images/main2.png';
import main3 from '../public/images/7578550-uhd_3840_2160_30fps 1.png';
import main33 from '../public/images/Frame 145.png';
import main4 from '../public/images/buliding.png';
import { useMemo as reactUseMemo } from 'react';

import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';


import axios from 'axios';
import Head from 'next/head';

interface YoutubeVideo {
  id: number;
  title: string;
  description: string;
  youtube_url: string;
  author: string;
  date: string;
}

const getYoutubeVideoId = (url: string): string | null => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};


// import { ChevronDown, ChevronUp } from 'lucide-react';

// Import a placeholder image
// import placeholderImg from '../public/images/placeholder.png'; // Make sure this exists
const services = [
  {
    title: "Exclusive Property",
    icon: (
      <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
        <HomeIcon className="w-14 h-14" />
      </div>
    )
  },
  {
    title: "POA Assistance",
    icon: (
      <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
        <ClipboardList className="w-14 h-14" />
      </div>
    )
  },
  {
    title: "24/7 Available",
    icon: (
      <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
        <Clock className="w-14 h-14" />
      </div>
    )
  },
  {
    title: "Easy Loan Assistance",
    icon: (
      <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
        <Banknote className="w-14 h-14" />
      </div>
    )
  },
  {
    title: "Virtual Tour",
    icon: (
      <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
        <Eye className="w-14 h-14" />
      </div>
    )
  },
  {
    title: "Dedicated NRI Team",
    icon: (
      <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
        <Users className="w-14 h-14" />
      </div>
    )
  }
];

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


const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Areas to Invest in Pune',
    date: '16th April, 2025',
    image: b1,
    slug: 'top-5-areas-to-invest-in-pune'
  },
  {
    id: 2,
    title: 'What to Know Before Buying a New Flat',
    date: '16th April, 2025',
    image: b2,
    slug: 'what-to-know-before-buying-a-new-flat'
  },
  {
    id: 3,
    title: 'What to Know Before Buying a New Flat',
    date: '16th April, 2025',
    image: b3,
    slug: 'what-to-know-before-buying-a-new-flat-2'
  }
];
const features = [
  {
    id: '01',
    title: 'Verified Listings Only',
    description: 'Every property on our platform is verified for accuracy. Inquiry with confidence knowing whats real—and nothing less.'
  },
  {
    id: '02',
    title: 'Expert Consultation',
    description: 'Our real estate experts guide you through location comparisons, pricing trends, and negotiation tactics to make sure you choose right, not just whats available.'
  },
  {
    id: '03',
    title: 'Trusted Developer',
    description: 'Weve partnered with Indias most reputed developers to bring you projects that are on time, legally clear, and high on return value.'
  },
  {
    id: '04',
    title: 'Zero Brokerage',
    description: 'We work directly with top builders, so you get the best deals without any extra commission or brokerage charges.'
  }
];


const propertyData = [
  {
    id: 1,
    title: "Prime Business Hub",
    location: "Location",
    price: "₹4.53 Cr",
    imageUrl: bg1
  },
  {
    id: 2,
    title: "Prime Business Hub",
    location: "Location",
    price: "₹4.53 Cr",
    imageUrl: main2
  },
  {
    id: 3,
    title: "bhavik Business Hub",
    location: "Location",
    price: "₹4.53 Cr",
    imageUrl: main2
  },
  {
    id: 4,
    title: "Phajhi Business Hub",
    location: "Location",
    price: "₹4.53 Cr",
   imageUrl: bg1
  },
  {
    id: 5,
    title: "abjh Business Hub",
    location: "Location",
    price: "₹4.53 Cr",
    imageUrl: bg1
  },
  {
    id: 6,
    title: "pppp Business Hub",
    location: "Location",
    price: "₹4.53 Cr",
    imageUrl: main2
  },
  // Add more items as needed
];
const testimonials = [
  {
    id: 1,
    name: "Paresh Bansod",
    text: "I am really glad that I came across PropertyDrone Realty. Nikhil along with his colleagues Vishal and Akshay were with me throughout the entire process. They understood my requirements really well and suggested the best suitable projects. They answered my each and every query. And once I finalised the project, they also helped in the negotiation. I would totally recommend them if you are buying a flat in Pune.",
    date: "16th April, 2025",
    company: "PropertyDrone Realty",
    rating: 5
  },
  {
    id: 2,
    name: "Subhamoy Saha",
    text: "Being NRIs we were looking to settle down in Pune in near future. We came to know about Nikhil and through his YouTube Videos. His videos were concise, compact, and informative in describing a property so we decided to reach out to him. We started to narrow down our requirements and location with him around Nov 2021 and within a year we had found a place.",
    date: "16th April, 2025",
    company: "PropertyDrone Realty",
    rating: 5
  },
  {
    id: 3,
    name: "Vicky Kothawade",
    text: "I had a great experience while buying a new Flat in Pune West location and I'd like to specifically mention Ashitosh for his professionalism and support throughout the process. He provided detailed insights and guided me efficiently, making the entire journey smooth and hassle-free. His expertise in real estate and commitment to customer satisfaction is truly commendable.",
    date: "16th April, 2025",
    company: "PropertyDrone Realty",
    rating: 5
  },
  {
    id: 4,
    name: "Bhagyashri Shingadi",
    text: "We had a good experience from start to end while looking for a new house.Vishal Pandey is such an amazing person who explained us everything before hand and made our life easier to short list the property and then finalize it.We all need a trustworthy person in such processes and I think Vishal is one of those honest guy I had ever met.Proffesional and hardworking. We are greatful and thankful to him.",
    date: "16th April, 2025",
    company: "PropertyDrone Realty",
    rating: 5
  },
  {
    id: 5,
    name: "Rashmi Chhetri",
    text: "My experience with Property drone was really amazing. I can say that this is where I experienced Professionalism at its peak! They really walked the talk of 'Customer is King'. I started my hunt in 2023 with very limited time in Pune. When i restarted in May this year, I was amazed to see the same zeal and dedication the 2nd time around!",
    date: "16th April, 2025",
    company: "PropertyDrone Realty",
    rating: 5
  },
  {
    id: 6,
    name: "ketan Upadhyay",
    text: "I wanted to take a moment to express my sincere gratitude to Vishal Pandey for the exceptional service provided during our recent purchase of plot in the Vaarivana project. Vishal's teams dedication and professionalism truly made our experience remarkable.",
    date: "16th April, 2025",
    company: "PropertyDrone Realty",
    rating: 5
  },
  {
    id: 7,
    name: "Ujjwal Rai",
    text: "We came to know about vishal & his team as a channel partner. This was our first property we purchased and we were very new to this field. The way Nikhil and Vishal guided us throughout the journey of hunting the right project, Knowing our requirements first, Showing the A class builders, differentiation and builder history. It was a smooth process & we really enjoyed buying property with them. As we friends booked property in Vaarivana.",
    date: "16th April, 2025",
    company: "PropertyDrone Realty",
    rating: 5
  },
  {
    id: 8,
    name: "Radha Rao",
    text: "It is our pleasure to write this letter of recommendation for Nikhil & his team at Property Drone Realty.From our very first interaction, Nikhil, vishal and ikram impressed us with their exceptional professionalism, in-depth knowledge of the local real estate market in Pune, neighbourhood nuances, and property values. Their ability to understand our specific needs and preferences allowed them to curate tailored property options that perfectly aligned with our criteria. They went above and beyond, providing comprehensive property choices and invaluable insights to guide our decision-making process.",
    date: "16th April, 2025",
    company: "PropertyDrone Realty",
    rating: 5
  },
  {
    id: 9,
    name: "Surbhi Tadwal",
    text: "We had a good experience while looking for a new house. Vishal Pandey helped us a-lot in finalising our deal. He just didn't help you in finding your dream house but also give you the wise advice and which is really appreciable. Thanks a-lot for helping us.",
    date: "16th April, 2025",
    company: "PropertyDrone Realty",
    rating: 5
  }
];



// import d from "@/app/images/d10.png";


interface Property {
  id: number;
  propertyName: string;
  propertyType: string;
  youtubeUrl: string;
  googleMapUrl: string;
  propertyCategory: string;
  beds: number;
  baths: number;
  topology: string;
  carpetArea: string;
  city: string;
  location: string;
  tentativeBudget: string;
  possession: string;
  multipleImages: Array<{
    path: string;
    filename: string;
    originalName: string;
  }>;
  slug: string;
  seoDescription: string;
  seoTitle: string;
  seoKeywords: string;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
  type?: string;
  bedroom?: string;
  bathroom?: string;
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
            opacity: 0.4;
            transform: scale(1.5);
          }
        }
      `}</style>

      <button className="group relative overflow-hidden rounded-full p-px" style={{ backgroundColor: '#172747' }}>
        {/* Main glow background */}
        <span className="absolute inset-0 rounded-full overflow-hidden">
          <span className="inset-0 absolute pointer-events-none select-none">
            <span
              className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
              style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #DAA520)',
              }}
            ></span>
          </span>
        </span>

        {/* Animated border glow */}
        <span
          className="inset-0 absolute pointer-events-none select-none"
          style={{ animation: 'border-glow-translate 10s ease-in-out infinite alternate' }}
        >
          <span
            className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
            style={{
              animation: 'border-glow-scale 10s ease-in-out infinite alternate',
              background: 'linear-gradient(135deg, #FFD700, #FFA500, #DAA520)',
            }}
          ></span>
        </span>

        {/* Button content */}
        <span 
          className="flex items-center justify-center gap-1 relative z-[1] rounded-full py-2 px-4 pl-2 w-full"
          style={{ backgroundColor: 'rgba(23, 39, 71, 0.95)' }}
        >
          {/* Star icon with animations */}
          <span className="relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
              style={{
                animation: 'star-rotate 14s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate',
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
                  <stop stopColor="#FFD700" />
                  <stop offset="0.5" stopColor="#FFA500" />
                  <stop offset="1" stopColor="#DAA520" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="-0.5" y1="9" x2="15.5" y2="-1.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD700" />
                  <stop offset="0.5" stopColor="#FFA500" />
                  <stop offset="1" stopColor="#DAA520" />
                </linearGradient>
              </defs>
            </svg>

            {/* Star shine effect */}
            <span
              className="rounded-full size-11 absolute opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg"
              style={{
                animation: 'star-shine 14s ease-in-out infinite alternate',
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #DAA520)',
              }}
            ></span>
          </span>

          {/* LUXE text */}
        <span 
  className="tracking-[2px] ml-1.5 bg-clip-text text-xs text-transparent group-hover:scale-105 transition transform-gpu"
  style={{
    backgroundImage: 'linear-gradient(to bottom, #FFD700, #DAA520)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    fontWeight: '400',
    textShadow: '0 0 0.4px #FFD700, 0 0 0.4px #DAA520', // simulate bold
  }}
>
  LUXE
</span>

        </span>
      </button>
    </div>
  );
};
export default function Home() {
  // Add displayCount state
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(window.innerWidth >= 1280 ? 10 : 3);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
useEffect(() => {
  AOS.init({
    duration: 800, 
    once: true,   
  });
}, []);
  const [properties, setProperties] = useState<Property[]>([]);

  
interface LocationData {
  location: string;
  count: number;
  image: string;
}

const locationCounts = useMemo<LocationData[]>(() => {

  if (!properties.length) return [];
  
  const locationMap = new Map<string, LocationData>();
  
  properties.forEach(property => {
    const location = property.location;
    
    if (!locationMap.has(location)) {
      locationMap.set(location, {
        location: location,
        count: 1,
        
        image: property.multipleImages?.[0]?.path ? `https://api.propertydronerealty.com${property.multipleImages[0].path}` : "/api/placeholder/400/320"
      });
    } else {
      
      const current = locationMap.get(location)!;
      locationMap.set(location, {
        ...current,
        count: current.count + 1
      });
    }
  });
  
  return Array.from(locationMap.values());
}, [properties]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevState: typeof formData) => ({
      ...prevState,
      [name]: value
    }));
  };
 const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  // Removed duplicate handleSubmit function
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(propertyData.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

 const images = [
  { img: d1, link: 'anp-corp' },
  { img: d2, link: 'majestique-developer' },
  { img: d3, link: 'krunal-groups' },
  { img: d4, link: 'kasturi' },
  { img: d6, link: 'skyi-developers' },
  { img: d5, link: 'Solitaire' },
  { img: d7, link: 'anp-corp' },
  { img: d8, link: 'majestique-developer' },
  { img: d9, link: 'krunal-groups' },
  { img: d10, link: 'kasturi' },
  { img: d12, link: 'skyi-developers' },
  { img: d11, link: 'Solitaire' },
  { img: d13, link: 'anp-corp' },
  { img: d14, link: 'majestique-developer' },
 
 
];


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.propertydronerealty.com/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.phone,
          message: ""
        }),
      });

      if (!response.ok) throw new Error("Failed to submit contact form");

      console.log('Form submitted successfully');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  const [filters, setFilters] = useState({
    type: '',
    location: '',
    bedrooms: '',
    minPrice: '',
    maxPrice: '',
    search: '', 
  });

  // State for properties data from API
  // const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [remainingProperties, setRemainingProperties] = useState<Property[]>([]);

  // Fetch data from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.propertydronerealty.com/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        
        // Sort properties by date - assuming each property has a date field
        // If there's no date field, you might need to modify this logic
        const sortedData = [...data].sort((a, b) => {
          // If using date strings, convert to Date objects
          const dateA = new Date(a.date || a.createdAt || 0);
          const dateB = new Date(b.date || b.createdAt || 0);
          return dateB.getTime() - dateA.getTime(); // Latest first
        });
        
        setProperties(sortedData);
        setFilteredProperties(sortedData);
        
        // Separate featured and remaining properties
        const featured = sortedData.slice(0, 3); // Get first 3 properties as featured
        const remaining = sortedData.slice(3);   // Get the rest for the slider
        
        setFeaturedProperties(featured);
        setRemainingProperties(remaining);
        
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

 const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isVisible]);

  return { count, ref };
};

  // Apply filters to properties
// Apply filters to properties
useEffect(() => {
  if (!properties.length) return;

  let filtered = [...properties];

  // Search functionality (case insensitive search across multiple fields)
  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filtered = filtered.filter(property => 
      property.propertyName?.toLowerCase().includes(searchTerm) ||
      property.location?.toLowerCase().includes(searchTerm) ||
      property.city ?.toLowerCase().includes(searchTerm)
    );
  }

  if (filters.location) {
    filtered = filtered.filter(property => property.location === filters.location);
  }

  if (filters.minPrice) {
    filtered = filtered.filter(property => {
      const budget = parseInt(property.tentativeBudget.replace(/[^0-9]/g, ''));
      return budget >= parseInt(filters.minPrice, 10);
    });
  }

  if (filters.maxPrice) {
    filtered = filtered.filter(property => {
      const budget = parseInt(property.tentativeBudget.replace(/[^0-9]/g, ''));
      return budget <= parseInt(filters.maxPrice, 10);
    });
  }

  // Update filtered properties and separate featured/remaining
  setFilteredProperties(filtered);
  
  const featured = filtered.slice(0, 3); // Get first 3 filtered properties as featured
  const remaining = filtered.slice(3);   // Get the rest for the slider
  
  setFeaturedProperties(featured);
  setRemainingProperties(remaining);
  
}, [filters, properties]);

const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
  const { name, value } = e.target as HTMLSelectElement | HTMLInputElement;
  setFilters({ ...filters, [name]: value });
};

const resetFilters = () => {
  setFilters({
    type: '',
    bedrooms: '',
    search: '',
    location: '',
    minPrice: '',
    maxPrice: '',
  });
};
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animationId: number;
    let startTime: number | null = null;

    interface ScrollContainer extends HTMLDivElement {
      scrollLeft: number;
      scrollWidth: number;
      clientWidth: number;
    }

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const scrollContainer = scrollContainerRef.current as ScrollContainer | null;
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 1;

        // Reset scroll position when reaching the end
        if (scrollContainer.scrollLeft >= 
          (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);
  // Functions for slider control
  // Property card component to avoid repetition
 
const PropertyCard = ({
  property,
  delay,
}: {
  property: Property;
  delay: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Add console logging to debug image path
  console.log('Property Image Data:', {
    multipleImages: property.multipleImages,
    firstImagePath: property.multipleImages?.[0]?.path,
    fullImagePath: property.multipleImages?.[0]?.path 
      ? `https://api.propertydronerealty.com${property.multipleImages[0].path}`
      : main4
  });

  // Update image path handling with proper error checking
  const imagePath = property.multipleImages && property.multipleImages.length > 0 && property.multipleImages[0].path
    ? `https://api.propertydronerealty.com${property.multipleImages[0].path}`
    : main4;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (cardRef.current) observer.unobserve(cardRef.current);
          }, delay);
        }
      },
      { threshold: 0.05, rootMargin: "20px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <Link href={`/our-properties-in-pune/${property.id}`} passHref>
      <div
        ref={cardRef}
        className={`bg-white rounded-md cursor-pointer overflow-hidden shadow-sm transition-all duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={imagePath}
            alt={property.propertyName || "Property Image"}
            fill
            className={`z-0 transition-transform duration-700 ease-in-out object-cover ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            onError={(e) => {
              console.error('Image load error:', e);
              const target = e.target as HTMLImageElement;
              target.src = main4.src;
            }}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Developer and Location */}
        <div className="flex border-b border-[#00000033]">
          <div className="w-1/2 flex items-center  border-r border-[#00000033] py-2">
            <div className=" text-[#172747] px-3 py-1 rounded-md flex items-center gap-1" style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0.5px',
                lineHeight: '1.3',
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              {property.beds || ""}  Beds
            </div>
          </div>
          <div className="w-1/2 flex items-center  border-r border-[#00000033] py-2">
             <div className=" text-[#172747] px-3 py-1 rounded-md flex items-center gap-1" style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0.5px',
                lineHeight: '1.3',
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <path d="M22 6l-10 7L2 6"></path>
              </svg>
              {property.baths || ""}  Baths
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center py-2 space-x-1">
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-[#172747] text-lg "  style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0.5px',
                lineHeight: '1.3',
              }}>{property.location || "Location"}</span>
          </div>
        </div>


        {/* Title */}
        <div className="px-4 pt-1 pb-2">
          <h3
            className={` ${
              isHovered ? "text-blue-800" : "text-[#172747]"
            }`}
            style={{
              fontSize: '20px',
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0.5px',
              lineHeight: '1.3',
            }}
          >
            {property.propertyName || "Prime Business Hub"}
          </h3>
        </div>

        {/* Property Details */}
        <div className="justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]">
          <div className="flex items-center space-x-2">
         
<span
  className="text-gray-700 px-2"
  style={{ fontSize: '14px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
>
  Carpet Area : {(() => {
    const words = String(property.carpetArea).split(' ');
    return words.length > 5
      ? words.slice(0, 5).join(' ') + '...'
      : words.join(' ');
  })()}
</span>

          </div>
        
        </div>
        <div className="justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]">
          <div className="flex items-center space-x-2">
         
<span
  className="text-gray-700 px-2"
  style={{ fontSize: '14px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
>
  Possession : {(() => {
    const words = String(property.possession).split(' ');
    return words.length > 5
      ? words.slice(0, 5).join(' ') + '...'
      : words.join(' ');
  })()}
</span>

          </div>
        
        </div>
        <div className="justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]">
          <div className="flex items-center space-x-2">
         
<span
  className="text-gray-700 px-2"
  style={{ fontSize: '14px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
>
 Topology  : {(() => {
    const words = String(property.topology).split(' ');
    return words.length > 5
      ? words.slice(0, 5).join(' ') + '...'
      : words.join(' ');
  })()}
</span>

          </div>
        
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between px-4 py-3">
         
          <div className="flex space-x-2 items-center">
           
            <button className="bg-[#172747] text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] transition-transform transform hover:scale-105">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
const PropertyCard1 = ({
  property,
  delay,
}: {
  property: Property;
  delay: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const baseUrl = "https://api.propertydronerealty.com";
  const imagePath = property?.multipleImages?.[0]?.path
    ? `${baseUrl}${property.multipleImages[0].path}`
    : main2;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (cardRef.current) observer.unobserve(cardRef.current);
          }, delay);
        }
      },
      { threshold: 0.05, rootMargin: "20px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <Link href={`/our-properties-in-pune/${property.id}`} passHref>
      <div
        ref={cardRef}
        className={`bg-white rounded-[4px] cursor-pointer overflow-hidden shadow-sm transition-all duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={imagePath}
            alt={property.propertyName || "Property Image"}
            fill
            className={`z-0 transition-transform duration-700 ease-in-out object-cover ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute top-4 left-4 z-10">
            <div className="rounded-full flex items-center">
              <AnimatedStarButton />
            </div>
          </div>
        </div>

        {/* Developer and Location */}
        <div className="flex border-b border-[#00000033]">
          <div className="w-1/2 flex items-center  border-r border-[#00000033] py-2">
            <div className=" text-[#172747] px-3 py-1 rounded-md flex items-center gap-1" style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0.5px',
                lineHeight: '1.3',
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              {property.beds || ""}  Beds
            </div>
          </div>
          <div className="w-1/2 flex items-center  border-r border-[#00000033] py-2">
             <div className=" text-[#172747] px-3 py-1 rounded-md flex items-center gap-1" style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0.5px',
                lineHeight: '1.3',
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <path d="M22 6l-10 7L2 6"></path>
              </svg>
              {property.baths || ""}  Baths
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center py-2 space-x-1">
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-[#172747] text-lg "  style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0.5px',
                lineHeight: '1.3',
              }}>{property.location || "Location"}</span>
          </div>
        </div>


        {/* Title */}
        <div className="px-4 pt-1 pb-2">
          <h3
            className={` ${
              isHovered ? "text-blue-800" : "text-[#172747]"
            }`}
            style={{
              fontSize: '20px',
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0.5px',
              lineHeight: '1.3',
            }}
          >
            {property.propertyName || "Prime Business Hub"}
          </h3>
        </div>

        {/* Property Details */}
        <div className="justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]">
          <div className="flex items-center space-x-2">
         
  <span
    className="text-gray-700 px-2"
    style={{ fontSize: '14px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
  >
    Carpet Area : {(() => {
      const words = String(property.carpetArea).split(' ');
      return words.length > 5
        ? words.slice(0, 5).join(' ') + '...'
        : words.join(' ');
    })()}
  </span>

          </div>
         
        </div>
        <div className="justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]">
          <div className="flex items-center space-x-2">
         
<span
  className="text-gray-700 px-2"
  style={{ fontSize: '14px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
>
  Possession : {(() => {
    const words = String(property.possession).split(' ');
    return words.length > 5
      ? words.slice(0, 5).join(' ') + '...'
      : words.join(' ');
  })()}
</span>

          </div>
        
        </div>
        <div className="justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]">
          <div className="flex items-center space-x-2">
         
<span
  className="text-gray-700 px-2"
  style={{ fontSize: '14px', fontFamily: 'Lato', letterSpacing: '0.5px' }}
>
 Topology  : {(() => {
    const words = String(property.topology).split(' ');
    return words.length > 5
      ? words.slice(0, 5).join(' ') + '...'
      : words.join(' ');
  })()}
</span>

          </div>
        
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between px-4 py-3">
         
          <div className="flex space-x-2 items-center">
       
            <button className="bg-[#172747] text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] transition-transform transform hover:scale-105">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
 const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  
  const sliderRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch all videos
  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.propertydronerealty.com/youtube-videos');
      setVideos(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load videos. Please refresh the page.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // Auto-slider functionality
  useEffect(() => {
    if (videos.length > 0 && !isPaused) {
      sliderRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(videos.length / 3));
      }, 5000);
    }

    return () => {
      if (sliderRef.current) {
        clearInterval(sliderRef.current);
      }
    };
  }, [videos.length, isPaused]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const displayVideos = () => {
    const startIndex = currentSlide * 3;
    return videos.slice(startIndex, startIndex + 3);
  };

  return (
    <div className="min-h-screen">
      
<div className="relative h-screen bg-gray-800">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <Image 
      src="/images/7578550-uhd_3840_2160_30fps 1.png"
      alt="Luxury Property Background" 
      fill
      style={{ objectFit: "cover" }}
      priority
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
     <main className="relative z-10 container mx-auto px-4 pt-30 max-w-6xl ">
    <div className="flex flex-col md:flex-row gap-[20px] py-4">
    <div>
      <h1
        style={{
        fontFamily: "Ivy Mode",
        fontWeight: 100,
        lineHeight: '150%',
        letterSpacing: '0'
        }}
        className="text-white text-[42px] sm:text-[80px]"
      >
        Find the best <br /> properties in Pune
      </h1>

      </div>  
     


      <div className="flex flex-col sm:mb-[20px]  md:flex-row md:items-end md:justify-between">
        <p className="text-white text-[18px] sm:text-[28px] mb-4 md:mb-0 leading-none"
          style={{ fontWeight:'300',fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '100%' }}>
          with Property <br /> Management <br />company  in Pune
        </p>
        <Link href="/contact-us-propertydrone-realty">
        <button
          className="flex  ml-0 md:ml-[20px] bg-white text-[#172747] px-4 py-2 rounded hover:bg-blue-50 md:mt-auto cursor-pointer"
        >
          Get Consultation 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        </Link>
      </div>

    
      
    </div>
    <div className="w-full overflow-hidden mt-6 " id="filter-section">

<div 
ref={scrollContainerRef}
className="flex overflow-x-auto scrollbar-hide snap-x"
style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
onMouseEnter={() => setIsPaused(true)}
onMouseLeave={() => setIsPaused(false)}
>
{images.map((imgObj, index) => (
  <div
    key={index}
    className="flex-shrink-0 h-32 mx-2 first:ml-0 mt-10 sm:mt-0 transition-all duration-300 ease-in-out"
    style={{
      transform: 'scale(1)',
      transformOrigin: 'center center',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    <div className="shadow-md flex flex-col items-center justify-center hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
     
        <Image
          src={imgObj.img}
          alt={`Card ${index + 1}`}
          className="w-auto cursor-pointerh-22 object-cover transition-all duration-300 sm:h-30"
        />
    
    </div>
  </div>
))}
</div>

</div>
  </main>
  </div>


 
 
</div>
 <style>
        {`
          @keyframes opacityEffect {
            0% { border-right: 1px solid transparent; }
            10%, 80% { border-right: 1px solid #bd9f67; }
            100% { border-right: 1px solid transparent; }
          }
          @keyframes trailEffect {
            0% {
              background: linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%);
              opacity: 0;
            }
            30%, 70% {
              background: linear-gradient(90deg, rgba(189, 159, 103, 0) 70%, rgb(189, 159, 103) 100%);
              opacity: 1;
            }
            95% {
              background: linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%);
              opacity: 0;
            }
          }
        `}
      </style>

     
{/* ------------------------------ */}
{/* Filter Section */}
<div className="bg-white shadow-md p-4 md:p-6">
  <div className="grid grid-row-1 md:grid-cols-5 gap-4 md:gap-6 mx-2 md:mx-20">

    {/* Search Input */}
    <div className="relative">
      <input
        type="text"
        name="search"
        value={filters.search || ''}
        onChange={handleFilterChange}
        placeholder="Search properties..."
        className="w-full px-4 py-2 pl-10 border bg-[#172747] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-white"
        suppressHydrationWarning
      />
      <div className="absolute left-3 top-2.5 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>

    {/* Location Dropdown */}
    <div>
      <select
        name="location"
        value={filters.location || ''}
        onChange={handleFilterChange}
        className="w-full px-4 py-2 pl-4 border bg-[#172747] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-white"
        suppressHydrationWarning
      >
        <option value="" className="text-white">All Locations</option>
        {Array.from(new Set(properties.map(p => p.location))).map(location => (
          <option key={location} value={location} className="text-white">{location}</option>
        ))}
      </select>
    </div>

    {/* Min Price Input */}
    <div className="hidden md:block">
      <input
      type="number"
      name="minPrice"
      value={filters.minPrice || ''}
      onChange={handleFilterChange}
      placeholder="Min Price"
      className="w-full px-4 py-2 pl-4 border bg-[#172747] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-white"
      suppressHydrationWarning
      />
    </div>

    {/* Max Price Input */}
      <div className="hidden md:block">
      <input
        type="number"
        name="maxPrice"
        value={filters.maxPrice || ''}
        onChange={handleFilterChange}
        placeholder="Max Price"
        className="w-full px-4 py-2 pl-4 border bg-[#172747] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-white"
        suppressHydrationWarning
      />
    </div>

    {/* Reset Button */}
    <div>
      <button
        onClick={resetFilters}
        className="w-full px-4 py-2 bg-[#172747] border border-white text-white rounded-[4px] hover:bg-[#4b6096] transition-colors"
        suppressHydrationWarning
      >
        Reset Filters
      </button>
    </div>

  </div>
</div>


<div
  className="mx-auto px-6 md:px-20 py-8 bg-cover bg-center relative bg-fixed"
  style={{ 
    backgroundImage: `url(${luxeImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  
 

  {/* Loading and Error States */}
  {loading ? (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 text-white border-t-2 border-b-2 border-[#172747]"></div>
    </div>
  ) : error ? (
    <div className="text-center text-red-500 p-4">
      Error: {error}. Please try again later.
    </div>
  ) : filteredProperties.length === 0 ? (
    <div className="text-center py-12">
      <p className="text-gray-500">No luxury properties found matching your criteria.</p>
      <button 
        onClick={resetFilters}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#172747] transition-colors duration-300 cursor-pointer"
      >
        Reset Filters
      </button>
    </div>
  ) : (
    <div className="space-y-10 max-w-6xl mx-auto px-4 ">
      {/* Featured Properties Section */}
      <div className="mb-8 ">
    <AnimatedLetters
      text="LUXURY PROPERTIES"
      as="h2"
        className="uppercase text-white text-[16px] sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
    />

       <h2  className="text-white mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
                   > Discover our exclusive collection of luxury properties in Pune.</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProperties
          .filter(property => ['luxury', 'lux', 'luxary', 'Luxury'].includes(property.propertyType?.toLowerCase() || ''))
          .map((property, index) => (
          <PropertyCard1 
            key={property.id} 
            property={property} 
            delay={index * 200}
          />
        ))}
      </div>
      </div>
    </div>
  )}
</div>
   <div className=" mx-auto px-6 md:px-20 py-8 bg-[#EEF1F5]">
  
 

  {/* Loading and Error States */}
  {loading ? (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 text-white border-t-2 border-b-2 border-[#172747]"></div>
    </div>
  ) : error ? (
    <div className="text-center text-red-500 p-4">
      Error: {error}. Please try again later.
    </div>
  ) : filteredProperties.length === 0 ? (
    <div className="text-center py-12">
      <p className="text-gray-500">No properties found matching your criteria.</p>
      <button 
        onClick={resetFilters}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#172747] transition-colors duration-300 cursor-pointer"
      >
        Reset Filters
      </button>
    </div>
  ) : (
    <div className="space-y-10 max-w-6xl mx-auto px-4">
      {/* Featured Properties Section */}
      <div className="mb-8">
        <AnimatedLetters
          text="FEATURED PROPERTIES"
          as="h2"
          className="uppercase text-[#172747] text-[16px] sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
        />

       
         <h2  className="text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
                 >Explore top-performing properties with high ROI and verified builder credibility.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  )}
</div>




      {/* -------------------------------------------------------------- */}

      <div className="max-w-6xl mx-auto px-4 py-12">
     
      <div >
        
            <AnimatedLetters
  text="TOP LOCALITIES"
  as="h2"
  className="uppercase text-[#172747] text-[16px] text-center sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
            
/>


         <h2  className="text-[#172747]  font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
 > Find homes in the most sought-after neighborhoods of Pune.</h2>
      </div>

     
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8">
    <h2 className="text-2xl text-[#172747] font-bold mb-6">Popular Locations</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
     {locationCounts.map((locationData: { location: string; count: number; image: string }, index: number) => (
        <Link
          key={index}
          href={`/our-properties-in-pune?location=${locationData.location}`}
          className={`
            ${index < 3 ? 'block' : 'hidden'}  // Show first 3 on all screens
            lg:${'block'}                 // Show all up to the limit on lg
            ${index >= 10 ? 'lg:hidden' : ''}  // Hide from 10 onwards on lg
          `.trim()}
        >
          <div className="relative grid h-52 w-full cursor-pointer place-content-center overflow-hidden rounded-[4px] bg-[#172747] shadow-md transition-transform duration-300 hover:scale-105 group">
            <div className="absolute right-6 top-6 p-1 z-50 rounded-full">
              <Building2 className="w-8 h-8 text-[#EEF1F5] transition-colors duration-300" />
            </div>
            <span className="absolute top-[20px] left-1/2 -translate-x-1/2 bg-[#172747] pr-9 pt-2 text-xl font-semibold uppercase text-[#EEF1F5] opacity-0 tracking-[6px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:tracking-[3px]">
              explore now
            </span>
            {/* Animated border */}
            <div className="absolute inset-0 border-2 border-[#EEF1F5] opacity-0 rotate-[10deg] transition-all duration-500 ease-in-out group-hover:inset-[10px] group-hover:opacity-100 group-hover:rotate-0 rounded-[4px] pointer-events-none"></div>
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-[#EEF1F5]">
              <h3 className="text-2xl font-semibold">{locationData.location}</h3>
              <p className="text-xl">
                {locationData.count} {locationData.count === 1 ? 'Property' : 'Properties'}
              </p>
            </div>
          </div>
        </Link>
         ))}
     
    </div>
  </div>

      
      <div className="flex justify-center">
        <Link href="/our-properties-in-pune">
        <button className="bg-[#172747] cursor-pointer text-white px-6 py-2 flex items-center gap-2 rounded hover:bg-[#172747] transition">
          View All Locations
          <ArrowRight size={16} />
        </button>
        </Link>
      </div>
    </div>

    {/* ------------------------ */}
 
 <div className="bg-[#EEF1F5]">
  <section className="max-w-6xl mx-auto px-4 py-12">
    <div className="mb-8 animate-fade-in text-justify">
     
      <AnimatedLetters
      text="UPCOMING & LATEST LAUNCHES"
      as="h2"
      className="uppercase text-[#172747] text-[16px] sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
      />
 
     
        <h2  className="text-[#172747]  font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
 >Be the first to discover the hottest launches in Pune. </h2>
    </div>

    {/* Latest Properties Slider */}
    <div>
      {/* <h3 className="text-xl font-light mb-6 animate-fade-in">Latest Launches</h3> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {remainingProperties
          .slice(currentSlide * 2, currentSlide * 2 + 2)
          .map((property) => (
            <div
              key={property.id}
              className="flex flex-col hover:bg-[#EEF1F5] rounded-[4px] shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="relative h-64 w-full mb-4 overflow-hidden rounded-t-lg group">
                <Image
                  src={property.multipleImages?.[0]?.path ? `https://api.propertydronerealty.com${property.multipleImages[0].path}` : main4}
                  alt={property.propertyName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-xl font-light">{property.propertyName}</h3>
                <p className="text-sm text-gray-600">{property.location}, {property.city}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex gap-2">
                    {property.beds && (
                      <span className="text-sm text-gray-600">{property.beds} Beds</span>
                    )}
                    {property.baths && (
                      <span className="text-sm text-gray-600">{property.baths} Baths</span>
                    )}
                    {property.carpetArea && (
                      <span className="text-sm text-gray-600">{property.carpetArea} sq.ft</span>
                    )}
                  </div>
                  <p className="text-sm font-medium">{property.tentativeBudget}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-12 flex items-center justify-between w-full relative animate-fade-in">
        {/* Slide Indicator */}
        <div className="text-lg font-medium flex-shrink-0 z-10 pr-2">
          <span className="font-bold">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className="text-[#172747]">
            {' '}
            / {String(Math.max(1, totalSlides)).padStart(2, '0')}
          </span>
        </div>

        {/* Horizontal Divider */}
        <div className="flex-grow h-px bg-[#172747]"></div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 flex-shrink-0 z-10 pl-2">
          <button
            onClick={prevSlide}
            className="p-2 border border-[#172747] rounded-full hover:bg-white transition duration-300 hover:shadow cursor-pointer"
            aria-label="Previous slide"
            disabled={remainingProperties.length <= 2}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 border border-[#172747] rounded-full hover:bg-white transition duration-300 hover:shadow cursor-pointer"
            aria-label="Next slide"
            disabled={remainingProperties.length <= 2}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  </section>
</div>

 <div className="container mx-auto max-w-6xl px-4 py-8">
     

      <div className="mb-8">
        
        
            <AnimatedLetters
  text="Featured Videos"
  as="h2"
  className="uppercase text-[#172747] text-[16px] text-center sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
            
/>

  <h2  className="text-[#172747]  font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
                  >Explore insightful YouTube videos handpicked for you </h2>
      </div>
    

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#172747] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading amazing videos...</p>
        </div>
      ) : videos.length === 0 ? (
        <div className="text-center py-16 bg-gray-100 rounded-lg">
          <i className="fas fa-video text-gray-400 text-4xl mb-4"></i>
          <p className="text-gray-500 text-lg">No videos found in the collection</p>
        </div>
      ) : (
        <div className="mb-8">
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" 
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          >
            {displayVideos().map((video) => {
              const videoId = getYoutubeVideoId(video.youtube_url);

              return (
                <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
                  {videoId ? (
                    <div className="relative pb-[56.25%] h-0">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.title || "YouTube Video"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                      <p className="text-gray-500">Invalid YouTube URL</p>
                    </div>
                  )}

                  <div className="p-5">
                    <h2 className="text-xl font-bold mb-3 line-clamp-2 text-gray-800">{video.title || "Untitled"}</h2>
                    {/* <p className="text-gray-600 mb-4 line-clamp-3">{video.description || "No description"}</p> */}

                    {/* <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center">
                        <i className="fas fa-user-circle mr-2 text-blue-500"></i>
                        <span className="font-medium text-gray-700">{video.author || "Unknown"}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <i className="far fa-calendar-alt mr-2"></i>
                        {formatDate(video.date)}
                      </div>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider controls */}
          <div className="flex justify-center items-center gap-4">
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + Math.ceil(videos.length / 3)) % Math.ceil(videos.length / 3))}
              className=" text-[#172747]  w-10 h-10 flex items-center justify-center p-2 border border-[#172747] rounded-full hover:bg-white transition duration-300 hover:shadow cursor-pointer"
            >
             <ArrowLeft size={20} /> 
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(videos.length / 3) }).map((_, index) => (
                <button 
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#172747]' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % Math.ceil(videos.length / 3))}
              className=" text-[#172747]  w-10 h-10 flex items-center justify-center p-2 border border-[#172747] rounded-full hover:bg-white transition duration-300 hover:shadow cursor-pointer"
            >
                <ArrowRight size={20} /> 
            </button>
          </div>
        </div>
      )}
    </div>
  {/* -------------------- */}
    <section className="bg-[#172747] text-white py-16 px-4 md:px-8 ">
      <div className="container ">
        <div className="mb-8 px-4 mx-auto max-w-6xl">
        

               <AnimatedLetters
  text="WHY CHOOSE US"
  as="h2"
  className="uppercase text-white text-[16px] sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
            
/>


       <h2 className="text-white mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]" 
                  >We're redefining how people explore and purchase property.</h2>
        </div>
        
    
       <div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 mx-auto max-w-6xl gap-4">
    {features.map((feature, index) => (
      <div
  key={feature.id}
  className="relative group flex max-w-[300px] h-[300px] cursor-pointer text-[#172747] transition duration-300 ease-in-out"
  data-aos="fade-up"
  data-aos-delay={index * 100}
>
  {/* SVG Border */}
  <svg
    height="300"
    width="300"
    className="absolute inset-0 z-10"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    preserveAspectRatio="none"
  >
    <line x1="0" y1="0" x2="300" y2="0" className="line top" />
    <line x1="0" y1="0" x2="0" y2="300" className="line left" />
    <line x1="0" y1="300" x2="300" y2="300" className="line bottom" />
    <line x1="300" y1="0" x2="300" y2="300" className="line right" />

  </svg>

  {/* Content */}
  <div className="relative z-20 px-4 pt-6 bg-gray-400 border-r-2 border-gray-400 group-hover:bg-transparent">
    <p className="text-[#172747] group-hover:text-gray-400 text-[28px]">{feature.id}</p>
    <h3
      className="text-[24px] text-[#172747] group-hover:text-gray-400 leading-[100%] tracking-normal mb-2"
      style={{ fontFamily: 'Lato' }}
    >
      {feature.title}
    </h3>
    <p
      className="text-[#172747] group-hover:text-gray-400 text-[18px]"
      style={{ lineHeight: '1.5', fontFamily: 'Lato' }}
    >
      {feature.description}
    </p>
  </div>

  <style jsx>{`
    .line {
      stroke-width: 4px;
      stroke: #c6c6d0;
      fill: none;
      transition: transform 0.6s ease-in-out;
    }

    .top,
    .bottom {
      stroke-dasharray: 300;
    }

    .left,
    .right {
      stroke-dasharray: 300;
    }

    .top {
      transform: translateX(-300px);
    }

    .bottom {
      transform: translateX(300px);
    }

    .left {
      transform: translateY(-300px);
    }

    .right {
      transform: translateY(300px);
    }

    .group:hover .top {
      transform: translateX(0);
    }

    .group:hover .bottom {
      transform: translateX(0);
    }

    .group:hover .left {
      transform: translateY(0);
    }

    .group:hover .right {
      transform: translateY(0);
    }
  `}</style>
</div>

    ))}
  </div>
</div>

      </div>
      
    </section>
  {/* ---------------------------------- */}
   <div
  className="mx-auto px-6 md:px-20 py-8 bg-cover bg-center relative bg-fixed h-[500px]"
  style={{ 
    backgroundImage: `url(${luxeImage2.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
<div className=" py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left side - Text content */}
            <div className="w-full lg:w-1/3 space-y-4">
            <AnimatedLetters
              text="NRI Corner "
              as="h2"
              className="text-[#172747] text-center font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
              
            />
           
            <p className="text-[#172747] text-[18px] sm:text-[20px] font-lato leading-none"
                  style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '150%', color: '#2a4073' }}>
                     Why Invest in India  </p>
            <p className="text-[#172747] text-[16px] sm:text-[18px] font-lato leading-none"
                  style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '150%', color: '#2a4073' }}>
                     India is set to remain as one of the world's fastest growing economies. There's never been a better time to invest in real estate in India. Let us help you throughout the pre-and-post purchase processes.
                  </p>

            </div>
               
          {/* Right side - Services grid */}
          <div className="w-full lg:w-2/3">
            
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
               
                  <div key={index} className="flex flex-col bg-[#172747] hover:border hover:border-[#172747] group shadow-sm items-center justify-center p-8 text-center hover:bg-white rounded-lg transition-all duration-300">
                      <Link href="/nri-corner">
                    <div className="flex items-center justify-center mb-2">
                      <span className="w-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </span>
                    </div>
                    <h4 className="text-white text-[26px] group-hover:text-[#172747] font-medium text-sm leading-tight transition-colors duration-300">
                      {service.title}
                    </h4>
                    </Link>
                  </div>
                  
                ))}
              </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    {/* ------------ */}
    <section className="relative w-full py-16 md:py-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0 ">
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
        <div className="text-center mb-12">
          <h2  
          style={{
            fontFamily: "'Ivy Mode'",
            fontWeight: 300,
            fontSize: '46px',
            lineHeight: '140%',
            letterSpacing: '1px'
          }}
          className="text-[#172747] mb-6 "
        >
            "Let the experts help you<br />
            make the right investment"
          </h2>
          
          <div className="mt-4">
            <h2 
          className="text-[24px] leading-[100%] text-[#172747] tracking-normal"
        style={{ fontFamily: 'Lato',letterSpacing: '1px' }} >Nikhil Mawale</h2>
            <h2 
            className="text-[20px] leading-[100%] text-[#172747] f mb-6 tracking-normal "
        style={{ fontFamily: 'Lato',letterSpacing: '1px' }}
          >Founder</h2>
          </div>
        </div>
        
        {/* Form section */}
        <div className="bg-white rounded-md shadow-sm p-6 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-800 outline-none"
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
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-800 outline-none"
                required
              />
            </div>
            <Link href="/contact-us-propertydrone-realty">
            <button
              type="submit"
              className="w-full cursor-pointer md:w-auto bg-[#172747] hover:bg-white hover:border hover:border-[#172747] hover:text-[#172747] px-6 py-3 bg-navy-800 text-white font-medium rounded flex items-center justify-center "
            >
              Get a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            </Link>
          </form>
        </div>
      </div>
    </section>

    {/* ------------------ */}
          <div
  className="mx-auto px-6 md:px-20 py-8 bg-cover bg-center relative bg-fixed"
  style={{ 
    backgroundImage: `url(${luxeImage1.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
     <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10 flex justify-between items-center">
        <div>
          <AnimatedLetters
            text="TESTIMONIAL"
            as="h2"
            className="uppercase text-white text-[18px] tracking-[1px] leading-[100%] mb-2"
          />
         
           <h2  className="text-white  font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
                  >Your trust is our greatest award</h2>
        </div>
      </div>

       <div style={{ padding: '20px' }}>
      {/* Cards */}
      <motion.div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        {visibleTestimonials.map((item, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            color: '#fff',
            width: '320px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            fontFamily: 'Poppins, sans-serif',
          }}>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{item.name}</h3>

            {/* Stars */}
            <div style={{ marginBottom: '15px', color: '#f9b31e' }}>
              {'★'.repeat(5)}
            </div>

            {/* Content */}
            <p style={{ color: '#fff', fontSize: '15px', lineHeight: '1.6' }}>{item.text}</p>
            <p style={{ marginTop: '10px', color: '#fff', fontSize: '13px' }}>{item.date}</p>
          </div>
        ))}
      </motion.div>

      {/* Pagination */}
      <div style={{
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}>
         <div style={{ margin: '0 10px', fontSize: '16px' }}>
          <strong style={{ color: '#fff' }}>{String(currentPage).padStart(2, '0')}</strong>
          <span style={{ color: '#fff' }}> / {String(totalPages).padStart(2, '0')}</span>
        </div> 
          {/* Horizontal Line */}
        <div className="flex-grow h-px bg-white"></div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1} className="cursor-pointer"
          style={{
            border: '1px solid white',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            marginRight: '5px',
            background: '#fff',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          }}>‹</button>

       

        <button onClick={goToNextPage} disabled={currentPage === totalPages} className="cursor-pointer"
          style={{
            border: '1px solid white',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            marginLeft: '5px',
            background: '#fff',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          }}>›</button>
      </div>
    </div>
    </section>
          </div>
    {/* ---- */}

    {/* ----------------- */}

    <section className="bg-[#172747] text-white py-16 px-4 md:px-8">
      <div className="container ">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mx-auto max-w-6xl px-4">
          <div>
          <p
            className="uppercase test-[16px] sm:text-[18px]  text-white leading-[100%] tracking-normal mb-2"
            style={{ fontFamily: 'Lato' }}
          >INSIGHTS & UPDATES</p>
            <h2  style={{
                  fontFamily: "'Ivy Mode'",
                  fontWeight: 300,
                  // fontSize: '56px',
                  lineHeight: '140%',
                  letterSpacing: '0'
                }}
                className="text-white mb-0  text-[32px] sm:text-[50px]"
              >
              Make smarter decisions with expert-written blogs.
            </h2>
          </div>
         <div className="items-baseline ">
          <div className="items-center mt-0 md:mt-10">
            <p className="text-gray-300">
              Get the latest on market trends, property tips, and expert insights. Our blog brings you quick, valuable reads to guide your real estate journey with confidence.
            </p>
            <Link href="/blog">
              <button className="bg-white cursor-pointer text-[#172747] border border-white mt-4 px-4 py-2 rounded hover:bg-[#172747] hover:text-white hover:border hover:border-white transition">
                Read Our Blog
              </button>
            </Link>
          </div>
         </div>
        </div>

        {/* Call to Action */}
       

        {/* Blog Posts Grid */}
            {/* <div className="flex-grow h-px bg-gray-400"></div> */}
       <div className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl px-4 gap-6">
      {blogPosts.map((post, i) => (
        <motion.div
          key={post.id}
          className="border border-gray-300 hover:bg-white hover:text-[#172747] hover:border-0 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 "
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={i}
        >
          <Link href={`/blog/${post.id}`} className="block group">
            <div className="relative cursor-pointer h-48 overflow-hidden ">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 ">
              <div className="text-gray-400 text-sm mb-2 group-hover:text-[#172747]">{post.date}</div>
              <h3 className="text-lg font-medium mb-4 group-hover:text-[#172747] transition-colors duration-300">
                {post.title}
              </h3>
              <div className="inline-flex items-center text-gray-500 group-hover:text-[#172747] transition-colors duration-300">
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
            {/* <div className="flex-grow h-px bg-gray-400"></div> */}
      </div>
    </section>

    {/* ------------------------------------ */}


    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Heading */}
          <div>
          <p
            className="uppercase text-[18px]  text-[#172747] leading-[100%] tracking-normal mb-2"
            style={{ fontFamily: 'Lato' }}
          >FAQ</p>
             <h2  style={{
                  fontFamily: "'Ivy Mode'",
                  fontWeight: 300,
                  // fontSize: '56px',
                  lineHeight: '140%',
                  letterSpacing: '0'
                }}
                className="text-[#172747] mb-0 sm:mb-6 text-[32px] sm:text-[50px]"
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
          className="w-full flex justify-between cursor-pointer items-center px-6 py-5 text-left text-[#1C1C1C]  focus:outline-none"
        >
          <span className="sm:text-[16px]" 
           style={{ fontFamily: 'Lato', letterSpacing: '1px' }}>
            {faq.question}
          </span>
          <span className={`transition-transform cursor-pointer duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? (
              <ChevronUp size={20} className="text-[#6B6B6B]" />
            ) : (
              <ChevronDown size={20} className="text-[#6B6B6B]" />
            )}
          </span>
        </button>

        {isOpen && (
          <div className=" px-6 py-4 text-[#4B4B4B] text-sm sm:text-[15px] cursor-pointer bg-white border-t border-[#E0E0E0]   "
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
     <div className="w-full py-16 px-4  md:px-8 bg-[#172747]">
      <div className="max-w-6xl mx-auto gap-4  flex-col md:flex-row flex md:flex">
        {/* Stats box*/}
        <div className="flex flex-row gap-4 pl-2 w-full">
          {/* Years in Market */}
          <div className="bg-gray-50 w-[220px] h-[200px] shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105">
            <div className="absolute right-6 top-6 bg-indigo-100 p-3 rounded-full transition-transform duration-300 group-hover:animate-bounce">
              <Zap className="w-6 h-6 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-300" />
            </div>
            {(() => {
              const { count, ref } = useCounter(5);
              return (
                <div className="mt-8" ref={ref}>
                  <h3 className="text-indigo-500 font-[200] tracking-[1px]" style={{ fontSize: '48px', fontFamily: 'Ivy Mode', letterSpacing: '1px' }}>
                    {count} <span>Year</span>
                  </h3>
                  <p className="text-gray-700 mt-2" style={{ fontSize: '20px', fontFamily: 'Ivy Mode', letterSpacing: '1px' }}>
                    In the market
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Properties Sold */}
          <div className="bg-gray-50 w-[220px] h-[200px] shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105">
            <div className="absolute right-6 top-6 bg-indigo-100 p-3 rounded-full">
              <div className="w-6 h-6 flex items-center justify-center text-indigo-500 transition-transform duration-300 group-hover:animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
            {(() => {
              const { count, ref } = useCounter(500);
              return (
                <div className="mt-8" ref={ref}>
                  <h3 className="text-indigo-500 font-[200] tracking-[1px]" style={{ fontSize: '48px', fontFamily: 'Ivy Mode', letterSpacing: '1px' }}>
                    {count} <span>+</span>
                  </h3>
                  <p className="text-gray-700 mt-2" style={{ fontSize: '20px', fontFamily: 'Ivy Mode', letterSpacing: '1px' }}>
                    Properties Sold
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Industry Awards */}
          <div className="bg-gray-50 w-[220px] h-[200px] shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105">
            <div className="absolute right-6 top-6 bg-indigo-100 p-3 rounded-full">
              <Book className="w-6 h-6 text-indigo-500 transition-colors duration-300 group-hover:text-indigo-600" />
            </div>
            {(() => {
              const { count, ref } = useCounter(25);
              return (
                <div className="mt-8" ref={ref}>
                  <h3 className="text-indigo-500 font-[200]" style={{ fontSize: '48px', fontFamily: 'Ivy Mode' }}>
                    {count} <span>+</span>
                  </h3>
                  <p className="text-gray-700 mt-2" style={{ fontSize: '20px', fontFamily: 'Ivy Mode' }}>
                    Industry awards
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Support */}
          <div className="bg-gray-50 w-[220px] h-[200px] shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105">
            <div className="absolute right-6 top-6 bg-indigo-100 p-3 rounded-full">
              <Globe className="w-6 h-6 text-indigo-500 transition-colors duration-300 group-hover:text-indigo-600" />
            </div>
            {(() => {
              const { count, ref } = useCounter(24);
              return (
                <div className="mt-8" ref={ref}>
                  <h3 className="text-indigo-500 font-[200]" style={{ fontSize: '48px', fontFamily: 'Ivy Mode' }}>
                    {count} / 7
                  </h3>
                  <p className="text-gray-700 mt-2" style={{ fontSize: '20px', fontFamily: 'Ivy Mode' }}>
                    Support
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Cities */}
          <div className="bg-gray-50 w-[220px] h-[200px] shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105">
            <div className="absolute right-6 top-6 bg-indigo-100 p-3 rounded-full">
              <Wallet className="w-6 h-6 text-indigo-500 transition-colors duration-300 group-hover:text-indigo-600" />
            </div>
            {(() => {
              const { count, ref } = useCounter(9);
              return (
                <div className="mt-8" ref={ref}>
                  <h3 className="text-indigo-500 font-[200]" style={{ fontSize: '48px', fontFamily: 'Ivy Mode' }}>
                    {count}
                  </h3>
                  <p className="text-gray-700 mt-2" style={{ fontSize: '20px', fontFamily: 'Ivy Mode' }}>
                    Cities
                  </p>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>

    {/* -------------------- */}

   

    </div>
  );
}
function useMemo<T>(factory: () => T, dependencies: any[]): T {
  return reactUseMemo(factory, dependencies);
}
