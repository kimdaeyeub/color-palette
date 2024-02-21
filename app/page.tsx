import ColorCard from "@/components/ColorCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="min-h-screen w-full flex justify-center items-center bg-blue-100 relative">
        {/* <div>
          <h1 className="text-6xl font-bold">색상선정을 위한 최고의 선택</h1>
        </div> */}
        <Image
          width={1000}
          height={1000}
          className="w-full h-full"
          src="/images/palettes.png"
          alt="bg_image"
        />
        <div className="w-fit h-fit text-7xl font-extrabold absolute top-0 bottom-0 left-0 right-0 m-auto shadow-2xl text-white">
          Creating with Color
        </div>
      </section>
      <section className="w-full min-h-screen px-32 py-24 flex flex-col justify-center items-center bg-blue-50">
        <span className="text-7xl font-bold">Popular Palette</span>
        <div className="w-full grid grid-cols-3 gap-5 mt-20">
          <ColorCard />
          <ColorCard />
          <ColorCard />
        </div>
      </section>
    </>
  );
}
