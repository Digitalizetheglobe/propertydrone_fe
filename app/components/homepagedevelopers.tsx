"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import bg1 from "@/public/images/7578550-uhd_3840_2160_30fps 1.png";
import devImg2 from "@/public/images/download (1).webp";
import devImg3 from "@/public/images/developerbgimg.png";
import devImg6 from "@/public/images/R.jpg";
import imagedefault1 from "@/public/images/OIP (1).jpg";
import imagedefault3 from "@/public/images/today8.jpg";

export default function HomePageWhyPropertyDrone() {
    const highDemandScrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="max-w-6xl mx-auto py-8">
            <div className=" rounded-lg p-6 sm:p-8">
                <div className="mb-6 flex justify-between items-end">
                    <div>
                        <h2 className="text-[#172747] mb-4 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]">
                            Our Trusted Developers
                        </h2>
                        <p className="text-[#172747] text-[18px] sm:text-[20px] font-lato leading-[150%] tracking-[1px]">
                            Partnering with the best in the industry
                        </p>
                    </div>
                </div>

                {/* High Demand Projects Slider */}
                <div className="relative">
                    <div
                        ref={highDemandScrollRef}
                        className="grid grid-rows-2 grid-flow-col gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {[
                            {
                                title: "ANP Corp",
                                builder: "Premium Developer",
                                config: "Residential & Commercial",
                                location: "Pune",
                                price: "View Details",
                                img: bg1,
                                slug: "anp-corp",
                            },
                            {
                                title: "Majestique Landmarks",
                                builder: "Majestique Developer",
                                config: "Luxury Living",
                                location: "Pune",
                                price: "View Details",
                                img: devImg2,
                                slug: "majestique-developer",
                            },
                            {
                                title: "kunal Group",
                                builder: "kunal Group",
                                config: "Premium Projects",
                                location: "Pune",
                                price: "View Details",
                                img: devImg3,
                                slug: "kunal-group",
                            },
                            {
                                title: "Kasturi Housing",
                                builder: "Kasturi",
                                config: "Ultra Luxury",
                                location: "Pune",
                                price: "View Details",
                                img: imagedefault1,
                                slug: "kasturi",
                            },
                            {
                                title: "Solitaire",
                                builder: "Solitaire",
                                config: "Integrated Townships",
                                location: "Pune",
                                price: "View Details",
                                img: imagedefault3,
                                slug: "solitaire",
                            },
                            {
                                title: "Skyi Developers",
                                builder: "Skyi Developers",
                                config: "Sustainable Homes",
                                location: "Pune",
                                price: "View Details",
                                img: devImg6,
                                slug: "skyi-developers",
                            },
                            // Duplicate Data for Scrolling Demo
                        
                        ].map((project, index) => (
                            <Link
                                href={`/estate_developer/${project.slug}`}
                                key={index}
                                className="block"
                            >
                                <div className="w-[300px] sm:w-[350px] snap-start bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex overflow-hidden h-[160px] cursor-pointer group">
                                    <div className="w-[120px] sm:w-[140px] relative h-full flex-shrink-0">
                                        <Image
                                            src={project.img}
                                            alt={project.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 p-4 flex flex-col justify-between">
                                        <div>
                                            <h3
                                                className="font-bold text-[#172747] text-lg leading-tight line-clamp-1"
                                                title={project.title}
                                            >
                                                {project.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {project.builder}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-700 font-medium line-clamp-1">
                                                {project.config}
                                            </p>
                                            <p className="text-xs text-gray-500 line-clamp-1">
                                                {project.location}
                                            </p>
                                        </div>
                                        <span className="text-sm font-semibold text-[#172747] mt-1 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                                            {project.price} <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Floating Arrow Button */}
                    {/* <button
                        onClick={() => {
                            if (highDemandScrollRef.current) {
                                const cardWidth = 350; 
                                const gap = 24;
                                const scrollAmount = (cardWidth + gap) * 2;
                                highDemandScrollRef.current.scrollBy({
                                    left: scrollAmount,
                                    behavior: "smooth",
                                });
                            }
                        }}
                        className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50  hidden xl:flex items-center justify-center w-12 h-12 cursor-pointer transition-transform duration-300 hover:scale-110"
                    >
                        <ArrowRight size={24} className="text-gray-600" />
                    </button> */}
                </div>
            </div>
        </div>
    );
}
