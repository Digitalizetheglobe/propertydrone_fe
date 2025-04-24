import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppPopup from "./components/whatsapp";
import ScrollButton from "./components/scrollbutton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Discover Build Infinity: Your Trusted Partner for Customizable Homes in Pune",
  description: "Build Infinity, Pune's premier construction company, specializes in customizable villas and bungalows with a focus on quality and timely delivery.",
  keywords: "Customizable villas in Pune, Premium villa construction services, Architectural planning for custom homes, Personalized home construction Pune, Luxury home builders Pune, MEP services for villas Pune, Premium real estate Pune.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <meta name='robots' content='follow, index'/>
      <link href='https://thebuildinfinity.com/' rel='canonical' />
      <meta name="author" content="Build Infinity" />
      <body>
        <Header /> {/* Add the Header component */}
        {children}
        <WhatsAppPopup/>
        <ScrollButton/>
        <Footer /> {/* Add the Footer component */}
      </body>
    </html>
  );
}

