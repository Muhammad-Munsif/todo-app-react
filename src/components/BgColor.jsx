import React, { useState } from "react";

const BgColor = () => {
  const [color, setColor] = useState("yellow");

  return (
    <div>
      <nav className="">
        <div className=" text-black font-bold flex items-center justify-center gap-5 mb-5">
          <button
            className="px-4 py-2 rounded-lg text-white bg-amber-300 "
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="px-4 py-2 rounded-lg text-white bg-amber-300 "
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-4 py-2 rounded-lg text-white bg-amber-300 "
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="px-4 py-2 rounded-lg text-white bg-amber-300 "
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="px-4 py-2 rounded-lg text-white bg-amber-300 "
            onClick={() => setColor("Aqua")}
          >
            Aqua
          </button>
        </div>
        <h1 className="text-center">This color is : {color}</h1>
      </nav>
    </div>
  );
};

export default BgColor;
