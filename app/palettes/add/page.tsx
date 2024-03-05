import Form from "@/components/Form";
import { Suspense } from "react";

const AddPalette = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="px-32 py-10 min-h-screen flex flex-col justify-start items-center w-full">
        <h1 className="text-8xl font-extrabold my-10">Add Palette</h1>
        <Form />
      </div>
    </Suspense>
  );
};

export default AddPalette;
