'use client';

import { useState, useEffect } from 'react';
import AnimatedLetters from '@/app/components/AnimatedLetters';

export default function HomePageTestimonials() {
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [testimonials, setTestimonials] = useState<any[]>([]);

    useEffect(() => {
        fetch('http://localhost:9000/api/testimonials')
            .then(res => res.json())
            .then(data => {
                // Filter only active testimonials and sort by newest if necessary
                const activeTestimonials = data.filter((t: any) => t.isActive !== false);
                setTestimonials(activeTestimonials);
            })
            .catch(err => console.error("Error fetching testimonials:", err));
    }, []);

    const totalPages = Math.max(1, Math.ceil(testimonials.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <section className="relative z-10 max-w-6xl mx-auto px-4 py-12">
                <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <AnimatedLetters
                            text="TESTIMONIAL"
                            as="h2"
                            className="uppercase text-[#172747] text-[18px] tracking-[1px] leading-[100%] mb-2"
                        />
                        <h2 className="text-[#172747] font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]">
                            Your trust is our greatest award
                        </h2>
                    </div>
                </div>

                {/* Cards */}
                <div
                    className="flex flex-wrap justify-center gap-6"
                    style={{ padding: '20px' }}
                >
                    {visibleTestimonials.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '20px',
                                color: '#172747',
                                width: '320px',
                                background: 'rgba(23, 39, 71, 0.05)',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                fontFamily: 'Poppins, sans-serif',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                                {item.image && item.image.path ? (
                                    <img
                                        src={`http://localhost:9000${item.image.path}`}
                                        alt={item.name}
                                        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px', color: '#64748b' }}>
                                        {item.name ? item.name.charAt(0).toUpperCase() : 'U'}
                                    </div>
                                )}
                                <h3 style={{ fontSize: '18px', margin: 0 }}>{item.name}</h3>
                            </div>
                            <div style={{ marginBottom: '15px', color: '#f9b31e' }}>{'★'.repeat(item.rating || 5)}{'☆'.repeat(5 - (item.rating || 5))}</div>
                            <p style={{ color: '#172747', fontSize: '15px', lineHeight: '1.6', flexGrow: 1 }}>{item.testimonial}</p>
                            <p style={{ marginTop: '10px', color: '#172747', fontSize: '13px' }}>
                                {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4 mt-10 font-[Poppins,sans-serif]">
                    <div className="text-[#172747] text-[16px]">
                        <strong>{String(currentPage).padStart(2, '0')}</strong>
                        <span> / {String(totalPages).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-grow h-px bg-[#172747]"></div>
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-[#172747] bg-white text-[#172747] disabled:opacity-50"
                    >
                        ‹
                    </button>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-[#172747] bg-white text-[#172747] disabled:opacity-50"
                    >
                        ›
                    </button>
                </div>
            </section>
        </div>
    );
}
