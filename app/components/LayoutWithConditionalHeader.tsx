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

  const hideHeaderOn = ["/dashboard"];
  const shouldHideHeader = hideHeaderOn.includes(pathname);

  return (
    <>
      {!shouldHideHeader && <MainHeader/>}
      {children}
      {!shouldHideHeader && <Mainfooter/>}
    </>
  );
}