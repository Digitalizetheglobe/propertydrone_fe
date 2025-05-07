import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import heroBackground from '../../public/images/7578550-uhd_3840_2160_30fps 1.png'; // Adjust the path as necessary
const BlogPage = () => {
    const blogPosts = [
        {
          id: 1,
          title: 'Top 5 Areas to Invest in Pune',
          date: '10th April 2023',
          image: heroBackground,
          link: '/blog/invest-pune'
        },
        {
          id: 2,
          title: 'What to Know Before Buying a New Flat',
          date: '10th April 2023',
          image: heroBackground,
          link: '/blog/buying-new-flat'
        },
        {
          id: 3,
          title: 'What to Know Before Buying a New Flat',
          date: '10th April 2023',
          image: heroBackground,
          link: '/blog/buying-new-flat-tips'
        },
        {
          id: 4,
          title: 'Top 5 Areas to Invest in Pune',
          date: '10th April 2023',
          image: heroBackground,
          link: '/blog/pune-investment'
        },
        {
          id: 5,
          title: 'What to Know Before Buying a New Flat',
          date: '10th April 2023',
          image: heroBackground,
          link: '/blog/flat-buying-guide'
        },
        {
          id: 6,
          title: 'What to Know Before Buying a New Flat',
          date: '10th April 2023',
          image: heroBackground,
          link: '/blog/flat-purchase-guide'
        },
        {
          id: 7,
          title: 'Top 5 Areas to Invest in Pune',
          date: '11th April 2023',
          image: heroBackground,
          link: '/blog/pune-property'
        },
        {
          id: 8,
          title: 'What to Know Before Buying a New Flat',
          date: '11th April 2023',
          image: heroBackground,
          link: '/blog/flat-buying-checklist'
        },
        {
          id: 9,
          title: 'What to Know Before Buying a New Flat',
          date: '11th April 2023',
          image: heroBackground,
          link: '/blog/new-flat-guide'
        },
      ];

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
            At PropertyDrone Realty,  we’re constantly growing and evolving. Find out more about our latest deals, appointments, team news and more.
            </p>
            
            
          </div>
        </div>
      </section>  
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
      27 Articles
            </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <div className="relative h-48 w-full mb-2">
              <Image 
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="mt-2 flex flex-col">
              <span className="text-sm text-gray-500">{post.date}</span>
              <h3 className="text-lg font-medium mb-2">{post.title}</h3>
              <Link href={post.link}>
                <div className="mt-auto">
                  <button className="bg-blue-800 text-white p-1 px-3 rounded-md flex items-center justify-center">
                    <span>→</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    );
};

export default BlogPage;