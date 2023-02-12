export const GuessInput = ({ onSubmit, onChange, guess, disabled }) => {
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={onSubmit}>
        <label htmlFor="guess-input">Guess:</label>
        <input
          id="guess-input"
          type="text"
          onChange={onChange}
          value={guess}
          disabled={disabled}
        ></input>
      </form>
    </>
  );
};
