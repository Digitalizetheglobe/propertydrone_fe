'use client';

import { useState } from 'react';
import AnimatedLetters from '@/app/components/AnimatedLetters';

const testimonials = [
    {
        id: 1,
        name: "Paresh Bansod",
        text: "I am really glad that I came across PropertyDrone Realty. Nikhil along with his colleagues Vishal and Akshay were with me throughout the entire process. They understood my requirements really well and suggested the best suitable projects. They answered my each and every query. And once I finalised the project, they also helped in the negotiation. I would totally recommend them if you are buying a flat in Pune.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 2,
        name: "Subhamoy Saha",
        text: "Being NRIs we were looking to settle down in Pune in near future. We came to know about Nikhil and through his YouTube Videos. His videos were concise, compact, and informative in describing a property so we decided to reach out to him. We started to narrow down our requirements and location with him around Nov 2021 and within a year we had found a place.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 3,
        name: "Vicky Kothawade",
        text: "I had a great experience while buying a new Flat in Pune West location and I'd like to specifically mention Ashitosh for his professionalism and support throughout the process. He provided detailed insights and guided me efficiently, making the entire journey smooth and hassle-free. His expertise in real estate and commitment to customer satisfaction is truly commendable.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 4,
        name: "Bhagyashri Shingadi",
        text: "We had a good experience from start to end while looking for a new house.Vishal Pandey is such an amazing person who explained us everything before hand and made our life easier to short list the property and then finalize it.We all need a trustworthy person in such processes and I think Vishal is one of those honest guy I had ever met.Proffesional and hardworking. We are greatful and thankful to him.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 5,
        name: "Rashmi Chhetri",
        text: "My experience with Property drone was really amazing. I can say that this is where I experienced Professionalism at its peak! They really walked the talk of 'Customer is King'. I started my hunt in 2023 with very limited time in Pune. When i restarted in May this year, I was amazed to see the same zeal and dedication the 2nd time around!",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 6,
        name: "ketan Upadhyay",
        text: "I wanted to take a moment to express my sincere gratitude to Vishal Pandey for the exceptional service provided during our recent purchase of plot in the Vaarivana project. Vishal's teams dedication and professionalism truly made our experience remarkable.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 7,
        name: "Ujjwal Rai",
        text: "We came to know about vishal & his team as a channel partner. This was our first property we purchased and we were very new to this field. The way Nikhil and Vishal guided us throughout the journey of hunting the right project, Knowing our requirements first, Showing the A class builders, differentiation and builder history. It was a smooth process & we really enjoyed buying property with them. As we friends booked property in Vaarivana.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 8,
        name: "Radha Rao",
        text: "It is our pleasure to write this letter of recommendation for Nikhil & his team at Property Drone Realty.From our very first interaction, Nikhil, vishal and ikram impressed us with their exceptional professionalism, in-depth knowledge of the local real estate market in Pune, neighbourhood nuances, and property values. Their ability to understand our specific needs and preferences allowed them to curate tailored property options that perfectly aligned with our criteria. They went above and beyond, providing comprehensive property choices and invaluable insights to guide our decision-making process.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 9,
        name: "Surbhi Tadwal",
        text: "We had a good experience while looking for a new house. Vishal Pandey helped us a-lot in finalising our deal. He just didn't help you in finding your dream house but also give you the wise advice and which is really appreciable. Thanks a-lot for helping us.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    }
];

export default function HomePageTestimonials() {
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

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
                            }}
                        >
                            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{item.name}</h3>
                            <div style={{ marginBottom: '15px', color: '#f9b31e' }}>{'★'.repeat(5)}</div>
                            <p style={{ color: '#172747', fontSize: '15px', lineHeight: '1.6' }}>{item.text}</p>
                            <p style={{ marginTop: '10px', color: '#172747', fontSize: '13px' }}>{item.date}</p>
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
