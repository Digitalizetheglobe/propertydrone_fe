// app/commercial-properties/[slug]/page.tsx
import { notFound } from 'next/navigation';
import CommercialPropertyDetail from '@/app/components/CommercialPropertyDetail';

async function getProperty(slug: string) {
    // Try to fetch by ID if numeric
    const isNumeric = /^\d+$/.test(slug);

    if (isNumeric) {
        try {
            const res = await fetch(`https://api.propertydronerealty.com/api/commercial-properties/${slug}`, { cache: 'no-store' });
            if (res.ok) return res.json();
        } catch (e) { }
    }

    // Try by slug
    try {
        const res = await fetch(`https://api.propertydronerealty.com/api/commercial-properties/slug/${slug}`, { cache: 'no-store' });
        if (res.ok) return res.json();
    } catch (e) { }

    return null;
}


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const property = await getProperty(slug);

    if (!property) {
        notFound();
    }

    return <CommercialPropertyDetail property={property} />;
}
