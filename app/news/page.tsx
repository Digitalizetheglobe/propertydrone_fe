
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import heroBackground2 from '../../public/images/7578550-uhd_3840_2160_30fps 1.png'; // Adjust the path as necessary
import heroBackground from '../../public/images/bgimage2.png';
const NewsPage = () => {
    interface NewsPost {
        id: string;
        newsImage: { url: string }[];
        newsTitle: string;
        createdAt: string;
        tags: string[];
        newsDescription: string;
        writer?: string;
        slug: string;
    }

    const [newsPosts, setNewsPosts] = useState<NewsPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [totalArticles, setTotalArticles] = useState(0);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:5000/news');
                if (!response.ok) {
                    throw new Error('Failed to fetch news data');
                }
                const data = await response.json();
                console.log('News posts fetched:', Array.isArray(data) ? data.length : 'Not an array', data);
                // Ensure data is an array
                const postsArray = Array.isArray(data) ? data : [];
                setNewsPosts(postsArray);
                setTotalArticles(postsArray.length);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching news data:', err);
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                setLoading(false);
            }
        };

        fetchNews();
    }, []);
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    };

    // Function to format date
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        // Function to add ordinal suffix to day
        const getOrdinalSuffix = (day: number): string => {
            if (day > 3 && day < 21) return 'th';
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl">Loading news...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl text-red-600">Error loading news: {error}</p>
            </div>
        );
    }

    return (
        <>
            <section className="relative min-h-screen">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBackground}
                        alt="Luxury Property"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                    <div className="text-center max-w-3xl mx-auto text-white">
                        <p className="text-sm uppercase font-medium tracking-wider text-gray-300 mb-4">Latest Insights</p>

                        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                            News & Articles
                        </h1>

                        <p className="text-gray-200 mb-8 max-w-xl mx-auto">
                            Stay updated with the latest trends, market analysis, and company updates from PropertyDrone Realty.
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative py-12 bg-gray-100 min-h-screen z-10">
                <div className="container mx-auto max-w-6xl px-4 py-12">
                    {newsPosts.length > 0 && (
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 text-center">
                            {totalArticles} Articles
                        </h2>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsPosts.length === 0 && !loading && (
                            <div className="col-span-full text-center py-12">
                                <p className="text-xl text-gray-600">No news posts available at the moment.</p>
                            </div>
                        )}
                        {newsPosts.map((post, index) => (
                            <motion.div
                                key={post.id || index}
                                className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.03 }}
                                style={{ willChange: 'opacity, transform' }}
                            >
                                <Link href={`/news/${post.slug}`} className="flex flex-col h-full">
                                    {/* News Image Section */}
                                    <div className="relative h-48 w-full">
                                        {post.newsImage?.[0]?.url ? (
                                            <Image
                                                src={post.newsImage[0].url}
                                                alt={post.newsTitle}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                className="rounded-t-lg"
                                            />
                                        ) : (
                                            <Image
                                                src={heroBackground2}
                                                alt={post.newsTitle}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                className="rounded-t-lg"
                                            />
                                        )}
                                    </div>

                                    {/* News Content Section */}
                                    <div className="flex flex-col flex-1 p-4">
                                        {/* Date */}
                                        <span className="text-sm text-gray-500">
                                            {formatDate(post.createdAt)}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-lg font-medium mb-2">
                                            {post.newsTitle}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                                            {post.newsDescription}
                                        </p>

                                        {/* Read More Button */}
                                        <div className="mt-auto">
                                            <button className="bg-[#172747] hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] text-white p-1 px-3 cursor-pointer rounded-md flex items-center justify-center">
                                                <span>→</span>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>

                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsPage;
