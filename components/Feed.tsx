import React from "react";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { app } from "../firebase";
import Post from "./Post";

const Feed = async () => {
  const db = getFirestore(app);
  const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  const data: any = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  console.log(data);

  return (
    <div>
      {data.map((post: any) => (
        <Post key={post.id} post={post} id={post.id} />
      ))}
    </div>
  );
};

export default Feed;
