import EndGameButton from "./EndGameButton";
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
    popUpMessage,
    tutorial,
    handleEndRound,
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
      <div className="place-bullet-area">
        <PlaceBulletButton
          bulletPool={bulletPool}
          handlePlaceBullet={handlePlaceBullet}
          selectedElement={selectedElement}
          popUpMessage={popUpMessage}
          tutorial={tutorial}
        />
        {(bulletPool.length === 0 || selectedElement === "EndRound") && (
          <EndGameButton
            bulletPool={bulletPool}
            handleEndRound={handleEndRound}
          />
        )}
      </div>
    </div>
  );
}
