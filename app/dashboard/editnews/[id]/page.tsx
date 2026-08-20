"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import RichTextEditor, {
  BaseKit,
  Bold,
  BulletList,
  Heading,
  Italic,
  Blockquote,
  Code,
  Color,
  FontSize,
  History,
  HorizontalRule,
  Iframe,
  Indent,
  Link,
  OrderedList,
  SlashCommand,
  Strike,
  Table,
  Katex,
  Underline,
  Image,
  FontFamily,
} from "reactjs-tiptap-editor";
import "reactjs-tiptap-editor/style.css";

interface News {
  id: number;
  newsTitle: string;
  newsDescription: string;
  writer: string;
  category: string;
  tags: string;
  newsContent: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyword?: string;
  canonical?: string;
}

export default function EditNewsPage() {
  const { id } = useParams();
  const router = useRouter();
  const editorRef = useRef<any>(null);

  const [news, setNews] = useState({
    newsTitle: "",
    newsDescription: "",
    newsContent: "",
    newsImage: [] as File[],
    writer: "",
    category: "",
    tags: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    metaKeyword: "",
    canonical: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const extensions = [
    BaseKit.configure({
      placeholder: { showOnlyCurrent: true },
      characterCount: { limit: 50000 },
    }),
    Heading,
    Italic,
    Bold,
    BulletList,
    Blockquote,
    Code,
    Color,
    FontSize,
    History,
    HorizontalRule,
    Iframe,
    Indent,
    Link.configure({ autolink: true, openOnClick: false, validate: href => true, isAllowedUri: (url, ctx) => true }),
    OrderedList,
    SlashCommand,
    Strike,
    Table,
    Katex,
    Underline,
    FontFamily.configure({ types: ["textStyle"] }),
  ];

  // Fetch existing news data — fetch all and find by id
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Try single-news endpoint first, fall back to list
        let data: News | undefined;
        try {
          const res = await axios.get(
            `https://api.propertydronerealty.com/news/${id}`
          );
          data = res.data;
        } catch {
          // If single endpoint fails, fetch list and find by id
          const res = await axios.get("https://api.propertydronerealty.com/news");
          const list: News[] = res.data;
          data = list.find((n) => String(n.id) === String(id));
        }

        if (!data) {
          setError("News not found.");
          return;
        }

        setNews({
          newsTitle: data.newsTitle || "",
          newsDescription: data.newsDescription || "",
          newsContent: data.newsContent || "",
          newsImage: [],
          writer: data.writer || "",
          category: data.category || "",
          tags: data.tags || "",
          slug: data.slug || "",
          metaTitle: data.metaTitle || "",
          metaDescription: data.metaDescription || "",
          metaKeyword: data.metaKeyword || "",
          canonical: data.canonical || "",
        });
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news data.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchNews();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Get the latest content directly from the editor instance to bypass any debounce delays
      const latestContent = editorRef.current?.editor?.getHTML() || news.newsContent;
      
      const formData = new FormData();
      formData.append("newsTitle", news.newsTitle);
      formData.append("newsDescription", news.newsDescription);
      formData.append("newsContent", latestContent || "<p></p>");
      formData.append("writer", news.writer);
      formData.append("category", news.category);
      formData.append("tags", news.tags);
      formData.append("slug", news.slug);
      formData.append("metaTitle", news.metaTitle);
      formData.append("metaDescription", news.metaDescription);
      formData.append("metaKeyword", news.metaKeyword);
      formData.append("canonical", news.canonical);

      if (news.newsImage && news.newsImage.length > 0) {
        news.newsImage.forEach((file, index) => {
          formData.append(`newsImage[${index}]`, file);
        });
      }

      await axios.put(
        `https://api.propertydronerealty.com/news/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("News updated successfully!");
      router.push("/dashboard/allnews");
    } catch (err) {
      console.error("Error updating news:", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Validation failed");
      } else {
        setError("Failed to update news. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 text-black">
        <p className="text-black">Loading news data...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 text-black">
      <div className="flex items-center mb-4 gap-3">
        <button
          onClick={() => router.push("/dashboard/allnews")}
          className="text-gray-600 hover:text-black transition-colors"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold text-black">Edit News</h1>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded">
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">Title*</label>
          <input
            type="text"
            className="border p-2 w-full rounded text-black placeholder-gray-700"
            placeholder="Enter news title"
            value={news.newsTitle}
            onChange={(e) => setNews({ ...news, newsTitle: e.target.value })}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">Description*</label>
          <textarea
            className="border p-2 w-full rounded text-black placeholder-gray-700"
            placeholder="Enter short description"
            value={news.newsDescription}
            onChange={(e) => setNews({ ...news, newsDescription: e.target.value })}
            required
            rows={3}
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">Content*</label>
          <div className="border rounded bg-white p-4">
            <RichTextEditor
              ref={editorRef}
              output="html"
              content={news.newsContent}
              onChangeContent={(content) => setNews(prev => ({ ...prev, newsContent: content }))}
              extensions={extensions}
              minHeight="300px"
              useEditorOptions={{
                editorProps: {
                  attributes: {
                    class: "prose dark:prose-invert max-w-none",
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Writer & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Writer*</label>
            <input
              type="text"
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="Writer name"
              value={news.writer}
              onChange={(e) => setNews({ ...news, writer: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Category*</label>
            <input
              type="text"
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="News category"
              value={news.category}
              onChange={(e) => setNews({ ...news, category: e.target.value })}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">Tags*</label>
          <input
            type="text"
            className="border p-2 w-full rounded text-black placeholder-gray-700"
            placeholder="News tags"
            value={news.tags}
            onChange={(e) => setNews({ ...news, tags: e.target.value })}
          />
        </div>

        {/* SEO Details */}
        <div className="mb-4 bg-gray-50 p-4 border rounded">
          <h2 className="text-lg font-semibold mb-4 text-black">SEO Details</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">Slug</label>
            <input
              type="text"
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="url-slug"
              value={news.slug}
              onChange={(e) => setNews({ ...news, slug: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">Meta Title</label>
            <input
              type="text"
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="SEO Meta Title"
              value={news.metaTitle}
              onChange={(e) => setNews({ ...news, metaTitle: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">Meta Description</label>
            <textarea
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="SEO Meta Description"
              value={news.metaDescription}
              onChange={(e) => setNews({ ...news, metaDescription: e.target.value })}
              rows={2}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">Meta Keywords</label>
            <input
              type="text"
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="keyword1, keyword2, etc."
              value={news.metaKeyword}
              onChange={(e) => setNews({ ...news, metaKeyword: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">Canonical URL</label>
            <input
              type="text"
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="https://example.com/canonical-url"
              value={news.canonical}
              onChange={(e) => setNews({ ...news, canonical: e.target.value })}
            />
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">Featured Image</label>
          <input
            type="file"
            className="w-full text-black"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setNews({ ...news, newsImage: Array.from(e.target.files) });
              }
            }}
            accept="image/*"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => router.push("/dashboard/allnews")}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors disabled:bg-blue-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update News"}
          </button>
        </div>
      </form>
    </div>
  );
}
