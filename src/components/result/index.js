import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const answers = useSelector((state) => state.trivia.answers);
  const score = useSelector((state) => state.trivia.score);
  const handleRestart = () => {
    console.log("restart");
  };
  return (
    <div className="max-w-xl rounded shadow-lg bg-slate-50 flex flex-col p-4 justify-evenly w-[32rem]">
      <h1 className="text-3xl">Your Score: {score} of 10</h1>
      <p>Result:</p>
      {answers.map((answer) => (
        <div class="flex justify-between px-2 py-2">
          <div class="flex text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-red-600"
              viewBox="0 0 20 15"
              fill="currentColor"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
            <p dangerouslySetInnerHTML={{ __html: answer.question }}></p>
          </div>
          <p class="text-gray-500 font-thin">Team</p>
        </div>
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={handleRestart}
      >
        Restart?
      </button>
    </div>
  );
};

export default Result;
