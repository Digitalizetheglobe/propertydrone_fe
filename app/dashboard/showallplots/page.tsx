"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import Link from "next/link";

export default function ShowAllPlots() {
    const [plots, setPlots] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editingPlot, setEditingPlot] = useState<any | null>(null);
    const [newImages, setNewImages] = useState<File[]>([]);
    const [previewNewImages, setPreviewNewImages] = useState<string[]>([]);

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
        // Prepare data for form (flatten arrays to comma separated strings, but keep images as is)
        setEditingPlot({
            ...plot,
            amenities: Array.isArray(plot.amenities) ? plot.amenities.join(", ") : plot.amenities,
        });
        setNewImages([]);
        setPreviewNewImages([]);
    };

    const handleNewImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const files = Array.from(e.target.files);
        setNewImages(files);

        // Create preview URLs for the selected images
        const previews = files.map((file) => URL.createObjectURL(file));
        setPreviewNewImages(previews);
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingPlot) return;

        try {
            const payload = {
                ...editingPlot,
                amenities: typeof editingPlot.amenities === 'string' ? editingPlot.amenities.split(",").map((s: string) => s.trim()) : editingPlot.amenities,
            };

            const formDataToSend = new FormData();
            formDataToSend.append('plotData', JSON.stringify(payload));

            if (newImages.length > 0) {
                newImages.forEach((image: File) => {
                    formDataToSend.append('images', image);
                });
            }

            await axios.put(`http://localhost:9000/api/plots/${editingPlot.id}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
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

            {/* Cards Layout */}
            {plots.length === 0 ? (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-4">
                    No plots found.
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {plots.map((plot) => (
                        <div key={plot.id} className="bg-white shadow-lg rounded-lg p-6 transition-all hover:shadow-xl">
                            <h3 className="text-2xl font-bold">{plot.title || 'N/A'}</h3>
                            <p className="text-gray-600">
                                {plot.location?.area || 'N/A'}, {plot.location?.city || 'N/A'}
                            </p>

                            {/* Images */}
                            {plot.images && Array.isArray(plot.images) && plot.images.length > 0 && (
                                <div className="mt-4">
                                    <h4 className="text-lg font-semibold mb-2">Plot Images</h4>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                        {plot.images.map((imgObj: any, imgIndex: number) => {
                                            const image = typeof imgObj === 'string' ? imgObj : imgObj?.path;
                                            if (!image || typeof image !== 'string' || image === 'undefined' || image === 'null' || image.trim() === '') return null;

                                            const cleanPath = image.replace(/\\/g, '/');
                                            const finalPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
                                            const fullUrl = image.startsWith('http') ? image : `http://localhost:9000${finalPath}`;

                                            return (
                                                <div key={imgIndex} className="relative h-32 border rounded overflow-hidden">
                                                    <Image
                                                        src={fullUrl}
                                                        alt={`${plot.title} - Image ${imgIndex + 1}`}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                        className="object-cover"
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                <p><strong>Listing ID:</strong> {plot.listingId || 'N/A'}</p>
                                <p><strong>Project:</strong> {plot.project || 'N/A'}</p>
                                <p><strong>City:</strong> {plot.location?.city || 'N/A'}</p>
                                <p><strong>Area:</strong> {plot.location?.area || 'N/A'}</p>
                                <p><strong>Type:</strong> {plot.propertyType || 'N/A'}</p>
                                <p><strong>Status:</strong> {plot.propertyStatus || 'N/A'}</p>
                                <p><strong>Total Price:</strong> {plot.priceDetails?.totalPrice ? `₹${plot.priceDetails.totalPrice}` : 'N/A'}</p>
                                <p><strong>Price/SqFt:</strong> {plot.priceDetails?.pricePerSqFt ? `₹${plot.priceDetails.pricePerSqFt}` : 'N/A'}</p>
                                <p><strong>Area (Sq Yard):</strong> {plot.plotDetails?.areaSqYard || 'N/A'}</p>
                                <p><strong>Area (Sq Ft):</strong> {plot.plotDetails?.areaSqFt || 'N/A'}</p>
                                <p><strong>Facing:</strong> {plot.plotDetails?.facing || 'N/A'}</p>
                                <p><strong>Possession:</strong> {plot.possession || 'N/A'}</p>
                            </div>

                            {plot.slug && <p className="mt-4 text-sm text-gray-500"><strong>Slug:</strong> {plot.slug}</p>}

                            <div className="flex justify-end gap-4 mt-6">
                                <button
                                    onClick={() => handleDelete(plot.id)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    Delete
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                                    onClick={() => handleEditClick(plot)}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

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
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Upload Multiple New Images
                                    </label>
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleNewImageChange}
                                        className="w-full p-2 border border-gray-300 rounded-md bg-white"
                                    />
                                    {/* Existing Images Display */}
                                    {editingPlot.images && Array.isArray(editingPlot.images) && editingPlot.images.length > 0 && (
                                        <div className="mt-4">
                                            <p className="text-sm font-medium text-gray-700 mb-2">Existing Images:</p>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                                {editingPlot.images.map((img: any, index: number) => {
                                                    const image = typeof img === 'string' ? img : img?.path;
                                                    if (!image || typeof image !== 'string' || image === 'undefined' || image === 'null' || image.trim() === '') return null;

                                                    const cleanPath = image.replace(/\\/g, '/');
                                                    const finalPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
                                                    const fullUrl = image.startsWith('http') ? image : `http://localhost:9000${finalPath}`;

                                                    return (
                                                        <div key={`exist-${index}`} className="relative h-32 border rounded-md overflow-hidden bg-gray-100">
                                                            <Image
                                                                src={fullUrl}
                                                                alt={`Existing ${index + 1}`}
                                                                fill
                                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                                style={{ objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                    {/* New Image Previews */}
                                    {previewNewImages.length > 0 && (
                                        <div className="mt-4">
                                            <p className="text-sm font-medium text-gray-700 mb-2">New Image Previews:</p>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                                {previewNewImages.map((preview, index) => (
                                                    <div key={`new-${index}`} className="relative h-32 border rounded-md overflow-hidden bg-gray-100">
                                                        <Image
                                                            src={preview}
                                                            alt={`Preview ${index + 1}`}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                            style={{ objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
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
