import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface RealEstateBasic {
  id: number;
  title: string;
  description: string;
  keywords: string;
  images: string[];
  createdAt: string;
}

async function getRealEstateBasics() {
  const res = await fetch(`http://localhost:5000/real-estate`, {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch real estate basics');
  return res.json();
}

export default async function RealEstateBasicsPage() {
  const realEstateBasics: RealEstateBasic[] = await getRealEstateBasics();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Real Estate Basics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {realEstateBasics.map((basic) => (
          <Link href={`/real/${basic.id}`} key={basic.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {basic.images && basic.images[0] && (
                <div className="relative h-48 w-full">
                  <Image
                    src={basic.images[0]}
                    alt={basic.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{basic.title}</h2>
                <p className="text-gray-600 mb-2 line-clamp-2">{basic.description}</p>
                <div className="flex flex-wrap gap-2">
                  {basic.keywords.split(',').map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                    >
                      {keyword.trim()}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(basic.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 