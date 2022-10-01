import Image from "next/image";
import React, { useEffect, useState } from "react";
import LeaderboardRow from "./child/LeaderboardRow";
import { BsGlobe2 } from "react-icons/bs";
// import leaderboard from "../data/leaderboard";
import axios from "axios";
import Link from "next/link";

const LeaderboardHome = ({ userdata }) => {
  const isLive = true;
  const leaderboard = userdata.user;
  const sortedLeaderboard = leaderboard.sort((a, b) => b.point - a.point);
  const topFive = sortedLeaderboard.slice(0, 5);
  const colorList = ["bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-blue-800", "bg-blue-900"];

  return (
    <div className="main w-80">
      <div className="leaderboard">
        <div className="first-row flex justify-between items-center bg-gray-700 px-8 py-4">
          <h3 className="text-white">
            <Link href={"leaderboard"}>
              <button>
                <span className="font-bold text-xl">LEADER</span>
                <span className="font-light text-gray-300 text-xl">BOARD</span>
              </button>
            </Link>
            <div className="live flex items-center gap-x-1">
              {isLive ? <p className="text-xs text-green-400">[Live]</p> : <p className="text-xs text-red-400">[Not Live]</p>}
              {isLive ? <div className="animate-pulse w-2 h-2 bg-green-400 rounded-full"></div> : <div className="animate-pulse w-2 h-2 bg-red-400 rounded-full"></div>}
            </div>
          </h3>
          <BsGlobe2 color="white" size={24} />
        </div>

        {userdata == null ? (
          <p className="text-white">Loading userdata...</p>
        ) : (
          topFive.map((leader, index) => {
            return <LeaderboardRow key={index} points={leader.point} name={leader.username} color={colorList[index]} />;
          })
        )}
      </div>
    </div>
  );
};

export default LeaderboardHome;
