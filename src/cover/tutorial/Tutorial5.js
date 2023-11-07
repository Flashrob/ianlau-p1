export default function Tutorial5(props) {
  return (
    <div className="tutorial5">
      <button className="tutorial-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
      <h5>You can choose pattern card to clear bullet.</h5>
      <h4>This is your pattern card board.</h4>
      <h1>↓</h1>
    </div>
  );
}
