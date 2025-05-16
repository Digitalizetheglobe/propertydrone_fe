"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import heroBackground2 from '../../public/images/7578550-uhd_3840_2160_30fps 1.png';
import heroBackground from '../../public/images/bgimage2.png';

const BlogPage = () => {
    interface BlogPost {
        id: string;
        blogImage: { url: string }[];
        blogTitle: string;
        createdAt: string;
        tags: string[];
        blogDescription: string;
        writer?: string;
        slug: string;
    }
    
    // Static dummy data
    const dummyBlogPosts: BlogPost[] = [
        {
            id: '1',
            blogImage: [{ url: '/images/dummy1.jpg' }],
            blogTitle: 'The Future of Real Estate Technology',
            createdAt: '2023-10-15T00:00:00.000Z',
            tags: ['Technology', 'Innovation'],
            blogDescription: 'Exploring how new technologies are transforming the real estate industry.',
            slug: 'future-real-estate-tech'
        },
        {
            id: '2',
            blogImage: [{ url: '/images/dummy2.jpg' }],
            blogTitle: 'Sustainable Housing Trends in 2023',
            createdAt: '2023-09-22T00:00:00.000Z',
            tags: ['Sustainability', 'Trends'],
            blogDescription: 'Discover the latest trends in eco-friendly and sustainable housing solutions.',
            slug: 'sustainable-housing-trends'
        },
        {
            id: '3',
            blogImage: [{ url: '/images/dummy3.jpg' }],
            blogTitle: 'Investment Opportunities in Commercial Real Estate',
            createdAt: '2023-08-05T00:00:00.000Z',
            tags: ['Investment', 'Commercial'],
            blogDescription: 'Key insights into profitable commercial real estate investments this year.',
            slug: 'commercial-real-estate-investment'
        },
        // Add more dummy posts as needed
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        
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
                
                <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                    <div className="text-center max-w-3xl mx-auto text-white">
                        <p className="text-sm uppercase font-medium tracking-wider text-gray-300 mb-4">NEWS AND INSIGHTS</p>
                        
                        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                            Blogs
                        </h1>
                        
                        <p className="text-gray-200 mb-8 max-w-xl mx-auto">
                            At PropertyDrone Realty, we're constantly growing and evolving. Find out more about our latest deals, appointments, team news and more.
                        </p>
                    </div>
                </div>
            </section>  
            
            <section className="py-6 bg-gray-100">
                <div className="container mx-auto max-w-6xl px-4 py-8">
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                        {dummyBlogPosts.length} Articles
                    </h2>
                    
                    <motion.div
                        className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {dummyBlogPosts.map((post) => (
                            <motion.div
                                key={post.id}
                                className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                                variants={item}
                            >
                                <div className="relative h-48 w-full mb-2">
                                    <Image
                                        src={heroBackground2} // Using your fallback image for all dummy posts
                                        alt={post.blogTitle}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                    />
                                </div>

                                <div className="mt-2 flex flex-col p-3 pl-6">
                                    <span className="text-sm text-gray-500">
                                        {formatDate(post.createdAt)}
                                    </span>

                                    <h3 className="text-lg font-medium mb-2">
                                        {post.blogTitle}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {post.tags.map((tag, idx) => (
                                            <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                        {post.blogDescription}
                                    </p>

                                    <Link href={`/blog/${post.slug}`}>
                                        <div className="mt-auto">
                                            <button className="bg-[#172747] hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] text-white p-1 px-3 rounded-md flex items-center justify-center">
                                                <span>→</span>
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;