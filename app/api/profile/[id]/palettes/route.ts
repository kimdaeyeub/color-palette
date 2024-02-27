import Palette from "@/models/palette";
import { connectToDB } from "@/utils/database";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const palettes = await Palette.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(palettes));
  } catch (error) {
    console.log(error);
    return new Response(`${error}`);
  }
};
