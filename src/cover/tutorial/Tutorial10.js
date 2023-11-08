export default function Tutorial10(props) {
  return (
    <div className="tutorial10">
      <h4>Nice Job</h4>
      <h4>A blue 2 star bullet is placed.</h4>
      <h5>When a star bullet is cleared, energy will be recover.</h5>
      <h5>The maximum energy is 7.</h5>
      <button className="tutorial-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
