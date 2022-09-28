import React from "react";
import Image from "next/image";

const LeaderboardRow = ({ color }) => {
  return (
    <div className={`second-row ${color} px-5 py-4`}>
      <div className="row flex items-center justify-between">
        <div className="user flex items-center gap-3">
          <Image src={"/images/avatar.png"} height={40} width={40} alt="Avatar" />
          <h2 className="text-lg font-bold text-white">FL3XF0X</h2>
        </div>
        <div className="points flex flex-col items-center">
          <h1 className="text-2xl font-bold text-white">9560</h1>
          <p className="text-zinc-200 text-xs tracking-wider">POINTS</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardRow;
