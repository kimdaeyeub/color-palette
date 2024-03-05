"use server";

import User from "@/models/User";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { IUser } from "./types";
import { api_url } from "./constants";

interface IGetUserProp {
  name: string;
  email: string;
  image: string;
}

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
  const session = await getServerSession();
  if (!session?.user) {
    return new Response(JSON.stringify({ message: "User not exist" }));
  }
  const user: IUser[] = await getUser();
  const theme = formData.get("theme");
  const data = {
    title,
    description,
    select,
    colors,
    theme,
    email: session?.user.email,
  };
  try {
    const response = await fetch(`${api_url}/palettes/new`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      revalidatePath("/");
      return true;
    }
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
    const response = await fetch(`${api_url}/profile/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ username, description, email }),
    });

    if (response.ok) {
      revalidatePath(`/profile/${id}`);
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editPaletteSubmit = async (
  prevState: any,
  formData: FormData,
  id: string,
) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const select = formData.get("select");
  let colors = [];
  for (let i = 0; i < Number(select); i++) {
    colors.push(formData.get(`${i}`));
  }
  const session = await getServerSession();
  if (!session?.user) {
    return new Response(JSON.stringify({ message: "User not exist" }));
  }
  const user: IUser[] = await getUser();
  const theme = formData.get("theme");
  const data = {
    title,
    description,
    select,
    colors,
    theme,
    userId: user[0]._id.toString(),
  };
  try {
    const response = await fetch(`${api_url}/palettes/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      revalidatePath("/palettes");
      revalidatePath(`/profile/${user[0]._id.toString()}`);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};
