"use client";
import React, { useState } from "react";

interface IProp {
  color: string;
}

const CopyColorCard = ({ color }: IProp) => {
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => {
      setCopied("");
    }, 600);
  };
  return (
    <div
      onClick={handleCopy}
      className="w-full md:aspect-video aspect-square flex justify-center items-center group cursor-pointer relative"
      style={{ backgroundColor: color }}
    >
      <button className="group-hover:flex hidden md:px-6 px-3 md:py-2 py-1 text-white md:text-xl font-medium md:rounded-xl rounded-lg border-white border-2">
        Copy
      </button>
      {copied && (
        <div className="w-full h-full absolute top-0 left-0 bg-gray-100 flex justify-center items-center">
          <div className="md:w-1/3 w-1/2 aspect-square bg-green-500 rounded-full p-3">
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="2.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default CopyColorCard;
