'use client';

import React, { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';

const EMIcalculator = () => {
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
                    EMI Calculator
                </h1>
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-24 overflow-visible flex justify-center">
                <div className="w-full max-w-6xl z-30 rounded-3xl">
                    <PropertyFormCard />
                </div>
            </div>
        </div>
    );
};

const PropertyFormCard = () => {
    // State for EMI Calculator
    const [loanAmount, setLoanAmount] = useState<number>(5000000);
    const [tenureYears, setTenureYears] = useState<number>(10);
    const [interestRate, setInterestRate] = useState<number>(9); // Annual %

    // Calculation Results
    const { emi, totalInterest, totalAmount, amortizationSchedule } = useMemo(() => {
        const P = loanAmount;
        const R = interestRate / 12 / 100; // Monthly rate
        const N = tenureYears * 12; // Months

        // EMI Formula: [P x R x (1+R)^N] / [(1+R)^N-1]
        let emiCalc = 0;
        if (interestRate === 0) {
            emiCalc = P / N;
        } else {
            emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        }

        const totalPayable = emiCalc * N;
        const totalInt = totalPayable - P;

        // Amortization Schedule (Annual)
        let balance = P;
        const schedule = [];
        let currentYear = new Date().getFullYear() + 1;

        let yearlyInterest = 0;
        let yearlyPrincipal = 0;

        for (let i = 1; i <= N; i++) {
            const interest = balance * R;
            const principal = emiCalc - interest;
            balance -= principal;
            if (balance < 0) balance = 0;

            yearlyInterest += interest;
            yearlyPrincipal += principal;

            if (i % 12 === 0 || i === N) {
                schedule.push({
                    year: currentYear,
                    principal: yearlyPrincipal,
                    interest: yearlyInterest,
                    balance: balance,
                    paidPercent: ((loanAmount - balance) / loanAmount) * 100
                });
                currentYear++;
                yearlyInterest = 0;
                yearlyPrincipal = 0;
            }
        }

        return {
            emi: emiCalc,
            totalInterest: totalInt,
            totalAmount: totalPayable,
            amortizationSchedule: schedule
        };
    }, [loanAmount, tenureYears, interestRate]);

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

                        {/* Loan Amount */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Loan Amount (₹)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    ₹ {formatNumber(loanAmount)}
                                </div>
                            </div>
                            <input
                                type="range"
                                min="100000"
                                max="100000000"
                                step="100000"
                                value={loanAmount}
                                onChange={(e) => handleSliderChange(setLoanAmount, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>1L</span>
                                <span>10Cr</span>
                            </div>
                        </div>

                        {/* Tenure */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Tenure (Years)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    {tenureYears} Years
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                step="1"
                                value={tenureYears}
                                onChange={(e) => handleSliderChange(setTenureYears, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>1 Yr</span>
                                <span>30 Yrs</span>
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-gray-700">Rate of Interest (%)</label>
                                <div className="bg-[#FFF9C4] text-[#FDB913] font-bold py-1 px-4 rounded-lg">
                                    {interestRate} %
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                step="0.1"
                                value={interestRate}
                                onChange={(e) => handleSliderChange(setInterestRate, e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB913]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>1%</span>
                                <span>20%</span>
                            </div>
                        </div>

                        {/* Pre-payment Option Placeholder */}


                    </div>

                    {/* Right: Results & Chart */}
                    <div className="p-8 md:p-12 bg-white flex flex-col items-center justify-center relative">
                        {/* Summary Header */}
                        <div className="text-center mb-8">
                            <p className="text-gray-500 font-medium mb-1">Your EMI Per Month</p>
                            <h2 className="text-4xl font-bold text-[#191758]">{formatCurrency(emi)}</h2>
                        </div>

                        {/* Pie Chart Visualization */}
                        <div className="relative w-64 h-64 mb-10">
                            {/* Simple Conic Gradient for Pie Chart */}
                            <style jsx>{`
                                    .pie-chart {
                                        background: conic-gradient(
                                            #FDB913 0% ${((totalInterest / totalAmount) * 100)}%, 
                                            #191758 ${((totalInterest / totalAmount) * 100)}% 100%
                                        );
                                    }
                                `}</style>
                            <div
                                className="w-full h-full rounded-full"
                                style={{
                                    background: `conic-gradient(
                                            #FDB913 0% ${((totalInterest / totalAmount) * 100)}%, 
                                            #191758 ${((totalInterest / totalAmount) * 100)}% 100%
                                        )`
                                }}
                            ></div>
                        </div>

                        {/* Legend / Stats */}
                        <div className="w-full grid grid-cols-2 gap-y-4 gap-x-8">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-3 h-3 rounded-full bg-[#191758]"></div>
                                    <span className="text-gray-500 text-sm">Loan Amount</span>
                                </div>
                                <p className="text-lg font-bold text-[#191758]">{formatCurrency(loanAmount)}</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-3 h-3 rounded-full bg-[#FDB913]"></div>
                                    <span className="text-gray-500 text-sm">Total Interest</span>
                                </div>
                                <p className="text-lg font-bold text-[#191758]">{formatCurrency(totalInterest)}</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                                    <span className="text-gray-500 text-sm">Processing Fees</span>
                                </div>
                                <p className="text-lg font-bold text-[#191758]">₹ 5,000</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Amortization Table */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-[#191758]">Home Loan Amortization Table</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                                <th className="p-5 font-semibold text-center">Year</th>
                                <th className="p-5 font-semibold text-right">Principal (₹)</th>
                                <th className="p-5 font-semibold text-right">Interest (₹)</th>
                                <th className="p-5 font-semibold text-right">Balance (₹)</th>
                                <th className="p-5 font-semibold text-right">Paid (%)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {amortizationSchedule.map((row) => (
                                <tr key={row.year} className="hover:bg-[#FFF9C4]/30 transition-colors text-sm font-medium text-gray-700">
                                    <td className="p-5 text-center text-[#191758] font-bold">{row.year}</td>
                                    <td className="p-5 text-right">{formatNumber(Math.round(row.principal))}</td>
                                    <td className="p-5 text-right">{formatNumber(Math.round(row.interest))}</td>
                                    <td className="p-5 text-right">{formatNumber(Math.round(row.balance))}</td>
                                    <td className="p-5 text-right">{row.paidPercent.toFixed(2)}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EMIcalculator;
