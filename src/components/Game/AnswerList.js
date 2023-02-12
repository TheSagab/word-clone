export const AnswerList = ({ answers }) => {
  return (
    <>
      <div className="guess-results">
        {answers.map((answer) => (
          <p id={answer.id} className="guess">
            {answer.name}
          </p>
        ))}
      </div>
    </>
  );
};
