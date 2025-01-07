"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

interface IProp {
  mode: string | null;
  responsive?: boolean;
}

const NavLink = ({ mode, responsive }: IProp) => {
  const params = useSearchParams();
  const pathname = usePathname();

  return (
    <Link
      href={mode !== null ? `/palettes?mode=${mode}` : "/palettes"}
      className={
        "text-gray-400 font-medium text-lg" +
        `${
          params.get("mode") === mode && pathname !== "/palettes/add"
            ? " text-gray-800"
            : " text-gray-400"
        }` +
        `${responsive ? " block md:hidden mr-4" : ""}`
      }
    >
      {mode !== null ? `${mode === "dark" ? "Dark" : "Light"} theme` : "All"}
    </Link>
  );
};

export default NavLink;
