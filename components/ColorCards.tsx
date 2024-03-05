import {
  getAllPalettes,
  getDarkPalettes,
  getLightPalettes,
} from "@/utils/getPaletteAction";
import { IPalette } from "@/utils/types";
import React from "react";
import ColorCard from "./ColorCard";

interface IProp {
  mode?: string;
}
const ColorCards = async ({ mode }: IProp) => {
  let palettes;
  if (mode === "dark") {
    palettes = await getDarkPalettes();
  } else if (mode === "light") {
    palettes = await getLightPalettes();
  } else {
    palettes = await getAllPalettes();
  }
  return (
    <div className="w-full h-full grid grid-cols-3 gap-5">
      {palettes?.map((palette: IPalette, index: number) => (
        <ColorCard key={index} palette={palette} />
      ))}
    </div>
  );
};

export default ColorCards;
