"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { X, Upload, ImageIcon } from "lucide-react"

interface ImageUploadProps {
  images: string[]
  onChange: (images: string[]) => void
}

export default function ImageUpload({ images, onChange }: ImageUploadProps) {
  const [imageUrl, setImageUrl] = useState("")

  const handleAddImageUrl = () => {
    if (imageUrl && !images.includes(imageUrl)) {
      onChange([...images, imageUrl])
      setImageUrl("")
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    // In a real application, you would upload these files to a server or cloud storage
    // For this example, we'll convert them to data URLs
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()

      reader.onload = (event) => {
        if (event.target && typeof event.target.result === "string") {
          onChange([...images, event.target.result])
        }
      }

      reader.readAsDataURL(file)
    }

    // Clear the input
    e.target.value = ""
  }

  const removeImage = (imageToRemove: string) => {
    onChange(images.filter((img) => img !== imageToRemove))
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" id="image-upload" multiple />
        <label htmlFor="image-upload" className="flex-1">
          <Button type="button" variant="outline" className="w-full cursor-pointer" asChild>
            <span>
              <Upload className="h-4 w-4 mr-2" />
              Upload Images
            </span>
          </Button>
        </label>

        <div className="flex flex-1 gap-2">
          <Input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Or paste image URL"
            className="flex-1"
          />
          <Button type="button" onClick={handleAddImageUrl} disabled={!imageUrl}>
            Add
          </Button>
        </div>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative aspect-video">
                {img.startsWith("data:image") || img.match(/\.(jpeg|jpg|gif|png)$/i) ? (
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Blog image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <ImageIcon className="h-12 w-12 text-muted-foreground" />
                  </div>
                )}
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6"
                  onClick={() => removeImage(img)}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove image</span>
                </Button>
              </div>
              <CardContent className="p-2">
                <p className="text-xs text-muted-foreground truncate">
                  {img.startsWith("data:image") ? "Uploaded image" : img}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

