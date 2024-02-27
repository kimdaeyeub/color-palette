import Palette from "@/models/palette";
import { connectToDB } from "@/utils/database";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();
    const palette = await Palette.findById(params.id).populate(
      "creator",
      "username email image"
    );
    console.log(palette);
    return new Response(JSON.stringify(palette));
  } catch (error) {
    return new Response("Failed", { status: 500 });
  }
};
