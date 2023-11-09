export default function RoundDisplay(props) {
  return (
    <div className="round-display">
      <h5>Round {props.currRound}</h5>
      <h5>{props.playerName}</h5>
    </div>
  );
}
