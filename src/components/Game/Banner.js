export const Banner = ({ gameStatus, guesses, answer }) => {
  if (gameStatus === 'win') {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    );
  } else if (gameStatus === 'lose') {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  } else {
    return <></>
  }
};
