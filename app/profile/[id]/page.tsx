"use client";
import ColorCard from "@/components/ColorCard";
import PlusCard from "@/components/PlusCard";
import { IPalette, IUser } from "@/utils/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const [profile, setProfile] = useState<IUser | null>(null);
  const [palettes, setPalettes] = useState<IPalette[] | null>(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await fetch(`/api/profile/${params.id}`);
      const json = await response.json();

      setProfile(json);
    };
    const fetchUserPalettes = async () => {
      const response = await fetch(`/api/profile/${params.id}/palettes`);
      const json = await response.json();

      setPalettes(json);
    };

    fetchUserPalettes();

    if (session?.user.id !== params.id) {
      fetchUserProfile();
    } else {
      if (session.user) {
        const user = session!.user;
        const data: IUser = {
          username: user!.name!,
          email: user!.email!,
          _id: user!.id,
          image: user!.image!,
        };
        setProfile(data);
      }
    }
  }, [session]);

  return (
    <div className="min-h-screen px-32 py-20">
      <section className="grid grid-cols-3 gap-3 w-full">
        {profile && (
          <Image
            src={profile!.image}
            alt="profile_image"
            width={300}
            height={300}
            className="bg-red-300 w-80 h-80 rounded-full"
          />
        )}
        <div className="flex flex-col justify-between items-start col-span-2">
          <div className="flex flex-col justify-start items-start">
            <span className="text-4xl font-semibold">{profile?.username}</span>
            <p className="text-balance w-4/5 mt-4 text-gray-400 font-medium">
              {profile?.email}
            </p>
          </div>
          {params.id === session?.user.id ? (
            <button className="rounded-full px-10 py-3 bg-black text-white text-lg font-medium">
              Edit Profile
            </button>
          ) : (
            <button className="rounded-full px-10 py-3 bg-black text-white text-lg font-medium">
              Follow
            </button>
          )}
        </div>
      </section>
      <div className="my-20 w-full h-1 bg-gray-100" />
      <div className="w-full grid grid-cols-3 gap-5">
        <PlusCard />
        {palettes?.map((palette, index) => (
          <ColorCard palette={palette} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
