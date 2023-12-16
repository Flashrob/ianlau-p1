import { Button } from "primereact/button";

export default function TwoPlayerResult(props) {
  const { hp, hpSecond, handleReset, playerName } = props;
  // alternative syntax
  let result;
  switch (true) {
    case hp > hpSecond:
      result = <h1>Congrats {playerName[0]}. You survived! You Win!!!</h1>
      break;
    case hp < hpSecond:
      result = <h1>Congrats {playerName[1]}. You survived! You Win!!!</h1>
    default:
      result = 
      break;
  }

  // OR
  if (hp !== hpSecond) {
    if (hp > hpSecond) result = <h1>Congrats {playerName[0]}. You survived! You Win!!!</h1>
    if (hp < hpSecond) result = <h1>Congrats {playerName[1]}. You survived! You Win!!!</h1>
  } else {
    result = <h1>You two are inpressive! You draw.</h1>
  }

  // OR
  let player;
  if (hp !== hpSecond) {
    player = hp > hpSecond ? playerName[0] : playerName[1]
  }
  const result = player ? <h1>Congrats {player}. You survived! You Win!!!</h1> : <h1>You two are inpressive! You draw.</h1>

  // Either way, this could be heavily improve by making it possible to dynamically select players and not have different states for first and second player each, but possibly have a more dynamic data structure going on. The hardcoding makes things difficult a lot
  
  return (
    <div className="main-menu">
      {result}
      <Button
        onClick={handleReset}
        className="main-menu-button"
        label="Main Menu"
      />
    </div>
  );
}
