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
    }, 500);
  };
  return (
    <div
      onClick={handleCopy}
      className="w-full aspect-video flex justify-center items-center group cursor-pointer"
      style={{ backgroundColor: color }}
    >
      <button
        className={`group-hover:flex hidden px-6 py-2 text-white text-xl font-medium rounded-xl ${
          copied !== "" ? "bg-black" : "border-white border-2"
        }`}
      >
        {copied === "" ? "Copy" : "Copied"}
      </button>
    </div>
  );
};

export default CopyColorCard;
