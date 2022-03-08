import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const answers = useSelector(state => state.trivia.answers);
  const score = useSelector(state => state.trivia.score);
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/');
  };

  const imgAnswer = isCorrect => {
    return isCorrect ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-teal-500"
        viewBox="0 0 24 24"
      >
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-rose-500"
        viewBox="0 0 24 24"
      >
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" />
      </svg>
    );
  };

  return (
    <div className="max-w-xl rounded shadow-lg bg-slate-50 flex flex-col p-4 justify-evenly w-[32rem]">
      <h1 className="text-3xl text-center">Your Score: {score} of 10</h1>

      {answers.map((answer, index) => (
        <div key={index} className="flex justify-between px-2 py-2 flex-col">
          <div className="flex ">
            <div className="flex-none w-14 h-15 p-4">
              {imgAnswer(answer.isCorrect)}
            </div>
            <div className="grow h-15">
              <p
                className="text-gray-700 text-justify p-4"
                dangerouslySetInnerHTML={{ __html: answer.question }}
              ></p>
              <div className="flex justify-around">
                <p className="text-gray-700 font-thin">
                  You answer: {answer.answer}
                </p>
                <p className="text-gray-700 font-thin">
                  Correct answer: {answer.correctAnswer}
                </p>
              </div>
            </div>
          </div>
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
