export default function Tutorial5(props) {
  return (
    <div className="tutorial5">
      <button className="tutorial-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
      <h5>You can choose a pattern card to clear bullets.</h5>
      <h4>This is your Pattern Card Board.</h4>
      <h1>↓</h1>
    </div>
  );
}
