import User from "@/models/User";
import Palette from "@/models/palette";
import { connectToDB } from "@/utils/database";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { theme, email, title, description, colors, select } = await req.json();
  try {
    await connectToDB();
    let grid = 3;
    if (select === 16) {
      grid = 4;
    } else if (select === 25) {
      grid = 5;
    } else {
      grid = 3;
    }
    const user = await User.find({ email });
    const newPalette = new Palette({
      title,
      description,
      colors,
      theme,
      creator: user[0]._id,
      grid,
    });

    await newPalette.save();
    return new Response(JSON.stringify(newPalette));
  } catch (error) {
    console.log(error);
    return new Response("Failes", { status: 500 });
  }
};
