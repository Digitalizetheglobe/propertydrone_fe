"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import imagedefault1 from "@/public/images/OIP (1).jpg";
import imagedefault2 from "@/public/images/OIP (8).jpg";
import imagedefault3 from "@/public/images/today8.jpg";

interface BlogPost {
    id: number;
    slug: string;
    image: string;
    title: string;
    date: string;
}

export default function HomePageBlogs() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    const defaultImages = [
        imagedefault1.src,
        imagedefault2.src,
        imagedefault3.src
    ];

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                interface BlogApiImage {
                    url: string;
                    [key: string]: any;
                }

                interface BlogApiPost {
                    id: number;
                    slug: string;
                    blogImage?: BlogApiImage[];
                    blogTitle: string;
                    createdAt: string;
                    [key: string]: any;
                }

                interface BlogPostMapped {
                    id: number;
                    slug: string;
                    image: string;
                    title: string;
                    date: string;
                }

                const mapped: BlogPostMapped[] = (data as BlogApiPost[]).map((post: BlogApiPost, idx: number): BlogPostMapped => ({
                    id: post.id,
                    slug: post.slug,
                    image: (() => {
                        // Check for blogImage array (from multer)
                        const bImg = post.blogImage?.[0]?.path || post.blogImage?.[0]?.url;
                        // Or if it's a direct string property like `image` (depends on API)
                        const imgPath = bImg || post.image;

                        if (imgPath) {
                            if (typeof imgPath === 'string') {
                                return imgPath.startsWith('http') ? imgPath : `http://localhost:5000${imgPath}`;
                            }
                        }
                        return defaultImages[idx % 3];
                    })(),
                    title: post.blogTitle,
                    date: new Date(post.createdAt).toLocaleDateString(),
                }));
                setBlogPosts(mapped);
            })
            .catch(err => console.error("Failed to fetch blogs:", err));
    }, []);

    const lastThreePosts = blogPosts.slice(-3);

    return (
        <div className="container ">
            {/* Header Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mx-auto max-w-6xl px-4 ">
                <div>
                    <p
                        className="uppercase test-[16px] sm:text-[18px]  text-[#172747] leading-[100%] tracking-normal mb-2"
                        style={{ fontFamily: 'Lato' }}
                    >INSIGHTS & UPDATES</p>
                    <h2 style={{
                        fontFamily: "'Ivy Mode'",
                        fontWeight: 300,
                        lineHeight: '140%',
                        letterSpacing: '0'
                    }}
                        className="text-[#172747] mb-0  text-[32px] sm:text-[50px]"
                    >
                        Make smarter decisions with expert-written blogs.
                    </h2>
                </div>
                <div className="items-baseline ">
                    <div className="items-center mt-0 md:mt-10">
                        <p className="text-[#172747]">
                            Get the latest on market trends, property tips, and expert insights. Our blog brings you quick, valuable reads to guide your real estate journey with confidence.
                        </p>
                        <Link href="/blog">
                            <button className="bg-[#172747] cursor-pointer text-white border border-[#172747] mt-4 px-4 py-2 rounded hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] transition">
                                Read Our Blog
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl px-4 gap-8 pb-10">
                {lastThreePosts.map((post, i) => (
                    <div
                        key={post.id}
                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                    >
                        <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-md">Blog</span>
                                    <span className="text-xs text-gray-500 font-medium">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#172747] mb-4 line-clamp-2 leading-snug group-hover:text-blue-800 transition-colors">
                                    {post.title}
                                </h3>
                                <div className="mt-auto flex items-center text-sm font-bold text-[#172747] group-hover:text-blue-600 transition-colors">
                                    Read Article <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
