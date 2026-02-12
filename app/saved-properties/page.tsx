"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Bookmark, MapPin, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import main4 from "@/public/images/buliding.png"; // Fallback image
import { Loader2 } from "lucide-react";
import EnquireSideButton from "@/app/components/EnquireSideButton";

// --- Types ---
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

// --- Property Card Component (Matched with HomepageFeaturedProperty) ---
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
        const cleanPath = imgPath.replace(/\\/g, '/');
        const finalPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
        return `https://api.propertydronerealty.com${finalPath}`;
    })();

    const toggleSave = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

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
                    const resp = await fetch(`https://api.propertydronerealty.com/api/saved-properties/${recordId}`, { method: 'DELETE' });
                    if (!resp.ok) {
                        setSavedIds(prev => [...prev, property.id]);
                    } else {
                        await fetchSavedIds(); // Refresh list to remove content
                    }
                }
            } else {
                // Add
                setSavedIds(prev => [...prev, property.id]);
                const resp = await fetch(`https://api.propertydronerealty.com/api/saved-properties`, {
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
                className="bg-white rounded-md cursor-pointer overflow-hidden shadow-sm transition-all duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 relative group h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative h-52 w-full overflow-hidden">
                    <img
                        src={imagePath}
                        alt={property.propertyName || "Property Image"}
                        className={`absolute inset-0 w-full h-full z-0 transition-transform duration-700 ease-in-out object-cover ${isHovered ? "scale-110" : "scale-100"}`}
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
                    <div className="w-1/2 flex items-center border-r border-[#00000033] py-2">
                        <div className="text-[#172747] px-3 py-1 rounded-md flex items-center gap-1 font-lato text-base tracking-[0.5px] leading-[1.3]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            {property.beds || ""} Beds
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center border-r border-[#00000033] py-2">
                        <div className="text-[#172747] px-3 py-1 rounded-md flex items-center gap-1 font-lato text-base tracking-[0.5px] leading-[1.3]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <path d="M22 6l-10 7L2 6"></path>
                            </svg>
                            {property.baths || ""} Baths
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center py-2 space-x-1">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-[#172747] text-base font-lato tracking-[0.5px] leading-[1.3]">
                            {property.location || "Location"}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <div className="px-4 pt-1 pb-2">
                    <h3 className={`${isHovered ? "text-blue-800" : "text-[#172747]"} text-[20px] font-lato tracking-[0.5px] leading-[1.3]`}>
                        {property.propertyName || "Prime Business Hub"}
                    </h3>
                </div>

                {/* Property Details */}
                <div className="space-y-1 px-2 pb-2">
                    <div className="justify-between items-center px-2 py-1 space-x-2 bg-[#EEF1F5] text-xs text-gray-800 rounded-[4px]">
                        <span className="text-gray-700 font-lato text-[14px] tracking-[0.5px]">
                            Carpet Area : {String(property.carpetArea).split(" ").slice(0, 5).join(" ")}
                        </span>
                    </div>
                    <div className="justify-between items-center px-2 py-1 space-x-2 bg-[#EEF1F5] text-xs text-gray-800 rounded-[4px]">
                        <span className="text-gray-700 font-lato text-[14px] tracking-[0.5px]">
                            Possession : {String(property.possession).split(" ").slice(0, 5).join(" ")}
                        </span>
                    </div>
                    <div className="justify-between items-center px-2 py-1 space-x-2 bg-[#EEF1F5] text-xs text-gray-800 rounded-[4px]">
                        <span className="text-gray-700 font-lato text-[14px] tracking-[0.5px]">
                            Topology : {String(property.topology).split(" ").slice(0, 5).join(" ")}
                        </span>
                    </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between px-3 py-2 mt-auto">
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
                                    (!comparedIds.includes(property.id) && comparedIds.length >= 5)
                                }
                                onChange={async (e) => {
                                    const storedUser = localStorage.getItem('webuser');
                                    let userId: number | null = null;
                                    if (storedUser) userId = JSON.parse(storedUser).id;

                                    if (!userId) {
                                        window.location.href = '/signin';
                                        return;
                                    }

                                    setCompareLoadingId(property.id);
                                    if (e.target.checked) {
                                        setComparedIds((prev) => [...prev, property.id]);
                                        try {
                                            const resp = await fetch("https://api.propertydronerealty.com/api/property-comparisons", {
                                                method: "POST",
                                                headers: { "Content-Type": "application/json" },
                                                body: JSON.stringify({ webUserId: userId, propertyId: property.id, propertyData: property }),
                                            });
                                            if (!resp.ok) setComparedIds((prev) => prev.filter((id) => id !== property.id));
                                            else await fetchComparedIds();
                                        } catch (error) {
                                            setComparedIds((prev) => prev.filter((id) => id !== property.id));
                                        }
                                    } else {
                                        setComparedIds((prev) => prev.filter((id) => id !== property.id));
                                        const comparisonId = comparisonIdMap[property.id];
                                        if (comparisonId) {
                                            await fetch(`https://api.propertydronerealty.com/api/property-comparisons/${comparisonId}`, { method: "DELETE" });
                                            await fetchComparedIds();
                                        }
                                    }
                                    setCompareLoadingId(null);
                                }}
                                className="form-checkbox h-4 w-4 text-[#172747] rounded focus:ring-[#172747] border-gray-300 transition-all duration-150"
                            />
                            <span className={comparedIds.includes(property.id) ? "text-red-600 font-semibold text-[10px]" : "text-green-700 font-semibold text-[10px]"}>
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

// --- Main Page Component ---
export default function SavedPropertiesPage() {
    const [savedProperties, setSavedProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    // States for functional props of PropertyCard
    const [comparedIds, setComparedIds] = useState<number[]>([]);
    const [compareLoadingId, setCompareLoadingId] = useState<number | null>(null);
    const [comparisonIdMap, setComparisonIdMap] = useState<Record<number, number>>({});

    const [savedIds, setSavedIds] = useState<number[]>([]);
    const [savedLoadingId, setSavedLoadingId] = useState<number | null>(null);
    const [savedIdMap, setSavedIdMap] = useState<Record<number, number>>({});

    const [userId, setUserId] = useState<number | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem('webuser');
        if (stored) {
            try {
                const u = JSON.parse(stored);
                setUserId(u.id);
            } catch (e) {
                console.error(e);
            }
        }
    }, []);

    const fetchSavedIds = async () => {
        if (!userId) return;
        try {
            const res = await fetch(`https://api.propertydronerealty.com/api/saved-properties?webUserId=${userId}`);
            if (res.ok) {
                const data = await res.json();
                const userSaved = data.filter((item: any) => Number(item.webUserId) === Number(userId));

                // Update IDs and Map
                const ids = userSaved.map((item: any) => Number(item.propertyId));
                setSavedIds(ids);

                const map: Record<number, number> = {};
                userSaved.forEach((item: any) => {
                    map[Number(item.propertyId)] = item.id;
                });
                setSavedIdMap(map);

                // Extract property objects
                const props = userSaved.map((item: any) => item.propertyData).filter((p: any) => p != null);
                setSavedProperties(props);
            }
        } catch (error) {
            console.error("Error fetching saved properties:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchComparedIds = async () => {
        if (!userId) return;
        try {
            const res = await fetch(`https://api.propertydronerealty.com/api/property-comparisons?webUserId=${userId}`);
            if (res.ok) {
                const data = await res.json();
                const userCompared = data.filter((item: any) => Number(item.webUserId) === Number(userId));

                const ids = userCompared.map((item: any) => Number(item.propertyId));
                setComparedIds(ids);

                const map: Record<number, number> = {};
                userCompared.forEach((item: any) => {
                    map[Number(item.propertyId)] = item.id;
                });
                setComparisonIdMap(map);
            }
        } catch (error) {
            console.error("Error fetching comparison data:", error);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchSavedIds();
            fetchComparedIds();
        } else {
            // Not logged in or just loaded
            const stored = localStorage.getItem('webuser'); // double check immediate load
            if (!stored) setLoading(false);
        }
    }, [userId]);


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
                <Loader2 className="w-10 h-10 animate-spin text-[#172747]" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <EnquireSideButton />
            {/* Header */}
            <div className="bg-[#191758] text-white py-12 px-4 shadow-lg relative overflow-hidden">
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <h1 className="text-3xl font-bold text-white">Saved Properties</h1>
                    <p className="text-gray-300 mt-2">View and manage properties you have shortlisted.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
                {savedProperties.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Bookmark className="w-10 h-10 text-gray-400" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">No Saved Properties</h2>
                        <p className="text-gray-500 mb-6">You haven't saved any properties yet. Start exploring to find your dream home.</p>
                        <Link href="/our-properties-in-pune">
                            <button className="bg-[#172747] text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors">
                                Explore Properties
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedProperties.map((property) => (
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
                )}
            </div>
        </div>
    );
}
