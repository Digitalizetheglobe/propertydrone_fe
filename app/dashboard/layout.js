"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect if not authenticated
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50">
        <div className="hidden md:block"><Sidebar /></div>
        <main className="flex-1 ml-0 md:ml-60 p-6">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
