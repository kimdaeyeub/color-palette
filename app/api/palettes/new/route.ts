import Palette from "@/models/palette";
import { connectToDB } from "@/utils/database";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { theme, userId, title, description, colors } = await req.json();
  try {
    await connectToDB();
    let grid = 3;
    if (colors.length === 16) {
      grid = 4;
    } else if (colors.length === 25) {
      grid = 5;
    } else {
      grid = 3;
    }
    const newPalette = new Palette({
      title,
      description,
      colors,
      theme,
      creator: userId,
      grid,
    });

    await newPalette.save();
    return new Response(JSON.stringify(newPalette), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failes", { status: 500 });
  }
};
