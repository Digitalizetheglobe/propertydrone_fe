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

interface Location {
    area?: string;
    city?: string;
    state?: string;
    country?: string;
}

interface PriceDetails {
    pricePerSqFt?: number;
    totalPrice?: number;
}

interface PlotDetails {
    areaSqYard?: number;
    areaSqFt?: number;
    facing?: string;
}

interface Plot {
    id: number;
    listingId: string;
    title: string;
    slug?: string;
    project: string;
    propertyType: string;
    propertyStatus: string;
    location: Location;
    plotDetails: PlotDetails;
    priceDetails: PriceDetails;
    possession: string;
    amenities: string[] | string;
    images: string[] | string;
    demo1: string;
    demo2: string;
    demo3: string;
    demo4: string;
    postedBy: string;
    contact: any;
    createdAt: string;
    updatedAt: string;
}

export default function Plots() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PlotsContent />
        </Suspense>
    );
}

function PlotsContent() {
    // --- States ---
    const searchParams = useSearchParams();
    const [plots, setPlots] = useState<Plot[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [activeImageIndexes, setActiveImageIndexes] = useState<Record<number, number>>({});

    // Filter States
    const [activeLocation, setActiveLocation] = useState('all');
    const [projectFilter, setProjectFilter] = useState('');
    const [activeStatus, setActiveStatus] = useState('all');
    const [availableLocations, setAvailableLocations] = useState<string[]>([]);

    // API base URL
    const baseUrl = "http://localhost:9000";

    // Framer Motion variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        },
        hover: {
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { type: "spring", stiffness: 400, damping: 10 }
        }
    };

    const imageVariants: Variants = {
        hover: { scale: 1.05, transition: { duration: 0.3 } }
    };

    // Helper Functions
    const getImageSource = (plot: Plot, index: number = 0) => {
        let images: string[] = [];
        if (typeof plot.images === 'string') {
            images = plot.images.split(',').map(s => s.trim()).filter(Boolean);
        } else if (Array.isArray(plot.images)) {
            images = plot.images;
        }

        if (images.length > 0 && images[index]) {
            const img = images[index];
            if (img.startsWith('http')) return img;
            return `${baseUrl}${img.startsWith('/') ? '' : '/'}${img}`;
        }
        return bg.src;
    };

    const getImagesCount = (plot: Plot) => {
        if (Array.isArray(plot.images)) return plot.images.length;
        if (typeof plot.images === 'string') return plot.images.split(',').filter(Boolean).length;
        return 0;
    };

    const nextImage = (plotId: number, count: number, e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (count <= 1) return;
        setActiveImageIndexes(prev => ({
            ...prev,
            [plotId]: ((prev[plotId] || 0) + 1) % count
        }));
    };

    const prevImage = (plotId: number, count: number, e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (count <= 1) return;
        setActiveImageIndexes(prev => ({
            ...prev,
            [plotId]: (prev[plotId] || 0) === 0 ? count - 1 : (prev[plotId] || 0) - 1
        }));
    };

    // Fetch Plots
    useEffect(() => {
        const fetchPlots = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${baseUrl}/api/plots`);
                if (!response.ok) throw new Error("Failed to fetch plots");

                const data = await response.json();
                const formattedPlots = data.map((item: any) => ({
                    ...item,
                    id: item.id,
                    // Ensure nested objects exist to avoid crashes
                    location: item.location || {},
                    plotDetails: item.plotDetails || {},
                    priceDetails: item.priceDetails || {},
                    contact: item.contact || {},
                }));

                setPlots(formattedPlots);

                // Extract locations
                const locs = new Set<string>();
                formattedPlots.forEach((p: Plot) => {
                    if (p.location?.area) locs.add(p.location.area);
                    if (p.location?.city) locs.add(p.location.city);
                });
                setAvailableLocations(Array.from(locs));

            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPlots();
    }, [baseUrl]);

    // Filtering
    const filteredPlots = plots.filter(plot => {
        const matchesLocation = activeLocation === 'all' ||
            plot.location?.area === activeLocation ||
            plot.location?.city === activeLocation;

        const matchesProject = !projectFilter ||
            plot.project?.toLowerCase().includes(projectFilter.toLowerCase()) ||
            plot.title?.toLowerCase().includes(projectFilter.toLowerCase());

        const matchesStatus = activeStatus === 'all' ||
            plot.propertyType?.toLowerCase() === activeStatus.toLowerCase() ||
            plot.propertyStatus?.toLowerCase() === activeStatus.toLowerCase();

        return matchesLocation && matchesProject && matchesStatus;
    });

    const resetFilters = () => {
        setActiveLocation('all');
        setProjectFilter('');
        setActiveStatus('all');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <EnquireSideButton />

            {/* Hero Section */}
            <section className="relative min-h-[530px] sm:min-h-[530px] min-[320px]:min-h-[660px]">
                <div className="absolute inset-0 z-0">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                        <source src="/images/mainvideo.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 flex items-center justify-center pt-26 px-4">
                    <div className="text-center max-w-3xl mx-auto text-white">
                        <p className="uppercase tracking-wider mb-4" style={{ fontSize: '18px', fontFamily: 'Lato', letterSpacing: '0.5px' }}>
                            PREMIUM PLOTS
                        </p>
                        <h2 style={{ fontFamily: "Ivy Mode", fontWeight: 100, lineHeight: '150%', letterSpacing: '0' }} className="mb-4 text-white text-[42px] sm:text-[56px]">
                            Explore Our Plots
                        </h2>
                        <p className="tracking-wider text-gray-300 mb-4" style={{ fontSize: '20px', fontFamily: 'Lato', letterSpacing: '0.5px' }}>
                            Find your perfect plot for residential, commercial, or investment purposes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-8">
                <div className='flex flex-col lg:flex-row'>

                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <div className="bg-white shadow-md rounded-[4px] p-4 lg:p-6 sticky top-6 overflow-auto border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold cursor-pointer text-[#172747]">Filters</h2>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={resetFilters}
                                    className="text-[#172747] text-sm font-medium hover:underline"
                                >
                                    Clear All
                                </motion.button>
                            </div>

                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    placeholder="Search Project / Title"
                                    value={projectFilter}
                                    onChange={(e) => setProjectFilter(e.target.value)}
                                    className="w-full border border-gray-300 rounded-[4px] py-3 px-4 pl-12 focus:ring-2 focus:ring-[#172747] focus:border-transparent transition-all duration-200"
                                />
                                <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold text-[#172747] uppercase text-xs tracking-wider mb-4">Property Type</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['all', 'Residential', 'Commercial'].map((type) => (
                                        <motion.button
                                            key={type}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setActiveStatus(type)}
                                            className={`px-3 py-1.5 text-sm rounded-[4px] border ${activeStatus === type
                                                ? 'bg-[#172747] text-white border-[#172747]'
                                                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            {type === 'all' ? 'All Types' : type}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-semibold text-[#172747] uppercase text-xs tracking-wider mb-4">Location</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`py-2.5 px-4 text-center border ${activeLocation === 'all' ? 'border-[#172747] bg-blue-50 text-[#172747]' : 'border-gray-200 text-gray-700'} rounded-[4px] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#172747] focus:border-[#172747] transition-all duration-200`}
                                        onClick={() => setActiveLocation('all')}
                                    >
                                        All Locations
                                    </motion.button>

                                    {availableLocations.map((location, index) => (
                                        <motion.button
                                            key={index}
                                            whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`py-2.5 px-4 text-center border ${activeLocation === location ? 'border-[#172747] bg-blue-50 text-[#172747]' : 'border-gray-200 text-[#172747]'} rounded-[4px] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#172747] focus:border-[#172747] transition-all duration-200`}
                                            onClick={() => setActiveLocation(location)}
                                        >
                                            {location}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Listing Grid */}
                    <div className="w-full lg:w-3/4 lg:pl-6 ">
                        <div className="flex flex-col sm:flex-row pb-4 pt-4 gap-4">
                            <h2 style={{ fontFamily: "Ivy Mode", fontWeight: 100, lineHeight: '150%', letterSpacing: '0' }} className=" text-[#172747] text-[32px] sm:text-[42px]">
                                Current Listings
                            </h2>
                        </div>

                        {(activeLocation !== 'all' || projectFilter) && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-blue-50 p-3 rounded-[4px] mb-6 flex flex-wrap items-center gap-2">
                                <span className="text-sm font-medium text-[#172747] mr-2">Active Filters:</span>
                                {activeLocation !== 'all' && (
                                    <span className="bg-blue-100 text-[#172747] px-3 py-1 rounded-full text-xs font-medium flex items-center">
                                        Location: {activeLocation}
                                        <button onClick={() => setActiveLocation('all')} className="ml-2 cursor-pointer text-[#172747] hover:text-blue-700">Ã—</button>
                                    </span>
                                )}
                                {projectFilter && (
                                    <span className="bg-blue-100 text-[#172747] px-3 py-1 rounded-full text-xs font-medium flex items-center">
                                        Search: {projectFilter}
                                        <button onClick={() => setProjectFilter('')} className="ml-2 cursor-pointer text-[#172747] hover:text-blue-700">Ã—</button>
                                    </span>
                                )}
                                <button onClick={resetFilters} className="ml-auto text-sm text-[#172747] hover:underline">Clear All</button>
                            </motion.div>
                        )}

                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <motion.div
                                    animate={{ rotate: 360, transition: { duration: 1, repeat: Infinity, ease: "linear" } }}
                                    className="rounded-full h-12 w-12 border-t-4 border-b-4 border-[#172747]"
                                ></motion.div>
                            </div>
                        ) : error ? (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 text-red-600 p-5 rounded-[4px] border border-red-100 shadow-sm">
                                {error}
                            </motion.div>
                        ) : (
                            <motion.div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8" variants={containerVariants} initial="hidden" animate="visible">
                                {filteredPlots.length > 0 ? (
                                    filteredPlots.map((plot) => (
                                        // Link to plot details page
                                        <Link href={`/plots/${plot.slug || plot.id}`} key={plot.id} className="w-full sm:w-auto">
                                            <motion.div
                                                key={`motion-${plot.id}`}
                                                variants={cardVariants}
                                                whileHover="hover"
                                                onHoverStart={() => setHoveredCard(plot.id)}
                                                onHoverEnd={() => setHoveredCard(null)}
                                                className="bg-white rounded-[4px] overflow-hidden shadow-md border border-gray-100 transform transition-all duration-300 group"
                                            >
                                                <div className="relative overflow-hidden">
                                                    <motion.div variants={imageVariants} className="h-56 bg-gray-200 relative">
                                                        <img
                                                            src={getImageSource(plot, activeImageIndexes[plot.id] || 0)}
                                                            alt={plot.title}
                                                            className={`absolute inset-0 w-full h-full object-cover ${hoveredCard === plot.id ? 'scale-105 transition-transform duration-700' : ''}`}
                                                            onError={(e) => { const target = e.target as HTMLImageElement; if (target.src !== bg.src) target.src = bg.src; }}
                                                        />

                                                        {/* Image Navigation */}
                                                        {getImagesCount(plot) > 1 && (
                                                            <>
                                                                <button onClick={(e) => prevImage(plot.id, getImagesCount(plot), e)} className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-1 rounded-full bg-opacity-70 hover:bg-opacity-100 transition-all">
                                                                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                                                                </button>
                                                                <button onClick={(e) => nextImage(plot.id, getImagesCount(plot), e)} className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-1 rounded-full bg-opacity-70 hover:bg-opacity-100 transition-all">
                                                                    <ChevronRight className="h-6 w-6 text-gray-700" />
                                                                </button>
                                                                <div className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                                    {(activeImageIndexes[plot.id] || 0) + 1}/{getImagesCount(plot)}
                                                                </div>
                                                            </>
                                                        )}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                                                    </motion.div>

                                                    {/* Badge */}
                                                    <div className="absolute top-4 left-4">
                                                        <span className="px-3 py-1 bg-[#172747] text-xs font-medium rounded-full shadow-sm text-white capitalize">
                                                            {plot.propertyStatus || plot.propertyType || 'Available'}
                                                        </span>
                                                    </div>

                                                    {/* Location */}
                                                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white">
                                                        <div className="flex items-center text-xs text-gray-100 mt-1">
                                                            <MapPin size={14} className="mr-1" />
                                                            {plot.location?.area}, {plot.location?.city}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-4 lg:p-5">
                                                    <h3 className="text-lg lg:text-xl mb-2 font-bold leading-tight">{plot.title}</h3>
                                                    <p className="text-sm text-gray-600 mb-2">{plot.project}</p>

                                                    <div className="flex justify-between items-center text-sm mb-4">
                                                        <span className="bg-gray-100 px-2 py-1 rounded text-gray-700 flex items-center">
                                                            <Share2 size={12} className="mr-1" /> {plot.plotDetails?.areaSqFt} Sq.Ft
                                                        </span>
                                                        <span className="font-bold text-[#172747]">
                                                            Price: â‚¹{plot.priceDetails?.totalPrice}
                                                        </span>
                                                    </div>

                                                    <motion.div
                                                        initial={{ scale: 0.95, opacity: 0 }}
                                                        animate={{ scale: hoveredCard === plot.id ? 1.05 : 1, opacity: 1 }}
                                                        className="flex justify-center"
                                                    >
                                                        <button className="bg-[#172747] hover:bg-white hover:border hover:border-[#172747] hover:text-[#172747] text-white text-sm font-medium px-4 py-2 rounded-[4px] shadow-sm transition-all duration-200 w-full mt-2">
                                                            View Details
                                                        </button>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-12">
                                        <p className="text-gray-600 mb-4">No plots match your current filters.</p>
                                        <button onClick={resetFilters} className="inline-flex items-center px-4 py-2 bg-[#172747] text-white rounded-[4px] hover:bg-[#0e1a34] transition-colors">
                                            Reset Filters
                                        </button>
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
