'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';

interface LeadSourceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOURCES = [
  'Radio',
  'Fb / Insta',
  'Society Lift',
  'LinkedIn',
  'Reference',
  'Spotify',
  'YouTube',
  'Google',
];

export default function LeadSourceModal({ isOpen, onClose }: LeadSourceModalProps) {
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!selectedSource) {
      toast.error('Please select a source');
      return;
    }

    setIsLoading(true);
    try {
      // In production you would probably use process.env.NEXT_PUBLIC_API_URL here.
      // We will fallback to localhost:9000 which is the standard backend port for this app.
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.propertydronerealty.com';
      const res = await fetch(`${API_URL}/api/lead-sources`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: selectedSource }),
      });

      if (!res.ok) throw new Error('Failed to submit');

      toast.success('Submitted successfully!');
      sessionStorage.setItem('leadSourceSubmitted', 'true');
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setSelectedSource(null);
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] bg-white rounded-xl shadow-2xl overflow-hidden font-sans border border-gray-100"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={16} />
            </button>

            <div className="p-6 min-h-[300px] flex flex-col justify-center">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm"
                  >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-[19px] font-semibold text-gray-800 mb-2">Thank you!</h3>
                  <p className="text-sm text-gray-500">Your response has been recorded.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-[17px] font-semibold text-gray-800 mb-5 pr-4 leading-snug">
                    How you heard about PropertyDrone ? <span className="text-gray-400 ml-1 text-sm">*</span>
                  </h3>

                  <div className="space-y-3 mb-6">
                    {SOURCES.map((source) => (
                      <label key={source} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={selectedSource === source}
                            onChange={() => setSelectedSource(source)}
                            className="peer appearance-none w-5 h-5 border-[1.5px] border-gray-300 rounded hover:border-gray-400 checked:bg-[#202020] checked:border-[#202020] transition-all cursor-pointer"
                          />
                          <svg
                            className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors text-[15px]">
                          {source}
                        </span>
                      </label>
                    ))}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-[#202020] hover:bg-black text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-sm mt-auto"
                  >
                    <span className="text-[15px]">{isLoading ? 'Submitting...' : 'Submit'}</span>
                    {!isLoading && (
                      <svg className="w-4 h-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </>
              )}
            </div>

            <div className="bg-[#f9f9f9] border-t border-gray-100 py-3 text-center">
              <p className="text-[13px] text-gray-500 font-medium flex items-center justify-center gap-1.5">
                Made with Tally <span className="text-[#3a35a1] font-bold text-lg leading-none mt-[-2px]">*</span>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
