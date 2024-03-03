import EditForm from "@/components/EditForm";
import { api_url } from "@/utils/constants";
import { getUser } from "@/utils/functions";
import { redirect } from "next/navigation";

const fetchUserProfile = async (id: string) => {
  const response = await fetch(`${api_url}/profile/${id}`);
  const json = await response.json();
  return json;
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
    <div className="px-32 pt-10 pb-32 min-h-screen flex flex-col justify-start items-center w-full">
      <h1 className="text-8xl font-extrabold mt-10 mb-28">Edit Profile</h1>
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
