"use client";
import React from 'react';
import Head from 'next/head';
import YoutubeVideoForm from '@/app/components/YoutubeVideoForm';

const AddYoutubeVideo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Add YouTube Video</title>
        <meta name="description" content="Add a new YouTube video" />
      </Head>
      
      <YoutubeVideoForm />
    </div>
  );
};

export default AddYoutubeVideo;