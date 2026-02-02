'use client';

import React, { useState, useMemo } from 'react';

const IRRCalculator = () => {
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
                    IRR Calculator
                </h1>
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-24 overflow-visible flex justify-center">
                <div className="w-full max-w-6xl z-30 rounded-3xl">
                    <IRRFormCard />
                </div>
            </div>
        </div>
    );
};

const IRRFormCard = () => {
    // State for IRR Calculator
    const [investmentAmount, setInvestmentAmount] = useState<number>(5000000); // 50L
    const [annualRent, setAnnualRent] = useState<number>(240000); // 20k/mo
    const [salePrice, setSalePrice] = useState<number>(8000000); // 80L
    const [years, setYears] = useState<number>(10);

    // Calculation Results
    const { irrValue, totalProfit, profitMultiple } = useMemo(() => {
        // Cash Flows
        // Year 0: -Investment
        // Year 1 to N-1: +Rent
        // Year N: +Rent + Sale Price

        const cashFlows = [-investmentAmount];
        for (let i = 1; i < years; i++) {
            cashFlows.push(annualRent);
        }
        cashFlows.push(annualRent + salePrice);

        // Calculate IRR using binary search
        // We look for rate 'r' such that NPV = 0
        // NPV = Sum ( CF[i] / (1+r)^i )

        let low = -0.99; // -99%
        let high = 10.0; // 1000%
        let epsilon = 0.00001;
        let guess = 0.1;
        let npv = 0;

        for (let iter = 0; iter < 100; iter++) { // Max iterations 100
            guess = (low + high) / 2;
            npv = 0;
            for (let t = 0; t < cashFlows.length; t++) {
                npv += cashFlows[t] / Math.pow(1 + guess, t);
            }

            if (Math.abs(npv) < epsilon) break;

            if (npv > 0) {
                low = guess;
            } else {
                high = guess;
            }
        }

        const irr = guess * 100;

        const totalIn = investmentAmount;
        const totalOut = (annualRent * years) + salePrice;
        const profit = totalOut - totalIn;
        const multiple = totalOut / totalIn;

        return {
            irrValue: irr,
            totalProfit: profit,
            profitMultiple: multiple
        };
    }, [investmentAmount, annualRent, salePrice, years]);

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
                                <label className="font-bold text-gray-700">Property Investment (₹)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    ₹ {formatNumber(investmentAmount)}
                                </div>
                            </div>
                            <input
                                type="range"
                                min="500000"
                                max="50000000"
                                step="100000"
                                value={investmentAmount}
                                onChange={(e) => handleSliderChange(setInvestmentAmount, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>5L</span>
                                <span>5Cr</span>
                            </div>
                        </div>

                        {/* Annual Rent */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Annual Rental Income (₹)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    ₹ {formatNumber(annualRent)}
                                </div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="5000000"
                                step="10000"
                                value={annualRent}
                                onChange={(e) => handleSliderChange(setAnnualRent, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>0</span>
                                <span>50L</span>
                            </div>
                        </div>

                        {/* Sale Price */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Expected Sale Price (₹)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    ₹ {formatNumber(salePrice)}
                                </div>
                            </div>
                            <input
                                type="range"
                                min="500000"
                                max="100000000"
                                step="100000"
                                value={salePrice}
                                onChange={(e) => handleSliderChange(setSalePrice, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>5L</span>
                                <span>10Cr</span>
                            </div>
                        </div>


                        {/* Tenure */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Holding Period (Years)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    {years} Years
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                step="1"
                                value={years}
                                onChange={(e) => handleSliderChange(setYears, e.target.value)}
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
                            <p className="text-gray-500 font-medium mb-1">Internal Rate of Return (IRR)</p>
                            <h2 className={`text-5xl font-bold ${irrValue >= 0 ? 'text-[#00D287]' : 'text-red-500'}`}>
                                {irrValue.toFixed(2)}%
                            </h2>
                            <p className="text-gray-400 text-sm mt-2">Cash Multiple: {profitMultiple.toFixed(2)}x</p>
                        </div>


                        {/* Legend / Stats */}
                        <div className="w-full grid grid-cols-2 gap-y-6 gap-x-8">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-3 h-3 rounded-full bg-[#191758]"></div>
                                    <span className="text-gray-500 text-sm">Total Invested</span>
                                </div>
                                <p className="text-lg font-bold text-[#191758]">{formatCurrency(investmentAmount)}</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-3 h-3 rounded-full bg-[#FDB913]"></div>
                                    <span className="text-gray-500 text-sm">Total Returned</span>
                                </div>
                                <p className="text-lg font-bold text-[#191758]">{formatCurrency((annualRent * years) + salePrice)}</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-gray-500 text-sm">Net Profit</span>
                                </div>
                                <p className={`text-lg font-bold ${totalProfit >= 0 ? 'text-green-600' : 'text-red-500'}`}>{formatCurrency(totalProfit)}</p>
                            </div>
                        </div>

                        <div className="mt-8 bg-blue-50 p-4 rounded-xl w-full">
                            <p className="text-xs text-gray-500 text-center">
                                IRR is calculated based on annual cash flows consisting of rental income and the final sale price.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default IRRCalculator;
