export default function PassPlayer(props) {
  const {
    erasedBulletSecond,
    erasedBullet,
    playerName,
    handlePassPlayer,
    secondPlayer,
    currRound,
  } = props;
  let current = 0;
  let nonCurrent = 1;
  if (secondPlayer === true) {
    current = 1;
    nonCurrent = 0;
  }

  let bulletAmount =
    currRound === 1
      ? 10
      : !secondPlayer
      ? currRound + 2 + erasedBulletSecond
      : currRound + 2 + erasedBullet;

  return (
    <div className="main-menu">
      <h1>Nice Job {playerName[current]}</h1>You have erased {erasedBullet}
      bullets this round.
      <br />
      These bullets amount will be your opponent incoming bullet next round.
      <h1>Your turn,{playerName[nonCurrent]}.</h1>
      you will facing {bulletAmount} bullets.
      <button className="main-menu-button" onClick={handlePassPlayer}>
        let's go!!
      </button>
    </div>
  );
}
