'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, User, Mail, Phone, Lock, Building, CheckCircle, Shield, Briefcase, Calendar } from 'lucide-react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import luxeImage from "@/public/images/luxe1.png"; // Import a background image
import logo from "@/public/images/PropertyDrone-Logo-e1687615846810 2.png"; // Assuming standard logo path

const Signup = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch('password');

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:9000/api/webusers/register', {
                name: data.name,
                email: data.email,
                number: data.number,
                password: data.password
            });

            if (response.status === 201) {
                toast.success('Registration successful! Redirecting to login...');
                setTimeout(() => {
                    router.push('/signin');
                }, 2000);
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Something went wrong. Please try again.');
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
                        <div className="flex items-center gap-3">
                            {/* Logo Placeholder - Adjust if you have a specific white logo for dark bg */}
                            {/* <Image src={logo} alt="Logo" width={40} height={40} className="brightness-0 invert" /> */}
                            {/* <div className="text-2xl font-bold tracking-wide">Property Drone Realty</div> */}
                        </div>

                        <div className="mt-12">
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                                Take control of your property journey
                            </h1>

                            <div className="space-y-6 mt-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <Building className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-white">Premium property listings</h3>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-white">Personalized recommendations</h3>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <Briefcase className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-white">Exclusive market insights</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-sm text-gray-300 mt-12">
                            Â© {new Date().getFullYear()} Property Drone Realty. All rights reserved.
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-16 overflow-y-auto">
                    <div className="max-w-md mx-auto h-full flex flex-col justify-center">
                        <div className="text-center md:text-left mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                            <p className="text-gray-500">Join PropertyDrone Realty to find your perfect property</p>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                            {/* Name */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input
                                        {...register('name', { required: 'Name is required' })}
                                        type="text"
                                        placeholder="Enter your full name"
                                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:border-[#172747] focus:ring-1 focus:ring-[#172747] transition-all text-sm`}
                                    />
                                </div>
                                {errors.name && <p className="text-red-500 text-xs">{errors.name.message as string}</p>}
                            </div>

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

                            {/* Mobile Number */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">Mobile Number <span className="text-red-500">*</span></label>
                                <div className="relative flex">
                                    <div className="flex items-center justify-center px-4 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-500 font-medium text-sm">
                                        +91
                                    </div>
                                    <input
                                        {...register('number', {
                                            required: 'Phone number is required',
                                            pattern: { value: /^[0-9]{10}$/, message: 'Valid 10-digit number required' }
                                        })}
                                        type="tel"
                                        placeholder="message"
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.number ? 'border-red-500' : 'border-gray-200'} rounded-r-xl focus:outline-none focus:border-[#172747] focus:ring-1 focus:ring-[#172747] transition-all text-sm`}
                                    />
                                </div>
                                {errors.number && <p className="text-red-500 text-xs">{errors.number.message as string}</p>}
                            </div>

                            {/* Password input group */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-gray-700">Password <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <Lock className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                        <input
                                            {...register('password', { required: 'Required', minLength: { value: 6, message: 'Min 6 chars' } })}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            className={`w-full pl-10 pr-10 py-3 bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:border-[#172747] focus:ring-1 focus:ring-[#172747] transition-all text-sm`}
                                        />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                    {errors.password && <p className="text-red-500 text-xs">{errors.password.message as string}</p>}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-gray-700">Confirm Password <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <Lock className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                        <input
                                            {...register('confirmPassword', {
                                                required: 'Required',
                                                validate: (val: string) => watch('password') === val || "Match failed"
                                            })}
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm"
                                            className={`w-full pl-10 pr-10 py-3 bg-gray-50 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:border-[#172747] focus:ring-1 focus:ring-[#172747] transition-all text-sm`}
                                        />
                                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message as string}</p>}
                                </div>
                            </div>


                            {/* Terms */}
                            <div className="flex items-start pt-2">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        {...register('terms', { required: 'Required' })}
                                        className="w-4 h-4 text-[#172747] border-gray-300 rounded focus:ring-[#172747]"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="text-gray-500">I agree to the <Link href="/terms" className="text-[#172747] font-semibold hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-[#172747] font-semibold hover:underline">Privacy Policy</Link>.</label>
                                </div>
                            </div>
                            {errors.terms && <p className="text-red-500 text-xs mt-0">You must accept the terms.</p>}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-[#0066FF] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </button>

                            <div className="text-center mt-6">
                                <p className="text-sm text-gray-600">
                                    Already have an account?{' '}
                                    <Link href="/signin" className="font-semibold text-[#0066FF] hover:text-blue-700">
                                        Sign In Here
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

export default Signup;
