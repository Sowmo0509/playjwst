import React from "react";
import Image from "next/image";

const LeaderboardRow = ({ color, name, points }) => {
  return (
    <div className={`second-row ${color} px-5 py-4`}>
      <div className="row flex items-center justify-between">
        <div className="user flex items-center gap-3">
          <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
            <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
          </div>

          <h2 className="text-lg font-bold text-white">{name}</h2>
        </div>
        <div className="points flex flex-col items-center">
          <h1 className="text-2xl font-bold text-white">{points}</h1>
          <p className="text-zinc-200 text-xs tracking-wider">POINTS</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardRow;
