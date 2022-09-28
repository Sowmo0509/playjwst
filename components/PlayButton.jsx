import React from "react";
import { IoGameControllerOutline } from "react-icons/io5";

const PlayButton = () => {
  return (
    <button className="w-fit mt-4 flex items-center rounded-lg gap-3 text-white bg-blue-600 hover:bg-blue-700 transition px-4 py-2">
      <IoGameControllerOutline size={24} />
      <h3 className="font-bold text-xl">Play</h3>
    </button>
  );
};

export default PlayButton;
