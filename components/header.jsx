// import React from "react";
// import { Button } from "./ui/button";
// import { PenBox, LayoutDashboard } from "lucide-react";
// import Link from "next/link";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import { checkUser } from "@/lib/checkUser";
// import Image from "next/image";

// const Header = async () => {
//   await checkUser();

//   return (
//     <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
//       <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
//         {/* <Link href="/">
//           <Image
//             src={"/logo.jpg"}
//             alt="Welth Logo"
//             width={800}
//             height={190}
//             className="h-12 w-auto object-contain"
//           />
//         </Link> */}

//         <Link href="/" className="text-3xl font-bold tracking-tight">
//           <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
//             ExpensAI
//           </span>
//         </Link>

//         {/* Navigation Links - Different for signed in/out users */}
//         <div className="hidden md:flex items-center space-x-8">
//           <SignedOut>
//             <a href="#features" className="text-gray-600 hover:text-blue-600">
//               Features
//             </a>
//             <a
//               href="#testimonials"
//               className="text-gray-600 hover:text-blue-600"
//             >
//               Testimonials
//             </a>
//           </SignedOut>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex items-center space-x-4">
//           <SignedIn>
//             <Link
//               href="/dashboard"
//               className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
//             >
//               <Button variant="outline">
//                 <LayoutDashboard size={18} />
//                 <span className="hidden md:inline">Dashboard</span>
//               </Button>
//             </Link>
//             <a href="/transaction/create">
//               <Button className="flex items-center gap-2">
//                 <PenBox size={18} />
//                 <span className="hidden md:inline">Add Transaction</span>
//               </Button>
//             </a>
//           </SignedIn>
//           <SignedOut>
//             <SignInButton forceRedirectUrl="/dashboard">
//               <Button variant="outline">Sign Up</Button>
//             </SignInButton>
//           </SignedOut>
//           <SignedIn>
//             <UserButton
//               appearance={{
//                 elements: {
//                   avatarBox: "w-10 h-10",
//                 },
//               }}
//             />
//           </SignedIn>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* --- Logo (Left Side) --- */}
        <Link href="/" className="text-3xl font-bold tracking-tight ml-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">ExpensAI</span>
        </Link>

        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <SignedOut>
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
            </SignedOut>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                <Button variant="outline">
                  <LayoutDashboard size={18} />
                  <span className="hidden md:inline">Dashboard</span>
                </Button>
              </Link>
              <a href="/transaction/create">
                <Button className="flex items-center gap-2">
                  <PenBox size={18} />
                  <span className="hidden md:inline">Add Transaction</span>
                </Button>
              </a>
            </SignedIn>
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline">Sign Up</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;