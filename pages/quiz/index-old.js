import React, { useState } from "react";
import questions from "../data/quiz";
import HeaderNav from "../../components/HeaderNav";

const Quiz = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [quesNum, setQuesNum] = useState(0);
  const [point, setPoint] = useState(0);

  const handleClick = (isCorrect) => {
    if (isCorrect == true) {
      setPoint((point += 1));
      // setQuesNum((quesNum += 1));
      setIsVisible(true);
    }
  };

  return (
    <section className="bgimg-game min-h-screen w-full">
      <div className="main container mx-auto py-8 px-8 min-h-screen relative overflow-hidden">
        {/* HEADER LOGOS */}
        <HeaderNav />
        {/* MAIN STUFFS */}
        <div className="quiz w-1/2 mx-auto text-white">
          <h1>Question Number: {quesNum}</h1>
          <h1>Point: {point}</h1>
          {questions[quesNum].questionText}
          <button
            onClick={() => {
              setQuesNum((quesNum += 1));
            }}>
            CLICK
          </button>
          {questions[quesNum].answerOptions.map((q, i) => {
            return (
              <>
                <button
                  onClick={() => {
                    console.log(q.id);
                    handleClick(q.isCorrect);
                  }}
                  className="text-white flex py-4 gap-4"
                  key={i}>
                  {q.answerText}
                </button>
                {isVisible ? <h3 className="text-white">{q.story}</h3> : null}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
