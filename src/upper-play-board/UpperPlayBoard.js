import BulletBoard from "./BulletBoard";
import "./UpperPlayBoard.css";
import ActionBoard from "./ActionBoard";

export default function UpperPlayBoard(props) {
  const {
    location,
    selectedElement,
    availableSpace,
    energy,
    popUpMessage,
    tutorial,
    handleSelectAction,
    handleSelectBullet,
    handlePerformAction,
    handlePerformPattern,
  } = props;
  return (
    <div className="upper-play-board">
      <BulletBoard
        location={location}
        selectedElement={selectedElement}
        availableSpace={availableSpace}
        handleSelectBullet={handleSelectBullet}
        handlePerformAction={handlePerformAction}
        handlePerformPattern={handlePerformPattern}
      />
      <ActionBoard
        selectedElement={selectedElement}
        energy={energy}
        popUpMessage={popUpMessage}
        tutorial={tutorial}
        handleSelectAction={handleSelectAction}
      />
    </div>
  );
}
