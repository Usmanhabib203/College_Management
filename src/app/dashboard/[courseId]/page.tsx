'use client'

import { useRouter } from 'next/navigation'
import { Header } from "../../components/header"
import { Sidebar } from "../../components/sidebar"
import { CourseSection } from "../../components/course-section"
import { Folder, Settings, ListTodo } from 'lucide-react'

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const router = useRouter()

  const handleSectionClick = (section: string) => {
    // When CLOs is clicked, navigate to Course Topics view
    if (section === 'clos') {
      router.push(`/dashboard/${params.courseId}/clos`)
    }
    if (section === 'topics') {
      router.push(`/dashboard/${params.courseId}/topics`)
    } else {
      router.push(`/dashboard/${params.courseId}/${section}`)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Digital Logic Design</h2>
            </div>
          </div>

          {/* Course Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div onClick={() => handleSectionClick('main-folder')}>
              <CourseSection 
                icon={<Folder className="w-6 h-6 text-yellow-500" />}
                title="Main Folder"
                courseId={params.courseId}
                view="main-folder"
              />
            </div>
            <div onClick={() => handleSectionClick('clos')}>
              <CourseSection 
                icon={<Settings className="w-6 h-6 text-purple-500" />}
                title="CLOs"
                courseId={params.courseId}
                view="clos"
              />
            </div>
            <div onClick={() => handleSectionClick('topics')}>
              <CourseSection 
                icon={<ListTodo className="w-6 h-6 text-emerald-500" />}
                title="Course Topics"
                courseId={params.courseId}
                view="topics"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


// 'use client'

// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { Header } from "../../components/header"
// import { Sidebar } from "../../components/sidebar"
// import { CourseSection } from "../../components/course-section"
// import { Folder, Settings, ListTodo } from 'lucide-react'

// // Type for course section data (adjust as needed based on the API response)
// interface CourseSectionData {
//   title: string
//   icon: JSX.Element
//   view: string
// }

// export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
//   const router = useRouter()
//   const [courseSections, setCourseSections] = useState<CourseSectionData[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchCourseSections = async () => {
//       try {
//         const response = await fetch(
//           `https://localhost:44338/api/teacher/GetTeacherCourseSections?teacherId=2&courseInSOSId=${params.courseId}`
//         )

//         if (!response.ok) {
//           throw new Error('Failed to fetch course sections')
//         }

//         const data = await response.json()

//         // If sections data is empty, provide static data or handle accordingly
//         if (data.length === 0) {
//           setCourseSections([
//             { title: "Main Folder", icon: <Folder className="w-6 h-6 text-yellow-500" />, view: 'main-folder' },
//             { title: "CLOs", icon: <Settings className="w-6 h-6 text-purple-500" />, view: 'clos' },
//             { title: "Course Topics", icon: <ListTodo className="w-6 h-6 text-emerald-500" />, view: 'topics' }
//           ])
//         } else {
//           setCourseSections(data)
//         }
//       } catch (err) {
//         setError(err.message || 'Something went wrong')
//         // Fallback to static data in case of error
//         setCourseSections([
//           { title: "Main Folder", icon: <Folder className="w-6 h-6 text-yellow-500" />, view: 'main-folder' },
//           { title: "CLOs", icon: <Settings className="w-6 h-6 text-purple-500" />, view: 'clos' },
//           { title: "Course Topics", icon: <ListTodo className="w-6 h-6 text-emerald-500" />, view: 'topics' }
//         ])
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchCourseSections()
//   }, [params.courseId])

//   const handleSectionClick = (section: string) => {
//     if (section === 'clos') {
//       router.push(`/dashboard/${params.courseId}/topics`)
//     } else {
//       router.push(`/dashboard/${params.courseId}/${section}`)
//     }
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1">
//         <Header />
//         <main className="p-6">
//           <div className="mb-6">
//             <div className="flex items-center gap-2">
//               <h2 className="text-2xl font-bold">Digital Logic Design</h2>
//             </div>
//           </div>

//           {/* Loading or error message */}
//           {loading ? (
//             <p>Loading sections...</p>
//           ) : error ? (
//             <p className="text-red-500">{error}</p>
//           ) : (
//             // Course Sections Grid
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               {courseSections.map((section, index) => (
//                 <div key={index} onClick={() => handleSectionClick(section.view)}>
//                   <CourseSection
//                     icon={section.icon}
//                     title={section.title}
//                     courseId={params.courseId}
//                     view={section.view}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   )
// }
