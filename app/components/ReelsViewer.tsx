"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faVolumeMute, faVolumeUp, faFilter, faList, faMap, faHeart, faComment, faEye, faShareNodes, faDownload } from '@fortawesome/free-solid-svg-icons';

interface Reel {
  id: string | number;
  title: string;
  video: { path: string } | null;
  instagramLink?: string;
  propertyName?: string;
  location?: string;
  builderName?: string;
  price2bhk?: string;
  price3bhk?: string;
  likes?: number;
  comments?: number;
  views?: number;
}

interface ReelsViewerProps {
  onClose: () => void;
}

const ReelsViewer: React.FC<ReelsViewerProps> = ({ onClose }) => {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";

  useEffect(() => {
    fetch(`${API_URL}/api/reels`)
      .then(res => res.json())
      .then(data => {
        const activeReels = data.filter((r: any) => r.isActive !== false);
        setReels(activeReels);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching reels", err);
        setLoading(false);
      });
  }, [API_URL]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const containerHeight = containerRef.current.clientHeight;
        const index = Math.round(scrollPosition / containerHeight);
        if (index !== activeIndex) {
          setActiveIndex(index);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex]);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === activeIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeIndex]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
        <p>Loading Reels...</p>
      </div>
    );
  }

  if (reels.length === 0) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white">
        <p className="mb-4">No reels found.</p>
        <button onClick={onClose} className="px-4 py-2 bg-white text-black rounded font-semibold">Close</button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black sm:p-4 flex justify-center items-center backdrop-blur-sm">
      {/* Mobile-sized container centered on desktop */}
      <div 
        ref={containerRef}
        className="relative w-full h-full sm:w-[400px] sm:h-[700px] sm:max-h-full sm:rounded-2xl overflow-y-scroll snap-y snap-mandatory bg-black shadow-2xl no-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {reels.map((reel, index) => (
          <div key={reel.id} className="relative w-full h-full snap-start snap-always shrink-0 bg-black">
            
            {/* Background Video or Instagram Embed */}
            {reel.instagramLink ? (
              <iframe
                src={reel.instagramLink.replace(/\/?(\?.*)?$/, '/embed')}
                className="absolute inset-0 w-full h-full object-cover"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media; autoplay"
                sandbox="allow-scripts allow-same-origin allow-presentation"
              />
            ) : reel.video ? (
              <video
                ref={el => { videoRefs.current[index] = el; }}
                src={`${API_URL}${reel.video.path}`}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                playsInline
                muted={muted}
                onClick={() => setMuted(!muted)}
              />
            ) : null}

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
              <button onClick={onClose} className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition">
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div className="flex gap-3">
                <button onClick={() => setMuted(!muted)} className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition">
                  <FontAwesomeIcon icon={muted ? faVolumeMute : faVolumeUp} />
                </button>
                <button className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition">
                  <FontAwesomeIcon icon={faFilter} />
                </button>
                <button className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition">
                  <FontAwesomeIcon icon={faList} />
                </button>
                <button className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition">
                  <FontAwesomeIcon icon={faMap} />
                </button>
              </div>
            </div>

            {/* Right Sidebar Stats */}
            <div className="absolute bottom-40 right-4 flex flex-col items-center gap-6 z-10">
              <div className="flex flex-col items-center gap-1 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white group-hover:bg-black/60 transition">
                  <FontAwesomeIcon icon={faHeart} size="lg" />
                </div>
                <span className="text-white text-xs font-semibold shadow-sm">{reel.likes || 0}</span>
              </div>
              <div className="flex flex-col items-center gap-1 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white group-hover:bg-black/60 transition">
                  <FontAwesomeIcon icon={faComment} size="lg" />
                </div>
                <span className="text-white text-xs font-semibold shadow-sm">{reel.comments || 0}</span>
              </div>
              <div className="flex flex-col items-center gap-1 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white group-hover:bg-black/60 transition">
                  <FontAwesomeIcon icon={faEye} size="lg" />
                </div>
                <span className="text-white text-xs font-semibold shadow-sm">{reel.views || 0}</span>
              </div>
              <div className="flex flex-col items-center gap-1 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white group-hover:bg-black/60 transition">
                  <FontAwesomeIcon icon={faShareNodes} size="lg" />
                </div>
                <span className="text-white text-xs font-semibold shadow-sm">Share</span>
              </div>
              <div className="flex flex-col items-center gap-1 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white group-hover:bg-black/60 transition">
                  <FontAwesomeIcon icon={faDownload} size="lg" />
                </div>
                <span className="text-white text-xs font-semibold shadow-sm text-center leading-tight">Brochure</span>
              </div>
            </div>

            {/* Bottom Overlay Information */}
            <div className="absolute bottom-0 left-0 right-0 p-4 pb-6 z-10 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border-2 border-white">
                  {/* Placeholder for Builder Logo */}
                  <span className="text-blue-900 font-bold text-xs">{reel.builderName ? reel.builderName.substring(0,2).toUpperCase() : 'PD'}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base leading-tight drop-shadow-md">{reel.propertyName || reel.title}</h3>
                  <div className="flex items-center text-gray-200 text-xs mt-1 drop-shadow-md">
                    <span>📍 {reel.location || 'Pune'}</span>
                    {reel.builderName && (
                      <>
                        <span className="mx-1">•</span>
                        <span>{reel.builderName}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Price Grid */}
              <div className="grid grid-cols-2 bg-black/40 rounded-xl border border-white/20 backdrop-blur overflow-hidden divide-x divide-white/20">
                <div className="p-2 flex flex-col items-center justify-center">
                  <span className="text-white font-bold text-sm">2BHK</span>
                  <span className="text-gray-300 text-xs">{reel.price2bhk || 'Price on Request'}</span>
                </div>
                <div className="p-2 flex flex-col items-center justify-center">
                  <span className="text-white font-bold text-sm">3BHK</span>
                  <span className="text-gray-300 text-xs">{reel.price3bhk || 'Price on Request'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              {/* <div className="flex gap-3 mt-1">
                <button className="flex-1 bg-[#1e4b6e] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#153853] transition">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 9h18M9 21V9"></path></svg>
                  View Detail
                </button>
                <button className="flex-1 bg-[#108c4f] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#0a6639] transition">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><path d="M17 2l-5 5-5-5"></path></svg>
                  Tour
                </button>
              </div> */}
            </div>

          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default ReelsViewer;
