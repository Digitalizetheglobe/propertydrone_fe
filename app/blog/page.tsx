
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
    blogImage: { path: string }[];
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
        console.log('Blog posts fetched:', Array.isArray(data) ? data.length : 'Not an array', data);
        // Ensure data is an array
        const postsArray = Array.isArray(data) ? data : [];
        setBlogPosts(postsArray);
        setTotalArticles(postsArray.length);
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
      <section className="relative py-12 bg-gray-100 min-h-screen z-10">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          {blogPosts.length > 0 && (
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 text-center">
              {totalArticles} Articles
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.length === 0 && !loading && (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-600">No blog posts available at the moment.</p>
              </div>
            )}
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id || index}
                className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                style={{ willChange: 'opacity, transform' }}
              >
                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                  {/* Blog Image Section */}
                  <div className="relative h-48 w-full">
                    {post.blogImage?.[0]?.path ? (
                      <img
                        src={(() => {
                          const path = post.blogImage[0].path;
                          if (path.startsWith('http')) return path;
                          const cleanPath = path.replace(/\\/g, '/');
                          return cleanPath.startsWith('/')
                            ? `https://api.propertydronerealty.com${cleanPath}`
                            : `https://api.propertydronerealty.com/${cleanPath}`;
                        })()}
                        alt={post.blogTitle}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    ) : (
                      <Image
                        src={heroBackground2}
                        alt={post.blogTitle}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-t-lg"
                      />
                    )}
                  </div>

                  {/* Blog Content Section */}
                  <div className="flex flex-col flex-1 p-4">
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
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                      {post.blogDescription}
                    </p>

                    {/* Read More Button */}
                    <div className="mt-auto">
                      <button
                        className="bg-[#172747] hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] 
    text-white px-4 py-2 rounded-md flex items-center justify-center 
    transition-all duration-300 cursor-pointer group"
                      >
                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
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

export default BlogPage;