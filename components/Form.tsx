"use client";

import React, { useEffect, useState } from "react";
import SelectBtn from "./SelectBtn";
import ColorForm from "./ColorForm";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { handleSubmit } from "@/utils/functions";

interface IProp {
  handleSubmit: (formData: FormData) => void;
}

const Form = () => {
  const [state, formAction] = useFormState(handleSubmit, null);
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
    if (state) {
      router.push("/palettes");
    }
  }, [state]);

  return (
    <div className="w-full h-full flex flex-col px-10 py-10 rounded-xl border-2 border-gray-400">
      <form action={formAction}>
        <div className="mt-4 flex flex-col justify-center items-start w-full">
          <label className="text-lg font-medium">title</label>
          <input
            name="title"
            type="text"
            required
            placeholder="title"
            className="w-full outline-none bg-gray-200 border border-gray-400 px-4 py-2 rounded-lg mt-3"
          />
        </div>
        <div className="mt-6 flex flex-col justify-center items-start w-full">
          <label className="text-lg font-medium">description</label>
          <textarea
            name="description"
            className="rounded-xl resize-none bg-gray-200 border border-gray-400 w-full outline-none px-4 py-2 mt-3"
            rows={4}
          />
        </div>
        <div className="w-full mt-20 flex flex-col items-end justify-start">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center space-x-6">
              <div className="flex justify-center items-center space-x-3">
                <span className="text-lg font-medium">Dark Theme</span>
                <input
                  type="radio"
                  value={"dark"}
                  name="theme"
                  className="w-8 h-8"
                />
              </div>
              <div className="flex justify-center items-center space-x-3">
                <span className="text-lg font-medium">Light Theme</span>
                <input
                  type="radio"
                  value={"light"}
                  name="theme"
                  className="w-8 h-8"
                />
              </div>
            </div>
            <SelectBtn onChangeSelectBtn={onChangeSelectBtn} />
          </div>
          <div
            className={`grid  w-full mt-3 gap-4`}
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
