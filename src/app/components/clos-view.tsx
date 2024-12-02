import { Card, CardContent } from "../components/ui/card"

const clos = [
  {
    description: "Understand the basic concepts of programming"
  },
  {
    description: "Apply data structures to solve problems"
  },
  {
    description: "Develop efficient algorithms for computational tasks"
  },
  {
    description: "Design and manage relational databases"
  }
]

export function CLOsView() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-semibold">CLOs</h2>
      </div>
      
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <div className="grid grid-cols-1">
            <div className="p-4 border-b bg-gray-50">
              <span className="font-medium">Description</span>
            </div>
            {clos.map((clo, index) => (
              <div
                key={index}
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border-b last:border-b-0`}
              >
                {clo.description}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

