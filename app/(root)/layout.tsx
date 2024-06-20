import News from "@/components/News";
import SideBar from "@/components/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between max-w-[85rem] mx-auto">
      <div className="hidden sm:inline border-r border-gray-800 h-screen">
        <SideBar />
      </div>
      <div className="w-2xl flex-1">{children}</div>
      <div className="lg:flex-col p-3 h-screen border-l border-gray-800 hidden lg:flex w-[30rem]">
        <div className="sticky top-0 bg-black py-2 ">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-900 border-none border-gray-800 rounded-3xl text-sm w-full px-4 py-3 focus:outline-none text-white placeholder:text-gray-100"
          />
        </div>
        <News />
      </div>
    </div>
  );
};

export default Layout;
