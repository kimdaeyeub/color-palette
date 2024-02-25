"use client";

import React, { useEffect, useState } from "react";
import SelectBtn from "./SelectBtn";
import ColorForm from "./ColorForm";

const Form = () => {
  const [clear, setClear] = useState(false);
  const [gridValue, setGridValue] = useState<number>(3);
  const [colors, setColors] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
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
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDiscription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(colors, title, description);
  };
  useEffect(() => {
    const newArr = new Array(9).fill("");
    setColors(newArr);
  }, []);

  console.log(clear);
  return (
    <div className="w-full h-full flex flex-col px-10 py-10 rounded-xl border-2 border-gray-400">
      {/* <SelectBtn /> */}
      <form onSubmit={handleSubmit}>
        <div className="mt-4 flex flex-col justify-center items-start w-full">
          <label className="text-lg font-medium">title</label>
          <input
            type="text"
            required
            onChange={onChangeTitle}
            placeholder="title"
            className="w-full outline-none bg-gray-200 border border-gray-400 px-4 py-2 rounded-lg mt-3"
          />
        </div>
        <div className="mt-6 flex flex-col justify-center items-start w-full">
          <label className="text-lg font-medium">description</label>
          <textarea
            onChange={onChangeDescription}
            className="rounded-xl resize-none bg-gray-200 border border-gray-400 w-full outline-none px-4 py-2 mt-3"
            rows={4}
          />
        </div>
        <div className="w-full mt-20 flex flex-col items-end justify-start">
          <SelectBtn onChangeSelectBtn={onChangeSelectBtn} />
          <div className={`grid grid-cols-${gridValue} w-full mt-3 gap-4`}>
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
