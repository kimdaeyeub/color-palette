import React from "react";

const Nav = () => {
  return (
    <div className="w-full py-5 px-32 flex justify-between items-center">
      <h1 className="text-5xl font-bold">LOGO</h1>
      <div className="flex justify-center items-center space-x-16">
        <div className="flex justify-center items-center space-x-8">
          <span className="text-gray-400 font-medium text-lg">Light Theme</span>
          <span className="text-gray-400 font-medium text-lg">Light Theme</span>
        </div>
        <button className="px-6 py-2 rounded-lg bg-black text-white font-medium text-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
