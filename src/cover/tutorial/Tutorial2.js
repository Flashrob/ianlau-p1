export default function Tutorial2(props) {
  return (
    <div className="tutorial2">
      <h1>↑</h1>
      <h4>Here is your Main Bullet Board. </h4>
      <h5>You will place bullet, move bullet and clear bullet here.</h5>
      <button className="tutorial-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
