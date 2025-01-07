"use server";

import User from "@/models/User";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { IUser } from "./types";
import Palette from "@/models/palette";
import { connectToDB } from "./database";

export const getUser = async () => {
  const session = await getServerSession();
  const email = session?.user.email;
  const user = await User.find({ email });
  return user;
};

export const addPaletteSubmit = async (prevState: any, formData: FormData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const select = formData.get("select");
  let colors = [];
  for (let i = 0; i < Number(select); i++) {
    colors.push(formData.get(`${i}`));
  }
  const user: IUser[] = await getUser();
  let userId = "";
  if (user.length === 0) {
    userId = process.env.USER_ID!;
  } else {
    userId = user[0]._id.toString();
  }
  const theme = formData.get("theme");
  let grid = 3;
  if (Number(select) === 16) {
    grid = 4;
  } else if (Number(select) === 25) {
    grid = 5;
  } else {
    grid = 3;
  }
  try {
    await connectToDB();
    const newPalette = new Palette({
      title,
      description,
      colors,
      theme,
      creator: userId,
      grid,
    });

    await newPalette.save();
    revalidatePath("/palettes");
    revalidatePath(`/profile/${userId}`);
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = async (prevState: any, formData: FormData) => {
  const username = formData.get("username");
  const description = formData.get("description");
  const email = formData.get("email");
  const user = await getUser();
  const id = user[0]._id.toString();
  try {
    await connectToDB();
    await User.findByIdAndUpdate(id, { username, description, email });
    revalidatePath(`/profile/${id}`);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editPaletteSubmit = async (
  prevState: any,
  formData: FormData,
  id: string
) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const select = Number(formData.get("select"));
  let colors = [];
  for (let i = 0; i < Number(select); i++) {
    colors.push(formData.get(`${i}`));
  }
  const theme = formData.get("theme");
  let grid = 3;
  if (select === 16) {
    grid = 4;
  } else if (select === 25) {
    grid = 5;
  } else {
    grid = 3;
  }
  const user: IUser[] = await getUser();
  const userId = user[0]._id.toString();
  if (!user) {
    throw new Error("로그아웃 상태입니다.");
  }
  try {
    await Palette.findByIdAndUpdate(id, {
      title,
      description,
      colors,
      theme,
      grid,
    });
    revalidatePath("/palettes");
    revalidatePath(`/profile/${userId}`);
    return true;
  } catch (error) {
    console.log(error);
  }
};
