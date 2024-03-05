import Palette from "@/models/palette";
import { connectToDB } from "@/utils/database";
import { getUser } from "@/utils/functions";
import { revalidatePath } from "next/cache";

interface IProp {
  id: string;
}
export const deletePaletteAction = async (formData: FormData) => {
  "use server";
  try {
    await connectToDB();
    const id = formData.get("id");
    await Palette.findByIdAndDelete(id);
    const user = await getUser();
    const userId = user[0]._id.toString();
    revalidatePath(`/palettes/${userId}`);
    revalidatePath("/palettes");
    return true;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
const DeletePaletteBtn = async ({ id }: IProp) => {
  return (
    <form action={deletePaletteAction}>
      <input type="hidden" name="id" value={id} />
      <button className="px-5 py-3 bg-red-700 text-white rounded-xl text-lg font-medium flex justify-center items-center space-x-3">
        Delete
      </button>
    </form>
  );
};

export default DeletePaletteBtn;
