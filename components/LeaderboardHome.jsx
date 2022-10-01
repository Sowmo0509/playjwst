import Image from "next/image";
import React from "react";
import LeaderboardRow from "./child/LeaderboardRow";
import { BsGlobe2 } from "react-icons/bs";

const LeaderboardHome = () => {
  return (
    <div className="main w-80">
      <div className="leaderboard">
        <div className="first-row flex justify-between items-center bg-gray-700 px-8 py-4">
          <h3 className="text-white">
            <span className="font-bold text-xl">LEADER</span>
            <span className="font-extralight text-xl">BOARD</span>
          </h3>
          <BsGlobe2 color="white" size={24} />
        </div>
        <LeaderboardRow color={"bg-blue-500"} />
        <LeaderboardRow color={"bg-blue-600"} />
        <LeaderboardRow color={"bg-blue-700"} />
        <LeaderboardRow color={"bg-blue-800"} />
        <LeaderboardRow color={"bg-blue-900"} />
      </div>
    </div>
  );
};

export default LeaderboardHome;
