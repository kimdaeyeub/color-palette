import ColorCard from "@/components/ColorCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen px-32 py-10 grid grid-cols-3 gap-5">
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
    </div>
  );
}
