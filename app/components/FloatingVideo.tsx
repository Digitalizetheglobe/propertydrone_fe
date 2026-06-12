"use client";

import { useState, useEffect } from 'react';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

interface YoutubeVideo {
  id: number;
  title: string;
  youtube_url: string;
}

const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export default function FloatingVideo() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'initial' | 'showing' | 'hidden' | 'closed'>('initial');

  useEffect(() => {
    fetch('https://api.propertydronerealty.com/youtube-videos')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setVideos(data);
        }
      })
      .catch(err => console.error("Failed to fetch videos", err));
  }, []);

  useEffect(() => {
    if (videos.length === 0 || phase === 'closed') return;

    let timeout: NodeJS.Timeout;

    if (phase === 'initial') {
      timeout = setTimeout(() => {
        setPhase('showing');
      }, 8000); // Wait 10 seconds before showing first video
    } else if (phase === 'showing') {
      if (!isExpanded) {
        // Auto close after 30 seconds if not expanded
        timeout = setTimeout(() => {
          setPhase('hidden');
        }, 50000); 
      }
    } else if (phase === 'hidden') {
      // Re-open after 5 seconds with a different video
      timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setPhase('showing');
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [phase, videos.length, isExpanded]);

  if (phase !== 'showing' || videos.length === 0) return null;

  const currentVideo = videos[currentIndex];
  const videoId = currentVideo ? getYoutubeId(currentVideo.youtube_url) : null;

  if (!videoId) return null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev + 1) % videos.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev - 1 + videos.length) % videos.length);
  };

  if (!isExpanded) {
    return (
      <div 
        className="fixed bottom-6 left-6 z-[100] w-40 h-72 sm:w-48 sm:h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-transform hover:scale-105 group"
        onClick={() => {
            setIsExpanded(true);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1`}
          className="w-full h-full object-cover pointer-events-none scale-150" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        
        {/* Title overlay */}
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/80 to-transparent p-3 pt-4">
            <p className="text-white text-xs font-semibold line-clamp-2 leading-tight">
                {currentVideo.title}
            </p>
        </div>

        <div className={`absolute inset-0 bg-black/30 flex flex-col items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Maximize2 className="text-white w-8 h-8 mb-2 drop-shadow-md" />
          <span className="text-white text-sm font-medium drop-shadow-md">Click to expand</span>
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setPhase('closed');
          }}
          className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 rounded-full text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full flex-1"
        />
        
        <div className="bg-white/10 p-4 text-white flex items-center justify-between backdrop-blur-md">
            <h3 className="font-semibold line-clamp-1 flex-1 pr-4">{currentVideo.title}</h3>
            {videos.length > 1 && (
                <div className="flex items-center gap-2">
                    <button onClick={handlePrev} className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm font-medium">{currentIndex + 1} / {videos.length}</span>
                    <button onClick={handleNext} className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>

        <button 
          onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
          }}
          className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white backdrop-blur-sm transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
