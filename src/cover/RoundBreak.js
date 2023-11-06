export default function RoundBreak(props) {
  const { erasedBullet, currRound, handleStartRound } = props;
  return (
    <div className="main-menu">
      <h1>Nice Job</h1>You have erased {erasedBullet} bullets this round.
      <br />
      You will face {3 + currRound + erasedBullet} bullets next round
      <button className="main-menu-button" onClick={handleStartRound}>
        Next round
      </button>
    </div>
  );
}
