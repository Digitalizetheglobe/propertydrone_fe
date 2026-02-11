"use client";
import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'next/navigation';
import PlotDetail from '@/app/components/PlotDetail';

// Error Boundary or simple loading/error states
function PlotPageContent() {
    const params = useParams();
    const [plot, setPlot] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlot = async () => {
            try {
                // Ensure slug is available
                // Note: useParams might return string or string[]
                const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

                if (!slug) return;

                // Check if slug is numeric (ID) or string (slug)
                const isNumeric = /^\d+$/.test(slug as string);
                const endpoint = isNumeric
                    ? `http://localhost:5000/api/plots/${slug}`
                    : `http://localhost:5000/api/plots/slug/${slug}`;

                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error('Failed to fetch plot details');
                }
                const data = await response.json();
                setPlot(data);
            } catch (err: any) {
                console.error(err);
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        if (params.slug) {
            fetchPlot();
        }
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#172747]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops!</h2>
                    <p className="text-red-600">{error}</p>
                    <a href="/plots" className="mt-4 inline-block text-blue-600 hover:underline">Back to Plots</a>
                </div>
            </div>
        );
    }

    if (!plot) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Plot Not Found</h2>
                    <p className="text-gray-600">The plot you are looking for does not exist.</p>
                    <a href="/plots" className="mt-4 inline-block text-blue-600 hover:underline">Back to Plots</a>
                </div>
            </div>
        );
    }

    return <PlotDetail plot={plot} />;
}

export default function PlotPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PlotPageContent />
        </Suspense>
    );
}
