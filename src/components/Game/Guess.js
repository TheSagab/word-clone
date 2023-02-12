import { range } from "../../utils";

export const Guess = ({ guess }) => {
  return (
    <>
      <p className="guess">
        {range(5).map((index) =>
          !!guess ? (
            <span
              key={guess.id + '-' + index}
              className={"cell " + guess.guessValidation[index].status}
            >
              {guess.guessValidation[index].letter}
            </span>
          ) : (
            <span key={index} className="cell"></span>
          )
        )}
      </p>
    </>
  );
};
