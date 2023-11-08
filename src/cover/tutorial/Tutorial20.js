export default function Tutorial20(props) {
  return (
    <div className="tutorial20">
      <h1>→</h1>
      <h5>
        Second action let you move 1 bullet down to any place you want using 2
        energy.
      </h5>
      <button className="tutorial-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
