'use client';
import React from 'react';

const AnimatedCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card">
        <svg 
          height="100%" 
          width="100%" 
          className="border" 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 320"
        >
          <line 
            x1="0" 
            y1="0" 
            x2="200" 
            y2="0" 
            className="top"
          />
          <line 
            x1="0" 
            y1="0" 
            x2="0" 
            y2="320" 
            className="left"
          />
          <line 
            x1="0" 
            y1="320" 
            x2="200" 
            y2="320" 
            className="bottom"
          />
          <line 
            x1="200" 
            y1="0" 
            x2="200" 
            y2="320" 
            className="right"
          />
        </svg>
        
        <div className="logo">
          <svg 
            className="logo-svg" 
            viewBox="0 0 29.667 31.69" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              transform="translate(0 0)" 
              d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"
            />
            <path 
              transform="translate(-45.91 0)" 
              d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"
            />
            <path 
              transform="translate(0 -51.963)" 
              d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"
            />
          </svg>
        </div>
      </div>
      
      <style jsx>{`
        .card {
          position: relative;
          display: flex;
          width: 200px;
          height: 320px;
          background: #C6C6D0;
          color: #212121;
          box-shadow: inset 0 0 0 4px #212121;
          transition: .6s 0.4s;
          cursor: pointer;
        }
        
        .border {
          position: absolute;
          inset: 0;
        }
        
        .border line {
          stroke-width: 4px;
          stroke: #C6C6D0;
          fill: none;
          transition: .6s ease-in-out;
        }
        
        .border line.top,
        .border line.bottom {
          stroke-dasharray: 200;
        }
        
        .border line.left,
        .border line.right {
          stroke-dasharray: 320;
        }
        
        .logo {
          width: 50%;
          margin: auto;
          fill: #212121;
          transition: .6s;
          opacity: 0.9;
        }
        
        .card:hover {
          background-color: transparent;
          transition-delay: 0s;
        }
        
        .card:hover .border line {
          transition-delay: 0.1s;
        }
        
        .card:hover .border line.top {
          transform: translateX(-200px);
        }
        
        .card:hover .border line.bottom {
          transform: translateX(200px);
        }
        
        .card:hover .border line.left {
          transform: translateY(-320px);
        }
        
        .card:hover .border line.right {
          transform: translateY(320px);
        }
        
        .card:hover .logo {
          transition-delay: 0s;
          transform: scale(1.1);
          fill: #C6C6D0;
          filter: drop-shadow(0 0 30px #C6C6D080);
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default AnimatedCard;