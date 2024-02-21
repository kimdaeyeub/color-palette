"use client";
import ColorCard from "@/components/ColorCard";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useSearchParams();
  console.log(params.get("mode"));
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
