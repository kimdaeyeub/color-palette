"use client";
import ColorCard from "@/components/ColorCard";
import { IPalette } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [palettes, setPalettes] = useState<IPalette[]>();
  const params = useSearchParams();
  useEffect(() => {
    const mode = params.get("mode");
    const fetchAllPalettes = async () => {
      const response = await fetch("/api/palettes");
      const data = await response.json();
      setPalettes(data);
    };
    const fetchLightPalettes = async () => {
      const response = await fetch("/api/palettes/light");
      const json = await response.json();
      setPalettes(json);
    };
    const fetchDarkPalettes = async () => {
      const response = await fetch("/api/palettes/dark");
      const json = await response.json();
      setPalettes(json);
    };

    if (mode === "dark") {
      fetchDarkPalettes();
    } else if (mode === "light") {
      fetchLightPalettes();
    } else {
      fetchAllPalettes();
    }
  }, [params.get("mode")]);
  return (
    <div className="w-full h-screen px-32 py-10 grid grid-cols-3 gap-5">
      {palettes?.map((palette, index) => (
        <ColorCard key={index} palette={palette} />
      ))}
    </div>
  );
};

export default page;
