import BulletBoard from "./BulletBoard";
import "./UpperPlayBoard.css";
import ActionBoard from "./ActionBoard";

export default function UpperPlayBoard(props) {
  const { location, chosenAction, handleSelectAction, handleSelectBullet } =
    props;
  return (
    <div className="upper-play-board">
      <BulletBoard
        location={location}
        chosenAction={chosenAction}
        handleSelectBullet={handleSelectBullet}
      />
      <ActionBoard
        chosenAction={chosenAction}
        handleSelectAction={handleSelectAction}
      />
    </div>
  );
}
