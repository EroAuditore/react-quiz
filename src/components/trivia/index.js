import { useSelector, useDispatch } from 'react-redux';
import { answerQuestion, endTrivia } from '../../redux/reducers/trivia';
import { useNavigate } from 'react-router-dom';

const Trivia = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentIndex = useSelector(state => state.trivia.questionIndex);
  const currentQuestion = useSelector(
    state => state.trivia.questions[state.trivia.questionIndex].question
  );
  const category = useSelector(
    state => state.trivia.questions[state.trivia.questionIndex].category
  );
  const answerHandler = answer => {
    if (currentIndex === 9) {
      dispatch(endTrivia());
      navigate('/result');
    } else {
      dispatch(answerQuestion({ answer }));
    }
  };

  return (
    <div className="max-w-xl rounded shadow-lg bg-slate-50 h-96 flex flex-col p-4 justify-evenly w-[32rem]">
      <h1 className="text-3xl font-bold">{category}</h1>
      <p dangerouslySetInnerHTML={{ __html: currentQuestion }}></p>
      <p className="text-center">{currentIndex + 1} of 10</p>
      <div className="flex justify-around">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => answerHandler('True')}
        >
          True
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => answerHandler('False')}
        >
          False
        </button>
      </div>
    </div>
  );
};

export default Trivia;
