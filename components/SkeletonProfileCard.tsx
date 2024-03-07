import React from "react";

const SkeletonProfileCard = () => {
  return (
    <section className="grid md:grid-cols-3 grid-cols-1 md:gap-12 w-full">
      <div className="w-full flex justify-center items-center">
        <div className="bg-gray-200 md:w-full w-40 aspect-square rounded-full" />
      </div>
      <div className="flex flex-col justify-between md:items-start items-center space-y-12 col-span-2 mt-12">
        <div className="w-full flex flex-col justify-start md:items-start items-center space-y-3">
          <div className="bg-gray-200 h-2 w-24 rounded-lg"></div>
          <div className="bg-gray-200 h-2 w-2/3 rounded-lg"></div>
          <div className="bg-gray-200 h-2 w-2/3 rounded-lg"></div>
          <div className="bg-gray-200 h-2 w-2/3 rounded-lg"></div>
          <div className="bg-gray-200 h-2 w-2/3 rounded-lg"></div>
        </div>
        <div className="rounded-full px-20 py-7 bg-gray-200"></div>
      </div>
    </section>
  );
};

export default SkeletonProfileCard;
