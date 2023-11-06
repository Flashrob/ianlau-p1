import "./LowerPlayBoard.css";
import PatternDisplay from "./PatternDisplay";
import PlaceBulletButton from "./PlaceBulletButton";

export default function LowerPlayBoard(props) {
  const {
    patternCard,
    bulletPool,
    handlePlaceBullet,
    selectedElement,
    handleSelectPattern,
    handleEndRound,
    popUpMessage,
  } = props;
  return (
    <div className="lower-play-board">
      <PatternDisplay
        patternCard={patternCard}
        selectedElement={selectedElement}
        handleSelectPattern={handleSelectPattern}
        popUpMessage={popUpMessage}
      />
      <PlaceBulletButton
        bulletPool={bulletPool}
        handlePlaceBullet={handlePlaceBullet}
        selectedElement={selectedElement}
        handleEndRound={handleEndRound}
        popUpMessage={popUpMessage}
      />
    </div>
  );
}
