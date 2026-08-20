"use client";
import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import bg from '@/public/images/7578550-uhd_3840_2160_30fps 1.png';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Bookmark, MapPin, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import EnquireSideButton from '@/app/components/EnquireSideButton';

interface CommercialProperty {
    id: number;
    listingId: string;
    slug?: string;
    title: string;
    buildingName: string;
    location: string;
    city: string;
    propertyType: string;
    propertyStatus: string;
    pricePerSqFt: number;
    totalPrice: number;
    builtUpArea: number;
    carpetArea: number;
    possession: string;
    images: string[];
    featured?: boolean;
    createdAt: string;
    amenities: string; // comma separated
    // add other fields if needed for display
}

export default function CommercialProperties() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CommercialPropertiesContent />
        </Suspense>
    );
}

function CommercialPropertiesContent() {
    const searchParams = useSearchParams();
    const locationParam = searchParams.get('location');
    const typeParam = searchParams.get('type');
    const statusParam = searchParams.get('status');

    const [properties, setProperties] = useState<CommercialProperty[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Filter states
    const [activeLocation, setActiveLocation] = useState(locationParam || 'all');
    const [activeType, setActiveType] = useState(typeParam || 'all');
    const [activeStatus, setActiveStatus] = useState(statusParam || 'all');
    const [priceRange, setPriceRange] = useState('all');

    // Available options for filters
    const [availableLocations, setAvailableLocations] = useState<string[]>([]);

    const [inquiryForm, setInquiryForm] = useState({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        inquiry: ''
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleInquirySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('submitting');

        try {
            const message = `Property Type: ${inquiryForm.propertyType}\n\nInquiry: ${inquiryForm.inquiry}`;

            const response = await fetch('https://api.propertydronerealty.com/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: inquiryForm.name,
                    email: inquiryForm.email,
                    mobile: inquiryForm.phone,
                    message: message
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setInquiryForm({
                    name: '',
                    email: '',
                    phone: '',
                    propertyType: '',
                    inquiry: ''
                });
                alert("Detailed requirement submitted successfully!");
            } else {
                setSubmitStatus('error');
                alert("Failed to submit requirement. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting inquiry:", error);
            setSubmitStatus('error');
            alert("An error occurred. Please try again.");
        } finally {
            setSubmitStatus('idle');
        }
    };

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://api.propertydronerealty.com/api/commercial-properties");
                if (!response.ok) throw new Error("Failed to fetch properties");
                const data = await response.json();

                // Sort by newest
                const sorted = data.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                setProperties(sorted);

                // Extract locations
                const locs = [...new Set(sorted.map((p: any) => p.location))];
                setAvailableLocations(locs as string[]);

            } catch (err: any) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);

    const resetFilters = () => {
        setActiveLocation('all');
        setActiveType('all');
        setActiveStatus('all');
        setPriceRange('all');
    };

    const filteredProperties = properties.filter(p => {
        const matchLocation = activeLocation === 'all' || p.location === activeLocation;
        const matchType = activeType === 'all' || p.propertyType === activeType;
        const matchStatus = activeStatus === 'all' || p.propertyStatus === activeStatus;
        // Basic price filter logic could be added here
        return matchLocation && matchType && matchStatus;
    });

    // Framer motion variants (reused)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    const cardVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } },
        hover: { y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", transition: { type: "spring", stiffness: 400, damping: 10 } }
    };

    // Helper for images
    const getDisplayImage = (p: CommercialProperty) => {
        if (p.images && p.images.length > 0) {
            const path = p.images[0];
            if (path.startsWith('http')) return path;
            // adjust path if needed, or assume full url / relative path correct
            return path;
        }
        return bg;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <EnquireSideButton />

            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center bg-[#172747] text-white">
                <div className="absolute inset-0 overflow-hidden">
                    {/* Placeholder video or image */}
                    <div className="absolute inset-0 bg-black/20 z-10"></div>
                    <Image src={bg} alt="Commercial Properties" fill className="object-cover opacity-50" />
                </div>
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-light mb-4 font-['Rubik']">Commercial Properties</h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Premium office spaces, retail shops, and commercial hubs for your business growth.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-1/4">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-[#172747]">Filters</h2>
                                <button onClick={resetFilters} className="text-sm text-blue-600 hover:underline">Clear All</button>
                            </div>

                            {/* Location Filter */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-3">Location</h3>
                                <div className="space-y-2">
                                    <button
                                        onClick={() => setActiveLocation('all')}
                                        className={`block w-full text-left px-3 py-2 rounded ${activeLocation === 'all' ? 'bg-blue-50 text-blue-700 font-medium' : 'hover:bg-gray-50'}`}
                                    >
                                        All Locations
                                    </button>
                                    {availableLocations.map(loc => (
                                        <button
                                            key={loc}
                                            onClick={() => setActiveLocation(loc)}
                                            className={`block w-full text-left px-3 py-2 rounded ${activeLocation === loc ? 'bg-blue-50 text-blue-700 font-medium' : 'hover:bg-gray-50'}`}
                                        >
                                            {loc}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Type Filter */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-3">Property Type</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['all', 'Office', 'Shop', 'Showroom', 'Warehouse', 'Commercial'].map(type => (
                                        <button
                                            key={type}
                                            onClick={() => setActiveType(type)}
                                            className={`px-3 py-1 rounded-full text-sm border ${activeType === type ? 'bg-[#172747] text-white border-[#172747]' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                                        >
                                            {type === 'all' ? 'All' : type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Status Filter */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-3">Status</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['all', 'Available', 'Leased', 'Sold'].map(status => (
                                        <button
                                            key={status}
                                            onClick={() => setActiveStatus(status)}
                                            className={`px-3 py-1 rounded-full text-sm border ${activeStatus === status ? 'bg-green-600 text-white border-green-600' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                                        >
                                            {status === 'all' ? 'All' : status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Listings */}
                    <div className="w-full lg:w-3/4">
                        {loading ? (
                            <div className="flex justify-center py-20">Loading...</div>
                        ) : (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {filteredProperties.length > 0 ? (
                                    filteredProperties.map(property => (
                                        <motion.div
                                            key={property.id}
                                            variants={cardVariants}
                                            whileHover="hover"
                                            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full"
                                        >
                                            <div className="relative h-64 overflow-hidden">
                                                {/* Image */}
                                                {/* Use next/image properly or img for external urls if not configured */}
                                                <img
                                                    src={property.images && property.images.length > 0 ? property.images[0] : bg.src}
                                                    alt={property.title || property.buildingName}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                    onError={(e) => { (e.target as HTMLImageElement).src = bg.src; }}
                                                />

                                                <div className="absolute top-4 left-4">
                                                    <span className={`px-3 py-1 rounded-md text-sm font-semibold shadow-sm ${property.propertyStatus === 'Available' ? 'bg-green-500 text-white' : 'bg-gray-800 text-white'
                                                        }`}>
                                                        {property.propertyStatus}
                                                    </span>
                                                </div>
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                    <h3 className="text-white font-bold text-xl truncate">{property.title || property.buildingName}</h3>
                                                    <p className="text-gray-200 text-sm flex items-center"><MapPin size={14} className="mr-1" /> {property.location}, {property.city}</p>
                                                </div>
                                            </div>

                                            <div className="p-5 flex-grow flex flex-col">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <span className="inline-block px-2 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded mb-2">
                                                            {property.propertyType}
                                                        </span>
                                                        <div className="text-2xl font-bold text-[#172747]">
                                                            {property.totalPrice ? `₹${(property.totalPrice / 10000000).toFixed(2)} Cr` : 'Price on Request'}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            ₹{property.pricePerSqFt} / sq.ft
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-6">
                                                    <div className="flex items-center">
                                                        <span className="font-medium mr-2">Built-up:</span> {property.builtUpArea} sq.ft
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="font-medium mr-2">Carpet:</span> {property.carpetArea} sq.ft
                                                    </div>
                                                    <div className="flex items-center col-span-2">
                                                        <span className="font-medium mr-2">Possession:</span> {property.possession}
                                                    </div>
                                                </div>

                                                <div className="mt-auto flex gap-3">
                                                    <Link href={`/commercial-properties/${property.slug || property.id}`} className="flex-1 text-center border border-[#172747] text-[#172747] py-2 rounded hover:bg-[#172747] hover:text-white transition-colors font-medium">
                                                        View Details
                                                    </Link>
                                                    <a href={`https://wa.me/919561477575?text=Hi, I'm interested in ${property.title || property.buildingName}`} target="_blank" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 flex items-center justify-center w-10">
                                                        <FaWhatsapp size={20} />
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="col-span-full flex flex-col items-center justify-center py-12 px-4 w-full">
                                        <div className="bg-white/95 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-xl max-w-3xl w-full border border-gray-100">
                                            <div className="text-center mb-8">
                                                <div className="text-5xl mb-4">🤔</div>
                                                <h3 className="text-2xl font-bold text-[#172747] mb-3">
                                                    Oooops! Seems like your requirement is rare/specific
                                                </h3>
                                                <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
                                                    Don't worry! We love unique requirements. Let's connect you with our expert team who will work closely to find exactly what you're looking for.
                                                </p>
                                            </div>

                                            <form className="space-y-5" onSubmit={handleInquirySubmit}>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                    <div className="space-y-1.5 text-left">
                                                        <label className="text-xs font-bold text-gray-700 ml-1">Name <span className="text-red-500">*</span></label>
                                                        <input
                                                            type="text"
                                                            placeholder="Your full name"
                                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#172747]/20 focus:border-[#172747] outline-none transition-all placeholder:text-gray-400"
                                                            required
                                                            value={inquiryForm.name}
                                                            onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5 text-left">
                                                        <label className="text-xs font-bold text-gray-700 ml-1">Email Address <span className="text-red-500">*</span></label>
                                                        <input
                                                            type="email"
                                                            placeholder="your.email@example.com"
                                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#172747]/20 focus:border-[#172747] outline-none transition-all placeholder:text-gray-400"
                                                            required
                                                            value={inquiryForm.email}
                                                            onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                    <div className="space-y-1.5 text-left">
                                                        <label className="text-xs font-bold text-gray-700 ml-1">Phone Number <span className="text-red-500">*</span></label>
                                                        <input
                                                            type="tel"
                                                            placeholder="Your phone number"
                                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#172747]/20 focus:border-[#172747] outline-none transition-all placeholder:text-gray-400"
                                                            required
                                                            value={inquiryForm.phone}
                                                            onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5 text-left">
                                                        <label className="text-xs font-bold text-gray-700 ml-1">Property Type</label>
                                                        <div className="relative">
                                                            <select
                                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500 focus:ring-2 focus:ring-[#172747]/20 focus:border-[#172747] outline-none transition-all appearance-none cursor-pointer"
                                                                value={inquiryForm.propertyType}
                                                                onChange={(e) => setInquiryForm({ ...inquiryForm, propertyType: e.target.value })}
                                                            >
                                                                <option value="">Select Property Type</option>
                                                                <option value="residential">Residential</option>
                                                                <option value="commercial">Commercial</option>
                                                                <option value="land">Land/Plot</option>
                                                            </select>
                                                            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-1.5 text-left">
                                                    <label className="text-xs font-bold text-gray-700 ml-1">Inquiry</label>
                                                    <textarea
                                                        rows={2}
                                                        placeholder="Tell us about your inquiry or specific requirements..."
                                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#172747]/20 focus:border-[#172747] outline-none transition-all resize-none placeholder:text-gray-400"
                                                        value={inquiryForm.inquiry}
                                                        onChange={(e) => setInquiryForm({ ...inquiryForm, inquiry: e.target.value })}
                                                    ></textarea>
                                                </div>

                                                <div className="flex items-center gap-4 pt-4">
                                                    <button
                                                        type="submit"
                                                        disabled={submitStatus === 'submitting'}
                                                        className={`bg-[#246BFD] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 text-sm cursor-pointer transform active:scale-95 ${submitStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                                    >
                                                        {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Requirement'}
                                                    </button>
                                                    <button type="button" onClick={resetFilters} className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-all duration-300 text-sm cursor-pointer transform active:scale-95">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
