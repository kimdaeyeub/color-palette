import LikeBtn from "./LikeBtn";
import Link from "next/link";
import DeletePaletteBtn from "./DeletePaletteBtn";
import { getUser } from "@/utils/functions";
import User from "@/models/User";

interface IProp {
  creatorId: string;
  paletteId: string;
}

const getLike = async ({
  creatorId,
  paletteId,
  sessionId,
}: {
  creatorId: string;
  paletteId: string;
  sessionId: string;
}) => {
  if (sessionId !== creatorId) {
    const user = await User.findById(sessionId);
    const isLiked = user.likes.includes(paletteId);
    return isLiked;
  }
};

const PaletteBtn = async ({ creatorId, paletteId }: IProp) => {
  const user = await getUser();
  const id = user[0]._id.toString();
  const isLiked = await getLike({ creatorId, paletteId, sessionId: id });
  console.log(isLiked);
  return (
    <div>
      {id !== creatorId?.toString() ? (
        <LikeBtn isLiked={isLiked} userId={id} paletteId={paletteId} />
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
