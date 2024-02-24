import React, { useState } from "react";

const ColorForm = () => {
  const [colorCode, setColorCode] = useState("");
  const onChangeColorCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorCode(e.target.value);
  };
  return (
    <div
      className={`w-full h-[300px] border border-black rounded-lg flex justify-center items-center p-5`}
      style={{ backgroundColor: colorCode }}
    >
      <input
        type="text"
        placeholder="Color code. ex)#3498db"
        className="w-full px-4 py-2 rounded-md outline-none"
        value={colorCode}
        onChange={onChangeColorCode}
      />
    </div>
  );
};

export default ColorForm;
