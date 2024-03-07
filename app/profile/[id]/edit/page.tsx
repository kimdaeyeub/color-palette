import EditForm from "@/components/EditForm";
import User from "@/models/User";
import { getUser } from "@/utils/functions";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Profile",
};

const fetchUserProfile = async (id: string) => {
  const user = await User.findById(id);
  return user;
};

const EditProfilePage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const profile = await fetchUserProfile(id);
  const user = await getUser();
  if (user[0]._id.toString() !== id) {
    redirect("/");
  }
  return (
    <div className="xl:px-32 md:px-20 sm:px-12 px-6 pt-10 pb-32 min-h-screen flex flex-col justify-start items-center w-full">
      <h1 className="xl:text-[130px] lg:text-[100px] md:text-[80px] text-[60px] font-extrabold mt-10 md:mb-20 lg-10">
        Edit Profile
      </h1>
      <EditForm
        id={id}
        username={profile.username}
        email={profile.email}
        description={profile.description}
      />
    </div>
  );
};

export default EditProfilePage;
