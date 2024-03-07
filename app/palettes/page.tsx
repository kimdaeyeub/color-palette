import ColorCards from "@/components/ColorCards";
import SuspensePalettes from "@/components/SuspensePalettes";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Palettes",
};

const page = ({
  searchParams: { mode },
}: {
  searchParams: { mode: string };
}) => {
  return (
    <div className="w-full min-h-screen xl:px-32 md:px-20 sm:px-12 px-6 md:py-10 py-8">
      <Suspense fallback={<SuspensePalettes />}>
        <ColorCards mode={mode} />
      </Suspense>
    </div>
  );
};

export default page;
