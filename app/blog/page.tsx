
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import heroBackground2 from '../../public/images/7578550-uhd_3840_2160_30fps 1.png'; // Adjust the path as necessary
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
    
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [totalArticles, setTotalArticles] = useState(0);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('https://api.propertydronerealty.com/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch blog data');
                }
                const data = await response.json();
                setBlogPosts(data);
                setTotalArticles(data.length);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching blog data:', err);
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);
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
                <p className="text-xl">Loading blogs...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl text-red-600">Error loading blogs: {error}</p>
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
            <section className="py-6  bg-gray-100">
                <div className="container mx-auto max-w-6xl px-4 py-8">
                {/* <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                    {totalArticles} Articles
                </h2> */}
                 <motion.div
      className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {blogPosts.map((post, index) => (
       <motion.div
  key={post.id}
  className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
  variants={item}
>
   <Link href={`/blog/${post.slug}`}>
  {/* Blog Image Section */}
  <div className="relative h-48 w-full mb-2">
    {post.blogImage?.[0]?.url ? (
      <Image
        src={post.blogImage[0].url}
        alt={post.blogTitle}
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    ) : (
      <Image
        src={heroBackground2}
        alt={post.blogTitle}
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    )}
  </div>

  {/* Blog Content Section */}
  <div className="mt-2 flex flex-col p-3 pl-6">
    {/* Date */}
    <span className="text-sm text-gray-500">
      {formatDate(post.createdAt)}
    </span>

    {/* Title */}
    <h3 className="text-lg font-medium mb-2">
      {post.blogTitle}
    </h3>

    {/* Tags */}
    {/* <div className="flex flex-wrap gap-2 mb-2">
      {post.tags?.map((tag, idx) => (
        <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
          {tag}
        </span>
      ))}
    </div> */}

    {/* Description */}
    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
      {post.blogDescription}
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
    </motion.div>
            </div>
            </section>
        </>
    );
};

export default BlogPage;