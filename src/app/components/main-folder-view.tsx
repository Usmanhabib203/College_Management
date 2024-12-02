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

const folderContents = [
  { id: 0, name: "Course Contents" },
  { id: 1, name: "Weekly Plan" },
  { id: 2, name: "Lecture Notes" },
]

export function MainFolderView() {
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
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
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

