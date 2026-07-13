"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Blog {
  id: number;
  blogTitle: string;
  blogDescription: string;
  writer: string;
  category: string;
  tags: string;
  updatedAt: string;
  blogContent: string;
  blogImage?: Array<{ path: string }>;
}

export default function AllBlogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://api.propertydronerealty.com/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`https://api.propertydronerealty.com/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog.id !== id));
      if (selectedBlog?.id === id) setSelectedBlog(null);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const closeDetails = () => setSelectedBlog(null);

  return (
    <>
      <div className="container mx-auto p-6 text-black">
        <h1 className="text-2xl font-bold mb-6 text-black">All Blogs</h1>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              {blog.blogImage && blog.blogImage.length > 0 && blog.blogImage[0]?.path && (
                <div className="w-full h-48 relative">
                  <img
                    src={blog.blogImage[0].path.startsWith('http') ? blog.blogImage[0].path : `https://api.propertydronerealty.com${blog.blogImage[0].path}`}
                    alt={blog.blogTitle}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 truncate text-black">{blog.blogTitle}</h3>
                <p className="text-black mb-4 line-clamp-2">{blog.blogDescription}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-black">By {blog.writer}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{blog.category}</span>
                </div>
                <p className="text-xs text-black mb-4">
                  Updated on {new Date(blog.updatedAt).toLocaleDateString()}
                </p>
                <div className="flex justify-between">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                    onClick={() => setSelectedBlog(blog)}
                  >
                    View Details
                  </button>
                  <div>
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded text-sm mr-2"
                      onClick={() => router.push(`/dashboard/editblog/${blog.id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Details Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-black">{selectedBlog.blogTitle}</h2>
                <button onClick={closeDetails} className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-black mr-2">By {selectedBlog.writer}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{selectedBlog.category}</span>
                </div>
                <span className="text-sm text-black">
                  Updated on {new Date(selectedBlog.updatedAt).toLocaleDateString()}
                </span>
              </div>

              <div className="border-t border-b py-4 my-4">
                <p className="text-black whitespace-pre-line">{selectedBlog.blogDescription}</p>
              </div>
              <div className="border-t border-b py-4 my-4">
                <div className="text-black" dangerouslySetInnerHTML={{ __html: selectedBlog.blogContent }} />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                  onClick={() => { router.push(`/dashboard/editblog/${selectedBlog.id}`); closeDetails(); }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => { handleDelete(selectedBlog.id); closeDetails(); }}
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