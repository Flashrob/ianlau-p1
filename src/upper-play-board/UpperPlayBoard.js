import BulletBoard from "./BulletBoard";
import "./UpperPlayBoard.css";
import ActionBoard from "./ActionBoard";

export default function UpperPlayBoard(props) {
  const {
    locationInfo,
    selectedElement,
    handleSelectAction,
    handleSelectBullet,
    availableSpace,
    handlePerformAction,
    energy,
    handlePerformPattern,
    popUpMessage,
    tutorial,
  } = props;
  return (
    <div className="upper-play-board">
      <BulletBoard
        locationInfo={locationInfo}
        selectedElement={selectedElement}
        handleSelectBullet={handleSelectBullet}
        availableSpace={availableSpace}
        handlePerformAction={handlePerformAction}
        handlePerformPattern={handlePerformPattern}
      />
      <ActionBoard
        selectedElement={selectedElement}
        handleSelectAction={handleSelectAction}
        energy={energy}
        popUpMessage={popUpMessage}
        tutorial={tutorial}
      />
    </div>
  );
}
