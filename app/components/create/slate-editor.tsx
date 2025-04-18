"use client"

import React, { useState, useCallback, useMemo, useRef, useEffect } from "react"
import { createEditor, type Descendant, Editor, Transforms, Node, Range } from "slate"
import { Slate, Editable, withReact, ReactEditor, type RenderElementProps, type RenderLeafProps } from "slate-react"
import { withHistory } from "slate-history"
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaCode,
  FaImage,
  FaVideo,
  FaMusic,
  FaEllipsisH,
  FaList,
  FaLink,
} from "react-icons/fa"
import { Button, Toolbar } from "./components"
import { StyleModal } from "./style-model"
import { type CustomEditor, isLinkActive } from "./editor-utils"
import {
  ToolbarButton,
  FormatToolbar,
  MarkButton,
  BlockButton,
  ListButton,
  FontSizeSelect,
  ColorPicker,
  LinkModal,
  VideoEmbedModal,
  AudioEmbedModal,
  CodeEmbedModal,
} from "./toolbar-components";
import { Element, Leaf } from "./rendering-components"
import { handleImageUpload } from "./media-handlers"

// Constants
const TEXT_COLORS = [
  "#000000",
  "#FFFFFF",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#A52A2A",
  "#808080",
  "#FFB6C1",
  "#C71585",
  "#FFD700",
  "#008080",
  "#32CD32",
  "#8A2BE2",
  "#4682B4",
  "#2F4F4F",
  "#D2691E",
  "#FA8072",
  "#FF6347",
  "#6A5ACD",
  "#663399",
]

// Initial values for editors
const initialTitleValue: Descendant[] = [{ type: "heading-one", children: [{ text: "" }] }]
const initialSubtitleValue: Descendant[] = [{ type: "heading-two", children: [{ text: "" }] }]
const initialBodyValue: Descendant[] = [{ type: "paragraph", children: [{ text: "" }] }]

interface SlateEditorProps {
  onContentChange: (content: {
    title: string;
    subtitle: string;
    body: string;
    rawContent: {
      title: Descendant[];
      subtitle: Descendant[];
      body: Descendant[];
      additionalSections: Descendant[][];
    };
  }) => void;
}

const SlateEditor: React.FC<SlateEditorProps> = ({ onContentChange }) => {
  // State for editor content
  const [titleValue, setTitleValue] = useState<Descendant[]>(initialTitleValue)
  const [subtitleValue, setSubtitleValue] = useState<Descendant[]>(initialSubtitleValue)
  const [bodyValue, setBodyValue] = useState<Descendant[]>(initialBodyValue)
  const [additionalEditors, setAdditionalEditors] = useState<
    {
      editor: CustomEditor
      value: Descendant[]
      ref: React.RefObject<HTMLDivElement | null>
    }[]
  >([])

  // UI state
  const [showStyleModal, setShowStyleModal] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<string>("#FFFFFF")
  const [contentSpacing, setContentSpacing] = useState<number>(60)
  const [currentFontSize, setCurrentFontSize] = useState<string>("12")
  const [currentTextColor, setCurrentTextColor] = useState<string>("#000000")
  const [showLinkModal, setShowLinkModal] = useState<boolean>(false)
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false)
  const [showAudioModal, setShowAudioModal] = useState<boolean>(false)
  const [showCodeModal, setShowCodeModal] = useState<boolean>(false)
  const [selectedText, setSelectedText] = useState<string>("")
  const [activeEditor, setActiveEditor] = useState<CustomEditor | null>(null)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  // Create editors
  const titleEditor = useMemo(() => withHistory(withReact(createEditor())), [])
  const subtitleEditor = useMemo(() => withHistory(withReact(createEditor())), [])
  const bodyEditor = useMemo(() => withHistory(withReact(createEditor())), [])

  // Refs
  const imageInputRef = useRef<HTMLInputElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  // Rendering callbacks
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])

  // Update formatting state based on current editor
  const updateCurrentFontSize = useCallback((editor: CustomEditor) => {
    try {
      const marks = Editor.marks(editor)
      setCurrentFontSize(marks?.fontSize || "12")
    } catch {
      console.error("Error updating font size")
    }
  }, [])

  const updateCurrentTextColor = useCallback((editor: CustomEditor) => {
    try {
      const marks = Editor.marks(editor)
      setCurrentTextColor(marks?.color || "#000000")
    } catch {
      console.error("Error updating text color")
    }
  }, [])

  // Update parent component with content changes
  const updateParent = useCallback(() => {
    const titleText = titleValue.map((n) => Node.string(n)).join("\n")
    const subtitleText = subtitleValue.map((n) => Node.string(n)).join("\n")
    const bodyText = bodyValue.map((n) => Node.string(n)).join("\n")
    const additionalText = additionalEditors
      .map((item) => item.value.map((n) => Node.string(n)).join("\n"))
      .join("\n\n")

    const rawContent = {
      title: titleValue,
      subtitle: subtitleValue,
      body: bodyValue,
      additionalSections: additionalEditors.map((editor) => editor.value),
    }

    onContentChange({
      title: titleText,
      subtitle: subtitleText,
      body: bodyText + (additionalText ? "\n\n" + additionalText : ""),
      rawContent: rawContent,
    })
  }, [titleValue, subtitleValue, bodyValue, additionalEditors, onContentChange])

  // Handle content changes
  const handleTitleChange = (newValue: Descendant[]) => {
    setTitleValue(newValue)
    updateParent()
  }

  const handleSubtitleChange = (newValue: Descendant[]) => {
    setSubtitleValue(newValue)
    updateParent()
  }

  const handleBodyChange = (newValue: Descendant[]) => {
    setBodyValue(newValue)
    updateParent()
  }

  const handleAdditionalEditorChange = (index: number, newValue: Descendant[]) => {
    setAdditionalEditors((prev) => {
      const newEditors = [...prev]
      newEditors[index].value = newValue
      return newEditors
    })
    updateParent()
  }

  // Focus handling for editors
  const focusEditor = useCallback(
    (editor: CustomEditor, initialValue: Descendant[]) => {
      try {
        ReactEditor.focus(editor)
        updateCurrentFontSize(editor)
        updateCurrentTextColor(editor)

        // Select all if empty
        if (initialValue.length > 0 && Node.string(initialValue[0]) === "") {
          Transforms.select(editor, {
            anchor: Editor.start(editor, []),
            focus: Editor.end(editor, []),
          })
        }
      } catch {
        console.error("Error focusing editor")
      }
    },
    [updateCurrentFontSize, updateCurrentTextColor],
  )

  const handleTitleClick = useCallback(() => {
    setActiveEditor(titleEditor)
    focusEditor(titleEditor, titleValue)
  }, [titleEditor, titleValue, focusEditor])

  const handleSubtitleClick = useCallback(() => {
    setActiveEditor(subtitleEditor)
    focusEditor(subtitleEditor, subtitleValue)
  }, [subtitleEditor, subtitleValue, focusEditor])

  const handleBodyClick = useCallback(() => {
    setActiveEditor(bodyEditor)
    focusEditor(bodyEditor, bodyValue)
  }, [bodyEditor, bodyValue, focusEditor])

  const handleAdditionalEditorClick = useCallback(
    (editor: CustomEditor, index: number) => {
      setActiveEditor(editor)
      focusEditor(editor, additionalEditors[index].value)
    },
    [additionalEditors, focusEditor],
  )

  // Mouse hover handlers
  const handleMouseEnter = useCallback((section: string) => {
    setHoveredSection(section)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!activeEditor) {
      setHoveredSection(null)
    }
  }, [activeEditor])

  // Add new text holder
  const addNewTextHolder = useCallback(() => {
    const newEditor = withHistory(withReact(createEditor()))
    const newRef = React.createRef<HTMLDivElement>()
    const initialValue: Descendant[] = [{ type: "paragraph", children: [{ text: "" }] }]

    setAdditionalEditors((prev) => [...prev, { editor: newEditor as CustomEditor, value: initialValue, ref: newRef as React.RefObject<HTMLDivElement | null> }])

    setTimeout(() => {
      setActiveEditor(newEditor)
      try {
        ReactEditor.focus(newEditor)
      } catch {
        console.log("Could not focus on new editor immediately")
      }
    }, 10)
  }, [])

  // Format handling
  const handleFontSizeChange = useCallback(
    (size: string) => {
      setCurrentFontSize(size)
      if (activeEditor) {
        try {
          Editor.addMark(activeEditor, "fontSize", size)
        } catch {
          console.error("Error applying font size")
        }
      }
    },
    [activeEditor],
  )

  const handleTextColorChange = useCallback(
    (color: string) => {
      setCurrentTextColor(color)
      if (activeEditor) {
        try {
          Editor.addMark(activeEditor, "color", color)
        } catch {
          console.error("Error applying text color")
        }
      }
    },
    [activeEditor],
  )

  // Link handling
  const handleLinkButtonClick = useCallback(() => {
    if (!activeEditor) return

    try {
      if (activeEditor.selection && !Range.isCollapsed(activeEditor.selection)) {
        const selectedRange = activeEditor.selection
        const text = Editor.string(activeEditor, selectedRange)
        setSelectedText(text)
        setShowLinkModal(true)
      } else {
        setSelectedText("")
        setShowLinkModal(true)
      }
    } catch {
      console.error("Error handling link button click")
    }
  }, [activeEditor])

  const handleLinkSubmit = useCallback(
    (text: string, url: string) => {
      if (!activeEditor) return

      try {
        if (text && url) {
          if (activeEditor.selection && !Range.isCollapsed(activeEditor.selection)) {
            Transforms.delete(activeEditor)
          }

          const link = {
            type: "link" as const,
            url,
            children: [{ text }],
          }

          Transforms.insertNodes(activeEditor, link)
          Transforms.move(activeEditor, { distance: 1 })
        }
      } catch {
        console.error("Error submitting link")
      }
    },
    [activeEditor],
  )

  // Video embed handling
  const handleVideoButtonClick = useCallback(() => {
    if (!activeEditor) {
      setActiveEditor(bodyEditor)
    }
    setShowVideoModal(true)
  }, [activeEditor, bodyEditor])

  const handleVideoSubmit = useCallback(
    (url: string, title: string) => {
      if (!activeEditor) return

      try {
        const videoEmbed = {
          type: "video-embed" as const,
          url,
          title,
          children: [{ text: "" }],
        }

        if (!activeEditor.selection) {
          const end = Editor.end(activeEditor, [])
          Transforms.select(activeEditor, end)
        }

        Transforms.insertNodes(activeEditor, videoEmbed)
        Transforms.move(activeEditor, { distance: 1 })

        setTimeout(() => {
          try {
            ReactEditor.focus(activeEditor)
          } catch {
            console.error("Error focusing editor after video embed")
          }
        }, 10)
      } catch {
        console.error("Error inserting video embed")
      }
    },
    [activeEditor],
  )

  // Audio embed handling
  const handleAudioButtonClick = useCallback(() => {
    if (!activeEditor) {
      setActiveEditor(bodyEditor)
    }
    setShowAudioModal(true)
  }, [activeEditor, bodyEditor])

  const handleAudioSubmit = useCallback(
    (url: string, title: string) => {
      if (!activeEditor) return

      try {
        const audioEmbed = {
          type: "audio-embed" as const,
          url,
          title,
          children: [{ text: "" }],
        }

        if (!activeEditor.selection) {
          const end = Editor.end(activeEditor, [])
          Transforms.select(activeEditor, end)
        }

        Transforms.insertNodes(activeEditor, audioEmbed)
        Transforms.move(activeEditor, { distance: 1 })

        setTimeout(() => {
          try {
            ReactEditor.focus(activeEditor)
          } catch {
            console.error("Error focusing editor after audio embed")
          }
        }, 10)
      } catch {
        console.error("Error inserting audio embed")
      }
    },
    [activeEditor],
  )

  // Code embed handling
  const handleCodeButtonClick = useCallback(() => {
    if (!activeEditor) {
      setActiveEditor(bodyEditor)
    }
    setShowCodeModal(true)
  }, [activeEditor, bodyEditor])

  const handleCodeSubmit = useCallback(
    (code: string, language: string) => {
      if (!activeEditor) return

      try {
        const codeEmbed = {
          type: "code" as const,
          language,
          children: [{ text: code }],
        }

        if (!activeEditor.selection) {
          const end = Editor.end(activeEditor, [])
          Transforms.select(activeEditor, end)
        }

        Transforms.insertNodes(activeEditor, codeEmbed)
        Transforms.move(activeEditor, { distance: 1 })

        setTimeout(() => {
          try {
            ReactEditor.focus(activeEditor)
          } catch {
            console.error("Error focusing editor after code embed")
          }
        }, 10)
      } catch {
        console.error("Error inserting code embed")
      }
    },
    [activeEditor],
  )

  // Toolbar visibility
  const shouldShowToolbar = useCallback(
    (sectionName: string): boolean => {
      if (sectionName === "title" && (hoveredSection === "title" || activeEditor === titleEditor)) {
        return true
      }
      if (sectionName === "subtitle" && (hoveredSection === "subtitle" || activeEditor === subtitleEditor)) {
        return true
      }
      if (sectionName === "body" && (hoveredSection === "body" || activeEditor === bodyEditor)) {
        return true
      }
      if (sectionName.startsWith("additional-")) {
        const index = Number.parseInt(sectionName.split("-")[1])
        return (
          hoveredSection === sectionName ||
          (additionalEditors[index] && activeEditor === additionalEditors[index].editor)
        )
      }
      return false
    },
    [hoveredSection, activeEditor, titleEditor, subtitleEditor, bodyEditor, additionalEditors],
  )

  // Render editor toolbar
  const renderEditorToolbar = useCallback(
    (editor: CustomEditor, visible: boolean) => {
      if (!visible) return null

      return (
        <Slate
          editor={editor}
          initialValue={editor === titleEditor ? titleValue : editor === subtitleEditor ? subtitleValue : bodyValue}
          onChange={() => {}}
        >
          <FormatToolbar>
            <MarkButton format="bold" icon={<FaBold />} />
            <MarkButton format="italic" icon={<FaItalic />} />
            <MarkButton format="underline" icon={<FaUnderline />} />

            <FontSizeSelect value={currentFontSize} onChange={handleFontSizeChange} />

            <ColorPicker value={currentTextColor} onChange={handleTextColorChange} colors={TEXT_COLORS} />

            <Button
              active={isLinkActive(editor)}
              onMouseDown={(event: React.MouseEvent) => {
                event.preventDefault()
                handleLinkButtonClick()
              }}
            >
              <FaLink />
            </Button>

            <ListButton icon={<FaList />} />

            <BlockButton format="left" icon={<FaAlignLeft />} />
            <BlockButton format="center" icon={<FaAlignCenter />} />
            <BlockButton format="right" icon={<FaAlignRight />} />
            <BlockButton format="justify" icon={<FaAlignJustify />} />
          </FormatToolbar>
        </Slate>
      )
    },
    [
      titleValue,
      subtitleValue,
      bodyValue,
      titleEditor,
      subtitleEditor,
      currentFontSize,
      currentTextColor,
      handleFontSizeChange,
      handleTextColorChange,
      handleLinkButtonClick,
    ],
  )

  // Handle clicks outside the editor
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideClick =
        titleRef.current &&
        !titleRef.current.contains(event.target as HTMLElement) &&
        subtitleRef.current &&
        !subtitleRef.current.contains(event.target as HTMLElement) &&
        bodyRef.current &&
        !bodyRef.current.contains(event.target as HTMLElement) &&
        additionalEditors.every(
          (editor) => editor.ref.current && !editor.ref.current.contains(event.target as HTMLElement),
        )

      if (isOutsideClick) {
        setActiveEditor(null)
        setHoveredSection(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [additionalEditors])

  // Set body editor as active by default
  useEffect(() => {
    setActiveEditor(bodyEditor)
  }, [bodyEditor])

  return (
    <div className="slate-editor" style={{ backgroundColor: bgColor }}>
      {/* Hidden file inputs */}
      <input
        type="file"
        ref={imageInputRef}
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          const targetEditor = activeEditor || bodyEditor
          handleImageUpload(e, targetEditor, bodyEditor)
        }}
      />

      {/* Main toolbar - always visible */}
      <Toolbar>
        <ToolbarButton icon={<span className="font-medium">Style</span>} onClick={() => setShowStyleModal(true)} />
        <ToolbarButton icon={<span className="font-medium">T</span>} onClick={addNewTextHolder} />
        <ToolbarButton icon={<FaImage className="w-5 h-5" />} onClick={() => imageInputRef.current?.click()} />
        <ToolbarButton icon={<FaVideo className="w-5 h-5" />} onClick={handleVideoButtonClick} />
        <ToolbarButton icon={<FaMusic className="w-5 h-5" />} onClick={handleAudioButtonClick} />
        <ToolbarButton icon={<FaCode className="w-5 h-5" />} onClick={handleCodeButtonClick} />
        <ToolbarButton icon={<FaEllipsisH className="w-5 h-5" />} onClick={() => {}} />
      </Toolbar>

      <div className="editor-sections">
        {/* Title Editor */}
        <div
          ref={titleRef}
          className="title-section mb-6 py-4"
          onClick={handleTitleClick}
          onMouseEnter={() => handleMouseEnter("title")}
          onMouseLeave={handleMouseLeave}
        >
          {renderEditorToolbar(titleEditor, shouldShowToolbar("title"))}

          <Slate editor={titleEditor} initialValue={titleValue} onChange={handleTitleChange}>
            <Editable
              style={{ outline: "none" }}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              placeholder="Enter title..."
              className="text-4xl font-bold"
              spellCheck
            />
          </Slate>
        </div>

        {/* Subtitle Editor */}
        <div
          ref={subtitleRef}
          className="subtitle-section mb-8 py-4"
          onClick={handleSubtitleClick}
          onMouseEnter={() => handleMouseEnter("subtitle")}
          onMouseLeave={handleMouseLeave}
        >
          {renderEditorToolbar(subtitleEditor, shouldShowToolbar("subtitle"))}

          <Slate editor={subtitleEditor} initialValue={subtitleValue} onChange={handleSubtitleChange}>
            <Editable
              style={{ outline: "none" }}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              placeholder="Enter subtitle..."
              className="text-2xl text-gray-500"
              spellCheck
            />
          </Slate>
        </div>

        {/* Body Editor */}
        <div
          ref={bodyRef}
          className="body-section py-4 rounded-lg"
          style={{ minHeight: "300px", marginBottom: `${contentSpacing}px` }}
          onClick={handleBodyClick}
          onMouseEnter={() => handleMouseEnter("body")}
          onMouseLeave={handleMouseLeave}
        >
          {renderEditorToolbar(bodyEditor, shouldShowToolbar("body"))}

          <Slate editor={bodyEditor} initialValue={bodyValue} onChange={handleBodyChange}>
            <Editable
              style={{ outline: "none" }}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              placeholder="Start writing..."
              className="min-h-full"
              spellCheck
            />
          </Slate>
        </div>

        {/* Additional Text Holders */}
        {additionalEditors.map((editorData, index) => (
          <div
            key={index}
            ref={editorData.ref}
            className="additional-section p-4 border rounded-lg"
            style={{ minHeight: "200px", marginBottom: `${contentSpacing}px` }}
            onClick={() => handleAdditionalEditorClick(editorData.editor, index)}
            onMouseEnter={() => handleMouseEnter(`additional-${index}`)}
            onMouseLeave={handleMouseLeave}
          >
            {renderEditorToolbar(editorData.editor, shouldShowToolbar(`additional-${index}`))}

            <Slate
              editor={editorData.editor}
              initialValue={editorData.value}
              onChange={(value) => handleAdditionalEditorChange(index, value)}
            >
              <Editable
                style={{ outline: "none" }}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Start writing..."
                spellCheck
                className="min-h-full"
              />
            </Slate>
          </div>
        ))}
      </div>

      {/* Modals */}
      <LinkModal
        isOpen={showLinkModal}
        onClose={() => setShowLinkModal(false)}
        onSubmit={handleLinkSubmit}
        initialText={selectedText}
      />

      <VideoEmbedModal isOpen={showVideoModal} onClose={() => setShowVideoModal(false)} onSubmit={handleVideoSubmit} />

      <AudioEmbedModal isOpen={showAudioModal} onClose={() => setShowAudioModal(false)} onSubmit={handleAudioSubmit} />

      <CodeEmbedModal isOpen={showCodeModal} onClose={() => setShowCodeModal(false)} onSubmit={handleCodeSubmit} />

      {showStyleModal && (
        <StyleModal
          onClose={() => setShowStyleModal(false)}
          bgColor={bgColor}
          setBgColor={setBgColor}
          contentSpacing={contentSpacing}
          setContentSpacing={setContentSpacing}
        />
      )}
    </div>
  )
}

export default SlateEditor