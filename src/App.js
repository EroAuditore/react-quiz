import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Trivia from './components/trivia';
import Result from './components/result';
import ProtectedRoute from './components/common/ProtectedRoute';
import Error from './components/common/Error';

const App = () => {
  const stage = useSelector(state => state.trivia.stage);

  return (
    <div className="bg-slate-300">
      <div className="container min-h-screen flex justify-center items-center p-4">
        <BrowserRouter>
          <Routes>
            <Route
              path="/result"
              element={
                <ProtectedRoute path="result" stage={stage}>
                  <Result />
                </ProtectedRoute>
              }
            />
            <Route
              path="/trivia"
              element={
                <ProtectedRoute path={'trivia'} stage={stage}>
                  <Trivia />
                </ProtectedRoute>
              }
            />
            <Route path="/error" exact element={<Error />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
