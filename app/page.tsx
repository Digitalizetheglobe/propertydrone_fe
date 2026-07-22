"use client"
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import AnimatedLetters from '@/app/components/AnimatedLetters';
// import logo from "@/app/images/PropertyDrone-Logo.png"; 
import luxeImage from "@/public/images/main1.png";
import main22 from "@/public/images/final-bg.png";
import finalbg2 from "@/public/images/finalbg2.png"
import luxeImage1 from "@/public/images/luxe2.png";
import luxeImage2 from "@/public/images/bgimage1.png";

import b1 from "@/public/images/service.png";
import b2 from "@/public/images/buliding.png";
import b3 from "@/public/images/service2.png";
import imagedefault1 from "@/public/images/OIP (1).jpg";
import imagedefault2 from "@/public/images/OIP (8).jpg";
import imagedefault3 from "@/public/images/today8.jpg";
// import d10 from "@/public/images/Frame 113.png";
import searchFilter from "@/public/images/search-filter.png";
import {
  ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Star, ChevronDown, ChevronUp, Building2, Globe, Book, Wallet, Zap, Home as HomeIcon, ClipboardList, Clock, Banknote, Eye,
  Users, Search
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import bg1 from '@/public/images/7578550-uhd_3840_2160_30fps 1.png'; // Adjust the path as necessary
// import main2 from '../public/images/mainvideo.mp4';
import main2 from '../public/images/main2.png';
import main3 from '../public/images/7578550-uhd_3840_2160_30fps 1.png';
import main33 from '../public/images/Frame 145.png';
import main4 from '../public/images/buliding.png';
import devImg2 from "@/public/images/download (1).webp";
import devImg3 from "@/public/images/developerbgimg.png";
import devImg6 from "@/public/images/R.jpg";

import { useMemo as reactUseMemo } from 'react';

import { motion, Variants } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';



import PropertyPopup from "./components/propertypopup";
import BottomPropertyDetails from "./components/bottompropertydetails";
import WhyPropertyDrone from "./components/whypropertydrone";
import HomePageWhyPropertyDrone from "./components/homepagedevelopers";
import HomePageLoanBanks from "./components/homepageloanbanks";
import HomePageBlogs from "./components/homepageblogs";
import EnquireSideButton from "@/app/components/EnquireSideButton";
import HomePageTestimonials from "./components/homepagetestimonials";
import HomePageNir from "./components/homepagenir";
import HomePageYoutube from "./components/homepageyoutube";
import HomePageFeaturedProperty from "./components/homepagefeaturedproperty";
import HomePageLuxeProperty from "./components/homepageluxeproperty";
import HomePageLogos from "./components/homepagelogos";
import FloatingVideo from "./components/FloatingVideo";
import LeadSourceModal from "@/components/LeadSourceModal";

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



const features = [
  {
    id: '01',
    title: 'Verified Listings Only',
    description: 'Every property on our platform is verified for accuracy. Inquiry with confidence knowing whats realâ€”and nothing less.',
    icon: Eye
  },
  {
    id: '02',
    title: 'Expert Consultation',
    description: 'Our real estate experts guide you through location comparisons, pricing trends, and negotiation tactics to make sure you choose right, not just whats available.',
    icon: Users
  },
  {
    id: '03',
    title: 'Trusted Developer',
    description: 'Weve partnered with Indias most reputed developers to bring you projects that are on time, legally clear, and high on return value.',
    icon: Building2
  },
  {
    id: '04',
    title: 'Zero Brokerage',
    description: 'We work directly with top builders, so you get the best deals without any extra commission or brokerage charges.',
    icon: Wallet
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


// Add CookieBanner component before the Home component
const CookieBanner = ({ onAccept, onReject }: { onAccept: () => void; onReject: () => void }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#172747] text-white px-4 py-6 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base" style={{
            fontSize: '16px',
            fontFamily: 'Lato, sans-serif',
            letterSpacing: '0.5px',
            lineHeight: '1.3',
          }}>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
            By clicking "Accept", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={onAccept}
            className="px-6 py-2 bg-white text-[#172747] rounded hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Accept
          </button>
          <button
            onClick={onReject}
            className="px-6 py-2 border border-white text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  // ----------- Add Compare State & Logic -------------
  const [comparedIds, setComparedIds] = useState<number[]>([]);
  const [compareLoadingId, setCompareLoadingId] = useState<number | null>(null);
  const [comparisonIdMap, setComparisonIdMap] = useState<Record<number, number>>({});
  const [webUserId, setWebUserId] = useState<number | null>(null); // Start as null

  // Sync userId from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('webuser');
      if (stored) {
        const u = JSON.parse(stored);
        if (u && u.id) {
          setWebUserId(u.id);
        } else {
          setWebUserId(null);
        }
      } else {
        setWebUserId(null);
      }
    } catch (e) {
      console.error("Error parsing webuser", e);
      setWebUserId(null);
    }
  }, []);

  const fetchComparedIds = async () => {
    let currentUserId: number | null = null;
    try {
      const stored = localStorage.getItem('webuser');
      if (stored) {
        const u = JSON.parse(stored);
        if (u && u.id) currentUserId = u.id;
      }
    } catch (e) { }

    if (!currentUserId) {
      setComparedIds([]);
      setComparisonIdMap({});
      return;
    }

    const res = await fetch(`https://api.propertydronerealty.com/api/property-comparisons?webUserId=${currentUserId}`);
    if (!res.ok) return;
    const all = await res.json();

    setComparedIds(
      all.filter((cmp: any) => `${cmp.webUserId}` === `${currentUserId}`)
        .map((cmp: any) => parseInt(cmp.propertyId))
    );
    const map: Record<number, number> = {};
    all.forEach((cmp: any) => {
      if (`${cmp.webUserId}` === `${currentUserId}`) {
        map[parseInt(cmp.propertyId)] = cmp.id;
      }
    });
    setComparisonIdMap(map);
  };

  // Fetch compared IDs when webUserId changes
  useEffect(() => {
    fetchComparedIds();
  }, [webUserId]);
  // ---------- End Compare State & Logic --------------

  // ----------- Add Saved (Like) State & Logic -------------
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [savedLoadingId, setSavedLoadingId] = useState<number | null>(null);
  const [savedIdMap, setSavedIdMap] = useState<Record<number, number>>({});

  const fetchSavedIds = async () => {
    let currentUserId: number | null = null;
    try {
      const stored = localStorage.getItem('webuser');
      if (stored) {
        const u = JSON.parse(stored);
        if (u && u.id) currentUserId = u.id;
      }
    } catch (e) { }

    if (!currentUserId) {
      setSavedIds([]);
      setSavedIdMap({});
      return;
    }

    try {
      const res = await fetch(`https://api.propertydronerealty.com/api/saved-properties?webUserId=${currentUserId}`);
      if (!res.ok) return;
      const all = await res.json();

      setSavedIds(
        all.filter((item: any) => `${item.webUserId}` === `${currentUserId}`)
          .map((item: any) => parseInt(item.propertyId))
      );
      const map: Record<number, number> = {};
      all.forEach((item: any) => {
        if (`${item.webUserId}` === `${currentUserId}`) {
          map[parseInt(item.propertyId)] = item.id;
        }
      });
      setSavedIdMap(map);
    } catch (e) {
      console.error("Error fetching saved properties", e);
    }
  };

  useEffect(() => {
    fetchSavedIds();
  }, [webUserId]); // Re-fetch when user ID resolves
  // ---------- End Saved State & Logic --------------

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
  const fadeInUp: Variants = {
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
      once: true,
      duration: 1000,
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

          image: (() => {
            const path = property.multipleImages?.[0]?.path;
            if (path) {
              return path.startsWith('http') ? path : `https://api.propertydronerealty.com${path}`;
            }
            return "/api/placeholder/400/320";
          })()
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

  const propertyNames = useMemo<string[]>(() => {
    if (!properties.length) return [];

    const nameSet = new Set<string>();
    properties.forEach(property => {
      if (property.propertyName) {
        nameSet.add(property.propertyName);
      }
    });

    return Array.from(nameSet).sort();
  }, [properties]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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

  // Removed duplicate handleSubmit function
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(propertyData.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };




  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.propertydronerealty.com/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || "dummy@example.com", // Added dummy email if not provided
          mobile: formData.phone,
          message: formData.message || "Interested in property consultation" // Added dummy message if not provided
        }),
      });

      if (!response.ok) throw new Error("Failed to submit contact form");

      console.log('Form submitted successfully');

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  const [filters, setFilters] = useState({
    type: '',
    location: '',
    locations: [] as string[],
    bedrooms: '',
    minPrice: '',
    maxPrice: '',
    search: '',
  });
  const [activeTab, setActiveTab] = useState('BUY');
  const [transactionType, setTransactionType] = useState('Buy');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownFilters, setDropdownFilters] = useState({
    location: '',
    area: '',
    budget: '',
    possession: '',
    propertyName: '',
    typology: ''
  });

  const filterOptions = {
    area: ['500+ sq.ft', '1000+ sq.ft', '1500+ sq.ft', '2000+ sq.ft'],
    budget: ['Under 50L', '50L - 1Cr', '1Cr - 2Cr', 'Above 2Cr'],
    possession: ['Ready to Move', 'In 1 Year', 'In 2 Years', 'In 3+ Years'],
    typology: ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK']
  };

  const handleDropdownSelect = (type: string, value: string) => {
    setDropdownFilters(prev => ({ ...prev, [type]: value }));
    setActiveDropdown(null);

    if (type === 'location') {
      setFilters(prev => ({ ...prev, locations: [value], search: '' }));
    } else if (type === 'propertyName') {
      setFilters(prev => ({ ...prev, search: value }));
    }
  };

  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // State for properties data from API
  // const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [remainingProperties, setRemainingProperties] = useState<Property[]>([]);

  const [luxuryProperties, setLuxuryProperties] = useState<Property[]>([]);

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

        // Filter luxury properties
        const luxuryFiltered = sortedData.filter(property => {
          const propertyType = property.propertyType?.toLowerCase() || '';
          return ['luxury', 'lux', 'luxary', 'luxury'].includes(propertyType);
        });

        console.log('Luxury properties found:', luxuryFiltered.length, luxuryFiltered.map(p => ({ name: p.propertyName, type: p.propertyType })));

        setLuxuryProperties(luxuryFiltered);

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
        property.city?.toLowerCase().includes(searchTerm)
      );
    }

    if (filters.locations && filters.locations.length > 0) {
      filtered = filtered.filter(property =>
        filters.locations.includes(property.location) ||
        (property.city && filters.locations.includes(property.city))
      );
    } else if (filters.location) {
      // Fallback for single location if needed, or migration
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

    // Dropdown filters
    if (dropdownFilters.area) {
      filtered = filtered.filter(property => {
        const area = parseInt(property.carpetArea?.replace(/[^0-9]/g, '') || '0');
        const minArea = parseInt(dropdownFilters.area.replace(/[^0-9]/g, '') || '0');
        return area >= minArea;
      });
    }

    if (dropdownFilters.possession) {
      filtered = filtered.filter(property => {
        const possession = property.possession || '';
        if (dropdownFilters.possession === 'Ready to Move') {
          return possession.toLowerCase().includes('ready') || possession.toLowerCase().includes('immediate');
        } else if (dropdownFilters.possession === 'In 1 Year') {
          return possession.includes('1') || possession.toLowerCase().includes('12 months');
        } else if (dropdownFilters.possession === 'In 2 Years') {
          return possession.includes('2') || possession.toLowerCase().includes('24 months');
        } else if (dropdownFilters.possession === 'In 3+ Years') {
          return possession.includes('3') || possession.includes('4') || possession.includes('5') ||
            possession.toLowerCase().includes('36 months') || possession.toLowerCase().includes('48 months');
        }
        return true;
      });
    }

    if (dropdownFilters.typology) {
      filtered = filtered.filter(property => {
        const bedroom = property.bedroom || '';
        const filterValue = dropdownFilters.typology.toLowerCase();

        // Handle different formats: "4 BHK", "4bhk", "4", "4 Bedroom", etc.
        if (filterValue.includes('4')) {
          return bedroom.toLowerCase().includes('4') || bedroom.toLowerCase().includes('four');
        } else if (filterValue.includes('3')) {
          return bedroom.toLowerCase().includes('3') || bedroom.toLowerCase().includes('three');
        } else if (filterValue.includes('2')) {
          return bedroom.toLowerCase().includes('2') || bedroom.toLowerCase().includes('two');
        } else if (filterValue.includes('1')) {
          if (filterValue.includes('rk')) {
            return bedroom.toLowerCase().includes('1 rk') || bedroom.toLowerCase().includes('1rk');
          }
          return bedroom.toLowerCase().includes('1') || bedroom.toLowerCase().includes('one');
        } else if (filterValue.includes('5')) {
          return bedroom.toLowerCase().includes('5') || bedroom.toLowerCase().includes('five');
        }

        return bedroom.toLowerCase() === filterValue;
      });
    }

    // Update filtered properties and separate featured/remaining
    setFilteredProperties(filtered);

    // Filter luxury properties from the filtered results
    const luxuryFiltered = filtered.filter(property => {
      const propertyType = property.propertyType?.toLowerCase() || '';
      return ['luxury', 'lux', 'luxary', 'luxury'].includes(propertyType);
    });

    console.log('Filtered luxury properties:', luxuryFiltered.length, luxuryFiltered.map(p => ({ name: p.propertyName, type: p.propertyType })));

    setLuxuryProperties(luxuryFiltered);

    // Update featured and remaining properties from filtered results
    setFeaturedProperties(filtered.slice(0, 3)); // Get first 3 filtered properties as featured
    setRemainingProperties(filtered.slice(3));   // Get the rest for the slider

  }, [filters, properties]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target as HTMLSelectElement | HTMLInputElement;
    setFilters({ ...filters, [name]: value });

    // Generate suggestions for search field
    if (name === 'search' && value.trim().length > 0) {
      const searchTerm = value.toLowerCase().trim();
      const suggestionsSet = new Set<string>();

      properties.forEach(property => {
        // Check property name
        if (property.propertyName?.toLowerCase().includes(searchTerm)) {
          suggestionsSet.add(property.propertyName);
        }
        // Check location
        if (property.location?.toLowerCase().includes(searchTerm)) {
          suggestionsSet.add(property.location);
        }
        // Check city
        if (property.city?.toLowerCase().includes(searchTerm)) {
          suggestionsSet.add(property.city);
        }
      });

      const suggestions = Array.from(suggestionsSet).slice(0, 8); // Limit to 8 suggestions
      setSearchSuggestions(suggestions);
      setShowSuggestions(suggestions.length > 0);
    } else if (name === 'search' && value.trim().length === 0) {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    // Check if the suggestion corresponds to a location or city
    const isLocationOrCity = properties.some(p => p.location === suggestion || p.city === suggestion);

    if (isLocationOrCity) {
      // Add to locations if not already present
      if (!filters.locations.includes(suggestion)) {
        setFilters(prev => ({
          ...prev,
          locations: [...prev.locations, suggestion],
          search: '' // Clear search text after selecting location
        }));
      } else {
        setFilters(prev => ({ ...prev, search: '' }));
      }
    } else {
      // It's likely a property name or general search term
      setFilters(prev => ({ ...prev, search: suggestion }));
    }
    setShowSuggestions(false);
  };

  const removeLocationTag = (locToRemove: string) => {
    setFilters(prev => ({
      ...prev,
      locations: prev.locations.filter(loc => loc !== locToRemove)
    }));
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const resetFilters = () => {
    setFilters({
      type: '',
      bedrooms: '',
      search: '',
      location: '',
      locations: [],
      minPrice: '',
      maxPrice: '',
    });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const highDemandScrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Animation removed
  }, []);
  // Functions for slider control
  // Property card component to avoid repetition





  // Add cookie consent state
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showLeadSource, setShowLeadSource] = useState(false);

  useEffect(() => {
    const hasSubmitted = sessionStorage.getItem('leadSourceSubmitted');
    if (!hasSubmitted) {
      const timer = setTimeout(() => {
        setShowLeadSource(true);
      }, 5000); // show after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  // Check if user has already made a choice
  useEffect(() => {
    const cookieChoice = localStorage.getItem('cookieChoice');
    if (cookieChoice) {
      setShowCookieBanner(false);
    }
  }, []);

  // Handle cookie acceptance
  const handleAcceptCookies = () => {
    localStorage.setItem('cookieChoice', 'accepted');
    setShowCookieBanner(false);
  };

  // Handle cookie rejection
  const handleRejectCookies = () => {
    localStorage.setItem('cookieChoice', 'rejected');
    setShowCookieBanner(false);
  };



  return (
    <div className="min-h-screen">
      <Head>
        <title>Top Real Estate Agency Pune</title>
        <meta name="description" content="Top real estate agency in Pune offering luxury homes, premium flats & exclusive properties. Buy your dream home with expert advice and trusted service." />
        <meta name="keywords" content="real estate agency Pune, luxury homes Pune, premium flats Pune, buy property Pune" />
        <link rel="canonical" href="https://propertydronerealty.com/" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Property Drone Realty",
              "url": "https://propertydronerealty.com/",
              "description": "Top real estate agency in Pune offering luxury homes, premium flats & exclusive properties.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "MH",
                "addressCountry": "IN"
              },
              "telephone": "+91 9561477575 ",
              "email": "info@propertydronerealty.com"
            })
          }}
        />
      </Head>
      {showCookieBanner && (
        <CookieBanner
          onAccept={handleAcceptCookies}
          onReject={handleRejectCookies}
        />
      )}

      <PropertyPopup />
      <div className="relative h-auto md:h-[600px] bg-gray-800 overflow-hidden">
        {/* Background Video with Overlay */}

        {/* Bhavik new */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/mainvideo.mp4" type="video/mp4" />

          </video>

          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center pt-20 max-w-6xl">
          <EnquireSideButton />


          <div className="flex  w-full  bg-transparent">
            <div className="w-full max-w-4xl  mx-auto px-4 md:px-0">
              <div className="bg-white items-center justify-center rounded-2xl pt-10 pb-4  px-3 md:px-8 shadow-lg  flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-bold text-[#191758] text-center w-full mb-4 px-2">
                  Find Your Dream Property
                </h1>
                <div className="text-md md:text-lg text-center text-[#191758] w-full mb-4 font-medium px-2">
                  Search properties for sale across top locations.
                </div>

                {/* Navigation Tabs and Search Bar Container with Glass Effect */}
                <div className="w-full shadow-2xl">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      // Filtering happens automatically via useEffect when filters.search changes
                    }}
                    className="w-full backdrop-blur-lg bg-[#1717B5]/90  rounded-t-2xl  overflow-hidden"
                  >
                    {/* Navigation Tabs with Glass Effect - Top Locations */}
                    <div className=" rounded-t-2xl px-2 py-2 flex items-center justify-start md:justify-center gap-3 md:gap-4 lg:gap-5 border-b border-white/10 overflow-x-auto scrollbar-hide">
                      {['Residential', 'Commercial', 'Plot'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setFilters({ ...filters, type: type });
                          }}
                          className={`uppercase text-white font-semibold text-xs sm:text-xs md:text-sm transition-all duration-200  relative whitespace-nowrap ${filters.type === type ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white' : 'hover:opacity-80'
                            }`}
                        >
                          {type}
                        </button>
                      ))}

                      {/* Divider */}
                      <span className="text-white/40 text-xl font-light px-2 hidden sm:block">|</span>

                      {/* Top Locations */}
                      <div className="flex items-center gap-3">
                        <span className="text-white/80 text-xs sm:text-sm font-medium whitespace-nowrap">Top Locations:</span>
                        {['Hinjawadi', 'Kharadi', 'Wakad', 'Baner', 'Viman Nagar'].map((loc) => (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => {
                              setFilters({ ...filters, locations: [loc], search: '' });
                            }}
                            className="text-white font-medium text-xs sm:text-sm hover:underline hover:text-white/90 transition-colors decoration-white/50 underline-offset-4 whitespace-nowrap"
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Search Bar with Glass Effect - directly connected, no gap */}
                    <div className="relative">
                      <div className="backdrop-blur-md bg-white rounded-t-2xl flex items-center overflow-hidden ">
                        {/* Search Icon */}
                        <div className="pl-4 pr-3 flex-shrink-0">
                          <Search className="w-5 h-5 text-gray-400" />
                        </div>

                        {/* Input Field */}
                        {/* Input Field Area */}
                        <div className="flex-1 flex items-center flex-wrap gap-2 py-2 px-2">
                          {filters.locations.map((loc, idx) => (
                            <span key={idx} className="bg-[#172747] text-white text-xs sm:text-sm px-2 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
                              {loc}
                              <button
                                type="button"
                                onClick={() => removeLocationTag(loc)}
                                className="hover:text-red-300 focus:outline-none"
                              >
                                <span className="sr-only">Remove {loc}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </span>
                          ))}
                          <input
                            ref={searchInputRef}
                            type="text"
                            name="search"
                            value={filters.search || ''}
                            onChange={handleFilterChange}
                            onFocus={() => {
                              if (searchSuggestions.length > 0) {
                                setShowSuggestions(true);
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Backspace' && filters.search === '' && filters.locations.length > 0) {
                                // Remove the last tag on backspace if input is empty
                                const newLocs = [...filters.locations];
                                newLocs.pop();
                                setFilters({ ...filters, locations: newLocs });
                              }
                            }}
                            placeholder={filters.locations.length > 0 ? "" : "Search for locality, landmark, project, or builder"}
                            className="flex-1 min-w-[120px] bg-transparent focus:outline-none placeholder-gray-400 text-sm md:text-base font-normal border-none text-gray-900"
                          />
                        </div>



                        {/* Buy Radio Button */}
                        <div className="hidden md:flex items-center gap-3 px-4 border-l border-gray-300 h-8 flex-shrink-0">
                          <label className="flex items-center gap-2  group">
                            <div className="relative flex items-center justify-center w-5 h-5">
                              <input
                                type="radio"
                                name="transactionType"
                                value="Buy"
                                checked={transactionType === 'Buy'}
                                onChange={(e) => setTransactionType(e.target.value)}
                                className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#6C5DD3] transition-all"
                              />
                              <div className="absolute w-2.5 h-2.5 bg-[#6C5DD3] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                            </div>
                            <span className={`font-medium ${transactionType === 'Buy' ? 'text-[#6C5DD3]' : 'text-gray-600 group-hover:text-gray-800'}`}>Buy</span>
                          </label>


                        </div>

                        {/* Search Button */}
                        <button
                          type="submit"
                          className="px-4 md:px-6 py-2 m-2 bg-[#1717B5] cursor-pointer rounded-full text-white font-bold uppercase text-xs sm:text-sm md:text-base hover:bg-[#1a2f5a] transition-colors duration-200 flex-shrink-0"
                        >
                          Search
                        </button>
                      </div>

                      {/* Suggestions Dropdown */}
                      {showSuggestions && searchSuggestions.length > 0 && (
                        <div
                          ref={suggestionsRef}
                          className="absolute top-full left-0 w-full mt-1 bg-white rounded-b-2xl shadow-2xl border border-gray-200 z-50 max-h-64 overflow-y-auto"
                        >
                          {searchSuggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-150 text-gray-900 text-sm md:text-base border-b border-gray-100 last:border-b-0"
                            >
                              <div className="flex items-center gap-2">
                                <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                <span>{suggestion}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Popular Locations (Moved from Top) */}

                  </form>
                </div>
                {/* Filters and Property Owner Action Row */}
                <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-4 px-1">

                  {/* Left: Additional Filters */}
                  {/* Left: Additional Filters - Interactive Dropdowns */}
                  <div className="flex flex-wrap cursor-pointer md:flex-nowrap justify-center md:justify-start items-center gap-2 md:gap-3 w-full md:w-auto overflow-visible pb-1 md:pb-0 scrollbar-hide z-50">
                    {/* Location */}
                    <div className="relative" onMouseEnter={() => setActiveDropdown('location')} onMouseLeave={() => setActiveDropdown(null)}>
                      <button
                        type="button"
                        className={`flex-shrink-0 flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-full border ${dropdownFilters.location ? 'border-[#1717B5] bg-[#1717B5]/10 text-[#1717B5]' : 'border-gray-200 bg-white/90'} text-[10px] sm:text-xs font-medium text-gray-600 hover:border-[#1717B5] hover:text-[#1717B5] transition-colors whitespace-nowrap`}
                      >
                        <span>{dropdownFilters.location || 'Location'}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'location' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'location' && (
                        <div className="absolute bottom-full cursor-pointer left-0 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]">
                          {locationCounts.map((locData) => (
                            <button key={locData.location} onClick={() => handleDropdownSelect('location', locData.location)} className="w-full text-left px-4  text-xs hover:bg-gray-50 text-gray-700 transition-colors">
                              {locData.location}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Carpet Area */}
                    <div className="relative" onMouseEnter={() => setActiveDropdown('area')} onMouseLeave={() => setActiveDropdown(null)}>
                      <button
                        type="button"
                        className={`flex-shrink-0 flex items-center cursor-pointer gap-1.5 px-3 py-1.5 rounded-full border ${dropdownFilters.area ? 'border-[#1717B5] bg-[#1717B5]/10 text-[#1717B5]' : 'border-gray-200 bg-white/90'} text-[10px] sm:text-xs font-medium text-gray-600 hover:border-[#1717B5] hover:text-[#1717B5] transition-colors whitespace-nowrap`}
                      >
                        <span>{dropdownFilters.area || 'Carpet Area'}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'area' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'area' && (
                        <div className="absolute bottom-full left-0 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]">
                          {filterOptions.area.map((opt) => (
                            <button key={opt} onClick={() => handleDropdownSelect('area', opt)} className="w-full text-left px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 transition-colors">
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Budget */}
                    <div className="relative" onMouseEnter={() => setActiveDropdown('budget')} onMouseLeave={() => setActiveDropdown(null)}>
                      <button
                        type="button"
                        className={`flex-shrink-0 flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-full border ${dropdownFilters.budget ? 'border-[#1717B5] bg-[#1717B5]/10 text-[#1717B5]' : 'border-gray-200 bg-white/90'} text-[10px] sm:text-xs font-medium text-gray-600 hover:border-[#1717B5] hover:text-[#1717B5] transition-colors whitespace-nowrap`}
                      >
                        <span>{dropdownFilters.budget || 'Budget'}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'budget' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'budget' && (
                        <div className="absolute bottom-full left-0 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]">
                          {filterOptions.budget.map((opt) => (
                            <button key={opt} onClick={() => handleDropdownSelect('budget', opt)} className="w-full text-left px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 transition-colors">
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Possession */}
                    <div className="relative" onMouseEnter={() => setActiveDropdown('possession')} onMouseLeave={() => setActiveDropdown(null)}>
                      <button
                        type="button"
                        className={`flex-shrink-0 flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-full border ${dropdownFilters.possession ? 'border-[#1717B5] bg-[#1717B5]/10 text-[#1717B5]' : 'border-gray-200 bg-white/90'} text-[10px] sm:text-xs font-medium text-gray-600 hover:border-[#1717B5] hover:text-[#1717B5] transition-colors whitespace-nowrap`}
                      >
                        <span>{dropdownFilters.possession || 'Possession'}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'possession' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'possession' && (
                        <div className="absolute bottom-full left-0 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]">
                          {filterOptions.possession.map((opt) => (
                            <button key={opt} onClick={() => handleDropdownSelect('possession', opt)} className="w-full text-left px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 transition-colors">
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>



                    {/* Typology */}
                    <div className="relative" onMouseEnter={() => setActiveDropdown('typology')} onMouseLeave={() => setActiveDropdown(null)}>
                      <button
                        type="button"
                        className={`flex-shrink-0 flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-full border ${dropdownFilters.typology ? 'border-[#1717B5] bg-[#1717B5]/10 text-[#1717B5]' : 'border-gray-200 bg-white/90'} text-[10px] sm:text-xs font-medium text-gray-600 hover:border-[#1717B5] hover:text-[#1717B5] transition-colors whitespace-nowrap`}
                      >
                        <span>{dropdownFilters.typology || 'Typology'}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'typology' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'typology' && (
                        <div className="absolute bottom-full left-0 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]">
                          {filterOptions.typology.map((opt) => (
                            <button key={opt} onClick={() => handleDropdownSelect('typology', opt)} className="w-full text-left px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 transition-colors">
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Property Owner Button */}
                  <Link href="/post-property" className="flex-shrink-0 inline-flex items-center justify-center md:justify-start gap-2 bg-[#1717B5]/95 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-[#191758] transition-all shadow-xl hover:shadow-2xl border border-white/10 group active:scale-95 whitespace-nowrap w-full md:w-auto">
                    <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium text-[10px] sm:text-xs tracking-wide text-white/90">Are you a Property Owner?</span>
                    {/* <span className="font-bold text-[10px] sm:text-xs text-white decoration-yellow-400/50 underline underline-offset-2 decoration-2 group-hover:text-yellow-300 transition-colors">Sell / Rent for FREE</span> */}
                    <ChevronRight className="w-3 h-3 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              </div>

              {/* Property Owner Badge/Button */}

            </div>
          </div>

        </main >
      </div >

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
          .why-choose-section,
          .why-choose-section * {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          .why-choose-section::-webkit-scrollbar,
          .why-choose-section *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
        `}
      </style>





      <HomePageLuxeProperty
        luxuryProperties={luxuryProperties}
        loading={loading}
        error={error}
        resetFilters={resetFilters}
        comparedIds={comparedIds}
        setComparedIds={setComparedIds}
        compareLoadingId={compareLoadingId}
        setCompareLoadingId={setCompareLoadingId}
        comparisonIdMap={comparisonIdMap}
        fetchComparedIds={fetchComparedIds}

        savedIds={savedIds}
        setSavedIds={setSavedIds}
        savedLoadingId={savedLoadingId}
        setSavedLoadingId={setSavedLoadingId}
        savedIdMap={savedIdMap}
        fetchSavedIds={fetchSavedIds}
      />
      <HomePageLogos />


      {/* ------------------------------------------------------------------------------------------------------ */}
      <div className=" mx-auto px-6 md:px-20 py-8 " style={{
        backgroundImage: `url(${main22.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>





        <HomePageFeaturedProperty
          filteredProperties={filteredProperties}
          loading={loading}
          error={error}
          resetFilters={resetFilters}
          featuredProperties={featuredProperties}
          comparedIds={comparedIds}
          setComparedIds={setComparedIds}
          compareLoadingId={compareLoadingId}
          setCompareLoadingId={setCompareLoadingId}
          comparisonIdMap={comparisonIdMap}
          fetchComparedIds={fetchComparedIds}

          savedIds={savedIds}
          setSavedIds={setSavedIds}
          savedLoadingId={savedLoadingId}
          setSavedLoadingId={setSavedLoadingId}
          savedIdMap={savedIdMap}
          fetchSavedIds={fetchSavedIds}
        />




        <HomePageLoanBanks />


      </div>





      <div className="bg-[#fafafa]">
        <WhyPropertyDrone />
        <HomePageWhyPropertyDrone />
        <HomePageYoutube />
        <HomePageNir />

        <HomePageTestimonials />

        <HomePageBlogs />
        <BottomPropertyDetails />
      </div>

      <FloatingVideo />

      <LeadSourceModal
        isOpen={showLeadSource}
        onClose={() => setShowLeadSource(false)}
      />

    </div >
  );
}
function useMemo<T>(factory: () => T, dependencies: any[]): T {
  return reactUseMemo(factory, dependencies);
}
