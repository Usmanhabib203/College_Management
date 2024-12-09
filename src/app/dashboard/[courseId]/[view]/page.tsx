import { Header } from "../../../components/header"
import { Sidebar } from "../../../components/sidebar"
import { MainFolderView } from "../../../components/main-folder-view"
import { CLOsView } from "../../../components/clos-view"
import { CourseTopicsView } from "../../../components/course-topics-view"
import  Section  from "../../../components/sections"

export default function CourseDetailPage({ 
  params 
}: { 
  params: { courseId: string; view: string } 
}) {
  const renderView = () => {
    switch (params.view) {
      case 'main-folder':
        return <MainFolderView />
      case 'clos':
        return <CLOsView />
      case 'topics':
        return <CourseTopicsView />
      case 'section':
          return <Section />
      default:
        return <MainFolderView />
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {renderView()}
      </div>
    </div>
  )
}

