"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathName = usePathname();
  const hideLayout = pathName === "/auth/login";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

export default LayoutWrapper;
