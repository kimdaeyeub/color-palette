import React from "react";

const ColorCard = () => {
  return (
    <div className="w-full h-[270px] rounded-xl p-4 border flex flex-col justify-between items-center">
      <div className="w-full h-[200px] bg-yellow-100 grid grid-cols-5">
        <div className="w-full bg-red-400" />
        <div className="w-full bg-blue-400" />
        <div className="w-full bg-green-400" />
        <div className="w-full bg-cyan-400" />
        <div className="w-full bg-purple-400" />
        <div className="w-full bg-yellow-400" />
        <div className="w-full bg-black" />
        <div className="w-full bg-white" />
        <div className="w-full bg-slate-400" />
        <div className="w-full bg-zinc-400" />
        <div className="w-full bg-neutral-400" />
        <div className="w-full bg-orange-400" />
        <div className="w-full bg-amber-400" />
        <div className="w-full bg-lime-400" />
        <div className="w-full bg-emerald-400" />
        <div className="w-full bg-teal-400" />
        <div className="w-full bg-indigo-400" />
        <div className="w-full bg-fuchsia-400" />
        <div className="w-full bg-rose-400" />
        <div className="w-full bg-pink-400" />
      </div>
      <div className="w-full flex justify-between items-center">
        <span className="text-lg font-medium">TITLE</span>
        <svg
          data-slot="icon"
          width={20}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            className="text-yellow-400"
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ColorCard;
