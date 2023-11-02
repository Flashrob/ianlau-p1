import BulletBoard from "./BulletBoard";
import "./UpperPlayBoard.css";
import ActionBoard from "./ActionBoard";

export default function UpperPlayBoard(props) {
  const {
    locationInfo,
    chosenAction,
    handleSelectAction,
    handleSelectBullet,
    availableSpace,
    handlePerformAction,
    energy,
  } = props;
  return (
    <div className="upper-play-board">
      <BulletBoard
        locationInfo={locationInfo}
        chosenAction={chosenAction}
        handleSelectBullet={handleSelectBullet}
        availableSpace={availableSpace}
        handlePerformAction={handlePerformAction}
      />
      <ActionBoard
        chosenAction={chosenAction}
        handleSelectAction={handleSelectAction}
        energy={energy}
      />
    </div>
  );
}
