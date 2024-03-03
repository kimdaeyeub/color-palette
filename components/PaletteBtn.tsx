"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import LikeBtn from "./LikeBtn";
import Link from "next/link";

interface IProp {
  creatorId: string;
  paletteId: string;
}
const PaletteBtn = ({ creatorId, paletteId }: IProp) => {
  const { data: session } = useSession();
  const [likes, setLikes] = useState(false);
  const onClickLikesBtn = async () => {
    const response = await fetch(`/api/palettes/${paletteId}/likes`, {
      method: "POST",
      body: JSON.stringify({ paletteId, userId: session?.user.id }),
    });

    if (response.ok) {
      setLikes(true);
    }
  };
  const deleteLike = async () => {
    const response = await fetch(`/api/palettes/${paletteId}/likes`, {
      method: "DELETE",
    });

    if (response.ok) {
      setLikes(false);
    }
  };
  useEffect(() => {
    const isLikes = async () => {
      const response = await fetch(`/api/palettes/${paletteId}/likes`);
      if (response.ok) {
        const json = await response.json();
        setLikes(json.message);
      }
    };
    isLikes();
  }, [likes]);
  return (
    <div>
      {session?.user.id !== creatorId ? (
        likes ? (
          <LikeBtn text={"UnLikes"} onClickLikesBtn={deleteLike} />
        ) : (
          <LikeBtn text={"Likes"} onClickLikesBtn={onClickLikesBtn} />
        )
      ) : (
        <div className="flex justify-center items-center space-x-4">
          <button className="px-5 py-3 bg-red-700 text-white rounded-xl text-lg font-medium flex justify-center items-center space-x-3">
            Delete
          </button>
          <Link
            href={`/palettes/${paletteId}/edit`}
            className="px-5 py-3 bg-black text-white rounded-xl text-lg font-medium flex justify-center items-center space-x-3"
          >
            Edit Palette
          </Link>
        </div>
      )}
    </div>
  );
};

export default PaletteBtn;
