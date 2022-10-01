import { useState } from "react";
import LeaderboardHome from "../components/LeaderboardHome";
import PlayButton from "../components/PlayButton";
import HeaderNav from "../components/HeaderNav";
import Link from "next/link";

export default function Home({ userdata }) {
  return (
    <section className="bgimg min-h-screen w-full">
      <div className="main container mx-auto py-8 px-8 min-h-screen">
        {/* HEADER LOGOS */}
        <HeaderNav />
        {/* HERO CENTER */}
        <div className="py-8 md:h-[80vh] flex flex-col md:justify-center">
          <div className="hero flex flex-col justify-between md:items-center md:flex-row">
            <div className="left-hero pt-8 md:pt-0 md:w-1/3 flex gap-4 flex-col">
              <h1 className="text-white font-extrabold text-4xl sm:text-5xl xl:text-7xl tracking-tight">The sky is not the limit.</h1>
              <h4 className="text-gray-300 text-xl">Let&apos;s take a journey to the space with our most powerful telescope- ever.</h4>
              <Link href={"/register"}>
                <a className="w-fit h-fit">
                  <PlayButton isIcon={true} text={"Play"} textSize={"text-xl"} />
                </a>
              </Link>
            </div>
            <div className="right-hero  pt-10 md:pt-0">
              <LeaderboardHome userdata={userdata} />
            </div>
          </div>
        </div>
        {/* ALERT CARD */}
        <div className="md:w-1/3">
          <div className="flex p-4 opacity-75 text-xs tracking-wide rounded-lg bg-gray-700 text-gray-300" role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Careful!</span> One account is for a single game session. If you want to play again, you have to create a new account with new username.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Getting leaderboard data
export async function getServerSideProps() {
  const res = await fetch(`${process.env.URL}/api/test/userlist`);
  const data = await res.json();
  console.log(data);

  return {
    props: { userdata: data },
  };
}
