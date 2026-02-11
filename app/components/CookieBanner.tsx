'use client';
import React, { useState, useEffect } from 'react';

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
            localStorage.setItem('clientIdentifier', crypto.randomUUID());
        }
    }, []);

    const handleResponse = async (consent: boolean) => {
        // Optimistic UI update
        setIsVisible(false);
        localStorage.setItem('cookieConsent', consent ? 'true' : 'false');

        try {
            const clientIdentifier = localStorage.getItem('clientIdentifier');
            const response = await fetch('http://api.propertydronerealty.com/api/cookie-consent', {
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
