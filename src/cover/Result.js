export default function Result(props) {
  const { currRound, handleReset, bestScore } = props;
  return (
    <div className="main-menu">
      <h1>Oh, you busted!</h1>
      <h2>No more hp left</h2>
      Your score is {currRound}
      <br />
      your best Score is {bestScore}
      <button onClick={handleReset} className="main-menu-button">
        Main Menu
      </button>
    </div>
  );
}
