"use client";

import { deletePaletteAction } from "@/utils/getPaletteAction";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

interface IProp {
  id: string;
}
const DeletePaletteBtn = ({ id }: IProp) => {
  const [state, formAction] = useFormState(deletePaletteAction, null);
  const router = useRouter();
  console.log(state);
  useEffect(() => {
    if (state) {
      router.push("/");
    }
  }, [state, router]);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <button className="px-5 py-3 bg-red-700 text-white rounded-xl text-lg font-medium flex justify-center items-center space-x-3">
        Delete
      </button>
    </form>
  );
};

export default DeletePaletteBtn;
