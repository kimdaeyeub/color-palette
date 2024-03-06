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
    //TODO:프로필 페이지 데이터가 잘 변경되는지 확인할 것
    revalidatePath(`/profile/${userId}`);
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
      <button className="sm:px-5 px-3 sm:py-3 py-2 bg-red-700 text-white sm:rounded-xl rounded-md text-lg sm:font-medium flex justify-center items-center space-x-3">
        Delete
      </button>
    </form>
  );
};

export default DeletePaletteBtn;
