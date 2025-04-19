"use client"
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/PropertyDrone-Logo.png"; 
import d1 from "@/app/images/d1.png";
import d2 from "@/app/images/d2.png";
import d3 from "@/app/images/d3.png";
import d4 from "@/app/images/d4.png";
import d5 from "@/app/images/d5.png";
import d6 from "@/app/images/d6.png";
import d7 from "@/app/images/d7.png";
import d8 from "@/app/images/d8.png";
import d9 from "@/app/images/d9.png";
import d10 from "@/app/images/d10.png";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import bg1 from '../public/images/7578550-uhd_3840_2160_30fps 1.png';
import main2 from '../public/images/main2.png';
import main3 from '../public/images/Frame 145.png';
// Import a placeholder image
import placeholderImg from '../public/images/placeholder.png'; // Make sure this exists


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
    image: '/images/building-blue.jpg',
    slug: 'top-5-areas-to-invest-in-pune'
  },
  {
    id: 2,
    title: 'What to Know Before Buying a New Flat',
    date: '16th April, 2025',
    image: '/images/building-blue.jpg',
    slug: 'what-to-know-before-buying-a-new-flat'
  },
  {
    id: 3,
    title: 'What to Know Before Buying a New Flat',
    date: '16th April, 2025',
    image: '/images/building-blue.jpg',
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
  const localities = [
    { name: "Baner", properties: 72, image: "/api/placeholder/400/320" },
    { name: "Aundh", properties: 72, image: "/api/placeholder/400/320" },
    { name: "Baner", properties: 72, image: "/api/placeholder/400/320" },
    { name: "Aundh", properties: 72, image: "/api/placeholder/400/320" },
    { name: "Baner", properties: 72, image: "/api/placeholder/400/320" },
    { name: "Aundh", properties: 72, image: "/api/placeholder/400/320" },
    { name: "Baner", properties: 72, image: "/api/placeholder/400/320" },
    { name: "Aundh", properties: 72, image: "/api/placeholder/400/320" },
    { name: "Baner", properties: 72, image: "/api/placeholder/400/320" },
  ];
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

  const images = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10];
  
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
  });

  // State for properties data from API
  const [properties, setProperties] = useState<Property[]>([]);
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
        setProperties(data);
        setFilteredProperties(data);
        
        // Separate featured and remaining properties
        const featured = data.slice(0, 3); // Get first 3 properties as featured
        const remaining = data.slice(3);   // Get the rest for the slider
        
        setFeaturedProperties(featured);
        setRemainingProperties(remaining);
        
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
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
  }

  // Apply filters to properties
  useEffect(() => {
    if (!properties.length) return;

    let filtered = [...properties];

    if (filters.type) {
      filtered = filtered.filter(property => property.type === filters.type);
    }

    if (filters.location) {
      filtered = filtered.filter(property => property.location === filters.location);
    }

    if (filters.bedrooms) {
      filtered = filtered.filter(property => 
        property.topology >= parseInt(filters.bedrooms, 10)
      );
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
      location: '',
      bedrooms: '',
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
 
  const PropertyCard1 = ({ property }: { property: Property }) => {
    return (
      <div className="bg-white rounded-sm overflow-hidden border border-gray-100">
        <div className="relative h-48">
          <Image 
            src={main2} 
            alt={property.propertyName}
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <div className="flex items-center">
              {/* <span>By {property.developerName}</span> */}
              <span>By {'developerName'}</span>
            </div>
            <div className="flex items-center ml-auto">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>{property.location}</span>
            </div>
          </div>
          <h3 className="font-medium text-gray-900">{property.propertyName}</h3>
        </div>
        
        <div className="px-4 py-3 flex items-center text-sm text-gray-600 border-b border-gray-100">
          <div className="flex-1">{property.topology || 'bed'}</div>
          <div className="flex-1">{ 'bath'}</div>
          <div className="flex-1">{property.carpetArea}</div>
        </div>
        
        <div className="p-4 flex items-center">
          <div className="flex-1">
            <span className="text-blue-500">₹ {property.tentativeBudget}</span>
          </div>
          <div className="flex space-x-2 items-center">
            <button className="p-2 border border-gray-300 rounded">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
            </button>
            <button className="bg-blue-900 text-white px-4 py-1 text-sm rounded-sm">
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
    <Image 
      src={bg1}
      alt="Luxury Property" 
      layout="fill" 
      objectFit="cover" 
      priority
    />
    <div className="absolute inset-0 bg-black opacity-40"></div>
  </div>

  {/* Navigation Bar */}
  <header className="relative z-10 items-center justify-center mx-auto max-w-6xl">
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
  </header>

  {/* Main Hero Content */}
  <main className="relative z-10 container mx-auto px-4 pt-24">
    <div className="flex flex-col items-start max-w-3xl">
    <h1
  style={{
    fontFamily: "'Ivy Mode'",
    fontWeight: 300,
    fontSize: '86px',
    lineHeight: '80px',
    letterSpacing: '0'
  }}
  className="text-white mb-6"
>

  Find the best <br></br> properties in Pune
</h1>


      <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
        <p className="text-white text-xl mb-4 md:mb-0 md:mr-8">
          with a leading real estate agency
        </p>
        <a 
          href="#" 
          className="flex items-center bg-white text-blue-700 px-4 py-2 rounded hover:bg-blue-50"
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
className="flex-shrink-0 w-64 mx-2 first:ml-0 transition-all duration-300 ease-in-out"
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
<div className="bg-white rounded-md shadow-md p-4 h-38 flex flex-col items-center justify-center border border-gray-300 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
  <Image
    src={img}
    alt={`Card ${index + 1}`}
    className="w-90 h-90 object-cover rounded-full mb-2 transition-all duration-300"
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
   <div className="flex flex-wrap bg-[#172747] gap-4 p-10 mb-8 transition-all duration-300 ease-in-out justify-center">
          <div className="relative">
            <select 
              name="type" 
              value={filters.type} 
              onChange={handleFilterChange}
              className="appearance-none bg-white text-[#172747] border rounded px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <option value="">Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>

          {/* Other filters - same as before */}
          <div className="relative">
            <select 
              name="location" 
              value={filters.location} 
              onChange={handleFilterChange}
              className="appearance-none bg-white text-[#172747] border rounded px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <option value="">Location</option>
              <option value="downtown">Baner</option>
              <option value="suburbs">Wakad</option>
              <option value="waterfront">Waterfront</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#172747]">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>

          <div className="relative">
            <select 
              name="bedrooms" 
              value={filters.bedrooms} 
              onChange={handleFilterChange}
              className="appearance-none bg-white text-[#172747] border rounded px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <option value="">Bedrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>

          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
            className="border rounded px-4 py-2 bg-white text-[#172747] placeholder-[#172747] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />

          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            className="border rounded px-4 py-2 bg-white text-[#172747] placeholder-[#172747] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />

          <button 
            className="bg-[#172747] text-white border border-white hover:bg-blue-600  px-4 py-2 rounded flex items-center transition-all duration-300"
          >
            All filters
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </button>
          
          <button 
            onClick={resetFilters} 
            className="bg-white text-[#172747] px-4 py-2 rounded flex items-center transition-all duration-300"
          >
            Reset
          </button>
        </div>

        {/* --------- */}


      <div className="max-w-7xl mx-auto px-20 py-8">
       

        {/* Loading and Error States */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
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
                {featuredProperties.map((property) => (
                  <PropertyCard1 key={property.id} property={property} />
                ))}
              </div>
            </div>
            

            {/* Remaining Properties Slider */}
           
          </div>
        )}
      </div>




      {/* -------------------------------------------------------------- */}

      <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-600 mb-2">TOP LOCALITIES</p>
        <h2 className="text-3xl md:text-4xl font-serif font-light">
          Find homes in the most sought-after
          <br />
          neighborhoods of Pune.
        </h2>
      </div>

      {/* Localities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-8 justify-center">
        {localities.map((locality, index) => (
          <div key={index} className="relative overflow-hidden group h-64">
            <img
              src={locality.image}
              alt={`${locality.name} properties`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-xl font-medium">{locality.name}</h3>
              <p className="text-sm">{locality.properties} Properties</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <Link href="/properties">
        <button className="bg-[#172747] text-white px-6 py-2 flex items-center gap-2 rounded hover:bg-[#172747] transition">
          View All Locations
          <ArrowRight size={16} />
        </button>
        </Link>
      </div>
    </div>

    {/* ------------------------ */}

    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h6 className="text-xs uppercase tracking-wider text-center mb-2">UPCOMING & LATEST LAUNCHES</h6>
        <h2 className="text-3xl md:text-4xl text-center font-light leading-tight max-w-2xl mx-auto">
          Be the first to discover the hottest launches in the Middle East
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {propertyData.slice(currentSlide * 2, currentSlide * 2 + 2).map((property) => (
          <div key={property.id} className="flex flex-col">
            <div className="relative h-64 w-full mb-4">
              <Image
                src={property.imageUrl}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-light">{property.title}</h3>
            <p className="text-sm text-gray-600">{property.location}</p>
            <div className="flex justify-between items-center mt-2">
              <div></div>
              <p className="text-sm">From {property.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-px bg-gray-300"></div>
            <div className="relative flex items-center">
              <span className="bg-white pr-2 text-lg font-light">
                {String(currentSlide + 1).padStart(2, '0')}
              </span>
              <span className="bg-white px-2 text-lg font-light text-gray-400">
                / {String(totalSlides).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={prevSlide} 
            className="p-2 border border-gray-300 hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={nextSlide} 
            className="p-2 border border-gray-300 hover:bg-gray-100"
            aria-label="Next slide"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
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
          <h2 className="text-4xl font-serif">Your trust is our greatest award</h2>
        </div>
        <div>
          <button  className="w-full md:w-auto bg-[#172747] hover:bg-white hover:border hover:border-[#172747] hover:text-[#172747] px-6 py-3 bg-navy-800 text-white font-medium rounded flex items-center justify-center">
            Write a review <ChevronRight className="ml-2" size={16} />
          </button>
        </div>
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
            <div className="uppercase text-sm tracking-wider mb-3">INSIGHTS & UPDATES</div>
            <h2 className="text-4xl font-serif leading-tight">
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
              <Link href={`/blog/${post.slug}`} className="block group">
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
                <div className="inline-flex items-center text-blue-400">
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
            <div className="mb-2 text-gray-600">FAQ</div>
            <h2 className="text-4xl font-serif mb-2">Have questions?</h2>
            <h2 className="text-4xl font-serif">We've got answers.</h2>
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