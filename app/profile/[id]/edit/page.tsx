import EditForm from "@/components/EditForm";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="px-32 pt-10 pb-32 min-h-screen flex flex-col justify-start items-center w-full">
      <h1 className="text-8xl font-extrabold mt-10 mb-28">Edit Profile</h1>
      <EditForm id={params.id} />
    </div>
  );
};

export default page;
