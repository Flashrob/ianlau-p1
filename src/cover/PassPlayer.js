export default function PassPlayer(props) {
  const {
    erasedBulletSecond,
    erasedBullet,
    playerName,
    handlePassPlayer,
    secondPlayer,
    currRound,
    erasedBulletNextRound,
  } = props;
  const nextPlayer = !secondPlayer;
  let current = 0;
  let nonCurrent = 1;
  if (secondPlayer === true) {
    current = 1;
    nonCurrent = 0;
  }

  let bulletAmount =
    currRound === 1
      ? 10
      : nextPlayer === true
      ? currRound + 2 + erasedBullet
      : currRound + 2 + erasedBulletSecond;

  let erasedRecord =
    secondPlayer === false ? erasedBulletNextRound : erasedBulletSecond;

  return (
    <div className="main-menu">
      <h1>Nice Job {playerName[current]}</h1>You have erased {erasedRecord}{" "}
      bullets this round.
      <br />
      These bullets amount will be your opponent incoming bullet next round.
      <h1>Your turn,{playerName[nonCurrent]}.</h1>
      You will facing {bulletAmount} bullets.
      <button className="main-menu-button" onClick={handlePassPlayer}>
        let's go!!
      </button>
    </div>
  );
}
