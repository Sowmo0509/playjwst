import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HeaderNav from "../components/HeaderNav";
import PlayButton from "../components/PlayButton";
import { UserContext } from "../helpers/UserContext";
import axios from "axios";

const Register = () => {
  const { userState, setUserState } = useContext(UserContext);
  const [savedUsername, setSavedUsername] = useState("");
  const [isExist, setIsExist] = useState(false);
  const data = { username: savedUsername };
  const router = useRouter();

  const setUser = async () => {
    const user = await axios.post(`${process.env.URL}/api/checkuser`, data);
    if (user.data.user == null) {
      setUserState({ username: savedUsername.toLowerCase().replace(/\s/g, ""), point: 0 });
      router.push("welcome");
    } else {
      console.log("Username exists");
    }
  };

  return (
    <section className="bgimg min-h-screen w-full">
      <div className="main flex flex-col justify-between container mx-auto py-8 px-8 min-h-screen">
        {/* HEADER LOGOS */}
        <HeaderNav />
        {/* MAIN STUFFS */}
        <div className="py-8 md:h-[70vh] flex flex-col md:justify-center text-white">
          <h2 className="text-3xl font-bold py-2">Create an account.</h2>
          <p className="text-gray-300 w-full md:w-1/4">Create an account to start playing. Your username should be unique.</p>
          {/* INPUT USERNAME */}
          <div className="inputusername w-full md:w-1/4 py-8">
            <label for="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your username
            </label>
            <input onChange={(e) => setSavedUsername(e.target.value)} type="text" id="helper-text" aria-describedby="helper-text-explanation" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-600 focus:ring-2 focus:border-blue-500 outline-none" placeholder="JohnDoe123" />
            <p id="helper-text-explanation" className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              This username will be shown in public leaderboard. Read our {""}
              <a href="#" className="font-medium text-xs text-blue-600 hover:underline dark:text-blue-500">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          {isExist ? (
            <div className="usernameExists">
              <span id="badge-dismiss-red" class="inline-flex items-center py-2 px-2 mr-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-200 dark:text-red-800">
                Username already exists.
              </span>
            </div>
          ) : null}
          <button onClick={() => setUser()}>
            <Link href={"/welcome"}>
              <a className="w-fit h-fit">
                <PlayButton isIcon={false} text={"Get Started"} textSize={"text-md"} />
              </a>
            </Link>
          </button>
        </div>
        <div className="pb-20 md:pb-0 md:w-1/3">
          <div className="flex p-4 opacity-75 text-xs tracking-wide rounded-lg bg-gray-700 text-gray-300" role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-bold text-white">Careful!</span> One account is for a single game session. If you want to play again, you have to create a new account with new username.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
