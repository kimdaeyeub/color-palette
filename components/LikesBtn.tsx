"use client";

import { useSession } from "next-auth/react";
import React from "react";

interface IProp {
  id: string;
}
const LikesBtn = ({ id }: IProp) => {
  const { data: session } = useSession();
  const onClickLikesBtn = () => {
    console.log("likes");
  };
  return (
    <div>
      {session?.user.id !== id ? (
        <button
          onClick={onClickLikesBtn}
          className="px-5 py-3 bg-pink-600 text-white rounded-xl text-lg font-medium flex justify-center items-center space-x-3"
        >
          <span>Likes</span>
          <svg
            data-slot="icon"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width={30}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            ></path>
          </svg>
        </button>
      ) : (
        <button className="px-5 py-3 bg-black text-white rounded-xl text-lg font-medium flex justify-center items-center space-x-3">
          Edit Palette
        </button>
      )}
    </div>
  );
};

export default LikesBtn;
