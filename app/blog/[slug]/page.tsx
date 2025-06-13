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

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

const BlogDetail = ({ params }: PageProps) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Unwrap the params Promise using React.use()
  const resolvedParams = React.use(params);
  
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);
  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log('Fetching blog for slug:', resolvedParams.slug);
        const response = await fetch(`https://api.propertydronerealty.com/blogs/${resolvedParams.slug}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blog data: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received blog data:', data);
        setBlog(data);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Unable to load blog content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    if (resolvedParams.slug) {
      fetchBlog();
    }
  }, [resolvedParams.slug]);

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
         
            <Image 
              src="/images/bgimage2.png"
              alt="Default blog image" 
              fill
              style={{ objectFit: "cover" }}
             
              priority
            />
          
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          
          <div className="text-center max-w-3xl mx-auto text-white">
            <p className="text-sm uppercase font-medium tracking-wider mb-4">
              {blog.category}
            </p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                            Blogs
                        </h2>
            
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6" data-aos="fade-up">
              {blog.blogTitle}
            </h2>
            
            <p className="mb-8 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {blog.blogDescription}
            </p>
            
            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="200">
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
             */}
            {/* CTA Button */}
            {/* <div className="flex justify-center">
              <a
                href="#blog-content"
                className="bg-white text-[#172747] hover:bg-[#172747] hover:text-white border border-white px-6 py-3 rounded-[4px] flex items-center justify-center gap-2 transition-colors"
              >
                Read Article
                <ArrowRight size={16} />
              </a>
            </div> */}

          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section id="blog-content" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {blog.blogImage && blog.blogImage.length > 0 ? (
            <Image 
              src={`http://localhost:5000${blog.blogImage[0].path}`}
              alt={blog.blogTitle} 
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          ) : (
           ""
          )}
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                         {blog.blogTitle} 
                        </h1>
                        
                        <p className="text-black mb-8 ">
                            {blog.blogDescription}</p>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={createMarkup(blog.blogContent)}
            data-aos="fade-up"
          />
          
          {/* Tags */}
        
          
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