export default function MainMenu(props) {
  const { bestScore, handleStartGame, handleTutorial } = props;
  return (
    <div className="main-menu">
      <div className="big-title">
        <h1>Bullet</h1>
        Best score: {bestScore} rounds.
      </div>
      <button className="main-menu-button" onClick={handleStartGame}>
        Play
      </button>
      <button className="main-menu-button" onClick={handleTutorial}>
        Tutorial
      </button>
      <button className="main-menu-button">Player Versus Player</button>
    </div>
  );
}
