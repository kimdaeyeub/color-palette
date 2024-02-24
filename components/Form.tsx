"use client";

import React, { useState } from "react";
import SelectBtn from "./SelectBtn";
import ColorForm from "./ColorForm";

const Form = () => {
  const [gridValue, setGridValue] = useState<number>(9);
  const onChangeSelectBtn = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col px-10 py-10 rounded-xl border-2 border-gray-400">
      {/* <SelectBtn /> */}
      <form>
        <div className="mt-4 flex flex-col justify-center items-start w-full">
          <label className="text-lg font-medium">title</label>
          <input
            type="text"
            required
            placeholder="title"
            className="w-full outline-none bg-gray-200 border border-gray-400 px-4 py-2 rounded-lg mt-3"
          />
        </div>
        <div className="mt-6 flex flex-col justify-center items-start w-full">
          <label className="text-lg font-medium">description</label>
          <textarea
            className="rounded-xl resize-none bg-gray-200 border border-gray-400 w-full outline-none px-4 py-2 mt-3"
            rows={4}
          />
        </div>
        <div className="w-full mt-20 flex flex-col items-end justify-start">
          <SelectBtn onChangeSelectBtn={onChangeSelectBtn} />
          <div className={`grid grid-cols-3 w-full mt-3 gap-4`}>
            <ColorForm />
            <ColorForm />
            <ColorForm />
            <ColorForm />
            <ColorForm />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
