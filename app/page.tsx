import PopularPalette from "@/components/PopularPalette";
import Image from "next/image";
//TODO: server actions함수 정리할 것
export default function Home() {
  return (
    <>
      <section className="md:h-screen min-h-fit w-full relative">
        <div className="w-full h-full grid grid-cols-4 bg-red-400">
          <div className="w-full h-full min-h-[200px] bg-[#ff6b6b]"></div>
          <div className="w-full h-full min-h-[200px] bg-[#10ac84]"></div>
          <div className="w-full h-full min-h-[200px] bg-[#5f27cd]"></div>
          <div className="w-full h-full min-h-[200px] bg-[#222f3e]"></div>
          <div className="w-full h-full min-h-[200px] bg-[#00d2d3]"></div>
          <div className="w-full h-full min-h-[200px] bg-[#feca57]"></div>
          <div className="w-full h-full min-h-[200px] bg-[#ff9f43]"></div>
          <div className="w-full h-full min-h-[200px] bg-[#ED4C67]"></div>
          <div className="w-full h-full min-h-[200px] bg-[#6F1E51]"></div>
          <div className="w-full h-full min-h-[200px] bg-[#006266]"></div>
          <div className="w-full h-full min-h-[200px] bg-[#5758BB]"></div>
        </div>
        <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-fit h-fit">
          <span className="xl:text-[160px] lg:text-[120px] md:text-[70px] text-[50px] font-bold text-white text-center">
            Create Palette
          </span>
        </div>
      </section>
      <PopularPalette />
    </>
  );
}
