import Palette from "@/models/palette";
import { connectToDB } from "@/utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const palettes = await Palette.find({ theme: "light" }).populate("creator");

    return new Response(JSON.stringify(palettes));
  } catch (error) {
    console.log(error);
    return new Response(`${error}`);
  }
};
