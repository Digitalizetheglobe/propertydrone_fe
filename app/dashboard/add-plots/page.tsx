"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function AddPlots() {
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        listingId: "",
        title: "",
        slug: "",
        project: "",
        propertyType: "",
        propertyStatus: "",
        location: {
            area: "",
            city: "",
            state: "",
            country: "",
        },
        plotDetails: {
            areaSqYard: "",
            areaSqFt: "",
            facing: "",
        },
        priceDetails: {
            pricePerSqFt: "",
            totalPrice: "",
        },
        possession: "",
        amenities: "", // We will convert this to array on submit
        demo1: "",
        demo2: "",
        demo3: "",
        demo4: "",
        postedBy: "",
        contact: {
            name: "",
            mobile: "",
        },
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    // Auto-generate slug when title changes
    React.useEffect(() => {
        const slug = formData.title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');

        setFormData(prev => ({ ...prev, slug }));
    }, [formData.title]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Handle nested fields
        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setFormData((prev: any) => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value,
                },
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const files = Array.from(e.target.files);
        setImages(files);

        // Create preview URLs for the selected images
        const previews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages(previews);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage("");

        try {
            // Prepare payload
            const payload = {
                ...formData,
                amenities: formData.amenities.split(",").map((item) => item.trim()).filter(Boolean),
            };

            const formDataToSend = new FormData();
            formDataToSend.append('plotData', JSON.stringify(payload));

            if (images.length > 0) {
                images.forEach((image: File) => {
                    formDataToSend.append('images', image);
                });
            }

            const response = await axios.post("http://localhost:9000/api/plots", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log("Response:", response.data);
            setMessage("Plot added successfully!");
            setImages([]);
            setPreviewImages([]);

            // Reset form (optional, could just clear specific fields)
            setFormData({
                listingId: "",
                title: "",
                slug: "",
                project: "",
                propertyType: "",
                propertyStatus: "",
                location: { area: "", city: "", state: "", country: "" },
                plotDetails: { areaSqYard: "", areaSqFt: "", facing: "" },
                priceDetails: { pricePerSqFt: "", totalPrice: "" },
                possession: "",
                amenities: "",
                demo1: "",
                demo2: "",
                demo3: "",
                demo4: "",
                postedBy: "",
                contact: { name: "", mobile: "" },
            });

        } catch (error: any) {
            console.error("Error adding plot:", error);
            setMessage(error.response?.data?.message || "Error adding plot");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Add New Plot</h1>

            {message && (
                <div className={`p-4 mb-4 rounded ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Basic Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="listingId" placeholder="Listing ID" value={formData.listingId} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="slug" placeholder="Slug (Auto-generated)" value={formData.slug} onChange={handleChange} className="border p-2 rounded w-full bg-gray-50" />
                    <input name="project" placeholder="Project Name" value={formData.project} onChange={handleChange} className="border p-2 rounded w-full" />
                    <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="border p-2 rounded w-full">
                        <option value="">Select Property Type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                    <input name="propertyStatus" placeholder="Property Status" value={formData.propertyStatus} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                {/* Location */}
                <h2 className="text-xl font-semibold mt-4">Location</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="location.area" placeholder="Area" value={formData.location.area} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="location.city" placeholder="City" value={formData.location.city} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="location.state" placeholder="State" value={formData.location.state} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="location.country" placeholder="Country" value={formData.location.country} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                {/* Plot Details */}
                <h2 className="text-xl font-semibold mt-4">Plot Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input name="plotDetails.areaSqYard" type="number" placeholder="Area (Sq Yard)" value={formData.plotDetails.areaSqYard} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="plotDetails.areaSqFt" type="number" placeholder="Area (Sq Ft)" value={formData.plotDetails.areaSqFt} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="plotDetails.facing" placeholder="Facing" value={formData.plotDetails.facing} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                {/* Price Details */}
                <h2 className="text-xl font-semibold mt-4">Price Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="priceDetails.pricePerSqFt" type="number" placeholder="Price Per Sq Ft" value={formData.priceDetails.pricePerSqFt} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="priceDetails.totalPrice" type="number" placeholder="Total Price" value={formData.priceDetails.totalPrice} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                {/* Other Details */}
                <h2 className="text-xl font-semibold mt-4">Other Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="possession" placeholder="Possession" value={formData.possession} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="postedBy" placeholder="Posted By" value={formData.postedBy} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="reraNumber" placeholder="RERA Number" value={(formData as any).reraNumber || ''} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="videoUrl" placeholder="YouTube Video URL" value={(formData as any).videoUrl || ''} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>
                <div className="mt-4">
                    <input name="googleMapUrl" placeholder="Google Map URL" value={(formData as any).googleMapUrl || ''} onChange={handleChange} className="border p-2 rounded w-full mb-4" />
                    <textarea name="description" placeholder="Description / SEO Description" value={(formData as any).description || ''} onChange={handleChange as any} rows={4} className="border p-2 rounded w-full" />
                </div>

                {/* Contact */}
                <h2 className="text-xl font-semibold mt-4">Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="contact.name" placeholder="Contact Name" value={formData.contact.name} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="contact.mobile" placeholder="Contact Mobile" value={formData.contact.mobile} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                {/* Amenities & Images */}
                <h2 className="text-xl font-semibold mt-4">Amenities & Images</h2>
                <div className="grid grid-cols-1 gap-4">
                    <input name="amenities" placeholder="Amenities (comma separated)" value={formData.amenities} onChange={handleChange} className="border p-2 rounded w-full" />
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Multiple Images
                        </label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full p-2 border border-gray-300 rounded-md bg-white"
                        />

                        {/* Image Previews */}
                        {previewImages.length > 0 && (
                            <div className="mt-4">
                                <p className="text-sm font-medium text-gray-700 mb-2">Image Previews:</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {previewImages.map((preview, index) => (
                                        <div key={index} className="relative h-32 border rounded-md overflow-hidden">
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

                {/* Demo Fields */}
                <h2 className="text-xl font-semibold mt-4">Extra Info (Demo)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="demo1" placeholder="Demo 1" value={formData.demo1} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="demo2" placeholder="Demo 2" value={formData.demo2} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="demo3" placeholder="Demo 3" value={formData.demo3} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="demo4" placeholder="Demo 4" value={formData.demo4} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full mt-6"
                >
                    {isSubmitting ? "Submitting..." : "Add Plot"}
                </button>
            </form>
        </div>
    );
}
