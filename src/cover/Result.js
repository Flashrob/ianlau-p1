import { Button } from "primereact/button";

export default function Result(props) {
  const { currRound, handleReset, bestScore } = props;
  return (
    <div className="main-menu">
      <h1>Oh, you busted!</h1>
      <h2>There is no more HP left.</h2>
      Your score is {currRound}
      <br />
      Your best score is {bestScore}
      <Button
        onClick={handleReset}
        className="main-menu-button"
        label="Main Menu"
      />
    </div>
  );
}
