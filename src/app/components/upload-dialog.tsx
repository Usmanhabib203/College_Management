'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

interface UploadDialogProps {
  isOpen: boolean
  onClose: () => void
  onUpload: (title: string, file: File | null) => void
}

export function UploadDialog({ isOpen, onClose, onUpload }: UploadDialogProps) {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpload(title, file)
    setTitle('')
    setFile(null)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Content</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file">File</Label>
            <div className="flex items-center gap-2">
              <Input
                id="file"
                type="file"
                onChange={(e) => setFile(e.files?.[0] || null)}
                className="file:bg-emerald-600 file:text-white file:border-0 file:rounded-md file:px-2 file:py-1 file:mr-2 file:hover:bg-emerald-700 cursor-pointer"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
              Upload
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

