import Palette from "@/models/palette";
import { connectToDB } from "@/utils/database";
import { IPalette } from "@/utils/types";
import React from "react";
import ColorCard from "./ColorCard";
import PlusCard from "./PlusCard";
import { getUser } from "@/utils/functions";

const getPalettes = async (id: string) => {
  try {
    await connectToDB();

    const palettes = await Palette.find({ creator: id }).populate("creator");
    return palettes;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
const UserPalettes = async ({ id }: { id: string }) => {
  const palettes: any[] = await getPalettes(id);
  const user = await getUser();
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {user[0] && user[0]._id.toString() === id && <PlusCard />}
      {palettes.map((palette: IPalette, index: number) => (
        <ColorCard palette={palette} key={index} />
      ))}
    </div>
  );
};

export default UserPalettes;
