"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/PropertyDrone-Logo.png"; 

export default function Header() {
  return (
    <header className="bg-blue-200 text-[#224295] py-4 shadow-md items-center justify-center mx-auto ">
      <div className=" mx-auto flex justify-between items-center px-6">
      <h1 className="text-xl font-bold">
      <Link href="/dashboard">
        <Image src={logo} alt="Logo" width={200} height={100} />
      </Link>
    </h1>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/dashboard" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard/propertydetail" className="hover:underline">
                All Properties
              </Link>
            </li>
            <li>
              <Link href="/dashboard/projectdetail" className="hover:underline">
                All Project
              </Link>
            </li>
            <li>
              <Link href="/dashboard/contactdetail" className="hover:underline">
              All Contacts
              </Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}
