"use client";

import React, { useEffect, useState } from "react";
import SelectBtn from "./SelectBtn";
import ColorForm from "./ColorForm";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { addPaletteSubmit, editPaletteSubmit } from "@/utils/functions";

interface IProp {
  title?: string;
  description?: string;
  edit?: boolean;
  prevColors?: string[];
  theme?: string;
  id?: string;
}

const Form = ({ theme, title, description, edit, prevColors, id }: IProp) => {
  const [addState, addFormAction] = useFormState(addPaletteSubmit, null);
  const editPaletteSubmitWithId = async (
    prevState: any,
    formData: FormData,
  ) => {
    // 여기에서 postId를 사용하여 editPaletteSubmit 함수를 호출합니다.
    if (edit) {
      return await editPaletteSubmit(prevState, formData, id!);
    }
  };

  const [editState, editFormAction] = useFormState(
    editPaletteSubmitWithId,
    null,
  );
  const router = useRouter();
  const [clear, setClear] = useState(false);
  const [gridValue, setGridValue] = useState<number>(3);
  const [colors, setColors] = useState<string[]>([]);
  const onChangeSelectBtn = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = Number(e.target.value);
    if (num === 9) {
      setGridValue(3);
      const newArr = new Array(9).fill("");
      setColors(newArr);
      setClear(true);
    } else if (num === 16) {
      setGridValue(4);
      const newArr = new Array(16).fill("");
      setColors(newArr);
      setClear(true);
    } else {
      setGridValue(5);
      const newArr = new Array(25).fill("");
      setColors(newArr);
      setClear(true);
    }
  };

  useEffect(() => {
    const newArr = new Array(9).fill("");
    setColors(newArr);
  }, []);
  useEffect(() => {
    if (addState || editState) {
      router.push("/palettes");
    }
  }, [addState, editState, router]);

  return (
    <div className="w-full h-full flex flex-col px-10 py-10 rounded-xl border-2 border-gray-400">
      <form action={edit ? editFormAction : addFormAction}>
        <div className="mt-4 flex flex-col justify-center items-start w-full">
          <label className="text-lg font-medium">title</label>
          <input
            name="title"
            type="text"
            defaultValue={title}
            required
            placeholder="title"
            className="w-full outline-none bg-gray-200 border border-gray-400 px-4 py-2 rounded-lg mt-3"
          />
        </div>
        <div className="mt-6 flex flex-col justify-center items-start w-full">
          <label className="text-lg font-medium">description</label>
          <textarea
            name="description"
            defaultValue={description}
            className="rounded-xl resize-none bg-gray-200 border border-gray-400 w-full outline-none px-4 py-2 mt-3"
            rows={4}
          />
        </div>
        <div className="w-full mt-20 flex flex-col items-end justify-start">
          <div className="w-full flex md:flex-row flex-col space-y-4 mb-4 justify-between items-center">
            <div className="flex justify-center items-center space-x-6">
              <div className="flex justify-center items-center md:space-x-3 space-x-1">
                <span className="xl:text-lg font-medium">Dark Theme</span>
                <input
                  type="radio"
                  value={"dark"}
                  name="theme"
                  defaultChecked={theme === "dark"}
                  className="xl:w-8 xl:h-8 w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center space-x-3">
                <span className="xl:text-lg font-medium">Light Theme</span>
                <input
                  type="radio"
                  value={"light"}
                  name="theme"
                  defaultChecked={theme === "light"}
                  className="xl:w-8 xl:h-8 w-6 h-6"
                />
              </div>
            </div>
            <SelectBtn onChangeSelectBtn={onChangeSelectBtn} />
          </div>
          <div
            className={`sm:grid flex flex-col w-full mt-3 gap-4`}
            style={{
              gridTemplateColumns: `repeat(${gridValue}, minmax(0, 1fr))`,
            }}
          >
            {colors.map((color, index) => (
              <ColorForm
                key={index}
                index={index}
                clear={clear}
                setClear={setClear}
                setColors={setColors}
                colors={colors}
                prevColor={prevColors ? prevColors[index] : undefined}
              />
            ))}
          </div>
          <input
            value={"Submit"}
            type="submit"
            className="px-5 py-2 rounded-xl bg-black text-white text-lg font-medium mt-10"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
