"use client";
import Link from "next/link";
import { useAuth } from '../context/AuthContext';
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "@/app/images/PropertyDrone-Logo.png";
import Image from "next/image";
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
  faFileVideo,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const sections = [
  { name: "Cookie Consents", path: "/dashboard/cookie-consents", icon: faFileAlt },
  { name: "Property Comparison", path: "/dashboard/propertycomparison", icon: faFileAlt },
  { name: "User Properties", path: "/dashboard/user-properties", icon: faBuilding },
  { name: "Saved Properties", path: "/dashboard/savedproperty", icon: faFileCirclePlus },
  { name: "Testimonials", path: "/dashboard/testimonials", icon: faAddressCard },
  { name: "Property Detail", path: "/dashboard/propertydetail", icon: faBuilding },
  { name: "Add Property", path: "/dashboard/propertyform", icon: faBuildingCircleArrowRight },
  { name: "Contact Detail", path: "/dashboard/contactdetail", icon: faAddressCard },
  { name: "Blogs", path: "/dashboard/allblogs", icon: faNewspaper },
  { name: "Add Blogs", path: "/dashboard/addblog", icon: faFileCirclePlus },
  { name: "News & Articles", path: "/dashboard/allnews", icon: faNewspaper },
  { name: "Add News", path: "/dashboard/addnews", icon: faFileCirclePlus },
  { name: "Career Opportunities", path: "/dashboard/careers", icon: faBriefcase },
  { name: "Job Applications", path: "/dashboard/applications", icon: faUserTie },
  { name: "Add Job Posting", path: "/dashboard/careerform", icon: faFileAlt },
  { name: "Youtube video", path: "/dashboard/youtube", icon: faFileVideo },
  { name: "Add Youtube video", path: "/dashboard/youtube/new", icon: faFileAlt },
  { name: "Real-Estate", path: "/dashboard/allreal", icon: faFileVideo },
  { name: "Add real estate basic", path: "/dashboard/addreal", icon: faFileAlt },
  { name: "Experts", path: "/dashboard/experts", icon: faUserTie },
  { name: "Add Expert", path: "/dashboard/addexpert", icon: faFileCirclePlus },
  { name: "Add Plots", path: "/dashboard/add-plots", icon: faFileCirclePlus },
  { name: "All Plots", path: "/dashboard/showallplots", icon: faBuilding },
  { name: "Add Commercial", path: "/dashboard/add-commercial-properties", icon: faFileCirclePlus },
  { name: "All Commercial", path: "/dashboard/showallcommercial-properties", icon: faBuilding },
];


const Sidebar = () => {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <aside className="bg-white border-r h-screen w-60 flex flex-col shadow fixed left-0 top-0 z-30">
      {/* Logo Sticky Top */}
      <div className="shrink-0 sticky top-0 z-20 bg-white pb-2 border-b border-gray-100 flex flex-col items-center pt-6">
        <Link href="/dashboard">
          <Image src={logo} alt="Logo" width={200} height={100} />
        </Link>
      </div>
      {/* Scrollable Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-white px-1 py-4">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.path}>
              <Link href={section.path} legacyBehavior>
                <a
                  className={
                    "flex items-center p-3 gap-4 rounded-lg transition hover:bg-blue-100 text-gray-700 " +
                    (pathname === section.path ? "bg-blue-50 text-blue-900 font-semibold" : "")
                  }
                >
                  <span className="w-6">
                    <FontAwesomeIcon icon={section.icon} size="lg" />
                  </span>
                  <span>{section.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Profile Footer Sticky Bottom */}
      <div className="shrink-0 sticky bottom-0 left-0 w-full px-6 pb-4 pt-2 bg-white border-t border-gray-100 z-20">
        <div className="flex items-center gap-3 py-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <img
              src="/profile-placeholder.png"
              alt="Profile"
              className="object-cover w-10 h-10"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
          <div className="truncate">
            <div className="font-semibold leading-tight text-[#224295] text-sm truncate">Admin User</div>
            <div className="text-xs text-gray-400 truncate">Administrator</div>
          </div>
        </div>
        <button onClick={logout} className="w-full flex items-center gap-2 text-red-600 hover:text-red-700 font-medium py-2 bg-red-50 hover:bg-red-100 border border-red-100 rounded justify-center mt-1 mb-1.5">
          <svg width="22" height="22" fill="currentColor" className="inline"><circle cx="11" cy="11" r="10" stroke="red" strokeWidth="2" fill="none" /><path d="M8 12l2 2 4-4" stroke="red" strokeWidth="2" fill="none" /></svg> Logout
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;

