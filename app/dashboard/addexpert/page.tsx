"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from '@/app/components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faArrowLeft, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

function AddExpertContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const expertId = searchParams.get('id');
    const isEditMode = !!expertId;

    const [formData, setFormData] = useState({
        name: '',
        experience: '',
        properties: '',
        locations: '', // Comma separated string for input
        isExpert: false,
        initials: '',
        bgColor: '#1717B5',
        contactNumber: ''
    });

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (isEditMode) {
            fetchExpertDetails(expertId);
        }
    }, [expertId]);

    const fetchExpertDetails = async (id: string) => {
        try {
            const response = await fetch(`https://api.propertydronerealty.com/api/experts/${id}`);
            if (response.ok) {
                const data = await response.json();
                setFormData({
                    name: data.name,
                    experience: data.experience || '',
                    properties: data.properties.toString(),
                    locations: Array.isArray(data.locations) ? data.locations.join(', ') : '',
                    isExpert: data.isExpert,
                    initials: data.initials || '',
                    bgColor: data.bgColor || '#1717B5',
                    contactNumber: data.contactNumber || ''
                });
                if (data.image && data.image.path) {
                    setImagePreview(`http://localhost:9000${data.image.path}`);
                }
            }
        } catch (error) {
            console.error("Error fetching expert details:", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const data = new FormData();
        data.append('name', formData.name);
        data.append('experience', formData.experience);
        data.append('properties', formData.properties);

        // Convert locations string to array then to JSON string for backend
        const locationsArray = formData.locations.split(',').map(loc => loc.trim()).filter(Boolean);
        data.append('locations', JSON.stringify(locationsArray));

        data.append('isExpert', formData.isExpert.toString());
        data.append('initials', formData.initials);
        data.append('bgColor', formData.bgColor);
        data.append('contactNumber', formData.contactNumber);

        if (imageFile) {
            data.append('image', imageFile);
        }

        try {
            const url = isEditMode
                ? `https://api.propertydronerealty.com/api/experts/${expertId}`
                : 'https://api.propertydronerealty.com/api/experts';

            const method = isEditMode ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                body: data
            });

            if (response.ok) {
                setMessage(isEditMode ? 'Expert updated successfully!' : 'Expert added successfully!');
                setTimeout(() => router.push('/dashboard/experts'), 1500);
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error saving expert:", error);
            setMessage('An error occurred. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 p-8">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <div className="flex items-center gap-4 mb-8">
                        <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <h1 className="text-2xl font-bold text-gray-900">
                            {isEditMode ? 'Edit Expert' : 'Add New Expert'}
                        </h1>
                    </div>

                    {message && (
                        <div className={`p-4 mb-6 rounded-lg ${message.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="e.g. John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                                    <input
                                        type="text"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="e.g. 5+ Years"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Properties Managed</label>
                                    <input
                                        type="number"
                                        name="properties"
                                        value={formData.properties}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="e.g. 150"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Locations (comma separated)</label>
                                    <input
                                        type="text"
                                        name="locations"
                                        value={formData.locations}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="e.g. Pune, Mumbai, Bangalore"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                                    <input
                                        type="text"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="e.g. +91 9876543210"
                                    />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
                                    <div className={`border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-colors ${imagePreview ? 'bg-gray-50' : 'hover:bg-gray-50'}`}>

                                        {imagePreview ? (
                                            <div className="relative w-32 h-32 mb-4">
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover rounded-full shadow-md"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setImageFile(null);
                                                        setImagePreview(null);
                                                    }}
                                                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                                                >
                                                    <FontAwesomeIcon icon={faTimes} size="xs" />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="text-gray-400 mb-2">
                                                <FontAwesomeIcon icon={faCloudUploadAlt} size="3x" />
                                            </div>
                                        )}

                                        <div className="flex items-center justify-center w-full">
                                            <label className="cursor-pointer bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                                                <span>Upload Photo</span>
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                />
                                            </label>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-2">Recommended: Square image, max 2MB</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <input
                                        type="checkbox"
                                        id="isExpert"
                                        name="isExpert"
                                        checked={formData.isExpert}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                                    />
                                    <label htmlFor="isExpert" className="font-medium text-gray-700 cursor-pointer select-none">
                                        Mark as Official Expert
                                        <span className="block text-xs text-gray-500 font-normal mt-0.5">Displays an "Expert" badge on their profile</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon={faSave} />
                                        Save Expert
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </main >
        </div >
    );
}

export default function AddExpert() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AddExpertContent />
        </Suspense>
    );
}
