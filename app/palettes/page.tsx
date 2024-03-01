import ColorCard from "@/components/ColorCard";
import { IPalette } from "@/utils/types";

const getDarkPalettes = async () => {
  const response = await fetch("http://localhost:3000/api/palettes/dark");
  const json = await response.json();
  return json;
};
async function getLightPalettes() {
  const response = await fetch("http://localhost:3000/api/palettes/lights");
  const json = await response.json();
  return json;
}

async function getAllPalettes() {
  const response = await fetch("http://localhost:3000/api/palettes");
  const json = await response.json();
  return json;
}

const Palettes = async ({
  searchParams: { mode },
}: {
  searchParams: { mode: string };
}) => {
  const [all, light, dark]: [
    all: IPalette[],
    light: IPalette[],
    dark: IPalette[]
  ] = await Promise.all([
    getAllPalettes(),
    getLightPalettes(),
    getDarkPalettes(),
  ]);
  if (mode === undefined) {
    return (
      <div className="w-full h-screen px-32 py-10 grid grid-cols-3 gap-5">
        {all?.map((palette, index) => (
          <ColorCard key={index} palette={palette} />
        ))}
      </div>
    );
  } else if (mode === "light") {
    return (
      <div className="w-full h-screen px-32 py-10 grid grid-cols-3 gap-5">
        {light?.map((palette, index) => (
          <ColorCard key={index} palette={palette} />
        ))}
      </div>
    );
  } else if (mode === "dark") {
    return (
      <div className="w-full h-screen px-32 py-10 grid grid-cols-3 gap-5">
        {dark?.map((palette, index) => (
          <ColorCard key={index} palette={palette} />
        ))}
      </div>
    );
  }
};

export default Palettes;
