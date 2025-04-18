"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSlate } from "slate-react"
import { Button } from "./components"
import { isMarkActive, toggleMark, isBlockActive, toggleBlock, isListActive, toggleList } from "./editor-utils"
import { FaFont } from "react-icons/fa"

// Types
type ToolbarButtonProps = {
  icon: React.ReactNode
  onClick: () => void
}

type FormatToolbarProps = {
  children: React.ReactNode
}

type MarkButtonProps = {
  format: "bold" | "italic" | "underline" | "code"
  icon: React.ReactNode
}

type BlockButtonProps = {
  format: "left" | "center" | "right" | "justify"
  icon: React.ReactNode
}

type ListButtonProps = {
  icon: React.ReactNode
}

type FontSizeSelectProps = {
  value: string
  onChange: (size: string) => void
}

type ColorPickerProps = {
  value: string
  onChange: (color: string) => void
  colors: string[]
}

type LinkModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (text: string, url: string) => void
  initialText: string
}

type VideoEmbedModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (url: string, title: string) => void
}

type AudioEmbedModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (url: string, title: string) => void
}

type CodeEmbedModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (code: string, language: string) => void
}

// Toolbar button component
export const ToolbarButton: React.FC<ToolbarButtonProps> = ({ icon, onClick }) => {
  return (
    <button
      className="p-2 mx-1 rounded hover:bg-gray-100"
      onMouseDown={(event) => {
        event.preventDefault()
        onClick()
      }}
    >
      {icon}
    </button>
  )
}

// Format toolbar component
export const FormatToolbar: React.FC<FormatToolbarProps> = ({ children }) => {
  return (
    <div className="format-toolbar border-b border-gray-200 py-2 mb-4 flex flex-wrap bg-black text-white rounded-t-lg">
      {children}
    </div>
  )
}

// Button for mark formatting (bold, italic, etc)
export const MarkButton: React.FC<MarkButtonProps> = ({ format, icon }) => {
  const editor = useSlate()

  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {icon}
    </Button>
  )
}

// Button for block formatting (alignment)
export const BlockButton: React.FC<BlockButtonProps> = ({ format, icon }) => {
  const editor = useSlate()

  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      {icon}
    </Button>
  )
}

// Button for bullet points
export const ListButton: React.FC<ListButtonProps> = ({ icon }) => {
  const editor = useSlate()

  return (
    <Button
      active={isListActive(editor)}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault()
        toggleList(editor)
      }}
    >
      {icon}
    </Button>
  )
}

// Font Size Select component
export const FontSizeSelect: React.FC<FontSizeSelectProps> = ({ value, onChange }) => {
  const FONT_SIZES = ["8", "9", "10", "11", "12", "14", "16", "18", "20", "24", "28", "32", "36", "48", "60", "72"]

  return (
    <div className="relative inline-block mx-1">
      <select
        className="appearance-none bg-black border rounded px-2 py-1 pr-8 hover:bg-gray-700 focus:outline-none"
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        onMouseDown={(e) => {
          // Stop propagation to prevent the editor's onMouseDown from interfering
          e.stopPropagation()
        }}
        onClick={(e) => {
          // Stop propagation to prevent the editor's onClick from interfering
          e.stopPropagation()
        }}
      >
        {FONT_SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <FaFont className="w-3 h-3" />
      </div>
    </div>
  )
}

// Enhanced Color Picker component with custom color input
export const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange, colors }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [customColor, setCustomColor] = useState("")

  const handleCustomColorSubmit = () => {
    // Validate that the input is a valid hex color code
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(customColor)) {
      onChange(customColor)
      setIsOpen(false)
    } else if (customColor.match(/^[A-Fa-f0-9]{6}$/)) {
      // If they forgot the #, add it
      onChange("#" + customColor)
      setIsOpen(false)
    }
  }

  return (
    <div className="relative inline-block mx-1">
      <Button
        active={false}
        onMouseDown={(event: React.MouseEvent) => {
          event.preventDefault()
          setIsOpen(!isOpen)
        }}
      >
        <div className="flex items-center">
          <div className="w-4 h-4 mr-1 border border-gray-300" style={{ backgroundColor: value }}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2v20M2 12h20"></path>
          </svg>
        </div>
      </Button>

      {isOpen && (
        <div className="absolute mt-1 py-3 px-4 bg-white border rounded shadow-lg z-10 w-64">
          {/* Grid of color swatches */}
          <div className="grid grid-cols-5 gap-2 mb-3">
            {colors.map((color) => (
              <div
                key={color}
                className="w-8 h-8 cursor-pointer border border-gray-200 hover:border-gray-400 rounded"
                style={{ backgroundColor: color }}
                onClick={() => {
                  onChange(color)
                  setIsOpen(false)
                }}
                title={color}
              ></div>
            ))}
          </div>

          {/* Custom color input */}
          <div className="pt-2 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-1">Custom color (hex)</label>
            <div className="flex">
              <input
                type="text"
                className="w-full p-1 border rounded"
                placeholder="#RRGGBB"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCustomColorSubmit()
                  }
                }}
              />
              <button
                className="ml-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                onClick={handleCustomColorSubmit}
              >
                Apply
              </button>
            </div>

            {/* HTML5 Color Picker */}
            <div className="mt-2 flex items-center">
              <label className="block text-sm font-medium text-gray-700 mr-2">Color picker:</label>
              <input
                type="color"
                value={value}
                onChange={(e) => {
                  onChange(e.target.value)
                  setCustomColor(e.target.value)
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Link Modal component
export const LinkModal: React.FC<LinkModalProps> = ({ isOpen, onClose, onSubmit, initialText }) => {
  const [text, setText] = useState(initialText)
  const [url, setUrl] = useState("")

  useEffect(() => {
    setText(initialText)
  }, [initialText])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Create a link</h2>

        <div className="mb-4">
          <input
            type="text"
            className="w-full border bg-white rounded-lg p-2 mb-3"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <input
            type="text"
            className="w-full border bg-white rounded-lg p-2"
            placeholder="Enter URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="flex space-x-3">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              // Ensure URL has http:// or https:// prefix if missing
              let formattedUrl = url.trim()
              if (formattedUrl && !formattedUrl.match(/^https?:\/\//)) {
                formattedUrl = "https://" + formattedUrl
              }
              onSubmit(text, formattedUrl)
              onClose()
            }}
          >
            Link
          </button>

          <button className="bg-gray-200 px-4 py-2 rounded-lg" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

// Video Embed Modal component
export const VideoEmbedModal: React.FC<VideoEmbedModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = () => {
    // Basic validation
    if (!url) {
      setError("Please enter a video URL")
      return
    }

    // Format URL if needed
    let formattedUrl = url.trim()
    if (formattedUrl && !formattedUrl.match(/^https?:\/\//)) {
      formattedUrl = "https://" + formattedUrl
    }

    onSubmit(formattedUrl, title || "Video")
    setUrl("")
    setTitle("")
    setError("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Embed Video</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Video URL (YouTube, Vimeo, or direct video link)
          </label>
          <input
            type="text"
            className="w-full border bg-white rounded-lg p-2 mb-1"
            placeholder="https://www.youtube.com/watch?v=..."
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
              setError("")
            }}
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <div className="text-xs text-gray-500 mb-3">
            Supported formats: YouTube, Vimeo, and direct video links (.mp4, .webm, etc.)
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-1">Title (optional)</label>
          <input
            type="text"
            className="w-full border bg-white rounded-lg p-2"
            placeholder="Video title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex space-x-3">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>
            Embed
          </button>

          <button
            className="bg-gray-200 px-4 py-2 rounded-lg"
            onClick={() => {
              setUrl("")
              setTitle("")
              setError("")
              onClose()
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

// Audio Embed Modal component
export const AudioEmbedModal: React.FC<AudioEmbedModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = () => {
    // Basic validation
    if (!url) {
      setError("Please enter an audio URL")
      return
    }

    // Format URL if needed
    let formattedUrl = url.trim()
    if (formattedUrl && !formattedUrl.match(/^https?:\/\//)) {
      formattedUrl = "https://" + formattedUrl
    }

    onSubmit(formattedUrl, title || "Audio")
    setUrl("")
    setTitle("")
    setError("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Embed Audio</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Audio URL (Spotify, SoundCloud, or direct audio link)
          </label>
          <input
            type="text"
            className="w-full border bg-white rounded-lg p-2 mb-1"
            placeholder="https://open.spotify.com/track/..."
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
              setError("")
            }}
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <div className="text-xs text-gray-500 mb-3">
            Supported formats: Spotify, SoundCloud, and direct audio links (.mp3, .wav, etc.)
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-1">Title (optional)</label>
          <input
            type="text"
            className="w-full border bg-white rounded-lg p-2"
            placeholder="Audio title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex space-x-3">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>
            Embed
          </button>

          <button
            className="bg-gray-200 px-4 py-2 rounded-lg"
            onClick={() => {
              setUrl("")
              setTitle("")
              setError("")
              onClose()
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

// Code Embed Modal component
export const CodeEmbedModal: React.FC<CodeEmbedModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("javascript")
  const [error, setError] = useState("")
  const languages = [
    "javascript",
    "typescript",
    "python",
    "html",
    "css",
    "java",
    "php",
    "ruby",
    "c",
    "cpp",
    "csharp",
    "go",
    "rust",
    "swift",
    "kotlin",
    "sql",
  ]

  const handleSubmit = () => {
    // Basic validation
    if (!code.trim()) {
      setError("Please enter some code")
      return
    }

    onSubmit(code, language)
    setCode("")
    setError("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-xl font-bold mb-4">Add Code</h2>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">Code</label>
            <select
              className="border rounded p-1 text-sm"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <textarea
            className="w-full border bg-white rounded-lg p-2 font-mono h-64"
            placeholder="Paste your code here..."
            value={code}
            onChange={(e) => {
              setCode(e.target.value)
              setError("")
            }}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <div className="flex space-x-3">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>
            Insert
          </button>

          <button
            className="bg-gray-200 px-4 py-2 rounded-lg"
            onClick={() => {
              setCode("")
              setError("")
              onClose()
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

