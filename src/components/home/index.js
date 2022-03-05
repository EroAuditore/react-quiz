import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startTrvia } from '../../redux/reducers/trivia';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBegin = () => {
    dispatch(startTrvia());
    navigate('/trivia');
  };

  return (
    <>
      <h1>Welcome to trivia challenge</h1>
      <h2>You will be presented with 10 question</h2>
      <h2>Can you score 100%?</h2>

      <button type="button" onClick={handleBegin}>
        Beggin
      </button>
    </>
  );
};

export default Home;
