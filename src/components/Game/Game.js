import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { AnswerInput } from "./AnswerInput";
import { AnswerList } from "./AnswerList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const submitAnswer = (e) => {
    e.preventDefault();
    if (answer.length < 5) return;
    const newAnswer = {
      id: crypto.randomUUID(),
      name: answer,
    };
    console.log(newAnswer);
    setAnswers([...answers, newAnswer]);
    setAnswer("");
  };

  const onInputAnswer = (e) => {
    const newAnswer = e.target.value.toUpperCase().slice(0, 5);
    setAnswer(newAnswer);
  };

  return (
    <>
      <AnswerList answers={answers} />
      <AnswerInput
        onSubmit={(e) => submitAnswer(e)}
        onChange={(e) => onInputAnswer(e)}
        answer={answer}
      />
    </>
  );
}

export default Game;
