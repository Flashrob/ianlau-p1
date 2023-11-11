export default function EndGameButton(props) {
  return (
    <button
      className="place-bullet-button"
      onClick={props.handleEndRound}
      disabled={props.bulletPool.length}
    >
      End This Round
    </button>
  );
}
