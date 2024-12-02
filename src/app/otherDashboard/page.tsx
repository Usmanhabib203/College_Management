'use client'

import { useState } from "react"
import { Button } from "../components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Download, Eye, FolderIcon, Upload } from 'lucide-react'
import { ContentDialog } from "../components/content-dialog"
import { UploadDialog } from "../components/upload-dialog"
import { SuccessToast } from "../components/success-toast"
import { Sidebar0 } from "../components/sidebar0"
import { Header } from "../components/header"

const resources = [
  { id: 0, name: "Course Contents" },
  { id: 1, name: "Weekly Plan" },
  { id: 2, name: "Lecture Notes" },
]

export default function MainFolderPage() {
  const [contentDialogOpen, setContentDialogOpen] = useState(false)
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleUpload = (title: string, file: File | null) => {
    // Handle the upload logic here
    console.log('Uploading:', { title, file })
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar0 />
      <div className="flex-1">
        <Header />
      {showToast && <SuccessToast onClose={() => setShowToast(false)} />}
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderIcon className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">Main Folder</h2>
          </div>
          {/* <Button 
            onClick={() => setUploadDialogOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload Content
          </Button> */}
        </div>
        <div className="rounded-lg bg-white shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Detail</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {resources.map((resource) => (
                <TableRow key={resource.id}>
                  <TableCell>{resource.id}</TableCell>
                  <TableCell>{resource.name}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700"
                        onClick={() => setContentDialogOpen(true)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700"
                        onClick={() => setUploadDialogOpen(true)}
                      >
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <ContentDialog isOpen={contentDialogOpen} onClose={() => setContentDialogOpen(false)} />
      <UploadDialog 
        isOpen={uploadDialogOpen} 
        onClose={() => setUploadDialogOpen(false)}
        onUpload={handleUpload}
      />
    </div>
    </div>
  )
}

