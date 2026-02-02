'use client';

import React, { useState, useMemo } from 'react';

const ROICalculator = () => {
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
                    ROI Calculator
                </h1>
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-24 overflow-visible flex justify-center">
                <div className="w-full max-w-6xl z-30 rounded-3xl">
                    <ROIFormCard />
                </div>
            </div>
        </div>
    );
};

const ROIFormCard = () => {
    // State for ROI Calculator
    const [initialInvestment, setInitialInvestment] = useState<number>(500000);
    const [finalValue, setFinalValue] = useState<number>(750000);
    const [durationYears, setDurationYears] = useState<number>(5);

    // Calculation Results
    const { roiPercent, netProfit, annualizedRoi } = useMemo(() => {
        const profit = finalValue - initialInvestment;
        const roi = (profit / initialInvestment) * 100;

        // Annualized ROI = [(Final Value / Initial Value) ^ (1/n)] - 1
        let annualized = 0;
        if (initialInvestment > 0 && durationYears > 0) {
            annualized = (Math.pow(finalValue / initialInvestment, 1 / durationYears) - 1) * 100;
        }

        return {
            roiPercent: roi,
            netProfit: profit,
            annualizedRoi: annualized
        };
    }, [initialInvestment, finalValue, durationYears]);

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

                        {/* Initial Investment */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Initial Investment (₹)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    ₹ {formatNumber(initialInvestment)}
                                </div>
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="10000000"
                                step="10000"
                                value={initialInvestment}
                                onChange={(e) => handleSliderChange(setInitialInvestment, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>10k</span>
                                <span>1Cr</span>
                            </div>
                        </div>

                        {/* Final Value */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Final Investment Value (₹)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    ₹ {formatNumber(finalValue)}
                                </div>
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="20000000"
                                step="10000"
                                value={finalValue}
                                onChange={(e) => handleSliderChange(setFinalValue, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>10k</span>
                                <span>2Cr</span>
                            </div>
                        </div>

                        {/* Tenure */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Investment Duration (Years)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    {durationYears} Years
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                step="1"
                                value={durationYears}
                                onChange={(e) => handleSliderChange(setDurationYears, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>1 Yr</span>
                                <span>30 Yrs</span>
                            </div>
                        </div>

                    </div>

                    {/* Right: Results & Chart */}
                    <div className="p-8 md:p-12 bg-white flex flex-col items-center justify-center relative">
                        {/* Summary Header */}
                        <div className="text-center mb-8">
                            <p className="text-gray-500 font-medium mb-1">Total ROI</p>
                            <h2 className={`text-5xl font-bold ${roiPercent >= 0 ? 'text-[#00D287]' : 'text-red-500'}`}>
                                {roiPercent.toFixed(2)}%
                            </h2>
                            <p className="text-gray-400 text-sm mt-2">Annualized ROI: {annualizedRoi.toFixed(2)}%</p>
                        </div>

                        {/* Simple Bar Visualization */}
                        <div className="w-full max-w-xs space-y-4 mb-8">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-500">Invested</span>
                                    <span className="font-bold text-[#191758]">{formatCurrency(initialInvestment)}</span>
                                </div>
                                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#191758] w-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-500">Net Profit</span>
                                    <span className={`font-bold ${netProfit >= 0 ? 'text-[#00D287]' : 'text-red-500'}`}>{formatCurrency(netProfit)}</span>
                                </div>
                                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                    {/* Simple width logic for visualization purposes */}
                                    <div
                                        className={`h-full ${netProfit >= 0 ? 'bg-[#00D287]' : 'bg-red-500'}`}
                                        style={{ width: `${Math.min(Math.abs((netProfit / initialInvestment) * 100), 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>


                        {/* Legend / Stats */}
                        <div className="w-full grid grid-cols-2 gap-y-4 gap-x-8">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-3 h-3 rounded-full bg-[#191758]"></div>
                                    <span className="text-gray-500 text-sm">Initial Investment</span>
                                </div>
                                <p className="text-lg font-bold text-[#191758]">{formatCurrency(initialInvestment)}</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-3 h-3 rounded-full bg-[#00D287]"></div>
                                    <span className="text-gray-500 text-sm">Total Value</span>
                                </div>
                                <p className="text-lg font-bold text-[#191758]">{formatCurrency(finalValue)}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ROICalculator;
