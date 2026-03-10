// components/PlotDetail.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Video, Copy, ExternalLink, Download, Lock, ChevronUp, ChevronDown } from 'lucide-react';
import demoimage from '@/public/images/7578550-uhd_3840_2160_30fps 1.png'; // Fallback
import image from '@/public/images/bgimage2.png'; // Background/dummy
import PropertyPopup from './propertypopup'; // Assuming this component exists as per reference

interface Plot {
    id: number;
    listingId: string;
    title: string;
    project: string;
    slug: string;
    propertyType: string;
    propertyStatus: string;
    location: {
        area: string;
        city: string;
        state: string;
        country: string;
    };
    plotDetails: {
        areaSqYard: string;
        areaSqFt: string;
        facing: string;
    };
    priceDetails: {
        pricePerSqFt: string;
        totalPrice: string;
    };
    possession: string;
    amenities: string[] | string;
    images: string[] | string;
    videoUrl?: string;
    description?: string;
    reraNumber?: string;
    googleMapUrl?: string; // Added map url
    createdAt: string;
    updatedAt: string;
    contact?: {
        name: string;
        mobile: string;
    };
}

interface PlotDetailProps {
    plot: Plot;
}

export default function PlotDetail({ plot }: PlotDetailProps) {
    const [mainImage, setMainImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showMapPopup, setShowMapPopup] = useState(false);
    const [mapUrl, setMapUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    // Helpers
    const baseUrl = "http://localhost:9000";

    const getImages = (): string[] => {
        if (Array.isArray(plot.images)) return plot.images;
        if (typeof plot.images === 'string') return plot.images.split(',').map(s => s.trim()).filter(Boolean);
        return [];
    };

    const plotImages = getImages();

    useEffect(() => {
        if (plotImages.length > 1) {
            const interval = setInterval(() => {
                setMainImage((prev) => (prev + 1) % plotImages.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [plotImages.length]);

    const handlePrevImage = () => {
        setMainImage((prev) => (prev - 1 + plotImages.length) % plotImages.length);
    };

    const handleNextImage = () => {
        setMainImage((prev) => (prev + 1) % plotImages.length);
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

    // Video ID extractor
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

    const youtubeVideoId = getYouTubeVideoId(plot.videoUrl);

    // QR Code
    useEffect(() => {
        if (plot.reraNumber) {
            // Or whatever URL you want to encode
            const text = `https://maharera.mahaonline.gov.in`;
            setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`);
        }
    }, [plot.reraNumber]);

    const handleCopy = async () => {
        if (!plot.reraNumber) return;
        try {
            await navigator.clipboard.writeText(plot.reraNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) { }
    };

    // Contact Form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your interest! We will contact you soon.');
    };

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
            <div className="min-h-screen bg-[#F1EEFF]">
                {/* Hero / Header Section */}
                <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                    <div className="absolute inset-0 h-full w-full">
                        <Image src={image} alt={plot.title} className="object-cover w-full h-full" />
                    </div>
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative flex flex-col max-w-6xl justify-center h-full ml-10 text-white px-4">
                        <h1 className="mb-4 text-white text-[32px] sm:text-[56px] font-light leading-tight tracking-wide font-['Rubik']">
                            {plot.title}
                        </h1>
                        <p className="text-white text-lg sm:text-2xl my-4 leading-none">
                            <Link href="/"><span className="hover:text-red-400 cursor-pointer">Home</span></Link> /
                            <Link href="/plots"><span className="hover:text-red-400 cursor-pointer ml-1">Plots</span></Link> /
                            <span className="text-[#FEEB8F] ml-1">{plot.title}</span>
                        </p>
                    </div>
                </section>

                <main className="max-w-6xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-6">

                        {/* Left: Gallery */}
                        <div className="md:w-1/2 self-start bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative">
                                <div className="relative h-64 md:h-96 bg-gray-200">
                                    <img
                                        src={getImageUrl(plotImages[mainImage])}
                                        alt={plot.title}
                                        className="object-cover w-full h-full cursor-pointer"
                                        onClick={() => openModal(mainImage)}
                                        onError={(e) => { (e.target as HTMLImageElement).src = demoimage.src; }}
                                    />
                                    {plotImages.length > 1 && (
                                        <>
                                            <button onClick={handlePrevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100">
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                            </button>
                                            <button onClick={handleNextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100">
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                            </button>
                                        </>
                                    )}
                                </div>
                                {/* Thumbnails */}
                                <div className="flex space-x-2 overflow-x-auto py-2 px-2 scrollbar-hide">
                                    {plotImages.map((img, index) => (
                                        <div
                                            key={index}
                                            className={`relative h-20 w-32 flex-shrink-0 cursor-pointer rounded-md overflow-hidden ${mainImage === index ? 'ring-2 ring-blue-900' : 'opacity-80'}`}
                                            onClick={() => { setMainImage(index); openModal(index); }}
                                        >
                                            <img src={getImageUrl(img)} alt={`Thumbnail ${index}`} className="object-cover w-full h-full" onError={(e) => { (e.target as HTMLImageElement).src = demoimage.src; }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div className="md:w-1/2 bg-white rounded-lg p-6 shadow-md">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">{plot.title}</h1>
                            <div className="flex items-center text-sm text-orange-500 mb-6">
                                <MapPin className="w-4 h-4 mr-1" />
                                {plot.location?.area}, {plot.location?.city}
                            </div>

                            <h2 className="text-xl font-bold mb-4">{plot.project}</h2>
                            <div className="mb-4">
                                <span className={`px-3 py-1 text-sm font-medium rounded-full ${plot.propertyType === 'Commercial' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                                    {plot.propertyType}
                                </span>
                                <span className="ml-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                    {plot.propertyStatus}
                                </span>
                            </div>

                            <div className="border border-gray-200 rounded-lg mb-6 p-4 bg-gray-50">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm text-gray-600">Total Price</div>
                                        <div className="text-lg font-bold text-[#172747]">₹{plot.priceDetails?.totalPrice || 'Contact'}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">Rate / Sq.Ft</div>
                                        <div className="text-lg font-bold">₹{plot.priceDetails?.pricePerSqFt || '-'}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">Plot Area</div>
                                        <div className="text-lg font-bold">{plot.plotDetails?.areaSqFt} sq.ft</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">Possession</div>
                                        <div className="text-lg font-bold">{plot.possession || 'Ready'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row w-full mt-4">
                                <a href="tel:9561477575" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">Call Now</a>
                                <a href={`https://wa.me/919561477575?text=Hi, I am interested in ${plot.title}`} target="_blank" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">WhatsApp</a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                        {/* Left Col: Location, Description, Amenities */}
                        <div className="space-y-6">
                            {/* Location Box */}
                            <div className="bg-white rounded-lg shadow-sm border p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                                        <MapPin className="mr-2 text-gray-600" size={20} /> Location
                                    </h2>
                                    <button
                                        onClick={() => {
                                            setMapUrl(plot.googleMapUrl || `https://www.google.com/maps/search/?api=1&query=${plot.location?.area}+${plot.location?.city}`);
                                            setShowMapPopup(true);
                                        }}
                                        className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-green-700 transition"
                                    >
                                        📍 View on Map
                                    </button>
                                </div>
                                <div className="text-gray-700 bg-gray-50 p-3 rounded">
                                    {plot.location?.area}, {plot.location?.city}, {plot.location?.state}, {plot.location?.country}
                                </div>
                            </div>

                            {/* Amenities */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold mb-4 text-[#172747]">Amenities / Features</h2>
                                <div className="flex flex-wrap gap-2">
                                    {Array.isArray(plot.amenities)
                                        ? plot.amenities.map((am, i) => <span key={i} className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm">{am}</span>)
                                        : typeof plot.amenities === 'string'
                                            ? plot.amenities.split(',').map((am, i) => <span key={i} className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm">{am.trim()}</span>)
                                            : <p className="text-gray-500">No amenities listed.</p>
                                    }
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold mb-4 text-[#172747]">About This Plot</h2>
                                <p className="text-gray-700 leading-relaxed font-sans whitespace-pre-wrap">
                                    {plot.description || `${plot.title} is a premium plot located in the heart of ${plot.location?.area}. It offers a great opportunity for ${plot.propertyType} development.`}
                                </p>
                            </div>
                        </div>

                        {/* Right Col: Video, Contact */}
                        <div className="space-y-6">
                            {/* Video Section */}
                            {youtubeVideoId && (
                                <div className="bg-white rounded-lg shadow-sm border p-6">
                                    <h2 className="text-lg flex items-center text-[#172747] mb-4 font-semibold">
                                        <Video className="mr-2 text-gray-600" size={20} /> Video Tour
                                    </h2>
                                    <div className="relative bg-gray-900 rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
                                            title="Property video"
                                            className="absolute top-0 left-0 w-full h-full"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Contact Form */}
                            <div className="bg-[#172747] rounded-lg shadow-md p-6 text-white">
                                <h2 className="text-xl font-semibold mb-4">Contact Owner</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} className="w-full p-3 rounded bg-gray-700 text-white border-none" required />
                                    <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full p-3 rounded bg-gray-700 text-white border-none" required />
                                    <input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleInputChange} className="w-full p-3 rounded bg-gray-700 text-white border-none" required />
                                    <textarea name="message" placeholder="Message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full p-3 rounded bg-gray-700 text-white border-none" required></textarea>
                                    <button type="submit" className="w-full bg-white text-[#172747] py-3 rounded font-bold hover:bg-gray-100 transition">Send Enquiry</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* QR Code Section */}
                    {plot.reraNumber && (
                        <div className="max-w-6xl mx-auto py-10 mt-6">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                                <div className="bg-[#172747] text-white p-4">
                                    <h2 className="text-xl font-bold text-center">RERA QR Code</h2>
                                </div>
                                <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-8">
                                    <div className="text-center">
                                        {qrCodeUrl && (
                                            <div className="inline-block border p-2 rounded mb-2">
                                                <img src={qrCodeUrl} alt="RERA QR" className="w-40 h-40" />
                                            </div>
                                        )}
                                        <div className="font-mono font-bold text-lg mb-2">{plot.reraNumber}</div>
                                        <button onClick={handleCopy} className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition mx-auto">
                                            <Copy size={16} /> {copied ? 'Copied' : 'Copy Number'}
                                        </button>
                                    </div>
                                    <div className="max-w-md text-gray-600 text-sm">
                                        <p className="mb-2">Scan this QR code to verify RERA details on the official website.</p>
                                        <p>Project details are available at <a href="https://maharera.mahaonline.gov.in" target="_blank" className="text-blue-600 underline">maharera.mahaonline.gov.in</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </main>

                {/* Image Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                            <img src={getImageUrl(plotImages[currentImageIndex])} className="max-h-full max-w-full object-contain" alt="Fullscreen" onError={(e) => { (e.target as HTMLImageElement).src = demoimage.src; }} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
