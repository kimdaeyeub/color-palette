"use client";
import ColorCard from "@/components/ColorCard";
import { IPalette } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [palettes, setPalettes] = useState<IPalette[]>();
  const params = useSearchParams();
  useEffect(() => {
    const fetchPalettes = async () => {
      const response = await fetch("/api/palettes");
      const data = await response.json();
      setPalettes(data);
    };

    fetchPalettes();
  }, []);
  return (
    <div className="w-full h-screen px-32 py-10 grid grid-cols-3 gap-5">
      {palettes?.map((palette) => (
        <ColorCard key={palette._id} palette={palette} />
      ))}
    </div>
  );
};

export default page;
