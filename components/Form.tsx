"use client";

import React, { useEffect, useState } from "react";
import SelectBtn from "./SelectBtn";
import ColorForm from "./ColorForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import RadioButton from "./RadioButton";

const Form = () => {
  const [clear, setClear] = useState(false);
  const [gridValue, setGridValue] = useState<number>(3);
  const [colors, setColors] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const [darkMode, setDarkMode] = useState<null | boolean>(null);
  const { data: session } = useSession();
  const router = useRouter();
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

  const toggleDarkMode = (val: string) => {
    //setDarkMode(!darkMode);
    if (val === "light") {
      if (!darkMode && darkMode !== null) {
        setDarkMode(null);
      } else {
        setDarkMode(false);
      }
    } else {
      if (darkMode) {
        setDarkMode(null);
      } else {
        setDarkMode(true);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/palettes/new", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          colors,
          userId: session?.user.id,
          theme: darkMode !== null ? (darkMode ? "dark" : "light") : null,
        }),
      });

      if (response.ok) {
        router.push("/palettes");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const newArr = new Array(9).fill("");
    setColors(newArr);
  }, []);

  return (
    <div className="w-full h-full flex flex-col px-10 py-10 rounded-xl border-2 border-gray-400">
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
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center space-x-6">
              <div className="flex justify-center items-center space-x-3">
                <span className="text-lg font-medium">Dark Theme</span>
                <RadioButton
                  val={"dark"}
                  toggleDarkMode={toggleDarkMode}
                  select={darkMode}
                />
              </div>
              <div className="flex justify-center items-center space-x-3">
                <span className="text-lg font-medium">Light Theme</span>
                <RadioButton
                  toggleDarkMode={toggleDarkMode}
                  val={"light"}
                  select={darkMode !== null ? !darkMode : darkMode}
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
