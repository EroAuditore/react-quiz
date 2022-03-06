import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { answerQuestion } from "../../redux/reducers/trivia";
import { useNavigate } from "react-router-dom";

const Trivia = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentQuestion = useSelector(
    (state) => state.trivia.questions[state.trivia.questionIndex].question
  );
  const currentIndex = useSelector((state) => state.trivia.questionIndex);
  const name = "Cateory Quiz";
  const answerHandler = (answer) => {
    if (currentIndex === 9) {
      navigate("/result");
    } else {
      dispatch(answerQuestion({ answer }));
    }
  };

  return (
    <>
      <h1>{name}</h1>
      <div dangerouslySetInnerHTML={{ __html: currentQuestion }}></div>
      <div>{currentIndex + 1} of 10</div>
      <button type="button" onClick={() => answerHandler("True")}>
        True
      </button>
      <button type="button" onClick={() => answerHandler("False")}>
        false
      </button>
    </>
  );
};

export default Trivia;
