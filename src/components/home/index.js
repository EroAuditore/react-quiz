import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startTrvia } from '../../redux/reducers/trivia';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorState = useSelector(state => state.trivia.error);
  const handleBegin = () => {
    navigate('/trivia');
  };
  useEffect(() => {
    dispatch(startTrvia());
  }, [dispatch]);

  useEffect(() => {
    if (errorState === true) navigate('/error');
  }, [errorState]);

  return (
    <div className="max-w-xl rounded shadow-lg bg-slate-50 h-96 flex flex-col p-4 justify-evenly w-[32rem]">
      <h1 className="text-3xl font-bold">Welcome to trivia challenge</h1>
      <h2 className="text-gray-700">You will be presented with 10 question</h2>
      <h2 className="text-gray-700">Can you score 100%?</h2>

      <button
        className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={handleBegin}
      >
        Beggin
      </button>
    </div>
  );
};

export default Home;
