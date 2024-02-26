import React from "react";

interface IProp {
  select: boolean | null;
  toggleDarkMode: (val: string) => void;
  val: string;
}
const RadioButton = ({ select, toggleDarkMode, val }: IProp) => {
  return (
    <div className="p-1 border-2 border-black rounded-full">
      <div
        onClick={() => toggleDarkMode(val)}
        className={`w-6 h-6 rounded-full ${
          select ? "bg-black" : "bg-transparent"
        }`}
      />
    </div>
  );
};

export default RadioButton;
