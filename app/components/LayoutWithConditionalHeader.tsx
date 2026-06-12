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

  const hideHeaderOn = [
    "/dashboard",
    "/dashboard/add-commercial-properties",
    "/dashboard/add-plots",
    "/dashboard/addaward",
    "/dashboard/addblog",
    "/dashboard/addcontact",
    "/dashboard/addexpert",
    "/dashboard/addnews",
    "/dashboard/addproject",
    "/dashboard/addpropertycomparison",
    "/dashboard/addpropertydetail",
    "/dashboard/addpropertyform",
    "/dashboard/addpropertylist",
    "/dashboard/addreal",
    "/dashboard/addsavedproperty",
    "/dashboard/addtestimonial",
    "/dashboard/allawards",
    "/dashboard/allblogs",
    "/dashboard/allcommercial-properties",
    "/dashboard/allexpert",
    "/dashboard/alleyoutube",
    "/dashboard/allnews",
    "/dashboard/allplots",
    "/dashboard/allproject",
    "/dashboard/allprojects",
    "/dashboard/allpropertycomparison",
    "/dashboard/allpropertydetail",
    "/dashboard/allpropertyform",
    "/dashboard/allpropertylist",
    "/dashboard/allreal",
    "/dashboard/allsavedproperty",
    "/dashboard/alltestimonials",
    "/dashboard/applications",
    "/dashboard/applicationsform",
    "/dashboard/awards",
    "/dashboard/careerform",
    "/dashboard/careers",
    "/dashboard/contactdetail",
    "/dashboard/contactform",
    "/dashboard/cookie-consents",
    "/dashboard/editblog",
    "/dashboard/experts",
    "/dashboard/projectdetail",
    "/dashboard/projectform",
    "/dashboard/projectlist",
    "/dashboard/propertycomparison",
    "/dashboard/propertydetail",
    "/dashboard/propertyform",
    "/dashboard/propertylist",
    "/dashboard/savedproperty",
    "/dashboard/showallcommercial-properties",
    "/dashboard/showallplots",
    "/dashboard/testimonials",
    "/dashboard/user-properties",
    "/dashboard/webusers",
    "/dashboard/youtube"
  ];
  const shouldHideHeader = hideHeaderOn.includes(pathname);

  return (
    <>
      {!shouldHideHeader && <MainHeader/>}
      {children}
      {!shouldHideHeader && <Mainfooter/>}
    </>
  );
}