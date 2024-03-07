import ProfileCard from "@/components/ProfileCard";
import UserPalettes from "@/components/UserPalettes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const Profile = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="min-h-screen xl:px-32 md:px-20 sm:px-12 px-6 py-20">
      <ProfileCard id={id} />
      <div className="my-20 w-full h-1 bg-gray-100" />
      <UserPalettes id={id} />
    </div>
  );
};

export default Profile;
