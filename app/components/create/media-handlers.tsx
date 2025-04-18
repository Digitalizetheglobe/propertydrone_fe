import type React from "react"
import { Transforms, Editor } from "slate"
import { ReactEditor } from "slate-react"
import type { CustomEditor } from "./editor-utils"

// Handle image file upload
export const handleImageUpload = (
  event: React.ChangeEvent<HTMLInputElement>,
  editor: CustomEditor,
  defaultEditor: CustomEditor,
): void => {
  const file = event.target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onloadend = () => {
    try {
      // Create the image node
      const image = {
        type: "image" as const,
        fileData: reader.result as string,
        children: [{ text: "" }],
      }

      // Ensure we have a valid selection point
      if (!editor.selection) {
        // If no selection, place at the end of the document
        const end = Editor.end(editor, [])
        Transforms.select(editor, end)
      }

      // Insert at the current selection
      Transforms.insertNodes(editor, image)

      // Move selection after the inserted node
      Transforms.move(editor, { distance: 1 })

      // Force editor focus
      setTimeout(() => {
        try {
          ReactEditor.focus(editor)
        } catch (error) {
          console.error("Error focusing editor after image upload:", error)
        }
      }, 10)
    } catch (error) {
      console.error("Error inserting image:", error)

      // Fallback: try to insert in the body editor
      try {
        const end = Editor.end(defaultEditor, [])
        Transforms.select(defaultEditor, end)
        Transforms.insertNodes(defaultEditor, {
          type: "image" as const,
          fileData: reader.result as string,
          children: [{ text: "" }],
        })
        ReactEditor.focus(defaultEditor)
      } catch (fallbackError) {
        console.error("Fallback image insertion also failed:", fallbackError)
      }
    }
  }
  reader.readAsDataURL(file)

  // Reset input to allow uploading the same file again
  event.target.value = ""
}

