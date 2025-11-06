import React, { useState } from "react";

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState("bg-blue-500");

  const changeToRed = () => {
    setBgColor("bg-red-500");
  };

  const changeToGreen = () => {
    setBgColor("bg-green-500");
  };

  const changeToYellow = () => {
    setBgColor("bg-yellow-500");
  };

  return (
    <div className={`p-10 transition-colors duration-500 ${bgColor}`}>
      <h1 className="text-white text-2xl font-bold mb-4">
        Background Color Demo : {bgColor}
      </h1>
      <div className="flex space-x-4">
        <button
          onClick={changeToRed}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Red
        </button>
        <button
          onClick={changeToGreen}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Green
        </button>
        <button
          onClick={changeToYellow}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Yellow
        </button>
      </div>
    </div>
  );
};

export default ColorChanger;
