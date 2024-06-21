import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

interface postProps {
  post: any;
  id: string;
}

const Post = ({ post, id }: postProps) => {
  return (
    <div className="flex flex-col p-3 border-b border-gray-700">
      <div className="flex">
        <Image
          src={post?.profilePic}
          alt="profile"
          width={40}
          height={40}
          className="rounded-full h-11 w-11 mr-4 "
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex flex-col justify-center items-center space-x-1 whitespace-nowrap">
              <h4 className="font-bold text-sm truncate">{post?.name}</h4>
              <h4 className="text-xs truncate">@{post?.username}</h4>
            </div>
            <HiDotsHorizontal className="text-sm" />
          </div>
          <Link href={`/post/${id}`}>
            <p className=" text-gray-100 my-3 text-xl line-clamp-2">{post?.message}</p>
          </Link>
        </div>
      </div>
      <Link href={`/post/${id}`}>
        <Image
          src={post?.image}
          alt="post"
          width={400}
          height={400}
          className="w-full h-[400px] object-fit rounded-xl"
        />
      </Link>
    </div>
  );
};

export default Post;
