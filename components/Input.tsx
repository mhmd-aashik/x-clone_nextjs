/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { app } from "@/firebase";
import { useUser } from "@clerk/nextjs";
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/navigation";

const Input = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const [imageFileUrl, setImageFileUrl] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  // for loading effect
  const [imageFileUplording, setImageFileUplording] = useState(false);
  const imagePickRef: any = useRef(null);
  const [text, setText] = useState("");
  const [posting, setPosting] = useState(false);
  const db = getFirestore(app);

  const handleImagePost = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const newImageUrl = URL.createObjectURL(file);
      setImageFileUrl(newImageUrl);
    }
  };

  useEffect(() => {
    if (selectedFile) {
      uploadImageToStorage();
    }
  }, [selectedFile]);

  const uploadImageToStorage = async () => {
    setImageFileUplording(true);
    const storage: any = getStorage(app);
    const fileName = new Date().getTime() + "-" + selectedFile?.name;
    const storageRef: any = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);
    uploadTask.on(
      "state_changed",
      (snapshot: any) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error: any) => {
        console.log(error);
        setImageFileUplording(false);
        setImageFileUrl(null);
        setSelectedFile(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloardUrl: any) => {
          setImageFileUrl(downloardUrl);
          setImageFileUplording(false);
        });
      }
    );
  };

  // console.log(user?.id);

  const handleSubmit = async () => {
    setPosting(true);
    const docRef: any = await addDoc(collection(db, "posts"), {
      uid: user?.id,
      name: user?.firstName,
      username: user?.username,
      profilePic: user?.imageUrl,
      message: text,
      image: imageFileUrl,
      timestamp: serverTimestamp(),
    });
    setPosting(false);
    setText("");
    setSelectedFile(null);
    setImageFileUrl(null);
    router.refresh();
  };

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="flex border-b border-1 border-gray-800 p-3 space-x-3 w-full">
      <Image
        src={user?.imageUrl}
        alt="profile"
        width={36}
        height={36}
        className={`rounded-full cursor-pointer  hover:brightness-95 h-11 w-11 ${
          imageFileUplording ? "animate-pulse" : ""
        }`}
      />
      <div className="w-full divide-y divide-gray-800">
        <textarea
          onClick={(e: any) => setText(e.target.value)}
          className="focus:outline-none bg-black rounded-xl border-none w-full tracking-wide min-h-[50px] placeholder:text-gray-100 text-white text-xl p-2"
          placeholder="What is happening ?"
          value={text}
          onChange={(e: any) => setText(e.target.value)}
        ></textarea>

        {selectedFile && (
          <Image
            src={imageFileUrl}
            alt="image"
            width={1000}
            height={1000}
            className="w-full max-h-[250px] object-cover cursor-pointer"
          />
        )}
        <div className="flex items-center justify-between pt-2">
          <HiOutlinePhotograph
            className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-900 rounded-full cursor-pointer"
            onClick={() => imagePickRef.current?.click()}
          />

          <input
            type="file"
            ref={imagePickRef}
            accept="image/*"
            onChange={handleImagePost}
            className="hidden"
          />
          <button
            disabled={text.trim() === "" || posting || imageFileUplording}
            className="bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 font-bold shadow-md hover:brightness-95 disabled:opacity-50 "
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
