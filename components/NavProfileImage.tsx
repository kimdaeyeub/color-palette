"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavProfileImage = ({
  imageUrl,
  userId,
}: {
  imageUrl: string;
  userId: string;
}) => {
  const path = usePathname();
  const [openDropDown, setOpenDropDown] = useState(false);
  const onClickDropDownBtn = () => {
    setOpenDropDown(!openDropDown);
  };
  useEffect(() => {
    setOpenDropDown(false);
  }, [path]);
  return (
    <>
      {openDropDown && (
        <div className="w-64 bg-gray-100 rounded-xl absolute top-full right-0 m-auto z-10 mt-4 flex flex-col justify-center items-center">
          <button onClick={() => signOut()} className="w-full py-4 font-medium">
            로그아웃
          </button>
          <div className="h-0.5 w-2/3 bg-gray-300" />
          <Link
            href={`/profile/${userId}`}
            className="w-full py-4 font-medium text-center"
          >
            프로필
          </Link>
          <div className="md:hidden block h-0.5 w-2/3 bg-gray-300" />
          <Link
            href="/palettes"
            className="block md:hidden w-full py-4 font-medium text-center"
          >
            All palette
          </Link>
        </div>
      )}
      <Image
        src={imageUrl}
        alt="profile_image"
        width={500}
        height={500}
        onClick={onClickDropDownBtn}
        className="w-14 h-14 rounded-full bg-red-400"
      />
    </>
  );
};

export default NavProfileImage;
