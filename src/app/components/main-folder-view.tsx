


"use client"

import { useState, useEffect } from 'react'
import { Eye } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { Button } from "../components/ui/button"

interface FolderContent {
  Id: number;
  Name: string;
  Flag: number;
  FolderContent: any[]; // You can ignore this field for now since you don't need to display it
}

export function MainFolderView() {
  const [folderContents, setFolderContents] = useState<FolderContent[]>([])

  // Fetch the data from API
  useEffect(() => {
    async function fetchFolderContents() {
      try {
        const response = await fetch('https://localhost:44338/api/teacher/GetFolderMainCheckList')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setFolderContents(data) // Save the response in state
      } catch (error) {
        console.error(error)
      }
    }

    fetchFolderContents()
  }, []) // Empty dependency array to run the effect once when the component mounts

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-semibold">Main Folder</h2>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="w-[100px]">Detail</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {folderContents.map((item) => (
              <TableRow key={item.Id}>
                <TableCell>{item.Id}</TableCell>
                <TableCell>{item.Name}</TableCell>
                <TableCell>
                  <Button 
                    size="sm" 
                    className="bg-emerald-600 hover:bg-emerald-700 h-8 w-8 p-0"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}