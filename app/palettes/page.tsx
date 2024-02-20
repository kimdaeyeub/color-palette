"use client";
import ColorCard from "@/components/ColorCard";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const page = () => {
  const params = useSearchParams();
  return (
    <div className="w-full h-screen px-32 py-10 grid grid-cols-3 gap-5">
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
    </div>
  );
};

export default page;
