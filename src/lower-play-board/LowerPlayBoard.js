import "./LowerPlayBoard.css";
import PatternDisplay from "./PatternDisplay";
import PlaceBulletButton from "./PlaceBulletButton";

export default function LowerPlayBoard(props) {
  let {
    patternCard,
    bulletPool,
    handlePlaceBullet,
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
        bulletPool={bulletPool}
        handlePlaceBullet={handlePlaceBullet}
        selectedElement={selectedElement}
      />
    </div>
  );
}
