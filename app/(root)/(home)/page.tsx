import Input from "@/components/Input";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="max-w-full mx-auto">
        <div className="py-2 px-3 sticky top-0 z-50 border-b border-1 border-gray-800">
          <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        </div>
        <Input />
      </div>
    </>
  );
};

export default Home;
