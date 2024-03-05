"use server";
import Palette from "@/models/palette";
import { connectToDB } from "./database";
import { revalidatePath } from "next/cache";

export async function getAllPalettes() {
  try {
    await connectToDB();
    const palettes = await Palette.find({});
    return palettes;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
export const getDarkPalettes = async () => {
  try {
    await connectToDB();
    const palettes = await Palette.find({ theme: "dark" });
    return palettes;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
export const getLightPalettes = async () => {
  try {
    await connectToDB();
    const palettes = await Palette.find({ theme: "light" });
    return palettes;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
export const getPaletteDetail = async (id: string) => {
  try {
    await connectToDB();
    const palette = await Palette.findById(id).populate("creator");
    return palette;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const deletePaletteAction = async (
  prevState: any,
  formData: FormData,
) => {
  "use server";
  try {
    await connectToDB();
    const id = formData.get("id");
    //await Palette.findByIdAndDelete(id);
    revalidatePath("/palettes");
    return true;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
