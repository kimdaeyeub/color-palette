import User from "@/models/User";
import { connectToDB } from "@/utils/database";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const user = await User.findById(params.id);

    return new Response(JSON.stringify(user));
  } catch (error) {
    console.log(error);
    return new Response("Failed");
  }
};
