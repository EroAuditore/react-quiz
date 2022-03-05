const Trivia = () => {
  const name = 'Cateory Quiz';
  const handleNext = () => {
    console.log('next question');
  };

  return (
    <>
      <h1>{name}</h1>
      <div>Card of the trivia</div>
      <div>Counter</div>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </>
  );
};

export default Trivia;
