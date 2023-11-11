export default function Tutorial6(props) {
  return (
    <div className="tutorial6">
      {" "}
      <h4>This is your "Place Bullet" button.</h4>
      <h1>→</h1>
      <h5>You can place bullets by pressing this button.</h5>
      <h5>The button also shows how many bullets you must place this round.</h5>
      <button className="tutorial-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
