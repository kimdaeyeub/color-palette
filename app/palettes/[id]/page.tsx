import PaletteDetail from "@/components/PaletteDetail";
import { Suspense } from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="px-32 pt-10 mb-48 flex flex-col w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <PaletteDetail id={id} />
      </Suspense>
    </div>
  );
};

export default page;
