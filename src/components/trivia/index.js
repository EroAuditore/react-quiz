import React from "react";
import { useSelector } from "react-redux";

const Trivia = () => {
  const currentQuestion = useSelector(
    (state) => state.trivia.questions[state.trivia.questionIndex].question
  );
  const name = "Cateory Quiz";
  const handleNext = () => {
    console.log("currentQuestion", currentQuestion);
  };

  return (
    <>
      <h1>{name}</h1>
      <div dangerouslySetInnerHTML={{ __html: currentQuestion }}></div>

      <div>Counter</div>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </>
  );
};

export default Trivia;
