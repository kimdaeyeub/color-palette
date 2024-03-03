import User from "@/models/User";
import Palette from "@/models/palette";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export const POST = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } },
) => {
  const { creatorId, paletteId, userId } = await req.json();
  if (!userId) {
    return new Response(JSON.stringify({ message: "User does not exist" }));
  }
  const user = await User.findById(userId);
  const palette = await Palette.findById(paletteId);
  user.likes = [...user.likes, palette];
  palette.likes = palette.likes + 1;
  await palette.save();
  await user.save();

  return new Response("Successa", { status: 201 });
};

export const GET = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } },
) => {
  try {
    const session = await getServerSession();
    const userEmail = session?.user.email;

    const user = await User.find({ email: userEmail });
    if (!user) {
      return new Response(JSON.stringify({ message: "User does not exist" }));
    }
    const isLiked = user[0].likes.includes(id);
    return new Response(JSON.stringify({ message: isLiked }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Fail");
  }
};

export const DELETE = async (
  req: Request,
  { params: { id } }: { params: { id: string } },
) => {
  try {
    const session = await getServerSession();
    const userEmail = session?.user.email;

    const user = await User.find({ email: userEmail });
    const palette = await Palette.findById(id);
    if (!palette) {
      return new Response(
        JSON.stringify({ message: "Palette does not exist" }),
      );
    }
    if (!user) {
      return new Response(JSON.stringify({ message: "User does not exist" }));
    }
    const filteredArray = user[0].likes.filter(
      (item: string) => item.toString() !== id,
    );
    palette.likes = palette.likes - 1;
    palette.save();
    user[0].likes = filteredArray;
    user[0].save();
    return new Response(JSON.stringify(user[0]), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("fail");
  }
};
