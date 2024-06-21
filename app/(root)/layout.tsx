import News from "@/components/News";
import SideBar from "@/components/SideBar";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto">
      <div className="sm:inline border-r md:w-[7rem] lg:w-[30rem] border-gray-800">
        <SideBar />
      </div>
      <div className="w-full">{children}</div>
      <div className="lg:flex-col p-3 h-screen z-50 border-l border-gray-800 hidden lg:flex max-w-[25rem] sticky top-0">
        <div className="sticky top-0">
          <div className="bg-black py-2 ">
            <div className="flex justify-between gap-2">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-900 border-none border-gray-800 rounded-3xl text-sm w-full px-4 py-3 focus:outline-none text-white placeholder:text-gray-100"
              />
              <div>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
          <News />
        </div>
      </div>
    </div>
  );
};

export default Layout;
