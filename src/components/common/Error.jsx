import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const handleError = () => {
    navigate(-1);
  };
  return (
    <div className="max-w-xl rounded shadow-lg bg-slate-50 h-96 flex flex-col p-4 justify-evenly w-[32rem]">
      <h1 className="text-3xl font-bold">Opps! Something wrong hapened!</h1>
      <button
        className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={handleError}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
