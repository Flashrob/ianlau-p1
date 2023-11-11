export default function Tutorial4(props) {
  return (
    <div className="tutorial4">
      <h1>↑</h1>
      <h4>This is your HP (health points) bar.</h4>
      <h5>When the HP (health points) reaches zero, the game will end.</h5>
      <button className="tutorial-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
