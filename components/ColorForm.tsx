import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProp {
  index: number;
  setColors: Dispatch<SetStateAction<string[]>>;
  setClear: Dispatch<SetStateAction<boolean>>;
  colors: string[];
  clear: boolean;
  prevColor?: string;
}

const ColorForm = ({
  prevColor,
  index,
  setColors,
  colors,
  clear,
  setClear,
}: IProp) => {
  const [colorCode, setColorCode] = useState("");
  const onChangeColorCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorCode(e.target.value);
    let arr = colors;
    arr[index] = e.target.value;
    setColors(arr);
  };
  useEffect(() => {
    if (clear) {
      setColorCode("");
      setClear(false);
    }
    if (prevColor) {
      setColorCode(prevColor);
    }
  }, [clear, setClear, prevColor]);
  return (
    <div
      className={`w-full aspect-video border border-black rounded-lg flex justify-center items-center p-5`}
      style={{ backgroundColor: colorCode }}
    >
      <input
        type="text"
        placeholder="Color code. ex)#3498db"
        className="w-full px-4 py-2 outline-none bg-transparent border-b-2 border-black placeholder:text-slate-500"
        value={colorCode}
        name={index.toString()}
        onChange={onChangeColorCode}
        required
      />
    </div>
  );
};

export default ColorForm;
