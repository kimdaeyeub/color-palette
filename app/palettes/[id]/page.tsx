"use client";

import CopyColorCard from "@/components/CopyColorCard";
import { dancingScript } from "@/utils/fonts";
import { IPalette } from "@/utils/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PaletteDetail = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const [palette, setPalette] = useState<IPalette | null>(null);

  useEffect(() => {
    const fetchPalettes = async () => {
      const response = await fetch(`/api/palettes/${params.id}`);
      const json = await response.json();
      setPalette(json);
    };

    fetchPalettes();
  }, []);

  console.log(session?.user.id === palette?.creator._id);

  return (
    <div className="px-32 pt-10 mb-48 flex flex-col w-full">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center space-x-4">
          {palette?.creator.image ? (
            <Link href={`/profile/${palette.creator._id}`}>
              <Image
                src={palette?.creator.image}
                alt="profile_image"
                width={300}
                height={300}
                className="w-16 h-16 rounded-full bg-slate-300"
              />
            </Link>
          ) : (
            <div className="w-16 h-16 rounded-full bg-slate-300" />
          )}
          <div className="flex flex-col justify-center items-start">
            <span className="font-medium text-lg">
              {palette?.creator.username}
            </span>
            <span className="text-gray-400">Likes {palette?.likes}</span>
          </div>
        </div>
        {session?.user.id !== palette?.creator._id ? (
          <button className="px-5 py-3 bg-pink-600 text-white rounded-xl text-lg font-medium flex justify-center items-center space-x-3">
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
      {palette !== null && (
        <div className={`w-full grid grid-cols-${palette.grid} mt-10`}>
          {palette.colors.map((color) => (
            <CopyColorCard color={color} key={color} />
          ))}
        </div>
      )}

      <div className="w-full mt-16 text-center flex flex-col space-y-6 justify-center items-center">
        <h1 className={"text-6xl font-bold " + dancingScript.className}>
          {palette?.title}
        </h1>
        <p className="w-2/3 text-center mb-32 text-lg font-medium">
          {palette?.description}
        </p>
      </div>
    </div>
  );
};

export default PaletteDetail;
