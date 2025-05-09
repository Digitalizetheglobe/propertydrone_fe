"use client"
import Link from "next/link";
import Image from "next/image";
// import logo from "@/app/images/PropertyDrone-Logo.png"; 
import d1 from "@/public/images/Frame 104.png";
import d2 from "@/public/images/Frame 105.png";
import d3 from "@/public/images/Frame 106.png";
import d4 from "@/public/images/Frame 107.png";
import d5 from "@/public/images/Frame 108.png";
import d6 from "@/public/images/Frame 109.png";
import d7 from "@/public/images/Frame 110.png";
import d8 from "@/public/images/Frame 111.png";
import d9 from "@/public/images/Frame 112.png";
import d10 from "@/public/images/Frame 104.png";
import d11 from "@/public/images/Frame 105.png";
import d12 from "@/public/images/Frame 106.png";
import d13 from "@/public/images/Frame 107.png";
import d14 from "@/public/images/Frame 108.png";
import d15 from "@/public/images/Frame 109.png";
import d16 from "@/public/images/Frame 110.png";
import d17 from "@/public/images/Frame 111.png";
import d18 from "@/public/images/Frame 112.png";
import b1 from "@/public/images/Frame 1618872604.png";
import b2 from "@/public/images/buliding.png";
import b3 from "@/public/images/Frame 1618872604 (3).png";
// import d10 from "@/public/images/Frame 113.png";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import bg1 from '@/public/images/7578550-uhd_3840_2160_30fps 1.png'; // Adjust the path as necessary
// import main2 from '../public/images/mainvideo.mp4';
import main2 from '../public/images/main2.png';
import main3 from '../public/images/Frame 145.png';
import main4 from '../public/images/buliding.png';
import { useMemo as reactUseMemo } from 'react';
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
  }
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
    text: "I decided to expand my business and enter the Dubai market, but didn't know where to start. I was advised to get a consultation from Mira. They told me about the specifics of local laws, helped me to get all the necessary licenses and even filled out all the documents for me. I thought it would take a very long time, but it turned out to be very fast.",
    date: "16th April, 2025",
    company: "Primdjfke Business Hub",
    rating: 5
  },
  {
    id: 2,
    text: "I decided to expand my business and enter the Dubai market, but didn't know where to start. I was advised to get a consultation from Mira. They told me about the specifics of local laws, helped me to get all the necessary licenses and even filled out all the documents for me. I thought it would take a very long time, but it turned out to be very fast.",
    date: "16th April, 2025",
    company: "Prislkdfjiome Business Hub",
    rating: 5
  },
  {
    id: 3,
    text: "I decided to expand my business and enter the Dubai market, but didn't know where to start. I was advised to get a consultation from Mira. They told me about the specifics of local laws, helped me to get all the necessary licenses and even filled out all the documents for me. I thought it would take a very long time, but it turned out to be very fast.",
    date: "16th April, 2025",
    company: "sdfjkPrime Business Hub",
    rating: 5
  },
  {
    id: 4,
    text: "I decided to expand my business and enter the Dubai market, but didn't know where to start. I was advised to get a consultation from Mira. They told me about the specifics of local laws, helped me to get all the necessary licenses and even filled out all the documents for me. I thought it would take a very long time, but it turned out to be very fast.",
    date: "16th April, 2025",
    company: "Prisdfjome Business Hub", 
    rating: 5
  },
  {
    id: 5,
    text: "I decided to expand my business and enter the Dubai market, but didn't know where to start. I was advised to get a consultation from Mira. They told me about the specifics of local laws, helped me to get all the necessary licenses and even filled out all the documents for me. I thought it would take a very long time, but it turned out to be very fast.",
    date: "16th April, 2025",
    company: "uuaauu Business Hub",
    rating: 5
  },
  {
    id: 6,
    text: "I decided to expand my business and enter the Dubai market, but didn't know where to start. I was advised to get a consultation from Mira. They told me about the specifics of local laws, helped me to get all the necessary licenses and even filled out all the documents for me. I thought it would take a very long time, but it turned out to be very fast.",
    date: "16th April, 2025",
    company: "uaaauuu Business Hub",
    rating: 5
  },
  {
    id: 7,
    text: "I decided to expand my business and enter the Dubai market, but didn't know where to start. I was advised to get a consultation from Mira. They told me about the specifics of local laws, helped me to get all the necessary licenses and even filled out all the documents for me. I thought it would take a very long time, but it turned out to be very fast.",
    date: "16th April, 2025",
    company: "usdvvuuu Business Hub",
    rating: 5
  },
  {
    id: 8,
    text: "I decided to expand my business and enter the Dubai market, but didn't know where to start. I was advised to get a consultation from Mira. They told me about the specifics of local laws, helped me to get all the necessary licenses and even filled out all the documents for me. I thought it would take a very long time, but it turned out to be very fast.",
    date: "16th April, 2025",
    company: "uzduuu Business Hub",
    rating: 5
  },
  {
    id: 9,
    text: "I decsddided to expand my business and enter the Dubai market, but didn't know where to start. I was advised to get a consultation from Mira. They told me about the specifics of local laws, helped me to get all the necessary licenses and even filled out all the documents for me. I thought it would take a very long time, but it turned out to be very fast.",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisible = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length - maxVisible + 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - maxVisible : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + maxVisible);

  // Removed duplicate handleSubmit function
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(propertyData.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const images = [d1, d2, d3, d4, d5, d6, d7, d8, d9,d10,d11,d12,d13,d14,d15,d16,d17,d18];
  
  interface FormData {
    name: string;
    email: string;
  }

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

  interface Filters {
    type: string;
    location: string;
    bedrooms: string;
    minPrice: string;
    maxPrice: string;
    search: string; 
    
  }

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
  // Functions for slider controls
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Property card component to avoid repetition
 
 const PropertyCard = ({ property, delay }: { property: Property; delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the card enters the viewport
        if (entry.isIntersecting) {
          // Add a small delay based on the card's index
          setTimeout(() => {
            setIsVisible(true);
            // Once visible, no need to observe anymore
            if (cardRef.current) observer.unobserve(cardRef.current);
          }, delay);
        }
      },
      { threshold: 0.05, rootMargin: "20px" } // Trigger earlier with lower threshold
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-sm overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        {property?.multipleImages?.length > 0 && (
          <Image
            src={main2}
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className={`z-0 transition-transform duration-700 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        )}
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-30' : 'opacity-20'}`}></div>
      </div>
      
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <div className="flex items-center">
            <span>By {'developerName'}</span>
          </div>
          <div className="flex items-center ml-auto">
            <svg className={`w-4 h-4 mr-1 transition-colors duration-300 ${isHovered ? 'text-blue-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="transition-colors duration-300">{property.location}</span>
          </div>
        </div>
        <h3 className={`font-medium transition-colors duration-300 ${isHovered ? 'text-blue-800' : 'text-gray-900'}`}>{property.propertyName}</h3>
      </div>
      
      <div className="px-4 py-3 flex items-center text-sm text-gray-600 border-b border-gray-100">
        <div className="flex-1 transition-colors duration-300 hover:text-blue-700">{property.topology || 'bed'}</div>
        <div className="flex-1 transition-colors duration-300 hover:text-blue-700">{'bath'}</div>
        <div className="flex-1 transition-colors duration-300 hover:text-blue-700">{property.carpetArea}</div>
      </div>
      
      <div className="p-4 flex items-center">
        <div className="flex-1">
          <span className={`transition-all duration-300 ${isHovered ? 'text-blue-700 font-medium' : 'text-blue-500'}`}>₹ {property.tentativeBudget}</span>
        </div>
        <div className="flex space-x-2 items-center">
          <button className="p-2 border border-gray-300 rounded transition-all duration-300 hover:bg-gray-100 hover:border-gray-400">
            <svg className="w-4 h-4 transition-colors duration-300 hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
          </button>
          <button className="bg-blue-900 text-white px-4 py-1 text-sm rounded-sm transition-all duration-300 hover:bg-blue-700 transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
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
          <div className="flex items-center space-x-8 px-4 py-4 bg-gray-200 bg-opacity-40 rounded-lg">
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
          className="px-5 py-5 bg-gray-200 text-gray-700 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          More <span className="ml-1">≡</span>
        </button>
        
        <button className="px-6 py-5 bg-gray-200 text-gray-700 rounded-lg">
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
  <main className="relative z-10 container mx-auto px-4 pt-50">
    <div className="flex flex-col items-start max-w-3xl">
    <h1
  style={{
    fontFamily: "Ivy Mode",
    fontWeight: 300,
    fontSize: '86px',
    lineHeight: '80px',
    letterSpacing: '0'
  }}
  className="text-white mb-10 mt=20"
>

  Find the best <br></br> properties in Pune
</h1>


      <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
        <p className="text-white text-xl mb-4 md:mb-0 md:mr-8">
          with Property Management company in Pune
        </p>
        <a 
          href="contactus" 
          className="flex items-center bg-white hover:border hover:border-white text-[#172747] px-4 py-2 rounded hover:bg-[#172747] hover:text-white transition duration-300"
        >
          Get Consultation 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

      {/* Property Category Cards */}
      
    </div>
    <div className="w-full overflow-hidden">

<div 
ref={scrollContainerRef}
className="flex overflow-x-auto scrollbar-hide snap-x"
style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
onMouseEnter={() => setIsPaused(true)}
onMouseLeave={() => setIsPaused(false)}
>
{images.map((img, index) => (
<div 
key={index} 
className="flex-shrink-0  h-34 mx-2 first:ml-0 transition-all duration-300 ease-in-out"
style={{ 
  transform: `scale(1)`,
  transformOrigin: 'center center',
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'scale(1.05)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'scale(1)';
}}
>
<div className=" shadow-md   flex flex-col items-center justify-center hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
  <Image
    src={img}
    alt={`Card ${index + 1}`}
    className="w-auto h-28 object-cover transition-all duration-300"
  />
</div>

</div>
))}
</div>

</div>
  </main>
</div>
{/* ------------------------------ */}
   {/* Filter Section */}
   <div className=" mx-auto px-6 md:px-20 py-8">
  {/* Filter Section */}
  <div className="bg-[#172747] p-6 rounded-lg shadow-md mb-8">
    {/* <h3 className="text-xl font-semibold text-white  mb-4">Find Your Perfect Property</h3> */}
    
    {/* Filter Controls - Flex Layout */}
    <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
      {/* Search Input */}
      <div className="flex-1">
  <label className="block text-sm font-medium text-white mb-1">Search</label>
  <div className="relative">
    <input
      type="text"
      name="search"
      value={filters.search || ''}
      onChange={handleFilterChange}
      placeholder="Search properties..."
      className="w-full px-4 py-2 pl-10 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-white"
    />
    <div className="absolute left-3 top-2.5 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
</div>

{/* Location Dropdown */}
<div className="flex-1">
  <label className="block text-sm font-medium text-white mb-1">Location</label>
  <select
    name="location"
    value={filters.location || ''}
    onChange={handleFilterChange}
    className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-transparent"
  >
    <option value="" className="text-white">All Locations</option>
    {Array.from(new Set(properties.map(p => p.location))).map(location => (
      <option key={location} value={location} className="text-black">{location}</option>
    ))}
  </select>
</div>

      
      {/* Min Price Input */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-white mb-1">Min Price</label>
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice || ''}
          onChange={handleFilterChange}
          placeholder="Min Price"
          className="w-full px-3 py-2 placeholder:text-white border border-ehite rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {/* Max Price Input */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-white mb-1">Max Price</label>
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice || ''}
          onChange={handleFilterChange}
          placeholder="Max Price"
          className="w-full px-3 py-2 placeholder:text-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Reset Button */}
      <div className="flex-none">
        <button
          onClick={resetFilters}
          className="w-full px-4 py-2 bg-[#172747] border border-white text-white rounded hover:bg-white hover:text-[#172747] transition-colors duration-300"
        >
          Reset Filters
        </button>
      </div>
    </div>
  </div>

  {/* Loading and Error States */}
  {loading ? (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 text-white border-t-2 border-b-2 border-blue-500"></div>
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
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Reset Filters
      </button>
    </div>
  ) : (
    <div className="space-y-10">
      {/* Featured Properties Section */}
      <div className="mb-8">
        <h2 className="text-2xl text-[#172747] font-bold mb-6">Featured Properties</h2>
        <h3
          style={{
            fontFamily: "'Ivy Mode'",
            fontWeight: 300,
            fontSize: '56px',
            lineHeight: '140%',
            letterSpacing: '0'
          }}
          className="text-[#172747] mb-6"
        >
          Explore top-performing properties with high ROI and verified builder credibility.
        </h3>
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

      {/* <div className="max-w-6xl mx-auto px-4 py-12">
     
      <div className="text-center mb-8">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-600 mb-2">TOP LOCALITIES</p>
        <h2 className="text-3xl md:text-4xl font-serif font-light">
          Find homes in the most sought-after
          <br />
          neighborhoods of Pune.
        </h2>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
    <h2 className="text-2xl text-[#172747] font-bold mb-6">Popular Locations</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {locationCounts.map((locationData: { location: string; count: number; image: string }, index: number) => (
        <div key={index} className="relative overflow-hidden group h-64 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <Image
        src= {main}
        alt={`${locationData.location} properties`}
        className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
        <h3 className="text-xl font-medium">{locationData.location}</h3>
        <p className="text-sm">{locationData.count} {locationData.count === 1 ? 'Property' : 'Properties'}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

      
      <div className="flex justify-center">
        <Link href="/properties">
        <button className="bg-[#172747] text-white px-6 py-2 flex items-center gap-2 rounded hover:bg-[#172747] transition">
          View All Locations
          <ArrowRight size={16} />
        </button>
        </Link>
      </div>
    </div> */}

    {/* ------------------------ */}

 <div className="bg-[#EEF1F5]">
  <section className="max-w-6xl mx-auto px-4 py-12">
    <div className="mb-8 animate-fade-in">
      <h6 className="text-xs uppercase tracking-wider text-center mb-2 text-gray-500">
        UPCOMING & LATEST LAUNCHES
      </h6>
      <h2 className="text-3xl md:text-4xl text-center font-light leading-tight max-w-2xl mx-auto">
        Be the first to discover the hottest launches in the Middle East
      </h2>
    </div>

    {/* Latest Properties Slider */}
    <div>
      <h3 className="text-xl font-light mb-6 animate-fade-in">Latest Launches</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {remainingProperties
          .slice(currentSlide * 2, currentSlide * 2 + 2)
          .map((property) => (
            <div
              key={property.id}
              className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
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
          <span className="text-gray-400">
            {' '}
            / {String(Math.max(1, totalSlides)).padStart(2, '0')}
          </span>
        </div>

        {/* Horizontal Divider */}
        <div className="flex-grow h-px bg-gray-300 mx-4"></div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 flex-shrink-0 z-10 pl-2">
          <button
            onClick={prevSlide}
            className="p-2 border border-gray-300 rounded-full hover:bg-white transition duration-300 hover:shadow"
            aria-label="Previous slide"
            disabled={remainingProperties.length <= 2}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 border border-gray-300 rounded-full hover:bg-white transition duration-300 hover:shadow"
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


  {/* -------------------- */}
    <section className="bg-[#172747] text-white py-16 px-4 md:px-8">
      <div className="container mx-auto px-20">
        <div className="mb-8">
        <p
            className="uppercase text-[18px] font-normal leading-[100%] tracking-normal mb-2"
            style={{ fontFamily: 'Lato' }}
          >
            WHY CHOOSE US
          </p>

          <h2  style={{
                  fontFamily: "'Ivy Mode'",
                  fontWeight: 300,
                  fontSize: '56px',
                  lineHeight: '140%',
                  letterSpacing: '0'
                }}
                className="text-white mb-6"
              >We're redefining how people explore and purchase property.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature) => (
            <div key={feature.id} className="border-l border-r px-4 border-gray-700 pt-6">
              <p className="text-gray-400 text-lg mb-4">{feature.id}</p>
              <h3 className=" text-[24px] font-normal leading-[100%] tracking-normal mb-2"
            style={{ fontFamily: 'Lato' }}>{feature.title}</h3>
              <p className="text-gray-400 text-[18px] font-normal leading-[100%] tracking-normal mb-2"
            style={{ fontFamily: 'Lato' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ------------ */}
    <section className="relative w-full py-16 md:py-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src= {main3}
          alt="Background" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      <div className="relative z-10 container mx-auto max-w-4xl px-4">
        {/* Quote section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
            "Let the experts help you<br />
            make the right investment"
          </h2>
          <div className="mt-4">
            <p className="font-medium text-lg">Nikhil Mawale</p>
            <p className="text-gray-600">Founder</p>
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
              className="w-full md:w-auto bg-[#172747] hover:bg-white hover:border hover:border-[#172747] hover:text-[#172747] px-6 py-3 bg-navy-800 text-white font-medium rounded flex items-center justify-center"
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
        <p
            className="uppercase text-[18px] font-normal text-[#172747] leading-[100%] tracking-normal mb-2"
            style={{ fontFamily: 'Lato' }}
          >
             TESTIMONIAL
          </p>
           <h2  style={{
                  fontFamily: "'Ivy Mode'",
                  fontWeight: 300,
                  fontSize: '56px',
                  lineHeight: '140%',
                  letterSpacing: '0'
                }}
                className="text-[#172747] mb-6"
              >Your trust is our greatest award</h2>
        </div>
        {/* <div>
          <button  className="w-full md:w-auto bg-[#172747] hover:bg-white hover:border hover:border-[#172747] hover:text-[#172747] px-6 py-3 bg-navy-800 text-white font-medium rounded flex items-center justify-center">
            Write a review <ChevronRight className="ml-2" size={16} />
          </button>
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="border-l border-r px-4 border-gray-200 pt-4">
            <div className="mb-2">
              <h3 className="font-medium">{testimonial.company}</h3>
            </div>
            <div className="flex mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-4 line-clamp-6">
              {testimonial.text}
            </p>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-between w-full relative">
  {/* Number Indicator */}
  <div className="text-lg font-medium flex-shrink-0 z-10 bg-white pr-2">
    <span className="font-bold">{String(currentIndex + 1).padStart(2, '0')}</span> / 
    <span className="text-gray-400"> {String(testimonials.length).padStart(2, '0')}</span>
  </div>

  {/* Horizontal Line */}
  <div className="flex-grow h-px bg-gray-300 mx-4"></div>

  {/* Navigation Arrows */}
  <div className="flex gap-2 flex-shrink-0 z-10 bg-white pl-2">
    <button 
      onClick={handlePrev}
      className="p-2 border border-gray-300 rounded-full hover:bg-gray-100"
    >
      <ChevronLeft size={20} />
    </button>
    <button 
      onClick={handleNext}
      className="p-2 border border-gray-300 rounded-full hover:bg-gray-100"
    >
      <ChevronRight size={20} />
    </button>
  </div>
</div>

    </section>

    {/* ----------------- */}

    <section className="bg-[#172747] text-white py-16 px-4 md:px-8">
      <div className="container mx-auto px-20">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
          <p
            className="uppercase text-[18px] font-normal text-white leading-[100%] tracking-normal mb-2"
            style={{ fontFamily: 'Lato' }}
          >INSIGHTS & UPDATES</p>
            <h2  style={{
                  fontFamily: "'Ivy Mode'",
                  fontWeight: 300,
                  fontSize: '56px',
                  lineHeight: '140%',
                  letterSpacing: '0'
                }}
                className="text-white mb-6"
              >
              Make smarter decisions with expert-written blogs.
            </h2>
          </div>
          <div className=" items-center">
            <p className="text-gray-300">
              Get the latest on market trends, property tips, and expert insights. Our blog brings you quick, valuable reads to guide your real estate journey with confidence.
            </p>
            <Link href="/blog">
            <button className="bg-white text-[#172747] border border-white mt-4 px-4 py-2 rounded hover:bg-[#172747] hover:text-white hover:border hover:border-white transition">
              Read Our Blog
            </button>
          </Link>
          </div>
        </div>

        {/* Call to Action */}
       

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="border-r border-l border-gray-700 px-4">
              <Link href={`/blog/${post.id}`} className="block group">
                <div className="relative h-48 mb-4 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="text-gray-400 text-sm mb-2">{post.date}</div>
                <h3 className="text-lg font-medium mb-4 group-hover:text-blue-400">{post.title}</h3>
                <div className="inline-flex items-center hover:text-blue-400">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ------------------------------------ */}


    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Heading */}
          <div>
          <p
            className="uppercase text-[18px] font-normal text-[#172747] leading-[100%] tracking-normal mb-2"
            style={{ fontFamily: 'Lato' }}
          >FAQ</p>
             <h2  style={{
                  fontFamily: "'Ivy Mode'",
                  fontWeight: 300,
                  fontSize: '56px',
                  lineHeight: '140%',
                  letterSpacing: '0'
                }}
                className="text-[#172747] mb-6"
              >Have questions? <br/> We've got answers.</h2>
          </div>
          
          {/* Right Column - Accordion */}
          <div>
            {faqData.map((faq, index) => (
              <div key={faq.id} className="border-b border-gray-300">
                <button
                  className="w-full text-left py-4 pr-10 relative flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="absolute right-0">
                    {openIndex === index ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
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
