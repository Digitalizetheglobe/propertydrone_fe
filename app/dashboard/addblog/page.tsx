"use client";
import React, { useState, useCallback, useRef } from "react";
import axios from "axios";
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
  FontFamily
} from 'reactjs-tiptap-editor';
import 'reactjs-tiptap-editor/style.css';

export default function AddBlog() {
  const [blog, setBlog] = useState({
    blogTitle: "",
    blogDescription: "",
    blogContent: "",
    blogImage: [] as File[],
    writer: "",
    category: "",
    tags: "",
    metaTitle: "",
    metaDescription: "",
    metaKeyword: "",
    canonical: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const editorRef = useRef<any>(null);

  const event = new CustomEvent("myEvent", { detail: { data: "something" } });
  window.dispatchEvent(event);


  const extensions = [
    BaseKit.configure({
      placeholder: {
        showOnlyCurrent: true,
      },
      characterCount: {
        limit: 50000,
      },
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
    FontFamily.configure({
      types: ['textStyle'],
    }),
    // Image.configure({
    //   upload: async (file: File) => {
    //     try {
    //       const formData = new FormData();
    //       formData.append('file', file);
    //       formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!); 

    //       const cloudinaryResponse = await axios.post(
    //         `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, 
    //         formData,
    //         {
    //           headers: { 'Content-Type': 'multipart/form-data' }
    //         }
    //       );

    //       return cloudinaryResponse.data.secure_url;
    //     } catch (error) {
    //       console.error('Image upload failed', error);
    //       return URL.createObjectURL(file);
    //     }
    //   },
    // }),
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Get the latest content directly from the editor instance to bypass any debounce delays
    const latestContent = editorRef.current?.editor?.getHTML() || blog.blogContent;

    try {
      const formData = new FormData();
      formData.append('blogTitle', blog.blogTitle);
      formData.append('blogDescription', blog.blogDescription);
      formData.append('blogContent', latestContent || "<p></p>");
      formData.append('writer', blog.writer);
      formData.append('category', blog.category);
      formData.append('tags', blog.tags);
      formData.append('metaTitle', blog.metaTitle);
      formData.append('metaDescription', blog.metaDescription);
      formData.append('metaKeyword', blog.metaKeyword);
      formData.append('canonical', blog.canonical);

      // Add tags


      // Add image if present
      if (blog.blogImage) {
        blog.blogImage.forEach((file, index) => {
          formData.append(`blogImage[${index}]`, file);
        });
      }

      const response = await axios.post("https://api.propertydronerealty.com/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Blog added successfully!");

      // Reset form
      setBlog({
        blogTitle: "",
        blogDescription: "",
        blogContent: "",
        blogImage: [],
        writer: "",
        category: "",
        tags: "",
        metaTitle: "",
        metaDescription: "",
        metaKeyword: "",
        canonical: "",
      });
    } catch (error) {
      console.error("Error adding blog:", error);
      setError("Failed to add blog. Please try again.");
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Validation failed");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6 text-black">
      <h1 className="text-2xl font-bold mb-4 text-black">Add New Blog</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded">
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

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">Content*</label>
          <div className="border rounded bg-white p-4">
            <RichTextEditor
              ref={editorRef}
              output="html"
              content={blog.blogContent}
              onChangeContent={(content) => setBlog({ ...blog, blogContent: content })}
              extensions={extensions}
              minHeight="300px"
              useEditorOptions={{
                editorProps: {
                  attributes: {
                    class: 'prose dark:prose-invert max-w-none',
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Writer*</label>
            <input
              type="string"
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
              type="string"
              className="border p-2 w-full rounded text-black placeholder-gray-700"
              placeholder="Blog category"
              value={blog.category}
              onChange={(e) => setBlog({ ...blog, category: e.target.value })}

            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">tags*</label>
          <input
            type="string"
            className="border p-2 w-full rounded text-black placeholder-gray-700"
            placeholder="Blog tags"
            value={blog.tags}
            onChange={(e) => setBlog({ ...blog, tags: e.target.value })}

          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">Meta Title</label>
          <input
            type="text"
            className="border p-2 w-full rounded text-black placeholder-gray-700"
            placeholder="Meta Title"
            value={blog.metaTitle}
            onChange={(e) => setBlog({ ...blog, metaTitle: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">Meta Description</label>
          <textarea
            className="border p-2 w-full rounded text-black placeholder-gray-700"
            placeholder="Meta Description"
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
            placeholder="Meta Keywords"
            value={blog.metaKeyword}
            onChange={(e) => setBlog({ ...blog, metaKeyword: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">Canonical URL</label>
          <input
            type="text"
            className="border p-2 w-full rounded text-black placeholder-gray-700"
            placeholder="Canonical URL"
            value={blog.canonical}
            onChange={(e) => setBlog({ ...blog, canonical: e.target.value })}
          />
        </div>

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

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors disabled:bg-blue-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
}