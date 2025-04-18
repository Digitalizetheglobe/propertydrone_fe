"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAddressCard, 
  faEnvelopeOpenText, 
  faFolderOpen, 
  faFolderPlus, 
  faBuilding, 
  faBuildingCircleArrowRight, 
  faNewspaper, 
  faFileCirclePlus,
  faBriefcase, 
  faUserTie,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';

const sections = [
  
  // { 
  //   name: "Contact Form", 
  //   path: "/dashboard/contactform", 
  //   icon: faEnvelopeOpenText,
  //   description: "Customize contact form fields and settings" 
  // },
  { 
    name: "Project Detail", 
    path: "/dashboard/projectdetail", 
    icon: faFolderOpen,
    description: "Manage existing project information" 
  },
  { 
    name: "Add Project", 
    path: "/dashboard/projectform", 
    icon: faFolderPlus,
    description: "Create new projects in the system" 
  },
  { 
    name: "Property Detail", 
    path: "/dashboard/propertydetail", 
    icon: faBuilding,
    description: "View and edit property listings" 
  },
  { 
    name: "Add Property", 
    path: "/dashboard/propertyform", 
    icon: faBuildingCircleArrowRight,
    description: "List new properties for sale or rent" 
  },
  { 
    name: "Contact Detail", 
    path: "/dashboard/contactdetail", 
    icon: faAddressCard,
    description: "View and manage all contact information" 
  },
  { 
    name: "Blogs", 
    path: "/dashboard/allblogs", 
    icon: faNewspaper,
    description: "Manage published blog content" 
  },
  { 
    name: "Add Blogs", 
    path: "/dashboard/addblog", 
    icon: faFileCirclePlus,
    description: "Create new blog posts and articles" 
  },
  { 
    name: "Career Opportunities", 
    path: "/dashboard/careers", 
    icon: faBriefcase,
    description: "Manage job postings and listings" 
  },
  { 
    name: "Job Applications", 
    path: "/dashboard/applications", 
    icon: faUserTie,
    description: "View and manage job applications" 
  },
  { 
    name: "Add Job Posting", 
    path: "/dashboard/careerform", 
    icon: faFileAlt,
    description: "Create new job opportunities" 
  },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <>
      
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-[#224295] mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              onClick={() => router.push(section.path)}
            >
              <div className="p-6 cursor-pointer">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 mx-auto mb-4">
                  <FontAwesomeIcon 
                    icon={section.icon} 
                    size="2x" 
                    className="text-[#224295]" 
                  />
                </div>
                
                <h2 className="text-xl font-semibold text-[#224295] text-center mb-2">
                  {section.name}
                </h2>
                
                <div className="border-t border-gray-200 my-3"></div>
                
                <p className="text-gray-600 text-sm text-center">
                  {section.description}
                </p>
              </div>
              
              <div 
                className="bg-blue-100 hover:bg-blue-200 py-3 px-4 text-center cursor-pointer transition-colors duration-200"
              >
                <span className="text-[#224295] font-medium text-sm">
                  Access
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}


