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
    <section className="grid md:grid-cols-3 grid-cols-1 md:gap-12 w-full">
      {profile && (
        <div className="w-full flex justify-center items-center">
          <Image
            src={profile!.image}
            alt="profile_image"
            width={300}
            height={300}
            className="bg-red-300 md:w-full w-40 aspect-square rounded-full"
          />
        </div>
      )}
      <div className="flex flex-col justify-between md:items-start items-center space-y-12 col-span-2 mt-12">
        <div className="w-full flex flex-col justify-start md:items-start items-center">
          <span className="text-4xl font-semibold">{profile?.username}</span>
          <p className="md:text-start text-center w-4/5 mt-4 text-gray-400 font-medium">
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
