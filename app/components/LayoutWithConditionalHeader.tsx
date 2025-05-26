"use client";

import { usePathname } from "next/navigation";

import { ReactNode } from "react";
import MainHeader from "./mainHeader";
import Mainfooter from "./mainfooter";

export default function LayoutWithConditionalHeader({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const hideHeaderOn = ["/dashboard", "/dashboard/allblogs", "/dashboard/addblog", "/dashboard/addreal","/dashboard/applications","/dashboard/applicationsform", "/dashboard/allreal", "/dashboard/addproject", "/dashboard/allproject", "/dashboard/addcontact", "/dashboard/contactdetail", "/dashboard/contactform", "/dashboard/propertydetail", "/dashboard/propertyform", "/dashboard/youtube", "/dashboard/projectdetail", "/dashboard/projectform", "/dashboard/projectlist", "/dashboard/propertydetail", "/dashboard/propertyform", "/dashboard/propertylist"];
  const shouldHideHeader = hideHeaderOn.includes(pathname);

  return (
    <>
      {!shouldHideHeader && <MainHeader/>}
      {children}
      {!shouldHideHeader && <Mainfooter/>}
    </>
  );
}