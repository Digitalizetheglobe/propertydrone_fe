'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Mail, Lock, Shield, Home, Calendar, User } from 'lucide-react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import luxeImage from "@/public/images/luxe1.png"; // Import a background image

const Signin = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            const response = await axios.post('https://api.propertydronerealty.com/api/webusers/login', {
                email: data.email,
                password: data.password
            });

            if (response.status === 200) {
                toast.success('Login successful!');
                // Store user data/token if needed
                localStorage.setItem('webuser', JSON.stringify(response.data));

                setTimeout(() => {
                    router.push('/');
                }, 1000);
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Invalid credentials. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <Toaster position="top-right" />

            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden w-full max-w-[1200px] flex flex-col md:flex-row min-h-[700px]">
                {/* Left Side - Image and Content */}
                <div className="relative w-full md:w-[45%] bg-[#172747] text-white p-12 hidden md:flex flex-col justify-between overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <Image
                            src={luxeImage}
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#172747]/80 to-[#172747]/90 z-10" />

                    {/* Content */}
                    <div className="relative z-20 h-full flex flex-col justify-between">


                        <div className="mt-12">
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                                Welcome back to your property journey
                            </h1>
                            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                                Sign in to access your personalized dashboard and continue exploring premium properties.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <Home className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="font-medium text-white">Access your saved properties</h3>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <Calendar className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="font-medium text-white">Manage scheduled site visits</h3>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <User className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="font-medium text-white">Connect with your consultant</h3>
                                </div>
                            </div>
                        </div>

                        <div className="text-sm text-gray-300 mt-12">
                            Â© {new Date().getFullYear()} Property Drone Realty. All rights reserved.
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-16 flex items-center justify-center">
                    <div className="max-w-md w-full">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-[#0066FF] mb-6">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
                            <p className="text-gray-500">Access your account</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
                                        })}
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:border-[#172747] focus:ring-1 focus:ring-[#172747] transition-all text-sm`}
                                    />
                                </div>
                                {errors.email && <p className="text-red-500 text-xs">{errors.email.message as string}</p>}
                            </div>

                            {/* Password */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">Password <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input
                                        {...register('password', { required: 'Required' })}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className={`w-full pl-10 pr-10 py-3 bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:border-[#172747] focus:ring-1 focus:ring-[#172747] transition-all text-sm`}
                                    />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                                {errors.password && <p className="text-red-500 text-xs">{errors.password.message as string}</p>}
                            </div>

                            <div className="flex items-start pt-2">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        {...register('terms', { required: 'You must consent to proceed' })}
                                        className="w-4 h-4 text-[#0066FF] border-gray-300 rounded focus:ring-[#0066FF]"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="text-gray-500">I consent to the processing of my personal data in accordance with the <Link href="/privacy-policy" className="text-[#0066FF] font-semibold hover:underline">Privacy Policy</Link> and <Link href="/terms-and-condition" className="text-[#0066FF] font-semibold hover:underline">Terms & Conditions</Link>.</label>
                                </div>
                            </div>
                            {errors.terms && <p className="text-red-500 text-xs mt-0">{errors.terms.message as string}</p>}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-[#0066FF] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? 'Signing In...' : 'Sign In'}
                            </button>

                            <div className="text-center mt-6">
                                <p className="text-sm text-gray-600">
                                    Don't have an account?{' '}
                                    <Link href="/signup" className="font-semibold text-[#0066FF] hover:text-blue-700">
                                        Create Account
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
