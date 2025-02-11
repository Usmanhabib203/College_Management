'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-8 p-4 items-center">
        {/* Left side illustration */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-square">
            <Image
              src="/assets/image.png"
              alt="Login illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right side login form */}
        <div className="flex justify-center">
          <Card className="w-full max-w-[400px] p-6 shadow-lg">
            <CardContent className="space-y-6">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative w-24 h-24">
                  <Image
                    src="/assets/logo.png"
                    alt="Institute logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="BIIT350"
                    className="h-12 px-4 border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="•"
                    className="h-12 px-4 border-gray-200"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                >
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// 'use client';

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Card, CardContent } from "../components/ui/card";

// export default function LoginPage() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await fetch('https://localhost:44338/api/teacher/Login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // Example: Redirect based on the role or other data from the response
//         router.push('/dashboard');
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message || 'Login failed');
//       }
//     } catch (err) {
//       setError('An error occurred while logging in.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
//       <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-8 p-4 items-center">
//         {/* Left side illustration */}
//         <div className="hidden md:flex justify-center">
//           <div className="relative w-full max-w-[500px] aspect-square">
//             <Image
//               src="/assets/logo.png"
//               alt="Login illustration"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right side login form */}
//         <div className="flex justify-center">
//           <Card className="w-full max-w-[400px] p-6 shadow-lg">
//             <CardContent className="space-y-6">
//               {/* Logo */}
//               <div className="flex justify-center mb-8">
//                 <div className="relative w-24 h-24">
//                   <Image
//                     src="/assets/logo.png"
//                     alt="Institute logo"
//                     fill
//                     className="object-contain"
//                     priority
//                   />
//                 </div>
//               </div>

//               {/* Login Form */}
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="space-y-2">
//                   <Input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="BIIT350"
//                     className="h-12 px-4 border-gray-200"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="••••••••"
//                     className="h-12 px-4 border-gray-200"
//                   />
//                 </div>
//                 {error && (
//                   <p className="text-red-500 text-sm">{error}</p>
//                 )}
//                 <Button
//                   type="submit"
//                   className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
//                 >
//                   Login
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

