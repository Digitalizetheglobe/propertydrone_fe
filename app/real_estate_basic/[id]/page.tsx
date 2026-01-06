import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image1 from'@/public/images/bgimage2.png';
import { Metadata, ResolvingMetadata } from 'next';

interface RealEstateBasic {
  id: number;
  title: string;
  description: string;
  keywords: string;
  images: string[];
  createdAt: string;
}

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function getRealEstateBasic(id: string) {
  const res = await fetch(`http://localhost:5000/real-estate/${id}`, {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch real estate basic');
  return res.json();
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { id } = await params;
    const basic = await getRealEstateBasic(id);
    
    return {
      title: basic.title,
      description: basic.description,
    };
  } catch (error) {
    return {
      title: 'Real Estate Details',
      description: 'View real estate property details',
    };
  }
}

export default async function RealEstateBasicPage({
  params,
}: {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params;
  const basic: RealEstateBasic = await getRealEstateBasic(id);

  return (
    <>
       <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Background Image - Using standard img tag for external URLs */}
          <div className="absolute inset-0 h-full w-full">
            <Image
              src={image1}
              alt={basic.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative flex flex-col max-w-6xl justify-center h-full ml-10 text-white px-4">
               <h1
        style={{
        fontFamily: "Ivy Mode",
        fontWeight: 100,
        lineHeight: '150%',
        letterSpacing: '0'
        }}
        className="mb-4 text-white text-[42px] sm:text-[56px]"
      
            >
              {basic.title}
            </h1>

             <p className="text-white text-[18px] sm:text-[28px] my-4 md:mb-0 leading-none"
          style={{ fontWeight:'300',fontFamily: 'Lato', letterSpacing: '1px', lineHeight: '100%' }}>
              <Link href="/">
                <button className="bg-transparent text-white hover:text-red-700 rounded">
                  Home
                </button>
              </Link> / <Link href="/real">
                <button className="bg-transparent text-white hover:text-red-700 rounded">
                  Properties
                </button>
              </Link> / <Link href={`/real/`}>
                <button className='text-[#FEEB8F]'>bhavik</button>
              </Link>
            </p>
          </div>
        </section>
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Link
        href="/real"
        className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Real Estate Basics
      </Link>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{basic.title}</h1>

        {basic.images && basic.images.length > 0 && (
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={basic.images[0]}
              alt={basic.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose max-w-none">
          <p className="text-gray-600 text-lg mb-6">{basic.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {basic.keywords.split(',').map((keyword, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {keyword.trim()}
              </span>
            ))}
          </div>

          <div className="text-sm text-gray-500">
         Published on {new Date(basic.createdAt).toLocaleDateString()}
          </div>
        </div>
      </article>
    </div>
    </>
  );
}