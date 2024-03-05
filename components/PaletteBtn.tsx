import LikeBtn from "./LikeBtn";
import Link from "next/link";
import DeletePaletteBtn from "./DeletePaletteBtn";
import { getUser } from "@/utils/functions";

interface IProp {
  creatorId: string;
  paletteId: string;
}
const PaletteBtn = async ({ creatorId, paletteId }: IProp) => {
  const user = await getUser();
  const id = user[0]._id.toString();
  return (
    <div>
      {id !== creatorId?.toString() ? (
        <LikeBtn text={"Likes"} />
      ) : (
        <div className="flex justify-center items-center space-x-4">
          {/*TODO: delete api 추가하기*/}
          <DeletePaletteBtn id={paletteId} />
          <Link
            href={`/palettes/${paletteId}/edit`}
            className="px-5 py-3 bg-black text-white rounded-xl text-lg font-medium flex justify-center items-center space-x-3"
          >
            Edit Palette
          </Link>
        </div>
      )}
    </div>
  );
};

export default PaletteBtn;
