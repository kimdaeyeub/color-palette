import PaletteDetail from "@/components/PaletteDetail";
import SuspenseDetail from "@/components/SuspenseDetail";
import { Suspense } from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="xl:px-32 md:px-20 sm:px-16 px-8 pt-10 md:mb-32 sm:mb-20 mb-16 flex flex-col w-full">
      <Suspense fallback={<SuspenseDetail />}>
        <PaletteDetail id={id} />
      </Suspense>
    </div>
  );
};

export default page;
