"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import DashNavbar from "@/components/shared/DashNavbar";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathName = usePathname();
  const hideLayout = pathName === "/auth/login";
  const isDashboard = pathName.includes("/dashboard");

  if (hideLayout) {
    return <>{children}</>;
  }

  if (isDashboard) {
    return (
      <div className="flex h-screen w-screen overflow-hidden">
        <DashNavbar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;