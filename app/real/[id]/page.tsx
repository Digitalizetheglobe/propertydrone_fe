import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    <div className="container mx-auto px-4 py-8">
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
  );
}