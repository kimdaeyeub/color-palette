import Form from "@/components/Form";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Add Palette",
};

const AddPalette = () => {
  return (
    <div className="xl:px-32 md:px-20 sm:px-16 px-8 py-10 min-h-screen flex flex-col justify-start items-center w-full">
      <h1 className="xl:text-[130px] lg:text-[100px] md:text-[80px] text-[60px] font-extrabold my-10">
        Add Palette
      </h1>
      <Suspense
        fallback={
          <div className="animate-pulse w-full h-[800px] bg-gray-200 rounded-md"></div>
        }
      >
        <Form />
      </Suspense>
    </div>
  );
};

export default AddPalette;
