'use client';

import React, { useState, useMemo } from 'react';

const LRDCalculator = () => {
    return (
        <div className="relative min-h-screen bg-[#F4F5F7] font-sans">
            {/* 1. Brand Background Hero Block (Absolute) */}
            <div className="absolute top-0 left-0 right-0 h-[550px] bg-gradient-to-r from-[#191758] to-[#2a447a] rounded-b-[3rem] md:rounded-b-[5rem] z-0 overflow-hidden">
                {/* Decorative Circles/Blobs */}
                <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-50px] left-[-50px] w-80 h-80 bg-[#FDB913] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Page Heading */}
            <div className="absolute top-[100px] w-full z-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                    LRD Calculator
                </h1>
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-24 overflow-visible flex justify-center">
                <div className="w-full max-w-6xl z-30 rounded-3xl">
                    <LRDFormCard />
                </div>
            </div>
        </div>
    );
};

const LRDFormCard = () => {
    // State for LRD Calculator
    const [grossRent, setGrossRent] = useState<number>(100000);
    const [interestRate, setInterestRate] = useState<number>(10);
    const [tenureYears, setTenureYears] = useState<number>(9); // Usually lease duration
    const [marginPercentage, setMarginPercentage] = useState<number>(90); // LRD usually considers 90% of rent

    // Calculation Results
    const { eligibleLoanAmount, emiMatrix } = useMemo(() => {
        // LRD Calculation: Present Value of Future Net Rentals
        // Net Monthly Rent = Gross Rent * Margin%
        const netMonthlyRent = grossRent * (marginPercentage / 100);

        // r = Monthly Interest Rate
        const r = interestRate / 12 / 100;

        // n = Total months
        const n = tenureYears * 12;

        // PV of Annuity Formula (Present Value of Net Rentals)
        // PV = P * [ (1 - (1+r)^-n) / r ]
        let loanAmount = 0;
        if (interestRate > 0) {
            loanAmount = netMonthlyRent * ((1 - Math.pow(1 + r, -n)) / r);
        } else {
            loanAmount = netMonthlyRent * n;
        }

        return {
            eligibleLoanAmount: loanAmount,
            emiMatrix: netMonthlyRent // Essentially the EMI is covered by the Net Rent
        };
    }, [grossRent, interestRate, tenureYears, marginPercentage]);

    // Helpers
    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val);
    };

    const formatNumber = (val: number) => {
        return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(val);
    }

    const handleSliderChange = (setter: React.Dispatch<React.SetStateAction<number>>, val: string) => {
        setter(Number(val));
    }

    return (
        <div className="flex flex-col gap-8">
            {/* Main Calculation Card */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Left: Inputs */}
                    <div className="p-8 md:p-12 space-y-10 border-b lg:border-b-0 lg:border-r border-gray-100">

                        {/* Monthly Rent */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Gross Monthly Rent (₹)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    ₹ {formatNumber(grossRent)}
                                </div>
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="5000000"
                                step="5000"
                                value={grossRent}
                                onChange={(e) => handleSliderChange(setGrossRent, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>10k</span>
                                <span>50L</span>
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Interest Rate (%)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    {interestRate} %
                                </div>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="18"
                                step="0.1"
                                value={interestRate}
                                onChange={(e) => handleSliderChange(setInterestRate, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>5%</span>
                                <span>18%</span>
                            </div>
                        </div>

                        {/* Tenure */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Lease Tenure (Years)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    {tenureYears} Years
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                step="1"
                                value={tenureYears}
                                onChange={(e) => handleSliderChange(setTenureYears, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>1 Yr</span>
                                <span>20 Yrs</span>
                            </div>
                        </div>

                        {/* Margin */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Margin Consided (%)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    {marginPercentage} %
                                </div>
                            </div>
                            <input
                                type="range"
                                min="50"
                                max="100"
                                step="1"
                                value={marginPercentage}
                                onChange={(e) => handleSliderChange(setMarginPercentage, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>50%</span>
                                <span>100%</span>
                            </div>
                        </div>

                    </div>

                    {/* Right: Results & Chart */}
                    <div className="p-8 md:p-12 bg-white flex flex-col items-center justify-center relative">
                        {/* Summary Header */}
                        <div className="text-center mb-8">
                            <p className="text-gray-500 font-medium mb-1">Eligible Loan Amount</p>
                            <h2 className="text-4xl font-bold text-[#191758]">{formatCurrency(eligibleLoanAmount)}</h2>
                            <p className="text-green-500 text-sm mt-3 font-semibold bg-green-50 px-3 py-1 rounded-full inline-block">
                                Based on Net Rent: {formatCurrency(emiMatrix)}/mo
                            </p>
                        </div>


                        {/* Legend / Stats */}
                        <div className="w-full grid grid-cols-1 gap-y-4">
                            <div className="bg-blue-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-600 mb-1">What is LRD?</p>
                                <p className="text-xs text-gray-500">
                                    Lease Rental Discounting (LRD) is a term loan offered against rental receipts derived from lease contracts with corporate tenants. The loan amount is usually based on the discounted value of future rentals.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-3 h-3 rounded-full bg-[#191758]"></div>
                                        <span className="text-gray-500 text-sm">Monthly Rent</span>
                                    </div>
                                    <p className="text-lg font-bold text-[#191758]">{formatCurrency(grossRent)}</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-3 h-3 rounded-full bg-[#FDB913]"></div>
                                        <span className="text-gray-500 text-sm">Tenure</span>
                                    </div>
                                    <p className="text-lg font-bold text-[#191758]">{tenureYears} Years</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LRDCalculator;
