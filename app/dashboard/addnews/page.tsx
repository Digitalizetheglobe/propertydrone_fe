"use client";
import React, { useState, useCallback } from "react";
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

export default function AddNews() {
    const [news, setNews] = useState({
        newsTitle: "",
        newsDescription: "",
        newsContent: "",
        newsImage: [] as File[],
        writer: "",
        category: "",
        tags: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const event = new CustomEvent("myEvent", { detail: { data: "something" } });
    if (typeof window !== 'undefined') {
        window.dispatchEvent(event);
    }


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
        Link,
        OrderedList,
        SlashCommand,
        Strike,
        Table,
        Katex,
        Underline,
        FontFamily.configure({
            types: ['textStyle'],
        }),
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append('newsTitle', news.newsTitle);
            formData.append('newsDescription', news.newsDescription);
            formData.append('newsContent', news.newsContent || "<p></p>");
            formData.append('writer', news.writer);
            formData.append('category', news.category);
            formData.append('tags', news.tags);

            // Add image if present
            if (news.newsImage) {
                news.newsImage.forEach((file, index) => {
                    formData.append(`newsImage[${index}]`, file);
                });
            }

            const response = await axios.post("https://api.propertydronerealty.com/news", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("News added successfully!");

            // Reset form
            setNews({
                newsTitle: "",
                newsDescription: "",
                newsContent: "",
                newsImage: [],
                writer: "",
                category: "",
                tags: "",
            });
        } catch (error) {
            console.error("Error adding news:", error);
            setError("Failed to add news. Please try again.");
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || "Validation failed");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Add New News</h1>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Title*</label>
                    <input
                        type="text"
                        className="border p-2 w-full rounded"
                        placeholder="Enter news title"
                        value={news.newsTitle}
                        onChange={(e) => setNews({ ...news, newsTitle: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Description*</label>
                    <textarea
                        className="border p-2 w-full rounded"
                        placeholder="Enter short description"
                        value={news.newsDescription}
                        onChange={(e) => setNews({ ...news, newsDescription: e.target.value })}
                        required
                        rows={3}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Content*</label>
                    <div className="border rounded bg-white p-4">
                        <RichTextEditor
                            output="html"
                            content={news.newsContent}
                            onChangeContent={(content) => setNews({ ...news, newsContent: content })}
                            extensions={extensions}
                            minHeight="300px"
                            useEditorOptions={{
                                editorProps: {
                                    attributes: {
                                        class: 'prose dark:prose-invert max-w-none',
                                    },
                                },
                            }}
                            bubbleMenu={{}}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Writer*</label>
                        <input
                            type="text"
                            className="border p-2 w-full rounded"
                            placeholder="Writer name"
                            value={news.writer}
                            onChange={(e) => setNews({ ...news, writer: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Category*</label>
                        <input
                            type="text"
                            className="border p-2 w-full rounded"
                            placeholder="News category"
                            value={news.category}
                            onChange={(e) => setNews({ ...news, category: e.target.value })}

                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Tags*</label>
                    <input
                        type="text"
                        className="border p-2 w-full rounded"
                        placeholder="News tags"
                        value={news.tags}
                        onChange={(e) => setNews({ ...news, tags: e.target.value })}

                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Featured Image</label>
                    <input
                        type="file"
                        className="w-full"
                        onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                                setNews({ ...news, newsImage: Array.from(e.target.files) });
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
                    {isSubmitting ? "Publishing..." : "Publish News"}
                </button>
            </form>
        </div>
    );
}
