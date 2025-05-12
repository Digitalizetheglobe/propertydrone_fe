"use client"; // Add this directive at the top

import { useState } from 'react';

export default function WeatherCard() {
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        {/* Main card */}
        <div 
          className={`relative w-64 h-32 rounded-3xl z-20 transition-colors duration-300 ease-in-out ${isHovered ? 'bg-yellow-200' : 'bg-gray-100'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Weather icon */}
          <div className="m-4">
            <svg className="w-24 h-24" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="#FFD700" />
              <path d="M50,10 Q65,25 80,10 Q65,25 80,40 Q65,25 50,40 Q35,25 50,10" fill="#FFA500" />
            </svg>
          </div>
          
          {/* Temperature */}
          <div className="absolute text-4xl font-bold top-4 left-32">23 °C</div>
          
          {/* Location */}
          <div className="absolute text-sm top-12 left-32">Dunmore, Ireland</div>
        </div>
        
        {/* Middle expanded card */}
        <div 
          className={`absolute top-0 -z-10 w-60 rounded-3xl bg-white transition-all duration-300 ease-in-out ${
            isHovered ? 'h-32' : 'h-32'
          }`}
        >
          {/* Upper section with humidity and wind */}
          <div className="relative flex justify-around mt-2 ml-4 mr-4 text-black">
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8" viewBox="0 0 30 30">
                <path d="M15,10 Q20,5 25,10 T25,20 Q15,25 5,20 T5,10 Q10,5 15,10" fill="#89CFF0" />
              </svg>
              <div className="mt-2 text-xs text-center">
                Humidity<br/>30%
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8" viewBox="0 0 30 30">
                <path d="M5,15 H25 M20,10 L25,15 L20,20" stroke="#333" fill="none" strokeWidth="2" />
              </svg>
              <div className="mt-2 text-xs text-center">
                Wind<br/>8 Km/h
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom expanded card - expands downward */}
        <div 
          className={`absolute top-32 -z-10 w-60 rounded-b-3xl bg-white transition-all duration-300 ease-in-out ${
            isHovered ? 'h-36 opacity-100' : 'h-0 opacity-0'
          } overflow-hidden`}
        >
          {/* Lower section with additional info - only visible on hover */}
          <div className="flex justify-around w-full px-2 pt-4 text-black">
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" fill="none" stroke="#333" strokeWidth="1" />
                <text x="10" y="13" fontSize="8" textAnchor="middle" fill="#333">AQI</text>
              </svg>
              <div className="mt-1 text-xs text-center">
                AQI<br/>30
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6" viewBox="0 0 20 20">
                <rect x="5" y="5" width="10" height="10" rx="2" fill="none" stroke="#333" strokeWidth="1" />
                <line x1="8" y1="10" x2="12" y2="10" stroke="#333" strokeWidth="1" />
              </svg>
              <div className="mt-1 text-xs text-center">
                Real Feel<br/>21 °C
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="7" fill="none" stroke="#333" strokeWidth="1" />
                <path d="M10,5 L10,10 L13,13" stroke="#333" fill="none" strokeWidth="1" />
              </svg>
              <div className="mt-1 text-xs text-center">
                Pressure<br/>1012 mbar
              </div>
            </div>
          </div>
          
          {/* Status bar */}
          <div className="absolute bottom-0 w-full py-1 text-center text-white bg-green-500">
            Healthy
          </div>
        </div>
        
        {/* Top expanded card - expands upward */}
        <div 
          className={`absolute -z-10 w-60 rounded-t-3xl bg-white transition-all duration-300 ease-in-out ${
            isHovered ? 'h-24 -top-24 opacity-100' : 'h-0 top-0 opacity-0'
          } overflow-hidden`}
        >
          {/* Weather forecast */}
          <div className="flex justify-around w-full h-full items-center text-black">
            <div className="flex flex-col items-center">
              <div className="text-xs">Mon</div>
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" fill="#FFD700" />
              </svg>
              <div className="text-xs">24°</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-xs">Tue</div>
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" fill="#FFD700" />
                <path d="M18,12 H22 M2,12 H6" stroke="#333" strokeWidth="1" />
              </svg>
              <div className="text-xs">22°</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-xs">Wed</div>
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M12,7 Q16,7 16,11 T12,15" fill="#B6B6B6" stroke="#B6B6B6" strokeWidth="1" />
              </svg>
              <div className="text-xs">19°</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-xs">Thu</div>
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" fill="#FFD700" />
              </svg>
              <div className="text-xs">25°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}