import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "VidSync",
  description: "Video Calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};
const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex flex-col flex-1 min-h-screen px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
