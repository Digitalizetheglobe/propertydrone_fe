"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Edit, Trash2, Plus } from "lucide-react";

export default function ShowAllCommercialProperties() {
    const [properties, setProperties] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchProperties = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://api.propertydronerealty.com/api/commercial-properties");
            setProperties(response.data);
        } catch (err: any) {
            setError(err.message || "Failed to fetch properties");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this property?")) return;
        try {
            await axios.delete(`http://api.propertydronerealty.com/api/commercial-properties/${id}`);
            setProperties(properties.filter((p) => p.id !== id));
        } catch (err: any) {
            alert("Failed to delete: " + err.message);
        }
    };

    if (loading) return <div className="p-6">Loading...</div>;
    if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">All Commercial Properties</h1>
                <Link href="/dashboard/add-commercial-properties" className="bg-[#172747] text-white px-4 py-2 rounded hover:bg-opacity-90 flex items-center gap-2">
                    <Plus size={18} /> Add Property
                </Link>
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title/Building</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price/SqFt</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {properties.map((prop) => (
                            <tr key={prop.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prop.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{prop.propertyType}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prop.title || prop.buildingName || '-'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prop.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{prop.pricePerSqFt}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${prop.propertyStatus === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                        {prop.propertyStatus}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link href={`/dashboard/add-commercial-properties?id=${prop.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                                        <Edit size={18} />
                                    </Link>
                                    <button onClick={() => handleDelete(prop.id)} className="text-red-600 hover:text-red-900">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
