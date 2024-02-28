"use client";
import { IUser } from "@/utils/types";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IProp {
  id: string;
}

const EditForm = ({ id }: IProp) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const { data: session } = useSession();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateData = { username: name, email, description };
  };
  useEffect(() => {
    if (!session?.user) {
      redirect("/");
    } else {
      const fetchUserProfile = async () => {
        const response = await fetch(`/api/profile/${id}`);
        const json = await response.json();

        setName(json.username);
        setEmail(json.email);
        setDescription(json.description);
      };

      fetchUserProfile();
    }
  }, []);
  return (
    <form className="flex flex-col justify-center items-center w-2/3 border-2 border-gray-800 px-20 py-10 rounded-xl space-y-5">
      <div className="flex flex-col space-y-3 w-full">
        <label className="font-medium">이름</label>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          className="px-3 py-2 outline-none border-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col space-y-3 w-full">
        <label className="font-medium">이메일</label>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          className="px-3 py-2 outline-none border-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col space-y-3 w-full">
        <label className="font-medium">소개글</label>
        <textarea
          placeholder="소개글"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setDescription(e.target.value);
          }}
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
