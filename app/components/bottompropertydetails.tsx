"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Property {
    id: number;
    city?: string;
    location?: string;
    propertyType?: string; // e.g. "Apartments", "Land", "Plotting"
    propertyCategory?: string; // e.g. "Sale", "Rent" - Checking if this exists
    [key: string]: any;
}

interface SectionLink {
    title: string;
    links: { name: string; url: string }[];
}

interface TabData {
    [key: string]: SectionLink[];
}

const BottomPropertyDetails = () => {
    const [activeTab, setActiveTab] = useState("Properties & Flats for Sale");
    const [tabData, setTabData] = useState<TabData>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('https://api.propertydronerealty.com/properties');
                if (!response.ok) {
                    console.error('Failed to fetch properties:', response.status);
                    setTabData(getDefaultData()); // Fallback
                    return;
                }
                const properties: Property[] = await response.json();

                // Initialize Tabs
                const newTabData: TabData = {
                    "Properties & Flats for Sale": [],
                    "Properties & Flats for Rent": [],
                    "New Projects & Plots": [],
                    "Commercial": []
                };

                // Group by: Tab -> Location (Area) -> Set of specific property type links if possible, 
                // or just generic links for that location.
                const locationMap: Record<string, Set<string>> = {};
                Object.keys(newTabData).forEach(k => locationMap[k] = new Set());

                properties.forEach(p => {
                    const type = (p.propertyType || "").toLowerCase();
                    const category = (p.propertyCategory || "").toLowerCase();

                    let tabKey = "Properties & Flats for Sale";

                    if (category.includes("rent") || category.includes("lease")) {
                        tabKey = "Properties & Flats for Rent";
                    } else if (type.includes("land") || type.includes("plot")) {
                        tabKey = "New Projects & Plots";
                    } else if (type.includes("commercial") || type.includes("office") || type.includes("retail") || type.includes("shop") || type.includes("showroom")) {
                        tabKey = "Commercial";
                    }

                    const location = (p.location && p.location.trim()) ? p.location.trim() : null;
                    if (!location) return;

                    locationMap[tabKey].add(location);
                });

                // Convert Map to TabData
                Object.keys(locationMap).forEach(tabKey => {
                    const locations = Array.from(locationMap[tabKey]).sort();

                    locations.forEach(location => {
                        let links = [];

                        if (tabKey === "Properties & Flats for Sale") {
                            links = [
                                { name: `Flats for Sale in ${location}`, url: `/our-properties-in-pune?location=${encodeURIComponent(location)}` },
                                { name: `Properties in ${location}`, url: `/our-properties-in-pune?location=${encodeURIComponent(location)}` },
                                { name: `Properties for Sale in ${location}`, url: `/our-properties-in-pune?location=${encodeURIComponent(location)}` },
                            ];
                        } else if (tabKey === "Properties & Flats for Rent") {
                            links = [
                                { name: `Flats for Rent in ${location}`, url: `/our-properties-in-pune?location=${encodeURIComponent(location)}&type=rent` },
                                { name: `Properties for Rent in ${location}`, url: `/our-properties-in-pune?location=${encodeURIComponent(location)}&type=rent` },
                            ];
                        } else if (tabKey === "Commercial") {
                            links = [
                                { name: `Offices in ${location}`, url: `/our-properties-in-pune?location=${encodeURIComponent(location)}&type=commercial` },
                                { name: `Shops in ${location}`, url: `/our-properties-in-pune?location=${encodeURIComponent(location)}&type=commercial` },
                            ];
                        } else {
                            links = [
                                { name: `Plots in ${location}`, url: `/our-properties-in-pune?location=${encodeURIComponent(location)}&type=plot` },
                                { name: `New Projects in ${location}`, url: `/our-properties-in-pune?location=${encodeURIComponent(location)}` },
                            ];
                        }

                        newTabData[tabKey].push({
                            title: `${location}`, // Header is the Area/Location
                            links: links
                        });
                    });
                });

                setTabData(newTabData);

            } catch (err) {
                console.error("Error loading property details for footer:", err);
                setTabData(getDefaultData());
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    // Fallback data if API fails
    const getDefaultData = (): TabData => ({
        "Properties & Flats for Sale": [
            {
                title: "Baner",
                links: [
                    { name: "Flats for Sale in Baner", url: "/our-properties-in-pune?location=Baner" }
                ]
            }
        ]
    });

    const currentTabContent = tabData[activeTab] || [];

    return (
        <div className="w-full bg-white text-[#424242] py-8 text-xs font-sans border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Tabs */}
                <div className="flex bg-[#f5f5f5] overflow-x-auto border-b border-gray-200 no-scrollbar">
                    {Object.keys(tabData).filter(key => tabData[key].length > 0).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-3 whitespace-nowrap font-semibold border-b-2 transition-colors duration-200 text-[11px] sm:text-[12px] uppercase tracking-wide
                                ${activeTab === tab
                                    ? 'border-gray-800 text-gray-900 bg-white'
                                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="mt-6 min-h-[200px]">
                    {loading ? (
                        <div className="flex justify-center items-center h-32 text-gray-400">
                            Loading...
                        </div>
                    ) : currentTabContent.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                            {currentTabContent.map((section, idx) => (
                                <div key={idx} className="flex flex-col space-y-2">
                                    <h3 className="font-bold text-gray-800 text-[13px] mb-1">{section.title}</h3>
                                    <ul className="space-y-1.5">
                                        {section.links.map((link, linkIdx) => (
                                            <li key={linkIdx}>
                                                <Link
                                                    href={link.url}
                                                    className="text-gray-500 hover:text-[#172747] hover:underline transition-colors duration-200 block leading-tight text-[11px]"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 text-gray-400">
                            No properties found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BottomPropertyDetails;
