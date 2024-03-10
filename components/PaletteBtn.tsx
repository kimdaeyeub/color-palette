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
  const userId = user[0]._id.toString();
  const isLiked = await getLike({ creatorId, paletteId, sessionId: userId });
  return (
    <div>
      {userId && (
        <>
          {userId !== creatorId?.toString() ? (
            <LikeBtn isLiked={isLiked} userId={userId} paletteId={paletteId} />
          ) : (
            <div className="flex justify-center items-center space-x-4">
              <DeletePaletteBtn id={paletteId} />
              <Link
                href={`/palettes/${paletteId}/edit`}
                className="hidden sm:px-5 px-3 sm:py-3 py-2 bg-black text-white sm:rounded-xl rounded-md text-lg sm:font-medium md:flex justify-center items-center space-x-3"
              >
                Edit Palette
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PaletteBtn;
