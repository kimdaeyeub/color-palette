import Form from "@/components/Form";
import { getPaletteDetail } from "@/utils/getPaletteAction";
import { IPalette } from "@/utils/types";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Edit Palette",
};

const EditPalette = async ({ params: { id } }: { params: { id: string } }) => {
  const palette: IPalette = await getPaletteDetail(id);
  return (
    <div className="xl:px-32 md:px-20 sm:px-16 px-8 py-10 min-h-screen flex flex-col justify-start items-center w-full">
      <h1 className="xl:text-[130px] lg:text-[100px] md:text-[80px] text-[60px] font-extrabold my-10">
        Edit Palette
      </h1>
      <Suspense
        fallback={
          <div className="animate-pulse w-full h-[800px] bg-gray-200 rounded-md"></div>
        }
      >
        <Form
          edit
          title={palette.title}
          description={palette.description}
          prevColors={palette.colors}
          theme={palette.theme}
          id={id}
        />
      </Suspense>
    </div>
  );
};

export default EditPalette;
