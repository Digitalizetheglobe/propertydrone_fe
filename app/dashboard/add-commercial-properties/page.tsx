"use client";
import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";

function AddCommercialPropertyContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const editId = searchParams.get("id");

    const [formData, setFormData] = useState({
        listingId: "",
        slug: "",
        title: "",
        buildingName: "",
        unitNumber: "",
        floor: "",
        location: "",
        city: "",
        builtUpArea: "",
        carpetArea: "",
        reservedCarParking: "",
        reserved2WheelerParking: "",
        amenities: "",
        furnishedDetails: {
            furnished: false,
            workstations: "",
            cabins: "",
            conferenceRoom: false,
            pantry: false,
            airConditioning: false
        },
        pricePerSqFt: "",
        totalPrice: "",
        propertyType: "Office",
        propertyStatus: "Available",
        possession: "",
        demo1: "",
        demo2: "",
        demo3: "",
        demo4: "",
        postedBy: "",
        images: "",
        videoUrl: "",
        googleMapUrl: "",
        description: "",
        reraNumber: "",
        contact: {
            name: "",
            mobile: ""
        }
    });

    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // New states for file upload
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    // Fetch details if in edit mode
    useEffect(() => {
        if (editId) {
            const fetchDetails = async () => {
                try {
                    const response = await axios.get(`https://api.propertydronerealty.com/api/commercial-properties/${editId}`);
                    const data = response.data;

                    // Transform amenity array to string for form if needed
                    let amenitiesStr = data.amenities;
                    if (Array.isArray(data.amenities)) {
                        amenitiesStr = data.amenities.join(", ");
                    }

                    // Similarly for images representation in text field (for existing ones)
                    let imagesStr = data.images;
                    if (Array.isArray(data.images)) {
                        imagesStr = data.images.join(", ");
                    }

                    setFormData({
                        ...data,
                        amenities: amenitiesStr || "",
                        images: imagesStr || "",
                        furnishedDetails: data.furnishedDetails || {
                            furnished: false,
                            workstations: "",
                            cabins: "",
                            conferenceRoom: false,
                            pantry: false,
                            airConditioning: false
                        }
                    });
                } catch (error) {
                    console.error("Error fetching details:", error);
                    setMessage("Failed to load property details");
                }
            };
            fetchDetails();
        }
    }, [editId]);

    // Auto-generate slug (Only on create)
    useEffect(() => {
        if (!editId) {
            const base = formData.title || formData.buildingName;
            if (base) {
                const slug = base.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
                setFormData(prev => ({ ...prev, slug }));
            }
        }
    }, [formData.title, formData.buildingName, editId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setFormData((prev: any) => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
                }
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setFormData((prev: any) => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: checked
                }
            }));
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const files = Array.from(e.target.files);
            const newPreviews = files.map(file => URL.createObjectURL(file));

            setImageFiles(prev => [...prev, ...files]);
            setImagePreviews(prev => [...prev, ...newPreviews]);
        }
    };

    const removeImage = (index: number, isExisting: boolean) => {
        if (isExisting) {
            if (typeof formData.images === 'string') {
                const currentImages = formData.images.split(",").map(s => s.trim()).filter(Boolean);
                const newImages = currentImages.filter((_, i) => i !== index);
                setFormData(prev => ({ ...prev, images: newImages.join(", ") }));
            }
        } else {
            setImageFiles(prev => prev.filter((_, i) => i !== index));
            setImagePreviews(prev => prev.filter((_, i) => i !== index));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage("");

        try {
            const submitData = new FormData();

            // Append basic fields
            Object.entries(formData).forEach(([key, value]) => {
                if (key === 'furnishedDetails' || key === 'contact') {
                    submitData.append(key, JSON.stringify(value));
                } else if (key === 'images') {
                    // images is stored as comma-separated string in formData
                    submitData.append(key, String(value || ""));
                } else {
                    // Convert other values (boolean, number, string) to string
                    submitData.append(key, String(value || ''));
                }
            });

            // Append new files
            imageFiles.forEach(file => {
                submitData.append("commercialPropertyImages", file);
            });

            // Ensure numeric fields are appended correctly
            submitData.set('reservedCarParking', String(Number(formData.reservedCarParking) || 0));
            submitData.set('reserved2WheelerParking', String(Number(formData.reserved2WheelerParking) || 0));
            submitData.set('builtUpArea', String(Number(formData.builtUpArea) || 0));
            submitData.set('carpetArea', String(Number(formData.carpetArea) || 0));
            submitData.set('pricePerSqFt', String(Number(formData.pricePerSqFt) || 0));
            submitData.set('totalPrice', String(Number(formData.totalPrice) || 0));
            if (formData.floor) submitData.set('floor', String(formData.floor));
            submitData.set('amenities', formData.amenities);

            if (editId) {
                await axios.put(`https://api.propertydronerealty.com/api/commercial-properties/${editId}`, submitData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                setMessage("Commercial Property updated successfully!");
            } else {
                await axios.post("https://api.propertydronerealty.com/api/commercial-properties", submitData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                setMessage("Commercial Property added successfully!");

                setFormData({
                    listingId: "",
                    slug: "",
                    title: "",
                    buildingName: "",
                    unitNumber: "",
                    floor: "",
                    location: "",
                    city: "",
                    builtUpArea: "",
                    carpetArea: "",
                    reservedCarParking: "",
                    reserved2WheelerParking: "",
                    amenities: "",
                    furnishedDetails: {
                        furnished: false,
                        workstations: "",
                        cabins: "",
                        conferenceRoom: false,
                        pantry: false,
                        airConditioning: false
                    },
                    pricePerSqFt: "",
                    totalPrice: "",
                    propertyType: "Office",
                    propertyStatus: "Available",
                    possession: "",
                    demo1: "",
                    demo2: "",
                    demo3: "",
                    demo4: "",
                    postedBy: "",
                    images: "",
                    videoUrl: "",
                    googleMapUrl: "",
                    description: "",
                    reraNumber: "",
                    contact: { name: "", mobile: "" }
                });
                setImageFiles([]);
                setImagePreviews([]);
            }
            window.scrollTo(0, 0);

        } catch (error: any) {
            console.error(error);
            setMessage(error.response?.data?.message || "Error saving property");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-6">{editId ? "Edit Commercial Property" : "Add Commercial Property"}</h1>

            {message && (
                <div className={`p-4 mb-4 rounded ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <input name="listingId" placeholder="Listing ID" value={formData.listingId} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="title" placeholder="Title (Optional)" value={formData.title} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="slug" placeholder="Slug (Auto)" value={formData.slug} readOnly className="border p-2 rounded w-full bg-gray-50" />
                    <input name="buildingName" placeholder="Building Name" value={formData.buildingName} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="unitNumber" placeholder="Unit Number" value={formData.unitNumber} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="floor" placeholder="Floor" value={formData.floor} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="location" placeholder="Location Area (e.g. Andheri East)" value={formData.location} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                {/* Area & Parking */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input name="builtUpArea" type="number" placeholder="Built-up Area" value={formData.builtUpArea} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="carpetArea" type="number" placeholder="Carpet Area" value={formData.carpetArea} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="reservedCarParking" type="number" placeholder="Car Parking" value={formData.reservedCarParking} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="reserved2WheelerParking" type="number" placeholder="2-Wheeler Parking" value={formData.reserved2WheelerParking} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                {/* Price & Status */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input name="pricePerSqFt" type="number" placeholder="Price Per Sq Ft" value={formData.pricePerSqFt} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="totalPrice" type="number" placeholder="Total Price" value={formData.totalPrice} onChange={handleChange} className="border p-2 rounded w-full" />
                    <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="border p-2 rounded w-full">
                        <option value="Office">Office</option>
                        <option value="Shop">Shop</option>
                        <option value="Showroom">Showroom</option>
                        <option value="Warehouse">Warehouse</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                    <select name="propertyStatus" value={formData.propertyStatus} onChange={handleChange} className="border p-2 rounded w-full">
                        <option value="Available">Available</option>
                        <option value="Sold">Sold</option>
                        <option value="Leased">Leased</option>
                    </select>
                    <input name="possession" placeholder="Possession (e.g. Immediate)" value={formData.possession} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                {/* Furnished Details */}
                <div className="border p-4 rounded bg-gray-50">
                    <h3 className="font-semibold mb-3">Furnished Details</h3>
                    <div className="flex items-center gap-4 mb-4">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" name="furnishedDetails.furnished" checked={formData.furnishedDetails.furnished} onChange={handleCheckboxChange} />
                            Is Furnished?
                        </label>
                    </div>
                    {formData.furnishedDetails.furnished && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input name="furnishedDetails.workstations" type="number" placeholder="Workstations" value={formData.furnishedDetails.workstations} onChange={handleChange} className="border p-2 rounded w-full" />
                            <input name="furnishedDetails.cabins" type="number" placeholder="Cabins" value={formData.furnishedDetails.cabins} onChange={handleChange} className="border p-2 rounded w-full" />
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="furnishedDetails.conferenceRoom" checked={formData.furnishedDetails.conferenceRoom} onChange={handleCheckboxChange} />
                                Conference Room
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="furnishedDetails.pantry" checked={formData.furnishedDetails.pantry} onChange={handleCheckboxChange} />
                                Pantry
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="furnishedDetails.airConditioning" checked={formData.furnishedDetails.airConditioning} onChange={handleCheckboxChange} />
                                Air Conditioning
                            </label>
                        </div>
                    )}
                </div>

                {/* Media & Other */}
                <div className="space-y-4">
                    <textarea name="amenities" placeholder="Amenities (comma separated)" value={formData.amenities} onChange={handleChange} className="border p-2 rounded w-full" rows={2} />

                    {/* Image Upload Section */}
                    <div className="border p-4 rounded bg-gray-50">
                        <label className="block font-medium mb-2">Property Images</label>
                        <div className="flex flex-wrap gap-4 mb-4">
                            {/* Existing Images */}
                            {formData.images && typeof formData.images === 'string' && formData.images.split(',').filter(Boolean).map((img, index) => {
                                const trimmedImg = img.trim();
                                const displayUrl = trimmedImg.startsWith('http') ? trimmedImg : `http://localhost:9000${trimmedImg.startsWith('/') ? '' : '/'}${trimmedImg}`;
                                return (
                                    <div key={`existing-${index}`} className="relative w-24 h-24">
                                        <img src={displayUrl} alt="Existing" className="w-full h-full object-cover rounded border" />
                                        <button type="button" onClick={() => removeImage(index, true)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">x</button>
                                    </div>
                                );
                            })}

                            {/* New Previews */}
                            {imagePreviews.map((preview, index) => (
                                <div key={`new-${index}`} className="relative w-24 h-24">
                                    <img src={preview} alt="New" className="w-full h-full object-cover rounded border" />
                                    <button type="button" onClick={() => removeImage(index, false)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">x</button>
                                </div>
                            ))}
                        </div>

                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>

                    <input name="videoUrl" placeholder="YouTube Video URL" value={formData.videoUrl} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="googleMapUrl" placeholder="Google Map URL" value={formData.googleMapUrl} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="reraNumber" placeholder="RERA Number" value={formData.reraNumber} onChange={handleChange} className="border p-2 rounded w-full" />
                    <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border p-2 rounded w-full" rows={3} />
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
                    <input name="contact.name" placeholder="Contact Name" value={formData.contact.name} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="contact.mobile" placeholder="Contact Mobile" value={formData.contact.mobile} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="postedBy" placeholder="Posted By" value={formData.postedBy} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                {/* Demo Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <input name="demo1" placeholder="Highlights 1" value={formData.demo1} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="demo2" placeholder="Highlights 2" value={formData.demo2} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="demo3" placeholder="Highlights 3" value={formData.demo3} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input name="demo4" placeholder="Highlights 4" value={formData.demo4} onChange={handleChange} className="border p-2 rounded w-full" />
                </div>

                <button type="submit" disabled={isSubmitting} className="bg-[#172747] text-white px-6 py-3 rounded hover:bg-opacity-90 w-full font-semibold">
                    {isSubmitting ? "Submitting..." : (editId ? "Update Commercial Property" : "Add Commercial Property")}
                </button>
            </form>
        </div>
    );
}

export default function AddCommercialProperty() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AddCommercialPropertyContent />
        </Suspense>
    );
}
