import { getPaletteDetail } from "@/utils/getPaletteAction";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import PaletteBtn from "./PaletteBtn";
import CopyColorCard from "./CopyColorCard";
import { dancingScript } from "@/utils/fonts";
import { redirect } from "next/navigation";

const PaletteDetail = async ({ id }: { id: string }) => {
  const session = await getServerSession();
  const palette = await getPaletteDetail(id);
  if (!palette) {
    redirect("/palettes");
  }
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center space-x-4">
          {palette?.creator.image ? (
            <Link href={`/profile/${palette?.creator._id}`}>
              <Image
                src={palette?.creator.image}
                alt="profile_image"
                width={300}
                height={300}
                className="w-16 h-16 rounded-full bg-slate-300"
              />
            </Link>
          ) : (
            <div className="w-16 h-16 rounded-full bg-slate-300" />
          )}
          <div className="flex flex-col justify-center items-start">
            <span className="font-medium text-lg">
              {palette?.creator.username}
            </span>
            <span className="text-gray-400">Likes {palette?.likes}</span>
          </div>
        </div>
        {session?.user && (
          <>
            <PaletteBtn creatorId={palette?.creator._id!} paletteId={id} />
          </>
        )}
      </div>
      {palette !== null && (
        <div
          className={`w-full grid mt-10`}
          style={{
            gridTemplateColumns: `repeat(${palette?.grid},minmax(0,1fr))`,
          }}
        >
          {palette?.colors.map((color: string, index: any) => (
            <CopyColorCard color={color} key={index} />
          ))}
        </div>
      )}

      <div className="w-full mt-16 text-center flex flex-col space-y-6 justify-center items-center">
        <h1 className={"text-6xl font-bold " + dancingScript.className}>
          {palette?.title}
        </h1>
        <p className="md:w-2/3 w-full text-center text-lg font-medium">
          {palette?.description}
        </p>
      </div>
    </>
  );
};

export default PaletteDetail;
