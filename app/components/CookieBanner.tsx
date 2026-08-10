'use client';
import React, { useState, useEffect } from 'react';

// Safe UUID generator that works in both secure (HTTPS/localhost) and
// non-secure contexts (e.g. local IP access where crypto.randomUUID is unavailable)
const generateUUID = (): string => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    // Fallback: use crypto.getRandomValues (available even in non-secure contexts)
    if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
        const bytes = new Uint8Array(16);
        crypto.getRandomValues(bytes);
        bytes[6] = (bytes[6] & 0x0f) | 0x40; // version 4
        bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant bits
        return [...bytes].map((b, i) =>
            [4, 6, 8, 10].includes(i) ? '-' + b.toString(16).padStart(2, '0') : b.toString(16).padStart(2, '0')
        ).join('');
    }
    // Last resort: Math.random based UUID v4
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage
        const storedConsent = localStorage.getItem('cookieConsent');
        if (!storedConsent) {
            setIsVisible(true);
        }

        // Ensure client identifier exists
        if (!localStorage.getItem('clientIdentifier')) {
            localStorage.setItem('clientIdentifier', generateUUID());
        }
    }, []);

    const handleResponse = async (consent: boolean) => {
        // Optimistic UI update
        setIsVisible(false);
        localStorage.setItem('cookieConsent', consent ? 'true' : 'false');

        try {
            const clientIdentifier = localStorage.getItem('clientIdentifier');
            const response = await fetch('http://localhost:9000/api/cookie-consent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    consent,
                    clientIdentifier
                })
            });
            if (!response.ok) {
                console.error('Failed to save cookie consent');
            }
        } catch (error) {
            console.error('Error saving cookie consent:', error);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#172747] text-white px-4 py-6 shadow-lg z-50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                    <p className="text-sm md:text-base" style={{
                        fontSize: '16px',
                        fontFamily: 'Lato, sans-serif',
                        letterSpacing: '0.5px',
                        lineHeight: '1.3',
                    }}>
                        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                        By clicking "Accept", you consent to our use of cookies.
                    </p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => handleResponse(true)}
                        className="px-6 py-2 bg-white text-[#172747] rounded hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => handleResponse(false)}
                        className="px-6 py-2 border border-white text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
                    >
                        Reject
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
