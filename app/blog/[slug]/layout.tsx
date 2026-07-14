import type { Metadata, ResolvingMetadata } from 'next'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.propertydronerealty.com'
const BASE_URL = 'https://propertydronerealty.com'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params

  try {
    const res = await fetch(`${API_BASE}/blogs/${slug}`, {
      next: { revalidate: 0 }, // Ensure it fetches fresh SEO details without caching delays
    })

    if (res.ok) {
      const blog = await res.json()

      const title = blog.metaTitle?.trim() || blog.blogTitle || 'Real Estate Blog Pune | Tips & Insights | PropertyDrone Realty'
      const description = blog.metaDescription?.trim() || blog.blogDescription || 'Read Pune real estate blogs on buying tips, investment strategies, home loans & market trends. Stay informed.'

      let keywords = blog.metaKeyword?.trim() || 'real estate blog Pune,property buying tips,home loan advice,real estate market trends India'
      if (!blog.metaKeyword?.trim() && typeof blog.tags === 'string' && blog.tags.trim()) {
        keywords = blog.tags.trim()
      } else if (!blog.metaKeyword?.trim() && Array.isArray(blog.tags) && blog.tags.length > 0) {
        keywords = blog.tags.join(',')
      }

      const canonical = blog.canonical?.trim() || `${BASE_URL}/blog/${slug}`

      let imageUrl = null;
      if (blog.blogImage && Array.isArray(blog.blogImage) && blog.blogImage.length > 0) {
        const path = blog.blogImage[0].path;
        if (path) {
          imageUrl = path.startsWith('http') ? path : `${API_BASE}${path.startsWith('/') ? path : '/' + path}`;
        }
      }

      return {
        title,
        description,
        keywords,
        alternates: {
          canonical,
        },
        openGraph: {
          title,
          description,
          url: canonical,
          type: 'article',
          ...(imageUrl && { images: [{ url: imageUrl }] }),
        },
        twitter: {
          card: 'summary_large_image',
          title,
          description,
          ...(imageUrl && { images: [imageUrl] }),
        },
      }
    }
  } catch (error) {
    console.error('Error fetching blog metadata:', error)
  }

  // Fallback metadata if fetch fails
  return {
    title: 'Real Estate Blog Pune | Tips & Insights | PropertyDrone Realty',
    description: 'Read Pune real estate blogs on buying tips, investment strategies, home loans & market trends. Stay informed.',
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    }
  }
}

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
