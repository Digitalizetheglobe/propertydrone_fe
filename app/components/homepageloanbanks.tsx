"use client";

import Image from "next/image";

// Bank Logo Imports
import bank1 from "@/public/images/bank/Group 1 (2).png";
import bank2 from "@/public/images/bank/Group 2 (1).png";
import bank3 from "@/public/images/bank/Group 3 (1).png";
import bank4 from "@/public/images/bank/Group 4 (3).png";
import bank5 from "@/public/images/bank/Group 5.png";
import bank6 from "@/public/images/bank/Group 6 (1).png";
import bank7 from "@/public/images/bank/Group 7 (3).png";
import bank8 from "@/public/images/bank/Group 8.png";
import bank9 from "@/public/images/bank/Group 9.png";
import bank10 from "@/public/images/bank/Group 10.png";
import bank11 from "@/public/images/bank/Group 11.png";
import bank12 from "@/public/images/bank/Group 12.png";
import bank13 from "@/public/images/bank/Group 13 (1).png";
import bank14 from "@/public/images/bank/Group 14 (2).png";
import bank15 from "@/public/images/bank/Group 15 (2).png";
import bank16 from "@/public/images/bank/Group 16.png";
import bank17 from "@/public/images/bank/Group 17.png";
import bank18 from "@/public/images/bank/Group 18.png";
import bank19 from "@/public/images/bank/Group 19.png";
import bank20 from "@/public/images/bank/Group 20.png";

export default function HomePageLoanBanks() {
    const handleEnquireNow = () => {
        // Handle Enquire Now button click
        console.log("Enquire Now clicked");
        // You can add navigation to a contact form, open a modal, or other actions
        // Example: window.location.href = '/contact' or router.push('/contact')
    };

    const handleWhatsAppChat = () => {
        // Handle WhatsApp button click
        const phoneNumber = "1234567890"; // Replace with your actual WhatsApp number
        const message = encodeURIComponent("Hello! I'm interested in your home loan services.");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-0 mt-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]">
                        We Are India&apos;s Leading Home Loan Provider In The Housing Market
                    </h2>
                    <p className="text-[#172747] text-[18px] sm:text-[20px] font-lato leading-[150%] tracking-[1px]">
                        We bring the top banks to you - compare, choose, and get approved in
                        just 48 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button 
                            onClick={handleEnquireNow}
                            className="px-8 py-3 border cursor-pointer border-[#FF3B30] text-[#FF3B30] rounded hover:bg-red-50 transition-colors duration-300 font-medium whitespace-nowrap"
                        >
                            Enquire Now
                        </button>
                        <button 
                            onClick={handleWhatsAppChat}
                            className="px-8 py-3 bg-[#25D366] cursor-pointer text-white rounded hover:bg-[#20bd5a] transition-colors duration-300 font-medium flex items-center justify-center gap-2 whitespace-nowrap"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp
                        </button>
                    </div>
                </div>

                {/* Right Content - Bank Slider */}
                <div className="flex-1 w-full relative overflow-hidden h-[340px]">
                    <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 40s linear infinite;
            }
            .pause-on-hover:hover {
              animation-play-state: paused;
            }
          `}</style>
                    <div className="absolute top-0 left-0 h-full flex items-center animate-scroll pause-on-hover w-[fit-content]">
                        <div className="flex gap-6 px-3">
                            {[
                                // Triple 1
                                { top: bank1, mid: bank2, bottom: bank3 },
                                { top: bank4, mid: bank5, bottom: bank6 },
                                { top: bank7, mid: bank8, bottom: bank9 },
                                { top: bank10, mid: bank11, bottom: bank12 },
                                { top: bank13, mid: bank14, bottom: bank15 },
                                { top: bank16, mid: bank17, bottom: bank18 },
                                // { top: bank19, mid: bank20, bottom: bank1 }, // Loop a bit if needed or just use what we have.
                                // We have 20 banks. 6 cols * 3 = 18. bank19, bank20 remain. Let's add them.
                                { top: bank19, mid: bank20, bottom: bank1 },
                            ].map((triple, index) => (
                                <div key={index} className="flex flex-col gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300">
                                        <Image
                                            src={triple.top}
                                            alt="Bank Logo"
                                            className="max-h-12 w-auto object-contain"
                                        />
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300">
                                        <Image
                                            src={triple.mid}
                                            alt="Bank Logo"
                                            className="max-h-12 w-auto object-contain"
                                        />
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300">
                                        <Image
                                            src={triple.bottom}
                                            alt="Bank Logo"
                                            className="max-h-12 w-auto object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate */}
                            {[
                                // Triple 1
                                { top: bank1, mid: bank2, bottom: bank3 },
                                { top: bank4, mid: bank5, bottom: bank6 },
                                { top: bank7, mid: bank8, bottom: bank9 },
                                { top: bank10, mid: bank11, bottom: bank12 },
                                { top: bank13, mid: bank14, bottom: bank15 },
                                { top: bank16, mid: bank17, bottom: bank18 },
                                { top: bank19, mid: bank20, bottom: bank1 },
                            ].map((triple, index) => (
                                <div key={`dup-${index}`} className="flex flex-col gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300">
                                        <Image
                                            src={triple.top}
                                            alt="Bank Logo"
                                            className="max-h-12 w-auto object-contain"
                                        />
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300">
                                        <Image
                                            src={triple.mid}
                                            alt="Bank Logo"
                                            className="max-h-12 w-auto object-contain"
                                        />
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300">
                                        <Image
                                            src={triple.bottom}
                                            alt="Bank Logo"
                                            className="max-h-12 w-auto object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
