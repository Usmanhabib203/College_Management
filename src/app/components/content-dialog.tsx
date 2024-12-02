'use client'

import { Button } from "../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { FileIcon } from 'lucide-react'

interface ContentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContentDialog({ open, onOpenChange }: ContentDialogProps) {
  const contents = [
    { id: 0, name: "Course Content", hasDocument: true },
    { id: 1, name: "week 2 notes", hasDocument: true },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Content Detail</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Display Name</TableHead>
              <TableHead>Document</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contents.map((content) => (
              <TableRow key={content.id}>
                <TableCell>{content.id}</TableCell>
                <TableCell>{content.name}</TableCell>
                <TableCell>
                  {content.hasDocument && (
                    <FileIcon className="h-4 w-4 text-blue-500" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="text-sm text-muted-foreground">1 row selected</div>
      </DialogContent>
    </Dialog>
  )
}

