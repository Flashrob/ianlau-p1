import { Button } from "primereact/button";
export default function EndGameButton(props) {
  const { handleEndRound, bulletPool } = props;
  return (
    <Button
      className="place-bullet-button"
      onClick={handleEndRound}
      disabled={bulletPool.length}
      label="End This Round"
    />
  );
}
