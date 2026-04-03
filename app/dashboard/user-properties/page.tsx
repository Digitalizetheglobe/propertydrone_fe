"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserProperty {
    id: number;
    userName: string;
    city: string;
    propertyCategory: string;
    propertyType: string;
    buildingName: string;
    locality: string;
    bhk: string;
    area: string;
    areaUnit: string;
    furnishing: string;
    shareWithAgents: boolean;
    status: string;
    createdAt: string;
}

export default function UserSubmittedProperties() {
    const [properties, setProperties] = useState<UserProperty[]>([]);
    const [selectedProperty, setSelectedProperty] = useState<UserProperty | null>(null);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const response = await axios.get("http://localhost:9000/api/user-properties");
            setProperties(response.data);
        } catch (error) {
            console.error("Error fetching user properties:", error);
        }
    };

    const handleStatusUpdate = async (id: number, newStatus: string) => {
        try {
            await axios.put(`http://localhost:9000/api/user-properties/${id}`, { status: newStatus });
            fetchProperties();
            if (selectedProperty?.id === id) {
                setSelectedProperty(prev => prev ? { ...prev, status: newStatus } : null);
            }
        } catch (e) {
            console.error("Error updating status", e);
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this lead?")) return;
        try {
            await axios.delete(`http://localhost:9000/api/user-properties/${id}`);
            setProperties(properties.filter(p => p.id !== id));
            if (selectedProperty?.id === id) setSelectedProperty(null);
        } catch (error) {
            console.error("Error deleting property:", error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">User Submitted Properties</h1>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                User Name
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Location
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((property) => (
                            <tr key={property.id} className="hover:bg-gray-50">
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap font-medium">{property.userName}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{property.bhk} {property.propertyCategory}</p>
                                    <p className="text-gray-500 text-xs">{property.propertyType}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{property.city}</p>
                                    <p className="text-gray-500 text-xs">{property.locality}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        className={`relative inline-block px-3 py-1 font-semibold leading-tight rounded-full ${property.status === "Verified" ? "bg-green-200 text-green-900" :
                                            property.status === "Rejected" ? "bg-red-200 text-red-900" :
                                                "bg-yellow-200 text-yellow-900"
                                            }`}
                                    >
                                        <span aria-hidden className="absolute inset-0 opacity-50 rounded-full"></span>
                                        <span className="relative">{property.status}</span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{new Date(property.createdAt).toLocaleDateString()}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button
                                        onClick={() => setSelectedProperty(property)}
                                        className="text-blue-600 hover:text-blue-900 mr-4"
                                    >
                                        View
                                    </button>
                                    <button
                                        onClick={() => handleDelete(property.id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Detail Modal */}
            {selectedProperty && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold">Property Details</h2>
                            <button
                                onClick={() => setSelectedProperty(null)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                âœ•
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <p className="text-sm text-gray-500">User Name</p>
                                <p className="font-semibold">{selectedProperty.userName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">City</p>
                                <p className="font-semibold">{selectedProperty.city}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Locality</p>
                                <p className="font-semibold">{selectedProperty.locality}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Building</p>
                                <p className="font-semibold">{selectedProperty.buildingName || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Category</p>
                                <p className="font-semibold">{selectedProperty.propertyCategory}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Type</p>
                                <p className="font-semibold">{selectedProperty.propertyType}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">BHK</p>
                                <p className="font-semibold">{selectedProperty.bhk || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Area</p>
                                <p className="font-semibold">{selectedProperty.area} {selectedProperty.areaUnit}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Furnishing</p>
                                <p className="font-semibold">{selectedProperty.furnishing || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Share with Agents</p>
                                <p className="font-semibold">{selectedProperty.shareWithAgents ? 'Yes' : 'No'}</p>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <p className="text-sm text-gray-500 mb-2">Update Status</p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleStatusUpdate(selectedProperty.id, 'Pending')}
                                    className={`px-4 py-2 rounded ${selectedProperty.status === 'Pending' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                                >
                                    Pending
                                </button>
                                <button
                                    onClick={() => handleStatusUpdate(selectedProperty.id, 'Verified')}
                                    className={`px-4 py-2 rounded ${selectedProperty.status === 'Verified' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                                >
                                    Verified
                                </button>
                                <button
                                    onClick={() => handleStatusUpdate(selectedProperty.id, 'Rejected')}
                                    className={`px-4 py-2 rounded ${selectedProperty.status === 'Rejected' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                                >
                                    Rejected
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
