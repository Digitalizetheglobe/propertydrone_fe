// "use client"; // Add this directive at the top

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import logo from "@/app/images/PropertyDrone-Logo.png";  // Adjust the path to your logo file

// const MainHeader: React.FC = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <header className="relative z-10 items-center justify-center mx-auto max-w-6xl">
//             <div className="items-center justify-center mx-auto max-w-6xl">
//                 <nav className="flex items-center justify-between px-6 py-4 bg-opacity-40">
//                     <div className="flex items-center space-x-8 px-4 py-4 bg-gray-200 bg-opacity-40 rounded-lg">
//                         <Link href="/dashboard">
//                             <Image src={logo} alt="Logo" width={200} height={100} />
//                         </Link>

//                         <div className="hidden md:flex space-x-6 px-6">
//                             <a href="#" className="text-gray-700 hover:text-blue-700">
//                                 Home
//                             </a>
//                             <a href="#" className="text-gray-700 hover:text-blue-700">
//                                 About
//                             </a>
//                             <a href="#" className="text-gray-700 hover:text-blue-700">
//                                 Services
//                             </a>
//                             <a href="properties" className="text-gray-700 hover:text-blue-700">
//                                 Properties
//                             </a>
//                             <a href="#" className="text-gray-700 hover:text-blue-700">
//                                 Developer
//                             </a>
//                         </div>
//                     </div>

//                     <div className="flex items-center space-x-2">
//                         <button
//                             className="px-5 py-5 bg-gray-200 text-gray-700 rounded-lg"
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         >
//                             More <span className="ml-1">≡</span>
//                         </button>

//                         <button className="px-6 py-5 bg-gray-200 text-gray-700 rounded-lg">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                                 />
//                             </svg>
//                         </button>

//                         <button className="px-4 py-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                             CONTACT US
//                         </button>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default MainHeader;