export default function RoundDisplay(props) {
  let currPlayer = 0;
  props.secondPlayer && (currPlayer = 1);
  return (
    <div
      className="round-display"
      style={
        props.secondPlayer
          ? { border: "5px solid Green" }
          : { border: "5px solid blue" }
      }
    >
      <h5>Round {props.currRound}</h5>
      <h5>{props.playerName[currPlayer]}</h5>
    </div>
  );
}
