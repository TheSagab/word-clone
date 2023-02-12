import { range } from "../../utils";
import { Guess } from "./Guess";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

export const AnswerList = ({ answers }) => {
  const answersCount = answers.length;
  return (
    <>
      <div className="guess-results">
        {range(answersCount).map(index => (
          <Guess answer={answers[index]}/>
        ))}
        {range(NUM_OF_GUESSES_ALLOWED - answersCount).map(index => (
          <Guess/>
        ))}
      </div>
    </>
  );
};
