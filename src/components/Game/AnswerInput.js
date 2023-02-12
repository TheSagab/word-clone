import { useState } from "react";

export const AnswerInput = () => {
  const [answer, setAnswer] = useState("");

  const submitAnswer = (e) => {
    e.preventDefault();
    console.log({ answer: answer });
  };

  const onInputAnswer = (e) => {
    setAnswer(e.target.value.toUpperCase().slice(0, 5));
  };
  
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={(e) => submitAnswer(e)}>
        <label htmlFor="guess-input">Guess:</label>
        <input
          id="guess-input"
          type="text"
          onChange={(e) => onInputAnswer(e)}
          value={answer}
        ></input>
      </form>
    </>
  );
};
