import Palette from "@/models/palette";
import { connectToDB } from "@/utils/database";
import { getUser } from "@/utils/functions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  try {
    await connectToDB();
    const palette = await Palette.findById(params.id).populate(
      "creator",
      "username email image",
    );
    return new Response(JSON.stringify(palette));
  } catch (error) {
    return new Response("Failed", { status: 500 });
  }
};

export const PATCH = async (
  req: Request,
  { params: { id } }: { params: { id: string } },
) => {
  const { title, description, colors, theme, select, userId } =
    await req.json();
  try {
    await connectToDB();
    const palette = await Palette.findById(id).populate("creator");
    const creatorId = palette.creator._id.toString();
    if (userId !== creatorId) {
      return new Response(JSON.stringify({ message: "Fail" }));
    }
    let grid = 3;
    if (select === 16) {
      grid = 4;
    } else if (select === 25) {
      grid = 5;
    } else {
      grid = 3;
    }
    const updatePalette = await Palette.findByIdAndUpdate(id, {
      title,
      description,
      colors,
      theme,
      grid,
    });
    return new Response(JSON.stringify(updatePalette));
  } catch (error) {
    return new Response(JSON.stringify({ message: "Fail" }));
  }
};

export const DELETE = async (
  req: Request,
  { params: { id } }: { params: { id: string } },
) => {
  try {
    await connectToDB();
    const user = await getUser();
    const userId = user[0]._id.toString();
    const palette = await Palette.findById(id).populate("creator");
    console.log(palette.creator._id.toString());
    if (palette.creator._id.toString() === userId) {
      await Palette.findByIdAndDelete(id);
      revalidatePath("/palettes");
      revalidatePath(`/profile${userId}`);
      return Response.json({
        revalidated: true,
        message: "Success",
      });
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error }));
  }
};
