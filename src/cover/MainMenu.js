import { Button } from "primereact/button";
import { Card } from "primereact/card";

export default function MainMenu(props) {
  const { bestScore, handleStartGame, handleTutorial, handleTwoPlayerMode } =
    props;
  return (
    <div className="main-menu">
      <Card
        className="big-title"
        style={{ backgroundColor: "var(--primary-color", color: "white" }}
      >
        <h1>Bullet</h1>
        Best score: {bestScore} rounds.
      </Card>
      <Button
        className="main-menu-button"
        onClick={handleStartGame}
        label="Play"
        severity="secondary"
      />
      <Button
        className="main-menu-button"
        onClick={handleTutorial}
        label="Tutorial"
        severity="secondary"
      />
      <Button
        className="main-menu-button"
        onClick={handleTwoPlayerMode}
        label="Player Versus Player"
        severity="secondary"
      />
    </div>
  );
}
