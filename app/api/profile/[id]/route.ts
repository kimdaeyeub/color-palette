import User from "@/models/User";
import { connectToDB } from "@/utils/database";
import { NextRequest } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  try {
    await connectToDB();

    const user = await User.findById(params.id);

    return new Response(JSON.stringify(user));
  } catch (error) {
    console.log(error);
    return new Response("Failed");
  }
};

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const { username, email, description } = await req.json();
  try {
    await connectToDB();

    const profile = await User.findById(params.id);

    if (!profile) {
      return new Response("User not found.");
    }

    profile.username = username;
    profile.email = email;
    profile.description = description;

    const updatedUser = await profile.save();

    return new Response(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
    return new Response("Failed PATCH");
  }
};
