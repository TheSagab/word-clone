import { range } from "../../utils";

export const Guess = ({ answer }) => {
  return (
    <>
      <p className="guess">
        {range(5).map((index) =>
          !!answer ? (
            <span key={answer.id + index} className="cell">
              {answer.name.charAt(index)}
            </span>
          ) : (
            <span key={index} className="cell"></span>
          )
        )}
      </p>
    </>
  );
};
