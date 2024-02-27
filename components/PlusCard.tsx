import Link from "next/link";
import React from "react";

const PlusCard = () => {
  return (
    <Link
      href="/palettes/add"
      className="w-full h-[300px] rounded-xl p-4 border flex justify-center items-center"
    >
      <div className="w-24 h-24 rounded-full bg-gray-200 flex justify-center items-center">
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width={50}
          className="text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

export default PlusCard;
