import { IPalette } from "@/utils/types";
import Link from "next/link";

interface IProp {
  palette: IPalette;
}

const ColorCard = ({ palette }: IProp) => {
  return (
    <Link
      prefetch
      href={`/palettes/${palette._id}`}
      className="w-full lg:aspect-auto aspect-square rounded-xl p-4 border-2 flex flex-col justify-between items-center"
    >
      <div
        className={`w-full grid lg:aspect-video aspect-square`}
        style={{ gridTemplateColumns: `repeat(${palette.grid},minmax(0,1fr))` }}
      >
        {palette.colors.map((color, index) => (
          <div
            className="w-full h-full"
            key={index}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="w-full flex justify-between items-start mt-4">
        <div className="flex flex-col justify-center items-start">
          <span className="text-lg font-medium">{palette.title}</span>
          <span className="font-medium text-gray-400">
            {palette.grid}x{palette.grid}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ColorCard;
