import React, { useState, useContext, useEffect } from "react";
import questions from "../../data/quiz";
import { useRouter } from "next/router";
import PlayButton from "../../components/PlayButton";
import OptionDiv from "../../components/OptionDiv";
import HeaderNav from "../../components/HeaderNav";
import { UserContext } from "../../helpers/UserContext";
import Link from "next/link";

const Quiz = () => {
  const { userState, setUserState } = useContext(UserContext);
  const router = useRouter();
  const [quesNum, setQuesNum] = useState(0);
  const [point, setPoint] = useState(0);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [correctFlag, setCorrectFlag] = useState("");
  const [quesLen, setQuesLen] = useState(questions.length);

  const handleClick = (isCorrect) => {
    if (isCorrect == true) {
      setPoint((point += 50));
      setUserState({ ...userState, point: point });
      setCorrectFlag("Correct Answer ✓ ");
    } else {
      setCorrectFlag("Wrong Answer ✘ ");
    }
  };

  const handleModalButton = (isCorrect) => {
    if (quesLen > 1) {
      setQuesNum((quesNum += 1));
      setIsOptionDisabled(false);
      setQuesLen((quesLen = quesLen - 1));
    }
  };
  
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
        {/* MAIN STUFFS */}
        <div className="quiz md:w-1/2 mx-auto text-white py-2">
          <div className="questions flex items-center justify-between py-4">
            <button type="button" disabled={true} className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none  bg-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
              <span className="sr-only">Questions</span>
              <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">{quesLen}</div>
            </button>
            <div>
              <button disabled={true} type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-800">
                {userState.username}
                <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-extrabold text-blue-800 bg-blue-200 rounded-full p-6">{userState.point}</span>
              </button>
            </div>
          </div>
          <div className="questionDiv min-h-[70vh] flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white pt-10 pb-4">{questions[quesNum].questionText}</h2>
            {questions[quesNum].answerOptions.map((q, index) => {
              return (
                <div key={index}>
                  {/* OPTIONS */}
                  <button
                    key={index}
                    onClick={() => {
                      handleClick(q.isCorrect);
                      setIsOptionDisabled(true);
                    }}
                    className={`hover:bg-gray-700 focus:text-white text-lg font-semibold my-1 inline-flex justify-between items-center p-5 w-full rounded-lg border cursor-pointer  hover:text-gray-300 border-gray-700  text-gray-400 bg-gray-800 focus:bg-blue-800`}>
                    {q.answerText}
                  </button>

                  {/* ANSWER  MODAL */}
                  <div>
                    <div id="small-modal" tabIndex="-1" className={`${isOptionDisabled ? "" : "hidden"} bg-opacity-30 bg-black flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full md:inset-0 h-modal md:h-full`}>
                      <div className="p-4 w-full max-w-md h-full md:h-auto flex items-center">
                        <div className="relative rounded-lg shadow bg-gray-700">
                          <div className="flex flex-col justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                            <h4 className="text-sm pb-4 text-gray-300">{correctFlag}</h4>
                            <h3 className="text-xl font-medium text-white">{questions[quesNum].questionText}</h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal"></button>
                          </div>
                          <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed font-medium text-gray-300">{questions[quesNum].story}</p>
                          </div>
                          <div className="flex justify-between items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <p className="text-sm text-blue-300">{quesLen < 2 ? "Level 1 completed." : null}</p>
                            <button onClick={() => handleModalButton()} data-modal-toggle="small-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              {quesLen < 2 ? <Link href={"cardgame"}>Go to Second Level</Link> : "Next Question"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
