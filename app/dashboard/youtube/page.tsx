"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';

interface YoutubeVideo {
  id: number;
  title: string;
  description: string;
  youtube_url: string;
  author: string;
  date: string;
}

interface FormData {
  title: string;
  description: string;
  youtube_url: string;
  author: string;
  date: string;
}

const getYoutubeVideoId = (url: string): string | null => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const YoutubeVideoList: React.FC = () => {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<YoutubeVideo | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    youtube_url: '',
    author: '',
    date: ''
  });
  const [updateSuccess, setUpdateSuccess] = useState<string>('');
  const [updateError, setUpdateError] = useState<string>('');
  const [deleteSuccess, setDeleteSuccess] = useState<string>('');

  // Fetch all videos
  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.propertydronerealty.com/youtube-videos');
      setVideos(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load videos. Please refresh the page.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // Handle opening edit modal
  const handleEdit = (video: YoutubeVideo) => {
    setCurrentVideo(video);
    setFormData({
      title: video.title || '',
      description: video.description || '',
      youtube_url: video.youtube_url || '',
      author: video.author || '',
      date: video.date ? new Date(video.date).toISOString().split('T')[0] : ''
    });
    setShowModal(true);
  };

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission for updates
  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    setUpdateError('');
    setUpdateSuccess('');

    if (!formData.title || !formData.description || !formData.youtube_url || !formData.author) {
      setUpdateError('All fields are required');
      return;
    }

    try {
      if (!currentVideo) return;
      await axios.put(`https://api.propertydronerealty.com/youtube-videos/${currentVideo.id}`, formData);
      setUpdateSuccess('Video updated successfully!');
      fetchVideos();
      setTimeout(() => {
        setShowModal(false);
        setUpdateSuccess('');
      }, 1500);
    } catch (err: any) {
      setUpdateError(err.response?.data?.message || 'Failed to update video. Please try again.');
    }
  };

  // Handle video deletion
  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      try {
        await axios.delete(`https://api.propertydronerealty.com/youtube-videos/${id}`);
        setDeleteSuccess('Video deleted successfully!');
        fetchVideos();
        setTimeout(() => {
          setDeleteSuccess('');
        }, 3000);
      } catch (err) {
        setError('Failed to delete video. Please try again.');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>YouTube Videos</title>
        <meta name="description" content="List of YouTube videos" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">YouTube Videos</h1>
        <Link href="/dashboard/youtube/new" legacyBehavior>
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New Video
          </a>
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {deleteSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {deleteSuccess}
        </div>
      )}

      {loading ? (
        <div className="text-center py-10">
          <div className="spinner-border text-blue-500" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-2">Loading videos...</p>
        </div>
      ) : videos.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No videos found. Add your first YouTube video!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => {
            const videoId = getYoutubeVideoId(video.youtube_url);

            return (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {videoId ? (
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={video.title || "YouTube Video"}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <p className="text-gray-500">Invalid YouTube URL</p>
                  </div>
                )}

                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">{video.title || "Untitled"}</h2>
                  <p className="text-gray-600 mb-2 line-clamp-3">{video.description || "No description"}</p>

                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div>By: {video.author || "Unknown"}</div>
                    <div>{formatDate(video.date)}</div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => handleEdit(video)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded flex items-center"
                    >
                      <i className="fas fa-edit mr-1"></i> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(video.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center"
                    >
                      <i className="fas fa-trash-alt mr-1"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Edit YouTube Video</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {updateError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {updateError}
              </div>
            )}

            {updateSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {updateSuccess}
              </div>
            )}

            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-title">
                  Title
                </label>
                <input
                  type="text"
                  id="edit-title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-description">
                  Description
                </label>
                <textarea
                  id="edit-description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={4}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-youtube_url">
                  YouTube URL
                </label>
                <input
                  type="text"
                  id="edit-youtube_url"
                  name="youtube_url"
                  value={formData.youtube_url}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-author">
                  Author
                </label>
                <input
                  type="text"
                  id="edit-author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-date">
                  Date
                </label>
                <input
                  type="date"
                  id="edit-date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeVideoList;