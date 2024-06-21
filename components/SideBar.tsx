"use client";
import { twitterLinks } from "@/constants";
import {
  SignedIn,
  SignedOut,
  useClerk,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const SideBar = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 px-4 fixed top-0 h-screen">
      <div>
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
          <SignedIn>
            <div className="px-4 sm:hidden mt-2 flex items-center gap-5">
              <UserButton />
              <span className="font-bold hidden font-roboto xl:inline bg-transparent text-xl">
                Profile
              </span>
            </div>
          </SignedIn>
        </div>
        <SignedIn>
          <button
            onClick={() => signOut({ redirectUrl: "/" })}
            className="bg-blue-500 mt-3 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-12 shadow-md hidden xl:inline font-bold"
          >
            Sign Out
          </button>
        </SignedIn>
        <div className="flex flex-col gap-2">
          <Link href="/sign-up">
            <SignedOut>
              <button className="bg-gray-500 mt-3 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-12 shadow-md hidden xl:inline font-bold">
                Sign Up
              </button>
            </SignedOut>
          </Link>
          <Link href="/sign-in">
            <SignedOut>
              <button className="bg-blue-500 mt-3 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-12 shadow-md hidden xl:inline font-bold">
                Sign In
              </button>
            </SignedOut>
          </Link>
        </div>
      </div>
      {isSignedIn && (
        <div>
          <div className="text-gray-300 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-900 rounded-full transition-all duration-200">
            <Image
              src={user?.imageUrl}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full xl:mr-2"
            />
            <div className="hidden xl:flex flex-col">
              <h4 className="font-bold">{user?.firstName}</h4>
              <p className="text-gray-500">@{user?.username}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
