"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

const Input = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) return null;

  return (
    <div className="flex border-b border-1 border-gray-800 p-3 space-x-3 w-full">
      <Image
        src={user?.imageUrl}
        alt="profile"
        width={36}
        height={36}
        className="rounded-full cursor-pointer  hover:brightness-95 h-11 w-11"
      />
      <div className="w-full divide-y divide-gray-800">
        <textarea
          className="focus:outline-none bg-black rounded-xl border-none w-full tracking-wide min-h-[50px] placeholder:text-gray-100 text-white text-xl p-2"
          placeholder="What is happening ?"
        ></textarea>
        <div className="flex items-center justify-between pt-2">
          <HiOutlinePhotograph className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-900 rounded-full cursor-pointer" />
          <button
            // disabled
            className="bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 font-bold shadow-md hover:brightness-95 disabled:opacity-50 "
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
