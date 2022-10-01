import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import HeaderNav from "../components/HeaderNav";
import { UserContext } from "../helpers/UserContext";

const Welcome = () => {
  const { userState } = useContext(UserContext);
  const router = useRouter();
  const [readyBox, setReadyBox] = useState("");
  const isDisabled = false;
  const isWaiting = true;

  if (readyBox == "ready") {
    isDisabled = true;
    isWaiting = false;
    setTimeout(() => {
      router.push("/quiz");
    }, 4000);
  }

  useEffect(() => {
    if (userState.username == "") {
      router.push("register");
    } else if (userState.username.replace(/\s/g, "") == "") {
      router.push("register");
    }
  }, [router, userState.username]);

  return (
    <section className="bgimg-game min-h-screen w-full">
      <div className="main container mx-auto py-8 px-8 min-h-screen relative overflow-hidden">
        {/* HEADER LOGOS */}
        <HeaderNav />
        {/* MAIN STUFFS */}
        <div className="main text-white h-80 flex flex-col justify-center">
          <div className="toptitle text-center py-8 flex flex-col items-center gap-4">
            <h2 className="text-3xl font-extralight text-gray-300">
              Hi <span className="font-bold text-white">{userState.username}</span>, Welcome to <span className="font-bold text-blue-400">PlayJWST</span>
            </h2>
            <p className="max-w-xl text-center text-gray-300 tracking-wide font-light text-sm">
              NASA&apos;s James Webb Space Telescope is the largest, most powerful, and most complex space science telescope ever built. This game will take you through a journey where you will understand why James Webb is the superior one. Type <span className="font-extrabold text-white">READY</span> when you want to get started.
            </p>
            <input type="text" id="helper-text" autoComplete="off" aria-describedby="helper-text-explanation" disabled={isDisabled} className="z-10 w-fit border text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-600 focus:ring-2 focus:border-blue-500 outline-none font-bold disabled:text-gray-400" placeholder="READY" onChange={(e) => setReadyBox(e.target.value.toLowerCase())} />
            <div className="waitingForUser animate-pulse">
              <div id="toast-simple" className="flex items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                {isWaiting ? (
                  <svg aria-hidden="true" className="w-5 h-5 text-blue-600 dark:text-blue-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path>
                  </svg>
                ) : (
                  <>
                    <div className="spinnerLoadingNow">
                      <div role="status">
                        <svg aria-hidden="true" className="w-6 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </>
                )}
                <div className="pl-4 text-sm font-normal">{isWaiting ? "awaiting user input..." : "starting game..."}</div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="bottomimage md:w-1/2 z-1 fixed bottom-[-16px]">
              <Image src={"/images/jwst_model.png"} height={516} width={1000} alt="JWST" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
