'use client'

import { useState } from 'react'
import { Card, CardContent } from "../components/ui/card"
import { Checkbox } from "../components/ui/checkbox"
import { Check, X } from 'lucide-react'
import { cn } from "../lib/utils"

interface Topic {
  name: string
  isDone: boolean
}

export function CourseTopicsView() {
  const [topics, setTopics] = useState<Topic[]>([
    { name: "Topic Name", isDone: false },
    { name: "Why this Course?", isDone: true },
    { name: "Comparison between systems", isDone: false },
    { name: "Number System Conversions", isDone: false },
    { name: "Integer based conversion", isDone: false },
    { name: "Floating numbers conversions", isDone: false },
    { name: "Any base to any other base conversion", isDone: false },
    { name: "Arithmetic Operators", isDone: false },
    { name: "Binary Codes", isDone: false },
    { name: "Grey codes", isDone: false },
    { name: "BCD codes", isDone: false },
  ]);

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-semibold">Course Topics</h2>
      </div>
      
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <div className="grid grid-cols-1">
            {/* Header */}
            <div className="grid grid-cols-[1fr] p-4 border-b bg-white">
              <span className="font-medium">Topic Name</span>
            </div>
            
            {/* Topics */}
            {topics.map((topic, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 border-b last:border-b-0",
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                )}
              >
                <span>{topic.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


