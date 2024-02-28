"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import Image from "next/image";
import { dancingScript } from "@/utils/fonts";

const Nav = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const path = usePathname();
  const params = useSearchParams();
  const [providers, setProviders] = useState<Record<
    LiteralUnion<string>,
    ClientSafeProvider
  > | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);
  const onClickDropDownBtn = () => {
    setOpenDropDown(!openDropDown);
  };
  useEffect(() => {
    setOpenDropDown(false);
  }, [path]);
  return (
    <div className="w-full py-5 px-32 flex justify-between items-center">
      <Link
        href="/"
        className={"text-5xl font-bold " + dancingScript.className}
      >
        Palette
      </Link>
      <div className="flex justify-center items-center space-x-16 relative">
        <div className="flex justify-center items-center space-x-8">
          <Link
            href="/palettes"
            className={
              "text-gray-400 font-medium text-lg" +
              `${
                path === "/palettes" && params.get("mode") === null
                  ? " text-gray-800"
                  : " text-gray-400"
              }`
            }
          >
            All
          </Link>
          <Link
            href="/palettes?mode=dark"
            className={
              "text-gray-400 font-medium text-lg" +
              `${
                path === "/palettes" && params.get("mode") === "dark"
                  ? " text-gray-800"
                  : " text-gray-400"
              }`
            }
          >
            Dark Theme
          </Link>
          <Link
            href="/palettes?mode=light"
            className={
              "text-gray-400 font-medium text-lg" +
              `${
                path === "/palettes" && params.get("mode") === "light"
                  ? " text-gray-800"
                  : " text-gray-400"
              }`
            }
          >
            Light Theme
          </Link>
        </div>
        {openDropDown && (
          <div className="w-64 bg-gray-100 rounded-xl absolute top-full right-0 m-auto z-10 mt-4 flex flex-col justify-center items-center">
            <button
              onClick={() => signOut()}
              className="w-full py-4 font-medium"
            >
              로그아웃
            </button>
            <div className="h-0.5 w-2/3 bg-gray-300" />
            <Link
              href={`/profile/${session?.user.id}`}
              className="w-full py-4 font-medium text-center"
            >
              프로필
            </Link>
          </div>
        )}
        {session?.user ? (
          <Image
            src={session?.user?.image!}
            alt="profile_image"
            width={500}
            height={500}
            onClick={onClickDropDownBtn}
            className="w-14 h-14 rounded-full bg-red-400"
          />
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="px-6 py-2 rounded-lg bg-black text-white font-medium text-lg"
                >
                  Login
                </button>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
