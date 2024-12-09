"use client"

import { useEffect, useState } from "react"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { SectionCard } from "./section-card";

// Define the type for the API data
interface Course {
  CourseCode: string;
}

export default function Section() {
  const [courses, setCourses] = useState<Course[]>([]) 
  const [error, setError] = useState<string | null>(null)
  const API_URL = "https://localhost:44338/api/teacher/GetTeacherCourseSections?teacherId=10&courseInSOSId=49"

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
        //   throw new Error(HTTP error! status: ${response.status})
        }
        const data: Course[] = await response.json()
        
        const formattedCourses = data.map((course) => ({
          CourseCode: course.CourseCode, 
          href: "#" 
        }))
        setCourses(formattedCourses)
      } catch (err) {
        setError((err as Error).message)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        <main className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Teacher Dashboard</h2>

          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : courses.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {courses.map((course) => (
                <SectionCard href={""} key={course.CourseCode} {...course} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}