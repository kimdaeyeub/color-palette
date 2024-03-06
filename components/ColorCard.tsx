import { IPalette } from "@/utils/types";
import Link from "next/link";

interface IProp {
  palette: IPalette;
}

const ColorCard = ({ palette }: IProp) => {
  return (
    <Link
      href={`/palettes/${palette._id}`}
      className="w-full min-h-[300px] lg:aspect-auto aspect-square rounded-xl p-4 border flex flex-col justify-between items-center"
    >
      <div
        className={`w-full min-h-[200px] h-full bg-yellow-100 grid`}
        style={{ gridTemplateColumns: `repeat(${palette.grid},minmax(0,1fr))` }}
      >
        {palette.colors.map((color, index) => (
          <div
            className="w-full"
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
        {/*<div className="flex flex-col justify-center items-center">
          <svg
            data-slot="icon"
            width={30}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              className="text-yellow-400"
              clipRule="evenodd"
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            ></path>
          </svg>
          <span className="text-gray-400 font-medium text-sm">
            Likes {palette.likes}
          </span>
        </div>*/}
      </div>
    </Link>
  );
};

export default ColorCard;
