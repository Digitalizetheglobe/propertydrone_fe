"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blogimg from '@/public/images/bgimage2.png';

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

const BlogDetail = () => {
  const params = useParams();
  const blogId = typeof params?.id === 'string' ? params.id : '1';

  const dummyBlogs: Blog[] = [
    {
      id: 1,
      blogTitle: 'The Future of Smart Homes in Real Estate',
      blogDescription: 'Exploring how smart home technology is revolutionizing property values and buyer expectations.',
      blogContent: `
      <h2>The Rise of Smart Home Technology</h2>
      <p>In recent years, smart home technology has transitioned from a luxury to a standard expectation among homebuyers. From smart thermostats to voice-activated assistants, these technologies are transforming the way we interact with our living spaces.</p>
    
      <h3>What Is a Smart Home?</h3>
      <p>A smart home is equipped with devices that automate tasks normally handled by humans. These include lighting, heating, security systems, and even appliances. They are often connected through a central hub and controlled via smartphone apps or voice commands.</p>
    
    
      <h3>Impact on Property Value</h3>
      <p>Smart homes are becoming a key factor in determining property value. According to a report by Coldwell Banker, 81% of buyers are more likely to purchase a home if smart technology is already installed. Features like smart security systems and energy-efficient lighting appeal to both tech-savvy millennials and eco-conscious families.</p>
    
      <ul>
        <li>Increased security with smart locks and cameras</li>
        <li>Energy savings through automated thermostats</li>
        <li>Improved comfort and convenience</li>
      </ul>
    
    
      <h3>Challenges to Adoption</h3>
      <p>Despite the benefits, there are barriers to widespread smart home adoption. These include data privacy concerns, upfront costs, and the complexity of integrating devices from different manufacturers.</p>
    
      <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
        "Smart homes should enhance our lives, not complicate them." – Sarah Johnson
      </blockquote>
    
      <h3>Real Estate Trends</h3>
      <p>Real estate agents are now highlighting smart features in listings. Properties with pre-installed smart systems are often sold faster and at a premium. In competitive markets, smart technology can be a true differentiator.</p>
    
    
      <h3>The Future of Smart Living</h3>
      <p>As 5G and IoT technologies mature, smart homes will evolve into intelligent ecosystems that anticipate needs and learn from user behavior. Soon, your home may adjust lighting based on your mood, restock groceries automatically, or alert you to maintenance issues before they become costly repairs.</p>
    
      <p>For real estate professionals, staying informed about these trends is essential. Understanding the smart home landscape allows agents and investors to cater to future-ready buyers.</p>
    `
,    
      blogImage: [{
        path: '/images/bgimage2.png',
        filename: 'smart-home-bg.jpg',
        fieldName: 'blogImage',
        originalName: 'smart-home-bg.jpg'
      }],
      writer: 'Sarah Johnson',
      category: 'TECHNOLOGY',
      tags: ['Smart Homes', 'Technology', 'Market Trends', 'Investment'],
      slug: 'future-smart-homes-real-estate',
      bookmarks: null,
      createdAt: '2023-11-15T10:00:00.000Z',
      updatedAt: '2023-11-15T10:00:00.000Z'
    },
    // ... more blogs (add the rest here)
  ];

  const blog = dummyBlogs.find(b => b.id.toString() === blogId) || dummyBlogs[0];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  return (
    <>
      {/* Hero Section */}
      <section id="top" className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          {blog.blogImage && blog.blogImage.length > 0 ? (
            <Image
              src={blog.blogImage[0].path}
              alt={blog.blogTitle}
              fill
              style={{ objectFit: "cover" }}
              priority
              className="brightness-75"
            />
          ) : (
            <Image
              src="/images/bgimage2.png"
              alt="Default blog image"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="brightness-75"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <p className="text-sm uppercase font-medium tracking-wider mb-4">
              {blog.category}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6" data-aos="fade-up">
              {blog.blogTitle}
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
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
            <div className="flex justify-center" data-aos="fade-up" data-aos-delay="300">
              <a
                href="#blog-content"
                className="bg-white text-[#172747] hover:bg-[#172747] hover:text-white border border-white px-8 py-3 rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
              >
                Read Article
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section id="blog-content" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={createMarkup(blog.blogContent)}
            data-aos="fade-up"
          />

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200" data-aos="fade-up">
              <h4 className="text-lg font-medium mb-4">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <Link key={index} href={`/blog/tag/${tag.toLowerCase()}`}>
                    <span className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm cursor-pointer transition-colors">
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to blogs button */}
          <div className="mt-12 flex justify-center" data-aos="fade-up">
            <Link href="/blog">
              <button className="bg-[#172747] rounded-md text-white hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] px-8 py-3 flex items-center justify-center gap-2 transition-colors duration-300">
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
