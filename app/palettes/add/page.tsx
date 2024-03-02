import Form from "@/components/Form";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  return (
    <div className="px-32 py-10 min-h-screen flex flex-col justify-start items-center w-full">
      <h1 className="text-8xl font-extrabold my-10">Add Palette</h1>
      <Form />
    </div>
  );
};

export default page;
