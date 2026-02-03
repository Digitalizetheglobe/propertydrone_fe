"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedLetters from "@/app/components/AnimatedLetters";

interface YoutubeVideo {
    id: number;
    title: string;
    description: string;
    youtube_url: string;
    author: string;
    date: string;
}

const getYoutubeVideoId = (url: string): string | null => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
};

export default function HomePageYoutube() {
    const [videos, setVideos] = useState<YoutubeVideo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<NodeJS.Timeout | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

    // Fetch all videos
    const fetchVideos = async () => {
        try {
            setLoading(true);
            const response = await axios.get("api.propertydronerealty.com/youtube-videos");
            setVideos(response.data);
            setError("");
        } catch (err: any) {
            if (err.message === "Network Error") {
                setError("");
                setVideos([
                    {
                        id: 1,
                        title: "Mock Video",
                        description: "",
                        youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        author: "Mock",
                        date: "2024-01-01",
                    },
                ]);
            } else {
                setError("Failed to load videos. Please refresh the page.");
                setVideos([]);
            }
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    // Auto-slider functionality
    useEffect(() => {
        if (videos.length > 0 && !isPaused && !playingVideoId) {
            sliderRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % Math.ceil(videos.length / 3));
            }, 5000);
        }

        return () => {
            if (sliderRef.current) {
                clearInterval(sliderRef.current);
            }
        };
    }, [videos.length, isPaused, playingVideoId]);

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleResume = () => {
        setIsPaused(false);
    };

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    const displayVideos = () => {
        const startIndex = currentSlide * 3;
        return videos.slice(startIndex, startIndex + 3);
    };

    return (
        <div className="container mx-auto max-w-6xl px-4 py-8">
            <div className="mb-8">
                <AnimatedLetters
                    text="Featured Videos"
                    as="h2"
                    className="uppercase text-[#172747] text-[16px] text-center sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
                />

                <h2 className="text-[#172747] font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]">
                    Explore insightful YouTube videos handpicked for you
                </h2>
            </div>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            {loading ? (
                <div className="text-center py-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#172747] mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading amazing videos...</p>
                </div>
            ) : videos.length === 0 ? (
                <div className="text-center py-16 bg-gray-100 rounded-lg">
                    <i className="fas fa-video text-gray-400 text-4xl mb-4"></i>
                    <p className="text-gray-500 text-lg">
                        No videos found in the collection
                    </p>
                </div>
            ) : (
                <div className="mb-8">
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
                        onMouseEnter={handlePause}
                        onMouseLeave={handleResume}
                    >
                        {displayVideos().map((video) => {
                            const videoId = getYoutubeVideoId(video.youtube_url);

                            return (
                                <div
                                    key={video.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200"
                                >
                                    {videoId ? (
                                        <div className="relative pb-[56.25%] h-0 bg-black group-video">
                                            {playingVideoId === video.id ? (
                                                <iframe
                                                    className="absolute top-0 left-0 w-full h-full"
                                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                                    title={video.title || "YouTube Video"}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            ) : (
                                                <div
                                                    className="absolute top-0 left-0 w-full h-full cursor-pointer flex items-center justify-center group-video-hover"
                                                    onClick={() => {
                                                        setPlayingVideoId(video.id);
                                                        setIsPaused(true); // Explicitly pause slider
                                                    }}
                                                >
                                                    <img
                                                        src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                                                        alt={video.title || "Video Thumbnail"}
                                                        className="object-cover opacity-80 group-video-hover:opacity-100 transition-opacity duration-300 w-full h-full"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-video-hover:bg-black/0 transition-colors duration-300">
                                                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 transform group-video-hover:scale-110">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-6 w-6 text-white ml-1"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="bg-gray-200 h-48 flex items-center justify-center">
                                            <p className="text-gray-500">Invalid YouTube URL</p>
                                        </div>
                                    )}

                                    <div className="p-5">
                                        <h2 className="text-xl font-bold mb-3 line-clamp-2 text-gray-800">
                                            {video.title || "Untitled"}
                                        </h2>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Slider controls */}
                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={() =>
                                setCurrentSlide(
                                    (prev) => (prev - 1 + Math.ceil(videos.length / 3)) % Math.ceil(videos.length / 3)
                                )
                            }
                            className=" text-[#172747]  w-10 h-10 flex items-center justify-center p-2 border border-[#172747] rounded-full hover:bg-white transition duration-300 hover:shadow cursor-pointer"
                        >
                            <ArrowLeft size={20} />
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: Math.ceil(videos.length / 3) }).map(
                                (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSlideChange(index)}
                                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-[#172747]" : "bg-gray-300"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                )
                            )}
                        </div>

                        <button
                            onClick={() =>
                                setCurrentSlide((prev) => (prev + 1) % Math.ceil(videos.length / 3))
                            }
                            className=" text-[#172747]  w-10 h-10 flex items-center justify-center p-2 border border-[#172747] rounded-full hover:bg-white transition duration-300 hover:shadow cursor-pointer"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
