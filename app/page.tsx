"use client"
import Link from "next/link";
import Image from "next/image";
import AnimatedLetters from '@/app/components/AnimatedLetters';
// import logo from "@/app/images/PropertyDrone-Logo.png"; 
import d1 from "@/public/images/Frame 104.png";
import d2 from "@/public/images/Frame 105.png";
import d3 from "@/public/images/Frame 106.png";
import d4 from "@/public/images/Frame 107.png";
import d5 from "@/public/images/Frame 108.png";
import d6 from "@/public/images/Frame 109.png";
import d7 from "@/public/images/Frame 104.png";
import d8 from "@/public/images/Frame 105.png";
import d9 from "@/public/images/Frame 106.png";
import d10 from "@/public/images/Frame 107.png";
import d11 from "@/public/images/Frame 108.png";
import d12 from "@/public/images/Frame 109.png";
import d13 from "@/public/images/Frame 104.png";
import d14 from "@/public/images/Frame 105.png";
import d15 from "@/public/images/Frame 106.png";
import d16 from "@/public/images/Frame 107.png";
import d17 from "@/public/images/Frame 108.png";
import d18 from "@/public/images/Frame 109.png";
import b1 from "@/public/images/service.png";
import b2 from "@/public/images/buliding.png";
import b3 from "@/public/images/service2.png";
// import d10 from "@/public/images/Frame 113.png";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Star, ChevronDown, ChevronUp, Building2 } from 'lucide-react';
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
    text: "Nikhil and his team were with me throughout the process, understanding my requirements and suggesting the best projects.",
    date: "16th April, 2025",
    company: "Primdjfke Business Hub",
    rating: 5
  },
  {
    id: 2,
    text: "Being NRIs, we found Nikhil's YouTube videos informative, which led us to find a place in Pune within a year.",
    date: "16th April, 2025",
    company: "Prislkdfjiome Business Hub",
    rating: 5
  },
  {
    id: 3,
    text: "PropertyDrone Realty played a huge part in our journey towards finding and building a home.",
    date: "16th April, 2025",
    company: "sdfjkPrime Business Hub",
    rating: 5
  },
  {
    id: 4,
    text: "Nikhil and Atharva were super helpful and patient, answering all of my questions and helping me find my dream home.",
    date: "16th April, 2025",
    company: "Prisdfjome Business Hub",
    rating: 5
  },
  {
    id: 5,
    text: "The team understood my needs and provided excellent guidance throughout the property selection process.",
    date: "16th April, 2025",
    company: "uuaauu Business Hub",
    rating: 5
  },
  {
    id: 6,
    text: "Their expertise and dedication made the entire home-buying experience smooth and stress-free.",
    date: "16th April, 2025",
    company: "uaaauuu Business Hub",
    rating: 5
  },
  {
    id: 7,
    text: "I highly recommend PropertyDrone Realty for their professionalism and commitment to client satisfaction.",
    date: "16th April, 2025",
    company: "usdvvuuu Business Hub",
    rating: 5
  },
  {
    id: 8,
    text: "Thanks to the team's support, I was able to make informed decisions and secure the perfect property.",
    date: "16th April, 2025",
    company: "uzduuu Business Hub",
    rating: 5
  },
  {
    id: 9,
    text: "Their personalized approach and attention to detail exceeded my expectations.",
    date: "16th April, 2025",
    company: "uuuu Business Hub",
    rating: 5
  }
];


// import d from "@/app/images/d10.png";


interface Property {
  id: number;
  propertyName: string;
  location: string;
  city: string;
  tentativeBudget: number;
  badge: string;
  secondaryBadge: string;
  possession: string;
  topology: number;
  baths: number;
  carpetArea: number;
  image: any;
  featured: boolean;
  multipleImages?: any;
  type?: string;
}

export default function Home() {
  // const localities = [
  //   { name: "Baner", properties: 72, image: "/api/placeholder/400/320" },
  //   { name: "Aundh", properties: 72, image: "/api/placeholder/400/320" },
  //   { name: "Baner", properties: 72, image: "/api/placeholder/400/320" },
  //   { name: "Aundh", properties: 72, image: "/api/placeholder/400/320" },
  //   { name: "Baner", properties: 72, image: "/api/placeholder/400/320" },
  //   { name: "Aundh", properties: 72, image: "/api/placeholder/400/320" },
  //   { name: "Baner", properties: 72, image: "/api/placeholder/400/320" },
  //   { name: "Aundh", properties: 72, image: "/api/placeholder/400/320" },
  //   { name: "Baner", properties: 72, image: "/api/placeholder/400/320" },
  // ];
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
    duration: 800, // Animation duration
    once: true,    // Only animate once
  });
}, []);
  const [properties, setProperties] = useState<Property[]>([]);

  // First, let's group properties by location and count them
const locationCounts = useMemo(() => {
  // Skip if properties aren't loaded yet
  if (!properties.length) return [];
  
  // Create a map to store location counts and data
  const locationMap = new Map();
  
  // Group properties by location
  properties.forEach(property => {
    const location = property.location;
    
    if (!locationMap.has(location)) {
      locationMap.set(location, {
        location: location,
        count: 1,
        // Use the first property's image as the location image
        image: property.image || "/api/placeholder/400/320"
      });
    } else {
      // Increment count for existing location
      const current = locationMap.get(location);
      locationMap.set(location, {
        ...current,
        count: current.count + 1
      });
    }
  });
  
  // Convert map to array
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
  { img: d15, link: 'krunal-groups' },
  { img: d16, link: 'kasturi' },
  { img: d18, link: 'skyi-developers' },
  { img: d17, link: 'Solitaire' },
 
];


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
        const response = await fetch('http://localhost:5000/properties');
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
    filtered = filtered.filter(property => 
      property.tentativeBudget >= parseInt(filters.minPrice, 10)
    );
  }

  if (filters.maxPrice) {
    filtered = filtered.filter(property => 
      property.tentativeBudget <= parseInt(filters.maxPrice, 10)
    );
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

  const baseUrl = "http://localhost:5000"; // For dev — ideally from env
  const imagePath = property?.multipleImages?.[0]?.path
    ? `${baseUrl}${property.multipleImages[0].path}`
    : {main2};

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
    
       <Link href={`/properties/${property.id}`} passHref>
    <div
  ref={cardRef}
  className={`bg-white rounded-md  cursor-pointer overflow-hidden border border-gray-300 shadow-sm transition-all duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <div className="relative h-52 w-full overflow-hidden">
    {imagePath && (
      <Image
        src={typeof imagePath === 'string' ? imagePath : main2}
        alt={property.propertyName || "Property Image"}
        layout="fill"
        objectFit="cover"
        className={`z-0 transition-transform duration-700 ease-in-out ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      />
    )}
  </div>

  {/* Developer and Location */}
  <div className="flex border-b border-[#00000033]">
  <div className="w-1/2 flex items-center justify-center border-r border-[#00000033] py-2">
    <span className="text-black text-lg font-medium">By Developer</span>
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
    <span className="text-black text-lg font-medium">{property.location || "Location"}</span>
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
  <div className="flex justify-between items-center px-4 pb-2 space-x-2">
    {/* <div className="bg-[#EEF1F5] text-xs text-gray-800 px-3 py-1 rounded-md">
      {property.bedroom || "5"} Bedroom
    </div>
    <div className="bg-[#EEF1F5] text-xs text-gray-800 px-3 py-1 rounded-md">
      {property.bathroom || "4"} Bathroom
    </div> */}
    <div className="bg-[#EEF1F5] text-xs text-gray-800 px-3 py-1 rounded-md">
      {property.carpetArea || "1520"} sqft
    </div>
  </div>

  {/* Price and Actions */}
  <div className="flex items-center justify-between px-4 py-3">
    <span
      className={`text-[20px] font-semibold ${
        isHovered ? "text-blue-800" : "text-[#2B3C74]"
      }`}
    >
      ₹ {property.tentativeBudget || "4.53 Cr"}
    </span>
    <div className="flex space-x-2 items-center">
      <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
        <svg
          className="w-4 h-4 text-gray-600 hover:text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </button>
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
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string>('');
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch all videos
  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/youtube-videos');
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
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/mainvideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-black opacity-50"></div>

</div>


  {/* Navigation Bar */}
  {/* <header className="relative z-10 items-center justify-center mx-auto max-w-6xl">
  <div className="items-center justify-center mx-auto max-w-6xl">
      <nav className="flex items-center justify-between px-6 py-4 bg-opacity-40">
          <div className="flex items-center space-x-8 px-4 py-4 bg-gray-200 bg-opacity-40 rounded-[4px]">
            <Link href="/">
              <Image src={logo} alt="Logo" width={200} height={100} />
            </Link>
            
        <div className="hidden md:flex space-x-6 px-6">
          <a href="#" className="text-gray-700 hover:text-blue-700">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Services</a>
          <a href="properties" className="text-gray-700 hover:text-blue-700">Properties</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Developer</a>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button 
          className="px-5 py-5 bg-gray-200 text-gray-700 rounded-[4px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          More <span className="ml-1">≡</span>
        </button>
        
        <button className="px-6 py-5 bg-gray-200 text-gray-700 rounded-[4px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        
        <Link href="/contactus">
        <button className="px-4 py-5 w-full md:w-auto bg-[#172747] hover:bg-white hover:border hover:border-[#172747] hover:text-[#172747] bg-navy-800 text-white font-medium rounded flex items-center justify-center">
          CONTACT US
        </button>
        </Link>
      </div>
    </nav>
   </div>
  </header> */}

  {/* Main Hero Content */}
  <main className="relative z-10 container mx-auto px-4 pt-50 max-w-6xl ">
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
        <Link href="/contactus">
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

      {/* Property Category Cards */}
      
    </div>
    <div className="w-full overflow-hidden " id="filter-section">

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
      <Link href={`/developers/${imgObj.link}`}>
        <Image
          src={imgObj.img}
          alt={`Card ${index + 1}`}
          className="w-auto cursor-pointerh-22 object-cover transition-all duration-300 sm:h-30"
        />
      </Link>
    </div>
  </div>
))}
</div>

</div>
  </main>
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
<div className="bg-[#172747] justify-center p-4 md:p-6 shadow-md" >
  <div className="flex flex-col md:flex-row md:items-end gap-4 my-6 mx-4 md:mx-20">
    
    {/* Search Input */}
    <div className="w-full md:flex-1">
      <div className="relative">
        <input
          type="text"
          name="search"
          value={filters.search || ''}
          onChange={handleFilterChange}
          placeholder="Search properties..."
          className="w-full px-4 py-2 pl-10 border bg-white rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#172747] text-[#172747]"
        />
        <div className="absolute left-3 top-2.5 text-[#172747]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>

    {/* Location Dropdown */}
    <div className="w-full md:flex-1">
      <select
        name="location"
        value={filters.location || ''}
        onChange={handleFilterChange}
        className="w-full px-4 py-2 pl-10 border bg-white rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#172747] text-[#172747]"
      >
        <option value="" className="text-[#172747]">All Locations</option>
        {Array.from(new Set(properties.map(p => p.location))).map(location => (
          <option key={location} value={location} className="text-[#172747]">{location}</option>
        ))}
      </select>
    </div>

    {/* Min Price Input */}
    <div className="w-full md:flex-1">
      <input
        type="number"
        name="minPrice"
        value={filters.minPrice || ''}
        onChange={handleFilterChange}
        placeholder="Min Price"
        className="w-full px-4 py-2 pl-10 border bg-white rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#172747] text-[#172747]"
      />
    </div>

    {/* Max Price Input */}
    <div className="w-full md:flex-1">
      <input
        type="number"
        name="maxPrice"
        value={filters.maxPrice || ''}
        onChange={handleFilterChange}
        placeholder="Max Price"
        className="w-full px-4 py-2 pl-10 border bg-white rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#172747] text-[#172747]"
      />
    </div>

    {/* Reset Button */}
    <div className="w-full md:w-auto">
      <button
        onClick={resetFilters}
        className="w-full px-4 py-2 bg-[#172747] border border-white text-white rounded-[4px] hover:bg-white hover:text-[#172747] transition-colors cursor-pointer duration-300"
      >
        Reset Filters
      </button>
    </div>

  </div>
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
    <div className="space-y-10 max-w-6xl mx-auto px-4 ">
      {/* Featured Properties Section */}
      <div className="mb-8 ">
    <AnimatedLetters
      text="FEATURED PROPERTIES"
      as="h2"
        className="uppercase text-[#172747] text-[16px] sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
    />

    <AnimatedLetters
      text="Explore top-performing properties with high ROI and verified builder credibility."
      as="h3"
       className="text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
      />
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProperties.map((property, index) => (
          <PropertyCard 
        key={property.id} 
        property={property} 
        delay={index * 200} // Stagger the animations by 200ms per card
          />
        ))}
      </div>
      </div>
      
      {/* Remaining Properties Slider */}
      {/* Your slider component here */}
    </div>
  )}
</div>




      {/* -------------------------------------------------------------- */}

      <div className="max-w-6xl mx-auto px-4 py-12">
     
      <div className="text-center mb-8">
        
            <AnimatedLetters
  text="TOP LOCALITIES"
  as="h2"
  className="uppercase text-[#172747] text-[16px] text-center sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
            
/>

<AnimatedLetters
  text="Find homes in the most sought-after "
  as="h3"
   className="text-[#172747] text-center font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
      />
<AnimatedLetters
  text="neighborhoods of Pune."
  as="h3"
   className="text-[#172747] text-center mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
      />
      </div>

     
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
    <h2 className="text-2xl text-[#172747] font-bold mb-6">Popular Locations</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
     {locationCounts.map((locationData: { location: string; count: number; image: string }, index: number) => (
  <Link key={index} href={`/properties?location=${locationData.location}`}>
    <div className="relative grid h-52 w-fullcursor-pointer  place-content-center overflow-hidden rounded-[4px] bg-[#172747] shadow-md transition-transform duration-300 hover:scale-105 group">
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

      {/* Bottom Strip Animation */}
     
    </div>
  </Link>
))}

    </div>
  </div>

      
      <div className="flex justify-center">
        <Link href="/properties">
        <button className="bg-[#172747] cursor-pointer text-white px-6 py-2 flex items-center gap-2 rounded hover:bg-[#172747] transition">
          View All Locations
          <ArrowRight size={16} />
        </button>
        </Link>
      </div>
    </div>

    {/* ------------------------ */}
 
 <div className="bg-white">
  <section className="max-w-6xl mx-auto px-4 py-12">
    <div className="mb-8 animate-fade-in text-justify">
     
      <AnimatedLetters
      text="UPCOMING & LATEST LAUNCHES"
      as="h2"
      className="uppercase text-[#172747] text-[16px] sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
      />
 
      <AnimatedLetters
      text="Be the first to discover the hottest"
      as="h3"
      className="text-[#172747]  font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
      />

       <AnimatedLetters
      text="launches in Pune."
      as="h3"
      className="text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
      />
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
              className="flex flex-col hover:bg-[#EEF1F5]  rounded-[4px] shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="relative h-64 w-full mb-4 overflow-hidden rounded-t-lg group">
                <Image
                  src={main4}
                  alt={property.propertyName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-xl font-light">{property.propertyName}</h3>
                <p className="text-sm text-gray-600">{property.location}</p>
                <div className="flex justify-between items-center mt-2">
                  <div></div>
                  <p className="text-sm">From {property.tentativeBudget}</p>
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

<AnimatedLetters
  text="Explore insightful YouTube videos handpicked for you "
  as="h3"
   className="text-[#172747] text-center font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
      />
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
        <div className="mb-8 mx-auto max-w-6xl">
        

               <AnimatedLetters
  text="WHY CHOOSE US"
  as="h2"
  className="uppercase text-white text-[16px] sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
            
/>

<AnimatedLetters
  text="We're redefining how people explore and purchase property."
  as="h3"
   className="text-white mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
      />
        </div>
         {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 mx-auto max-w-6xl gap-4">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className="w-[260px] h-[210px] [perspective:1000px] group"
        >
          <div className="relative w-full h-full transition-transform duration-[999ms] [transform-style:preserve-3d] group-hover:rotate-y-180">
         
            <div className="absolute w-full h-full bg-[#172747] text-white flex items-center justify-center border-[2px] border-white rounded-[4px] [backface-visibility:hidden]">
              <div
                className="rounded-[4px] px-4 py-6 hover:bg-[#EEF1F5] hover:text-[#172747] shadow-sm hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="text-gray-400 hover:text-[#172747] text-[28px] mb-2">
                  {feature.id}
                </p>
                <h3
                  className="text-[24px] leading-[100%] tracking-normal mb-2"
                  style={{ fontFamily: 'Lato' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-400 hover:text-[#172747] text-[18px] leading-[100%] tracking-normal"
                  style={{ fontFamily: 'Lato' }}
                >
                  {feature.description}
                </p>
              </div>
            </div>

            
            <div className="absolute w-full h-full bg-white text-[#172747] flex items-center justify-center text-2xl border-[2px] border-[#172747] rounded-[4px] [backface-visibility:hidden] rotate-y-180">
             <div
                className="rounded-[4px] px-4 py-6  shadow-sm hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="text-[#172747] 0 text-[28px] mb-2">
                  {feature.id}
                </p>
                <h3
                  className="text-[24px] leading-[100%] tracking-normal mb-2"
                  style={{ fontFamily: 'Lato' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#172747] hover:text-gray-400 text-[18px] leading-[100%] tracking-normal"
                  style={{ fontFamily: 'Lato' }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div> */}
        <div>
           {/* <div className="flex-grow h-px bg-gray-400 "></div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 mx-auto max-w-6xl gap-4">
  {features.map((feature, index) => (
    <div
      key={feature.id}
      className="border rounded-[4px] px-4 py-6 border-gray-400 hover:bg-[#EEF1F5] hover:text-[#172747] transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <p className="text-gray-400 hover:text-[#172747] text-[28px] mb-2">{feature.id}</p>
      <h3
        className="text-[24px] leading-[100%] tracking-normal mb-2"
        style={{ fontFamily: 'Lato' }}
      >
        {feature.title}
      </h3>
      <p
        className="text-gray-400 hover:text-[#172747] text-[18px] leading-[100%] tracking-normal"
        style={{ fontFamily: 'Lato' }}
      >
        {feature.description}
      </p>
    </div>
  ))}
</div>

         {/* <div className="flex-grow h-px bg-gray-400 "></div> */}
        </div>
      </div>
      
    </section>

    {/* ------------ */}
    <section className="relative w-full py-16 md:py-24">
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
            <Link href="/contactus">
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
     <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10 flex justify-between items-center">
        <div>
          <AnimatedLetters
            text="TESTIMONIAL"
            as="h2"
            className="uppercase text-[#172747] text-[18px] tracking-[1px] leading-[100%] mb-2"
          />
          <AnimatedLetters
            text="Your trust is our greatest award"
            as="h3"
            className="text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
          />
        </div>
      </div>

       <div style={{ padding: '20px' }}>
      {/* Cards */}
      <div style={{
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
            width: '320px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            fontFamily: 'Poppins, sans-serif',
          }}>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{item.company}</h3>

            {/* Stars */}
            <div style={{ marginBottom: '15px', color: '#f9b31e' }}>
              {'★'.repeat(5)}
            </div>

            {/* Content */}
            <p style={{ color: '#444', fontSize: '15px', lineHeight: '1.6' }}>{item.text}</p>
            <p style={{ marginTop: '10px', color: '#999', fontSize: '13px' }}>{item.date}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}>
         <div style={{ margin: '0 10px', fontSize: '16px' }}>
          <strong>{String(currentPage).padStart(2, '0')}</strong>
          <span style={{ color: '#999' }}> / {String(totalPages).padStart(2, '0')}</span>
        </div> 
          {/* Horizontal Line */}
        <div className="flex-grow h-px bg-[#172747]"></div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1} className="cursor-pointer"
          style={{
            border: '1px solid #16213E',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            marginRight: '5px',
            background: '#fff',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          }}>‹</button>

       

        <button onClick={goToNextPage} disabled={currentPage === totalPages} className="cursor-pointer"
          style={{
            border: '1px solid #16213E',
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

    {/* -------------------- */}

   

    </div>
  );
}
function useMemo<T>(factory: () => T, dependencies: any[]): T {
  return reactUseMemo(factory, dependencies);
}
