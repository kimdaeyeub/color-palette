import { api_url } from "@/utils/constants";
import { getUser } from "@/utils/functions";
import { IUser } from "@/utils/types";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const fetchUserProfile = async (id: string) => {
  const response = await fetch(`${api_url}/profile/${id}`);
  const json = await response.json();

  return json;
};

interface IProp {
  id: string;
}

const ProfileCard = async ({ id }: IProp) => {
  const profile = await fetchUserProfile(id);
  const session = await getServerSession();
  const user: IUser[] = await getUser();

  return (
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
        <div className="w-full flex flex-col justify-start items-start">
          <span className="text-4xl font-semibold">{profile?.username}</span>
          <p className="text-balance w-4/5 mt-4 text-gray-400 font-medium">
            {profile?.description}
          </p>
        </div>
        {user[0] && id === user[0]._id.toString() && (
          <Link
            href={`/profile/${id}/edit`}
            className="rounded-full px-10 py-3 bg-black text-white text-lg font-medium"
          >
            Edit Profile
          </Link>
        )}
      </div>
    </section>
  );
};

export default ProfileCard;
