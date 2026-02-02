"use client";

import React, { useState, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Bookmark, MapPin, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedLetters from "@/app/components/AnimatedLetters";
import luxeImage from "@/public/images/main1.png";
import main2 from "@/public/images/main2.png";

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
    featured?: boolean;
}

const AnimatedStarButton = () => {
    return (
        <div className="relative">
            <button className="group relative overflow-hidden rounded-full p-px cursor-pointer" style={{ backgroundColor: '#172747' }}>
                {/* Button content */}
                <span
                    className="flex items-center justify-center gap-1 relative z-[1] rounded-full py-2 px-4 pl-2 w-full"
                    style={{ backgroundColor: 'rgba(23, 39, 71, 0.95)' }}
                >
                    {/* Star icon without animations */}
                    <span className="relative group-hover:scale-105 transition-transform duration-500">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-90"
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
                    </span>

                    {/* LUXE text */}
                    <span
                        className="tracking-[2px] ml-1.5 bg-clip-text text-xs text-transparent group-hover:scale-105 transition transform-gpu cursor-pointer"
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

const PropertyCardLuxe = ({
    property,
    delay,
    comparedIds,
    setComparedIds,
    compareLoadingId,
    setCompareLoadingId,
    comparisonIdMap,
    fetchComparedIds,

    savedIds,
    setSavedIds,
    savedLoadingId,
    setSavedLoadingId,
    savedIdMap,
    fetchSavedIds,
}: {
    property: Property;
    delay: number;
    comparedIds: number[];
    setComparedIds: Dispatch<SetStateAction<number[]>>;
    compareLoadingId: number | null;
    setCompareLoadingId: Dispatch<SetStateAction<number | null>>;
    comparisonIdMap: Record<number, number>;
    fetchComparedIds: () => Promise<void>;

    savedIds: number[];
    setSavedIds: Dispatch<SetStateAction<number[]>>;
    savedLoadingId: number | null;
    setSavedLoadingId: Dispatch<SetStateAction<number | null>>;
    savedIdMap: Record<number, number>;
    fetchSavedIds: () => Promise<void>;
}) => {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);

    // Update image path handling with proper error checking
    const imagePath = (() => {
        const path = property?.multipleImages?.[0]?.path;
        if (!path) return main2.src;
        if (path.startsWith('http')) return path;
        return `http://localhost:5000${path}`;
    })();

    const toggleSave = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // Auth check
        const storedUser = localStorage.getItem('webuser');
        let userId: number | null = null;
        if (storedUser) {
            try {
                const parsed = JSON.parse(storedUser);
                userId = parsed.id;
            } catch (err) {
                console.error("Error parsing user data", err);
            }
        }

        if (!userId) {
            window.location.href = '/signin';
            return;
        }

        setSavedLoadingId(property.id);
        const isSaved = savedIds.includes(property.id);

        try {
            if (isSaved) {
                // Remove
                const recordId = savedIdMap[property.id];
                if (recordId) {
                    setSavedIds(prev => prev.filter(id => id !== property.id));
                    const resp = await fetch(`http://localhost:5000/api/saved-properties/${recordId}`, { method: 'DELETE' });
                    if (!resp.ok) {
                        // Rollback
                        setSavedIds(prev => [...prev, property.id]);
                    } else {
                        await fetchSavedIds();
                    }
                }
            } else {
                // Add
                setSavedIds(prev => [...prev, property.id]);
                const resp = await fetch(`http://localhost:5000/api/saved-properties`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        webUserId: userId,
                        propertyId: property.id,
                        propertyData: property
                    })
                });
                if (!resp.ok) {
                    setSavedIds(prev => prev.filter(id => id !== property.id));
                } else {
                    await fetchSavedIds();
                }
            }
        } catch (error) {
            console.error("Save property error:", error);
        } finally {
            setSavedLoadingId(null);
        }
    };

    return (
        <div data-aos="fade-up" data-aos-delay={delay}>
            <div
                onClick={() => router.push(`/luxe-properties/${property.slug}`)}
                className="bg-white rounded-[4px] cursor-pointer overflow-hidden shadow-sm transition-all duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >


                <div className="relative h-52 w-full overflow-hidden">
                    <Link href={`/luxe-properties/${property.slug}`} passHref>
                        <img
                            src={imagePath}
                            alt={property.propertyName || "Property Image"}
                            className={`absolute inset-0 w-full h-full z-0 transition-transform duration-700 cursor-pointer ease-in-out object-cover ${isHovered ? "scale-110" : "scale-100"
                                }`}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (target.src !== main2.src) {
                                    target.src = main2.src;
                                }
                            }}
                        />
                    </Link>
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


                    <div className="w-1/2 flex items-center  justify-center py-2 space-x-1">
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
                        <span className="text-[#172747] text-lg " style={{
                            fontSize: '16px',
                            fontFamily: 'Lato, sans-serif',
                            letterSpacing: '0.5px',
                            lineHeight: '1.3',
                        }}>{property.location || "Location"}</span>
                    </div>

                </div>


                {/* Title */}

                <div className="px-4 pt-1 pb-2">
                    <Link href={`/luxe-properties/${property.slug}`} passHref>
                        <h3
                            className={` ${isHovered ? "text-blue-800" : "text-[#172747]"
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
                    </Link>
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
                            Typology : {(() => {
                                const words = String(property.topology).split(' ');
                                return words.length > 5
                                    ? words.slice(0, 5).join(' ') + '...'
                                    : words.join(' ');
                            })()}
                        </span>

                    </div>

                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between px-3 py-2">
                    <div className="flex gap-2 items-center" onClick={(e) => e.stopPropagation()}>
                        {/* Location Button */}
                        <a
                            href={property.googleMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-0.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                            title="View on Map"
                        >
                            <MapPin size={16} className="text-red-500" />
                        </a>

                        {/* Share Button */}
                        <button
                            onClick={async (e) => {
                                e.preventDefault();
                                const shareData = {
                                    title: property.propertyName,
                                    text: `Check out this property: ${property.propertyName}`,
                                    url: `${window.location.origin}/luxe-properties/${property.slug}`,
                                };

                                if (typeof navigator !== 'undefined' && navigator.share) {
                                    try {
                                        await navigator.share(shareData);
                                    } catch (err) {
                                        console.error('Error sharing:', err);
                                    }
                                } else {
                                    navigator.clipboard.writeText(shareData.url);
                                    alert('Link copied to clipboard!');
                                }
                            }}
                            className="p-0.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                            title="Share"
                        >
                            <Share2 size={16} className="text-gray-700" />
                        </button>

                        {/* WhatsApp Button */}
                        <a
                            href={`https://wa.me/919156123575?text=Check out this property: ${typeof window !== 'undefined' ? window.location.origin : ''}/luxe-properties/${property.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-0.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                            title="Share on WhatsApp"
                        >
                            <FaWhatsapp size={16} className="text-green-500" />
                        </a>

                        {/* Save Button */}
                        <button
                            onClick={toggleSave}
                            disabled={savedLoadingId === property.id}
                            className="p-0.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                            title={savedIds.includes(property.id) ? "Unsave" : "Save"}
                        >
                            <Bookmark
                                size={16}
                                className={`${savedIds.includes(property.id) ? 'fill-[#172747] text-[#172747]' : 'text-[#172747]'}`}
                            />
                        </button>
                        <label className="flex items-center gap-1 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={comparedIds.includes(property.id)}
                                disabled={compareLoadingId === property.id || (!comparedIds.includes(property.id) && comparedIds.length >= 5)}
                                onChange={async (e) => {
                                    // Check authentication first
                                    const storedUser = localStorage.getItem('webuser');
                                    let userId: number | null = null;

                                    if (storedUser) {
                                        try {
                                            const parsed = JSON.parse(storedUser);
                                            userId = parsed.id;
                                        } catch (err) {
                                            console.error("Error parsing user data", err);
                                        }
                                    }

                                    if (!userId) {
                                        e.preventDefault();
                                        window.location.href = '/signin';
                                        return;
                                    }

                                    setCompareLoadingId(property.id);
                                    if (e.target.checked) {
                                        // Removed redundant setCompareLoadingId set here

                                        // User ID is guaranteed to be set here due to check above

                                        setComparedIds(prev => [...prev, property.id]);
                                        try {
                                            const resp = await fetch('http://localhost:5000/api/property-comparisons', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({
                                                    webUserId: userId,
                                                    propertyId: property.id,
                                                    propertyData: property
                                                })
                                            });
                                            if (!resp.ok) {
                                                console.error("Add comparison failed", await resp.text());
                                                setComparedIds(prev => prev.filter(id => id !== property.id));
                                            } else {
                                                await fetchComparedIds();
                                            }
                                        } catch (err) {
                                            console.error(err);
                                            setComparedIds(prev => prev.filter(id => id !== property.id));
                                        }
                                        setCompareLoadingId(null);
                                    } else {
                                        setComparedIds(prev => prev.filter(id => id !== property.id));
                                        const comparisonId = comparisonIdMap[property.id];
                                        if (!comparisonId) {
                                            setCompareLoadingId(null);
                                            return;
                                        }
                                        const resp = await fetch(`http://localhost:5000/api/property-comparisons/${comparisonId}`, { method: 'DELETE' });
                                        if (!resp.ok) {
                                            setComparedIds(prev => [...prev, property.id]);
                                        } else {
                                            await fetchComparedIds();
                                        }
                                    }
                                    setCompareLoadingId(null);
                                }}
                                className="form-checkbox h-4 w-4 text-[#172747] rounded focus:ring-[#172747] border-gray-300 transition-all duration-150"
                            />
                            <span className={comparedIds.includes(property.id) ? 'text-red-600 font-semibold text-[10px]' : 'text-green-700 font-semibold text-[10px]'}>
                                {comparedIds.includes(property.id) ? 'Uncompare' : 'Compare'}
                            </span>
                        </label>
                    </div>

                    {/* View Details Button */}
                    <Link href={`/luxe-properties/${property.slug}`} passHref onClick={(e) => e.stopPropagation()}>
                        <button className="bg-[#172747] text-white text-[10px] px-3 py-1.5 cursor-pointer rounded-[4px] hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] border border-transparent transition-all duration-300 transform hover:scale-105 shadow-md font-semibold">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default function HomePageLuxeProperty({
    luxuryProperties,
    loading,
    error,
    resetFilters,
    comparedIds,
    setComparedIds,
    compareLoadingId,
    setCompareLoadingId,
    comparisonIdMap,
    fetchComparedIds,
    savedIds,
    setSavedIds,
    savedLoadingId,
    setSavedLoadingId,
    savedIdMap,
    fetchSavedIds,
}: {
    luxuryProperties: Property[];
    loading: boolean;
    error: string | null;
    resetFilters: () => void;
    comparedIds: number[];
    setComparedIds: Dispatch<SetStateAction<number[]>>;
    compareLoadingId: number | null;
    setCompareLoadingId: Dispatch<SetStateAction<number | null>>;
    comparisonIdMap: Record<number, number>;
    fetchComparedIds: () => Promise<void>;
    savedIds: number[];
    setSavedIds: Dispatch<SetStateAction<number[]>>;
    savedLoadingId: number | null;
    setSavedLoadingId: Dispatch<SetStateAction<number | null>>;
    savedIdMap: Record<number, number>;
    fetchSavedIds: () => Promise<void>;
}) {
    return (
        <div
            className="mx-auto px-6 md:px-20 py-8 relative"
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
            ) : luxuryProperties.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 px-4 w-full">
                    <div className="bg-white/95 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-xl max-w-3xl w-full">
                        <div className="text-center mb-8">
                            <div className="text-5xl mb-4">🤔</div>
                            <h3 className="text-2xl font-bold text-[#172747] mb-3">
                                Oooops! Seems like your requirement is rare/specific
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
                                Don't worry! We love unique requirements. Let's connect you with our expert team who will work closely to find exactly what you're looking for.
                            </p>
                        </div>

                        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Detailed requirement submitted!"); }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5 text-left">
                                    <label className="text-xs font-bold text-gray-700 ml-1">Name <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Your full name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#172747]/20 focus:border-[#172747] outline-none transition-all placeholder:text-gray-400" required />
                                </div>
                                <div className="space-y-1.5 text-left">
                                    <label className="text-xs font-bold text-gray-700 ml-1">Email Address <span className="text-red-500">*</span></label>
                                    <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#172747]/20 focus:border-[#172747] outline-none transition-all placeholder:text-gray-400" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5 text-left">
                                    <label className="text-xs font-bold text-gray-700 ml-1">Phone Number <span className="text-red-500">*</span></label>
                                    <input type="tel" placeholder="Your phone number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#172747]/20 focus:border-[#172747] outline-none transition-all placeholder:text-gray-400" required />
                                </div>
                                <div className="space-y-1.5 text-left">
                                    <label className="text-xs font-bold text-gray-700 ml-1">Property Type</label>
                                    <div className="relative">
                                        <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500 focus:ring-2 focus:ring-[#172747]/20 focus:border-[#172747] outline-none transition-all appearance-none cursor-pointer">
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
                                <textarea rows={2} placeholder="Tell us about your inquiry or specific requirements..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#172747]/20 focus:border-[#172747] outline-none transition-all resize-none placeholder:text-gray-400"></textarea>
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <button type="submit" className="bg-[#246BFD] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 text-sm cursor-pointer transform active:scale-95">
                                    Submit Requirement
                                </button>
                                <button type="button" onClick={resetFilters} className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-all duration-300 text-sm cursor-pointer transform active:scale-95">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="space-y-10 max-w-6xl mx-auto px-4">
                    <div className="mb-8">
                        <AnimatedLetters
                            text="LUXURY PROPERTIES"
                            as="h2"
                            className="uppercase text-[#172747] text-[16px] sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
                        />

                        <h2 className="text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]">
                            Discover our exclusive collection of luxury properties in Pune
                        </h2>
                        {comparedIds.length > 0 && (
                            <div className="flex justify-start gap-4 mb-4">
                                <Link href="/compareproperties">
                                    <button className="bg-black cursor-pointer text-white px-4 py-2 rounded text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-gray-900 transition-colors shadow-md">
                                        COMPARE PROPERTIES <span className="text-[#FFD700]">({comparedIds.length})</span>
                                    </button>
                                </Link>
                                <button className="bg-black text-white cursor-pointer px-4 py-2 rounded text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-gray-900 transition-colors shadow-md">
                                    INQUIRE THIS <span className="text-[#FFD700]">({comparedIds.length})</span> PROPERTIES
                                </button>
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {luxuryProperties.slice(0, 3).map((property, index) => (
                                <PropertyCardLuxe
                                    key={property.id}
                                    property={property}
                                    delay={index * 200}
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
                            ))}
                        </div>

                        {luxuryProperties.length > 3 && (
                            <div className="flex justify-center mt-8">
                                <Link href="/luxe-properties">
                                    <button className="bg-white text-[#172747] px-6 py-3 rounded hover:bg-gray-100 transition-colors duration-300 cursor-pointer flex items-center gap-2">
                                        View All Luxury Properties
                                        <ArrowRight size={16} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
} // End of component
