import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-[url('/images/auth.png')] bg-cover bg-center w-full flex items-center md:justify-end md:pr-52 justify-center">
      {children}
    </div>
  );
};

export default Layout;
