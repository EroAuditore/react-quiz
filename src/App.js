import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Trivia from "./components/trivia";
import Result from "./components/result";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/result" element={<Result />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
