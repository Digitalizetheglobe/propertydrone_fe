"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '@/app/components/Sidebar';
import Image from 'next/image';

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
}

export default function AllExperts() {
    const [experts, setExperts] = useState<Expert[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchExperts();
    }, []);

    const fetchExperts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/experts');
            if (response.ok) {
                const data = await response.json();
                setExperts(data);
            } else {
                console.error("Failed to fetch experts");
            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching experts:", error);
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this expert?")) return;

        try {
            const response = await fetch(`http://localhost:5000/api/experts/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setExperts(experts.filter(exp => exp.id !== id));
            } else {
                alert("Failed to delete expert");
            }
        } catch (error) {
            console.error("Error deleting expert:", error);
        }
    };

    const getImageUrl = (image: { path: string } | null) => {
        if (!image || !image.path) return '/placeholder-user.jpg';
        return `http://localhost:5000${image.path}`;
    };

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Expert Team</h1>
                            <p className="text-gray-500 mt-2">Manage your property experts</p>
                        </div>
                        <Link href="/dashboard/addexpert" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Add New Expert</span>
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        </div>
                    ) : experts.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FontAwesomeIcon icon={faUserTie} className="text-gray-400 text-3xl" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">No Experts Found</h3>
                            <p className="text-gray-500 mt-2 mb-6">Get started by adding your first expert to the team.</p>
                            <Link href="/dashboard/addexpert" className="text-blue-600 font-medium hover:underline">
                                Add Expert Now
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {experts.map((expert) => (
                                <div key={expert.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 border border-gray-100 relative">
                                                <img
                                                    src={getImageUrl(expert.image)}
                                                    alt={expert.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.src = "https://ui-avatars.com/api/?name=" + expert.name + "&background=random";
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">{expert.name}</h3>
                                                {expert.isExpert && (
                                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                                                        Expert
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Link href={`/dashboard/addexpert?id=${expert.id}`} className="text-gray-400 hover:text-blue-600 transition-colors p-1">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>
                                            <button onClick={() => handleDelete(expert.id)} className="text-gray-400 hover:text-red-600 transition-colors p-1">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Experience</span>
                                            <span className="font-medium text-gray-900">{expert.experience || 'N/A'}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Properties</span>
                                            <span className="font-medium text-gray-900">{expert.properties}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Locations</span>
                                            <span className="font-medium text-gray-900 text-right max-w-[60%] truncate">
                                                {expert.locations && expert.locations.length > 0 ? expert.locations.join(", ") : 'N/A'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
