"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

interface IProp {
  mode: string | null;
  responsive?: boolean;
}

const NavLink = ({ mode, responsive }: IProp) => {
  const path = usePathname();
  const params = useSearchParams();
  return (
    <Link
      href={mode !== null ? `/palettes?mode=${mode}` : "/palettes"}
      className={
        "text-gray-400 font-medium text-lg" +
        `${
          path === "/palettes" && params.get("mode") === mode
            ? " text-gray-800"
            : " text-gray-400"
        }` +
        `${responsive && " block md:hidden mr-4"}`
      }
    >
      {mode !== null ? `${mode} theme` : "All"}
    </Link>
  );
};

export default NavLink;
