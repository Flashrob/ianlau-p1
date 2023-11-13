import { Button } from "primereact/button";
export default function RoundBreak(props) {
  const { erasedBullet, currRound, handleStartRound } = props;
  return (
    <div className="main-menu">
      <h1>Nice Job</h1>You have erased {erasedBullet} bullets this round.
      <br />
      You will face {2 + currRound + erasedBullet} bullets next round.
      <Button
        className="main-menu-button"
        onClick={handleStartRound}
        label="Next Round"
      />
    </div>
  );
}
