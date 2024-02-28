"use client";
import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data: session } = useSession();
  return (
    <div className="px-32 py-10 min-h-screen flex flex-col justify-start items-center w-full">
      <h1 className="text-8xl font-extrabold my-10">Edit Profile</h1>
    </div>
  );
};

export default page;
