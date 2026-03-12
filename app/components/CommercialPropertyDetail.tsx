// components/CommercialPropertyDetail.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Video, Share2, Copy, Download, Building, Home, Ruler, Calendar, ShieldCheck, Phone, Mail, User, Info, CheckCircle, Car, ArrowLeft } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import demoimage from '@/public/images/7578550-uhd_3840_2160_30fps 1.png'; // Fallback
import image from '@/public/images/bgimage2.png'; // Background/dummy
import PropertyPopup from './propertypopup'; // Assuming this component exists

interface CommercialProperty {
    id: number;
    listingId: string;
    slug?: string;
    title: string;
    buildingName: string;
    unitNumber: string;
    floor: string;
    location: string;
    city: string;
    builtUpArea: number;
    carpetArea: number;
    reservedCarParking: number;
    reserved2WheelerParking: number;
    amenities: string | string[];
    furnishedDetails: {
        furnished: boolean;
        workstations: number;
        cabins: number;
        conferenceRoom: boolean;
        pantry: boolean;
        airConditioning: boolean;
    };
    pricePerSqFt: number;
    totalPrice: number;
    propertyType: string;
    propertyStatus: string;
    possession: string;
    images: string[] | string;
    videoUrl?: string;
    googleMapUrl?: string;
    description?: string;
    reraNumber?: string;
    postedBy?: string;
    contact?: {
        name: string;
        mobile: string;
    };
    demo1?: string;
    demo2?: string;
    demo3?: string;
    demo4?: string;
    createdAt: string;
}

interface CommercialPropertyDetailProps {
    property: CommercialProperty;
}

export default function CommercialPropertyDetail({ property }: CommercialPropertyDetailProps) {
    const [mainImage, setMainImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showMapPopup, setShowMapPopup] = useState(false);
    const [mapUrl, setMapUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    // Helpers
    const baseUrl = "https://api.propertydronerealty.com";

    const getImages = (): string[] => {
        if (Array.isArray(property.images)) return property.images;
        if (typeof property.images === 'string') return property.images.split(',').map(s => s.trim()).filter(Boolean);
        return [];
    };

    const propertyImages = getImages();

    useEffect(() => {
        if (propertyImages.length > 1) {
            const interval = setInterval(() => {
                setMainImage((prev) => (prev + 1) % propertyImages.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [propertyImages.length]);

    const handlePrevImage = () => {
        setMainImage((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
    };

    const handleNextImage = () => {
        setMainImage((prev) => (prev + 1) % propertyImages.length);
    };

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const getImageUrl = (path: string) => {
        if (!path) return demoimage.src;
        if (path.startsWith('http')) return path;
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `${baseUrl}${cleanPath}`;
    };

    const getYouTubeVideoId = (url: string | undefined) => {
        if (!url) return '';
        try {
            const urlObj = new URL(url);
            if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
                return urlObj.searchParams.get('v') || '';
            } else if (urlObj.hostname === 'youtu.be') {
                return urlObj.pathname.split('/').pop() || '';
            }
        } catch (e) { return ''; }
        return '';
    };

    const youtubeVideoId = getYouTubeVideoId(property.videoUrl);

    useEffect(() => {
        if (property.reraNumber) {
            const text = `https://maharera.mahaonline.gov.in`;
            setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`);
        }
    }, [property.reraNumber]);

    const handleCopy = async () => {
        if (!property.reraNumber) return;
        try {
            await navigator.clipboard.writeText(property.reraNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) { }
    };

    // Contact Form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: `I am interested in ${property.title || property.buildingName}`,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your interest! We will contact you soon.');
    };

    const amenitiesList = typeof property.amenities === 'string'
        ? property.amenities.split(',').filter(Boolean)
        : Array.isArray(property.amenities) ? property.amenities : [];

    return (
        <>
            {showMapPopup && (
                <div className="fixed inset-0 z-[9999]">
                    <PropertyPopup onClose={() => setShowMapPopup(false)} onSubmitSuccess={() => {
                        setShowMapPopup(false);
                        window.open(mapUrl, '_blank', 'noopener,noreferrer');
                    }} />
                </div>
            )}

            <div className="bg-gray-50 min-h-screen">
                {/* Header Image */}
                <div className="relative h-[400px] md:h-[500px]">
                    <Image
                        src={propertyImages.length > 0 ? getImageUrl(propertyImages[0]) : image}
                        alt="Background"
                        fill
                        className="object-cover brightness-50"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
                        <span className="bg-[#172747] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 tracking-wider uppercase">
                            {property.propertyType} â€¢ {property.propertyStatus}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-['Rubik'] drop-shadow-lg">
                            {property.title || property.buildingName}
                        </h1>
                        <p className="text-xl md:text-2xl font-light flex items-center gap-2 drop-shadow-md">
                            <MapPin size={24} /> {property.location}, {property.city}
                        </p>
                        <p className="mt-4 text-yellow-300 font-bold text-2xl">
                            Price: ₹{property.totalPrice ? (property.totalPrice / 10000000).toFixed(2) + ' Cr' : 'Contact for Price'}
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-8 -mt-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Main Content (Left) */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Short Summary Cards */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition">
                                    <Ruler className="text-blue-600 mb-2" size={24} />
                                    <span className="text-gray-500 text-xs uppercase font-semibold">Carpet Area</span>
                                    <span className="text-gray-800 font-bold">{property.carpetArea} sq.ft</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition">
                                    <Building className="text-blue-600 mb-2" size={24} />
                                    <span className="text-gray-500 text-xs uppercase font-semibold">Built-Up Area</span>
                                    <span className="text-gray-800 font-bold">{property.builtUpArea} sq.ft</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition">
                                    <Calendar className="text-blue-600 mb-2" size={24} />
                                    <span className="text-gray-500 text-xs uppercase font-semibold">Possession</span>
                                    <span className="text-gray-800 font-bold">{property.possession}</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition">
                                    <Car className="text-blue-600 mb-2" size={24} />
                                    <span className="text-gray-500 text-xs uppercase font-semibold">Parking</span>
                                    <span className="text-gray-800 font-bold">{property.reservedCarParking} Car</span>
                                </div>
                            </div>

                            {/* Image Gallery */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                                <div className="relative h-[400px] bg-black group">
                                    <img
                                        src={getImageUrl(propertyImages[mainImage])}
                                        alt="Main Property Image"
                                        className="w-full h-full object-contain cursor-pointer"
                                        onClick={() => openModal(mainImage)}
                                        onError={(e) => { (e.target as HTMLImageElement).src = demoimage.src; }}
                                    />
                                    {propertyImages.length > 1 && (
                                        <>
                                            <button onClick={handlePrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition opacity-0 group-hover:opacity-100">
                                                <ArrowLeft size={20} />
                                            </button>
                                            <button onClick={handleNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition opacity-0 group-hover:opacity-100 rotate-180">
                                                <ArrowLeft size={20} />
                                            </button>
                                        </>
                                    )}
                                </div>
                                <div className="p-4 flex gap-2 overflow-x-auto">
                                    {propertyImages.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className={`relative w-24 h-20 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 ${mainImage === idx ? 'border-blue-600' : 'border-transparent'}`}
                                            onClick={() => setMainImage(idx)}
                                        >
                                            <img src={getImageUrl(img)} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = demoimage.src; }} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Property Details Grid */}
                            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-[#172747] mb-6 border-b pb-2">Property Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                    <div className="flex justify-between items-center border-b border-dashed pb-2">
                                        <span className="text-gray-600">Property ID</span>
                                        <span className="font-semibold text-gray-900">{property.listingId || property.id}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-dashed pb-2">
                                        <span className="text-gray-600">Price Per Sq.Ft</span>
                                        <span className="font-semibold text-gray-900">₹{property.pricePerSqFt}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-dashed pb-2">
                                        <span className="text-gray-600">Building Name</span>
                                        <span className="font-semibold text-gray-900">{property.buildingName}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-dashed pb-2">
                                        <span className="text-gray-600">Floor</span>
                                        <span className="font-semibold text-gray-900">{property.floor}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-dashed pb-2">
                                        <span className="text-gray-600">Furnished Status</span>
                                        <span className={`font-semibold px-2 py-0.5 rounded ${property.furnishedDetails?.furnished ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                            {property.furnishedDetails?.furnished ? 'Furnished' : 'Unfurnished'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-dashed pb-2">
                                        <span className="text-gray-600">Workstations</span>
                                        <span className="font-semibold text-gray-900">{property.furnishedDetails?.workstations || '-'}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-dashed pb-2">
                                        <span className="text-gray-600">Cabins</span>
                                        <span className="font-semibold text-gray-900">{property.furnishedDetails?.cabins || '-'}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-dashed pb-2">
                                        <span className="text-gray-600">Pantry</span>
                                        <span className="font-semibold text-gray-900">{property.furnishedDetails?.pantry ? 'Yes' : 'No'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-[#172747] mb-4">Description</h2>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {property.description || `A premium ${property.propertyType} available for sale in ${property.location}, ${property.city}. This property offers modern amenities and is situated in a prime commercial hub.`}
                                </p>
                            </div>

                            {/* Amenities */}
                            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-[#172747] mb-6">Amenities & Features</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {amenitiesList.map((amenity, idx) => (
                                        <div key={idx} className="flex items-center text-gray-700">
                                            <CheckCircle className="text-green-500 mr-2" size={18} />
                                            {amenity.trim()}
                                        </div>
                                    ))}
                                    {amenitiesList.length === 0 && <span className="text-gray-500 italic">No specific amenities listed.</span>}
                                </div>
                            </div>

                            {/* Video */}
                            {youtubeVideoId && (
                                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                                    <h2 className="text-2xl font-bold text-[#172747] mb-4 flex items-center gap-2"> <Video /> Property Video Tour</h2>
                                    <div className="aspect-w-16 aspect-h-9 w-full bg-gray-900 rounded-lg overflow-hidden relative" style={{ paddingBottom: '56.25%' }}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute top-0 left-0 w-full h-full"
                                        ></iframe>
                                    </div>
                                </div>
                            )}

                            {/* Location Map */}
                            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold text-[#172747] flex items-center gap-2"><MapPin /> Location Map</h2>
                                    <button
                                        onClick={() => {
                                            setMapUrl(property.googleMapUrl || `https://www.google.com/maps/search/?api=1&query=${property.location}+${property.city}`);
                                            setShowMapPopup(true);
                                        }}
                                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                                    >
                                        View Full Map
                                    </button>
                                </div>
                                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center text-gray-500">
                                    <p>Click "View Full Map" to see exact location.</p>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar (Right) */}
                        <div className="space-y-8">

                            {/* Contact Card */}
                            <div className="bg-[#172747] rounded-xl shadow-lg p-6 text-white sticky top-24">
                                <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Interested in this property?</h3>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-white/10 p-3 rounded-full">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">{property.postedBy || 'Property Drone Expert'}</p>
                                        <p className="text-gray-300 text-sm">Sales Manager</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Mobile Number"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                                        onChange={handleInputChange}
                                    ></textarea>
                                    <button className="w-full bg-white text-[#172747] font-bold py-3 rounded-lg hover:bg-gray-100 transition shadow-lg">
                                        Send Enquiry
                                    </button>
                                </form>

                                <div className="flex gap-2">
                                    <a href="tel:9561477575" className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition">
                                        <Phone size={18} /> Call
                                    </a>
                                    <a href={`https://wa.me/919561477575?text=Hi, I am interested in ${property.title}`} target="_blank" className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition">
                                        <FaWhatsapp size={18} /> WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* RERA Card */}
                            {property.reraNumber && (
                                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
                                    <h3 className="text-lg font-bold text-[#172747] mb-4">RERA Verification</h3>
                                    {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" className="w-32 h-32 mx-auto mb-4 border p-2 rounded" />}
                                    <div className="bg-gray-100 rounded px-3 py-2 font-mono text-sm mb-3 break-all">
                                        {property.reraNumber}
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className="text-blue-600 text-sm font-medium hover:underline flex items-center justify-center gap-1 mx-auto"
                                    >
                                        <Copy size={14} /> {copied ? 'Copied!' : 'Copy RERA ID'}
                                    </button>
                                    <p className="text-xs text-gray-500 mt-4">Scan QR to verify property details on MahaRERA website.</p>
                                </div>
                            )}

                        </div>

                    </div>
                </div>

                {/* Modal for Images */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 p-2">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <div className="w-full h-full p-4 md:p-10 flex items-center justify-center">
                            <img src={getImageUrl(propertyImages[currentImageIndex])} className="max-h-full max-w-full object-contain" />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
