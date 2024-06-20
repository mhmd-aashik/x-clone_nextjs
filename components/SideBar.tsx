import { twitterLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <Link href="/">
        <FaXTwitter className="size-16 cursor-pointer p-3 hover:bg-gray-900 rounded-full transition-all duration-200 mb-2" />
      </Link>
      <div>
        {twitterLinks.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            className="flex items-center p-4 hover:bg-gray-900 rounded-full transition-all duration-200 gap-5 w-fit"
          >
            <link.logo className="size-7 bg-transparent" />
            <span className="font-bold hidden font-roboto xl:inline bg-transparent text-xl">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <button className="bg-blue-500 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-12 shadow-md hidden xl:inline font-bold">
        Sign In
      </button>
    </div>
  );
};

export default SideBar;
