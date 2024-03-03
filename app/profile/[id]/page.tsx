import ColorCard from "@/components/ColorCard";
import PlusCard from "@/components/PlusCard";
import ProfileCard from "@/components/ProfileCard";
import { api_url } from "@/utils/constants";
import { getUser } from "@/utils/functions";
import { IPalette, IUser } from "@/utils/types";
import { getServerSession } from "next-auth";

const getPalettes = async (id: string) => {
  const response = await fetch(`${api_url}/profile/${id}/palettes`);
  const json = await response.json();
  return json;
};

const Profile = async ({ params: { id } }: { params: { id: string } }) => {
  const palettes = await getPalettes(id);
  const session = await getServerSession();

  const user: IUser[] = await getUser();
  return (
    <div className="min-h-screen px-32 py-20">
      <ProfileCard id={id} />
      <div className="my-20 w-full h-1 bg-gray-100" />
      <div className="w-full grid grid-cols-3 gap-5">
        {user[0] && user[0]._id.toString() === id && <PlusCard />}
        {palettes?.map((palette: IPalette, index: number) => (
          <ColorCard palette={palette} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
