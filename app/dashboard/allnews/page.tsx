"use client";
import { useEffect, useState } from "react";
import axios from "axios";


interface News {
    id: number;
    newsTitle: string;
    newsDescription: string;
    writer: string;
    category: string;
    updatedAt: string;
    newsContent: string;
}

export default function AllNews() {
    const [news, setNews] = useState<News[]>([]);
    const [editNews, setEditNews] = useState<Partial<News> | null>(null);
    const [selectedNews, setSelectedNews] = useState<News | null>(null);

    // Fetch all news
    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get("http://localhost:9000/news");
            setNews(response.data);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    // Delete a news
    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:9000/news/${id}`);
            setNews(news.filter((item) => item.id !== id));
            if (selectedNews?.id === id) {
                setSelectedNews(null);
            }
        } catch (error) {
            console.error("Error deleting news:", error);
        }
    };

    // Update a news
    const handleUpdate = async () => {
        if (!editNews || !editNews.id) return;
        try {
            await axios.put(`http://localhost:9000/news/${editNews.id}`, editNews);
            fetchNews(); // Refresh after update
            setEditNews(null);
        } catch (error) {
            console.error("Error updating news:", error);
        }
    };

    // Handle view details
    const handleViewDetails = (newsItem: News) => {
        setSelectedNews(newsItem);
    };

    // Close details view
    const closeDetails = () => {
        setSelectedNews(null);
    };

    return (
        <>

            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">All News</h1>

                {/* Card Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2 truncate">{item.newsTitle}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">{item.newsDescription}</p>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-500">By {item.writer}</span>
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{item.category}</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-4">
                                    Updated on {new Date(item.updatedAt).toLocaleDateString()}
                                </p>
                                <div className="flex justify-between">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                                        onClick={() => handleViewDetails(item)}
                                    >
                                        View Details
                                    </button>
                                    <div>
                                        <button
                                            className="bg-yellow-500 text-white px-3 py-1 rounded text-sm mr-2"
                                            onClick={() => setEditNews(item)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Edit Form */}
                {editNews && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full">
                            <h2 className="text-xl font-semibold mb-4">Edit News</h2>
                            <input
                                type="text"
                                className="border rounded p-2 w-full mb-3"
                                placeholder="Title"
                                value={editNews.newsTitle || ""}
                                onChange={(e) => setEditNews({ ...editNews, newsTitle: e.target.value })}
                            />
                            <textarea
                                className="border rounded p-2 w-full mb-3 h-32"
                                placeholder="Description"
                                value={editNews.newsDescription || ""}
                                onChange={(e) => setEditNews({ ...editNews, newsDescription: e.target.value })}
                            />
                            <input
                                type="text"
                                className="border rounded p-2 w-full mb-3"
                                placeholder="Writer"
                                value={editNews.writer || ""}
                                onChange={(e) => setEditNews({ ...editNews, writer: e.target.value })}
                            />
                            <input
                                type="text"
                                className="border rounded p-2 w-full mb-4"
                                placeholder="Category"
                                value={editNews.category || ""}
                                onChange={(e) => setEditNews({ ...editNews, category: e.target.value })}
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                    onClick={() => setEditNews(null)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                    onClick={handleUpdate}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* News Details Modal */}
                {selectedNews && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold">{selectedNews.newsTitle}</h2>
                                <button
                                    onClick={closeDetails}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-gray-600 mr-2">By {selectedNews.writer}</span>
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{selectedNews.category}</span>
                                </div>
                                <span className="text-sm text-gray-500">
                                    Updated on {new Date(selectedNews.updatedAt).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="border-t border-b py-4 my-4">
                                <p className="text-gray-700 whitespace-pre-line">{selectedNews.newsDescription}</p>
                            </div>
                            <div className="border-t border-b py-4 my-4">
                                <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: selectedNews.newsContent }} />
                            </div>



                            <div className="flex justify-end gap-2">
                                <button
                                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                                    onClick={() => {
                                        setEditNews(selectedNews);
                                        closeDetails();
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                    onClick={() => {
                                        handleDelete(selectedNews.id);
                                        closeDetails();
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
}
