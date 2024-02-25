import Palette from "@/models/palette";
import { connectToDB } from "@/utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const palettes = await Palette.find({}).populate("creator");

    return new Response(JSON.stringify(palettes), { status: 200 });
  } catch (error) {
    console.log("error");
    return new Response("Filed to fetch all palettes", { status: 500 });
  }
};
