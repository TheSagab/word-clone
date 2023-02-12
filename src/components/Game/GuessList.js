import { range } from "../../utils";
import { Guess } from "./Guess";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

export const GuessList = ({ guesses }) => {
  const guessesCount = guesses.length;
  return (
    <>
      <div className="guess-results">
        {range(guessesCount).map(index => (
          <Guess key={'y' + index} guess={guesses[index]}/>
        ))}
        {range(NUM_OF_GUESSES_ALLOWED - guessesCount).map(index => (
          <Guess key={'n' + index}/>
        ))}
      </div>
    </>
  );
};
