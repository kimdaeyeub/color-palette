import Palette from "@/models/palette";
import { connectToDB } from "@/utils/database";
import React from "react";
import ColorCard from "./ColorCard";

const popularPalette = async () => {
  try {
    await connectToDB();

    const palettes = await Palette.find({}).sort({ likes: -1 }).limit(3);
    return palettes;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const PopularPalette = async () => {
  const palettes = await popularPalette();
  return (
    <section className="w-full min-h-screen xl:px-32 md:px-20 sm:px-16 px-8 py-24 flex flex-col justify-center items-center bg-blue-50">
      <span className="lg:text-7xl md:text-6xl text-5xl font-bold w-full text-center">
        Popular Palette
      </span>
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-5 mt-20">
        {palettes.map((palette, index) => (
          <ColorCard palette={palette} key={index} />
        ))}
      </div>
    </section>
  );
};

export default PopularPalette;
