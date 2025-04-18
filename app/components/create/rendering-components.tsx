"use client"

import type React from "react"
import Image from "next/image"
import type { RenderElementProps, RenderLeafProps } from "slate-react"

// Extend the type definition for element.type
declare module "slate" {
  interface BaseElement {
    type?: "code" | "paragraph" | "heading-one" | "heading-two" | "image" | "video" | "audio" | "bulleted-list" | "list-item" | "link" | "video-embed";
    language?: string; // Add language property for code blocks
  }
}
import { getYouTubeVideoId, getVimeoVideoId, isSpotifyUrl, isSoundCloudUrl } from "./editor-utils"

// Element component for different block types
export const Element = (props: RenderElementProps) => {
  const { attributes, children, element } = props
  const style: React.CSSProperties = { textAlign: element.align as React.CSSProperties["textAlign"] }

  switch (element.type) {
    case "heading-one":
      return (
        <h1 style={style} {...attributes} className="text-4xl font-bold">
          {children}
        </h1>
      )
    case "heading-two":
      return (
        <h2 style={style} {...attributes} className="text-2xl text-gray-500">
          {children}
        </h2>
      )
    case "code":
      return (
        <div {...attributes} className="my-4 relative">
          <pre contentEditable={false} className="bg-gray-100 p-4 rounded font-mono overflow-x-auto">
            <code className={element.language ? `language-${element.language}` : ""}>
              {element.children.map((child) => child.text).join("")}
            </code>
          </pre>
          <span contentEditable={false} style={{ fontSize: 0, userSelect: "none" }}>
            {"\u200B"}
          </span>
          {children}
        </div>
      )
    case "bulleted-list":
      return (
        <ul {...attributes} className="list-disc pl-10 my-4" style={style}>
          {children}
        </ul>
      )
    case "list-item":
      return (
        <li {...attributes} className="mb-1" style={style}>
          {children}
        </li>
      )
    case "link":
      return (
        <a
          {...attributes}
          href={element.url}
          className="text-blue-500 underline"
          onClick={(e) => {
            if (e.ctrlKey || e.metaKey) {
              // Allow Ctrl/Cmd+Click to open in a new tab
              return
            }

            e.preventDefault()
            if (element.url) {
              window.open(element.url, "_blank")
            }
          }}
        >
          {children}
        </a>
      )
    case "image":
      return (
        <div {...attributes} className="my-4 relative">
          <div contentEditable={false} className="image-wrapper">
            <Image
              src={element.fileData || element.url || ""}
              alt="Uploaded content"
              className="max-w-full rounded"
              width={500}
              height={500}
              style={{ display: "block", maxHeight: "500px" }}
            />
          </div>
          {/* This empty span is needed for Slate to maintain proper structure */}
          <span contentEditable={false} style={{ fontSize: 0, userSelect: "none" }}>
            {"\u200B"}
          </span>
          {children}
        </div>
      )
    case "video-embed":
      return (
        <div {...attributes} className="my-4 relative">
          <div contentEditable={false} className="video-wrapper">
            {renderVideoEmbed(element.url || "", element.title || "Video")}
          </div>
          <span contentEditable={false} style={{ fontSize: 0, userSelect: "none" }}>
            {"\u200B"}
          </span>
          {children}
        </div>
      )
    case "audio-embed":
      return (
        <div {...attributes} className="my-4 relative">
          <div contentEditable={false} className="audio-wrapper">
            {renderAudioEmbed(element.url || "", element.title || "Audio")}
          </div>
          <span contentEditable={false} style={{ fontSize: 0, userSelect: "none" }}>
            {"\u200B"}
          </span>
          {children}
        </div>
      )
    default:
      return (
        <p style={style} {...attributes} className="mb-4">
          {children}
        </p>
      )
  }
}

// Helper function to render video embeds based on URL
const renderVideoEmbed = (url: string, title: string) => {
  // YouTube
  const youtubeId = getYouTubeVideoId(url)
  if (youtubeId) {
    return (
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )
  }

  // Vimeo
  const vimeoId = getVimeoVideoId(url)
  if (vimeoId) {
    return (
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://player.vimeo.com/video/${vimeoId}`}
          title={title}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )
  }

  // Direct video URL or other video services
  if (url.match(/\.(mp4|webm|ogg)$/i) || url.includes("video")) {
    return (
      <div className="aspect-video">
        <video controls className="w-full h-full">
          <source src={url} />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  // Fallback for other URLs - show as link with preview
  return (
    <div className="border p-4 rounded">
      <div className="font-medium">{title}</div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 break-all">
        {url}
      </a>
    </div>
  )
}

// Helper function to render audio embeds based on URL
const renderAudioEmbed = (url: string, title: string) => {
  // Spotify
  if (isSpotifyUrl(url)) {
    // Convert regular Spotify URLs to embed URLs
    let embedUrl = url
    if (url.includes("spotify.com") && !url.includes("embed")) {
      embedUrl = url.replace("spotify.com/", "spotify.com/embed/")
      // Handle track URLs
      if (url.includes("track")) {
        embedUrl = embedUrl.replace("track", "track")
      }
      // Handle album URLs
      else if (url.includes("album")) {
        embedUrl = embedUrl.replace("album", "album")
      }
      // Handle playlist URLs
      else if (url.includes("playlist")) {
        embedUrl = embedUrl.replace("playlist", "playlist")
      }
    }

    return (
      <div className="w-full">
        <iframe src={embedUrl} width="100%" height="80" frameBorder="0" allow="encrypted-media" title={title}></iframe>
      </div>
    )
  }

  // SoundCloud
  if (isSoundCloudUrl(url)) {
    return (
      <div className="w-full">
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
          title={title}
        ></iframe>
      </div>
    )
  }

  // Direct audio URL
  if (url.match(/\.(mp3|wav|ogg)$/i) || url.includes("audio")) {
    return (
      <div className="w-full">
        <audio controls className="w-full">
          <source src={url} />
          Your browser does not support the audio tag.
        </audio>
      </div>
    )
  }

  // Fallback for other URLs - show as link with preview
  return (
    <div className="border p-4 rounded">
      <div className="font-medium">{title}</div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 break-all">
        {url}
      </a>
    </div>
  )
}

// Leaf component for text formatting
export const Leaf = (props: RenderLeafProps) => {
  const { attributes, children, leaf } = props
  let formattedChildren = children

  if (leaf.bold) {
    formattedChildren = <strong>{formattedChildren}</strong>
  }

  if (leaf.italic) {
    formattedChildren = <em>{formattedChildren}</em>
  }

  if (leaf.underline) {
    formattedChildren = <u>{formattedChildren}</u>
  }

  if (leaf.code) {
    formattedChildren = <code className="bg-gray-100 px-1 rounded">{formattedChildren}</code>
  }

  // Style with both font size and color
  const style: React.CSSProperties = {}

  if (leaf.fontSize) {
    style.fontSize = `${leaf.fontSize}px`
  }

  if (leaf.color) {
    style.color = leaf.color
  }

  return (
    <span {...attributes} style={style}>
      {formattedChildren}
    </span>
  )
}

