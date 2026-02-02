'use client';

import Link from "next/link";
import AnimatedLetters from '@/app/components/AnimatedLetters';
import { Home as HomeIcon, ClipboardList, Clock, Banknote, Eye, Users } from 'lucide-react';

const services = [
    {
        title: "Exclusive Property",
        icon: (
            <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
                <HomeIcon className="w-14 h-14" />
            </div>
        )
    },
    {
        title: "POA Assistance",
        icon: (
            <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
                <ClipboardList className="w-14 h-14" />
            </div>
        )
    },
    {
        title: "24/7 Available",
        icon: (
            <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
                <Clock className="w-14 h-14" />
            </div>
        )
    },
    {
        title: "Easy Loan Assistance",
        icon: (
            <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
                <Banknote className="w-14 h-14" />
            </div>
        )
    },
    {
        title: "Virtual Tour",
        icon: (
            <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
                <Eye className="w-14 h-14" />
            </div>
        )
    },
    {
        title: "Dedicated NRI Team",
        icon: (
            <div className="text-white group-hover:text-[#172747] transition-colors duration-300">
                <Users className="w-14 h-14" />
            </div>
        )
    }
];

export default function HomePageNir() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Left side - Text content */}
                <div className="w-full lg:w-1/3 space-y-4">
                    <AnimatedLetters
                        text="NRI Corner "
                        as="h2"
                        className="text-[#172747] text-center font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
                    />

                    <p className="text-[#172747] text-[18px] sm:text-[20px] font-lato leading-none"
                        style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '150%', color: '#2a4073' }}>
                        Why Invest in India
                    </p>
                    <p className="text-[#172747] text-[16px] sm:text-[18px] font-lato leading-none"
                        style={{ fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '150%', color: '#2a4073' }}>
                        India is set to remain as one of the world's fastest growing economies. There's never been a better time to invest in real estate in India. Let us help you throughout the pre-and-post purchase processes.
                    </p>

                </div>

                {/* Right side - Services grid */}
                <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col bg-[#172747] hover:border hover:border-[#172747] group shadow-sm items-center justify-center p-6 sm:p-8 text-center hover:bg-white rounded-lg transition-all duration-300"
                            >
                                <Link href="/nri-corner">
                                    <div className="flex items-center justify-center mb-2">
                                        <span className="w-16 sm:w-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                            {service.icon}
                                        </span>
                                    </div>
                                    <h4 className="text-white text-[20px] sm:text-[26px] group-hover:text-[#172747] font-medium text-sm leading-tight transition-colors duration-300">
                                        {service.title}
                                    </h4>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
