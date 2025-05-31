"use client";

// BlogDetail.jsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Upload } from "lucide-react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define TypeScript interfaces outside the component
interface Blog {
  id: number;
  blogTitle: string;
  blogDescription: string;
  blogContent: string;
  blogImage: Array<{
    path: string;
    filename: string;
    fieldName: string;
    originalName: string;
  }>;
  writer: string;
  category: string;
  tags: string[];
  slug: string;
  bookmarks: any;
  createdAt: string;
  updatedAt: string;
}

// Updated PageProps interface for Next.js 15 compatibility
interface PageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const BlogDetail = ({ params }: PageProps) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [blogId, setBlogId] = useState<string | null>(null);
  
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
    
    // Resolve params Promise and extract ID
    const resolveParams = async () => {
      try {
        const resolvedParams = await params;
        setBlogId(resolvedParams.id);
      } catch (err) {
        console.error('Error resolving params:', err);
        setError('Invalid blog ID');
        setLoading(false);
      }
    };
    
    resolveParams();
  }, [params]);
  
  useEffect(() => {
    if (!blogId) return;
    
    // Fetch the blog data when blogId is available
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://api.propertydronerealty.com/blogs/${blogId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }
        
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Unable to load blog content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlog();
  }, [blogId]);

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Function to render HTML content safely
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#172747]"></div>
      </div>
    );
  }
  
  if (error || !blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h2 className="text-2xl text-[#172747] mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-6">{error || 'Blog not found'}</p>
        <Link href="/blogs">
          <button className="bg-[#172747] rounded-[4px] text-white hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] px-6 py-3 flex items-center justify-center gap-2 transition-colors">
            Back to Blogs
          </button>
        </Link>
      </div>
    );
  }

  return (
    <> 
      {/* Hero Section */}
      <section id="top" className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          {blog.blogImage && blog.blogImage.length > 0 ? (
            <Image 
              src={`http://localhost:5000${blog.blogImage[0].path}`}
              alt={blog.blogTitle} 
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          ) : (
            <Image 
              src="/images/bgimage1.png"
              alt="Default blog image" 
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <p className="text-sm uppercase font-medium tracking-wider mb-4">
              {blog.category}
            </p>
            
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6" data-aos="fade-up">
              {blog.blogTitle}
            </h2>
            
            <p className="mb-8 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {blog.blogDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="200">
              <p className="text-sm">Written by <span className="font-medium">{blog.writer}</span></p>
              <span className="hidden sm:inline">•</span>
              <p className="text-sm">{formatDate(blog.createdAt)}</p>
              {blog.tags && blog.tags.length > 0 && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {blog.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-white/20 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href="#blog-content"
                className="bg-white text-[#172747] hover:bg-[#172747] hover:text-white border border-white px-6 py-3 rounded-[4px] flex items-center justify-center gap-2 transition-colors"
              >
                Read Article
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section id="blog-content" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={createMarkup(blog.blogContent)}
            data-aos="fade-up"
          />
          
          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-medium mb-4">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Back to blogs button */}
          <div className="mt-12 flex justify-center">
            <Link href="/blog">
              <button className="bg-[#172747] rounded-[4px] text-white hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] px-6 py-3 flex items-center justify-center gap-2 transition-colors">
                Back to All Blogs
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;