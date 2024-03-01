import Palette from "@/models/palette";
import { connectToDB } from "@/utils/database";

// export const GET = async () => {
//   try {
//     await connectToDB();
//     const palettes = await Palette.find({ theme: "light" }).populate("creator");

//     return new Response(JSON.stringify(palettes), { status: 200 });
//   } catch (error) {
//     return new Response("Fail");
//   }
// };

export const GET = async () => {
  try {
    await connectToDB();
    const palettes = await Palette.find({ theme: "light" }).populate("creator");
    return new Response(JSON.stringify(palettes), {
      status: 200,
      headers: {
        "Content-Type": "application/json", // Content-Type 명시
      },
    });
  } catch (error) {
    console.error("Error fetching light palettes:", error); // 에러 로깅
    return new Response(JSON.stringify({ error: "Fail to fetch palettes" }), {
      status: 500, // 에러 상태 코드 설정
      headers: {
        "Content-Type": "application/json", // 에러 응답도 JSON 형식으로
      },
    });
  }
};
