export default function Tutorial8(props) {
  return (
    <div className="tutorial8">
      <h4>Nice Job!</h4>
      <h4>A "blue2" bullet has been placed.</h4>
      <h5>The bullet will be placed in the column according to its color.</h5>
      <h5>
        The placement row is determined by the number of vacancies in that
        column.
      </h5>
      <button className="tutorial-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
