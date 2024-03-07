import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse w-full min-h-[300px] lg:aspect-auto aspect-square rounded-xl p-4 border flex flex-col justify-between items-center">
      <div className="w-full min-h-[200px] h-full bg-gray-200 grid rounded-lg"></div>
      <div className="w-full flex justify-between items-start mt-4">
        <div className="flex flex-col justify-center items-start w-full h-full space-y-3">
          <div className="bg-gray-200 h-2.5 w-2/3 rounded-lg"></div>
          <div className="bg-gray-200 h-2.5 w-full rounded-lg"></div>
          <div className="bg-gray-200 h-2.5 w-full rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
