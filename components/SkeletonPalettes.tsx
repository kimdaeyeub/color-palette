import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

const SkeletonPalettes = () => {
  return (
    <div className="w-full h-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default SkeletonPalettes;
