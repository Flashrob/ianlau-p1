export default function RoundDisplay(props) {
  const { currRound, playerName, secondPlayer } = props;
  let currPlayer = 0;
  secondPlayer && (currPlayer = 1);
  return (
    <div
      className="round-display"
      style={
        secondPlayer
          ? { border: "3px solid #68a1be" }
          : { border: "3px solid #ab47bc" }
      }
    >
      <h5>Round {currRound}</h5>
      <h5>{playerName[currPlayer]}</h5>
    </div>
  );
}
