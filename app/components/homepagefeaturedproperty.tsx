"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bookmark, MapPin, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedLetters from "@/app/components/AnimatedLetters";
import main4 from "@/public/images/buliding.png"; // Fallback image

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
    }>;
    slug: string;
}

const PropertyCard = ({
    property,
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
    comparedIds: number[];
    setComparedIds: React.Dispatch<React.SetStateAction<number[]>>;
    compareLoadingId: number | null;
    setCompareLoadingId: React.Dispatch<React.SetStateAction<number | null>>;
    comparisonIdMap: Record<number, number>;
    fetchComparedIds: () => Promise<void>;

    savedIds: number[];
    setSavedIds: React.Dispatch<React.SetStateAction<number[]>>;
    savedLoadingId: number | null;
    setSavedLoadingId: React.Dispatch<React.SetStateAction<number | null>>;
    savedIdMap: Record<number, number>;
    fetchSavedIds: () => Promise<void>;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Update image path handling with proper error checking
    const imagePath = (() => {
        const imgPath = property.multipleImages?.[0]?.path;
        if (!imgPath) return main4.src;
        if (imgPath.startsWith('http')) return imgPath;
        // Normalize path: replace backslashes with forward slashes and ensure leading slash
        const cleanPath = imgPath.replace(/\\/g, '/');
        const finalPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
        return `http://localhost:5000${finalPath}`;
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
        <Link href={`/our-properties-in-pune/${property.slug}`} passHref>
            <div
                className="bg-white rounded-md cursor-pointer overflow-hidden shadow-sm transition-all duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >


                <div className="relative h-52 w-full overflow-hidden">
                    <img
                        src={imagePath}
                        alt={property.propertyName || "Property Image"}
                        className={`absolute inset-0 w-full h-full z-0 transition-transform duration-700 ease-in-out object-cover ${isHovered ? "scale-110" : "scale-100"
                            }`}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (target.src !== main4.src) {
                                target.src = main4.src;
                            }
                        }}
                    />
                </div>
                {/* Developer and Location */}
                <div className="flex border-b border-[#00000033]">
                    <div className="w-1/2 flex items-center  border-r border-[#00000033] py-2">
                        <div
                            className=" text-[#172747] px-3 py-1 rounded-md flex items-center gap-1"
                            style={{
                                fontSize: "16px",
                                fontFamily: "Lato, sans-serif",
                                letterSpacing: "0.5px",
                                lineHeight: "1.3",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            {property.beds || ""} Beds
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center  border-r border-[#00000033] py-2">
                        <div
                            className=" text-[#172747] px-3 py-1 rounded-md flex items-center gap-1"
                            style={{
                                fontSize: "16px",
                                fontFamily: "Lato, sans-serif",
                                letterSpacing: "0.5px",
                                lineHeight: "1.3",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <path d="M22 6l-10 7L2 6"></path>
                            </svg>
                            {property.baths || ""} Baths
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
                        <span
                            className="text-[#172747] text-lg "
                            style={{
                                fontSize: "16px",
                                fontFamily: "Lato, sans-serif",
                                letterSpacing: "0.5px",
                                lineHeight: "1.3",
                            }}
                        >
                            {property.location || "Location"}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <div className="px-4 pt-1 pb-2">
                    <h3
                        className={` ${isHovered ? "text-blue-800" : "text-[#172747]"}`}
                        style={{
                            fontSize: "20px",
                            fontFamily: "Lato, sans-serif",
                            letterSpacing: "0.5px",
                            lineHeight: "1.3",
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
                            style={{
                                fontSize: "14px",
                                fontFamily: "Lato",
                                letterSpacing: "0.5px",
                            }}
                        >
                            Carpet Area :{" "}
                            {(() => {
                                const words = String(property.carpetArea).split(" ");
                                return words.length > 5
                                    ? words.slice(0, 5).join(" ") + "..."
                                    : words.join(" ");
                            })()}
                        </span>
                    </div>
                </div>
                <div className="justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]">
                    <div className="flex items-center space-x-2">
                        <span
                            className="text-gray-700 px-2"
                            style={{
                                fontSize: "14px",
                                fontFamily: "Lato",
                                letterSpacing: "0.5px",
                            }}
                        >
                            Possession :{" "}
                            {(() => {
                                const words = String(property.possession).split(" ");
                                return words.length > 5
                                    ? words.slice(0, 5).join(" ") + "..."
                                    : words.join(" ");
                            })()}
                        </span>
                    </div>
                </div>
                <div className="justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]">
                    <div className="flex items-center space-x-2">
                        <span
                            className="text-gray-700 px-2"
                            style={{
                                fontSize: "14px",
                                fontFamily: "Lato",
                                letterSpacing: "0.5px",
                            }}
                        >
                            Topology :{" "}
                            {(() => {
                                const words = String(property.topology).split(" ");
                                return words.length > 5
                                    ? words.slice(0, 5).join(" ") + "..."
                                    : words.join(" ");
                            })()}
                        </span>
                    </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between px-3 py-2">
                    <div className="flex gap-2 items-center">
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
                            onClick={(e) => {
                                e.preventDefault();
                                navigator.clipboard.writeText(`${window.location.origin}/our-properties-in-pune/${property.slug}`);
                            }}
                            className="p-0.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                            title="Copy Link"
                        >
                            <Share2 size={16} className="text-gray-700" />
                        </button>

                        {/* WhatsApp Button */}
                        <a
                            href={`https://wa.me/?text=Check out this property: ${typeof window !== 'undefined' ? window.location.origin : ''}/our-properties-in-pune/${property.slug}`}
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
                                disabled={
                                    compareLoadingId === property.id ||
                                    (!comparedIds.includes(property.id) &&
                                        comparedIds.length >= 5)
                                }
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
                                        setComparedIds((prev) => [...prev, property.id]);
                                        try {
                                            const resp = await fetch(
                                                "http://localhost:5000/api/property-comparisons",
                                                {
                                                    method: "POST",
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify({
                                                        webUserId: userId,
                                                        propertyId: property.id,
                                                        propertyData: property,
                                                    }),
                                                }
                                            );
                                            if (!resp.ok) {
                                                setComparedIds((prev) =>
                                                    prev.filter((id) => id !== property.id)
                                                );
                                            } else {
                                                await fetchComparedIds();
                                            }
                                        } catch (error) {
                                            console.error("Comparison error:", error);
                                            setComparedIds((prev) => prev.filter((id) => id !== property.id));
                                        }
                                    } else {
                                        setComparedIds((prev) =>
                                            prev.filter((id) => id !== property.id)
                                        );
                                        const comparisonId = comparisonIdMap[property.id];
                                        if (!comparisonId) {
                                            setCompareLoadingId(null);
                                            return;
                                        }
                                        const resp = await fetch(
                                            `http://localhost:5000/api/property-comparisons/${comparisonId}`,
                                            { method: "DELETE" }
                                        );
                                        if (!resp.ok) {
                                            setComparedIds((prev) => [...prev, property.id]);
                                        } else {
                                            await fetchComparedIds();
                                        }
                                    }
                                    setCompareLoadingId(null);
                                }}
                                className="form-checkbox h-4 w-4 text-[#172747] rounded focus:ring-[#172747] border-gray-300 transition-all duration-150"
                            />
                            <span
                                className={
                                    comparedIds.includes(property.id)
                                        ? "text-red-600 font-semibold text-[10px]"
                                        : "text-green-700 font-semibold text-[10px]"
                                }
                            >
                                {comparedIds.includes(property.id) ? "Uncompare" : "Compare"}
                            </span>
                        </label>
                    </div>

                    <button className="bg-[#172747] text-white text-[10px] px-3 py-1.5 rounded-[4px] hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] border border-transparent transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md font-semibold">
                        View Details
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default function HomePageFeaturedProperty({
    filteredProperties,
    loading,
    error,
    resetFilters,
    featuredProperties,
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
    filteredProperties: Property[];
    loading: boolean;
    error: string | null;
    resetFilters: () => void;
    featuredProperties: Property[];
    comparedIds: number[];
    setComparedIds: React.Dispatch<React.SetStateAction<number[]>>;
    compareLoadingId: number | null;
    setCompareLoadingId: React.Dispatch<React.SetStateAction<number | null>>;
    comparisonIdMap: Record<number, number>;
    fetchComparedIds: () => Promise<void>;

    savedIds: number[];
    setSavedIds: React.Dispatch<React.SetStateAction<number[]>>;
    savedLoadingId: number | null;
    setSavedLoadingId: React.Dispatch<React.SetStateAction<number | null>>;
    savedIdMap: Record<number, number>;
    fetchSavedIds: () => Promise<void>;
}) {
    return (
        <>
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
                    <p className="text-gray-500">
                        No properties found matching your criteria.
                    </p>
                    <button
                        onClick={resetFilters}
                        className="mt-4  bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#172747] transition-colors duration-300 cursor-pointer"
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

                        <h2 className="text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]">
                            Explore top-performing properties with high ROI and verified
                            builder credibility.
                        </h2>
                        {comparedIds.length > 0 && (
                            <div className="flex justify-start gap-4 mb-4">
                                <Link href="/compareproperties">
                                    <button className="bg-black text-white cursor-pointer px-4 py-2 rounded text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-gray-900 transition-colors shadow-md">
                                        COMPARE PROPERTIES <span className="text-[#FFD700]">({comparedIds.length})</span>
                                    </button>
                                </Link>
                                <button className="bg-black text-white cursor-pointer px-4 py-2 rounded text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-gray-900 transition-colors shadow-md">
                                    INQUIRE THIS <span className="text-[#FFD700]">({comparedIds.length})</span> PROPERTIES
                                </button>
                            </div>
                        )}


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredProperties.map((property) => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
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
                        <div className="flex justify-center mt-8">
                            <Link href="/our-properties-in-pune">
                                <button className="bg-white text-[#172747] px-6 py-3 rounded hover:bg-gray-100 transition-colors duration-300 cursor-pointer flex items-center gap-2">
                                    View All Properties
                                    <ArrowRight size={16} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
