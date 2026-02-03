"use client";

// NewsDetail.jsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Upload } from "lucide-react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define TypeScript interfaces outside the component
interface News {
    id: number;
    newsTitle: string;
    newsDescription: string;
    newsContent: string;
    newsImage: Array<{
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
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

const NewsDetail = ({ params }: PageProps) => {
    const [news, setNews] = useState<News | null>(null);
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
        const fetchNews = async () => {
            try {
                console.log('Fetching news for slug:', resolvedParams.slug);
                const response = await fetch(`api.propertydronerealty.com/news/${resolvedParams.slug}`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch news data: ${response.status}`);
                }

                const data = await response.json();
                console.log('Received news data:', data);
                setNews(data);
            } catch (err) {
                console.error('Error fetching news:', err);
                setError('Unable to load news content. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (resolvedParams.slug) {
            fetchNews();
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

    if (error || !news) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
                <h2 className="text-2xl text-[#172747] mb-4">Something went wrong</h2>
                <p className="text-gray-600 mb-6">{error || 'News not found'}</p>
                <Link href="/news">
                    <button className="bg-[#172747] rounded-[4px] text-white hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] px-6 py-3 flex items-center justify-center gap-2 transition-colors">
                        Back to News
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
                        alt="Default news image"
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
                            {news.category}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                            News & Articles
                        </h2>

                        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6" data-aos="fade-up">
                            {news.newsTitle}
                        </h2>

                        <p className="mb-8 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                            {news.newsDescription}
                        </p>

                    </div>
                </div>
            </section>

            {/* News Content Section */}
            <section id="news-content" className="py-16 px-4">
                <div className="max-w-3xl mx-auto">
                    {news.newsImage && news.newsImage.length > 0 ? (
                        <Image
                            src={`api.propertydronerealty.com${news.newsImage[0].path}`}
                            alt={news.newsTitle}
                            width={800}
                            height={500}
                            style={{ objectFit: "cover" }}
                            className="w-full h-auto mb-8 rounded-lg"
                            priority
                        />
                    ) : (
                        ""
                    )}
                    <h1 className="text-3xl md:text-4xl font-serif leading-tight mb-6">
                        {news.newsTitle}
                    </h1>

                    <p className="text-black mb-8 italic">
                        {news.newsDescription}</p>
                    <div
                        className="prose prose-lg max-w-none mb-12"
                        dangerouslySetInnerHTML={createMarkup(news.newsContent)}
                        data-aos="fade-up"
                    />

                    {/* Tags (Optional) */}
                    {/* {news.tags && news.tags.length > 0 && (
             <div className="flex flex-wrap gap-2 mb-8">
               {news.tags.map((tag, idx) => (
                 <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                   {tag}
                 </span>
               ))}
             </div>
           )} */}

                    {/* Back to news button */}
                    <div className="mt-12 flex justify-center">
                        <Link href="/news">
                            <button className="bg-[#172747] rounded-[4px] text-white hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] px-6 py-3 flex items-center justify-center gap-2 transition-colors">
                                Back to All News
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsDetail;
