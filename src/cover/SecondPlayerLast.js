import { Button } from "primereact/button";

export default function SecondPlayerLast(props) {
  const { handlePassPlayer, playerName } = props;
  return (
    <div className="main-menu">
      <h1>{playerName[0]} is down! </h1>
      <h2>If you survived this round, you will win! {playerName[1]}</h2>
      <Button
        onClick={handlePassPlayer}
        className="main-menu-button"
        label="Let's GO!!"
      />
    </div>
  );
}
