import React from "react";
import LeaderboardFull from "../../components/LeaderboardFull";
import HeaderNav from "../../components/HeaderNav";
import Link from "next/link";

const Leaderboard = ({ userdata }) => {
  return (
    <section className="bgimg min-h-screen w-full">
      <div className="main container text-white mx-auto py-8 px-8 min-h-screen">
        {/* HEADER LOGOS */}
        <HeaderNav />
        {/* HERO */}
        <LeaderboardFull userdata={userdata} />
      </div>
    </section>
  );
};

export default Leaderboard;

// Getting leaderboard data
export async function getServerSideProps() {
  const res = await fetch(`${process.env.URL}/api/test/userlist`);
  const data = await res.json();

  return {
    props: { userdata: data },
  };
}
