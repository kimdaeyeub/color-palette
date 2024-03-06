"use client";
import { editProfile } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

interface IProp {
  id: string;
  username: string;
  email: string;
  description: string;
}

const EditForm = ({ id, username, email, description }: IProp) => {
  const [state, formAction] = useFormState(editProfile, null);
  const router = useRouter();
  useEffect(() => {
    if (state) {
      router.push(`/profile/${id}`);
    }
  }, [state, id, router]);
  return (
    <form
      action={formAction}
      className="flex flex-col justify-center items-center lg:w-2/3 w-full border-2 border-gray-800 md:px-20 px-8 py-10 rounded-xl space-y-5"
    >
      <div className="flex flex-col space-y-3 w-full">
        <label className="font-medium">이름</label>
        <input
          type="text"
          placeholder="이름"
          name="username"
          defaultValue={username}
          className="px-3 py-2 outline-none border-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col space-y-3 w-full">
        <label className="font-medium">이메일</label>
        <input
          type="email"
          placeholder="이메일"
          name="email"
          defaultValue={email}
          className="px-3 py-2 outline-none border-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col space-y-3 w-full">
        <label className="font-medium">소개글</label>
        <textarea
          placeholder="소개글"
          defaultValue={description}
          name="description"
          rows={5}
          className="resize-none px-3 py-2 outline-none border-2 rounded-lg"
        />
      </div>
      <input
        type="submit"
        value="업데이트"
        className="w-full bg-black text-white rounded-md py-3 font-medium"
      />
    </form>
  );
};

export default EditForm;
