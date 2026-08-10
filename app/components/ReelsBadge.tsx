"use client";
import React, { useState } from 'react';
import ReelsViewer from './ReelsViewer';

const ReelsBadge: React.FC = () => {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[60]">
        <button 
          onClick={() => setShowViewer(true)}
          className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-white shadow-md hover:shadow-lg transition-transform hover:scale-105"
          style={{ background: 'linear-gradient(to right, #0b7245, #194a6b)' }}
        >
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm border border-white">
            New
          </div>
          
          {/* Play Icon Box */}
          <div className="flex items-center justify-center w-6 h-6 border-2 border-white rounded-[6px] shrink-0">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
          
          <span className="text-lg tracking-wide">Reels</span>
        </button>
      </div>

      {showViewer && <ReelsViewer onClose={() => setShowViewer(false)} />}
    </>
  );
};

export default ReelsBadge;
