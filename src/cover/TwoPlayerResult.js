export default function TwoPlayerResult(props) {
  const { hp, hpSecond, handleReset, playerName } = props;
  let result = <h1>You two are inpressive! You draw.</h1>;
  hp > hpSecond
    ? (result = <h1>Congrats {playerName[0]}. You survived! You Win!!!</h1>)
    : hp < hpSecond &&
      (result = <h1>Congrats {playerName[1]}. You survived! You Win!!!</h1>);
  return (
    <div className="main-menu">
      {result}
      <button onClick={handleReset} className="main-menu-button">
        Main Menu
      </button>
    </div>
  );
}
