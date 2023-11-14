export default function RoundDisplay(props) {
  let currPlayer = 0;
  props.secondPlayer && (currPlayer = 1);
  return (
    <div
      className="round-display"
      style={
        props.secondPlayer
          ? { border: "3px solid #68a1be" }
          : { border: "3px solid #ab47bc" }
      }
    >
      <h5>Round {props.currRound}</h5>
      <h5>{props.playerName[currPlayer]}</h5>
    </div>
  );
}
