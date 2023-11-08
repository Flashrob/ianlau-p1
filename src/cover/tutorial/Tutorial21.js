export default function Tutorial21(props) {
  return (
    <div className="tutorial21">
      <h1>→</h1>
      <h5>Thrid action let you move 1 bullet up by 1 space using 2 energy.</h5>
      <button className="tutorial-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
