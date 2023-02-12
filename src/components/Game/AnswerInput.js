export const AnswerInput = ({ onSubmit, onChange, answer }) => {
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={onSubmit}>
        <label htmlFor="guess-input">Guess:</label>
        <input
          id="guess-input"
          type="text"
          onChange={onChange}
          value={answer}
        ></input>
      </form>
    </>
  );
};
