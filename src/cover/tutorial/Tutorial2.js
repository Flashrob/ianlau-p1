export default function Tutorial2(props) {
  return (
    <div className="tutorial2">
      Here is your Main Bullet Board. You will place bullet, move bullet and
      clear bullet here.
      <button className="main-menu-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
