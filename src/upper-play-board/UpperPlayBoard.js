import BulletBoard from "./BulletBoard";
import "./UpperPlayBoard.css";
import ActionBoard from "./ActionBoard";

export default function UpperPlayBoard(props) {
  const {
    location,
    chosenAction,
    handleSelectAction,
    handleSelectBullet,
    availableSpace,
    handlePerformAction,
  } = props;
  return (
    <div className="upper-play-board">
      <BulletBoard
        location={location}
        chosenAction={chosenAction}
        handleSelectBullet={handleSelectBullet}
        availableSpace={availableSpace}
        handlePerformAction={handlePerformAction}
      />
      <ActionBoard
        chosenAction={chosenAction}
        handleSelectAction={handleSelectAction}
      />
    </div>
  );
}
