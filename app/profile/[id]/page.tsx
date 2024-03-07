import ProfileCard from "@/components/ProfileCard";
import SkeletonCards from "@/components/SkeletonCards";
import SkeletonProfileCard from "@/components/SkeletonProfileCard";
import UserPalettes from "@/components/UserPalettes";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Profile",
};

const Profile = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="min-h-screen xl:px-32 md:px-20 sm:px-12 px-6 py-20">
      <Suspense fallback={<SkeletonProfileCard />}>
        <ProfileCard id={id} />
      </Suspense>
      <div className="my-20 w-full h-1 bg-gray-100" />
      <Suspense fallback={<SkeletonCards />}>
        <UserPalettes id={id} />
      </Suspense>
    </div>
  );
};

export default Profile;
