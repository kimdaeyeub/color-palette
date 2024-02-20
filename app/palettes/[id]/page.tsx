import React from "react";

const PaletteDetail = () => {
  return (
    <div className="px-32 py-10 flex flex-col w-full">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-slate-300" />
          <div className="flex flex-col justify-center items-start">
            <span className="font-medium text-lg">KIMDAEYEUB</span>
            <span className="text-gray-400">Frontend Developer</span>
          </div>
        </div>
        <button className="px-5 py-3 bg-pink-600 text-white rounded-xl text-lg font-medium">
          Use Palette
        </button>
      </div>
      <div className="w-full grid grid-cols-5 mt-10">
        <div className="w-full h-[200px] bg-red-400 flex justify-center items-center group">
          <button className="group-hover:flex hidden px-5 py-2 text-white font-medium rounded-lg border-2 border-white">
            Copy
          </button>
        </div>
        <div className="w-full h-[200px] bg-blue-400" />
        <div className="w-full h-[200px] bg-green-400" />
        <div className="w-full h-[200px] bg-cyan-400" />
        <div className="w-full h-[200px] bg-purple-400" />
        <div className="w-full h-[200px] bg-yellow-400" />
        <div className="w-full h-[200px] bg-black" />
        <div className="w-full h-[200px] bg-white" />
        <div className="w-full h-[200px] bg-slate-400" />
        <div className="w-full h-[200px] bg-zinc-400" />
        <div className="w-full h-[200px] bg-neutral-400" />
        <div className="w-full h-[200px] bg-orange-400" />
        <div className="w-full h-[200px] bg-amber-400" />
        <div className="w-full h-[200px] bg-lime-400" />
        <div className="w-full h-[200px] bg-emerald-400" />
        <div className="w-full h-[200px] bg-teal-400" />
        <div className="w-full h-[200px] bg-indigo-400" />
        <div className="w-full h-[200px] bg-fuchsia-400" />
        <div className="w-full h-[200px] bg-rose-400" />
        <div className="w-full h-[200px] bg-pink-400" />
        <div className="w-full h-[200px] bg-red-400" />
        <div className="w-full h-[200px] bg-blue-400" />
        <div className="w-full h-[200px] bg-green-400" />
        <div className="w-full h-[200px] bg-cyan-400" />
        <div className="w-full h-[200px] bg-purple-400" />
      </div>
      <div className="w-full mt-16 text-center flex justify-center items-center">
        <span className="w-2/3 text-center mb-32 text-lg font-medium">
          Airbnb, Inc. is an American company operating an online marketplace
          for short- and long-term homestays and experiences. The company acts
          as a broker and charges a commission from each booking. The company
          was founded in 2008 by Brian Chesky, Nathan Blecharczyk, and Joe
          Gebbia.
        </span>
      </div>
    </div>
  );
};

export default PaletteDetail;
