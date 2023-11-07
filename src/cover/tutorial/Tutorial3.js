export default function Tutorial3(props) {
  return (
    <div className="tutorial3">
      <h1>→</h1>
      <h4>This is your Action Board</h4>
      <h5>You can spend your energy to use action.</h5>
      <h5>Energy are also shown under the action board.</h5>
      <button className="main-menu-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
