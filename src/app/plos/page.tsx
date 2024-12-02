import { Header } from "../component1/header"
import { Sidebar } from "../component1/sidebar"
import { PLOTable } from "../component1/plo-table"
import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'

// Sample PLO data
const plos = [
  {
    id: 0,
    description: "Apply knowledge of computing and mathematics appropriate to the discipline",
  },
  {
    id: 1,
    description: "Analyze a problem and identify the computing requirements appropriate to its solution",
  },
  {
    id: 2,
    description: "Analyze the local and global impact of computing on individuals, organizations, and society",
  },
]

export default function PLOs() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-64" />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">PLOs</h2>
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  BSCS
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent >
                <DropdownMenuItem>BSCS</DropdownMenuItem>
                <DropdownMenuItem>BSSE</DropdownMenuItem>
                <DropdownMenuItem>BSIT</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-lg border bg-white">
            <PLOTable plos={plos} />
          </div>
        </main>
      </div>
    </div>
  )
}

