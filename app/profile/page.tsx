"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    GitCompare,
    Search,
    User,
    Heart,
    LogOut,
    MapPin,
    CheckCircle,
    Loader2
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

interface UserData {
    id: number;
    name: string;
    email: string; // fallback if needed
    number: string;
    city?: string;
    role?: string;
    createdAt?: string;
}

export default function Profile() {
    const router = useRouter();
    const [user, setUser] = useState<UserData | null>(null);
    const [savedCount, setSavedCount] = useState<number>(0);
    const [compareCount, setCompareCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    const baseUrl = "https://api.propertydronerealty.com";

    useEffect(() => {
        const storedUser = localStorage.getItem("webuser");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                fetchStats(parsedUser.id);
            } catch (err) {
                console.error("Error parsing user data", err);
                router.push("/signin");
            }
        } else {
            router.push("/signin");
        }
        setIsLoading(false);
    }, [router]);

    const fetchStats = async (userId: number) => {
        try {
            // Fetch Saved Properties
            const savedRes = await fetch(`${baseUrl}/api/saved-properties?webUserId=${userId}`);
            if (savedRes.ok) {
                const savedData = await savedRes.json();
                const userSaved = savedData.filter((item: any) => Number(item.webUserId) === Number(userId));
                setSavedCount(userSaved.length);
            }

            // Fetch Compared Properties
            const compareRes = await fetch(`${baseUrl}/api/property-comparisons?webUserId=${userId}`);
            if (compareRes.ok) {
                const compareData = await compareRes.json();
                const userCompared = compareData.filter((item: any) => Number(item.webUserId) === Number(userId));
                setCompareCount(userCompared.length);
            }
        } catch (error) {
            console.error("Error fetching stats:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("webuser");
        toast.success("Logged out successfully");
        setTimeout(() => {
            router.push("/signin");
        }, 1000);
    };

    const handleClearAll = async () => {
        if (!user) return;

        if (!confirm("Are you sure you want to clear all saved and compared properties?")) {
            return;
        }

        const toastId = toast.loading("Clearing data...");

        try {
            // 1. Fetch all IDs to delete
            const [savedRes, compareRes] = await Promise.all([
                fetch(`${baseUrl}/api/saved-properties?webUserId=${user.id}`),
                fetch(`${baseUrl}/api/property-comparisons?webUserId=${user.id}`)
            ]);

            const savedAll = await savedRes.json();
            const compareAll = await compareRes.json();

            const userSaved = savedAll.filter((item: any) => Number(item.webUserId) === Number(user.id));
            const userCompared = compareAll.filter((item: any) => Number(item.webUserId) === Number(user.id));

            // 2. Delete Requests
            const deletePromises = [
                ...userSaved.map((item: any) => fetch(`${baseUrl}/api/saved-properties/${item.id}`, { method: 'DELETE' })),
                ...userCompared.map((item: any) => fetch(`${baseUrl}/api/property-comparisons/${item.id}`, { method: 'DELETE' }))
            ];

            await Promise.all(deletePromises);

            // 3. Update State
            setSavedCount(0);
            setCompareCount(0);
            toast.success("All cleared successfully", { id: toastId });

        } catch (error) {
            console.error("Error clearing data:", error);
            toast.error("Failed to clear data", { id: toastId });
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="w-8 h-8 animate-spin text-[#172747]" />
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50 flex font-lato">
            <Toaster position="top-right" />

            {/* Sidebar - Hidden on mobile, typically */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:block sticky top-0 h-screen overflow-y-auto">
                <div className="p-6">
                    {/* Logo area if needed, but usually Layout handles it. Sidebar items: */}
                    <nav className="space-y-6 mt-10">
                        <Link href="/dashboard/propertycomparison" className="flex items-center space-x-3 text-gray-600 hover:text-[#172747] transition-colors font-medium">
                            <GitCompare className="w-5 h-5" />
                            <span>Compare Properties</span>
                        </Link>

                        <Link href="/our-properties-in-pune" className="flex items-center space-x-3 text-gray-600 hover:text-[#172747] transition-colors font-medium">
                            <Search className="w-5 h-5" />
                            <span>Explore More</span>
                        </Link>

                        <div className="flex items-center space-x-3 text-[#172747] font-bold border-r-4 border-[#172747] -mr-6 py-2">
                            <User className="w-5 h-5" />
                            <span>Profile</span>
                        </div>

                        <Link href="/dashboard/savedproperty" className="flex items-center space-x-3 text-gray-600 hover:text-[#172747] transition-colors font-medium">
                            <Heart className="w-5 h-5" />
                            <span>Saved Properties</span>
                        </Link>

                        <div className="pt-10">
                            <button
                                onClick={handleLogout}
                                className="flex items-center space-x-3 text-red-500 hover:text-red-600 transition-colors font-medium w-full text-left"
                            >
                                <LogOut className="w-5 h-5" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-10">
                <h1 className="text-3xl font-bold text-[#172747] mb-8">My Profile</h1>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <div className="flex flex-col md:flex-row gap-10">

                        {/* Left Column: User Card */}
                        <div className="md:w-1/4 flex flex-col items-center  md:border-r md:border-gray-100 md:pr-10">
                            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <User className="w-16 h-16 text-gray-400" />
                            </div>
                            <h2 className="text-xl font-bold text-[#172747]">{user.name}</h2>
                            <p className="text-gray-500 mb-6">{user.role || 'User'}</p>

                            <div className="flex items-center text-gray-500 gap-2 w-full justify-center md:justify-start pl-4">
                                <MapPin className="w-4 h-4" />
                                <span>{user.city || 'Pune'}</span>
                            </div>
                        </div>

                        {/* Right Column: Details & Stats */}
                        <div className="md:w-3/4 flex flex-col gap-8">

                            {/* Account Info Box */}
                            <div className="bg-gray-100 rounded-lg p-6">
                                <h3 className="font-bold text-[#172747] mb-4">Account Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Full Name</p>
                                        <p className="text-gray-800 font-medium">{user.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Mobile Number</p>
                                        <p className="text-gray-800 font-medium">{user.number}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Account Status</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <span className="text-gray-800 font-medium">Active</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Verification</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <CheckCircle className="w-4 h-4 text-blue-500" />
                                            <span className="text-gray-800 font-medium">Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Saved Properties */}
                                <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
                                    <h3 className="font-bold text-[#172747] mb-2">Saved Properties</h3>
                                    <div className="text-3xl font-bold text-[#172747] mb-2">{savedCount}</div>
                                    <p className="text-sm text-gray-500 mb-4">Properties saved to your list</p>
                                    <Link href="/dashboard/savedproperty" className="text-blue-600 text-sm font-medium hover:underline">
                                        View all saved properties
                                    </Link>
                                </div>

                                {/* Compare Properties */}
                                <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
                                    <h3 className="font-bold text-[#172747] mb-2">Compare Properties</h3>
                                    <div className="text-3xl font-bold text-[#172747] mb-2">{compareCount}</div>
                                    <p className="text-sm text-gray-500 mb-4">Properties in your comparison list</p>
                                    <Link href="/dashboard/propertycomparison" className="text-blue-600 text-sm font-medium hover:underline">
                                        View comparison
                                    </Link>
                                </div>
                            </div>

                            {/* Clear Action */}
                            <div className="mt-auto">
                                <button
                                    onClick={handleClearAll}
                                    className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6 py-3 rounded-[4px] shadow-sm font-medium transition-colors"
                                >
                                    Clear All Saved & Compared
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
