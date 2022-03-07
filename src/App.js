import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import Trivia from "./components/trivia";
import Result from "./components/result";
import * as stages from "./redux/utils/constants";

const App = () => {
  const stage = useSelector((state) => state.trivia.stage);

  const TriviaStage = ({ children, redirectTo }) => {
    console.log("stage", stage);
    let isStage = stages.TRIVIA === stage;
    return isStage ? children : <Navigate to={redirectTo} />;
  };

  const ResultStage = ({ children, redirectTo }) => {
    let isStage = stages.END_TRIVIA === stage;
    return isStage ? children : <Navigate to={redirectTo} />;
  };

  return (
    <div className="bg-slate-300">
      <div className="container min-h-screen flex justify-center items-center p-4">
        <BrowserRouter>
          <Routes>
            <Route path="/result" element={<Result />} />
            <Route
              path="/trivia"
              element={
                <TriviaStage redirectTo="/">
                  <Trivia />
                </TriviaStage>
              }
            />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
