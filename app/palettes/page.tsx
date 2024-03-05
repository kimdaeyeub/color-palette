import ColorCards from "@/components/ColorCards";
import { Suspense } from "react";

const Palettes = ({
  searchParams: { mode },
}: {
  searchParams: { mode: string };
}) => {
  return (
    <div className="w-full h-screen px-32 py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <ColorCards mode={mode} />
      </Suspense>
    </div>
  );
};

export default Palettes;
