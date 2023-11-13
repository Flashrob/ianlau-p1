import { Button } from "primereact/button";

export default function MainMenu(props) {
  const { bestScore, handleStartGame, handleTutorial, handleTwoPlayerMode } =
    props;
  return (
    <div className="main-menu">
      <div className="big-title">
        <h1>Bullet</h1>
        Best score: {bestScore} rounds.
      </div>
      <Button
        className="main-menu-button"
        onClick={handleStartGame}
        label="Play"
      />
      <Button
        className="main-menu-button"
        onClick={handleTutorial}
        label="Tutorial"
      />
      <Button
        className="main-menu-button"
        onClick={handleTwoPlayerMode}
        label="Player Versus Player"
      />
    </div>
  );
}
