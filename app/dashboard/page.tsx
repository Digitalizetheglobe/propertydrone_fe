"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
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
  faFileAlt,
  faFileVideo
} from '@fortawesome/free-solid-svg-icons';
import path from "path";

const sections = [
  {
    name: "Cookie Consents",
    path: "/dashboard/cookie-consents",
    icon: faFileAlt,
    description: "View and manage cookie consents."
  },
  {
    name: "Property Comparison",
    path: "/dashboard/propertycomparison",
    icon: faFileAlt,
    description: "Compare properties by user."
  },
  {
    name: "User Properties",
    path: "/dashboard/user-properties",
    icon: faBuilding,
    description: "Manage properties submitted by users."
  },
  {
    name: "Saved Properties",
    path: "/dashboard/savedproperty",
    icon: faFileCirclePlus,
    description: "User's saved properties."
  },
  {
    name: "Testimonials",
    path: "/dashboard/testimonials",
    icon: faAddressCard,
    description: "Manage customer testimonials."
  },

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
    name: "News & Articles",
    path: "/dashboard/allnews",
    icon: faNewspaper,
    description: "Manage published news articles"
  },
  {
    name: "Add News",
    path: "/dashboard/addnews",
    icon: faFileCirclePlus,
    description: "Create new news articles"
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
  {
    name: "Youtube video",
    path: "/dashboard/youtube",
    icon: faFileVideo,
    // icon: fa-file-video,
    description: "View and manage Youtube videos"
  },
  {
    name: "Add Youtube video",
    path: "/dashboard/youtube/new",
    icon: faFileAlt,
    description: "Create new Youtube video"
  },
  {
    name: "Real-Estate",
    path: "/dashboard/allreal",
    icon: faFileVideo,
    // icon: fa-file-video,
    description: "View and manage Youtube videos"
  },
  {
    name: "Add real estate basic",
    path: "/dashboard/addreal",
    icon: faFileAlt,
    description: "Create new real estate basic entry"
  },
  {
    name: "Add Plots",
    path: "/dashboard/add-plots",
    icon: faFileCirclePlus,
    description: "Create new plot listing"
  },
  {
    name: "All Plots",
    path: "/dashboard/showallplots",
    icon: faBuilding,
    description: "View and manage all plot listings"
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [cookieStatus, setCookieStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchCookieStatus = async () => {
      try {
        const clientIdentifier = localStorage.getItem('clientIdentifier');
        if (clientIdentifier) {
          const res = await fetch(`http://api.propertydronerealty.com/api/cookie-consent?clientIdentifier=${clientIdentifier}`);
          const data = await res.json();
          if (data && data.consent !== undefined && data.consent !== null) {
            setCookieStatus(data.consent ? 'Accepted' : 'Rejected');
          } else {
            setCookieStatus('Not set');
          }
        }
      } catch (e) {
        console.error("Error fetching cookie status:", e);
      }
    };
    fetchCookieStatus();
  }, []);

  return (
    <>

      <div className="min-h-screen bg-gray-50 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#224295]">Admin Dashboard</h1>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                {/* <div className="border-t border-gray-200 my-3"></div> */}

                {/* <p className="text-gray-600 text-sm text-center">
                  {section.description}
                </p> */}
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


