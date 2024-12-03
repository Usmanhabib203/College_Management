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



// import { useState, useEffect } from "react";
// import { Card, CardContent } from "../components/ui/card";

// export function CLOsView() {
//   const [clos, setClos] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch data from API
//     const fetchCLOs = async () => {
//       try {
//         const response = await fetch(
//           "https://localhost:44338/api/teacher/GetCourseCLO?courseInSOSId=4"
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch CLOs");
//         }

//         const data = await response.json();
//         setClos(data); // Update state with fetched data
//       } catch (error) {
//         setError(error.message); // Set error message if API call fails
//       } finally {
//         setIsLoading(false); // Ensure loading is stopped
//       }
//     };

//     fetchCLOs();
//   }, []);

//   return (
//     <div className="p-6">
//       <div className="flex items-center gap-2 mb-6">
//         <h2 className="text-xl font-semibold">CLOs</h2>
//       </div>

//       <Card className="shadow-sm">
//         <CardContent className="p-0">
//           <div className="grid grid-cols-1">
//             <div className="p-4 border-b bg-gray-50">
//               <span className="font-medium">Description</span>
//             </div>

//             {isLoading ? (
//               <div className="p-4 text-center">Loading...</div>
//             ) : error ? (
//               <div className="p-4 text-center text-red-500">{error}</div>
//             ) : (
//               clos.map((clo, index) => (
//                 <div
//                   key={index}
//                   className={`p-4 ${
//                     index % 2 === 0 ? "bg-white" : "bg-gray-50"
//                   } border-b last:border-b-0`}
//                 >
//                   {clo.description}
//                 </div>
//               ))
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
