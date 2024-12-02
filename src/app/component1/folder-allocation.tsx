"use client"

import { useState } from "react"
import { Bell, FolderPlus, FolderMinus } from 'lucide-react'

import { Button } from "../components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { Toast } from "../components/ui/toast"

interface Student {
  id: number
  name: string
}

const students: Student[] = [
  { id: 0, name: "Ali Bin Tahir" },
  { id: 1, name: "Noor" },
]

export function FolderAllocation() {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [allocatedFolders, setAllocatedFolders] = useState<number[]>([])

  const handleFolderToggle = (studentId: number) => {
    setAllocatedFolders(prev => {
      const isAllocated = prev.includes(studentId)
      const newAllocated = isAllocated 
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
      
      // Show appropriate toast message
      setToastMessage(isAllocated 
        ? "Folder added successfully" 
        : "Folder removed successfully"
      )
      setShowToast(true)
      
      // Hide toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000)
      
      return newAllocated
    })
  }

  return (
    <div className="p-6">
      {showToast && (
        <Toast
          title="Success"
          description={toastMessage}
          className="absolute top-4 right-4"
          onClose={() => setShowToast(false)}
        />
      )}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Main Folder Allocation</h2>
          <div className="flex items-center gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Course:</label>
              <div className="text-sm text-muted-foreground">Digital Logic Design</div>
            </div>
            <Select defaultValue="bcs">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bcs">BCS</SelectItem>
                <SelectItem value="bsse">BSSE</SelectItem>
                <SelectItem value="bsit">BSIT</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowToast(true)}
        >
          <Bell className="h-4 w-4 mr-2" />
          Notifications
        </Button>
      </div>
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="w-24">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => {
              const isAllocated = allocatedFolders.includes(student.id)
              return (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleFolderToggle(student.id)}
                      className={`h-8 w-8 p-0 ${
                        isAllocated 
                          ? "text-red-600 hover:text-red-700 hover:bg-red-50"
                          : "text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                      }`}
                    >
                      {isAllocated ? (
                        <FolderMinus className="h-4 w-4" />
                      ) : (
                        <FolderPlus className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {isAllocated ? "Remove folder" : "Allocate folder"}
                      </span>
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

