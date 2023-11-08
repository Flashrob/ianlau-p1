export default function Tutorial6(props) {
  return (
    <div className="tutorial6">
      <button className="tutorial-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
      <h5>You can place bullet by pressing this button</h5>
      <h5>The button also show how many bullet you must place this round.</h5>
      <h4>This is your place bullet button</h4>
      <h1>→</h1>
    </div>
  );
}
