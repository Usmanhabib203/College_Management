"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { CourseSection } from "../../components/course-section";
import { Folder, Settings, ListTodo } from "lucide-react";

// Define the type for a section
interface Section {
  SectionTitle: string;
  CourseInSOSId: number;
  CourseId: number;
  CourseCode: string;
}

export default function CourseDetailPage({
  params,
}: {
  params: { courseId: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseTitle = searchParams.get("title") || "Course Details";

  const [sections, setSections] = useState<Section[]>([]); // Use the Section[] type

  // Fetch sections data from the API
  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await fetch(
          `https://localhost:44338/api/teacher/GetTeacherCourseSections?teacherId=10&courseInSOSId=${params.courseId}`
        );
        if (response.ok) {
          const data: Section[] = await response.json(); // Ensure the API response matches the Section[] type
          setSections(data);
        } else {
          console.error("Failed to fetch sections");
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, [params.courseId]);

  const handleSectionClick = (sectionTitle: string) => {
    router.push(`/dashboard/${params.courseId}/section/${sectionTitle}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          {/* Course Title */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">{courseTitle}</h2>
            </div>
          </div>

          {/* Course Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Predefined Sections */}
            <div onClick={() => handleSectionClick("main-folder")}>
              <CourseSection
                icon={<Folder className="w-6 h-6 text-yellow-500" />}
                title="Main Folder"
                view="main-folder"
                courseId={params.courseId}
              />
            </div>
            <div onClick={() => handleSectionClick("clos")}>
              <CourseSection
                icon={<Settings className="w-6 h-6 text-purple-500" />}
                title="CLOs"
                view="clos"
                courseId={params.courseId}
              />
            </div>
            <div onClick={() => handleSectionClick("topics")}>
              <CourseSection
                icon={<ListTodo className="w-6 h-6 text-emerald-500" />}
                title="Course Topics"
                view="topics"
                courseId={params.courseId}
              />
            </div>

            {/* Dynamic Sections */}
            <div onClick={() => handleSectionClick("section")}>
              <CourseSection
                icon={<ListTodo className="w-6 h-6 text-emerald-500" />}
                title="Sections"
                view="section"          
                courseId={params.courseId}

              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}