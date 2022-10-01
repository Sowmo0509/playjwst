import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Learn = () => {
  
    const router = useRouter();
  
    useEffect(() => {
    if (userState.username == "") {
      router.push("register");
    } else if (userState.username.replace(/\s/g, "") == "") {
      router.push("register");
    }
  }, [router, userState.username]);
  
  return (
    <section className="bgimg-game min-h-screen w-full">
      <div className="main container mx-auto md:flex md:justify-center md:items-center py-8 px-8 min-h-screen text-white relative overflow-hidden">
        {/* MAIN STUFFS */}
        <div className="quiz md:w-1/2 mx-auto text-white bg-gray-900 p-4 md:p-12 rounded-lg">
          <h2 className="text-4xl font-extrabold">Learn more about JWST</h2>
          <p className="my-4 text-lg text-gray-500">A easy and interactive learning process to get to know more about James Webb Space Telescope. After finishing this, you will be able to see your total points and global leaderboard.</p>
          <p className="mb-4 text-lg font-normal text-gray-400">The James Webb Space Telescope is a space telescope designed primarily to conduct infrared astronomy. As the largest optical telescope in space, its high infrared resolution and sensitivity allow it to view objects too early, distant, or faint for the Hubble Space Telescope.</p>
          <p className="mb-4 text-lg font-normal text-gray-400">Compare with other telescope images, and what naked eyes see vs the immense power of JWST.</p>
          <Link href={"learn/compare"}>
            <a className="inline-flex items-center text-lg text-blue-500 hover:underline">
              Compare
              <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Learn;
