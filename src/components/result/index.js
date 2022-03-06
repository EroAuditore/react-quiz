import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const answers = useSelector((state) => state.trivia.answers);
  const score = useSelector((state) => state.trivia.score);
  return (
    <div>
      <p>Your Score: {score}</p>
      <p>Result:</p>
      {answers.map((answer) => (
        <div>
          <p dangerouslySetInnerHTML={{ __html: answer.question }}></p>
          <p>
            your answer:{answer.answer}- correct answer:{answer.correctAnswer}-
            isCorrect: {answer.isCorrect}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Result;
