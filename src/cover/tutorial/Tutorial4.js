export default function Tutorial4(props) {
  return (
    <div className="tutorial4">
      <h1>↑</h1>
      <h4>This is your hp bar.</h4>
      <h5>When Hp hits zero, the game will be ended.</h5>
      <button className="main-menu-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
