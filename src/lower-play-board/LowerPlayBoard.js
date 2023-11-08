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
    tutorial,
  } = props;
  return (
    <div className="lower-play-board">
      <PatternDisplay
        patternCard={patternCard}
        selectedElement={selectedElement}
        handleSelectPattern={handleSelectPattern}
        popUpMessage={popUpMessage}
        tutorial={tutorial}
      />
      <PlaceBulletButton
        bulletPool={bulletPool}
        handlePlaceBullet={handlePlaceBullet}
        selectedElement={selectedElement}
        handleEndRound={handleEndRound}
        popUpMessage={popUpMessage}
        tutorial={tutorial}
      />
    </div>
  );
}
