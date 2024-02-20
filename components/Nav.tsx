import React from "react";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

const Nav = () => {
  return (
    <div className="w-full py-5 px-32 flex justify-between items-center">
      <Link
        href="/"
        className={"text-5xl font-bold " + dancingScript.className}
      >
        Palette
      </Link>
      <div className="flex justify-center items-center space-x-16">
        <div className="flex justify-center items-center space-x-8">
          <Link href="/palettes" className="text-gray-400 font-medium text-lg">
            All
          </Link>
          <Link
            href="/palettes?mode=dark"
            className="text-gray-400 font-medium text-lg"
          >
            Dark Theme
          </Link>
          <Link
            href="/palettes?mode=light"
            className="text-gray-400 font-medium text-lg"
          >
            Light Theme
          </Link>
        </div>
        <button className="px-6 py-2 rounded-lg bg-black text-white font-medium text-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
