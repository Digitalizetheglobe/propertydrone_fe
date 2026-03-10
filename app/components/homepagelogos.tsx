"use client";

import { useState, useRef } from "react";
import Image from "next/image";

import d1 from "@/public/images/Frame 104.png";
import d2 from "@/public/images/Frame 105.png";
import d3 from "@/public/images/Frame 106.png";
import d4 from "@/public/images/Frame 107.png";
import d5 from "@/public/images/Frame 109.png";
import d6 from "@/public/images/Frame 110.png";
import d7 from "@/public/images/Frame 111.png";
import d8 from "@/public/images/Frame 112.png";
import d9 from "@/public/images/Frame 113.png";
import d10 from "@/public/images/Frame 114.png";
import d11 from "@/public/images/Frame 115.png";
import d12 from "@/public/images/Frame 116.png";
import d13 from "@/public/images/Frame 117.png";
// import d14 from "@/public/images/Frame 104.png";

export default function HomePageLogos() {
    // const [isPaused, setIsPaused] = useState(false); // Unused
    // const scrollContainerRef = useRef<HTMLDivElement>(null); // Unused

    const images = [
        { img: d1, link: "anp-corp" },
        { img: d2, link: "majestique-developer" },
        { img: d3, link: "krunal-groups" },
        { img: d4, link: "kasturi" },
        { img: d6, link: "skyi-developers" },
        { img: d5, link: "Solitaire" },
        { img: d7, link: "anp-corp" },
        { img: d8, link: "majestique-developer" },
        { img: d9, link: "krunal-groups" },
        { img: d10, link: "kasturi" },
        { img: d12, link: "skyi-developers" },
        { img: d11, link: "Solitaire" },
        { img: d13, link: "anp-corp" },
        // { img: d14, link: "majestique-developer" },
    ];

    // Duplicate for infinite loop
    const marqueeImages = [...images, ...images];

    return (
        <div className="w-full overflow-hidden mt-6 py-4 bg-white relative">
            <div className="flex w-max animate-scroll hover:pause-animation">
                {marqueeImages.map((imgObj, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 mx-6 transition-all duration-300 ease-in-out"
                    >
                        <div className="h-32 w-48 flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-50 hover:border-blue-100 transition-all duration-300 transform hover:scale-105">
                            <Image
                                src={imgObj.img}
                                alt={imgObj.link}
                                className="w-auto h-20 object-contain p-2 cursor-pointer transition-all duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .hover\\:pause-animation:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
