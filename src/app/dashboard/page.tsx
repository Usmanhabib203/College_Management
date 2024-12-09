 "use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { CourseCard } from "../components/course-card";

// Static courses data (Fallback data)
const staticCourses = [
  {
    CourseCode: "DLD-2",
    CourseTitle: "Digital Logic Design",
    SemesterNo: 2,
    ProgramShortName: "BCS",
  },
  {
    CourseCode: "CN-3",
    CourseTitle: "Computer Networks",
    SemesterNo: 3,
    ProgramShortName: "BSE",
  },
  {
    CourseCode: "DSA-1",
    CourseTitle: "Data Structures & Algorithms",
    SemesterNo: 2,
    ProgramShortName: "BAI",
  },
];


export default function DashboardPage() {
  const [courses, setCourses] = useState(staticCourses); // Default to static courses
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Fetch courses from the API
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://localhost:44338/api/teacher/GetTeacherCourses?id=2"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await response.json();

        if (data.length === 0) {
          setCourses(staticCourses);
        } else {
          setCourses(data);
        }
      } catch (err) {
        setCourses(staticCourses);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (course: { CourseCode: string; CourseTitle: string }) => {
    // Navigate to the course detail page with title as a query parameter
    router.push(`/dashboard/${course.CourseCode}?title=${encodeURIComponent(course.CourseTitle)}`
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Teacher Dashboard</h2>
            <p className="text-gray-600">Fall 2024</p>
          </div>

          {loading ? (
            <p>Loading courses...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  onClick={() => handleCourseClick(course)}
                  className="cursor-pointer"
                >
                  <CourseCard
                    code={course.CourseCode}
                    title={course.CourseTitle}
                    semester={course.SemesterNo}
                    program={course.ProgramShortName}
                  />
                 
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}