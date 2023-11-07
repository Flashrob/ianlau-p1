export default function Tutorial3(props) {
  return (
    <div className="tutorial3">
      <h1>→</h1>
      Here is your Action Board
      <p>You can spend your energy to use action.</p>
      <p>Energy are also shown under the action board.</p>
      <button className="main-menu-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
