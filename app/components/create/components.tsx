"use client"

import type React from "react"

interface ButtonProps {
  active: boolean
  children: React.ReactNode
  onMouseDown: (event: React.MouseEvent) => void
}

export const Button: React.FC<ButtonProps> = ({ active, children, onMouseDown }) => {
  return (
    <button className={`p-2 mx-1 rounded ${active ? "bg-gray-700" : "hover:bg-gray-700"}`} onMouseDown={onMouseDown}>
      {children}
    </button>
  )
}

interface ToolbarProps {
  children: React.ReactNode
}

export const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
  return (
    <div className="toolbar bg-white border-b border-gray-200 p-2 mb-4 flex flex-wrap sticky top-0 z-10">
      {children}
    </div>
  )
}

