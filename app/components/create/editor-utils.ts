import { type BaseEditor, Editor, Transforms, Element } from "slate"
import type { ReactEditor } from "slate-react"
import type { HistoryEditor } from "slate-history"
// Custom types for TypeScript
export interface CustomElement {
  type:
    | "paragraph"
    | "heading-one"
    | "heading-two"
    | "code"
    | "image"
    | "video"
    | "audio"
    | "bulleted-list"
    | "list-item"
    | "link"
    | "video-embed"
    | "audio-embed"
  align?: string
  children: CustomText[]
  url?: string
  fileData?: string
  title?: string
  language?: string
}

export type CustomText = {
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean
  fontSize?: string
  color?: string
}

// Define the Slate editor type
export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor

// Tell TypeScript about the Slate custom types
declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement // Ensure this matches the single source of truth for CustomElement
    Text: CustomText
  }
}

// Check if a mark is currently active
export const isMarkActive = (editor: CustomEditor, format: string): boolean => {
  try {
    const marks = Editor.marks(editor)
    return marks ? (marks as Record<string, boolean>)[format] === true : false
  } catch (error) {
    console.error(`Error checking if mark ${format} is active:`, error)
    return false
  }
}

// Toggle a mark on or off
export const toggleMark = (editor: CustomEditor, format: string): void => {
  try {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
      Editor.removeMark(editor, format)
    } else {
      Editor.addMark(editor, format, true)
    }
  } catch (error) {
    console.error(`Error toggling mark ${format}:`, error)
  }
}

// Check if a block format is active
export const isBlockActive = (editor: CustomEditor, align: string): boolean => {
  try {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.align === align,
    })

    return !!match
  } catch (error) {
    console.error(`Error checking if block ${align} is active:`, error)
    return false
  }
}

// Toggle a block format
export const toggleBlock = (editor: CustomEditor, align: string): void => {
  try {
    // Fixed alignment by properly setting nodes
    Transforms.setNodes(
      editor,
      { align: isBlockActive(editor, align) ? undefined : align },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) },
    )
  } catch (error) {
    console.error(`Error toggling block ${align}:`, error)
  }
}

// Check if the current selection is in a list
export const isListActive = (editor: CustomEditor): boolean => {
  try {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "bulleted-list",
    })

    return !!match
  } catch (error) {
    console.error("Error checking if list is active:", error)
    return false
  }
}

// Toggle list formatting - Fixed to properly handle list items
export const toggleList = (editor: CustomEditor): void => {
  try {
    if (isListActive(editor)) {
      // Convert list items back to paragraphs
      Transforms.unwrapNodes(editor, {
        match: (n) => Element.isElement(n) && n.type === "bulleted-list",
        split: true,
      })

      Transforms.setNodes(
        editor,
        { type: "paragraph" },
        { match: (n) => Element.isElement(n) && n.type === "list-item" },
      )
    } else {
      // Convert paragraphs to list items
      const isActive =
        isBlockActive(editor, "left") ||
        isBlockActive(editor, "center") ||
        isBlockActive(editor, "right") ||
        isBlockActive(editor, "justify")

      // Preserve alignment if it exists
      const alignment = isActive
        ? isBlockActive(editor, "center")
          ? "center"
          : isBlockActive(editor, "right")
            ? "right"
            : isBlockActive(editor, "justify")
              ? "justify"
              : "left"
        : undefined

      Transforms.setNodes(
        editor,
        { type: "list-item", align: alignment },
        { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) && n.type !== "list-item" },
      )

      Transforms.wrapNodes(editor, {
        type: "bulleted-list",
        align: alignment,
        children: [],
      })
    }
  } catch (error) {
    console.error("Error toggling list:", error)
  }
}

// Check if a link is currently active
export const isLinkActive = (editor: CustomEditor): boolean => {
  try {
    const [link] = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
    })
    return !!link
  } catch (error) {
    console.error("Error checking if link is active:", error)
    return false
  }
}

// Helper function to extract YouTube video ID
export const getYouTubeVideoId = (url: string): string | null => {
  // Handle various YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

// Helper function to extract Vimeo video ID
export const getVimeoVideoId = (url: string): string | null => {
  // Handle various Vimeo URL formats
  const regExp = /(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)([0-9]+)/
  const match = url.match(regExp)
  return match ? match[1] : null
}

// Helper function to check if URL is a Spotify link
export const isSpotifyUrl = (url: string): boolean => {
  return url.includes("spotify.com") || url.includes("open.spotify")
}

// Helper function to check if URL is a SoundCloud link
export const isSoundCloudUrl = (url: string): boolean => {
  return url.includes("soundcloud.com")
}

// Add a function to validate URLs:
export const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      void e; // Explicitly mark `e` as unused
      return false;
    }
  }
  
  
