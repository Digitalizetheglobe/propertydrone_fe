import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { Geist } from 'next/font/google'
import "./globals.css";
import { AuthProvider } from './context/AuthContext';
import MainHeader from "./components/mainHeader";
import ScrollButton from "./components/scrollbutton";
import WhatsAppPopup from "./components/whatsapp";
import Mainfooter from "./components/mainfooter";
import LayoutWithConditionalHeader from "./components/LayoutWithConditionalHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PROPERTY DRONE",
  description: "property drone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link href="https://fonts.googleapis.com/css2?family=Ivy+Mode:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <AuthProvider>
          <LayoutWithConditionalHeader>
            {children}
          </LayoutWithConditionalHeader>
          {/* {typeof window !== "undefined" && window.location.pathname.startsWith("/dashboard") ? null : <MainHeader />} */}
          <WhatsAppPopup />
          <ScrollButton />
          {/* {typeof window !== "undefined" && window.location.pathname.startsWith("/dashboard") ? null : <Mainfooter />} */}
        </AuthProvider>
      </body>
    </html>
  );
}
