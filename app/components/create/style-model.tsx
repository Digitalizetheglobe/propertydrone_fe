"use client"

import type React from "react"

interface StyleModalProps {
  onClose: () => void
  bgColor: string
  setBgColor: (color: string) => void
  contentSpacing: number
  setContentSpacing: (spacing: number) => void
}

export const StyleModal: React.FC<StyleModalProps> = ({
  onClose,
  bgColor,
  setBgColor,
  contentSpacing,
  setContentSpacing,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Style Settings</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Background Color</label>
          <div className="flex items-center">
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="cursor-pointer mr-2"
            />
            <input
              type="text"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="border rounded p-1 w-24"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Content Spacing (px)</label>
          <div className="flex items-center">
            <input
              type="range"
              min="0"
              max="120"
              value={contentSpacing}
              onChange={(e) => setContentSpacing(Number.parseInt(e.target.value))}
              className="mr-2 w-full"
            />
            <span>{contentSpacing}px</span>
          </div>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

