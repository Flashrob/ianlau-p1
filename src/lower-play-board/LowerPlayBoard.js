import "./LowerPlayBoard.css";
import PatternDisplay from "./PatternDisplay";
import PlaceBulletButton from "./PlaceBulletButton";

export default function LowerPlayBoard(props) {
  let {
    patternCard,
    locationInfo,
    bulletPool,
    handlePlaceBullet,
    hp,
    selectedElement,
    handleSelectPattern,
  } = props;
  return (
    <div className="lower-play-board">
      <PatternDisplay
        patternCard={patternCard}
        selectedElement={selectedElement}
        handleSelectPattern={handleSelectPattern}
      />
      <PlaceBulletButton
        locationInfo={locationInfo}
        bulletPool={bulletPool}
        handlePlaceBullet={handlePlaceBullet}
        hp={hp}
        selectedElement={selectedElement}
      />
    </div>
  );
}
