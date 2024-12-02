import { Header } from "../component1/header"
import { Sidebar } from "../component1/sidebar"
import { CourseCard } from "../component1/course-card"

const courses = [
  {
    title: "Adv Database Mng Sys",
    href: "#",
  },
  {
    title: "Advance Programming",
    href: "#",
  },
  {
    title: "Agent Based Modeling",
    href: "#",
  },
  {
    title: "Analysis Of Algorithms",
    href: "#",
  },
  {
    title: "App of Infor & Com Tech",
    href: "#",
  },
  {
    title: "Applied Physics",
    href: "#",
  },
  {
    title: "Artificial Intelligence",
    href: "#",
  },
  {
    title: "Artificial Neural Network",
    href: "#",
  },
  {
    title: "Artificial Neural Networks & Deep Learning",
    href: "#",
  },
  {
    title: "Calculus and Anal Geo",
    href: "#",
  },
  {
    title: "Civics and Community Engagement",
    href: "#",
  },
  {
    title: "Comp Org & Ass Lang",
    href: "#",
  },
  {
    title: "Compiler Construction",
    href: "#",
  },
  {
    title: "Computer Architecture",
    href: "#",
  },
  {
    title: "Computer Networks",
    href: "#",
  },
  {
    title: "Computer Vision",
    href: "#",
  },
]

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-64" />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <h2 className="text-2xl font-semibold mb-6">HOD Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

