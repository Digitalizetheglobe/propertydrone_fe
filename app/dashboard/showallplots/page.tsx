"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Link from "next/link";

export default function ShowAllPlots() {
    const [plots, setPlots] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editingPlot, setEditingPlot] = useState<any | null>(null);

    // Fetch plots
    const fetchPlots = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:9000/api/plots");
            setPlots(response.data);
        } catch (err: any) {
            setError(err.message || "Failed to fetch plots");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlots();
    }, []);

    // Delete plot
    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this plot?")) return;
        try {
            await axios.delete(`http://localhost:9000/api/plots/${id}`);
            setPlots(plots.filter((plot) => plot.id !== id));
        } catch (err: any) {
            alert("Failed to delete plo: " + err.message);
        }
    };

    // Edit plot
    const handleEditClick = (plot: any) => {
        // Prepare data for form (flatten arrays to comma separated strings)
        setEditingPlot({
            ...plot,
            amenities: Array.isArray(plot.amenities) ? plot.amenities.join(", ") : plot.amenities,
            images: Array.isArray(plot.images) ? plot.images.join(", ") : plot.images,
        });
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingPlot) return;

        try {
            const payload = {
                ...editingPlot,
                amenities: typeof editingPlot.amenities === 'string' ? editingPlot.amenities.split(",").map((s: string) => s.trim()) : editingPlot.amenities,
                images: typeof editingPlot.images === 'string' ? editingPlot.images.split(",").map((s: string) => s.trim()) : editingPlot.images,
            };

            await axios.put(`http://localhost:9000/api/plots/${editingPlot.id}`, payload);
            alert("Plot updated successfully!");
            setEditingPlot(null);
            fetchPlots(); // Refresh list
        } catch (err: any) {
            alert("Failed to update plot: " + err.message);
        }
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setEditingPlot((prev: any) => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value,
                },
            }));
        } else {
            setEditingPlot((prev: any) => ({ ...prev, [name]: value }));
        }
    };

    if (loading) return <div className="p-6">Loading...</div>;
    if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">All Plots</h1>
                <Link href="/dashboard/add-plots" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Add Plots
                </Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ID / Listing ID
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Title / Project
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Location
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Price
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {plots.map((plot) => (
                            <tr key={plot.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{plot.id}</p>
                                    <p className="text-gray-600 text-xs">{plot.listingId}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap font-semibold">{plot.title}</p>
                                    <p className="text-gray-600 text-xs">{plot.project}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{plot.location?.city || '-'}</p>
                                    <p className="text-gray-600 text-xs">{plot.location?.area || '-'}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">â‚¹{plot.priceDetails?.totalPrice || '-'}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button
                                        onClick={() => handleEditClick(plot)}
                                        className="text-blue-600 hover:text-blue-900 mr-4"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(plot.id)}
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

            {/* Edit Modal */}
            {editingPlot && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">Edit Plot #{editingPlot.id}</h2>
                        <form onSubmit={handleUpdate} className="space-y-4">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input name="listingId" placeholder="Listing ID" value={editingPlot.listingId || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="title" placeholder="Title" value={editingPlot.title || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="project" placeholder="Project" value={editingPlot.project || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="propertyType" placeholder="Type" value={editingPlot.propertyType || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="propertyStatus" placeholder="Status" value={editingPlot.propertyStatus || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                            </div>

                            {/* Location */}
                            <h3 className="font-semibold mt-2">Location</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input name="location.area" placeholder="Area" value={editingPlot.location?.area || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="location.city" placeholder="City" value={editingPlot.location?.city || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="location.state" placeholder="State" value={editingPlot.location?.state || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="location.country" placeholder="Country" value={editingPlot.location?.country || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                            </div>

                            {/* Price */}
                            <h3 className="font-semibold mt-2">Price</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input name="priceDetails.totalPrice" placeholder="Total Price" value={editingPlot.priceDetails?.totalPrice || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="priceDetails.pricePerSqFt" placeholder="Price/SqFt" value={editingPlot.priceDetails?.pricePerSqFt || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                            </div>

                            {/* Plot Details */}
                            <h3 className="font-semibold mt-2">Plot Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input name="plotDetails.areaSqYard" placeholder="Sq Yard" value={editingPlot.plotDetails?.areaSqYard || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="plotDetails.areaSqFt" placeholder="Sq Ft" value={editingPlot.plotDetails?.areaSqFt || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="plotDetails.facing" placeholder="Facing" value={editingPlot.plotDetails?.facing || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                            </div>

                            {/* Other Info */}
                            <h3 className="font-semibold mt-2">Other Info</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input name="possession" placeholder="Possession" value={editingPlot.possession || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="postedBy" placeholder="Posted By" value={editingPlot.postedBy || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                            </div>

                            {/* Contact */}
                            <h3 className="font-semibold mt-2">Contact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input name="contact.name" placeholder="Contact Name" value={editingPlot.contact?.name || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="contact.mobile" placeholder="Contact Mobile" value={editingPlot.contact?.mobile || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                            </div>

                            {/* Arrays */}
                            <h3 className="font-semibold mt-2">Details</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <input name="amenities" placeholder="Amenities (comma separated)" value={editingPlot.amenities || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                                <input name="images" placeholder="Images (comma separated)" value={editingPlot.images || ''} onChange={handleEditChange} className="border p-2 rounded w-full" />
                            </div>

                            <div className="flex justify-end space-x-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setEditingPlot(null)}
                                    className="px-4 py-2 border rounded hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
