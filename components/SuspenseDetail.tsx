import React from "react";

const SuspenseDetail = () => {
  return (
    <>
      <div className="animate-pulse w-full flex justify-between items-center">
        <div className="w-full flex justify-start items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gray-200" />
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <div className="w-1/5 bg-gray-200 h-2 rounded-lg"></div>
            <div className="w-1/4 bg-gray-200 h-2 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="w-full aspect-square bg-gray-200 mt-10"></div>

      <div className="w-full mt-16 text-center flex flex-col space-y-6 justify-center items-center">
        <div className="bg-gray-200 h-3 rounded-lg w-1/4"></div>
        <div className="flex flex-col justify-center items-center space-y-3 w-full">
          <div className="bg-gray-200 h-3 rounded-lg w-3/4"></div>
          <div className="bg-gray-200 h-3 rounded-lg w-2/4"></div>
          <div className="bg-gray-200 h-3 rounded-lg w-3/4"></div>
        </div>
      </div>
    </>
  );
};

export default SuspenseDetail;
