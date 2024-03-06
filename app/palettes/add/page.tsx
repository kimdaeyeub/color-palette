import Form from "@/components/Form";
import { Suspense } from "react";

const AddPalette = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="xl:px-32 md:px-20 sm:px-16 px-8 py-10 min-h-screen flex flex-col justify-start items-center w-full">
        <h1 className="xl:text-[130px] lg:text-[100px] md:text-[80px] text-[60px] font-extrabold my-10">
          Add Palette
        </h1>
        <Form />
      </div>
    </Suspense>
  );
};

export default AddPalette;
