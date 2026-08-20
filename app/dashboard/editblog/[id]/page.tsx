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

interface Blog {
  id: number;
  blogTitle: string;
  blogDescription: string;
  writer: string;
  category: string;
  tags: string;
  blogContent: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyword?: string;
  canonical?: string;
}

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();
  const editorRef = useRef<any>(null);

  const [blog, setBlog] = useState({
    blogTitle: "",
    blogDescription: "",
    blogContent: "",
    blogImage: [] as File[],
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

  // Fetch existing blog data — fetch all and find by id
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Try single-blog endpoint first, fall back to list
        let data: Blog | undefined;
        try {
          const res = await axios.get(
            `https://api.propertydronerealty.com/blogs/${id}`
          );
          data = res.data;
        } catch {
          // If single endpoint fails, fetch list and find by id
          const res = await axios.get("https://api.propertydronerealty.com/blogs");
          const list: Blog[] = res.data;
          data = list.find((b) => String(b.id) === String(id));
        }

        if (!data) {
          setError("Blog not found.");
          return;
        }

        setBlog({
          blogTitle: data.blogTitle || "",
          blogDescription: data.blogDescription || "",
          blogContent: data.blogContent || "",
          blogImage: [],
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
        console.error("Error fetching blog:", err);
        setError("Failed to load blog data.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Get the latest content directly from the editor instance to bypass any debounce delays
      const latestContent = editorRef.current?.editor?.getHTML() || blog.blogContent;
      
      const formData = new FormData();
      formData.append("blogTitle", blog.blogTitle);
      formData.append("blogDescription", blog.blogDescription);
      formData.append("blogContent", latestContent || "<p></p>");
      formData.append("writer", blog.writer);
      formData.append("category", blog.category);
      formData.append("tags", blog.tags);
      formData.append("slug", blog.slug);
      formData.append("metaTitle", blog.metaTitle);
      formData.append("metaDescription", blog.metaDescription);
      formData.append("metaKeyword", blog.metaKeyword);
      formData.append("canonical", blog.canonical);

      if (blog.blogImage && blog.blogImage.length > 0) {
        blog.blogImage.forEach((file, index) => {
          formData.append(`blogImage[${index}]`, file);
        });
      }

      await axios.put(
        `https://api.propertydronerealty.com/blogs/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Blog updated successfully!");
      router.push("/dashboard/allblogs");
    } catch (err) {
      console.error("Error updating blog:", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Validation failed");
      } else {
        setError("Failed to update blog. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 text-black">
        <p className="text-black">Loading blog data...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 text-black">
      <div className="flex items-center mb-4 gap-3">
        <button
          onClick={() => router.push("/dashboard/allblogs")}
          className="text-gray-600 hover:text-black transition-colors"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold text-black">Edit Blog</h1>
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
            placeholder="Enter blog title"
            value={blog.blogTitle}
            onChange={(e) => setBlog({ ...blog, blogTitle: e.target.value })}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">Description*</label>
          <textarea
            className="border p-2 w-full rounded text-black placeholder-gray-700"
            placeholder="Enter short description"
            value={blog.blogDescription}
            onChange={(e) => setBlog({ ...blog, blogDescription: e.target.value })}
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
              content={blog.blogContent}
              onChangeContent={(content) => setBlog(prev => ({ ...prev, blogContent: content }))}
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
              value={blog.writer}
              onChange={(e) => setBlog({ ...blog, writer: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Category*</label>
            <input
              type="text"
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="Blog category"
              value={blog.category}
              onChange={(e) => setBlog({ ...blog, category: e.target.value })}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">Tags*</label>
          <input
            type="text"
            className="border p-2 w-full rounded text-black placeholder-gray-700"
            placeholder="Blog tags"
            value={blog.tags}
            onChange={(e) => setBlog({ ...blog, tags: e.target.value })}
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
              value={blog.slug}
              onChange={(e) => setBlog({ ...blog, slug: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">Meta Title</label>
            <input
              type="text"
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="SEO Meta Title"
              value={blog.metaTitle}
              onChange={(e) => setBlog({ ...blog, metaTitle: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">Meta Description</label>
            <textarea
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="SEO Meta Description"
              value={blog.metaDescription}
              onChange={(e) => setBlog({ ...blog, metaDescription: e.target.value })}
              rows={2}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">Meta Keywords</label>
            <input
              type="text"
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="keyword1, keyword2, etc."
              value={blog.metaKeyword}
              onChange={(e) => setBlog({ ...blog, metaKeyword: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">Canonical URL</label>
            <input
              type="text"
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="https://example.com/canonical-url"
              value={blog.canonical}
              onChange={(e) => setBlog({ ...blog, canonical: e.target.value })}
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
                setBlog({ ...blog, blogImage: Array.from(e.target.files) });
              }
            }}
            accept="image/*"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => router.push("/dashboard/allblogs")}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors disabled:bg-blue-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
