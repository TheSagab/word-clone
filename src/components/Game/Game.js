import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "./GuessInput";
import { GuessList } from "./GuessList";
import { checkGuess } from "../../game-helpers";
import { Banner } from "./Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');

  const submitAnswer = (e) => {
    e.preventDefault();
    if (answer.length < 5) return;
    const guessValidation = checkGuess(guess, answer)
    const newGuess = {
      id: crypto.randomUUID(),
      name: guess,
      guessValidation: guessValidation
    };
    console.log(newGuess);
    setGuesses([...guesses, newGuess]);
    setGuess("");
    if (guess === answer) {
      setGameStatus('win')
      return
    }
    if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lose')
    }
  };

  const onInputGuess = (e) => {
    const newGuess = e.target.value.toUpperCase().slice(0, 5);
    setGuess(newGuess);
  };

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput
        onSubmit={(e) => submitAnswer(e)}
        onChange={(e) => onInputGuess(e)}
        guess={guess}
        disabled={gameStatus !== 'playing'}
      />
      <Banner gameStatus={gameStatus} guesses={guesses} answer={answer}/>
    </>
  );
}

export default Game;
