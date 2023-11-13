import { Button } from "primereact/button";
export default function EndGameButton(props) {
  return (
    <Button
      className="place-bullet-button"
      onClick={props.handleEndRound}
      disabled={props.bulletPool.length}
      label="End This Round"
    />
  );
}
