import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Trivia from "./components/trivia";
import Result from "./components/result";

const App = () => {
  return (
    <div className="bg-slate-300">
      <div className="container min-h-screen flex justify-center items-center p-4">
        <BrowserRouter>
          <Routes>
            <Route path="/result" element={<Result />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
