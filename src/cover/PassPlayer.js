import { Button } from "primereact/button";
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

  // these numbers make no sense when reading it.
  // Why not just get the playerNames here directly, then it would be easier to understand. 
  let current = 0;
  let nonCurrent = 1;
  if (secondPlayer) { // since this is seemingly used to determine whose turn it is, why not name it as such? "isSecondPlayerTurn"
    // Generally I think it might be wise to have a single variable telling which player's turn it is, and then select as such.
    current = 1;
    nonCurrent = 0;
  }
  const erasedRecord = secondPlayer ? erasedBulletSecond : erasedBulletNextRound;

  const bulletAmount =
    currRound === 1
      ? 10
      : nextPlayer
      ? currRound + 2 + erasedBullet
      : currRound + 2 + erasedBulletSecond;

  return (
    <div className="main-menu">
      <h1>Nice Job {playerName[current]}</h1>You have erased {erasedRecord}{" "}
      bullets this round.
      <br />
      The number of bullets you erased this round will be part of the incoming
      bullets for your opponent in the next round.
      <h1>Your turn,{playerName[nonCurrent]}.</h1>
      You will be facing {bulletAmount} bullets.
      <Button
        className="main-menu-button"
        onClick={handlePassPlayer}
        label="Let's go!!"
      />
    </div>
  );
}
