import { Header } from "../components/header"
import { Sidebar } from "../components/sidebar"
import { CourseCard } from "../components/course-card"

const courses = [
  {
    code: "DLD-2",
    title: "Digital Logic Design",
    semester: 2,
    program: "BCS"
  },
  {
    code: "DLD-2",
    title: "Digital Logic Design",
    semester: 2,
    program: "BAI"
  },
  {
    code: "CN-3",
    title: "Computer Networks",
    semester: 3,
    program: "BAI"
  },
  {
    code: "DLD-2",
    title: "Digital Logic Design",
    semester: 2,
    program: "BSE"
  },
  {
    code: "CN-3",
    title: "Computer Networks",
    semester: 3,
    program: "BSE"
  }
]

export default function DashboardPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                code={course.code}
                title={course.title}
                semester={course.semester}
                program={course.program}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
// "use client"
// import { useEffect, useState } from "react";
// import { Header } from "../components/header";
// import { Sidebar } from "../components/sidebar";
// import { CourseCard } from "../components/course-card";

// // Static courses data (Fallback data)
// const staticCourses = [
//   {
//     code: "DLD-2",
//     title: "Digital Logic Design",
//     semester: 2,
//     program: "BCS"
//   },
//   {
//     code: "DLD-2",
//     title: "Digital Logic Design",
//     semester: 2,
//     program: "BAI"
//   },
//   {
//     code: "CN-3",
//     title: "Computer Networks",
//     semester: 3,
//     program: "BAI"
//   },
//   {
//     code: "DLD-2",
//     title: "Digital Logic Design",
//     semester: 2,
//     program: "BSE"
//   },
//   {
//     code: "CN-3",
//     title: "Computer Networks",
//     semester: 3,
//     program: "BSE"
//   }
// ];

// export default function DashboardPage() {
//   const [courses, setCourses] = useState(staticCourses);  // Default to static courses
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Fetch courses from the API
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch(
//           "https://localhost:44338/api/teacher/GetTeacherCourses?id=2"
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch courses");
//         }

//         const data = await response.json();

//         // If no courses returned, fall back to static data
//         if (data.length === 0) {
//           setCourses(staticCourses);
//         } else {
//           setCourses(data);
//         }
//       } catch (err) {
//         setError(err.message || "Something went wrong");
//         setCourses(staticCourses);  // Use static data in case of error
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1">
//         <Header />
//         <main className="p-6">
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold">Teacher Dashboard</h2>
//             <p className="text-gray-600">Fall 2024</p>
//           </div>

//           {loading ? (
//             <p>Loading courses...</p>
//           ) : error ? (
//             <p className="text-red-500">{error}</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {courses.map((course, index) => (
//                 <CourseCard
//                   key={index}
//                   code={course.code}
//                   title={course.title}
//                   semester={course.semester}
//                   program={course.program}
//                 />
//               ))}
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }
