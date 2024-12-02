import { GraduationCap } from 'lucide-react'
import Link from "next/link"

import { Card, CardContent } from "..//components/ui/card"

interface CourseCardProps {
  title: string
  href: string
}

export function CourseCard({ title, href }: CourseCardProps) {
  return (
    <Card className="hover:bg-accent transition-colors">
      <Link href={href}>
        <CardContent className="p-6 flex flex-col items-center text-center gap-4">
          <GraduationCap className="h-8 w-8" />
          <h3 className="font-medium">{title}</h3>
        </CardContent>
      </Link>
    </Card>
  )
}

