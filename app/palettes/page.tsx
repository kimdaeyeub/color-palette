import ColorCards from "@/components/ColorCards";
import { Suspense } from "react";

const Palettes = ({
  searchParams: { mode },
}: {
  searchParams: { mode: string };
}) => {
  return (
    <div className="w-full min-h-screen xl:px-32 md:px-20 sm:px-12 px-6 md:py-10 py-8">
      <Suspense fallback={<div className="h-screen"></div>}>
        <ColorCards mode={mode} />
      </Suspense>
    </div>
  );
};

export default Palettes;
