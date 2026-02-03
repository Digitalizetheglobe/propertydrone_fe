'use client';

import React, { useState, useEffect } from 'react';
import { X, MapPin, Building2, Star } from 'lucide-react';
import Image from 'next/image';

// Expert Type Definition
interface Expert {
    id: number;
    name: string;
    image: { path: string } | null;
    experience: string;
    properties: number;
    locations: string[];
    isExpert: boolean;
    initials: string;
    bgColor: string;
    contactNumber?: string;
}

const EnquireSideButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [experts, setExperts] = useState<Expert[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperts = async () => {
            try {
                const response = await fetch('api.propertydronerealty.com/api/experts');
                if (response.ok) {
                    const data = await response.json();
                    setExperts(data);
                }
            } catch (error) {
                console.error("Error fetching experts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchExperts();
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const getImageUrl = (image: { path: string } | null) => {
        if (!image || !image.path) return 'https://randomuser.me/api/portraits/men/32.jpg'; // Fallback
        return `api.propertydronerealty.com${image.path}`;
    };

    return (
        <>
            {/* Side Button */}
            <button
                onClick={toggleModal}
                className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] backdrop-blur-lg bg-[#1717B5]/90 hover:bg-[#1717B5] text-white font-bold py-6 md:py-8 px-1.5 md:px-2 rounded-l-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] transition-all cursor-pointer border-l border-t border-b border-white/10 group"
            >
                <span
                    className="block text-sm md:text-lg tracking-wider whitespace-nowrap group-hover:scale-105 transition-transform"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                    Talk with Experts
                </span>
            </button>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[110] flex justify-end items-start pt-28 pr-4 bg-transparent animate-fadeIn">
                    {/* Modal Content - Side Drawer */}
                    <div
                        className="bg-white w-full max-w-[320px] h-[450px] shadow-2xl overflow-hidden animate-slideLefr relative flex flex-col rounded-2xl border border-gray-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white z-10">
                            <div>
                                <h2 className="text-lg font-bold text-[#1717B5]">
                                    PropertyDrone Experts
                                </h2>
                            </div>
                            <button
                                onClick={toggleModal}
                                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700 cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="p-3 overflow-y-auto bg-gray-50/50 flex-grow">
                            <div className="flex flex-col gap-3">
                                {loading ? (
                                    <div className="text-center py-4 text-gray-500">Loading experts...</div>
                                ) : experts.length === 0 ? (
                                    <div className="text-center py-4 text-gray-500">No experts found.</div>
                                ) : (
                                    experts.map((expert) => (
                                        <div key={expert.id} className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3 mb-2">
                                                {/* Avatar */}
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${expert.bgColor || 'bg-gray-200'}`}>
                                                    {expert.initials ? (
                                                        <span className="text-xs font-bold text-white">{expert.initials}</span>
                                                    ) : (
                                                        <img
                                                            src={getImageUrl(expert.image)}
                                                            alt={expert.name}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.currentTarget.src = "https://ui-avatars.com/api/?name=" + expert.name + "&background=random";
                                                            }}
                                                        />
                                                    )}
                                                </div>

                                                {/* Name & Stats */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-bold text-[#172747] text-sm leading-tight truncate">{expert.name}</h3>
                                                    <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-500">
                                                        <span>Exp: {expert.experience}</span>
                                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                        <span className="text-blue-600 font-medium">
                                                            {expert.properties}+ Properties
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <a
                                                href={`tel:${expert.contactNumber}`}
                                                className="w-full block text-center bg-white border border-[#1717B5] text-[#1717B5] text-[10px] sm:text-xs font-bold py-1.5 rounded-md hover:bg-[#1717B5] hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
                                            >
                                                Contact Expert
                                            </a>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EnquireSideButton;
