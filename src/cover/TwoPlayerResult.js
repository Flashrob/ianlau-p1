export default function TwoPlayerResult(props) {
  const { handleReset } = props;
  return (
    <div className="main-menu">
      <button onClick={handleReset} className="main-menu-button">
        Main Menu
      </button>
    </div>
  );
}
