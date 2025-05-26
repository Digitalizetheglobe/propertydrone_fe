"use client";
import { useEffect, useState } from "react";
import axios from "axios";


interface Blog {
  id: number;
  blogTitle: string;
  blogDescription: string;
  writer: string;
  category: string;
  updatedAt: string;
  blogContent: string;
}

export default function AllBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editBlog, setEditBlog] = useState<Partial<Blog> | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  // Fetch all blogs
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

  // Delete a blog
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://api.propertydronerealty.com/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog.id !== id));
      if (selectedBlog?.id === id) {
        setSelectedBlog(null);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // Update a blog
  const handleUpdate = async () => {
    if (!editBlog || !editBlog.id) return;
    try {
      await axios.put(`https://api.propertydronerealty.com/blogs/${editBlog.id}`, editBlog);
      fetchBlogs(); // Refresh after update
      setEditBlog(null);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  // Handle view details
  const handleViewDetails = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  // Close details view
  const closeDetails = () => {
    setSelectedBlog(null);
  };

  return (
    <>
  
        <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">All Blogs</h1>
      
      {/* Card Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 truncate">{blog.blogTitle}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{blog.blogDescription}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">By {blog.writer}</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{blog.category}</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                Updated on {new Date(blog.updatedAt).toLocaleDateString()}
              </p>
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  onClick={() => handleViewDetails(blog)}
                >
                  View Details
                </button>
                <div>
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm mr-2"
                    onClick={() => setEditBlog(blog)}
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

      {/* Edit Form */}
      {editBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>
            <input
              type="text"
              className="border rounded p-2 w-full mb-3"
              placeholder="Title"
              value={editBlog.blogTitle || ""}
              onChange={(e) => setEditBlog({ ...editBlog, blogTitle: e.target.value })}
            />
            <textarea
              className="border rounded p-2 w-full mb-3 h-32"
              placeholder="Description"
              value={editBlog.blogDescription || ""}
              onChange={(e) => setEditBlog({ ...editBlog, blogDescription: e.target.value })}
            />
            <input
              type="text"
              className="border rounded p-2 w-full mb-3"
              placeholder="Writer"
              value={editBlog.writer || ""}
              onChange={(e) => setEditBlog({ ...editBlog, writer: e.target.value })}
            />
            <input
              type="text"
              className="border rounded p-2 w-full mb-4"
              placeholder="Category"
              value={editBlog.category || ""}
              onChange={(e) => setEditBlog({ ...editBlog, category: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setEditBlog(null)}
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

      {/* Blog Details Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{selectedBlog.blogTitle}</h2>
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
                <span className="text-gray-600 mr-2">By {selectedBlog.writer}</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{selectedBlog.category}</span>
              </div>
              <span className="text-sm text-gray-500">
                Updated on {new Date(selectedBlog.updatedAt).toLocaleDateString()}
              </span>
            </div>
            
            <div className="border-t border-b py-4 my-4">
              <p className="text-gray-700 whitespace-pre-line">{selectedBlog.blogDescription}</p>
            </div>
            <div className="border-t border-b py-4 my-4">
                <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: selectedBlog.blogContent }} />
            </div>

            
            
            <div className="flex justify-end gap-2">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded"
                onClick={() => {
                  setEditBlog(selectedBlog);
                  closeDetails();
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => {
                  handleDelete(selectedBlog.id);
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