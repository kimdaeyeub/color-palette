import ColorCard from "@/components/ColorCard";
import PlusCard from "@/components/PlusCard";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen px-32 py-20">
      <section className="grid grid-cols-3 gap-3 w-full">
        <div className="bg-red-300 w-80 h-80 rounded-full" />
        <div className="flex flex-col justify-between items-start col-span-2">
          <div className="flex flex-col justify-start items-start">
            <span className="text-4xl font-semibold">USERNAME</span>
            <p className="text-balance w-4/5 mt-4 text-gray-400 font-medium">
              Airbnb, Inc. is an American company operating an online
              marketplace for short- and long-term homestays and experiences.
              The company acts as a broker and charges a commission from each
              booking. The company was founded in 2008 by Brian Chesky, Nathan
              Blecharczyk, and Joe Gebbia.
            </p>
          </div>
          <button className="rounded-full px-10 py-3 bg-black text-white text-lg font-medium">
            Follow
          </button>
        </div>
      </section>
      <div className="my-20 w-full h-1 bg-gray-100" />
      <div className="w-full grid grid-cols-3 gap-5">
        <PlusCard />
        {/* <ColorCard />
        <ColorCard />
        <ColorCard />
        <ColorCard /> */}
      </div>
    </div>
  );
};

export default page;
