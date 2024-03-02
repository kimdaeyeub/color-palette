"use server";

import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { RedirectType, redirect } from "next/navigation";

export const handleSubmit = async (prevState: any, formData: FormData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const select = formData.get("select");
  let colors = [];
  for (let i = 0; i < Number(select); i++) {
    colors.push(formData.get(`${i}`));
  }
  const session = await getServerSession();
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
    const response = await fetch("http://localhost:3000/api/palettes/new", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("OK!!!!!!!!!!!!!!!!!");
      revalidatePath("/palettes");
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};
